using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VisorHR.Api.Models;

public sealed class CompanyInfo
{
    [Key]
    [Column("company_id")]
    public long CompanyId { get; set; }

    [Required]
    [MaxLength(64)]
    [Column("company_name")]
    public string CompanyName { get; set; } = string.Empty;

    [MaxLength(10)]
    [Column("short_name")]
    public string? ShortName { get; set; }

    [MaxLength(64)]
    [Column("company_name_bang")]
    public string? CompanyNameBang { get; set; }

    [MaxLength(64)]
    [Column("address")]
    public string? Address { get; set; }

    [MaxLength(64)]
    [Column("address_bang")]
    public string? AddressBang { get; set; }

    [MaxLength(254)]
    [Column("company_email")]
    public string? CompanyEmail { get; set; }

    [MaxLength(20)]
    [Column("company_phone")]
    public string? CompanyPhone { get; set; }

    [Column("company_logo")]
    public string? CompanyLogo { get; set; }

    [MaxLength(32)]
    [Column("remarks")]
    public string? Remarks { get; set; }

    [MaxLength(150)]
    [Column("created_by")]
    public string? CreatedBy { get; set; }

    [Column("created_at")]
    public DateTime? CreatedAt { get; set; }

    [MaxLength(150)]
    [Column("updated_by")]
    public string? UpdatedBy { get; set; }

    [Column("updated_at")]
    public DateTime? UpdatedAt { get; set; }
}
