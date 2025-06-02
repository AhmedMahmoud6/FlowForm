import {
  getAddress,
  getAlternatePhone,
  getCity,
  getCounrty,
  getDate,
  getEmail,
  getFirstName,
  getGender,
  getLastName,
  getNationality,
  getPhone,
  getStepCounter,
  getZip,
} from "./getAndSetFunctions.js";

let stepProgressWidth = 0;

export function renderCurrentStepContent(stepsContent, prevBtn, nextBtn) {
  // add hidden to all steps
  for (let currStep of stepsContent) {
    currStep.classList.add("hidden");
  }

  // remove hidden from the current step
  for (let currStep of stepsContent) {
    if (currStep.classList.contains(`step-${getStepCounter()}-content`)) {
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
    if (currStep.classList.contains(`step-${getStepCounter()}`)) {
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

function isAlpha(str) {
  return /^[a-zA-Z]+[0-9]*[a-zA-Z]*$/.test(str);
}

export function validateFirstName(firstName) {
  // if first Name is a number or char
  if (!isAlpha(getFirstName())) {
    if (getFirstName() !== "")
      firstName.querySelector("p").textContent = "Name can't be numbers";
    firstName.querySelector("p").classList.remove("hidden");
    return false;
  } else {
    firstName.querySelector("p").classList.add("hidden");
    firstName.querySelector("p").textContent = "This field is required";
    return true;
  }
}

export function validateLastName(lastName) {
  // if last Name is a number or char
  if (!isAlpha(getLastName())) {
    if (getLastName() !== "")
      lastName.querySelector("p").textContent = "Name can't be numbers";
    lastName.querySelector("p").classList.remove("hidden");
    return false;
  } else {
    lastName.querySelector("p").classList.add("hidden");
    lastName.querySelector("p").textContent = "This field is required";
    return true;
  }
}

function isValidDate(value) {
  const date = new Date(value);
  return value !== "" && !isNaN(date.getTime());
}

export function validateDate(birthDate, birthDateInput) {
  if (!isValidDate(birthDateInput.value)) {
    if (birthDateInput.value !== "")
      birthDate.querySelector("p").textContent = "write a valid date";
    birthDate.querySelector("p").classList.remove("hidden");
    return false;
  } else {
    birthDate.querySelector("p").classList.add("hidden");
    birthDate.querySelector("p").textContent = "This field is required";
    return true;
  }
}

export function validateFirstPage(
  firstName,
  lastName,
  birthDate,
  birthDateInput
) {
  if (
    validateFirstName(firstName) &&
    validateLastName(lastName) &&
    validateDate(birthDate, birthDateInput)
  ) {
    return true;
  }
  return false;
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

function isValidEmail(email) {
  return /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(email);
}

export function validateEmail(emailAddress) {
  // if not valid Email
  if (!isValidEmail(getEmail())) {
    if (getEmail() !== "")
      emailAddress.querySelector("p").textContent = "Enter valid email address";
    emailAddress.querySelector("p").classList.remove("hidden");
    return false;
  } else {
    emailAddress.querySelector("p").classList.add("hidden");
    emailAddress.querySelector("p").textContent = "This field is required";
    return true;
  }
}

function isValidPhoneNumber(phone) {
  const cleaned = phone.replace(/[\s\-()]/g, ""); // strip spaces, dashes, parentheses
  return /^\+?[0-9]{7,15}$/.test(cleaned);
}

export function validatePhoneNumber(phoneNumber) {
  // if not valid phone number
  if (!isValidPhoneNumber(getPhone())) {
    if (getPhone() !== "")
      phoneNumber.querySelector("p").textContent = "Enter valid phone number";
    phoneNumber.querySelector("p").classList.remove("hidden");
    return false;
  } else {
    phoneNumber.querySelector("p").classList.add("hidden");
    phoneNumber.querySelector("p").textContent = "This field is required";
    return true;
  }
}

export function validateAlternatePhoneNumber(alternateNumber) {
  // if valid alternate phone number or empty
  if (getAlternatePhone() === "" || isValidPhoneNumber(getAlternatePhone())) {
    alternateNumber.querySelector("p").classList.add("hidden");
    return true;
  }
  if (!isValidPhoneNumber(getAlternatePhone())) {
    alternateNumber.querySelector("p").textContent = "Enter valid phone number";
    alternateNumber.querySelector("p").classList.remove("hidden");
    return false;
  }
}

function isValidStreetAddress(address) {
  return /^[a-zA-Z0-9\s.,#\-\/]{5,100}$/.test(address.trim());
}

export function validateStreetAddress(streetAddress) {
  // if not valid address
  if (!isValidStreetAddress(getAddress())) {
    if (getAddress() !== "")
      streetAddress.querySelector("p").textContent = "Enter valid address";
    streetAddress.querySelector("p").classList.remove("hidden");
    return false;
  } else {
    streetAddress.querySelector("p").classList.add("hidden");
    streetAddress.querySelector("p").textContent = "This field is required";
    return true;
  }
}

function isValidCity(city) {
  return /^[a-zA-Z\u00C0-\u024F'’\- ]{2,50}$/.test(city.trim());
}

export function validateCity(city) {
  // if not valid city
  if (!isValidCity(getCity())) {
    if (getCity() !== "")
      city.querySelector("p").textContent = "Enter valid City";
    city.querySelector("p").classList.remove("hidden");
    return false;
  } else {
    city.querySelector("p").classList.add("hidden");
    city.querySelector("p").textContent = "This field is required";
    return true;
  }
}

function isValidZip(zip) {
  return /^\d{4,10}$/.test(zip);
}

export function validateZip(zip) {
  // if not valid zip
  if (!isValidZip(getZip())) {
    if (getZip() !== "")
      zip.querySelector("p").textContent = "Enter valid zip code";
    zip.querySelector("p").classList.remove("hidden");
    return false;
  } else {
    zip.querySelector("p").classList.add("hidden");
    zip.querySelector("p").textContent = "This field is required";
    return true;
  }
}

export function validateCountry(country) {
  if (!getCounrty()) {
    country.querySelector("p").classList.remove("hidden");
    return false;
  } else {
    country.querySelector("p").classList.add("hidden");
    return true;
  }
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
  if (
    validateEmail(emailAddress) &&
    validatePhoneNumber(phoneNumber) &&
    validateAlternatePhoneNumber(alternateNumber) &&
    validateStreetAddress(streetAddress) &&
    validateCity(city) &&
    validateZip(zip) &&
    validateCountry(country)
  ) {
    return true;
  }
  return false;
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
