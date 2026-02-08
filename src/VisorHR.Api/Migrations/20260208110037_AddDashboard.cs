using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VisorHR.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddDashboard : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "dashboard",
                columns: table => new
                {
                    id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    total_employees = table.Column<int>(type: "int", nullable: true),
                    active_employees = table.Column<int>(type: "int", nullable: true),
                    inactive_employees = table.Column<int>(type: "int", nullable: true),
                    new_joiners = table.Column<int>(type: "int", nullable: true),
                    total_close = table.Column<int>(type: "int", nullable: true),
                    release = table.Column<int>(type: "int", nullable: true),
                    resign = table.Column<int>(type: "int", nullable: true),
                    total_worker = table.Column<int>(type: "int", nullable: true),
                    total_staff = table.Column<int>(type: "int", nullable: true),
                    total_officer = table.Column<int>(type: "int", nullable: true),
                    total_male = table.Column<int>(type: "int", nullable: true),
                    total_female = table.Column<int>(type: "int", nullable: true),
                    cash_pay_emp = table.Column<int>(type: "int", nullable: true),
                    bank_pay_emp = table.Column<int>(type: "int", nullable: true),
                    mobile_pay_emp = table.Column<int>(type: "int", nullable: true),
                    tax_holder = table.Column<int>(type: "int", nullable: true),
                    quarter_holder = table.Column<int>(type: "int", nullable: true),
                    increment = table.Column<int>(type: "int", nullable: true),
                    leave = table.Column<string>(type: "varchar(32)", maxLength: 32, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    on_maternity = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_dashboard", x => x.id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "dashboard");
        }
    }
}
