const notesGrid =
  document.getElementById("notesGrid");

/* LOAD NOTES */

window.onload = () => {

  const savedNotes =
    JSON.parse(localStorage.getItem("notes")) || [];

  savedNotes.forEach(noteText => {
    createNote(noteText);
  });

};

/* ADD NOTE */

function addNote() {

  createNote("");

  saveNotes();

}

/* CREATE NOTE */

function createNote(text) {

  const note = document.createElement("div");

  note.classList.add("note");

  note.innerHTML = `

    <textarea placeholder="Write something...">${text}</textarea>

    <button class="delete-btn">
      Delete
    </button>

  `;

  /* SAVE ON TYPING */

  note.querySelector("textarea")
    .addEventListener("input", saveNotes);

  /* DELETE */

  note.querySelector(".delete-btn")
    .addEventListener("click", () => {

      note.remove();

      saveNotes();

    });

  notesGrid.appendChild(note);

}

/* SAVE NOTES */

function saveNotes() {

  const notes = [];

  document.querySelectorAll(".note textarea")
    .forEach(textarea => {

      notes.push(textarea.value);

    });

  localStorage.setItem(
    "notes",
    JSON.stringify(notes)
  );

}
