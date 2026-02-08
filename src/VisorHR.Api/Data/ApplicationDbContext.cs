using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using VisorHR.Api.Models;

namespace VisorHR.Api.Data;

public sealed class ApplicationDbContext : IdentityDbContext<ApplicationUser>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Invitation> Invitations => Set<Invitation>();
    public DbSet<CompanyInfo> CompanyInfos => Set<CompanyInfo>();
    public DbSet<Dashboard> Dashboards => Set<Dashboard>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<ApplicationUser>(entity => entity.ToTable("Users"));
        builder.Entity<IdentityRole>(entity => entity.ToTable("Roles"));
        builder.Entity<IdentityUserRole<string>>(entity => entity.ToTable("UserRoles"));
        builder.Entity<IdentityUserClaim<string>>(entity => entity.ToTable("UserClaims"));
        builder.Entity<IdentityUserLogin<string>>(entity => entity.ToTable("UserLogins"));
        builder.Entity<IdentityUserToken<string>>(entity => entity.ToTable("UserTokens"));
        builder.Entity<IdentityRoleClaim<string>>(entity => entity.ToTable("RoleClaims"));

        builder.Entity<Invitation>(entity =>
        {
            entity.HasKey(i => i.Id);
            entity.Property(i => i.Email).HasMaxLength(256).IsRequired();
            entity.HasIndex(i => new { i.Email, i.Status });
            entity.HasOne(i => i.InvitedByUser)
                .WithMany()
                .HasForeignKey(i => i.InvitedByUserId)
                .OnDelete(DeleteBehavior.Restrict);
        });

        builder.Entity<CompanyInfo>(entity =>
        {
            entity.ToTable("company_info");
            entity.HasKey(c => c.CompanyId);
            entity.Property(c => c.CompanyId)
                .HasColumnName("company_id")
                .ValueGeneratedOnAdd();
            entity.Property(c => c.CompanyName)
                .HasColumnName("company_name")
                .HasMaxLength(64)
                .IsRequired();
            entity.Property(c => c.ShortName)
                .HasColumnName("short_name")
                .HasMaxLength(10);
            entity.Property(c => c.CompanyNameBang)
                .HasColumnName("company_name_bang")
                .HasMaxLength(64);
            entity.Property(c => c.Address)
                .HasColumnName("address")
                .HasMaxLength(64);
            entity.Property(c => c.AddressBang)
                .HasColumnName("address_bang")
                .HasMaxLength(64);
            entity.Property(c => c.CompanyEmail)
                .HasColumnName("company_email")
                .HasMaxLength(254);
            entity.Property(c => c.CompanyPhone)
                .HasColumnName("company_phone")
                .HasMaxLength(20);
            entity.Property(c => c.CompanyLogo)
                .HasColumnName("company_logo")
                .HasColumnType("longtext");
            entity.Property(c => c.Remarks)
                .HasColumnName("remarks")
                .HasMaxLength(32);
            entity.Property(c => c.CreatedBy)
                .HasColumnName("created_by")
                .HasMaxLength(150);
            entity.Property(c => c.CreatedAt)
                .HasColumnName("created_at");
            entity.Property(c => c.UpdatedBy)
                .HasColumnName("updated_by")
                .HasMaxLength(150);
            entity.Property(c => c.UpdatedAt)
                .HasColumnName("updated_at");
        });

        builder.Entity<Dashboard>(entity =>
        {
            entity.ToTable("dashboard");
            entity.HasKey(d => d.Id);
            entity.Property(d => d.Id)
                .HasColumnName("id")
                .ValueGeneratedOnAdd();
            entity.Property(d => d.TotalEmployees).HasColumnName("total_employees");
            entity.Property(d => d.ActiveEmployees).HasColumnName("active_employees");
            entity.Property(d => d.InactiveEmployees).HasColumnName("inactive_employees");
            entity.Property(d => d.NewJoiners).HasColumnName("new_joiners");
            entity.Property(d => d.TotalClose).HasColumnName("total_close");
            entity.Property(d => d.Release).HasColumnName("release");
            entity.Property(d => d.Resign).HasColumnName("resign");
            entity.Property(d => d.TotalWorker).HasColumnName("total_worker");
            entity.Property(d => d.TotalStaff).HasColumnName("total_staff");
            entity.Property(d => d.TotalOfficer).HasColumnName("total_officer");
            entity.Property(d => d.TotalMale).HasColumnName("total_male");
            entity.Property(d => d.TotalFemale).HasColumnName("total_female");
            entity.Property(d => d.CashPayEmp).HasColumnName("cash_pay_emp");
            entity.Property(d => d.BankPayEmp).HasColumnName("bank_pay_emp");
            entity.Property(d => d.MobilePayEmp).HasColumnName("mobile_pay_emp");
            entity.Property(d => d.TaxHolder).HasColumnName("tax_holder");
            entity.Property(d => d.QuarterHolder).HasColumnName("quarter_holder");
            entity.Property(d => d.Increment).HasColumnName("increment");
            entity.Property(d => d.Leave).HasColumnName("leave");
            entity.Property(d => d.OnMaternity).HasColumnName("on_maternity");
            entity.Property(d => d.TotalDepartment).HasColumnName("total_department");
            entity.Property(d => d.TotalSection).HasColumnName("total_section");
            entity.Property(d => d.TotalUnit).HasColumnName("total_unit");
            entity.Property(d => d.TotalFloor).HasColumnName("total_floor");
            entity.Property(d => d.TotalDesignations).HasColumnName("total_designations");
            entity.Property(d => d.TotalContractualHolder).HasColumnName("total_contractual_holder");
            entity.Property(d => d.TotalNonContractualHolder).HasColumnName("total_non_contractual_holder");
            entity.Property(d => d.BloodGroupAPlus).HasColumnName("blood_group_a_plus");
            entity.Property(d => d.BloodGroupAMinus).HasColumnName("blood_group_a_minus");
            entity.Property(d => d.BloodGroupBPlus).HasColumnName("blood_group_b_plus");
            entity.Property(d => d.BloodGroupBMinus).HasColumnName("blood_group_b_minus");
            entity.Property(d => d.BloodGroupOPlus).HasColumnName("blood_group_o_plus");
            entity.Property(d => d.BloodGroupOMinus).HasColumnName("blood_group_o_minus");
            entity.Property(d => d.BloodGroupAbPlus).HasColumnName("blood_group_ab_plus");
            entity.Property(d => d.BloodGroupAbMinus).HasColumnName("blood_group_ab_minus");
            entity.Property(d => d.TotalShift).HasColumnName("total_shift");
        });
    }
}
