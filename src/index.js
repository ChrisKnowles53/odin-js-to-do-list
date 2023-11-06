import "./styles.css";
import dateFormat from "./datefns";
import initaliseEventListeners from "./dom";
import createProject from "./projects";
import createToDo from "./todo";

initaliseEventListeners();
createProject("Getting Started");
createToDo(
  "First task: add a project",
  "Enter Project Title and click on Add Project",
  "Getting Started"
);

let date = "2014, 01, 11";
console.log(`Im in index.js ${dateFormat(date)}`);

// todo.js - Started not completed
// expand a single todo to see/edit its details
// delete a todo

// projects.js -

// pageLoad.js
