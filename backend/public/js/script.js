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

document.addEventListener("DOMContentLoaded", () => {
  const link = document.querySelector('.start-link');
  const overlay = document.getElementById('fade-overlay');

  if (link && overlay) {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent instant navigation
      overlay.classList.add('active'); // Start fade

      setTimeout(() => {
        window.location.href = link.getAttribute('href');
      }, 1000); // Wait for the fade to finish
    });
  }
});