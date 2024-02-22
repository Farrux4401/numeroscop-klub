const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: false,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1.7,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  },
});

const systemSwiper = new Swiper(".systemSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// const showMenu = document.querySelector(".show-menu");
const navbarToggler = document.getElementById("navbar-toggler");
const overlay = document.getElementById("overlay");
const showBurger = document.querySelector(".show-burger");
const closeBurger = document.querySelector(".close-burger");

navbarToggler.addEventListener("click", () => {
  overlay.classList.toggle("overlay");
  if (navbarToggler.classList.contains("show-menu")) {
    navbarToggler.classList.remove("show-menu");
    showBurger.style.display = "none";
    closeBurger.style.display = "block";
  } else {
    navbarToggler.classList.add("show-menu");
    showBurger.style.display = "block";
    closeBurger.style.display = "none";
  }
});
