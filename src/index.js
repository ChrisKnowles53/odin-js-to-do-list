console.log("im linked");
function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "Hello im linked";

  return element;
}

document.body.appendChild(component());
