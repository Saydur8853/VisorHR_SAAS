const title = document.getElementById("welcomeTitle");
const userName = document.getElementById("userName");
const TOKEN_STORAGE_KEY = "visorhr.token";
const USER_STORAGE_KEY = "visorhr.user";
const ROLES_STORAGE_KEY = "visorhr.roles";
const userRole = document.getElementById("userRole");
const formatRole = (value) => {
  if (!value) {
    return value;
  }
  return value.replace(/([a-z])([A-Z])/g, "$1 $2");
};
const dashboard = document.querySelector(".dashboard");
const menuToggle = document.getElementById("menuToggle");
const sideOverlay = document.getElementById("sideOverlay");
const totalEmployees = document.getElementById("totalEmployees");
const activeEmployees = document.getElementById("activeEmployees");
const inactiveEmployees = document.getElementById("inactiveEmployees");
const newJoinersLabel = document.getElementById("newJoinersLabel");
const newJoinersValue = document.getElementById("newJoinersValue");
const closeEmployees = document.getElementById("closeEmployees");
const releaseEmployees = document.getElementById("releaseEmployees");
const resignEmployees = document.getElementById("resignEmployees");
const totalWorker = document.getElementById("totalWorker");
const totalStaff = document.getElementById("totalStaff");
const totalOfficer = document.getElementById("totalOfficer");
const totalMale = document.getElementById("totalMale");
const totalFemale = document.getElementById("totalFemale");
const cashPay = document.getElementById("cashPay");
const bankPay = document.getElementById("bankPay");
const mobilePay = document.getElementById("mobilePay");
const taxHolder = document.getElementById("taxHolder");
const quarterHolder = document.getElementById("quarterHolder");
const incrementLabel = document.getElementById("incrementLabel");
const incrementValue = document.getElementById("incrementValue");
const offDuty = document.getElementById("offDuty");
const leaveLabel = document.getElementById("leaveLabel");
const leaveValue = document.getElementById("leaveValue");
const maternityCount = document.getElementById("maternityCount");
const releaseLabel = document.getElementById("releaseLabel");
const resignLabel = document.getElementById("resignLabel");
const sectionLabel = document.getElementById("sectionLabel");
const menuItems = Array.from(document.querySelectorAll(".menu-item[data-view]"));
const views = Array.from(document.querySelectorAll(".view[data-view]"));
const inviteMenu = document.getElementById("inviteMenu");
const inviteView = document.querySelector(".view[data-view='invite']");
const employeeForm = document.getElementById("employeeForm");
const employeeDelete = document.getElementById("employeeDelete");
const employeeReset = document.getElementById("employeeReset");
const employeeNotice = document.getElementById("employeeNotice");
const employeeRowId = document.getElementById("employeeRowId");
const lengthOfService = document.getElementById("lengthOfService");
const leaveBalance = document.getElementById("leaveBalance");
const employeePhotoPreview = document.getElementById("employeePhotoPreview");
const employeeSignaturePreview = document.getElementById("employeeSignaturePreview");
const employeePhotoInput = document.getElementById("employeePhotoInput");
const employeeSignatureInput = document.getElementById("employeeSignatureInput");
const employeePhotoUpload = document.getElementById("employeePhotoUpload");
const employeeSignatureUpload = document.getElementById("employeeSignatureUpload");
const logoutLink = document.getElementById("logoutLink");
const profileEditButton = document.getElementById("profileEditButton");
const profileModal = document.getElementById("profileModal");
const profileModalClose = document.getElementById("profileModalClose");
const profileModalForm = document.getElementById("profileModalForm");
const profileModalNotice = document.getElementById("profileModalNotice");
const profileModalOverlay = document.querySelector("[data-close='profile-modal']");
const profileModalSubmit = document.getElementById("profileModalSubmit");
const profileNameInput = document.getElementById("profileName");
const profilePhoneInput = document.getElementById("profilePhone");
const profileEmployeeCodeInput = document.getElementById("profileEmployeeCode");
const profileEmailInput = document.getElementById("profileEmail");
const profilePhotoInput = document.getElementById("profilePhotoInput");
const profilePhotoPreview = document.getElementById("profilePhotoPreview");
const departmentNotice = document.getElementById("departmentNotice");
const departmentAdd = document.getElementById("departmentAdd");
const departmentRefresh = document.getElementById("departmentRefresh");
const departmentSearch = document.getElementById("departmentSearch");
const departmentTable = document.getElementById("departmentTable");
const departmentModal = document.getElementById("departmentModal");
const departmentModalClose = document.getElementById("departmentModalClose");
const departmentModalForm = document.getElementById("departmentModalForm");
const departmentModalId = document.getElementById("departmentModalId");
const departmentModalNotice = document.getElementById("departmentModalNotice");
const departmentModalOverlay = document.querySelector("[data-close='department-modal']");
const departmentModalSubmit = document.getElementById("departmentModalSubmit");
const shiftAdd = document.getElementById("shiftAdd");
const shiftRefresh = document.getElementById("shiftRefresh");
const shiftSearch = document.getElementById("shiftSearch");
const shiftTable = document.getElementById("shiftTable");
const shiftNotice = document.getElementById("shiftNotice");
const shiftModal = document.getElementById("shiftModal");
const shiftModalClose = document.getElementById("shiftModalClose");
const shiftModalForm = document.getElementById("shiftModalForm");
const shiftModalId = document.getElementById("shiftModalId");
const shiftModalNotice = document.getElementById("shiftModalNotice");
const shiftModalOverlay = document.querySelector("[data-close='shift-modal']");
const shiftModalSubmit = document.getElementById("shiftModalSubmit");
const sectionAdd = document.getElementById("sectionAdd");
const sectionRefresh = document.getElementById("sectionRefresh");
const sectionSearch = document.getElementById("sectionSearch");
const sectionTable = document.getElementById("sectionTable");
const sectionNotice = document.getElementById("sectionNotice");
const sectionModal = document.getElementById("sectionModal");
const sectionModalClose = document.getElementById("sectionModalClose");
const sectionModalForm = document.getElementById("sectionModalForm");
const sectionModalId = document.getElementById("sectionModalId");
const sectionModalNotice = document.getElementById("sectionModalNotice");
const sectionModalOverlay = document.querySelector("[data-close='section-modal']");
const sectionModalSubmit = document.getElementById("sectionModalSubmit");
const empTypeAdd = document.getElementById("empTypeAdd");
const empTypeRefresh = document.getElementById("empTypeRefresh");
const empTypeSearch = document.getElementById("empTypeSearch");
const empTypeTable = document.getElementById("empTypeTable");
const empTypeNotice = document.getElementById("empTypeNotice");
const empTypeModal = document.getElementById("empTypeModal");
const empTypeModalClose = document.getElementById("empTypeModalClose");
const empTypeModalForm = document.getElementById("empTypeModalForm");
const empTypeModalId = document.getElementById("empTypeModalId");
const empTypeModalNotice = document.getElementById("empTypeModalNotice");
const empTypeModalOverlay = document.querySelector("[data-close='emp-type-modal']");
const empTypeModalSubmit = document.getElementById("empTypeModalSubmit");
const designationAdd = document.getElementById("designationAdd");
const designationRefresh = document.getElementById("designationRefresh");
const designationSearch = document.getElementById("designationSearch");
const designationTable = document.getElementById("designationTable");
const designationNotice = document.getElementById("designationNotice");
const designationModal = document.getElementById("designationModal");
const designationModalClose = document.getElementById("designationModalClose");
const designationModalForm = document.getElementById("designationModalForm");
const designationModalId = document.getElementById("designationModalId");
const designationModalNotice = document.getElementById("designationModalNotice");
const designationModalOverlay = document.querySelector("[data-close='designation-modal']");
const designationModalSubmit = document.getElementById("designationModalSubmit");
const salaryRuleAdd = document.getElementById("salaryRuleAdd");
const salaryRuleRefresh = document.getElementById("salaryRuleRefresh");
const salaryRuleSearch = document.getElementById("salaryRuleSearch");
const salaryRuleTable = document.getElementById("salaryRuleTable");
const salaryRuleNotice = document.getElementById("salaryRuleNotice");
const salaryRuleModal = document.getElementById("salaryRuleModal");
const salaryRuleModalClose = document.getElementById("salaryRuleModalClose");
const salaryRuleModalForm = document.getElementById("salaryRuleModalForm");
const salaryRuleModalId = document.getElementById("salaryRuleModalId");
const salaryRuleModalNotice = document.getElementById("salaryRuleModalNotice");
const salaryRuleModalOverlay = document.querySelector("[data-close='salary-rule-modal']");
const salaryRuleModalSubmit = document.getElementById("salaryRuleModalSubmit");
const attendanceRefresh = document.getElementById("attendanceRefresh");
const attendanceFrom = document.getElementById("attendanceFrom");
const attendanceTo = document.getElementById("attendanceTo");
const attendanceEmpCode = document.getElementById("attendanceEmpCode");
const attendanceStatus = document.getElementById("attendanceStatus");
const attendanceShift = document.getElementById("attendanceShift");
const attendanceTable = document.getElementById("attendanceTable");
const inviteForm = document.getElementById("inviteForm");
const inviteNotice = document.getElementById("inviteNotice");

const EMPLOYEE_STORAGE_KEY = "visorhr.employees";
const ACTIVE_VIEW_KEY = "visorhr.activeView";
const AUTH_STORAGE_KEY = "visorhr.auth";

if (!localStorage.getItem(AUTH_STORAGE_KEY)) {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
  localStorage.removeItem(USER_STORAGE_KEY);
  localStorage.removeItem(ROLES_STORAGE_KEY);
  window.location.href = "/";
}

const params = new URLSearchParams(window.location.search);
const unit = params.get("unit") || localStorage.getItem("visorhr.unit");

if (unit) {
  title.textContent = `Welcome to ${unit}`;
} else {
  title.textContent = "Welcome";
}

if (userName) {
  userName.textContent = localStorage.getItem(USER_STORAGE_KEY) || "User";
}

if (userRole) {
  const storedRoles = localStorage.getItem(ROLES_STORAGE_KEY);
  if (storedRoles) {
    const roles = JSON.parse(storedRoles);
    if (Array.isArray(roles) && roles.length > 0) {
      userRole.textContent = roles.map(formatRole).join(", ");
    }
  }
}

const isSuperAdmin = (roles) => Array.isArray(roles) && roles.includes("SuperAdmin");

const updateInviteVisibility = (roles) => {
  const canInvite = isSuperAdmin(roles);
  if (inviteMenu) {
    inviteMenu.hidden = !canInvite;
    inviteMenu.style.display = canInvite ? "" : "none";
    inviteMenu.setAttribute("aria-hidden", String(!canInvite));
  }
  if (inviteView) {
    inviteView.classList.toggle("is-hidden", !canInvite);
  }
  return canInvite;
};

const storedRoles = localStorage.getItem(ROLES_STORAGE_KEY);
updateInviteVisibility(storedRoles ? JSON.parse(storedRoles) : []);

const token = localStorage.getItem(TOKEN_STORAGE_KEY);
if (!token) {
  localStorage.removeItem(ROLES_STORAGE_KEY);
  updateInviteVisibility([]);
}
  if (token && userName) {
    fetch("/auth/me", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(async (response) => {
        if (!response.ok) {
          localStorage.removeItem(ROLES_STORAGE_KEY);
          updateInviteVisibility([]);
          return null;
        }
        return response.json().catch(() => null);
      })
      .then((data) => {
        if (data?.name) {
          userName.textContent = data.name;
        } else if (data?.email) {
          userName.textContent = data.email;
        }
        if (userRole && Array.isArray(data?.roles) && data.roles.length > 0) {
          userRole.textContent = data.roles.map(formatRole).join(", ");
          localStorage.setItem(ROLES_STORAGE_KEY, JSON.stringify(data.roles));
        }
        updateInviteVisibility(data?.roles);
      })
      .catch(() => {});
  }

  let profilePhotoDataUrl = null;

  const setProfileModalNotice = (message) => {
    if (!profileModalNotice) {
      return;
    }
    profileModalNotice.textContent = message || "";
  };

  const setProfilePhotoPreview = (url) => {
    if (!profilePhotoPreview) {
      return;
    }
    if (url) {
      profilePhotoPreview.src = url;
      profilePhotoPreview.classList.remove("is-empty");
      return;
    }
    profilePhotoPreview.src = "";
    profilePhotoPreview.classList.add("is-empty");
  };

  const loadProfileData = async () => {
    if (!token) {
      setProfileModalNotice("You are not signed in.");
      return null;
    }
    try {
      const response = await fetch("/auth/me", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!response.ok) {
        throw new Error("Failed to load profile.");
      }
      return await response.json().catch(() => null);
    } catch (error) {
      setProfileModalNotice(error?.message || "Failed to load profile.");
      return null;
    }
  };

  const openProfileModal = async () => {
    if (!profileModal) {
      return;
    }
    setProfileModalNotice("");
    const data = await loadProfileData();
    if (data) {
      if (profileNameInput) {
        profileNameInput.value = data.name || "";
      }
      if (profilePhoneInput) {
        profilePhoneInput.value = data.phoneNumber || "";
      }
      if (profileEmployeeCodeInput) {
        profileEmployeeCodeInput.value = data.employeeCode || "";
      }
      if (profileEmailInput) {
        profileEmailInput.textContent = data.email || "";
      }
      profilePhotoDataUrl = data.profilePhotoUrl || null;
      setProfilePhotoPreview(profilePhotoDataUrl);
    }
    profileModal.classList.add("is-open");
    profileModal.setAttribute("aria-hidden", "false");
  };

  const closeProfileModal = () => {
    if (!profileModal) {
      return;
    }
    profileModal.classList.remove("is-open");
    profileModal.setAttribute("aria-hidden", "true");
    setProfileModalNotice("");
  };

  if (profileEditButton) {
    profileEditButton.addEventListener("click", openProfileModal);
  }

  if (profileModalClose) {
    profileModalClose.addEventListener("click", closeProfileModal);
  }

  if (profileModalOverlay) {
    profileModalOverlay.addEventListener("click", closeProfileModal);
  }

  if (profilePhotoInput) {
    profilePhotoInput.addEventListener("change", () => {
      const file = profilePhotoInput.files?.[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          profilePhotoDataUrl = reader.result;
          setProfilePhotoPreview(profilePhotoDataUrl);
        }
      };
      reader.readAsDataURL(file);
    });
  }

  if (profileModalForm) {
    profileModalForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      setProfileModalNotice("");
      if (!token) {
        setProfileModalNotice("You are not signed in.");
        return;
      }
      const name = profileNameInput?.value?.trim() || "";
      const phoneNumber = profilePhoneInput?.value?.trim() || "";
      if (!name || !phoneNumber) {
        setProfileModalNotice("Name and phone number are required.");
        return;
      }
      if (profileModalSubmit) {
        profileModalSubmit.disabled = true;
        profileModalSubmit.textContent = "Saving...";
      }
      try {
        const payload = {
          name,
          phoneNumber,
          employeeCode: profileEmployeeCodeInput?.value?.trim() || null,
          profilePhotoUrl: profilePhotoDataUrl
        };
        const response = await fetch("/auth/me", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(payload)
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) {
          throw new Error(data?.message || "Failed to save profile.");
        }
        if (userName) {
          userName.textContent = data.name || data.email || "User";
        }
        closeProfileModal();
      } catch (error) {
        setProfileModalNotice(error?.message || "Failed to save profile.");
      } finally {
        if (profileModalSubmit) {
          profileModalSubmit.disabled = false;
          profileModalSubmit.textContent = "Save Changes";
        }
      }
    });
  }

  const defaultWelcomeTitle = title ? title.textContent : "Welcome";

const closeMenu = () => {
  if (!dashboard) {
    return;
  }
  dashboard.classList.remove("is-open");
  if (menuToggle) {
    menuToggle.setAttribute("aria-expanded", "false");
  }
};

if (menuToggle && dashboard) {
  menuToggle.addEventListener("click", () => {
    const isOpen = dashboard.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (sideOverlay) {
  sideOverlay.addEventListener("click", closeMenu);
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 720) {
    closeMenu();
  }
});

const updateHeaderForView = (viewId) => {
  if (!title) {
    return;
  }
  if (viewId === "employees") {
    title.textContent = "Employees";
    if (sectionLabel) {
      sectionLabel.textContent = "HR";
    }
    return;
  }
  if (viewId === "departments") {
    title.textContent = "Departments";
    if (sectionLabel) {
      sectionLabel.textContent = "Setup";
    }
    return;
  }
  if (viewId === "shifts") {
    title.textContent = "Shift Planner";
    if (sectionLabel) {
      sectionLabel.textContent = "Setup";
    }
    return;
  }
  if (viewId === "sections") {
    title.textContent = "Sections";
    if (sectionLabel) {
      sectionLabel.textContent = "Setup";
    }
    return;
  }
  if (viewId === "employee-types") {
    title.textContent = "Employee Types";
    if (sectionLabel) {
      sectionLabel.textContent = "Setup";
    }
    return;
  }
  if (viewId === "designations") {
    title.textContent = "Designations";
    if (sectionLabel) {
      sectionLabel.textContent = "Setup";
    }
    return;
  }
  if (viewId === "salary-rules") {
    title.textContent = "Salary Rules";
    if (sectionLabel) {
      sectionLabel.textContent = "Payroll";
    }
    return;
  }
  if (viewId === "attendance") {
    title.textContent = "Attendance";
    if (sectionLabel) {
      sectionLabel.textContent = "Time";
    }
    return;
  }
  if (viewId === "invite") {
    title.textContent = "Invite Users";
    if (sectionLabel) {
      sectionLabel.textContent = "Admin";
    }
    return;
  }
  title.textContent = defaultWelcomeTitle;
  if (sectionLabel) {
    sectionLabel.textContent = "Unit";
  }
};

const setView = (viewId) => {
  if (!viewId || views.length === 0) {
    return;
  }
  if (viewId === "invite") {
    const roles = localStorage.getItem(ROLES_STORAGE_KEY);
    const parsedRoles = roles ? JSON.parse(roles) : [];
    if (!isSuperAdmin(parsedRoles)) {
      const fallbackView = menuItems.find((item) => item.getAttribute("data-view") !== "invite")?.getAttribute("data-view");
      if (fallbackView) {
        setView(fallbackView);
      }
      return;
    }
  }
  views.forEach((view) => {
    view.classList.toggle("is-active", view.getAttribute("data-view") === viewId);
  });
  menuItems.forEach((item) => {
    item.classList.toggle("is-active", item.getAttribute("data-view") === viewId);
  });
  updateHeaderForView(viewId);
  localStorage.setItem(ACTIVE_VIEW_KEY, viewId);
};

if (menuItems.length) {
  menuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const viewId = item.getAttribute("data-view");
      setView(viewId);
      closeMenu();
    });
  });
  const storedView = localStorage.getItem(ACTIVE_VIEW_KEY);
  const defaultView = menuItems.find((item) => item.classList.contains("is-active"))?.getAttribute("data-view");
  const validStored = storedView && views.some((view) => view.getAttribute("data-view") === storedView);
  setView((validStored ? storedView : defaultView) || menuItems[0].getAttribute("data-view"));
}

if (inviteForm) {
  inviteForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!inviteNotice) {
      return;
    }

    inviteNotice.className = "notice";
    inviteNotice.textContent = "";

    const storedRoles = localStorage.getItem(ROLES_STORAGE_KEY);
    const roles = storedRoles ? JSON.parse(storedRoles) : [];
    if (!Array.isArray(roles) || !roles.includes("SuperAdmin")) {
      inviteNotice.classList.add("is-error");
      inviteNotice.textContent = "Only Super Admin can invite users.";
      return;
    }

    const emailInput = inviteForm.querySelector("input[name='inviteEmail']");
    const expiresInput = inviteForm.querySelector("input[name='inviteExpiresInDays']");
    const emailValue = emailInput?.value?.trim();
    if (!emailValue) {
      inviteNotice.classList.add("is-error");
      inviteNotice.textContent = "Email is required.";
      return;
    }

    const expiresValue = Number(expiresInput?.value || 0);
    const payload = {
      email: emailValue,
      expiresInDays: expiresValue > 0 ? expiresValue : undefined
    };

    const submitButton = inviteForm.querySelector(".primary");
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    try {
      const authToken = localStorage.getItem(TOKEN_STORAGE_KEY);
      if (!authToken) {
        throw new Error("Session expired. Please sign in again.");
      }
      const response = await fetch("/invitations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(payload)
      });
      if (response.redirected) {
        throw new Error("Session expired. Please sign in again.");
      }
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Session expired. Please sign in again.");
        }
        if (response.status === 403) {
          throw new Error("Only Super Admin can invite users.");
        }
        throw new Error(data?.message || "Failed to send invitation.");
      }
      inviteNotice.classList.add("is-success");
      inviteNotice.textContent = "Invitation sent.";
      inviteForm.reset();
    } catch (error) {
      inviteNotice.classList.add("is-error");
      inviteNotice.textContent = error?.message || "Failed to send invitation.";
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Send invitation";
      }
    }
  });
}

const getStoredEmployees = () => {
  const stored = localStorage.getItem(EMPLOYEE_STORAGE_KEY);
  if (!stored) {
    return [];
  }
  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

const saveEmployees = (employees) => {
  localStorage.setItem(EMPLOYEE_STORAGE_KEY, JSON.stringify(employees));
};

const normalizeCode = (value) => value.trim().toUpperCase();

const toBijoy = (value) => {
  if (!value) {
    return "";
  }
  if (window.Unicode2ASCII && typeof window.Unicode2ASCII.ConvertToASCII === "function") {
    try {
      return window.Unicode2ASCII.ConvertToASCII("bijoy", value);
    } catch (error) {
      return value;
    }
  }
  return value;
};

const TEXT_FIELDS = [
  "empCode",
  "erpCode",
  "empName",
  "empNameBang",
  "fatherName",
  "fatherNameBang",
  "motherName",
  "motherNameBang",
  "spouseName",
  "spouseNameBang",
  "gender",
  "religion",
  "maritalStatus",
  "bloodGroup",
  "birthDate",
  "age",
  "education",
  "experience",
  "nationalId",
  "licenseNo",
  "cellNo",
  "emergencyCell",
  "email",
  "presentVill",
  "presentPo",
  "presentPs",
  "presentDist",
  "presentVillBang",
  "presentPoBang",
  "presentPsBang",
  "presentDistBang",
  "permanentVill",
  "permanentPo",
  "permanentPs",
  "permanentDist",
  "permanentVillBang",
  "permanentPoBang",
  "permanentPsBang",
  "permanentDistBang",
  "nomineeName",
  "nomineeRelation",
  "nomineeCell",
  "nomineeBangla",
  "unit",
  "category",
  "department",
  "section",
  "group",
  "designation",
  "floor",
  "workingTime",
  "salaryRule",
  "grade",
  "joinDate",
  "status",
  "closeDate",
  "closeReason",
  "weekend",
  "proximityNo",
  "gross",
  "basic",
  "elSegment",
  "accountNo",
  "remarks",
  "photoPath",
  "signaturePath"
];

const CHECKBOX_FIELDS = [
  "resignGiven",
  "contractual",
  "transport",
  "otHolder",
  "elHolder",
  "quarterHolder",
  "taxHolder"
];

const DATE_FIELDS = ["birthDate", "joinDate", "closeDate"];

const DEFAULT_VALUES = {
  gender: "MALE",
  religion: "ISLAM",
  maritalStatus: "SINGLE",
  bloodGroup: "N/A",
  category: "Worker",
  status: "Active",
  weekend: "N/A",
  elSegment: "N/A",
  grade: "0"
};

const formatDateForDisplay = (value) => {
  if (!value || typeof value !== "string") {
    return "";
  }
  if (/^\d{2}-[A-Za-z]{3}-\d{4}$/.test(value)) {
    return value;
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthIndex = Number(month) - 1;
    const monthName = months[monthIndex] || "";
    return monthName ? `${day}-${monthName}-${year}` : value;
  }
  return value;
};

const parseDisplayDate = (value) => {
  if (!value || typeof value !== "string") {
    return null;
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }
  const match = value.match(/^(\d{2})-([A-Za-z]{3})-(\d{4})$/);
  if (match) {
    const months = {
      jan: 0,
      feb: 1,
      mar: 2,
      apr: 3,
      may: 4,
      jun: 5,
      jul: 6,
      aug: 7,
      sep: 8,
      oct: 9,
      nov: 10,
      dec: 11
    };
    const day = Number(match[1]);
    const monthIndex = months[match[2].toLowerCase()];
    const year = Number(match[3]);
    if (monthIndex !== undefined) {
      return new Date(year, monthIndex, day);
    }
  }
  return null;
};

const formatAgeDetails = (birthDate) => {
  if (!birthDate || Number.isNaN(birthDate.getTime())) {
    return "";
  }
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }
  years = Math.max(years, 0);
  return `${years}y ${months}m ${days}d`;
};

const formatServiceLength = (startDate, endDate) => {
  if (!startDate || !endDate || Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
    return "";
  }
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  let days = endDate.getDate() - startDate.getDate();

  if (days < 0) {
    const lastMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
    days += lastMonth.getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }
  years = Math.max(years, 0);
  months = Math.max(months, 0);
  days = Math.max(days, 0);
  return `${years}Y-${months}M-${days}D`;
};

const updateLengthOfService = (joinDateValue, statusValue = "", closeDateValue = "") => {
  if (!lengthOfService) {
    return;
  }
  const parsedDate = parseDisplayDate(joinDateValue);
  if (!parsedDate) {
    lengthOfService.textContent = "";
    return;
  }
  const normalizedStatus = (statusValue || "").trim().toLowerCase();
  const closeDate = parseDisplayDate(closeDateValue);
  const endDate = normalizedStatus && normalizedStatus !== "active" && closeDate ? closeDate : new Date();
  const endIso = `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, "0")}-${String(endDate.getDate()).padStart(2, "0")}`;
  const displayDate = formatDateForDisplay(endIso);
  const duration = formatServiceLength(parsedDate, endDate);
  lengthOfService.textContent = `Length of Service (till ${displayDate}): ${duration}`;
};

const loadLeaveBalance = async (employeeCode, employeeId, status, closeDate) => {
  if (!leaveBalance) {
    return;
  }
  if (!employeeCode && !employeeId) {
    leaveBalance.textContent = "";
    return;
  }
  leaveBalance.textContent = "Leave Balance: --";
  const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || employeeForm?.unit?.value || "";
  if (!resolvedUnit) {
    leaveBalance.textContent = "Leave Balance: -- (unit missing)";
    return;
  }
  const normalizedStatus = (status || "").trim().toLowerCase();
  const asOfDate = normalizedStatus && normalizedStatus !== "active" && closeDate ? closeDate : "";

  try {
    const query = new URLSearchParams({
      unit: resolvedUnit,
      code: employeeCode || "",
      empId: employeeId || "",
      asOf: asOfDate
    });
    const response = await fetch(`/employee/leave-balance?${query.toString()}`);
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data?.ok) {
      const message = data?.message || (response.status === 404 ? "endpoint not found" : "unavailable");
      leaveBalance.textContent = `Leave Balance: -- (${message})`;
      return;
    }
    const cl = data.cl ?? 0;
    const sl = data.sl ?? 0;
    const el = data.el ?? 0;
    leaveBalance.textContent = `Leave Balance: CL : ${cl} SL : ${sl}${el > 0 ? ` EL : ${el}` : ""}`;
  } catch (error) {
    leaveBalance.textContent = "Leave Balance: -- (fetch failed)";
  }
};

const LOOKUP_CONFIG = [
  { name: "unit", endpoint: "/lookup/units", placeholder: "Select unit" },
  { name: "category", endpoint: "/lookup/categories", placeholder: "Select category" },
  { name: "department", endpoint: "/lookup/departments", placeholder: "Select department" },
  { name: "section", endpoint: "/lookup/sections", placeholder: "Select section" },
  { name: "designation", endpoint: "/lookup/designations", placeholder: "Select designation" },
  { name: "group", endpoint: "/lookup/lines", placeholder: "Select group" },
  { name: "floor", endpoint: "/lookup/floors", placeholder: "Select floor" },
  { name: "salaryRule", endpoint: "/lookup/salary-rules", placeholder: "Select salary rule" }
];

const clearEmployeeForm = () => {
  if (!employeeForm) {
    return;
  }
  employeeForm.reset();
  if (employeeRowId) {
    employeeRowId.value = "";
  }
  if (employeeDelete) {
    employeeDelete.disabled = true;
  }
  if (employeeNotice) {
    employeeNotice.textContent = "";
  }
  if (lengthOfService) {
    lengthOfService.textContent = "";
  }
  if (leaveBalance) {
    leaveBalance.textContent = "";
  }
  if (employeePhotoPreview) {
    employeePhotoPreview.removeAttribute("src");
    employeePhotoPreview.classList.add("is-empty");
  }
  if (employeeSignaturePreview) {
    employeeSignaturePreview.removeAttribute("src");
    employeeSignaturePreview.classList.add("is-empty");
  }
};

const resetEmployeeFormWithCode = (code) => {
  clearEmployeeForm();
  if (employeeForm?.empCode) {
    employeeForm.empCode.value = code;
  }
};

const loadLookupOptions = (select, items, placeholder, defaultIndex = 0) => {
  if (!select) {
    return;
  }
  const currentValue = select.value;
  select.innerHTML = "";
  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = placeholder;
  select.appendChild(placeholderOption);
  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.name;
    option.textContent = item.name;
    option.dataset.id = item.id;
    select.appendChild(option);
  });
  if (currentValue) {
    const match = Array.from(select.options).some((option) => option.value === currentValue);
    if (match) {
      select.value = currentValue;
      return;
    }
  }
  if (items.length && defaultIndex >= 0 && defaultIndex < items.length) {
    select.value = items[defaultIndex].name;
  }
};

const loadLookups = async () => {
  if (!employeeForm) {
    return;
  }
  const resolvedUnit = unit || employeeForm.unit?.value || localStorage.getItem("visorhr.unit") || "";
  if (!resolvedUnit) {
    return;
  }
  await Promise.all(
    LOOKUP_CONFIG.map(async ({ name, endpoint, placeholder }) => {
      const select = employeeForm.elements[name];
      if (!select) {
        return;
      }
      try {
        const response = await fetch(`${endpoint}?unit=${encodeURIComponent(resolvedUnit)}`);
        const data = await response.json().catch(() => ({}));
        if (!response.ok || !Array.isArray(data.items)) {
          return;
        }
        const defaultIndex = name === "unit" ? 0 : -1;
        loadLookupOptions(select, data.items, placeholder, defaultIndex);
      } catch (error) {
      }
    })
  );
};

const getEmployeeFormData = () => {
  const formData = {};
  if (!employeeForm) {
    return formData;
  }
  TEXT_FIELDS.forEach((name) => {
    const field = employeeForm.elements[name];
    if (!field) {
      return;
    }
    const value = field.value;
    formData[name] = typeof value === "string" ? value.trim() : value;
  });
  CHECKBOX_FIELDS.forEach((name) => {
    const field = employeeForm.elements[name];
    if (!field) {
      return;
    }
    formData[name] = field.checked;
  });
  formData.payType = employeeForm.querySelector("input[name='payType']:checked")?.value || "";
  formData.empCode = normalizeCode(employeeForm.empCode.value || "");
  formData.empName = employeeForm.empName.value.trim();
  return formData;
};

const applyEmployeeFormData = (employee) => {
  if (!employeeForm || !employee) {
    return;
  }
  const birthDate = employee.birthDate ? parseDisplayDate(employee.birthDate) : null;
  const ageDetails = birthDate ? formatAgeDetails(birthDate) : "";
  TEXT_FIELDS.forEach((name) => {
    const field = employeeForm.elements[name];
    if (!field) {
      return;
    }
    const value = employee[name];
    if (value === undefined || value === null || value === "") {
      field.value = DEFAULT_VALUES[name] ?? "";
      return;
    }
    if (field.tagName === "SELECT") {
      const optionExists = Array.from(field.options).some((option) => option.value === value);
      if (!optionExists) {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        field.appendChild(option);
      }
    }
    if (DATE_FIELDS.includes(name)) {
      field.value = formatDateForDisplay(value);
      return;
    }
    if (name === "age" && ageDetails) {
      field.value = ageDetails;
      return;
    }
    field.value = value;
  });
  CHECKBOX_FIELDS.forEach((name) => {
    const field = employeeForm.elements[name];
    if (!field) {
      return;
    }
    field.checked = Boolean(employee[name]);
  });
  const payType = employee.payType || "Cash";
  const selectedPayType = employeeForm.querySelector(`input[name='payType'][value='${payType}']`);
  if (selectedPayType) {
    selectedPayType.checked = true;
  }
};

const setEmployeeForm = (employee) => {
  if (!employeeForm || !employee) {
    return;
  }
  applyEmployeeFormData(employee);
  if (employeeRowId) {
    employeeRowId.value = employee.id || employee.empCode || "";
  }
  if (employeeDelete) {
    employeeDelete.disabled = false;
  }
  if (employee.empCode) {
    updateEmployeePreviews(employee.empCode);
  }
  updateLengthOfService(employee.joinDate || "", employee.status || "", employee.closeDate || "");
  loadLeaveBalance(employee.empCode || employee.id || "", employee.empId || "", employee.status, employee.closeDate);
};

let employees = [];

const findEmployeeByCode = (code) => employees.find((employee) => employee.id === normalizeCode(code));

const loadEmployeeByCode = async (code) => {
  const trimmedCode = normalizeCode(code || "");
  if (!trimmedCode) {
    return;
  }

  const resolvedUnit = unit || employeeForm?.unit?.value || "";
  if (!resolvedUnit) {
    alert("Unit is required.");
    return;
  }

  try {
    const response = await fetch(`/employee/by-code?unit=${encodeURIComponent(resolvedUnit)}&code=${encodeURIComponent(trimmedCode)}`);
    if (response.status === 404) {
      resetEmployeeFormWithCode(trimmedCode);
      if (employeeNotice) {
        employeeNotice.textContent = "This employee is not exist";
      }
      alert("This employee is not exist");
      return;
    }
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data?.employee) {
      throw new Error(data.message || "Failed to load employee.");
    }

    const employee = { ...data.employee, id: trimmedCode };
    if (employee.birthDate) {
      const birth = parseDisplayDate(employee.birthDate);
      const ageDetails = birth ? formatAgeDetails(birth) : "";
      if (ageDetails) {
        employee.age = ageDetails;
      }
    }
    setEmployeeForm(employee);
    if (employeeNotice) {
      employeeNotice.textContent = "Employee loaded.";
    }
  } catch (error) {
    const message = error?.message || "Failed to load employee.";
    if (employeeNotice) {
      employeeNotice.textContent = message;
    }
    alert(message);
  }
};

const loadEmployeeImage = async (imgElement, url) => {
  if (!imgElement) {
    return;
  }
  imgElement.classList.add("is-empty");
  try {
    const response = await fetch(url);
    if (response.status === 404) {
      console.info(`Employee image not found: ${url}`);
      imgElement.removeAttribute("src");
      imgElement.classList.add("is-empty");
      return null;
    }
    if (!response.ok) {
      imgElement.removeAttribute("src");
      imgElement.classList.add("is-empty");
      return null;
    }
    const data = await response.json().catch(() => ({}));
    if (!data?.base64 || !data?.contentType) {
      imgElement.removeAttribute("src");
      imgElement.classList.add("is-empty");
      return null;
    }
    imgElement.src = `data:${data.contentType};base64,${data.base64}`;
    imgElement.classList.remove("is-empty");
    return data;
  } catch (error) {
    imgElement.removeAttribute("src");
    imgElement.classList.add("is-empty");
    return null;
  }
};

const updateEmployeePreviews = (employeeCode) => {
  const resolvedUnit = unit || employeeForm?.unit?.value || "";
  if (!resolvedUnit || !employeeCode) {
    return;
  }
  if (employeePhotoPreview) {
    loadEmployeeImage(
      employeePhotoPreview,
      `/employee/photo?unit=${encodeURIComponent(resolvedUnit)}&code=${encodeURIComponent(employeeCode)}&format=base64`
    );
  }
  if (employeeSignaturePreview) {
    loadEmployeeImage(
      employeeSignaturePreview,
      `/employee/signature?unit=${encodeURIComponent(resolvedUnit)}&code=${encodeURIComponent(employeeCode)}&format=base64`
    );
  }
};

if (employeeForm) {
  employees = getStoredEmployees();
  loadLookups();

  if (employeeForm.empCode) {
    employeeForm.empCode.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        loadEmployeeByCode(employeeForm.empCode.value);
      }
    });
  }

  if (employeeForm.joinDate) {
    employeeForm.joinDate.addEventListener("input", () => {
      updateLengthOfService(
        employeeForm.joinDate.value,
        employeeForm.status?.value || "",
        employeeForm.closeDate?.value || ""
      );
    });
  }

  if (employeePhotoUpload && employeePhotoInput) {
    employeePhotoUpload.addEventListener("click", () => employeePhotoInput.click());
    employeePhotoInput.addEventListener("change", () => {
      const file = employeePhotoInput.files?.[0];
      if (!file || !employeePhotoPreview) {
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        employeePhotoPreview.src = reader.result;
        employeePhotoPreview.classList.remove("is-empty");
        if (employeeForm?.photoPath) {
          employeeForm.photoPath.value = file.name;
        }
      };
      reader.readAsDataURL(file);
    });
  }

  if (employeeSignatureUpload && employeeSignatureInput) {
    employeeSignatureUpload.addEventListener("click", () => employeeSignatureInput.click());
    employeeSignatureInput.addEventListener("change", () => {
      const file = employeeSignatureInput.files?.[0];
      if (!file || !employeeSignaturePreview) {
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        employeeSignaturePreview.src = reader.result;
        employeeSignaturePreview.classList.remove("is-empty");
        if (employeeForm?.signaturePath) {
          employeeForm.signaturePath.value = file.name;
        }
      };
      reader.readAsDataURL(file);
    });
  }

  employeeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = getEmployeeFormData();

    if (!formData.empCode || !formData.empName) {
      if (employeeNotice) {
        employeeNotice.textContent = "Employee code and name are required.";
      }
      return;
    }

    const currentId = employeeRowId?.value || "";
    const existingIndex = employees.findIndex((item) => item.id === formData.empCode);

    if (currentId && currentId !== formData.empCode && existingIndex !== -1) {
      if (employeeNotice) {
        employeeNotice.textContent = "Employee code already exists.";
      }
      return;
    }

    if (currentId) {
      employees = employees.map((item) => (item.id === currentId ? { ...formData, id: formData.empCode } : item));
    } else if (existingIndex !== -1) {
      employees[existingIndex] = { ...formData, id: formData.empCode };
    } else {
      employees.push({ ...formData, id: formData.empCode });
    }

    saveEmployees(employees);
    clearEmployeeForm();
    if (employeeNotice) {
      employeeNotice.textContent = "Employee saved.";
    }
  });

  employeeForm.empCode.addEventListener("blur", () => {
    const code = employeeForm.empCode.value;
    if (!code) {
      clearEmployeeForm();
      return;
    }
    const employee = findEmployeeByCode(code);
    if (employee) {
      setEmployeeForm(employee);
      if (employeeNotice) {
        employeeNotice.textContent = "Employee loaded for update.";
      }
      return;
    }
    if (employeeRowId) {
      employeeRowId.value = "";
    }
    if (employeeDelete) {
      employeeDelete.disabled = true;
    }
    if (employeeNotice) {
      employeeNotice.textContent = "";
    }
  });

  if (employeeReset) {
    employeeReset.addEventListener("click", clearEmployeeForm);
  }

  if (employeeDelete) {
    employeeDelete.addEventListener("click", () => {
      const currentId = employeeRowId?.value || "";
      if (!currentId) {
        return;
    }
    employees = employees.filter((item) => item.id !== currentId);
    saveEmployees(employees);
    clearEmployeeForm();
    if (employeeNotice) {
      employeeNotice.textContent = "Employee deleted.";
    }
  });
}

let departments = [];
let departmentUnits = [];

const setDepartmentNotice = (message) => {
  if (departmentNotice) {
    departmentNotice.textContent = message || "";
  }
};

const setDepartmentModalNotice = (message) => {
  if (departmentModalNotice) {
    departmentModalNotice.textContent = message || "";
  }
};

const fillUnitSelect = (select, units, selectedId) => {
  if (!select) {
    return;
  }
  select.innerHTML = "";
  units.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    select.appendChild(option);
  });
  if (selectedId != null) {
    select.value = String(selectedId);
  }
};

const resetDepartmentModalForm = () => {
  if (!departmentModalForm) {
    return;
  }
  departmentModalForm.reset();
  if (departmentModalId) {
    departmentModalId.value = "";
  }
  setDepartmentModalNotice("");
};

const openDepartmentModal = async (mode, department) => {
  if (!departmentModal || !departmentModalForm) {
    return;
  }
  if (departmentUnits.length === 0) {
    await loadDepartmentUnits();
  }
  resetDepartmentModalForm();
  departmentModalForm.dataset.mode = mode;
  const title = mode === "create" ? "Add Department" : "Edit Department";
  if (departmentModalSubmit) {
    departmentModalSubmit.textContent = mode === "create" ? "Create Department" : "Save Changes";
  }
  const titleEl = document.getElementById("departmentModalTitle");
  if (titleEl) {
    titleEl.textContent = title;
  }
  if (mode === "edit" && department) {
    fillUnitSelect(departmentModalForm.departmentModalUnit, departmentUnits, department.unitId);
    departmentModalForm.departmentModalName.value = department.departmentName ?? "";
    departmentModalForm.departmentModalShortName.value = department.shortName ?? "";
    departmentModalForm.departmentModalPriority.value = department.showPriority ?? "";
    departmentModalForm.departmentModalBangla.value = department.bangDeptName ?? "";
    departmentModalForm.departmentModalRemarks.value = department.remarks ?? "";
    if (departmentModalId) {
      departmentModalId.value = department.departmentId ?? "";
    }
  } else {
    fillUnitSelect(departmentModalForm.departmentModalUnit, departmentUnits);
  }
  departmentModal.classList.add("is-open");
  departmentModal.setAttribute("aria-hidden", "false");
};

const closeDepartmentModal = () => {
  if (!departmentModal) {
    return;
  }
  departmentModal.classList.remove("is-open");
  departmentModal.setAttribute("aria-hidden", "true");
  resetDepartmentModalForm();
};

const clearDepartmentSelection = () => {
  const selectedRow = departmentTable?.querySelector("tbody tr.is-selected");
  if (selectedRow) {
    selectedRow.classList.remove("is-selected");
  }
};

const deleteDepartmentById = async (deptId) => {
  if (!deptId) {
    return;
  }
  const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
  if (!resolvedUnit) {
    setDepartmentNotice("Unit is required.");
    return;
  }
  try {
    const response = await fetch(
      `/departments/${encodeURIComponent(deptId)}?unit=${encodeURIComponent(resolvedUnit)}`,
      { method: "DELETE" }
    );
    const data = await response.json();
    if (!response.ok || !data?.ok) {
      throw new Error(data?.message || "Failed to delete department.");
    }
    setDepartmentNotice("Department deleted.");
    clearDepartmentSelection();
    await loadDepartments();
  } catch (error) {
    setDepartmentNotice(error?.message || "Failed to delete department.");
  }
};

const loadDepartmentUnits = async () => {
  const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
  if (!resolvedUnit) {
    return;
  }
  try {
    const response = await fetch(`/lookup/units?unit=${encodeURIComponent(resolvedUnit)}`);
    const data = await response.json();
    if (!response.ok || !data?.items) {
      throw new Error(data?.message || "Failed to load units.");
    }
    departmentUnits = data.items;
    if (departmentModalForm?.departmentModalUnit) {
      fillUnitSelect(departmentModalForm.departmentModalUnit, data.items);
    }
  } catch (error) {
    setDepartmentNotice("Failed to load units.");
  }
};

const getDepartmentModalFormData = () => {
  if (!departmentModalForm) {
    return null;
  }
  return {
    departmentName: departmentModalForm.departmentModalName.value.trim(),
    unitId: departmentModalForm.departmentModalUnit.value ? Number(departmentModalForm.departmentModalUnit.value) : null,
    shortName: departmentModalForm.departmentModalShortName.value.trim(),
    showPriority: departmentModalForm.departmentModalPriority.value ? Number(departmentModalForm.departmentModalPriority.value) : 0,
    bangDeptName: departmentModalForm.departmentModalBangla.value.trim(),
    remarks: departmentModalForm.departmentModalRemarks.value.trim()
  };
};

const getUnitNameById = (unitId) => {
  const match = departmentUnits.find((item) => String(item.id) === String(unitId));
  return match?.name || "";
};

const renderDepartmentTable = (items) => {
  if (!departmentTable) {
    return;
  }
  const tbody = departmentTable.querySelector("tbody");
  if (!tbody) {
    return;
  }
  tbody.innerHTML = "";
  if (!items.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 6;
    cell.textContent = "No departments found.";
    row.appendChild(cell);
    tbody.appendChild(row);
    return;
  }
  items.forEach((department) => {
    const row = document.createElement("tr");
    row.dataset.id = department.departmentId;
    row.innerHTML = `
      <td>${department.departmentId ?? ""}</td>
      <td>${department.departmentName ?? ""}</td>
      <td>${getUnitNameById(department.unitId)}</td>
      <td>${department.shortName ?? ""}</td>
      <td>${department.showPriority ?? 0}</td>
      <td class="table-actions">
        <button class="btn-outline btn-small" type="button" data-action="edit">Edit</button>
        <button class="btn-danger btn-small" type="button" data-action="delete">Delete</button>
      </td>
    `;
    row.addEventListener("click", (event) => {
      const action = event.target?.dataset?.action;
      if (action === "edit") {
        const selectedRow = departmentTable.querySelector("tbody tr.is-selected");
        if (selectedRow) {
          selectedRow.classList.remove("is-selected");
        }
        row.classList.add("is-selected");
        openDepartmentModal("edit", department);
        return;
      }
      if (action === "delete") {
        deleteDepartmentById(department.departmentId);
        return;
      }
      const selectedRow = departmentTable.querySelector("tbody tr.is-selected");
      if (selectedRow) {
        selectedRow.classList.remove("is-selected");
      }
      row.classList.add("is-selected");
    });
    tbody.appendChild(row);
  });
};

const filterDepartments = () => {
  const query = (departmentSearch?.value || "").trim().toLowerCase();
  const filtered = query
    ? departments.filter((item) =>
        `${item.departmentName ?? ""} ${item.shortName ?? ""}`.toLowerCase().includes(query)
      )
    : departments;
  renderDepartmentTable(filtered);
};

const loadDepartments = async () => {
  const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
  if (!resolvedUnit) {
    return;
  }
  try {
    const response = await fetch(`/departments?unit=${encodeURIComponent(resolvedUnit)}`);
    const data = await response.json();
    if (!response.ok || !data?.items) {
      throw new Error(data?.message || "Failed to load departments.");
    }
    departments = data.items;
    filterDepartments();
  } catch (error) {
    setDepartmentNotice(error?.message || "Failed to load departments.");
  }
};

if (departmentAdd) {
  departmentAdd.addEventListener("click", () => openDepartmentModal("create"));
}

(async () => {
  await loadDepartmentUnits();
  await loadDepartments();
})();

if (departmentRefresh) {
  departmentRefresh.addEventListener("click", loadDepartments);
}

if (departmentSearch) {
  departmentSearch.addEventListener("input", filterDepartments);
}

if (departmentModalForm) {
  departmentModalForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = getDepartmentModalFormData();
    if (!formData || !formData.departmentName || !formData.unitId) {
      setDepartmentModalNotice("Department name and unit are required.");
      return;
    }
    const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
    if (!resolvedUnit) {
      setDepartmentModalNotice("Unit is required.");
      return;
    }
    const mode = departmentModalForm.dataset.mode || "edit";
    const currentId = departmentModalId?.value || "";
    if (mode === "edit" && !currentId) {
      setDepartmentModalNotice("Department ID is missing.");
      return;
    }
    try {
      const response = await fetch(
        mode === "create"
          ? `/departments?unit=${encodeURIComponent(resolvedUnit)}`
          : `/departments/${encodeURIComponent(currentId)}?unit=${encodeURIComponent(resolvedUnit)}`,
        {
          method: mode === "create" ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );
      const data = await response.json();
      if (!response.ok || !data?.ok) {
        throw new Error(data?.message || "Failed to save department.");
      }
      setDepartmentNotice(mode === "create" ? "Department created." : "Department updated.");
      closeDepartmentModal();
      await loadDepartments();
    } catch (error) {
      setDepartmentModalNotice(error?.message || "Failed to save department.");
    }
  });
}

if (departmentModalClose) {
  departmentModalClose.addEventListener("click", closeDepartmentModal);
}

if (departmentModalOverlay) {
  departmentModalOverlay.addEventListener("click", closeDepartmentModal);
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && departmentModal?.classList.contains("is-open")) {
    closeDepartmentModal();
  }
});

let shifts = [];

const setShiftNotice = (message) => {
  if (shiftNotice) {
    shiftNotice.textContent = message || "";
  }
};

const setShiftModalNotice = (message) => {
  if (shiftModalNotice) {
    shiftModalNotice.textContent = message || "";
  }
};

const resetShiftModalForm = () => {
  if (!shiftModalForm) {
    return;
  }
  shiftModalForm.reset();
  if (shiftModalId) {
    shiftModalId.value = "";
  }
  setShiftModalNotice("");
};

const openShiftModal = (mode, shift) => {
  if (!shiftModal || !shiftModalForm) {
    return;
  }
  resetShiftModalForm();
  shiftModalForm.dataset.mode = mode;
  const title = mode === "create" ? "Add Shift" : "Edit Shift";
  if (shiftModalSubmit) {
    shiftModalSubmit.textContent = mode === "create" ? "Create Shift" : "Save Shift";
  }
  const titleEl = document.getElementById("shiftModalTitle");
  if (titleEl) {
    titleEl.textContent = title;
  }
  if (mode === "edit" && shift) {
    shiftModalForm.shiftModalName.value = shift.shiftName ?? "";
    shiftModalForm.shiftModalInTime.value = shift.inTime ?? "";
    shiftModalForm.shiftModalOutTime.value = shift.outTime ?? "";
    shiftModalForm.shiftModalInFrom.value = shift.inTimeFrom ?? "";
    shiftModalForm.shiftModalOutFrom.value = shift.outTimeFrom ?? "";
    shiftModalForm.shiftModalGrace.value = shift.grace ?? "";
    shiftModalForm.shiftModalGraceOut.value = shift.graceOut ?? "";
    shiftModalForm.shiftModalLunchStart.value = shift.lunchStart ?? "";
    shiftModalForm.shiftModalLunchEnd.value = shift.lunchEnd ?? "";
    shiftModalForm.shiftModalInStart.value = shift.inTimeStart ?? "";
    shiftModalForm.shiftModalOutEnd.value = shift.outTimeEnd ?? "";
    shiftModalForm.shiftModalDinerStart.value = shift.dinerStart ?? "";
    shiftModalForm.shiftModalDinerEnd.value = shift.dinerEnd ?? "";
    shiftModalForm.shiftModalDefaultStatus.value = shift.defaultStatus ?? "";
    shiftModalForm.shiftModalRemarks.value = shift.remarks ?? "";
    if (shiftModalId) {
      shiftModalId.value = shift.shiftId ?? "";
    }
  }
  shiftModal.classList.add("is-open");
  shiftModal.setAttribute("aria-hidden", "false");
};

const closeShiftModal = () => {
  if (!shiftModal) {
    return;
  }
  shiftModal.classList.remove("is-open");
  shiftModal.setAttribute("aria-hidden", "true");
  resetShiftModalForm();
};

const getShiftModalFormData = () => {
  if (!shiftModalForm) {
    return null;
  }
  return {
    shiftName: shiftModalForm.shiftModalName.value.trim(),
    inTime: shiftModalForm.shiftModalInTime.value.trim(),
    outTime: shiftModalForm.shiftModalOutTime.value.trim(),
    inTimeFrom: shiftModalForm.shiftModalInFrom.value.trim(),
    outTimeFrom: shiftModalForm.shiftModalOutFrom.value.trim(),
    grace: shiftModalForm.shiftModalGrace.value.trim(),
    graceOut: shiftModalForm.shiftModalGraceOut.value.trim(),
    lunchStart: shiftModalForm.shiftModalLunchStart.value.trim(),
    lunchEnd: shiftModalForm.shiftModalLunchEnd.value.trim(),
    inTimeStart: shiftModalForm.shiftModalInStart.value.trim(),
    outTimeEnd: shiftModalForm.shiftModalOutEnd.value.trim(),
    dinerStart: shiftModalForm.shiftModalDinerStart.value.trim(),
    dinerEnd: shiftModalForm.shiftModalDinerEnd.value.trim(),
    defaultStatus: shiftModalForm.shiftModalDefaultStatus.value.trim(),
    remarks: shiftModalForm.shiftModalRemarks.value.trim()
  };
};

const deleteShiftById = async (shiftId) => {
  if (!shiftId) {
    return;
  }
  const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
  if (!resolvedUnit) {
    setShiftNotice("Unit is required.");
    return;
  }
  try {
    const response = await fetch(
      `/shifts/${encodeURIComponent(shiftId)}?unit=${encodeURIComponent(resolvedUnit)}`,
      { method: "DELETE" }
    );
    const data = await response.json();
    if (!response.ok || !data?.ok) {
      throw new Error(data?.message || "Failed to delete shift.");
    }
    setShiftNotice("Shift deleted.");
    await loadShifts();
  } catch (error) {
    setShiftNotice(error?.message || "Failed to delete shift.");
  }
};

const renderShiftTable = (items) => {
  if (!shiftTable) {
    return;
  }
  const tbody = shiftTable.querySelector("tbody");
  if (!tbody) {
    return;
  }
  tbody.innerHTML = "";
  if (!items.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 7;
    cell.textContent = "No shifts found.";
    row.appendChild(cell);
    tbody.appendChild(row);
    return;
  }
  items.forEach((shift) => {
    const row = document.createElement("tr");
    row.dataset.id = shift.shiftId;
    row.innerHTML = `
      <td>${shift.shiftId ?? ""}</td>
      <td>${shift.shiftName ?? ""}</td>
      <td>${shift.inTime ?? ""}</td>
      <td>${shift.outTime ?? ""}</td>
      <td>${shift.grace ?? ""}</td>
      <td>${shift.lunchStart ?? ""}-${shift.lunchEnd ?? ""}</td>
      <td class="table-actions">
        <button class="btn-outline btn-small" type="button" data-action="edit">Edit</button>
        <button class="btn-danger btn-small" type="button" data-action="delete">Delete</button>
      </td>
    `;
    row.addEventListener("click", (event) => {
      const action = event.target?.dataset?.action;
      if (action === "edit") {
        openShiftModal("edit", shift);
        return;
      }
      if (action === "delete") {
        deleteShiftById(shift.shiftId);
      }
    });
    tbody.appendChild(row);
  });
};

const filterShifts = () => {
  const query = (shiftSearch?.value || "").trim().toLowerCase();
  const filtered = query
    ? shifts.filter((item) => `${item.shiftName ?? ""}`.toLowerCase().includes(query))
    : shifts;
  renderShiftTable(filtered);
};

const loadShifts = async () => {
  const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
  if (!resolvedUnit) {
    return;
  }
  try {
    const response = await fetch(`/shifts?unit=${encodeURIComponent(resolvedUnit)}`);
    const data = await response.json();
    if (!response.ok || !data?.items) {
      throw new Error(data?.message || "Failed to load shifts.");
    }
    shifts = data.items;
    filterShifts();
    fillAttendanceShiftOptions();
  } catch (error) {
    setShiftNotice(error?.message || "Failed to load shifts.");
  }
};

if (shiftAdd) {
  shiftAdd.addEventListener("click", () => openShiftModal("create"));
}

if (shiftRefresh) {
  shiftRefresh.addEventListener("click", loadShifts);
}

if (shiftSearch) {
  shiftSearch.addEventListener("input", filterShifts);
}

(async () => {
  await loadShifts();
})();

if (shiftModalForm) {
  shiftModalForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = getShiftModalFormData();
    if (
      !formData ||
      !formData.shiftName ||
      !formData.inTime ||
      !formData.outTime ||
      !formData.inTimeFrom ||
      !formData.outTimeFrom ||
      !formData.grace ||
      !formData.graceOut ||
      !formData.lunchStart ||
      !formData.lunchEnd
    ) {
      setShiftModalNotice("Please fill all required fields.");
      return;
    }
    const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
    if (!resolvedUnit) {
      setShiftModalNotice("Unit is required.");
      return;
    }
    const mode = shiftModalForm.dataset.mode || "edit";
    const currentId = shiftModalId?.value || "";
    if (mode === "edit" && !currentId) {
      setShiftModalNotice("Shift ID is missing.");
      return;
    }
    try {
      const response = await fetch(
        mode === "create"
          ? `/shifts?unit=${encodeURIComponent(resolvedUnit)}`
          : `/shifts/${encodeURIComponent(currentId)}?unit=${encodeURIComponent(resolvedUnit)}`,
        {
          method: mode === "create" ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );
      const data = await response.json();
      if (!response.ok || !data?.ok) {
        throw new Error(data?.message || "Failed to save shift.");
      }
      setShiftNotice(mode === "create" ? "Shift created." : "Shift updated.");
      closeShiftModal();
      await loadShifts();
    } catch (error) {
      setShiftModalNotice(error?.message || "Failed to save shift.");
    }
  });
}

if (shiftModalClose) {
  shiftModalClose.addEventListener("click", closeShiftModal);
}

if (shiftModalOverlay) {
  shiftModalOverlay.addEventListener("click", closeShiftModal);
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && shiftModal?.classList.contains("is-open")) {
    closeShiftModal();
  }
});

let sections = [];

const setSectionNotice = (message) => {
  if (sectionNotice) {
    sectionNotice.textContent = message || "";
  }
};

const setSectionModalNotice = (message) => {
  if (sectionModalNotice) {
    sectionModalNotice.textContent = message || "";
  }
};

const resetSectionModalForm = () => {
  if (!sectionModalForm) {
    return;
  }
  sectionModalForm.reset();
  if (sectionModalId) {
    sectionModalId.value = "";
  }
  setSectionModalNotice("");
};

const openSectionModal = async (mode, section) => {
  if (!sectionModal || !sectionModalForm) {
    return;
  }
  if (departmentUnits.length === 0) {
    await loadDepartmentUnits();
  }
  resetSectionModalForm();
  sectionModalForm.dataset.mode = mode;
  const title = mode === "create" ? "Add Section" : "Edit Section";
  if (sectionModalSubmit) {
    sectionModalSubmit.textContent = mode === "create" ? "Create Section" : "Save Section";
  }
  const titleEl = document.getElementById("sectionModalTitle");
  if (titleEl) {
    titleEl.textContent = title;
  }
  if (mode === "edit" && section) {
    fillUnitSelect(sectionModalForm.sectionModalUnit, departmentUnits, section.unitId);
    sectionModalForm.sectionModalName.value = section.sectionName ?? "";
    sectionModalForm.sectionModalShowTogether.value = section.showTogether ?? "";
    sectionModalForm.sectionModalBangla.value = section.bangSecName ?? "";
    sectionModalForm.sectionModalRemarks.value = section.remarks ?? "";
    if (sectionModalId) {
      sectionModalId.value = section.sectionId ?? "";
    }
  } else {
    fillUnitSelect(sectionModalForm.sectionModalUnit, departmentUnits);
  }
  sectionModal.classList.add("is-open");
  sectionModal.setAttribute("aria-hidden", "false");
};

const closeSectionModal = () => {
  if (!sectionModal) {
    return;
  }
  sectionModal.classList.remove("is-open");
  sectionModal.setAttribute("aria-hidden", "true");
  resetSectionModalForm();
};

const getSectionModalFormData = () => {
  if (!sectionModalForm) {
    return null;
  }
  return {
    sectionName: sectionModalForm.sectionModalName.value.trim(),
    unitId: sectionModalForm.sectionModalUnit.value ? Number(sectionModalForm.sectionModalUnit.value) : null,
    showTogether: sectionModalForm.sectionModalShowTogether.value
      ? Number(sectionModalForm.sectionModalShowTogether.value)
      : 0,
    bangSecName: sectionModalForm.sectionModalBangla.value.trim(),
    remarks: sectionModalForm.sectionModalRemarks.value.trim()
  };
};

const deleteSectionById = async (sectionId) => {
  if (!sectionId) {
    return;
  }
  const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
  if (!resolvedUnit) {
    setSectionNotice("Unit is required.");
    return;
  }
  try {
    const response = await fetch(
      `/sections/${encodeURIComponent(sectionId)}?unit=${encodeURIComponent(resolvedUnit)}`,
      { method: "DELETE" }
    );
    const data = await response.json();
    if (!response.ok || !data?.ok) {
      throw new Error(data?.message || "Failed to delete section.");
    }
    setSectionNotice("Section deleted.");
    await loadSections();
  } catch (error) {
    setSectionNotice(error?.message || "Failed to delete section.");
  }
};

const renderSectionTable = (items) => {
  if (!sectionTable) {
    return;
  }
  const tbody = sectionTable.querySelector("tbody");
  if (!tbody) {
    return;
  }
  tbody.innerHTML = "";
  if (!items.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 5;
    cell.textContent = "No sections found.";
    row.appendChild(cell);
    tbody.appendChild(row);
    return;
  }
  items.forEach((section) => {
    const row = document.createElement("tr");
    row.dataset.id = section.sectionId;
    row.innerHTML = `
      <td>${section.sectionId ?? ""}</td>
      <td>${section.sectionName ?? ""}</td>
      <td>${getUnitNameById(section.unitId)}</td>
      <td>${section.showTogether ?? 0}</td>
      <td class="table-actions">
        <button class="btn-outline btn-small" type="button" data-action="edit">Edit</button>
        <button class="btn-danger btn-small" type="button" data-action="delete">Delete</button>
      </td>
    `;
    row.addEventListener("click", (event) => {
      const action = event.target?.dataset?.action;
      if (action === "edit") {
        openSectionModal("edit", section);
        return;
      }
      if (action === "delete") {
        deleteSectionById(section.sectionId);
      }
    });
    tbody.appendChild(row);
  });
};

const filterSections = () => {
  const query = (sectionSearch?.value || "").trim().toLowerCase();
  const filtered = query
    ? sections.filter((item) => `${item.sectionName ?? ""}`.toLowerCase().includes(query))
    : sections;
  renderSectionTable(filtered);
};

const loadSections = async () => {
  const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
  if (!resolvedUnit) {
    return;
  }
  try {
    const response = await fetch(`/sections?unit=${encodeURIComponent(resolvedUnit)}`);
    const data = await response.json();
    if (!response.ok || !data?.items) {
      throw new Error(data?.message || "Failed to load sections.");
    }
    sections = data.items;
    filterSections();
  } catch (error) {
    setSectionNotice(error?.message || "Failed to load sections.");
  }
};

if (sectionAdd) {
  sectionAdd.addEventListener("click", () => openSectionModal("create"));
}

if (sectionRefresh) {
  sectionRefresh.addEventListener("click", loadSections);
}

if (sectionSearch) {
  sectionSearch.addEventListener("input", filterSections);
}

(async () => {
  await loadSections();
})();

if (sectionModalForm) {
  sectionModalForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = getSectionModalFormData();
    if (!formData || !formData.sectionName || !formData.unitId) {
      setSectionModalNotice("Section name and unit are required.");
      return;
    }
    const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
    if (!resolvedUnit) {
      setSectionModalNotice("Unit is required.");
      return;
    }
    const mode = sectionModalForm.dataset.mode || "edit";
    const currentId = sectionModalId?.value || "";
    if (mode === "edit" && !currentId) {
      setSectionModalNotice("Section ID is missing.");
      return;
    }
    try {
      const response = await fetch(
        mode === "create"
          ? `/sections?unit=${encodeURIComponent(resolvedUnit)}`
          : `/sections/${encodeURIComponent(currentId)}?unit=${encodeURIComponent(resolvedUnit)}`,
        {
          method: mode === "create" ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );
      const data = await response.json();
      if (!response.ok || !data?.ok) {
        throw new Error(data?.message || "Failed to save section.");
      }
      setSectionNotice(mode === "create" ? "Section created." : "Section updated.");
      closeSectionModal();
      await loadSections();
    } catch (error) {
      setSectionModalNotice(error?.message || "Failed to save section.");
    }
  });
}

if (sectionModalClose) {
  sectionModalClose.addEventListener("click", closeSectionModal);
}

if (sectionModalOverlay) {
  sectionModalOverlay.addEventListener("click", closeSectionModal);
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && sectionModal?.classList.contains("is-open")) {
    closeSectionModal();
  }
});

let empTypes = [];

const setEmpTypeNotice = (message) => {
  if (empTypeNotice) {
    empTypeNotice.textContent = message || "";
  }
};

const setEmpTypeModalNotice = (message) => {
  if (empTypeModalNotice) {
    empTypeModalNotice.textContent = message || "";
  }
};

const resetEmpTypeModalForm = () => {
  if (!empTypeModalForm) {
    return;
  }
  empTypeModalForm.reset();
  if (empTypeModalId) {
    empTypeModalId.value = "";
  }
  setEmpTypeModalNotice("");
};

const openEmpTypeModal = (mode, empType) => {
  if (!empTypeModal || !empTypeModalForm) {
    return;
  }
  resetEmpTypeModalForm();
  empTypeModalForm.dataset.mode = mode;
  const title = mode === "create" ? "Add Employee Type" : "Edit Employee Type";
  if (empTypeModalSubmit) {
    empTypeModalSubmit.textContent = mode === "create" ? "Create Type" : "Save Type";
  }
  const titleEl = document.getElementById("empTypeModalTitle");
  if (titleEl) {
    titleEl.textContent = title;
  }
  if (mode === "edit" && empType) {
    empTypeModalForm.empTypeModalName.value = empType.categoryName ?? "";
    empTypeModalForm.empTypeModalPosition.value = empType.positionLevel ?? "";
    empTypeModalForm.empTypeModalTiffin.value = empType.tiffinAllowance ?? "";
    empTypeModalForm.empTypeModalBangla.value = empType.bangTypeName ?? "";
    empTypeModalForm.empTypeModalRemarks.value = empType.remarks ?? "";
    if (empTypeModalId) {
      empTypeModalId.value = empType.categoryId ?? "";
    }
  }
  empTypeModal.classList.add("is-open");
  empTypeModal.setAttribute("aria-hidden", "false");
};

const closeEmpTypeModal = () => {
  if (!empTypeModal) {
    return;
  }
  empTypeModal.classList.remove("is-open");
  empTypeModal.setAttribute("aria-hidden", "true");
  resetEmpTypeModalForm();
};

const getEmpTypeModalFormData = () => {
  if (!empTypeModalForm) {
    return null;
  }
  return {
    categoryName: empTypeModalForm.empTypeModalName.value.trim(),
    positionLevel: empTypeModalForm.empTypeModalPosition.value
      ? Number(empTypeModalForm.empTypeModalPosition.value)
      : 0,
    tiffinAllowance: empTypeModalForm.empTypeModalTiffin.value
      ? Number(empTypeModalForm.empTypeModalTiffin.value)
      : 0,
    bangTypeName: empTypeModalForm.empTypeModalBangla.value.trim(),
    remarks: empTypeModalForm.empTypeModalRemarks.value.trim()
  };
};

const deleteEmpTypeById = async (categoryId) => {
  if (!categoryId) {
    return;
  }
  const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
  if (!resolvedUnit) {
    setEmpTypeNotice("Unit is required.");
    return;
  }
  try {
    const response = await fetch(
      `/employee-types/${encodeURIComponent(categoryId)}?unit=${encodeURIComponent(resolvedUnit)}`,
      { method: "DELETE" }
    );
    const data = await response.json();
    if (!response.ok || !data?.ok) {
      throw new Error(data?.message || "Failed to delete employee type.");
    }
    setEmpTypeNotice("Employee type deleted.");
    await loadEmpTypes();
  } catch (error) {
    setEmpTypeNotice(error?.message || "Failed to delete employee type.");
  }
};

const renderEmpTypeTable = (items) => {
  if (!empTypeTable) {
    return;
  }
  const tbody = empTypeTable.querySelector("tbody");
  if (!tbody) {
    return;
  }
  tbody.innerHTML = "";
  if (!items.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 5;
    cell.textContent = "No employee types found.";
    row.appendChild(cell);
    tbody.appendChild(row);
    return;
  }
  items.forEach((empType) => {
    const row = document.createElement("tr");
    row.dataset.id = empType.categoryId;
    row.innerHTML = `
      <td>${empType.categoryId ?? ""}</td>
      <td>${empType.categoryName ?? ""}</td>
      <td>${empType.positionLevel ?? 0}</td>
      <td>${empType.tiffinAllowance ?? 0}</td>
      <td class="table-actions">
        <button class="btn-outline btn-small" type="button" data-action="edit">Edit</button>
        <button class="btn-danger btn-small" type="button" data-action="delete">Delete</button>
      </td>
    `;
    row.addEventListener("click", (event) => {
      const action = event.target?.dataset?.action;
      if (action === "edit") {
        openEmpTypeModal("edit", empType);
        return;
      }
      if (action === "delete") {
        deleteEmpTypeById(empType.categoryId);
      }
    });
    tbody.appendChild(row);
  });
};

const filterEmpTypes = () => {
  const query = (empTypeSearch?.value || "").trim().toLowerCase();
  const filtered = query
    ? empTypes.filter((item) => `${item.categoryName ?? ""}`.toLowerCase().includes(query))
    : empTypes;
  renderEmpTypeTable(filtered);
};

const loadEmpTypes = async () => {
  const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
  if (!resolvedUnit) {
    return;
  }
  try {
    const response = await fetch(`/employee-types?unit=${encodeURIComponent(resolvedUnit)}`);
    const data = await response.json();
    if (!response.ok || !data?.items) {
      throw new Error(data?.message || "Failed to load employee types.");
    }
    empTypes = data.items;
    filterEmpTypes();
  } catch (error) {
    setEmpTypeNotice(error?.message || "Failed to load employee types.");
  }
};

if (empTypeAdd) {
  empTypeAdd.addEventListener("click", () => openEmpTypeModal("create"));
}

if (empTypeRefresh) {
  empTypeRefresh.addEventListener("click", loadEmpTypes);
}

if (empTypeSearch) {
  empTypeSearch.addEventListener("input", filterEmpTypes);
}

(async () => {
  await loadEmpTypes();
})();

if (empTypeModalForm) {
  empTypeModalForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = getEmpTypeModalFormData();
    if (!formData || !formData.categoryName) {
      setEmpTypeModalNotice("Type name is required.");
      return;
    }
    const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
    if (!resolvedUnit) {
      setEmpTypeModalNotice("Unit is required.");
      return;
    }
    const mode = empTypeModalForm.dataset.mode || "edit";
    const currentId = empTypeModalId?.value || "";
    if (mode === "edit" && !currentId) {
      setEmpTypeModalNotice("Type ID is missing.");
      return;
    }
    try {
      const response = await fetch(
        mode === "create"
          ? `/employee-types?unit=${encodeURIComponent(resolvedUnit)}`
          : `/employee-types/${encodeURIComponent(currentId)}?unit=${encodeURIComponent(resolvedUnit)}`,
        {
          method: mode === "create" ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );
      const data = await response.json();
      if (!response.ok || !data?.ok) {
        throw new Error(data?.message || "Failed to save employee type.");
      }
      setEmpTypeNotice(mode === "create" ? "Employee type created." : "Employee type updated.");
      closeEmpTypeModal();
      await loadEmpTypes();
    } catch (error) {
      setEmpTypeModalNotice(error?.message || "Failed to save employee type.");
    }
  });
}

if (empTypeModalClose) {
  empTypeModalClose.addEventListener("click", closeEmpTypeModal);
}

if (empTypeModalOverlay) {
  empTypeModalOverlay.addEventListener("click", closeEmpTypeModal);
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && empTypeModal?.classList.contains("is-open")) {
    closeEmpTypeModal();
  }
});

let designations = [];

const setDesignationNotice = (message) => {
  if (designationNotice) {
    designationNotice.textContent = message || "";
  }
};

const setDesignationModalNotice = (message) => {
  if (designationModalNotice) {
    designationModalNotice.textContent = message || "";
  }
};

const resetDesignationModalForm = () => {
  if (!designationModalForm) {
    return;
  }
  designationModalForm.reset();
  if (designationModalId) {
    designationModalId.value = "";
  }
  setDesignationModalNotice("");
};

const openDesignationModal = (mode, designation) => {
  if (!designationModal || !designationModalForm) {
    return;
  }
  resetDesignationModalForm();
  designationModalForm.dataset.mode = mode;
  const title = mode === "create" ? "Add Designation" : "Edit Designation";
  if (designationModalSubmit) {
    designationModalSubmit.textContent = mode === "create" ? "Create Designation" : "Save Designation";
  }
  const titleEl = document.getElementById("designationModalTitle");
  if (titleEl) {
    titleEl.textContent = title;
  }
  if (mode === "edit" && designation) {
    designationModalForm.designationModalName.value = designation.designationName ?? "";
    designationModalForm.designationModalGrade.value = designation.grade ?? "";
    designationModalForm.designationModalPositionId.value = designation.positionId ?? "";
    designationModalForm.designationModalPosition.value = designation.position ?? "";
    designationModalForm.designationModalPriority.value = designation.positionPriority ?? "";
    designationModalForm.designationModalBonus.value = designation.apprAttdBonus ?? "";
    designationModalForm.designationModalOffDay.value = designation.offDayAlw ?? "";
    designationModalForm.designationModalBangGrade.value = designation.bangGrade ?? "";
    designationModalForm.designationModalBangName.value = designation.bangDesignationName ?? "";
    designationModalForm.designationModalDormEntitle.value = designation.dormEntitle ?? "";
    designationModalForm.designationModalNonDormitory.value = designation.nonDormitory ?? "";
    designationModalForm.designationModalRemarks.value = designation.remarks ?? "";
    if (designationModalId) {
      designationModalId.value = designation.designationId ?? "";
    }
  }
  designationModal.classList.add("is-open");
  designationModal.setAttribute("aria-hidden", "false");
};

const closeDesignationModal = () => {
  if (!designationModal) {
    return;
  }
  designationModal.classList.remove("is-open");
  designationModal.setAttribute("aria-hidden", "true");
  resetDesignationModalForm();
};

const getDesignationModalFormData = () => {
  if (!designationModalForm) {
    return null;
  }
  return {
    designationName: designationModalForm.designationModalName.value.trim(),
    grade: designationModalForm.designationModalGrade.value.trim(),
    positionId: designationModalForm.designationModalPositionId.value
      ? Number(designationModalForm.designationModalPositionId.value)
      : 0,
    position: designationModalForm.designationModalPosition.value.trim(),
    positionPriority: designationModalForm.designationModalPriority.value
      ? Number(designationModalForm.designationModalPriority.value)
      : 0,
    apprAttdBonus: designationModalForm.designationModalBonus.value
      ? Number(designationModalForm.designationModalBonus.value)
      : 0,
    offDayAlw: designationModalForm.designationModalOffDay.value
      ? Number(designationModalForm.designationModalOffDay.value)
      : 0,
    bangGrade: designationModalForm.designationModalBangGrade.value.trim(),
    bangDesignationName: designationModalForm.designationModalBangName.value.trim(),
    dormEntitle: designationModalForm.designationModalDormEntitle.value
      ? Number(designationModalForm.designationModalDormEntitle.value)
      : 0,
    nonDormitory: designationModalForm.designationModalNonDormitory.value
      ? Number(designationModalForm.designationModalNonDormitory.value)
      : 0,
    remarks: designationModalForm.designationModalRemarks.value.trim()
  };
};

const deleteDesignationById = async (designationId) => {
  if (!designationId) {
    return;
  }
  const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
  if (!resolvedUnit) {
    setDesignationNotice("Unit is required.");
    return;
  }
  try {
    const response = await fetch(
      `/designations/${encodeURIComponent(designationId)}?unit=${encodeURIComponent(resolvedUnit)}`,
      { method: "DELETE" }
    );
    const data = await response.json();
    if (!response.ok || !data?.ok) {
      throw new Error(data?.message || "Failed to delete designation.");
    }
    setDesignationNotice("Designation deleted.");
    await loadDesignations();
  } catch (error) {
    setDesignationNotice(error?.message || "Failed to delete designation.");
  }
};

const renderDesignationTable = (items) => {
  if (!designationTable) {
    return;
  }
  const tbody = designationTable.querySelector("tbody");
  if (!tbody) {
    return;
  }
  tbody.innerHTML = "";
  if (!items.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 5;
    cell.textContent = "No designations found.";
    row.appendChild(cell);
    tbody.appendChild(row);
    return;
  }
  items.forEach((designation) => {
    const row = document.createElement("tr");
    row.dataset.id = designation.designationId;
    row.innerHTML = `
      <td>${designation.designationId ?? ""}</td>
      <td>${designation.designationName ?? ""}</td>
      <td>${designation.grade ?? ""}</td>
      <td>${designation.positionPriority ?? 0}</td>
      <td class="table-actions">
        <button class="btn-outline btn-small" type="button" data-action="edit">Edit</button>
        <button class="btn-danger btn-small" type="button" data-action="delete">Delete</button>
      </td>
    `;
    row.addEventListener("click", (event) => {
      const action = event.target?.dataset?.action;
      if (action === "edit") {
        openDesignationModal("edit", designation);
        return;
      }
      if (action === "delete") {
        deleteDesignationById(designation.designationId);
      }
    });
    tbody.appendChild(row);
  });
};

const filterDesignations = () => {
  const query = (designationSearch?.value || "").trim().toLowerCase();
  const filtered = query
    ? designations.filter((item) => `${item.designationName ?? ""}`.toLowerCase().includes(query))
    : designations;
  renderDesignationTable(filtered);
};

const loadDesignations = async () => {
  const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
  if (!resolvedUnit) {
    return;
  }
  try {
    const response = await fetch(`/designations?unit=${encodeURIComponent(resolvedUnit)}`);
    const data = await response.json();
    if (!response.ok || !data?.items) {
      throw new Error(data?.message || "Failed to load designations.");
    }
    designations = data.items;
    filterDesignations();
  } catch (error) {
    setDesignationNotice(error?.message || "Failed to load designations.");
  }
};

if (designationAdd) {
  designationAdd.addEventListener("click", () => openDesignationModal("create"));
}

if (designationRefresh) {
  designationRefresh.addEventListener("click", loadDesignations);
}

if (designationSearch) {
  designationSearch.addEventListener("input", filterDesignations);
}

(async () => {
  await loadDesignations();
})();

if (designationModalForm) {
  designationModalForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = getDesignationModalFormData();
    if (!formData || !formData.designationName) {
      setDesignationModalNotice("Designation name is required.");
      return;
    }
    const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
    if (!resolvedUnit) {
      setDesignationModalNotice("Unit is required.");
      return;
    }
    const mode = designationModalForm.dataset.mode || "edit";
    const currentId = designationModalId?.value || "";
    if (mode === "edit" && !currentId) {
      setDesignationModalNotice("Designation ID is missing.");
      return;
    }
    try {
      const response = await fetch(
        mode === "create"
          ? `/designations?unit=${encodeURIComponent(resolvedUnit)}`
          : `/designations/${encodeURIComponent(currentId)}?unit=${encodeURIComponent(resolvedUnit)}`,
        {
          method: mode === "create" ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );
      const data = await response.json();
      if (!response.ok || !data?.ok) {
        throw new Error(data?.message || "Failed to save designation.");
      }
      setDesignationNotice(mode === "create" ? "Designation created." : "Designation updated.");
      closeDesignationModal();
      await loadDesignations();
    } catch (error) {
      setDesignationModalNotice(error?.message || "Failed to save designation.");
    }
  });
}

if (designationModalClose) {
  designationModalClose.addEventListener("click", closeDesignationModal);
}

if (designationModalOverlay) {
  designationModalOverlay.addEventListener("click", closeDesignationModal);
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && designationModal?.classList.contains("is-open")) {
    closeDesignationModal();
  }
});

let salaryRules = [];

const setSalaryRuleNotice = (message) => {
  if (salaryRuleNotice) {
    salaryRuleNotice.textContent = message || "";
  }
};

const setSalaryRuleModalNotice = (message) => {
  if (salaryRuleModalNotice) {
    salaryRuleModalNotice.textContent = message || "";
  }
};

const resetSalaryRuleModalForm = () => {
  if (!salaryRuleModalForm) {
    return;
  }
  salaryRuleModalForm.reset();
  if (salaryRuleModalId) {
    salaryRuleModalId.value = "";
  }
  setSalaryRuleModalNotice("");
};

const openSalaryRuleModal = (mode, rule) => {
  if (!salaryRuleModal || !salaryRuleModalForm) {
    return;
  }
  resetSalaryRuleModalForm();
  salaryRuleModalForm.dataset.mode = mode;
  const title = mode === "create" ? "Add Salary Rule" : "Edit Salary Rule";
  if (salaryRuleModalSubmit) {
    salaryRuleModalSubmit.textContent = mode === "create" ? "Create Rule" : "Save Rule";
  }
  const titleEl = document.getElementById("salaryRuleModalTitle");
  if (titleEl) {
    titleEl.textContent = title;
  }
  if (mode === "edit" && rule) {
    salaryRuleModalForm.salaryRuleModalName.value = rule.ruleName ?? "";
    salaryRuleModalForm.salaryRuleModalBasic.value = rule.ruleBasic ?? 0;
    salaryRuleModalForm.salaryRuleModalHouse.value = rule.ruleHouseRent ?? 0;
    salaryRuleModalForm.salaryRuleModalMedical.value = rule.ruleMedical ?? 0;
    salaryRuleModalForm.salaryRuleModalTransport.value = rule.ruleTransport ?? 0;
    salaryRuleModalForm.salaryRuleModalFood.value = rule.ruleFood ?? 0;
    salaryRuleModalForm.salaryRuleModalAttdBonus.value = rule.getAttdBonus ?? 0;
    salaryRuleModalForm.salaryRuleModalMinBonus.value = rule.minAttdBonus ?? 0;
    salaryRuleModalForm.salaryRuleModalDearAlw.value = rule.ruleDearAlw ?? 0;
    salaryRuleModalForm.salaryRuleModalAttdAlw.value = rule.attdAlw ?? 0;
    salaryRuleModalForm.salaryRuleModalOtAlw.value = rule.otAlw ?? 0;
    salaryRuleModalForm.salaryRuleModalNightBill.value = rule.nightBill ?? 0;
    salaryRuleModalForm.salaryRuleModalWashingBill.value = rule.washingBill ?? 0;
    salaryRuleModalForm.salaryRuleModalDriverAlw.value = rule.driverAlw ?? 0;
    salaryRuleModalForm.salaryRuleModalExportAlw.value = rule.exportAlw ?? 0;
    salaryRuleModalForm.salaryRuleModalIsDeduct.value = rule.isDeduct ?? "Y";
    salaryRuleModalForm.salaryRuleModalStatus.value = rule.ruleStatus ?? "";
    salaryRuleModalForm.salaryRuleModalRemarks.value = rule.ruleRemarks ?? "";
    if (salaryRuleModalId) {
      salaryRuleModalId.value = rule.ruleId ?? "";
    }
  }
  salaryRuleModal.classList.add("is-open");
  salaryRuleModal.setAttribute("aria-hidden", "false");
};

const closeSalaryRuleModal = () => {
  if (!salaryRuleModal) {
    return;
  }
  salaryRuleModal.classList.remove("is-open");
  salaryRuleModal.setAttribute("aria-hidden", "true");
  resetSalaryRuleModalForm();
};

const getSalaryRuleModalFormData = () => {
  if (!salaryRuleModalForm) {
    return null;
  }
  return {
    ruleName: salaryRuleModalForm.salaryRuleModalName.value.trim(),
    ruleBasic: Number(salaryRuleModalForm.salaryRuleModalBasic.value || 0),
    ruleHouseRent: Number(salaryRuleModalForm.salaryRuleModalHouse.value || 0),
    ruleMedical: Number(salaryRuleModalForm.salaryRuleModalMedical.value || 0),
    ruleTransport: Number(salaryRuleModalForm.salaryRuleModalTransport.value || 0),
    ruleFood: Number(salaryRuleModalForm.salaryRuleModalFood.value || 0),
    getAttdBonus: Number(salaryRuleModalForm.salaryRuleModalAttdBonus.value || 0),
    minAttdBonus: Number(salaryRuleModalForm.salaryRuleModalMinBonus.value || 0),
    ruleDearAlw: Number(salaryRuleModalForm.salaryRuleModalDearAlw.value || 0),
    attdAlw: Number(salaryRuleModalForm.salaryRuleModalAttdAlw.value || 0),
    otAlw: Number(salaryRuleModalForm.salaryRuleModalOtAlw.value || 0),
    nightBill: Number(salaryRuleModalForm.salaryRuleModalNightBill.value || 0),
    washingBill: Number(salaryRuleModalForm.salaryRuleModalWashingBill.value || 0),
    driverAlw: Number(salaryRuleModalForm.salaryRuleModalDriverAlw.value || 0),
    exportAlw: Number(salaryRuleModalForm.salaryRuleModalExportAlw.value || 0),
    isDeduct: salaryRuleModalForm.salaryRuleModalIsDeduct.value,
    ruleStatus: salaryRuleModalForm.salaryRuleModalStatus.value.trim(),
    ruleRemarks: salaryRuleModalForm.salaryRuleModalRemarks.value.trim()
  };
};

const deleteSalaryRuleById = async (ruleId) => {
  if (!ruleId) {
    return;
  }
  const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
  if (!resolvedUnit) {
    setSalaryRuleNotice("Unit is required.");
    return;
  }
  try {
    const response = await fetch(
      `/salary-rules/${encodeURIComponent(ruleId)}?unit=${encodeURIComponent(resolvedUnit)}`,
      { method: "DELETE" }
    );
    const data = await response.json();
    if (!response.ok || !data?.ok) {
      throw new Error(data?.message || "Failed to delete salary rule.");
    }
    setSalaryRuleNotice("Salary rule deleted.");
    await loadSalaryRules();
  } catch (error) {
    setSalaryRuleNotice(error?.message || "Failed to delete salary rule.");
  }
};

const renderSalaryRuleTable = (items) => {
  if (!salaryRuleTable) {
    return;
  }
  const tbody = salaryRuleTable.querySelector("tbody");
  if (!tbody) {
    return;
  }
  tbody.innerHTML = "";
  if (!items.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 8;
    cell.textContent = "No salary rules found.";
    row.appendChild(cell);
    tbody.appendChild(row);
    return;
  }
  items.forEach((rule) => {
    const row = document.createElement("tr");
    row.dataset.id = rule.ruleId;
    row.innerHTML = `
      <td>${rule.ruleId ?? ""}</td>
      <td>${rule.ruleName ?? ""}</td>
      <td>${rule.ruleBasic ?? 0}</td>
      <td>${rule.ruleHouseRent ?? 0}</td>
      <td>${rule.ruleMedical ?? 0}</td>
      <td>${rule.ruleTransport ?? 0}</td>
      <td>${rule.ruleFood ?? 0}</td>
      <td class="table-actions">
        <button class="btn-outline btn-small" type="button" data-action="edit">Edit</button>
        <button class="btn-danger btn-small" type="button" data-action="delete">Delete</button>
      </td>
    `;
    row.addEventListener("click", (event) => {
      const action = event.target?.dataset?.action;
      if (action === "edit") {
        openSalaryRuleModal("edit", rule);
        return;
      }
      if (action === "delete") {
        deleteSalaryRuleById(rule.ruleId);
      }
    });
    tbody.appendChild(row);
  });
};

const filterSalaryRules = () => {
  const query = (salaryRuleSearch?.value || "").trim().toLowerCase();
  const filtered = query
    ? salaryRules.filter((item) => `${item.ruleName ?? ""}`.toLowerCase().includes(query))
    : salaryRules;
  renderSalaryRuleTable(filtered);
};

const loadSalaryRules = async () => {
  const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
  if (!resolvedUnit) {
    return;
  }
  try {
    const response = await fetch(`/salary-rules?unit=${encodeURIComponent(resolvedUnit)}`);
    const data = await response.json();
    if (!response.ok || !data?.items) {
      throw new Error(data?.message || "Failed to load salary rules.");
    }
    salaryRules = data.items;
    filterSalaryRules();
  } catch (error) {
    setSalaryRuleNotice(error?.message || "Failed to load salary rules.");
  }
};

if (salaryRuleAdd) {
  salaryRuleAdd.addEventListener("click", () => openSalaryRuleModal("create"));
}

if (salaryRuleRefresh) {
  salaryRuleRefresh.addEventListener("click", loadSalaryRules);
}

if (salaryRuleSearch) {
  salaryRuleSearch.addEventListener("input", filterSalaryRules);
}

(async () => {
  await loadSalaryRules();
})();

if (salaryRuleModalForm) {
  salaryRuleModalForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = getSalaryRuleModalFormData();
    if (!formData || !formData.ruleName) {
      setSalaryRuleModalNotice("Rule name is required.");
      return;
    }
    const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
    if (!resolvedUnit) {
      setSalaryRuleModalNotice("Unit is required.");
      return;
    }
    const mode = salaryRuleModalForm.dataset.mode || "edit";
    const currentId = salaryRuleModalId?.value || "";
    if (mode === "edit" && !currentId) {
      setSalaryRuleModalNotice("Rule ID is missing.");
      return;
    }
    try {
      const response = await fetch(
        mode === "create"
          ? `/salary-rules?unit=${encodeURIComponent(resolvedUnit)}`
          : `/salary-rules/${encodeURIComponent(currentId)}?unit=${encodeURIComponent(resolvedUnit)}`,
        {
          method: mode === "create" ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );
      const data = await response.json();
      if (!response.ok || !data?.ok) {
        throw new Error(data?.message || "Failed to save salary rule.");
      }
      setSalaryRuleNotice(mode === "create" ? "Salary rule created." : "Salary rule updated.");
      closeSalaryRuleModal();
      await loadSalaryRules();
    } catch (error) {
      setSalaryRuleModalNotice(error?.message || "Failed to save salary rule.");
    }
  });
}

if (salaryRuleModalClose) {
  salaryRuleModalClose.addEventListener("click", closeSalaryRuleModal);
}

if (salaryRuleModalOverlay) {
  salaryRuleModalOverlay.addEventListener("click", closeSalaryRuleModal);
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && salaryRuleModal?.classList.contains("is-open")) {
    closeSalaryRuleModal();
  }
});

const fillAttendanceShiftOptions = () => {
  if (!attendanceShift) {
    return;
  }
  attendanceShift.innerHTML = '<option value="">All</option>';
  shifts.forEach((shift) => {
    const option = document.createElement("option");
    option.value = shift.shiftId;
    option.textContent = shift.shiftName;
    attendanceShift.appendChild(option);
  });
};

const clearAttendanceTable = () => {
  if (!attendanceTable) {
    return;
  }
  const tbody = attendanceTable.querySelector("tbody");
  if (!tbody) {
    return;
  }
  tbody.innerHTML = "";
};

const appendAttendanceRows = (items) => {
  if (!attendanceTable) {
    return;
  }
  const tbody = attendanceTable.querySelector("tbody");
  if (!tbody) {
    return;
  }
  if (!items.length) {
    if (!tbody.children.length) {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      cell.colSpan = 10;
      cell.textContent = "No attendance found.";
      row.appendChild(cell);
      tbody.appendChild(row);
    }
    return;
  }
  items.forEach((item) => {
    const row = document.createElement("tr");
    if (item.status === "A") {
      row.classList.add("is-absent");
    }
    row.innerHTML = `
      <td>${item.attdDate ?? ""}</td>
      <td>${item.empCode ?? ""}</td>
      <td>${item.empName ?? ""}</td>
      <td>${item.status ?? ""}</td>
      <td>${item.inTime ?? ""}</td>
      <td>${item.outTime ?? ""}</td>
      <td>${item.late ?? 0}</td>
      <td>${item.earlyOut ?? 0}</td>
      <td>${item.overTime ?? 0}</td>
      <td>${item.shiftName ?? ""}</td>
    `;
    tbody.appendChild(row);
  });
};

const loadAttendance = async () => {
  const resolvedUnit = unit || localStorage.getItem("visorhr.unit") || "";
  if (!resolvedUnit) {
    return;
  }
  const query = new URLSearchParams({ unit: resolvedUnit });
  if (attendanceFrom?.value) {
    query.set("fromDate", attendanceFrom.value);
  }
  if (attendanceTo?.value) {
    query.set("toDate", attendanceTo.value);
  }
  if (attendanceEmpCode?.value) {
    query.set("empCode", attendanceEmpCode.value.trim());
  }
  if (attendanceStatus?.value) {
    query.set("status", attendanceStatus.value);
  }
  if (attendanceShift?.value) {
    query.set("shiftId", attendanceShift.value);
  }
  try {
    clearAttendanceTable();
    const pageSize = 100;
    let loaded = 0;
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const pageQuery = new URLSearchParams(query);
      pageQuery.set("page", String(page));
      pageQuery.set("pageSize", String(pageSize));
      const response = await fetch(`/attendance?${pageQuery.toString()}`);
      const data = await response.json();
      if (!response.ok || !data?.items) {
        throw new Error(data?.message || "Failed to load attendance.");
      }
      appendAttendanceRows(data.items);
      loaded += data.items.length;
      if (data.items.length < pageSize) {
        hasMore = false;
      }
      page += 1;
    }

  } catch (error) {
    console.error(error?.message || "Failed to load attendance.");
  }
};

if (attendanceRefresh) {
  attendanceRefresh.addEventListener("click", loadAttendance);
}

if (attendanceFrom && attendanceTo) {
  const today = new Date().toISOString().slice(0, 10);
  if (!attendanceFrom.value) {
    attendanceFrom.value = today;
  }
  if (!attendanceTo.value) {
    attendanceTo.value = today;
  }
}

}

if (logoutLink) {
  logoutLink.addEventListener("click", () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
    localStorage.removeItem(ROLES_STORAGE_KEY);
  });
}

const loadTotalEmployees = () => {
  if (!unit || !totalEmployees) {
    return;
  }

  fetch(`/overview/total-employees?unit=${encodeURIComponent(unit)}`)
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || "Failed to load total employees.");
      }
      totalEmployees.textContent = data.totalEmp ?? "--";
    })
    .catch(() => {
      totalEmployees.textContent = "--";
    });
};

loadTotalEmployees();

const loadActiveEmployees = () => {
  if (!unit || !activeEmployees) {
    return;
  }

  fetch(`/overview/active-employees?unit=${encodeURIComponent(unit)}`)
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || "Failed to load active employees.");
      }
      activeEmployees.textContent = data.activeEmp ?? "--";
    })
    .catch(() => {
      activeEmployees.textContent = "--";
    });
};

loadActiveEmployees();

const loadInactiveEmployees = () => {
  if (!unit || !inactiveEmployees) {
    return;
  }

  fetch(`/overview/inactive-employees?unit=${encodeURIComponent(unit)}`)
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || "Failed to load inactive employees.");
      }
      inactiveEmployees.textContent = data.inactiveEmp ?? "--";
    })
    .catch(() => {
      inactiveEmployees.textContent = "--";
    });
};

loadInactiveEmployees();

const loadNewJoiners = () => {
  if (!unit || !newJoinersValue) {
    return;
  }

  fetch(`/overview/new-joiners?unit=${encodeURIComponent(unit)}`)
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || "Failed to load new joiners.");
      }
      if (newJoinersLabel) {
        newJoinersLabel.textContent = `New Joiners (This ${data.label})`;
      }
      newJoinersValue.textContent = data.newJoiners ?? "--";
    })
    .catch(() => {
      if (newJoinersLabel) {
        newJoinersLabel.textContent = "New Joiners";
      }
      newJoinersValue.textContent = "--";
    });
};

loadNewJoiners();

const loadCloseEmployees = () => {
  if (!unit || !closeEmployees) {
    return;
  }

  fetch(`/overview/close-employees?unit=${encodeURIComponent(unit)}`)
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || "Failed to load close employees.");
      }
      closeEmployees.textContent = data.closeEmp ?? "--";
    })
    .catch(() => {
      closeEmployees.textContent = "--";
    });
};

const loadReleaseResign = () => {
  if (!unit) {
    return;
  }

  fetch(`/overview/release-resign?unit=${encodeURIComponent(unit)}`)
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || "Failed to load release/resign.");
      }
      if (releaseLabel) {
        releaseLabel.textContent = `Release (This ${data.label})`;
      }
      if (resignLabel) {
        resignLabel.textContent = `Resign (This ${data.label})`;
      }
      if (releaseEmployees) {
        releaseEmployees.textContent = data.releaseTotal ?? "--";
      }
      if (resignEmployees) {
        resignEmployees.textContent = data.resignCount ?? "--";
      }
    })
    .catch(() => {
      if (releaseEmployees) releaseEmployees.textContent = "--";
      if (resignEmployees) resignEmployees.textContent = "--";
      if (releaseLabel) releaseLabel.textContent = "Release";
      if (resignLabel) resignLabel.textContent = "Resign";
    });
};

const loadWorkerStaffOfficer = () => {
  if (!unit) {
    return;
  }

  fetch(`/overview/worker-staff-officer?unit=${encodeURIComponent(unit)}`)
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || "Failed to load worker/staff/officer.");
      }
      if (totalWorker) totalWorker.textContent = data.totalWorker ?? "--";
      if (totalStaff) totalStaff.textContent = data.totalStaff ?? "--";
      if (totalOfficer) totalOfficer.textContent = data.totalOfficer ?? "--";
    })
    .catch(() => {
      if (totalWorker) totalWorker.textContent = "--";
      if (totalStaff) totalStaff.textContent = "--";
      if (totalOfficer) totalOfficer.textContent = "--";
    });
};

const loadGender = () => {
  if (!unit) {
    return;
  }

  fetch(`/overview/gender?unit=${encodeURIComponent(unit)}`)
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || "Failed to load gender.");
      }
      if (totalMale) totalMale.textContent = data.totalMale ?? "--";
      if (totalFemale) totalFemale.textContent = data.totalFemale ?? "--";
    })
    .catch(() => {
      if (totalMale) totalMale.textContent = "--";
      if (totalFemale) totalFemale.textContent = "--";
    });
};

const loadPayHolders = () => {
  if (!unit) {
    return;
  }

  fetch(`/overview/pay-holders?unit=${encodeURIComponent(unit)}`)
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || "Failed to load pay holders.");
      }
      if (cashPay) cashPay.textContent = data.cashPay ?? "--";
      if (bankPay) bankPay.textContent = data.bankPay ?? "--";
      if (mobilePay) mobilePay.textContent = data.mobilePay ?? "--";
      if (taxHolder) taxHolder.textContent = data.taxHolder ?? "--";
    })
    .catch(() => {
      if (cashPay) cashPay.textContent = "--";
      if (bankPay) bankPay.textContent = "--";
      if (mobilePay) mobilePay.textContent = "--";
      if (taxHolder) taxHolder.textContent = "--";
    });
};

const loadQuarterIncrement = () => {
  if (!unit) {
    return;
  }

  fetch(`/overview/quarter-increment?unit=${encodeURIComponent(unit)}`)
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || "Failed to load quarter/increment.");
      }
      if (quarterHolder) quarterHolder.textContent = data.quarterHolder ?? "--";
      if (incrementLabel) {
        incrementLabel.textContent = `Increment (This ${data.label})`;
      }
      if (incrementValue) incrementValue.textContent = data.increment ?? "--";
    })
    .catch(() => {
      if (quarterHolder) quarterHolder.textContent = "--";
      if (incrementLabel) incrementLabel.textContent = "Increment";
      if (incrementValue) incrementValue.textContent = "--";
    });
};

const loadOffDuty = () => {
  if (!unit || !offDuty) {
    return;
  }

  fetch(`/overview/off-duty?unit=${encodeURIComponent(unit)}`)
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || "Failed to load off duty.");
      }
      offDuty.textContent = data.offDuty ?? "--";
    })
    .catch(() => {
      offDuty.textContent = "--";
    });
};

const loadLeaveMaternity = () => {
  if (!unit) {
    return;
  }

  fetch(`/overview/leave-maternity?unit=${encodeURIComponent(unit)}`)
    .then(async (response) => {
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.message || "Failed to load leave/maternity.");
      }
      if (leaveLabel) {
        leaveLabel.textContent = `Leave (This ${data.label})`;
      }
      if (leaveValue) {
        leaveValue.textContent = `${data.leaveDays ?? 0}/${data.leaveEmp ?? 0}`;
      }
      if (maternityCount) {
        maternityCount.textContent = data.maternity ?? "--";
      }
    })
    .catch(() => {
      if (leaveLabel) leaveLabel.textContent = "Leave";
      if (leaveValue) leaveValue.textContent = "--";
      if (maternityCount) maternityCount.textContent = "--";
    });
};

loadCloseEmployees();
loadReleaseResign();
loadWorkerStaffOfficer();
loadGender();
loadPayHolders();
loadQuarterIncrement();
loadOffDuty();
loadLeaveMaternity();
