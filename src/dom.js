import createToDo from "./todo";
import createProject from "./projects";
import { projectArray } from "./projects";
import createMyElement from "./createElement";

function handleAddToDoClick() {
  const dialog = document.querySelector("dialog");
  dialog.showModal();
}

function handleCloseButtonClick() {
  const dialog = document.querySelector("dialog");
  dialog.close();
}

function handleFormSubmit(event) {
  event.preventDefault();
  //uuidv4 - I had webpack build issues so i paused on that
  const uniqueId = Math.random() * 256;

  const addToDoForm = document.getElementById("addToDoForm");

  const dialog = document.querySelector("dialog");
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const project = document.getElementById("project").value;

  createToDo(uniqueId, title, description, project);

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
function handleAddProject() {
  const projectTitleInput = document.getElementById("projectTitle");
  const projectTitle = projectTitleInput.value;

  if (projectTitle.trim() !== "") {
    createProject(projectTitle);
  }
  projectTitleInput.value = "";
}

function updateProjectDropdown() {
  const projectDropdown = document.getElementById("project");
  projectDropdown.innerHTML = "";

  projectArray.forEach(function (title, index) {
    const option = createMyElement(
      "option",
      title,
      `option${title}`,
      `option${title}`
    );
    projectDropdown.appendChild(option);
  });
}

function displayToDosForEachProject(todos, projectName) {
  const projectTodos = todos.filter((todo) => todo.project === projectName);
  const projectDiv = document.getElementById(projectName);
  //   projectDiv.innerHTML = "";

  projectTodos.forEach((todo) => {
    const listItem = createMyElement("li", "list", "list", "list");
    listItem.textContent = `Title: ${todo.title}`;
    console.log(projectDiv);
    projectDiv.appendChild(listItem);
  });
}
export { updateProjectDropdown, displayToDosForEachProject };
