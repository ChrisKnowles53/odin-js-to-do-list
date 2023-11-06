import createToDo from "./todo";
import createProject from "./projects";
import { projectArray } from "./projects";
import createMyElement from "./createElement";
import trimWhitespace from "./trimWhitespace";

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

  const addToDoForm = document.getElementById("addToDoForm");

  const dialog = document.querySelector("dialog");
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const project = document.getElementById("project").value;

  createToDo(title, description, project);

  dialog.close();
  addToDoForm.reset();
}

export default function initaliseEventListeners() {
  document.addEventListener("click", (event) => {
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

  projectArray.forEach((title, index) => {
    const trimmedTitle = trimWhitespace(title);
    const option = createMyElement(
      "option",
      title,
      `option${trimmedTitle}`,
      `option${trimmedTitle}`
    );
    projectDropdown.appendChild(option);
  });
}

function displayToDosForEachProject(todos, projectName) {
  const projectTodos = todos.filter((todo) => todo.project === projectName);
  const trimmedProjectName = trimWhitespace(projectName);
  const projectDiv = document.getElementById(trimmedProjectName);
  projectTodos.forEach((todo) => {
    const trimmedTitle = trimWhitespace(todo.title);
    const listItem = createMyElement(
      "li",
      `Title: ${todo.title}`,
      `list${trimmedTitle}`,
      `list${trimmedTitle}`
    );
    projectDiv.appendChild(listItem);

    const moreDetailButton = createMyElement(
      "button",
      "More Detail",
      `button${todo.id}`,
      `button${todo.id}`
    );
    listItem.appendChild(moreDetailButton);

    moreDetailButton.addEventListener("click", () => {
      handleMoreDetailClick(todo);
    });
  });
}

function handleMoreDetailClick(todo) {
  console.log("im clicked");
  const trimmedTitle = trimWhitespace(todo.title);
  const listItem = document.getElementById(`list${trimmedTitle}`);
  const existingDescription = listItem.querySelector("p");
  if (existingDescription) {
    existingDescription.textContent = todo.description;
  } else {
    const description = document.createElement("p");
    description.textContent = todo.description;
    listItem.appendChild(description);
  }
}

export {
  updateProjectDropdown,
  displayToDosForEachProject,
  handleMoreDetailClick,
};
