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
   FLOATING PARTICLE BACKGROUND
========================= */
const particleCanvas = document.getElementById("particles");

if (particleCanvas) {
  const ctx = particleCanvas.getContext("2d");
  let width = 0;
  let height = 0;
  let particles = [];

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    particleCanvas.width = width * window.devicePixelRatio;
    particleCanvas.height = height * window.devicePixelRatio;
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    initParticles();
  }

  function initParticles() {
    const count = Math.min(90, Math.floor(width / 14));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.8,
      alpha: Math.random() * 0.6 + 0.2
    }));
  }

  function drawParticles() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -10 || p.x > width + 10) p.vx *= -1;
      if (p.y < -10 || p.y > height + 10) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(78, 252, 220, ${p.alpha})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - dist / 120)})`;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(drawParticles);
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  drawParticles();
}

/* =========================
   3D HOVER TILT EFFECT
========================= */
const tiltSelectors = [
  ".hero",
  ".card",
  ".badge-card",
  ".achievement-card",
  ".netflix-card"
];

tiltSelectors.forEach(selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener("pointermove", handleTilt);
    el.addEventListener("pointerleave", resetTilt);
    el.style.transformStyle = "preserve-3d";
  });
});

function handleTilt(event) {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = event.clientX - rect.left - rect.width / 2;
  const y = event.clientY - rect.top - rect.height / 2;
  const rotateX = (y / rect.height) * 10;
  const rotateY = -(x / rect.width) * 10;

  el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`;
}

function resetTilt(event) {
  const el = event.currentTarget;
  el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
}

/* =========================
   INFINITE CERTIFICATE LOOP
========================= */
const track = document.querySelector(".netflix-track");

if (track) {
  // Duplicate content once for seamless loop
  track.innerHTML += track.innerHTML;
}
