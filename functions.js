let stepProgressWidth = 0;

function renderCurrentStepContent(stepsContent, prevBtn, nextBtn) {
  // add hidden to all steps
  for (let currStep of stepsContent) {
    currStep.classList.add("hidden");
  }

  // remove hidden from the current step
  for (let currStep of stepsContent) {
    if (currStep.classList.contains(`step-${stepCounter}-content`)) {
      currStep.classList.remove("hidden");
    }
  }

  prevBtn.classList.toggle("hidden", stepCounter === 1);
  nextBtn.classList.toggle("hidden", stepCounter === 4);
}

function renderCurrentStep(steps) {
  // remove active or completed from all steps
  for (let currStep of steps) {
    currStep.classList.remove("active");
    currStep.classList.remove("completed");
  }

  // adding active or completed
  for (let currStep of steps) {
    if (currStep.classList.contains(`step-${stepCounter}`)) {
      currStep.classList.add("active");
      break;
    } else {
      currStep.classList.add("completed");
    }
  }
}

function updateProgressBar(progressBar, move = "right") {
  if (move === "right") stepProgressWidth += 33;
  else if (move === "left") stepProgressWidth -= 33;
  progressBar.style = `width: ${stepProgressWidth}%`;
}

function currentProgressBar(stepCounter, progressBar) {
  stepProgressWidth = 33 * (stepCounter - 1);
  progressBar.style = `width: ${stepProgressWidth}%`;
}

function isAlpha(str) {
  return /^[a-zA-Z]+[0-9]*[a-zA-Z]*$/.test(str);
}

function setFirstName(value) {
  sessionStorage.setItem("firstname", JSON.stringify(value));
}

function getFirstName() {
  return JSON.parse(sessionStorage.getItem("firstname"));
}

function setLastName(value) {
  sessionStorage.setItem("lastname", JSON.stringify(value));
}

function getLastName() {
  return JSON.parse(sessionStorage.getItem("lastname"));
}

function setDate(value) {
  sessionStorage.setItem("date", JSON.stringify(value));
}

function getDate() {
  return JSON.parse(sessionStorage.getItem("date"));
}

function setGender(value) {
  sessionStorage.setItem("gender", JSON.stringify(value));
}

function getGender() {
  return JSON.parse(sessionStorage.getItem("gender"));
}
function setNationality(value) {
  sessionStorage.setItem("nationality", JSON.stringify(value));
}

function getNationality() {
  return JSON.parse(sessionStorage.getItem("nationality"));
}

function validateFirstName(firstName) {
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

function validateLastName(lastName) {
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

function validateDate(birthDate, birthDateInput) {
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

function validateFirstPage(firstName, lastName, birthDate, birthDateInput) {
  if (
    validateFirstName(firstName) &&
    validateLastName(lastName) &&
    validateDate(birthDate, birthDateInput)
  ) {
    return true;
  }
  return false;
}

function updateFirstPage(
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
