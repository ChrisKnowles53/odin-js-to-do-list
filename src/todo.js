import createMyElement from "./createElement.js";
import { displayToDosForEachProject } from "./dom.js";
import trimWhitespace from "./trimWhitespace.js";
import { handleMoreDetailClick } from "./dom.js";

const todos = [
  //   {
  //     id: 1,
  //     title: "first task add a project",
  //     description: "Enter Project Title and click on Add Project",
  //     project: "Getting Started",
  //   },
];

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

export default createToDo;
export { todos };
