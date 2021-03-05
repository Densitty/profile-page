const hamburgerContainer = document.querySelector("#header__main-nav");
const hamburger = document.querySelector(".header__main-nav--hamburger");
const links = document.querySelectorAll(".header__main-nav--links li");
const lines = document.querySelectorAll(".line");

// console.log(hamburgerContainer);
// console.log(lines);

hamburger.addEventListener("click", () => {
  lines.forEach((line) => {
    line.classList.toggle("active");
  });

  hamburgerContainer.classList.toggle("show-container");

  links.forEach((link) => {
    link.classList.toggle("show-links");
  });
});
