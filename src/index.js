import "./styles.css";
import dateFormat from "./datefns";

let date = "2014, 01, 11";
console.log(`Im in index.js ${dateFormat(date)}`);

const div = document.getElementById("content");
function component() {
  const element = document.createElement("div");

  element.innerHTML = "Index.js linked";

  return element;
}

div.appendChild(component());

// todo's will:
// be created dynamically using factory or constructor to generate them
// title, description, dueDate, priority, completed tick box, delete button, drop down for adding the todo to a project but not display it with the todo
// 💥 what about a button and when clicked it uses a dialog box with a form in it
// 💥 think about how the todo's are stored for easy retrieval into lists

// projects will:
// have a project heading name
// contain relevant todos
// 💥 div which contains a list of todos

// pageLoad.js will:
// default to a "starting" project
// this project will be the default setting for todos if no project is selected
// display create new project button
// display create new task button
// display page title
// display todays date
// display all projects - need to think about how to style these at the end
// display icon to expand each project and see the todo's associated with it
// display a task as a summary with a dropdown for expanding to see details and show the Edit and Delete buttons
// 💥 💭 page load should not manipulate any data - it should only act as a display different functions

// create a Todo -  when creating a todo users must fill in all the todo contents and have a project picker list
// create a project - have an ability to add a new project name think array of project names that contian objects of todos?

// Project picker list will:
// update as new project added

// ✨✨ next task start to think about how we do above and make a plan - !!!!!!start small and build acordingly!!!!!!!!
// 💥 think about SOLID and keeping functions small and reusable

// 💥 utilise local storage so we dont loose any data if we refresh
