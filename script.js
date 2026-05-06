/* REVEAL ANIMATION */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((el) => {

    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }

  });

});

/* BUTTON EFFECT */

const button = document.querySelector(".cta");

button.addEventListener("mouseenter", () => {
  button.style.letterSpacing = "2px";
});

button.addEventListener("mouseleave", () => {
  button.style.letterSpacing = "0px";
});
