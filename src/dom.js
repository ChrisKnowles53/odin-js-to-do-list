import createToDo from "./todo";
import createProject from "./projects";

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

export default function initaliseEventListeners() {
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
}
