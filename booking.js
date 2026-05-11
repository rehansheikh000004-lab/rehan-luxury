const bookingList =
  document.getElementById("bookingList");

/* LOAD BOOKINGS */

window.onload = () => {

  const savedBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  savedBookings.forEach(booking => {

    createBookingCard(booking);

  });

};

/* ADD BOOKING */

function addBooking() {

  const name =
    document.getElementById("name").value;

  const email =
    document.getElementById("email").value;

  const date =
    document.getElementById("date").value;

  const time =
    document.getElementById("time").value;

  const message =
    document.getElementById("message").value;

  if (
    name === "" ||
    email === "" ||
    date === "" ||
    time === ""
  ) {
    return;
  }

  const booking = {
    name,
    email,
    date,
    time,
    message
  };

  createBookingCard(booking);

  saveBooking(booking);

  clearForm();

}

/* CREATE CARD */

function createBookingCard(data) {

  const card =
    document.createElement("div");

  card.classList.add("booking-card");

  card.innerHTML = `

    <h3>${data.name}</h3>

    <p>${data.email}</p>

    <p>Date: ${data.date}</p>

    <p>Time: ${data.time}</p>

    <p>${data.message}</p>

    <button class="delete-btn">
      Delete
    </button>

  `;

  /* DELETE */

  card.querySelector(".delete-btn")
    .addEventListener("click", () => {

      card.remove();

      deleteBooking(data);

    });

  bookingList.appendChild(card);

}

/* SAVE */

function saveBooking(booking) {

  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  bookings.push(booking);

  localStorage.setItem(
    "bookings",
    JSON.stringify(bookings)
  );

}

/* DELETE */

function deleteBooking(data) {

  let bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  bookings =
    bookings.filter(item =>
      item.email !== data.email ||
      item.date !== data.date
    );

  localStorage.setItem(
    "bookings",
    JSON.stringify(bookings)
  );

}

/* CLEAR */

function clearForm() {

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("message").value = "";

}
