using Microsoft.AspNetCore.Identity;

namespace VisorHR.Api.Models;

public sealed class ApplicationUser : IdentityUser
{
    public string Name { get; set; } = string.Empty;
    public string? EmployeeCode { get; set; }
    public string? ProfilePhotoUrl { get; set; }
}
