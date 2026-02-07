namespace VisorHR.Api.Models;

public sealed class Invitation
{
    public Guid Id { get; set; }
    public string Email { get; set; } = string.Empty;
    public string InvitedByUserId { get; set; } = string.Empty;
    public ApplicationUser? InvitedByUser { get; set; }
    public InvitationStatus Status { get; set; } = InvitationStatus.Pending;
    public DateTime CreatedAt { get; set; }
    public DateTime ExpiresAt { get; set; }
    public DateTime? AcceptedAt { get; set; }
}
