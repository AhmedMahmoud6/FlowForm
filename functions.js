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
