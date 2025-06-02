let progressBar = document.querySelector(".progress");

let stepCounter = JSON.parse(sessionStorage.getItem("stepCounter"))
  ? JSON.parse(sessionStorage.getItem("stepCounter"))
  : 1;
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

firstNameInput.value = getFirstName();
lastNameInput.value = getLastName();
birthDateInput.value = getDate();

renderCurrentStep(steps);
renderCurrentStepContent(stepsContent, prevBtn, nextBtn);
currentProgressBar(stepCounter, progressBar);

nextBtn.addEventListener("click", (_) => {
  if (stepCounter !== 4) {
    if (!validateFirstPage(firstName, lastName, birthDate, birthDateInput))
      return;

    stepCounter += 1;
    sessionStorage.setItem("stepCounter", JSON.stringify(stepCounter));
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
