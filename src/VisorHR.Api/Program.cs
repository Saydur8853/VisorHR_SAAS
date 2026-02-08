using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using VisorHR.Api.Data;
using VisorHR.Api.Dtos;
using VisorHR.Api.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Logging.AddDebug();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
    var serverVersion = new MySqlServerVersion(new Version(8, 0, 34));
    options.UseMySql(connectionString, serverVersion);
});

builder.Services
    .AddIdentity<ApplicationUser, IdentityRole>(options =>
    {
        options.User.RequireUniqueEmail = true;
        options.Password.RequireDigit = false;
        options.Password.RequireLowercase = false;
        options.Password.RequireUppercase = false;
        options.Password.RequireNonAlphanumeric = false;
        options.Password.RequiredLength = 6;
    })
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultTokenProviders();

builder.Services.ConfigureApplicationCookie(options =>
{
    options.Events.OnRedirectToLogin = context =>
    {
        context.Response.StatusCode = StatusCodes.Status401Unauthorized;
        return Task.CompletedTask;
    };
    options.Events.OnRedirectToAccessDenied = context =>
    {
        context.Response.StatusCode = StatusCodes.Status403Forbidden;
        return Task.CompletedTask;
    };
});

builder.Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(options =>
    {
        var jwtSection = builder.Configuration.GetSection("Jwt");
        var key = Encoding.UTF8.GetBytes(jwtSection["Key"]!);
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtSection["Issuer"],
            ValidAudience = jwtSection["Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ClockSkew = TimeSpan.FromMinutes(2)
        };
    });

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("SuperAdminOnly", policy => policy.RequireRole("SuperAdmin"));
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("DevCors", policy =>
    {
        var origins = builder.Configuration.GetSection("Cors:Origins").Get<string[]>() ?? Array.Empty<string>();
        policy.WithOrigins(origins).AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    db.Database.Migrate();
}

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseDefaultFiles();
app.UseStaticFiles();
app.UseHttpsRedirection();
app.UseCors("DevCors");
app.UseAuthentication();
app.UseAuthorization();

app.MapPost("/auth/register", async (
    RegisterRequest request,
    UserManager<ApplicationUser> userManager,
    RoleManager<IdentityRole> roleManager,
    ApplicationDbContext dbContext,
    IConfiguration config) =>
{
    if (string.IsNullOrWhiteSpace(request.Name) ||
        string.IsNullOrWhiteSpace(request.PhoneNumber) ||
        string.IsNullOrWhiteSpace(request.Email) ||
        string.IsNullOrWhiteSpace(request.Password))
    {
        return Results.BadRequest(new { message = "Name, phone number, email, and password are required." });
    }

    var hasUsers = await userManager.Users.AnyAsync();
    Invitation? invite = null;

    if (!hasUsers)
    {
        if (!await roleManager.RoleExistsAsync("SuperAdmin"))
        {
            await roleManager.CreateAsync(new IdentityRole("SuperAdmin"));
        }
    }
    else
    {
        invite = await dbContext.Invitations
            .Where(i => i.Email == request.Email && i.Status == InvitationStatus.Pending)
            .OrderByDescending(i => i.CreatedAt)
            .FirstOrDefaultAsync();

        if (invite is null || invite.ExpiresAt <= DateTime.UtcNow)
        {
            return Results.BadRequest(new { message = "Invitation for this email is missing or expired." });
        }
    }

    var user = new ApplicationUser
    {
        UserName = request.Email,
        Email = request.Email,
        Name = request.Name,
        PhoneNumber = request.PhoneNumber,
        EmployeeCode = string.IsNullOrWhiteSpace(request.EmployeeCode) ? null : request.EmployeeCode.Trim(),
        ProfilePhotoUrl = string.IsNullOrWhiteSpace(request.ProfilePhotoUrl) ? null : request.ProfilePhotoUrl.Trim()
    };

    var createResult = await userManager.CreateAsync(user, request.Password);
    if (!createResult.Succeeded)
    {
        var message = string.Join(" ", createResult.Errors.Select(e => e.Description));
        return Results.BadRequest(new { message });
    }

    if (!hasUsers)
    {
        await userManager.AddToRoleAsync(user, "SuperAdmin");
    }
    else if (invite is not null)
    {
        invite.Status = InvitationStatus.Accepted;
        invite.AcceptedAt = DateTime.UtcNow;
        await dbContext.SaveChangesAsync();
    }

    var token = GenerateJwtToken(user, await userManager.GetRolesAsync(user), config);
    return Results.Ok(token);
});

app.MapPost("/auth/login", async (
    LoginRequest request,
    SignInManager<ApplicationUser> signInManager,
    UserManager<ApplicationUser> userManager,
    IConfiguration config) =>
{
    var user = await userManager.FindByEmailAsync(request.Email);
    if (user is null)
    {
        return Results.Unauthorized();
    }

    var passwordCheck = await signInManager.CheckPasswordSignInAsync(user, request.Password, false);
    if (!passwordCheck.Succeeded)
    {
        return Results.Unauthorized();
    }

    var token = GenerateJwtToken(user, await userManager.GetRolesAsync(user), config);
    return Results.Ok(token);
});

app.MapPost("/login", async (
    LegacyLoginRequest request,
    SignInManager<ApplicationUser> signInManager,
    UserManager<ApplicationUser> userManager,
    IConfiguration config) =>
{
    if (string.IsNullOrWhiteSpace(request.Username) || string.IsNullOrWhiteSpace(request.Password))
    {
        return Results.BadRequest(new { ok = false, message = "Missing credentials." });
    }

    var user = await userManager.FindByEmailAsync(request.Username);
    if (user is null)
    {
        return Results.Unauthorized();
    }

    var passwordCheck = await signInManager.CheckPasswordSignInAsync(user, request.Password, false);
    if (!passwordCheck.Succeeded)
    {
        return Results.Unauthorized();
    }

    var token = GenerateJwtToken(user, await userManager.GetRolesAsync(user), config);
    return Results.Ok(new
    {
        ok = true,
        token = token.Token,
        expiresAtUtc = token.ExpiresAtUtc,
        roles = token.Roles
    });
});

app.MapPost("/invitations", async (
    InviteRequest request,
    ClaimsPrincipal principal,
    UserManager<ApplicationUser> userManager,
    ApplicationDbContext dbContext) =>
{
    if (string.IsNullOrWhiteSpace(request.Email))
    {
        return Results.BadRequest(new { message = "Email is required." });
    }

    var normalizedEmail = request.Email.Trim().ToLowerInvariant();
    var existingUser = await userManager.FindByEmailAsync(normalizedEmail);
    if (existingUser is not null)
    {
        return Results.BadRequest(new { message = $"Already user this email - {normalizedEmail}" });
    }

    var inviter = await userManager.GetUserAsync(principal);
    if (inviter is null)
    {
        return Results.BadRequest(new { message = "Inviter not found." });
    }

    var pendingInvite = await dbContext.Invitations
        .Where(i => i.Email.ToLower() == normalizedEmail && i.Status == InvitationStatus.Pending)
        .OrderByDescending(i => i.CreatedAt)
        .FirstOrDefaultAsync();
    if (pendingInvite is not null && pendingInvite.ExpiresAt > DateTime.UtcNow)
    {
        return Results.BadRequest(new { message = $"Already invited this email - {normalizedEmail}" });
    }

    var invite = new Invitation
    {
        Id = Guid.NewGuid(),
        Email = normalizedEmail,
        InvitedByUserId = inviter.Id,
        Status = InvitationStatus.Pending,
        CreatedAt = DateTime.UtcNow,
        ExpiresAt = DateTime.UtcNow.AddDays(request.ExpiresInDays ?? 7)
    };

    dbContext.Invitations.Add(invite);
    await dbContext.SaveChangesAsync();

    return Results.Ok(new
    {
        invite.Id,
        invite.Email,
        invite.ExpiresAt
    });
}).RequireAuthorization("SuperAdminOnly");

app.MapGet("/auth/me", async (
    ClaimsPrincipal principal,
    UserManager<ApplicationUser> userManager) =>
{
    var user = await userManager.GetUserAsync(principal);
    if (user is null)
    {
        return Results.Unauthorized();
    }

    var roles = await userManager.GetRolesAsync(user);
    return Results.Ok(new
    {
        user.Id,
        user.Email,
        user.Name,
        user.PhoneNumber,
        user.EmployeeCode,
        user.ProfilePhotoUrl,
        Roles = roles
    });
}).RequireAuthorization();

app.MapPut("/auth/me", async (
    ClaimsPrincipal principal,
    UserManager<ApplicationUser> userManager,
    UpdateProfileRequest request) =>
{
    if (string.IsNullOrWhiteSpace(request.Name) || string.IsNullOrWhiteSpace(request.PhoneNumber))
    {
        return Results.BadRequest(new { message = "Name and phone number are required." });
    }

    var user = await userManager.GetUserAsync(principal);
    if (user is null)
    {
        return Results.Unauthorized();
    }

    user.Name = request.Name.Trim();
    user.PhoneNumber = request.PhoneNumber.Trim();
    user.EmployeeCode = string.IsNullOrWhiteSpace(request.EmployeeCode) ? null : request.EmployeeCode.Trim();
    user.ProfilePhotoUrl = string.IsNullOrWhiteSpace(request.ProfilePhotoUrl) ? null : request.ProfilePhotoUrl.Trim();

    var updateResult = await userManager.UpdateAsync(user);
    if (!updateResult.Succeeded)
    {
        var message = string.Join(" ", updateResult.Errors.Select(e => e.Description));
        return Results.BadRequest(new { message });
    }

    var roles = await userManager.GetRolesAsync(user);
    return Results.Ok(new
    {
        user.Id,
        user.Email,
        user.Name,
        user.PhoneNumber,
        user.EmployeeCode,
        user.ProfilePhotoUrl,
        Roles = roles
    });
}).RequireAuthorization();

app.MapGet("/company-info", async (ApplicationDbContext dbContext) =>
{
    var items = await dbContext.CompanyInfos
        .OrderBy(c => c.CompanyId)
        .ToListAsync();
    return Results.Ok(new { items });
}).RequireAuthorization();

app.MapGet("/company-info/{id:long}", async (long id, ApplicationDbContext dbContext) =>
{
    var item = await dbContext.CompanyInfos.FindAsync(id);
    return item is null
        ? Results.NotFound(new { message = "Company info not found." })
        : Results.Ok(item);
}).RequireAuthorization();

app.MapPost("/company-info", async (
    CompanyInfoRequest request,
    ClaimsPrincipal principal,
    UserManager<ApplicationUser> userManager,
    ApplicationDbContext dbContext) =>
{
    if (string.IsNullOrWhiteSpace(request.CompanyName))
    {
        return Results.BadRequest(new { message = "Company name is required." });
    }

    var now = DateTime.UtcNow;
    var currentUser = await userManager.GetUserAsync(principal);
    var currentName = currentUser?.Name ?? currentUser?.Email ?? currentUser?.UserName;
    var entity = new CompanyInfo
    {
        CompanyName = request.CompanyName.Trim(),
        ShortName = string.IsNullOrWhiteSpace(request.ShortName) ? null : request.ShortName.Trim(),
        CompanyNameBang = string.IsNullOrWhiteSpace(request.CompanyNameBang) ? null : request.CompanyNameBang.Trim(),
        Address = string.IsNullOrWhiteSpace(request.Address) ? null : request.Address.Trim(),
        AddressBang = string.IsNullOrWhiteSpace(request.AddressBang) ? null : request.AddressBang.Trim(),
        CompanyEmail = string.IsNullOrWhiteSpace(request.CompanyEmail) ? null : request.CompanyEmail.Trim(),
        CompanyPhone = string.IsNullOrWhiteSpace(request.CompanyPhone) ? null : request.CompanyPhone.Trim(),
        CompanyLogo = string.IsNullOrWhiteSpace(request.CompanyLogo) ? null : request.CompanyLogo.Trim(),
        Remarks = string.IsNullOrWhiteSpace(request.Remarks) ? null : request.Remarks.Trim(),
        CreatedBy = currentName,
        CreatedAt = now,
        UpdatedBy = currentName,
        UpdatedAt = now
    };

    dbContext.CompanyInfos.Add(entity);
    await dbContext.SaveChangesAsync();
    return Results.Ok(new { ok = true, item = entity });
}).RequireAuthorization();

app.MapPut("/company-info/{id:long}", async (
    long id,
    CompanyInfoRequest request,
    ClaimsPrincipal principal,
    UserManager<ApplicationUser> userManager,
    ApplicationDbContext dbContext) =>
{
    if (string.IsNullOrWhiteSpace(request.CompanyName))
    {
        return Results.BadRequest(new { message = "Company name is required." });
    }

    var entity = await dbContext.CompanyInfos.FindAsync(id);
    if (entity is null)
    {
        return Results.NotFound(new { message = "Company info not found." });
    }

    entity.CompanyName = request.CompanyName.Trim();
    entity.ShortName = string.IsNullOrWhiteSpace(request.ShortName) ? null : request.ShortName.Trim();
    entity.CompanyNameBang = string.IsNullOrWhiteSpace(request.CompanyNameBang) ? null : request.CompanyNameBang.Trim();
    entity.Address = string.IsNullOrWhiteSpace(request.Address) ? null : request.Address.Trim();
    entity.AddressBang = string.IsNullOrWhiteSpace(request.AddressBang) ? null : request.AddressBang.Trim();
    entity.CompanyEmail = string.IsNullOrWhiteSpace(request.CompanyEmail) ? null : request.CompanyEmail.Trim();
    entity.CompanyPhone = string.IsNullOrWhiteSpace(request.CompanyPhone) ? null : request.CompanyPhone.Trim();
    entity.CompanyLogo = string.IsNullOrWhiteSpace(request.CompanyLogo) ? null : request.CompanyLogo.Trim();
    entity.Remarks = string.IsNullOrWhiteSpace(request.Remarks) ? null : request.Remarks.Trim();
    var currentUser = await userManager.GetUserAsync(principal);
    var currentName = currentUser?.Name ?? currentUser?.Email ?? currentUser?.UserName;
    entity.UpdatedBy = currentName;
    entity.UpdatedAt = DateTime.UtcNow;

    await dbContext.SaveChangesAsync();
    return Results.Ok(new { ok = true, item = entity });
}).RequireAuthorization();

app.MapDelete("/company-info/{id:long}", async (
    long id,
    ClaimsPrincipal principal,
    UserManager<ApplicationUser> userManager,
    ApplicationDbContext dbContext) =>
{
    var entity = await dbContext.CompanyInfos.FindAsync(id);
    if (entity is null)
    {
        return Results.NotFound(new { message = "Company info not found." });
    }
    var currentUser = await userManager.GetUserAsync(principal);
    var currentName = currentUser?.Name ?? currentUser?.Email ?? currentUser?.UserName;
    entity.UpdatedBy = currentName;
    entity.UpdatedAt = DateTime.UtcNow;
    dbContext.CompanyInfos.Remove(entity);
    await dbContext.SaveChangesAsync();
    return Results.Ok(new { ok = true });
}).RequireAuthorization();

app.MapGet("/company-info/public", async (ApplicationDbContext dbContext) =>
{
    var latest = await dbContext.CompanyInfos
        .OrderByDescending(c => c.CompanyId)
        .Select(c => new { c.CompanyId, c.CompanyLogo, c.CompanyName })
        .FirstOrDefaultAsync();
    return Results.Ok(new { item = latest });
});

app.MapGet("/dashboard", async (ApplicationDbContext dbContext) =>
{
    var items = await dbContext.Dashboards
        .OrderByDescending(d => d.Id)
        .ToListAsync();
    return Results.Ok(new { items });
}).RequireAuthorization();

app.MapGet("/dashboard/latest", async (ApplicationDbContext dbContext) =>
{
    var latest = await dbContext.Dashboards
        .OrderByDescending(d => d.Id)
        .FirstOrDefaultAsync();
    return Results.Ok(new { item = latest });
}).RequireAuthorization();

app.MapPost("/dashboard", async (DashboardRequest request, ApplicationDbContext dbContext) =>
{
    var entity = new Dashboard
    {
        TotalEmployees = request.TotalEmployees,
        ActiveEmployees = request.ActiveEmployees,
        InactiveEmployees = request.InactiveEmployees,
        NewJoiners = request.NewJoiners,
        TotalClose = request.TotalClose,
        Release = request.Release,
        Resign = request.Resign,
        TotalWorker = request.TotalWorker,
        TotalStaff = request.TotalStaff,
        TotalOfficer = request.TotalOfficer,
        TotalMale = request.TotalMale,
        TotalFemale = request.TotalFemale,
        CashPayEmp = request.CashPayEmp,
        BankPayEmp = request.BankPayEmp,
        MobilePayEmp = request.MobilePayEmp,
        TaxHolder = request.TaxHolder,
        QuarterHolder = request.QuarterHolder,
        Increment = request.Increment,
        Leave = request.Leave,
        OnMaternity = request.OnMaternity,
        TotalDepartment = request.TotalDepartment,
        TotalSection = request.TotalSection,
        TotalUnit = request.TotalUnit,
        TotalFloor = request.TotalFloor,
        TotalDesignations = request.TotalDesignations,
        TotalContractualHolder = request.TotalContractualHolder,
        TotalNonContractualHolder = request.TotalNonContractualHolder,
        BloodGroupAPlus = request.BloodGroupAPlus,
        BloodGroupAMinus = request.BloodGroupAMinus,
        BloodGroupBPlus = request.BloodGroupBPlus,
        BloodGroupBMinus = request.BloodGroupBMinus,
        BloodGroupOPlus = request.BloodGroupOPlus,
        BloodGroupOMinus = request.BloodGroupOMinus,
        BloodGroupAbPlus = request.BloodGroupAbPlus,
        BloodGroupAbMinus = request.BloodGroupAbMinus,
        TotalShift = request.TotalShift
    };

    dbContext.Dashboards.Add(entity);
    await dbContext.SaveChangesAsync();
    return Results.Ok(new { ok = true, item = entity });
}).RequireAuthorization();

app.MapPut("/dashboard/{id:long}", async (long id, DashboardRequest request, ApplicationDbContext dbContext) =>
{
    var entity = await dbContext.Dashboards.FindAsync(id);
    if (entity is null)
    {
        return Results.NotFound(new { message = "Dashboard not found." });
    }

    entity.TotalEmployees = request.TotalEmployees;
    entity.ActiveEmployees = request.ActiveEmployees;
    entity.InactiveEmployees = request.InactiveEmployees;
    entity.NewJoiners = request.NewJoiners;
    entity.TotalClose = request.TotalClose;
    entity.Release = request.Release;
    entity.Resign = request.Resign;
    entity.TotalWorker = request.TotalWorker;
    entity.TotalStaff = request.TotalStaff;
    entity.TotalOfficer = request.TotalOfficer;
    entity.TotalMale = request.TotalMale;
    entity.TotalFemale = request.TotalFemale;
    entity.CashPayEmp = request.CashPayEmp;
    entity.BankPayEmp = request.BankPayEmp;
    entity.MobilePayEmp = request.MobilePayEmp;
    entity.TaxHolder = request.TaxHolder;
    entity.QuarterHolder = request.QuarterHolder;
    entity.Increment = request.Increment;
    entity.Leave = request.Leave;
    entity.OnMaternity = request.OnMaternity;
    entity.TotalDepartment = request.TotalDepartment;
    entity.TotalSection = request.TotalSection;
    entity.TotalUnit = request.TotalUnit;
    entity.TotalFloor = request.TotalFloor;
    entity.TotalDesignations = request.TotalDesignations;
    entity.TotalContractualHolder = request.TotalContractualHolder;
    entity.TotalNonContractualHolder = request.TotalNonContractualHolder;
    entity.BloodGroupAPlus = request.BloodGroupAPlus;
    entity.BloodGroupAMinus = request.BloodGroupAMinus;
    entity.BloodGroupBPlus = request.BloodGroupBPlus;
    entity.BloodGroupBMinus = request.BloodGroupBMinus;
    entity.BloodGroupOPlus = request.BloodGroupOPlus;
    entity.BloodGroupOMinus = request.BloodGroupOMinus;
    entity.BloodGroupAbPlus = request.BloodGroupAbPlus;
    entity.BloodGroupAbMinus = request.BloodGroupAbMinus;
    entity.TotalShift = request.TotalShift;

    await dbContext.SaveChangesAsync();
    return Results.Ok(new { ok = true, item = entity });
}).RequireAuthorization();

app.MapDelete("/dashboard/{id:long}", async (long id, ApplicationDbContext dbContext) =>
{
    var entity = await dbContext.Dashboards.FindAsync(id);
    if (entity is null)
    {
        return Results.NotFound(new { message = "Dashboard not found." });
    }
    dbContext.Dashboards.Remove(entity);
    await dbContext.SaveChangesAsync();
    return Results.Ok(new { ok = true });
}).RequireAuthorization();

app.Run();

static AuthResponse GenerateJwtToken(ApplicationUser user, IList<string> roles, IConfiguration config)
{
    var jwtSection = config.GetSection("Jwt");
    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSection["Key"]!));

    var claims = new List<Claim>
    {
        new(JwtRegisteredClaimNames.Sub, user.Id),
        new(JwtRegisteredClaimNames.Email, user.Email ?? string.Empty),
        new(ClaimTypes.Name, user.UserName ?? string.Empty)
    };

    claims.AddRange(roles.Select(role => new Claim(ClaimTypes.Role, role)));

    var token = new JwtSecurityToken(
        issuer: jwtSection["Issuer"],
        audience: jwtSection["Audience"],
        claims: claims,
        expires: DateTime.UtcNow.AddHours(6),
        signingCredentials: new SigningCredentials(key, SecurityAlgorithms.HmacSha256));

    return new AuthResponse
    {
        Token = new JwtSecurityTokenHandler().WriteToken(token),
        ExpiresAtUtc = token.ValidTo,
        Roles = roles.ToArray()
    };
}

record LegacyLoginRequest(string? Username, string? Password);
