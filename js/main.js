$(document).ready(function () {
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

  let modalButton = $("[data-toggle=modal]");
  let closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    let modalOverlay = $(".modal__overlay");
    let modalDiolog = $(".modal__diolog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDiolog.addClass("modal__diolog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    let modalOverlay = $(".modal__overlay");
    let modalDiolog = $(".modal__diolog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDiolog.removeClass("modal__diolog--visible");
  }
  // Обработка форм
  $(".modal__form").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "The name is not shorter than 2 letters",
      },

      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "Phone is required",
      },
    },
  });
});
