const body = document.body;
let pos = 0;

function animateBackgroundPosition() {
  pos = (pos + 0.2) % 100; // Speed control
  body.style.backgroundPosition = `${pos}% 50%`;
  requestAnimationFrame(animateBackgroundPosition);
}

animateBackgroundPosition();

import { floatLetters } from './jsComponents/welcome.js';

document.addEventListener("DOMContentLoaded", () => {
  floatLetters();
});

const link = document.querySelector('.start-link');
const smoke = document.getElementById('smoke-overlay');

link.addEventListener('click', e => {
  e.preventDefault(); // prevent instant jump
  smoke.classList.add('active'); // show smoke
  setTimeout(() => {
    window.location.href = link.href; // go to page after smoke
  }, 1200); // wait for smoke to show
});