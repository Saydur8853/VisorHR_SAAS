namespace VisorHR.Api.Dtos;

public sealed class UpdateProfileRequest
{
    public string Name { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;
    public string? EmployeeCode { get; set; }
    public string? ProfilePhotoUrl { get; set; }
}
