const cards = document.querySelectorAll(".app-card");

cards.forEach(card => {

  card.addEventListener("mousemove", (e) => {

    const x = e.offsetX;
    const y = e.offsetY;

    const rotateY = (x / 300 - 0.5) * 10;
    const rotateX = (y / 300 - 0.5) * -10;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "rotateX(0) rotateY(0) translateY(0)";

  });

});
