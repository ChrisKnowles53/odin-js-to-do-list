// todo's will:
// ✅ be created dynamically using factory or constructor to generate them
// ✅ title, description
// dueDate, priority, completed tick box
// delete button, drop down for adding the todo to a project but not display it with the todo
// ✅ what about a button and when clicked it uses a dialog box with a form in it
// 💥 think about how the todo's are stored for easy retrieval into lists

const todos = [];

const createToDo = (id, title, description, project) => {
  const todo = {
    id,
    title,
    description,
    project,
  };
  todos.push(todo);
  console.log(todo);
  console.table(todos);
};

export default createToDo;

// now need to make it so everytime a todo is added it adds it to an array of objects
// then create a list of todos within a project div
// start by putting all the todos in one div
// then make them link via project to the various project divs
