"use strict";

// Swiper slider
var swiper = new Swiper('.swiper', {
  slidesPerView: 2.35,
  loop: true,
  speed: 400,
  spaceBetween: 70,
  centeredSlides: true,
  slideToClickedSlide: true,
  toggle: true,
  effect: "coverflow",
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2.35
    },
    320: {
      effect: 'slide',
      direction: 'vertical',
      loop: false,
      slidesPerView: 3
    }
  }
}); // --- end of Swiper slider ---