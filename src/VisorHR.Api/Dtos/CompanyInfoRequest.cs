namespace VisorHR.Api.Dtos;

public sealed record CompanyInfoRequest(
    string CompanyName,
    string? ShortName,
    string? CompanyNameBang,
    string? Address,
    string? AddressBang,
    string? CompanyEmail,
    string? CompanyPhone,
    string? CompanyLogo,
    string? Remarks
);
