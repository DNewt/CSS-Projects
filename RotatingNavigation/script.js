const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

console.log(container.classList);

open.addEventListener("click", () => check());

//close.addEventListener("click", () => container.classList.remove("show-nav"));

function check() {
  if (!container.classList.contains("show-nav")) {
    container.classList.add("show-nav");
  } else {
    container.classList.remove("show-nav");
  }
}
