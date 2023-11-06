import createMyElement from "./createElement";
import { updateProjectDropdown } from "./dom";
import { displayToDosForEachProject } from "./dom";
import { todos } from "./todo";
import trimWhitespace from "./trimWhitespace";

let projectArray = [];

const createProject = (title) => {
  projectArray.push(title);
  updateProjectDropdown();
  addProjectDiv(projectArray);
};

function addProjectDiv(projectArray) {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  projectArray.forEach((title, index) => {
    const trimmedTitle = trimWhitespace(title);
    const projectDiv = createMyElement(
      "div",
      title,
      trimmedTitle,
      trimmedTitle
    );
    contentDiv.appendChild(projectDiv);

    // const projectButton = createMyElement(
    //   "button",
    //   "See ToDo's",
    //   `button${trimmedTitle}`,
    //   `button${trimmedTitle}`
    // );
    // projectDiv.appendChild(projectButton);
    displayToDosForEachProject(todos, title);
  });
}

export default createProject;
export { projectArray };
