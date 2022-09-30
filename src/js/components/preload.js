window.onload = function(){
  var el = document.getElementById('loader');
  el.style.display = 'none';
};


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
let elementsL = document.querySelectorAll('.element-animation-l');
let elementsB = document.querySelectorAll('.element-animation-b');
for (let elm of elements) {
  observer.observe(elm);
}
for (let elm of elementsL) {
  observer.observe(elm);
}
for (let elm of elementsB) {
  observer.observe(elm);
}
