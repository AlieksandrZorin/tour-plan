const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button__next",
    prevEl: ".slider-button__prev",
  },
});
const swip = new Swiper(".reviews-slider", {
  // Optional parameters

  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button-next",
    prevEl: ".reviews-slider__button-prev",
  },
});

let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("клик по кнопке меню");
  document
    .querySelector(".navbar-bottom")
    .classList.toggle("navbar-bottom--visible");
});
