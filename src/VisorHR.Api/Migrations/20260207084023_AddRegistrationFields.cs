using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VisorHR.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddRegistrationFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "EmployeeCode",
                table: "Users",
                type: "longtext",
                nullable: true)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Users",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EmployeeCode",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Users");
        }
    }
}
