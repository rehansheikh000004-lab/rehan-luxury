/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

  const loader =
    document.querySelector(".loader");

  setTimeout(() => {

    loader.classList.add("hidden");

  }, 1800);

});

/* =========================
   REVEAL ANIMATION
========================= */

const reveals =
  document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((el) => {

    const top =
      el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

      el.classList.add("active");

    }

  });

});

/* =========================
   BUTTON EFFECT
========================= */

const button =
  document.querySelector(".cta");

button.addEventListener("mouseenter", () => {

  button.style.letterSpacing = "2px";

});

button.addEventListener("mouseleave", () => {

  button.style.letterSpacing = "0px";

});

/* =========================
   MOUSE GLOW
========================= */

const glow =
  document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";

  glow.style.top = e.clientY + "px";

});

/* =========================
   PARTICLES
========================= */

const particles =
  document.querySelector(".particles");

for (let i = 0; i < 60; i++) {

  const particle =
    document.createElement("span");

  const size =
    Math.random() * 4 + 2;

  particle.style.width =
    `${size}px`;

  particle.style.height =
    `${size}px`;

  particle.style.left =
    `${Math.random() * 100}%`;

  particle.style.animationDuration =
    `${Math.random() * 10 + 5}s`;

  particle.style.animationDelay =
    `${Math.random() * 5}s`;

  particles.appendChild(particle);

}
