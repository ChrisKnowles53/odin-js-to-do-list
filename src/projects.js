import createMyElement from "./createElement";

let projectArray = ["Getting Started"];

const createProject = (title) => {
  projectArray.push(title);
  console.log(`project.js ${projectArray}`);
  addProjectDiv(projectArray);
};

function addProjectDiv(projectArray) {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  projectArray.forEach(function (title, index) {
    const projectDiv = createMyElement("div", title, title, title);
    contentDiv.appendChild(projectDiv);
  });
}

export default createProject;
