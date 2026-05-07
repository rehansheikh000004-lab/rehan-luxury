/* BAR ANIMATION */

const bars =
  document.querySelectorAll(".bar");

bars.forEach((bar, index) => {

  bar.style.animationDelay =
    `${index * 0.1}s`;

});
