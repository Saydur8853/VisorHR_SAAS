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
    }
}
