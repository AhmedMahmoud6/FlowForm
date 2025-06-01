let progressBar = document.querySelector(".progress");
let testWidth = 0;

document.addEventListener("click", (_) => {
  testWidth += 33;
  progressBar.style = `width: ${testWidth}%`;
});
