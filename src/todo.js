import createMyElement from "./createElement.js";
import { displayToDosForEachProject } from "./dom.js";
import trimWhitespace from "./trimWhitespace.js";
import { handleAddToDoClick, handleCloseButtonClick } from "./dom.js";

const todos = [];
let currentAction = "add";

function removeListEementsFromProject(projectDiv) {
  const projectSpecificToDoListElements = projectDiv.querySelectorAll("li");
  projectSpecificToDoListElements.forEach((item) => {
    item.remove();
  });
}

const createToDo = (title, description, project) => {
  const trimmedProjectName = trimWhitespace(project);
  const projectDiv = document.getElementById(trimmedProjectName);

  const todo = {
    id: (Math.random() * 256).toFixed(4),
    title,
    description,
    project,
  };
  todos.push(todo);
  console.table(todos);
  removeListEementsFromProject(projectDiv);
  displayToDosForEachProject(todos, project);
};

function editToDo(todo) {
  console.log(todo);

  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const projectInput = document.getElementById("project");

  currentAction = "edit";
  const dialog = document.querySelector("dialog");
  dialog.showModal();

  titleInput.value = todo.title;
  descriptionInput.value = todo.description;
  projectInput.value = todo.project;

  const saveButton = document.querySelector(".submit");
  if (currentAction === "add") {
    saveButton.setAttribute("data-action", "submit");
    saveButton.textContent = "Submit";
  } else if (currentAction === "edit") {
    saveButton.setAttribute("data-action", "save");
    saveButton.textContent = "Save";
  }

  saveButton.addEventListener("click", () => {
    if (saveButton.getAttribute("data-action") === "submit") {
      todo.title = titleInput.value;
      todo.description = descriptionInput.value;
      saveButton.textContent = "Submit";
    } else if (saveButton.getAttribute("data-action") === "save") {
      console.log("save button clicked");
      // code to edit the todo
      saveButton.textContent = "Save";
    }
  });
}

// function handleSaveButtonClick(todo) {
//   console.log("im the save button being clicked");

//   // i believe i need to spread out the particular array item update it and put it back in the todos array without creating a new array
// }

function deleteTodo() {
  // use id to select the particular object from the array
  // then use slice to remove it
}

export default createToDo;
export { currentAction, todos, editToDo };
