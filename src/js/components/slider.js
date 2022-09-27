const sliderRightButton = document.querySelector('.pag-slider__right-btn');
const sliderLeftButton = document.querySelector('.pag-slider__left-btn');
const cards = document.querySelector('.cards');

let slide = 0;
let slideSwap = 0;

function slideCheck() {
  if (slide == 0) {
    sliderLeftButton.disabled = true;
    sliderRightButton.disabled = false;
  }
  else {
    sliderLeftButton.disabled = false;
    sliderRightButton.disabled = true;
  }
};

slideCheck();

sliderRightButton.addEventListener('click', () => {
  if (window.screen.availWidth >= 999) {
    slide ++
    slideCheck()
    slideSwap -= document.querySelector('.card-item-1').offsetWidth + 30;
    cards.style.transform = `translateX(${slideSwap}px)`;
  } else {
    slide ++
    slideCheck()
    slideSwap -= document.querySelector('.card-item-1').offsetWidth + 30;
    cards.style.transform = `translateX(${slideSwap * 2}px)`;
  }
});

sliderLeftButton.addEventListener('click', () => {
  if (window.screen.availWidth >= 999) {
  slide --
  slideCheck()
  slideSwap += document.querySelector('.card-item-1').offsetWidth + 30;
  cards.style.transform = `translateX(${slideSwap}px)`;
  } else {
    slide --
    slideCheck()
    slideSwap += document.querySelector('.card-item-1').offsetWidth + 30;
    cards.style.transform = `translateX(${slideSwap * 2}px)`;
  }
});
