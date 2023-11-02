// have a project heading name
// contain relevant todos
// 💥 div which contains a list of todos

import createMyElement from "./createElement";

// ???? im now thinking that projects should be an array I can iterate over
// therefore havea funciton that adds a project and stores its name in an array
// then iterate over the array to do the above

let projectArray = ["Getting Started"];

const createProject = (title) => {
  projectArray.push(title);
  return projectArray;
};
console.log(`Before the function ${projectArray}`);
createProject("After we got started");
console.log(`After the function ${projectArray}`);

export default function addProjectDiv() {
  projectArray.forEach(function (title, index) {
    const projectDiv = createMyElement("div", title, title, title);

    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(projectDiv);
  });
}
