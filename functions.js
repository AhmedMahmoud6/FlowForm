import {
  getAddress,
  getAlternatePhone,
  getCity,
  getComment,
  getContact,
  getCounrty,
  getDate,
  getEmail,
  getExperience,
  getFirstName,
  getGender,
  getInterests,
  getLastName,
  getNationality,
  getNews,
  getPhone,
  getStepCounter,
  getTerms,
  getZip,
  setInterests,
} from "./getAndSetFunctions.js";

let stepProgressWidth = 0;

export function renderCurrentStepContent(stepsContent, prevBtn, nextBtn) {
  // add hidden to all steps
  for (let currStep of stepsContent) {
    currStep.classList.add("hidden");
  }

  // remove hidden from the current step
  for (let currStep of stepsContent) {
    if (currStep.classList.contains(`step-${getStepCounter() || 1}-content`)) {
      currStep.classList.remove("hidden");
    }
  }

  prevBtn.classList.toggle("hidden", getStepCounter() === 1);
  nextBtn.classList.toggle("hidden", getStepCounter() === 4);
}

export function renderCurrentStep(steps) {
  // remove active or completed from all steps
  for (let currStep of steps) {
    currStep.classList.remove("active");
    currStep.classList.remove("completed");
  }

  // adding active or completed
  for (let currStep of steps) {
    if (currStep.classList.contains(`step-${getStepCounter() || 1}`)) {
      currStep.classList.add("active");
      break;
    } else {
      currStep.classList.add("completed");
    }
  }
}

export function updateProgressBar(progressBar, move = "right") {
  if (move === "right") stepProgressWidth += 33;
  else if (move === "left") stepProgressWidth -= 33;
  progressBar.style = `width: ${stepProgressWidth}%`;
}

export function currentProgressBar(stepCounter, progressBar) {
  stepProgressWidth = 33 * (stepCounter - 1);
  progressBar.style = `width: ${stepProgressWidth}%`;
}

export function isAlpha(str) {
  return /^[a-zA-Z]+[0-9]*[a-zA-Z]*$/.test(str);
}

export function isValidDate(value) {
  const date = new Date(value);
  return value !== "" && !isNaN(date.getTime());
}

export function validateField(
  isValidField,
  getFieldData,
  field,
  customErrorMsg = "Enter a valid value",
  isRequired = true
) {
  const value = getFieldData();

  // if required and empty
  if (isRequired && value === "") {
    field.querySelector("p").textContent = "This field is required";
    field.querySelector("p").classList.remove("hidden");
    return false;
  }

  // if not valid input
  if (!isValidField(value) && value !== "") {
    field.querySelector("p").textContent = customErrorMsg;
    field.querySelector("p").classList.remove("hidden");
    return false;
  }

  // if not required and valid input or even empty
  field.querySelector("p").classList.add("hidden");
  return true;
}

export function validateFirstPage(firstName, lastName, birthDate) {
  return (
    validateField(isAlpha, getFirstName, firstName, "Invalid first name") &&
    validateField(isAlpha, getLastName, lastName, "Invalid last name") &&
    validateField(isValidDate, getDate, birthDate, "write a valid date")
  );
}

export function updateFirstPage(
  firstNameInput,
  lastNameInput,
  birthDateInput,
  genderInput,
  nationalityInput
) {
  firstNameInput.value = getFirstName();
  lastNameInput.value = getLastName();
  birthDateInput.value = getDate();
  genderInput.value = getGender() || "";
  nationalityInput.value = getNationality();
}

export function isValidEmail(email) {
  return /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(email);
}

export function isValidPhoneNumber(phone) {
  const cleaned = phone.replace(/[\s\-()]/g, ""); // strip spaces, dashes, parentheses
  return /^\+?[0-9]{7,15}$/.test(cleaned);
}

export function isValidStreetAddress(address) {
  return /^[a-zA-Z0-9\s.,#\-\/]{5,100}$/.test(address.trim());
}

export function isValidCity(city) {
  return /^[a-zA-Z\u00C0-\u024F'’\- ]{2,50}$/.test(city.trim());
}

export function isValidZip(zip) {
  return /^\d{4,10}$/.test(zip);
}

export function isValidCountry(country) {
  return country !== "";
}

export function validateSecondPage(
  emailAddress,
  phoneNumber,
  alternateNumber,
  streetAddress,
  city,
  zip,
  country
) {
  return (
    validateField(
      isValidEmail,
      getEmail,
      emailAddress,
      "Enter valid email address"
    ) &&
    validateField(
      isValidPhoneNumber,
      getPhone,
      phoneNumber,
      "Enter valid phone number"
    ) &&
    validateField(
      isValidPhoneNumber,
      getAlternatePhone,
      alternateNumber,
      "Enter valid phone number",
      false
    ) &&
    validateField(
      isValidStreetAddress,
      getAddress,
      streetAddress,
      "Enter valid address"
    ) &&
    validateField(isValidCity, getCity, city, "Enter valid city") &&
    validateField(isValidZip, getZip, zip, "Enter valid zip code") &&
    validateField(isValidCountry, getCounrty, country, "Select Country")
  );
}

export function updateSecondPage(
  emailAddressInput,
  phoneNumberInput,
  alternateNumberInput,
  streetAddressInput,
  cityInput,
  zipInput,
  countryInput
) {
  emailAddressInput.value = getEmail();
  phoneNumberInput.value = getPhone();
  alternateNumberInput.value = getAlternatePhone();
  streetAddressInput.value = getAddress();
  cityInput.value = getCity();
  zipInput.value = getZip();
  countryInput.value = getCounrty();
}

export function validateInterests(fieldContainer) {
  const checkboxItems = fieldContainer.querySelectorAll(".checkbox-item");
  const checkboxes = fieldContainer.querySelectorAll("input[type='checkbox']");
  const errorElement = fieldContainer.querySelector("p");

  const selectedValues = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  setInterests(selectedValues); // update to session storage

  if (selectedValues.length === 0) {
    errorElement.textContent = "Please select at least one interest.";
    errorElement.classList.remove("hidden");
    checkboxItems.forEach((element) => {
      element.classList.add("outline-red-400");
    });
    return false;
  } else {
    errorElement.classList.add("hidden");
    checkboxItems.forEach((element) => {
      element.classList.remove("outline-red-400");
    });
    return true;
  }
}

export function validateTerms(terms) {
  if (getTerms()) {
    terms.querySelector("p").classList.add("hidden");
    return true;
  }
  terms.querySelector("p").classList.remove("hidden");
  return false;
}

export function isValidExperience(experience) {
  return experience !== "";
}

export function isValidContactMethod(contact) {
  return contact !== "";
}

export function validateThirdPage(
  checkboxGroup,
  yearsOfExperience,
  contactMethod,
  termsAndConditions
) {
  return (
    validateInterests(checkboxGroup) &&
    validateField(
      isValidExperience,
      getExperience,
      yearsOfExperience,
      "Select Experience"
    ) &&
    validateField(
      isValidContactMethod,
      getContact,
      contactMethod,
      "Select contact method"
    ) &&
    validateTerms(termsAndConditions)
  );
}

export function updateThirdPage(
  checkboxes,
  yearsOfExperienceInput,
  contactMethodInput,
  additionalCommentInput,
  newsLetterInput,
  termsAndConditionsInput
) {
  updateInterests(checkboxes);
  yearsOfExperienceInput.value = getExperience();
  contactMethodInput.value = getContact();
  additionalCommentInput.value = getComment();
  newsLetterInput.checked = getNews();
  termsAndConditionsInput.checked = getTerms();
}

export function updateInterests(checkboxes) {
  for (let currCheckbox of checkboxes) {
    getInterests().forEach((element) => {
      if (element === currCheckbox.value) currCheckbox.checked = true;
      return;
    });
  }
}
