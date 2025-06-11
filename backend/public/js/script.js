import { floatLetters } from './jsComponents/welcome.js';
import { creationchar } from './jsComponents/characterCreation.js';

const body = document.body;
let pos = 0;

function animateBackgroundPosition() {
  pos = (pos + 0.2) % 100; // Speed control
  body.style.backgroundPosition = `${pos}% 50%`;
  requestAnimationFrame(animateBackgroundPosition);
}

animateBackgroundPosition();

document.addEventListener("DOMContentLoaded", () => {
  // ✨ Apply floating magic to all h1s
  floatLetters();

  // ✨ Initialize character creation page logic only if needed
  const h1 = document.querySelector('h1');
  if (h1 && h1.textContent.includes('Create Your Character')) {
    creationchar();
  }
});