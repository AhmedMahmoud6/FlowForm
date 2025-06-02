let progressBar = document.querySelector(".progress");

let stepCounter = JSON.parse(sessionStorage.getItem("stepCounter"))
  ? JSON.parse(sessionStorage.getItem("stepCounter"))
  : 1;
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let stepsContent = document.querySelectorAll(".content");
let steps = document.querySelectorAll(".step-progress");

renderCurrentStep(steps);
renderCurrentStepContent(stepsContent, prevBtn, nextBtn);
currentProgressBar(stepCounter, progressBar);

nextBtn.addEventListener("click", (_) => {
  if (stepCounter !== 4) {
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

// document.addEventListener("click", (_) => {
//   testWidth += 33;
//   progressBar.style = `width: ${testWidth}%`;
// });
