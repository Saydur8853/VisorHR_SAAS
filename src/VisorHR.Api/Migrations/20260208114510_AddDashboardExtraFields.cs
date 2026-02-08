using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VisorHR.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddDashboardExtraFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "blood_group_a_minus",
                table: "dashboard",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "blood_group_a_plus",
                table: "dashboard",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "blood_group_ab_minus",
                table: "dashboard",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "blood_group_ab_plus",
                table: "dashboard",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "blood_group_b_minus",
                table: "dashboard",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "blood_group_b_plus",
                table: "dashboard",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "blood_group_o_minus",
                table: "dashboard",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "blood_group_o_plus",
                table: "dashboard",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "total_contractual_holder",
                table: "dashboard",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "total_department",
                table: "dashboard",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "total_designations",
                table: "dashboard",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "total_floor",
                table: "dashboard",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "total_non_contractual_holder",
                table: "dashboard",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "total_section",
                table: "dashboard",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "total_shift",
                table: "dashboard",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "total_unit",
                table: "dashboard",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "blood_group_a_minus",
                table: "dashboard");

            migrationBuilder.DropColumn(
                name: "blood_group_a_plus",
                table: "dashboard");

            migrationBuilder.DropColumn(
                name: "blood_group_ab_minus",
                table: "dashboard");

            migrationBuilder.DropColumn(
                name: "blood_group_ab_plus",
                table: "dashboard");

            migrationBuilder.DropColumn(
                name: "blood_group_b_minus",
                table: "dashboard");

            migrationBuilder.DropColumn(
                name: "blood_group_b_plus",
                table: "dashboard");

            migrationBuilder.DropColumn(
                name: "blood_group_o_minus",
                table: "dashboard");

            migrationBuilder.DropColumn(
                name: "blood_group_o_plus",
                table: "dashboard");

            migrationBuilder.DropColumn(
                name: "total_contractual_holder",
                table: "dashboard");

            migrationBuilder.DropColumn(
                name: "total_department",
                table: "dashboard");

            migrationBuilder.DropColumn(
                name: "total_designations",
                table: "dashboard");

            migrationBuilder.DropColumn(
                name: "total_floor",
                table: "dashboard");

            migrationBuilder.DropColumn(
                name: "total_non_contractual_holder",
                table: "dashboard");

            migrationBuilder.DropColumn(
                name: "total_section",
                table: "dashboard");

            migrationBuilder.DropColumn(
                name: "total_shift",
                table: "dashboard");

            migrationBuilder.DropColumn(
                name: "total_unit",
                table: "dashboard");
        }
    }
}
