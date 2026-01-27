/* =========================
   TYPING EFFECT
========================= */
const typingTexts = [
  "AI Developer",
  "Full-Stack Engineer",
  "Big Dreams",
  "Problem Solver"
];

let textIndex = 0;
let charIndex = 0;
const typingEl = document.querySelector(".typing");

function typeEffect() {
  if (!typingEl) return;

  const current = typingTexts[textIndex];
  typingEl.textContent = current.slice(0, charIndex++);

  if (charIndex > current.length) {
    setTimeout(() => {
      charIndex = 0;
      textIndex = (textIndex + 1) % typingTexts.length;
    }, 1200);
  }

  setTimeout(typeEffect, 120);
}

typeEffect();

/* =========================
   SCROLL REVEAL
========================= */
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* =========================
   DISABLE ALL IMAGE MOTION
========================= */

// Ensure no transforms are applied by JS
const staticElements = [
  ".profile-ring",
  ".glow-1",
  ".badge"
];

staticElements.forEach(selector => {
  const el = document.querySelector(selector);
  if (el) {
    el.style.transform = "none";
    el.style.transition = "none";
  }
});
/* =========================
   INFINITE CERTIFICATE LOOP
========================= */
const track = document.querySelector(".netflix-track");

if (track) {
  // Duplicate content once for seamless loop
  track.innerHTML += track.innerHTML;
}
