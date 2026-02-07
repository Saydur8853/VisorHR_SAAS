namespace VisorHR.Api.Dtos;

public sealed class AuthResponse
{
    public string Token { get; set; } = string.Empty;
    public DateTime ExpiresAtUtc { get; set; }
    public string[] Roles { get; set; } = Array.Empty<string>();
}
