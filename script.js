const form = document.querySelector("#registration-form");
const formStatus = document.querySelector("#form-status");

const fields = {
  fullName: {
    input: document.querySelector("#full-name"),
    message: document.querySelector("#full-name-error"),
    validate: (value) => value.trim().length >= 2 ? "" : "Enter your full name.",
  },
  studentId: {
    input: document.querySelector("#student-id"),
    message: document.querySelector("#student-id-error"),
    validate: (value) => /^[A-Za-z0-9-]{4,12}$/.test(value.trim())
      ? ""
      : "Use 4–12 letters, numbers or hyphens.",
  },
  email: {
    input: document.querySelector("#email"),
    message: document.querySelector("#email-error"),
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
      ? ""
      : "Enter a valid university email address.",
  },
  studyMode: {
    input: document.querySelector("#study-mode"),
    message: document.querySelector("#study-mode-error"),
    validate: (value) => value ? "" : "Choose a study mode.",
  },
  classTime: {
    input: document.querySelector("#class-time"),
    message: document.querySelector("#class-time-error"),
    validate: (value) => value ? "" : "Choose a preferred class time.",
  },
};

const terms = document.querySelector("#terms");
const termsMessage = document.querySelector("#terms-error");

function setFieldMessage(field, message) {
  const fieldWrapper = field.input.closest(".field");
  field.message.textContent = message;
  fieldWrapper.classList.toggle("has-error", Boolean(message));
  field.input.setAttribute("aria-invalid", message ? "true" : "false");
}

function validateField(field) {
  const message = field.validate(field.input.value);
  setFieldMessage(field, message);
  return !message;
}

function validateTerms() {
  const message = terms.checked ? "" : "Confirm the prerequisite before submitting.";
  termsMessage.textContent = message;
  terms.closest(".consent-row").classList.toggle("has-error", Boolean(message));
  terms.setAttribute("aria-invalid", message ? "true" : "false");
  return !message;
}

function showStatus(message, isError = false) {
  formStatus.hidden = false;
  formStatus.textContent = message;
  formStatus.classList.toggle("error", isError);
}

Object.values(fields).forEach((field) => {
  field.input.addEventListener("input", () => {
    if (field.input.getAttribute("aria-invalid") === "true") {
      validateField(field);
    }
  });
});

terms.addEventListener("change", validateTerms);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fieldsAreValid = Object.values(fields).map(validateField).every(Boolean);
  const termsAreValid = validateTerms();

  if (!fieldsAreValid || !termsAreValid) {
    showStatus("Please review the highlighted fields before submitting.", true);
    const firstInvalid = form.querySelector('[aria-invalid="true"]');
    firstInvalid?.focus();
    return;
  }

  showStatus("Registration received — your ICT461 place is ready for confirmation.");
  formStatus.focus();
});
