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
  if (document.querySelector('.start-link')) {
    // Welcome page
    floatLetters();

    const link = document.querySelector('.start-link');
    const smoke = document.getElementById('smoke-overlay');

    link.addEventListener('click', e => {
      e.preventDefault(); // prevent instant jump
      smoke.classList.add('active'); // show smoke
      setTimeout(() => {
        window.location.href = link.href; // go to page after smoke
      }, 1200); // wait for smoke to show
    });
  }

  if (document.querySelector('h1')?.textContent.includes('Create Your Character')) {
    // Character creation page
    creationchar();
  }
});