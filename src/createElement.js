export default function createMyElement(
  elementType,
  textContent,
  id,
  classname
) {
  const element = document.createElement(elementType);
  element.textContent = textContent;
  if (id) element.setAttribute("id", id);
  if (classname) element.setAttribute("class", classname);
  return element;
}
