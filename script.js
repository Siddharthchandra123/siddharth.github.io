/* TYPING EFFECT */
const text = [
  "AI Developer",
  "Full-Stack Engineer",
  "Big Dreams",
  "Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
    }, 1200);
  }

  setTimeout(type, 120);
})();

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* PARALLAX GLOW */
document.addEventListener("mousemove", e => {
  document.querySelector(".glow-1").style.transform =
    `translate(${e.clientX / 40}px, ${e.clientY / 40}px)`;
});
/* BADGE 3D TILT */


badge.addEventListener("mouseleave", () => {
  badge.style.transform = "rotateX(0) rotateY(0)";
});
/* PROFILE TILT */
const profile = document.querySelector(".profile-ring");

profile.addEventListener("mousemove", e => {
  const rect = profile.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  profile.style.transform =
    `rotateX(${ -y / 25 }deg) rotateY(${ x / 25 }deg) scale(1.05)`;
});

profile.addEventListener("mouseleave", () => {
  profile.style.transform = "rotateX(0) rotateY(0)";
});
