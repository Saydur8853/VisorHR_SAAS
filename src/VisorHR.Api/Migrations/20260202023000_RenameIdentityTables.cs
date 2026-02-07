using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VisorHR.Api.Migrations;

public partial class RenameIdentityTables : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.RenameTable(name: "AspNetRoles", newName: "Roles");
        migrationBuilder.RenameTable(name: "AspNetUsers", newName: "Users");
        migrationBuilder.RenameTable(name: "AspNetRoleClaims", newName: "RoleClaims");
        migrationBuilder.RenameTable(name: "AspNetUserClaims", newName: "UserClaims");
        migrationBuilder.RenameTable(name: "AspNetUserLogins", newName: "UserLogins");
        migrationBuilder.RenameTable(name: "AspNetUserRoles", newName: "UserRoles");
        migrationBuilder.RenameTable(name: "AspNetUserTokens", newName: "UserTokens");
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.RenameTable(name: "Roles", newName: "AspNetRoles");
        migrationBuilder.RenameTable(name: "Users", newName: "AspNetUsers");
        migrationBuilder.RenameTable(name: "RoleClaims", newName: "AspNetRoleClaims");
        migrationBuilder.RenameTable(name: "UserClaims", newName: "AspNetUserClaims");
        migrationBuilder.RenameTable(name: "UserLogins", newName: "AspNetUserLogins");
        migrationBuilder.RenameTable(name: "UserRoles", newName: "AspNetUserRoles");
        migrationBuilder.RenameTable(name: "UserTokens", newName: "AspNetUserTokens");
    }
}
