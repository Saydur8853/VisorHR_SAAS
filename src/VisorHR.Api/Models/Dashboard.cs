using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VisorHR.Api.Models;

public sealed class Dashboard
{
    [Key]
    [Column("id")]
    public long Id { get; set; }

    [Column("total_employees")]
    public int? TotalEmployees { get; set; }

    [Column("active_employees")]
    public int? ActiveEmployees { get; set; }

    [Column("inactive_employees")]
    public int? InactiveEmployees { get; set; }

    [Column("new_joiners")]
    public int? NewJoiners { get; set; }

    [Column("total_close")]
    public int? TotalClose { get; set; }

    [Column("release")]
    public int? Release { get; set; }

    [Column("resign")]
    public int? Resign { get; set; }

    [Column("total_worker")]
    public int? TotalWorker { get; set; }

    [Column("total_staff")]
    public int? TotalStaff { get; set; }

    [Column("total_officer")]
    public int? TotalOfficer { get; set; }

    [Column("total_male")]
    public int? TotalMale { get; set; }

    [Column("total_female")]
    public int? TotalFemale { get; set; }

    [Column("cash_pay_emp")]
    public int? CashPayEmp { get; set; }

    [Column("bank_pay_emp")]
    public int? BankPayEmp { get; set; }

    [Column("mobile_pay_emp")]
    public int? MobilePayEmp { get; set; }

    [Column("tax_holder")]
    public int? TaxHolder { get; set; }

    [Column("quarter_holder")]
    public int? QuarterHolder { get; set; }

    [Column("increment")]
    public int? Increment { get; set; }

    [Column("leave")]
    public int? Leave { get; set; }

    [Column("on_maternity")]
    public int? OnMaternity { get; set; }

    [Column("total_department")]
    public int? TotalDepartment { get; set; }

    [Column("total_section")]
    public int? TotalSection { get; set; }

    [Column("total_unit")]
    public int? TotalUnit { get; set; }

    [Column("total_floor")]
    public int? TotalFloor { get; set; }

    [Column("total_designations")]
    public int? TotalDesignations { get; set; }

    [Column("total_contractual_holder")]
    public int? TotalContractualHolder { get; set; }

    [Column("total_non_contractual_holder")]
    public int? TotalNonContractualHolder { get; set; }

    [Column("blood_group_a_plus")]
    public int? BloodGroupAPlus { get; set; }

    [Column("blood_group_a_minus")]
    public int? BloodGroupAMinus { get; set; }

    [Column("blood_group_b_plus")]
    public int? BloodGroupBPlus { get; set; }

    [Column("blood_group_b_minus")]
    public int? BloodGroupBMinus { get; set; }

    [Column("blood_group_o_plus")]
    public int? BloodGroupOPlus { get; set; }

    [Column("blood_group_o_minus")]
    public int? BloodGroupOMinus { get; set; }

    [Column("blood_group_ab_plus")]
    public int? BloodGroupAbPlus { get; set; }

    [Column("blood_group_ab_minus")]
    public int? BloodGroupAbMinus { get; set; }

    [Column("total_shift")]
    public int? TotalShift { get; set; }
}
