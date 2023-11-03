import "./styles.css";
import dateFormat from "./datefns";
import initaliseEventListeners from "./dom";

initaliseEventListeners();

let date = "2014, 01, 11";
console.log(`Im in index.js ${dateFormat(date)}`);

// todo.js - Started not completed

// projects.js - Started currently hardcoded and appending as div

// pageLoad.js

// create a Todo -  when creating a todo users must fill in all the todo contents and have a project picker list
// create a project - have an ability to add a new project name think array of project names that contian objects of todos?

// Project picker list will:
// update as new project added

// ✨✨ next task start to think about how we do above and make a plan - !!!!!!start small and build acordingly!!!!!!!!
// 💥 think about SOLID and keeping functions small and reusable

// 💥 utilise local storage so we dont loose any data if we refresh
