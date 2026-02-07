namespace VisorHR.Api.Dtos;

public sealed class InviteRequest
{
    public string Email { get; set; } = string.Empty;
    public int? ExpiresInDays { get; set; }
}
