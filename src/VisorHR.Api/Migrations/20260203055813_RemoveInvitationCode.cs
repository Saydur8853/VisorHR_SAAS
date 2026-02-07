using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VisorHR.Api.Migrations
{
    /// <inheritdoc />
    public partial class RemoveInvitationCode : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Invitations_Code",
                table: "Invitations");

            migrationBuilder.DropColumn(
                name: "Code",
                table: "Invitations");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "Invitations",
                type: "varchar(64)",
                maxLength: 64,
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Invitations_Code",
                table: "Invitations",
                column: "Code",
                unique: true);
        }
    }
}
