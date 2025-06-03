import {
  getStepCounter,
  setAddress,
  setAlternatePhone,
  setCity,
  setCountry,
  setDate,
  setEmail,
  setFirstName,
  setGender,
  setLastName,
  setNationality,
  setPhone,
  setStepCounter,
  setZip,
  getFirstName,
  getLastName,
  getDate,
  getEmail,
  getPhone,
  getAlternatePhone,
  getAddress,
  getCity,
  getZip,
  getCounrty,
  setExperience,
  getExperience,
  setContact,
  getContact,
  setComment,
  setNews,
  setTerms,
  getGender,
  getNationality,
  getInterests,
  getNews,
  getComment,
} from "./getAndSetFunctions.js";

import {
  currentProgressBar,
  renderCurrentStep,
  renderCurrentStepContent,
  updateFirstPage,
  updateProgressBar,
  updateSecondPage,
  validateFirstPage,
  validateSecondPage,
  isAlpha,
  validateField,
  isValidDate,
  isValidEmail,
  isValidPhoneNumber,
  isValidStreetAddress,
  isValidCity,
  isValidZip,
  isValidCountry,
  validateInterests,
  isValidExperience,
  isValidContactMethod,
  validateTerms,
  validateThirdPage,
  updateThirdPage,
  updateSummaryForm,
} from "./functions.js";

let progressBar = document.querySelector(".progress");

let stepCounter = getStepCounter();
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let stepsContent = document.querySelectorAll(".content");
let steps = document.querySelectorAll(".step-progress");

let firstName = document.querySelector(".first-name");
let firstNameInput = document.querySelector(".first-name input");

let lastName = document.querySelector(".last-name");
let lastNameInput = document.querySelector(".last-name input");

let birthDate = document.querySelector(".birth");
let birthDateInput = document.querySelector(".birth input");

let genderInput = document.querySelector("#gender");

let nationalityInput = document.querySelector(".nationality input");

let emailAddress = document.querySelector(".email");
let emailAddressInput = document.querySelector(".email input");

let phoneNumber = document.querySelector(".phone-number");
let phoneNumberInput = document.querySelector(".phone-number input");

let alternateNumber = document.querySelector(".alternate-number");
let alternateNumberInput = document.querySelector(".alternate-number input");

let streetAddress = document.querySelector(".address");
let streetAddressInput = document.querySelector(".address input");

let city = document.querySelector(".city");
let cityInput = document.querySelector(".city input");

let zip = document.querySelector(".zip-code");
let zipInput = document.querySelector(".zip-code input");

let country = document.querySelector(".country");
let countryInput = document.querySelector("#country");

let checkboxGroup = document.querySelector(".checkbox-group");
let checkboxes = checkboxGroup.querySelectorAll("input[type='checkbox']");

let yearsOfExperience = document.querySelector(".experience");
let yearsOfExperienceInput = document.querySelector(".experience select");

let contactMethod = document.querySelector(".preferred");
let contactMethodInput = document.querySelector(".preferred select");

let additionalCommentInput = document.querySelector(".comments input");

let newsLetterInput = document.querySelector(".subscribe input");

let termsAndConditions = document.querySelector(".terms-and-newsletter");
let termsAndConditionsInput = document.querySelector(".terms input");

// update first page details
updateFirstPage(
  firstNameInput,
  lastNameInput,
  birthDateInput,
  genderInput,
  nationalityInput
);

// update second page details
updateSecondPage(
  emailAddressInput,
  phoneNumberInput,
  alternateNumberInput,
  streetAddressInput,
  cityInput,
  zipInput,
  countryInput
);

// update third page details
updateThirdPage(
  checkboxes,
  yearsOfExperienceInput,
  contactMethodInput,
  additionalCommentInput,
  newsLetterInput,
  termsAndConditionsInput
);

// update summary form details
updateSummaryForm();

// render current step circle
renderCurrentStep(steps);

// render current step content
renderCurrentStepContent(stepsContent, prevBtn, nextBtn);

// render current step progress bar
currentProgressBar(stepCounter, progressBar);

nextBtn.addEventListener("click", (_) => {
  if (stepCounter !== 4) {
    // validate first page
    if (stepCounter === 1) {
      if (!validateFirstPage(firstName, lastName, birthDate)) return;
    }

    // validate second page
    else if (stepCounter === 2) {
      if (
        !validateSecondPage(
          emailAddress,
          phoneNumber,
          alternateNumber,
          streetAddress,
          city,
          zip,
          country
        )
      )
        return;
    } else if (stepCounter === 3) {
      if (
        !validateThirdPage(
          checkboxGroup,
          yearsOfExperience,
          contactMethod,
          termsAndConditions
        )
      )
        return;
    }
    stepCounter += 1;
    setStepCounter(stepCounter);
    updateProgressBar(progressBar, "right");
    renderCurrentStep(steps);
    renderCurrentStepContent(stepsContent, prevBtn, nextBtn);
  }
  updateSummaryForm();
});

prevBtn.addEventListener("click", (_) => {
  if (stepCounter > 1) {
    stepCounter -= 1;
    sessionStorage.setItem("stepCounter", JSON.stringify(stepCounter));
    updateProgressBar(progressBar, "left");
    renderCurrentStep(steps);
    renderCurrentStepContent(stepsContent, prevBtn, nextBtn);
  }
});

firstNameInput.addEventListener("input", (_) => {
  setFirstName(firstNameInput.value.trim());
  // validateFirstName(firstName);
  validateField(
    isAlpha,
    getFirstName,
    firstName,
    "Name can't be numbers or chars"
  );
});

lastNameInput.addEventListener("input", (_) => {
  setLastName(lastNameInput.value.trim());
  validateField(
    isAlpha,
    getLastName,
    lastName,
    "Name can't be numbers or chars"
  );
});

birthDateInput.addEventListener("change", (_) => {
  setDate(birthDateInput.value.trim());
  validateField(isValidDate, getDate, birthDate, "write a valid date");
});

genderInput.addEventListener("change", (_) => {
  setGender(genderInput.value);
});

nationalityInput.addEventListener("input", (_) => {
  setNationality(nationalityInput.value);
});

emailAddressInput.addEventListener("input", (_) => {
  setEmail(emailAddressInput.value);
  validateField(
    isValidEmail,
    getEmail,
    emailAddress,
    "Enter valid email address"
  );
});

phoneNumberInput.addEventListener("input", (_) => {
  setPhone(phoneNumberInput.value);
  validateField(
    isValidPhoneNumber,
    getPhone,
    phoneNumber,
    "Enter valid phone number"
  );
});

alternateNumberInput.addEventListener("input", (_) => {
  setAlternatePhone(alternateNumberInput.value);
  validateField(
    isValidPhoneNumber,
    getAlternatePhone,
    alternateNumber,
    "Enter valid phone number",
    false
  );
});

streetAddressInput.addEventListener("input", (_) => {
  setAddress(streetAddressInput.value);
  validateField(
    isValidStreetAddress,
    getAddress,
    streetAddress,
    "Enter valid address"
  );
});

cityInput.addEventListener("input", (_) => {
  setCity(cityInput.value);
  validateField(isValidCity, getCity, city, "Enter valid city");
});

zipInput.addEventListener("input", (_) => {
  setZip(zipInput.value);
  validateField(isValidZip, getZip, zip, "Enter valid zip code");
});

countryInput.addEventListener("change", (_) => {
  setCountry(countryInput.value);
  validateField(isValidCountry, getCounrty, country, "Select Country");
});

checkboxGroup.addEventListener("change", (_) => {
  validateInterests(checkboxGroup);
});

yearsOfExperienceInput.addEventListener("change", (_) => {
  setExperience(yearsOfExperienceInput.value);
  validateField(
    isValidExperience,
    getExperience,
    yearsOfExperience,
    "Select Experience"
  );
});

setContact(contactMethodInput.value);
contactMethodInput.addEventListener("change", (_) => {
  setContact(contactMethodInput.value);

  validateField(
    isValidContactMethod,
    getContact,
    contactMethod,
    "Select contact method"
  );
});

additionalCommentInput.addEventListener("input", (_) => {
  setComment(additionalCommentInput.value);
});

newsLetterInput.addEventListener("change", (_) => {
  setNews(newsLetterInput.checked);
});

termsAndConditionsInput.addEventListener("change", (_) => {
  setTerms(termsAndConditionsInput.checked);
  validateTerms(termsAndConditions);
});
