import Swiper, { Scrollbar } from 'swiper';

Swiper.use([Scrollbar]);

const swiper = new Swiper('.massage', {
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 115.19,
    draggable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  initialSlide: 0,
  slidesPerView: 4,
  spaceBetween: 30,
  simulateTouch: true,

  breakpoints: {
    1600: {
      slidesPerView: 4,
      dragSize: 115.19,
    },
    1000: {
      slidesPerView: 3,
      scrollbar: {
        dragSize: 75,
        draggable: true,
      },
    },
    640: {
      direction: 'vertical',
      slidesPerView: 3,
      spaceBetween: 15,
    },
    320: {
      direction: 'vertical',
      slidesPerView: 3,
      spaceBetween: 15,
    },
  }
});
