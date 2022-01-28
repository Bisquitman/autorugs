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
  // effect: "coverflow",
  grabCursor: true,
  // coverflowEffect: {
  //   rotate: 0,
  //   stretch: 0,
  //   depth: 150,
  //   modifier: 1,
  //   slideShadows: true,
  // },
  breakpoints: {
    768: {
      slidesPerView: 2.35,
      loop: true
    },
    320: {
      // effect: 'slide',
      direction: 'vertical',
      loop: false,
      slidesPerView: 3
    }
  }
}); // --- end of Swiper slider ---
// Модалка

var modalWindow = document.querySelector('.overlay');
var orderBtn = document.querySelector('.main-display__button');
var sendBtn = document.querySelector('.modal__button');

var disableScroll = function disableScroll() {
  var scrollWidth = window.innerWidth - document.body.offsetWidth;
  document.body.scrollPosition = window.scrollY;
  document.documentElement.style.cssText = "position: relative; height: 100vh;";
  document.body.style.cssText = "\n    overflow: hidden;\n    position: fixed;\n    top: -".concat(document.body.scrollPosition, "px;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    padding-right: ").concat(scrollWidth, "px;\n  ");
};

var enableScroll = function enableScroll() {
  document.documentElement.style.cssText = '';
  document.body.style.cssText = "position: relative;";
  window.scroll({
    top: document.body.scrollPosition
  });
};

orderBtn.addEventListener('click', function () {
  disableScroll();
  modalWindow.classList.add('show_modal');
});
modalWindow.addEventListener('click', function (event) {
  if (event.target.classList.contains('overlay')) {
    modalWindow.classList.remove('show_modal');
    enableScroll();
  }
});
sendBtn.addEventListener('click', function (event) {
  event.preventDefault();
  modalWindow.classList.remove('show_modal');
  enableScroll();
}); // --- end of Модалка ---