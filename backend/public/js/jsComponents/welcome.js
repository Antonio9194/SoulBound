// Animate h1 with class "soul-bound" letter-by-letter
export function floatLetters() {
  const h1 = document.querySelector("h1.soul-bound");
  if (!h1) return;

  const text = h1.textContent;
  h1.textContent = "";

  [...text].forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.classList.add("magical-letter");
    span.style.animationDelay = `${index * 0.15}s`;
    h1.appendChild(span);
  });
}

// Animate first h3 letter-by-letter on DOM load
document.addEventListener("DOMContentLoaded", () => {
  const h3 = document.querySelector("h3");
  if (!h3) return;

  const text = h3.textContent;
  h3.textContent = "";

  [...text].forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.classList.add("floating-letter");
    span.style.setProperty("--i", i);
    h3.appendChild(span);
  });
});