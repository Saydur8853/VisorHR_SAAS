const passwordInput = document.querySelector("input[name='password']");
const usernameInput = document.querySelector("input[name='username']");
const notice = document.querySelector(".notice");
const form = document.querySelector(".form");
const AUTH_STORAGE_KEY = "visorhr.auth";
const TOKEN_STORAGE_KEY = "visorhr.token";
const USER_STORAGE_KEY = "visorhr.user";
const ROLES_STORAGE_KEY = "visorhr.roles";
const registerForm = document.querySelector("[data-register-form]");
const registerNotice = document.querySelector("[data-register-notice]");
const registerNameInput = registerForm?.querySelector("input[name='registerName']");
const registerPhoneInput = registerForm?.querySelector("input[name='registerPhone']");
const registerEmployeeCodeInput = registerForm?.querySelector("input[name='registerEmployeeCode']");
const registerProfilePhotoInput = registerForm?.querySelector("input[name='registerProfilePhoto']");
const registerProfilePhotoPreview = document.querySelector("#registerProfilePhotoPreview");
const registerEmailInput = registerForm?.querySelector("input[name='registerEmail']");
const registerPasswordInput = registerForm?.querySelector("input[name='registerPassword']");
const tabPanels = Array.from(document.querySelectorAll(".card-panel"));
const authToggles = Array.from(document.querySelectorAll("[data-auth-toggle]"));
const toggleButtons = Array.from(document.querySelectorAll("[data-password-toggle]"));

if (toggleButtons.length > 0) {
  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const wrap = button.closest(".password-wrap");
      const input = wrap?.querySelector("input[type='password'], input[type='text']");
      if (!input) {
        return;
      }

      const isHidden = input.type === "password";
      input.type = isHidden ? "text" : "password";
      button.textContent = isHidden ? "Hide" : "Show";
    });
  });
}

const setAuthPanel = (panelId) => {
  if (!tabPanels.length) {
    return;
  }
  tabPanels.forEach((panel) => {
    const isActive = panel.id === panelId;
    panel.classList.toggle("is-active", isActive);
    panel.setAttribute("aria-hidden", isActive ? "false" : "true");
  });
};

if (authToggles.length > 0) {
  authToggles.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-auth-toggle");
      setAuthPanel(target === "register" ? "register-panel" : "signin-panel");
    });
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = form.querySelector(".primary");
    if (!button) {
      return;
    }

    if (!notice) {
      return;
    }

    notice.className = "notice";
    notice.textContent = "";

    button.textContent = "Signing in...";
    button.disabled = true;

    const payload = {
      username: usernameInput?.value?.trim(),
      password: passwordInput?.value
    };

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
        if (response.ok) {
          notice.classList.add("is-success");
          notice.textContent = "Signing in...";
          button.textContent = "Signed in";
          localStorage.setItem(AUTH_STORAGE_KEY, Date.now().toString());
          if (data?.token) {
            localStorage.setItem(TOKEN_STORAGE_KEY, data.token);
          }
          if (usernameInput?.value) {
            localStorage.setItem(USER_STORAGE_KEY, usernameInput.value.trim());
          }
          if (Array.isArray(data?.roles)) {
            localStorage.setItem(ROLES_STORAGE_KEY, JSON.stringify(data.roles));
          }
          window.location.href = "/welcome.html";
          return;
        }

        notice.classList.add("is-error");
        notice.textContent = data.message || "Login failed.";
        button.textContent = "Sign in";
        button.disabled = false;
      })
      .catch(() => {
        notice.classList.add("is-error");
        notice.textContent = "Could not reach the server.";
        button.textContent = "Sign in";
        button.disabled = false;
      });
  });
}

if (registerForm) {
  if (registerProfilePhotoInput && registerProfilePhotoPreview) {
    registerProfilePhotoInput.addEventListener("change", () => {
      const file = registerProfilePhotoInput.files?.[0];
      if (!file) {
        registerProfilePhotoPreview.src = "";
        registerProfilePhotoPreview.classList.add("is-empty");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          registerProfilePhotoPreview.src = reader.result;
          registerProfilePhotoPreview.classList.remove("is-empty");
        }
      };
      reader.readAsDataURL(file);
    });
  }

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!registerNotice) {
      return;
    }

    const button = registerForm.querySelector(".primary");
    if (!button) {
      return;
    }

    registerNotice.className = "notice";
    registerNotice.textContent = "";

    button.disabled = true;
    button.textContent = "Creating account...";

    const readProfilePhoto = () => {
      const file = registerProfilePhotoInput?.files?.[0];
      if (!file) {
        return Promise.resolve(null);
      }
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : null);
        reader.onerror = () => reject(new Error("Failed to read file."));
        reader.readAsDataURL(file);
      });
    };

    readProfilePhoto()
      .then((profilePhotoUrl) => {
        const payload = {
          name: registerNameInput?.value?.trim(),
          phoneNumber: registerPhoneInput?.value?.trim(),
          employeeCode: registerEmployeeCodeInput?.value?.trim() || null,
          profilePhotoUrl,
          email: registerEmailInput?.value?.trim(),
          password: registerPasswordInput?.value
        };

        return fetch("/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      })
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
        if (response.ok) {
          registerNotice.classList.add("is-success");
          registerNotice.textContent = "Account created. You can sign in now.";
          button.textContent = "Account created";
          registerForm.reset();
          setAuthPanel("signin-panel");
          return;
        }

        registerNotice.classList.add("is-error");
        if (data?.message) {
          registerNotice.textContent = data.message;
        } else if (Array.isArray(data)) {
          registerNotice.textContent = data.map((item) => item.description || item.code).filter(Boolean).join(" ") || "Registration failed.";
        } else if (Array.isArray(data?.errors)) {
          registerNotice.textContent = data.errors.map((item) => item.description || item.code).filter(Boolean).join(" ") || "Registration failed.";
        } else {
          registerNotice.textContent = "Registration failed.";
        }
        button.textContent = "Create account";
        button.disabled = false;
      })
      .catch((error) => {
        registerNotice.classList.add("is-error");
        registerNotice.textContent = error?.message || "Could not reach the server.";
        button.textContent = "Create account";
        button.disabled = false;
      });
  });
}
