// todo's will:
// ✅ be created dynamically using factory or constructor to generate them
// ✅ title, description
// dueDate, priority, completed tick box
// delete button, drop down for adding the todo to a project but not display it with the todo
// ✅ what about a button and when clicked it uses a dialog box with a form in it
// 💥 think about how the todo's are stored for easy retrieval into lists

// it will be used many times so use factory function

const createToDo = (id, title, description, project) => {
  return console.log({
    id,
    title,
    description,
    project,
  });
};

export default createToDo;
