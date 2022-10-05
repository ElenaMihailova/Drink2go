const menu = document.querySelector(".header");
const openMenuButton = document.querySelector(".header__toggle");

document.querySelector(".nojs").classList.remove("nojs");

openMenuButton.addEventListener("click", function () {
  menu.classList.toggle("header--opened");
});
