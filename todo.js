const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

/* LOAD TASKS */

window.onload = () => {

  const savedTasks =
    JSON.parse(localStorage.getItem("tasks")) || [];

  savedTasks.forEach(task => {
    createTask(task.text, task.completed);
  });

};

/* ADD TASK */

function addTask() {

  const text = taskInput.value.trim();

  if (text === "") return;

  createTask(text, false);

  saveTasks();

  taskInput.value = "";

}

/* CREATE TASK */

function createTask(text, completed) {

  const li = document.createElement("li");

  li.classList.add("task");

  if (completed) {
    li.classList.add("completed");
  }

  li.innerHTML = `
  
    <span>${text}</span>

    <div class="task-buttons">

      <button class="complete-btn">
        ✓
      </button>

      <button class="delete-btn">
        ✕
      </button>

    </div>

  `;

  /* COMPLETE */

  li.querySelector(".complete-btn")
    .addEventListener("click", () => {

      li.classList.toggle("completed");

      saveTasks();

    });

  /* DELETE */

  li.querySelector(".delete-btn")
    .addEventListener("click", () => {

      li.remove();

      saveTasks();

    });

  taskList.appendChild(li);

}

/* SAVE TASKS */

function saveTasks() {

  const tasks = [];

  document.querySelectorAll(".task")
    .forEach(task => {

      tasks.push({

        text: task.querySelector("span").innerText,

        completed:
          task.classList.contains("completed")

      });

    });

  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks)
  );

}
