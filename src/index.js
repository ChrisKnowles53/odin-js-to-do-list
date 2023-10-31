function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "Hello im linked";

  return element;
}

document.body.appendChild(component());

// todo's will contain:
// title, description, dueDate, priority, completed tick box, delete button, drop down for adding the todo to a project but not display it with the todo
// 💥 what about a button and when clicked it uses a dialog box with a form in it
// 💥 think about how the todo's are stored for easy retrieval into lists

// projects will:
// have a project heading name
// each project will contain relevant todos
// 💥 div which contains a list of todos

// create a Todo -  when creating a todo users must fill in all the todo contents and have a project picker list
// create a project - have an ability to add a new project name think array of project names that contian objects of todos?

// Project picker list will:
// update as new project added

// ✨✨ next task start to think about how we do above and make a plan - !!!!!!start small and build acordingly!!!!!!!!
// 💥 think about SOLID and keeping functions small and reusable
