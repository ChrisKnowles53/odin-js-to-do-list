// todo's will:
// be created dynamically using factory or constructor to generate them
// title, description, dueDate, priority, completed tick box, delete button, drop down for adding the todo to a project but not display it with the todo
// 💥 what about a button and when clicked it uses a dialog box with a form in it
// 💥 think about how the todo's are stored for easy retrieval into lists

// it will be used many times so use factory function

const createToDo = (id, title, description) => {
  return console.log({
    id,
    title,
    description,
  });
};

export default createToDo;

//uuidv4 had build issues so i paused on that
const uniqueId = Math.random() * 256;

function handleAddToDoClick() {
  const dialog = document.querySelector("dialog");
  dialog.showModal();
}

function handleCloseButtonClick() {
  const dialog = document.querySelector("dialog");
  dialog.close();
}

function handleFormSubmit(event) {
  console.log(event);
  event.preventDefault();

  const dialog = document.querySelector("dialog");
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  createToDo(uniqueId, title, description);

  dialog.close();
}

document.addEventListener("click", function (event) {
  if (event.target.matches(".add-ToDo")) {
    handleAddToDoClick();
  } else if (event.target.matches("dialog button")) {
    handleCloseButtonClick();
  }
});

const addToDoForm = document.getElementById("addToDoForm");
addToDoForm.addEventListener("submit", handleFormSubmit);
