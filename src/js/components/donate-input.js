const dollarInput = document.querySelector('.form__cash');

function dollarUpdate() {
  document.querySelector(`.paf__donate-widjet-amount-dollar-item-0`).style.color = '#333B41';
  document.querySelector(`.paf__donate-widjet-amount-dollar-item-1`).style.color = '#333B41';
  document.querySelector(`.paf__donate-widjet-amount-dollar-item-2`).style.color = '#333B41';
  document.querySelector(`.paf__donate-widjet-amount-dollar-item-3`).style.color = '#333B41';
  document.querySelector(`.paf__donate-widjet-amount-dollar-item-4`).style.color = '#333B41';
  document.querySelector(`.paf__donate-widjet-amount-dollar-item-5`).style.color = '#333B41';
  document.querySelector(`.paf__donate-widjet-amount-dollar-item-6`).style.color = '#333B41';
  document.querySelector(`.paf__donate-widjet-amount-dollar-item-7`).style.color = '#333B41';
  document.querySelector(`.paf__donate-widjet-amount-dollar-item-${dollarInput.value}`).style.color = '#FE9013';
}

dollarInput.oninput = function () {
  dollarUpdate();
}

dollarUpdate();
