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