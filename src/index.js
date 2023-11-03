import "./styles.css";
import dateFormat from "./datefns";
import createToDo from "./todo";
import createProject from "./projects";

// createProject("Created via index.js");
// next step add an event listener and change this hardcode to be dynamic input

function handleAddProject() {
  const projectTitleInput = document.getElementById("projectTitle");
  const projectTitle = projectTitleInput.value;

  if (projectTitle.trim() !== "") {
    createProject(projectTitle);
  }
  projectTitleInput.value = "";
}

function handleAddToDoClick() {
  const dialog = document.querySelector("dialog");
  dialog.showModal();
}

function handleCloseButtonClick() {
  const dialog = document.querySelector("dialog");
  dialog.close();
}

function handleFormSubmit(event) {
  //uuidv4 - I had webpack build issues so i paused on that
  const uniqueId = Math.random() * 256;

  const addToDoForm = document.getElementById("addToDoForm");
  event.preventDefault();

  const dialog = document.querySelector("dialog");
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  createToDo(uniqueId, title, description);

  dialog.close();
  addToDoForm.reset();
}

document.addEventListener("click", function (event) {
  if (event.target.matches(".add-ToDo")) {
    handleAddToDoClick();
  } else if (event.target.matches("dialog button")) {
    handleCloseButtonClick();
  } else if (event.target.matches(".addProjectButton")) {
    handleAddProject();
  }
});

const addToDoForm = document.getElementById("addToDoForm");
addToDoForm.addEventListener("submit", handleFormSubmit);

let date = "2014, 01, 11";
console.log(`Im in index.js ${dateFormat(date)}`);

// todo.js - Started not completed

// projects.js - Started currently hardcoded and appending as div

// pageLoad.js

// create a Todo -  when creating a todo users must fill in all the todo contents and have a project picker list
// create a project - have an ability to add a new project name think array of project names that contian objects of todos?

// Project picker list will:
// update as new project added

// ✨✨ next task start to think about how we do above and make a plan - !!!!!!start small and build acordingly!!!!!!!!
// 💥 think about SOLID and keeping functions small and reusable

// 💥 utilise local storage so we dont loose any data if we refresh
