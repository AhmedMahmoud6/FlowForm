let progressBar = document.querySelector(".progress");

let stepCounter = getStepCounter() || 1;
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

// render current step circle
renderCurrentStep(steps);

// render current step content
renderCurrentStepContent(stepsContent, prevBtn, nextBtn);

// render current step progress bar
currentProgressBar(stepCounter, progressBar);

nextBtn.addEventListener("click", (_) => {
  if (stepCounter !== 4) {
    // validate first page
    if (!validateFirstPage(firstName, lastName, birthDate, birthDateInput))
      return;

    // validate second page
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

    stepCounter += 1;
    setStepCounter(stepCounter);
    updateProgressBar(progressBar, "right");
    renderCurrentStep(steps);
    renderCurrentStepContent(stepsContent, prevBtn, nextBtn);
  }
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
  validateFirstName(firstName);
});

lastNameInput.addEventListener("input", (_) => {
  setLastName(lastNameInput.value.trim());
  validateLastName(lastName);
});

birthDateInput.addEventListener("change", (_) => {
  setDate(birthDateInput.value.trim());
  validateDate(birthDate, birthDateInput);
});

genderInput.addEventListener("change", (_) => {
  setGender(genderInput.value);
});

nationalityInput.addEventListener("input", (_) => {
  setNationality();
});

emailAddressInput.addEventListener("input", (_) => {
  setEmail(emailAddressInput.value);
  validateEmail(emailAddress);
});

phoneNumberInput.addEventListener("input", (_) => {
  setPhone(phoneNumberInput.value);
  validatePhoneNumber(phoneNumber);
});

alternateNumberInput.addEventListener("input", (_) => {
  setAlternatePhone(alternateNumberInput.value);
  validateAlternatePhoneNumber(alternateNumber);
});

streetAddressInput.addEventListener("input", (_) => {
  setAddress(streetAddressInput.value);
  validateStreetAddress(streetAddress);
});

cityInput.addEventListener("input", (_) => {
  setCity(cityInput.value);
  validateCity(city);
});

zipInput.addEventListener("input", (_) => {
  setZip(zipInput.value);
  validateZip(zip);
});

countryInput.addEventListener("change", (_) => {
  setCountry(countryInput.value);
  validateCountry(country);
});
