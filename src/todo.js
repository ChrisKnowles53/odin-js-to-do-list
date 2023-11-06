// todo's will:
// ✅ be created dynamically using factory or constructor to generate them
// ✅ title, description
// dueDate, priority, completed tick box
// delete button, drop down for adding the todo to a project but not display it with the todo
// ✅ what about a button and when clicked it uses a dialog box with a form in it
// 💥 think about how the todo's are stored for easy retrieval into lists

import { displayToDosForEachProject } from "./dom.js";

const todos = [
  {
    id: 1,
    title: "first task add a project",
    description: "Enter Project Title and click on Add Project",
    project: "GettingStarted",
  },
];

function removeListEementsFromProject(projectDiv) {
  const projectSpecificToDoListElements = projectDiv.querySelectorAll("li");
  projectSpecificToDoListElements.forEach((item) => {
    item.remove();
  });
}

const createToDo = (id, title, description, project) => {
  const projectDiv = document.getElementById(project);
  removeListEementsFromProject(projectDiv);
  const todo = {
    id,
    title,
    description,
    project,
  };
  todos.push(todo);
  console.table(todos);
  displayToDosForEachProject(todos, project);
};

export default createToDo;
export { todos };

// ✅ now need to make it so everytime a todo is added it adds it to an array of objects
// ✅ then create a list of todos within a project div
// ✅ start by putting all the todos in one div
// then make them link via project to the various project divs
