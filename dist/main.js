/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const div = document.getElementById("content");
function component() {
  const element = document.createElement("div");

  element.innerHTML = "Index.js linked";

  return element;
}

div.appendChild(component());

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1qcy10by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZWxlbWVudC5pbm5lckhUTUwgPSBcIkluZGV4LmpzIGxpbmtlZFwiO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5kaXYuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuXG4vLyB0b2RvJ3Mgd2lsbCBjb250YWluOlxuLy8gdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkIHRpY2sgYm94LCBkZWxldGUgYnV0dG9uLCBkcm9wIGRvd24gZm9yIGFkZGluZyB0aGUgdG9kbyB0byBhIHByb2plY3QgYnV0IG5vdCBkaXNwbGF5IGl0IHdpdGggdGhlIHRvZG9cbi8vIPCfkqUgd2hhdCBhYm91dCBhIGJ1dHRvbiBhbmQgd2hlbiBjbGlja2VkIGl0IHVzZXMgYSBkaWFsb2cgYm94IHdpdGggYSBmb3JtIGluIGl0XG4vLyDwn5KlIHRoaW5rIGFib3V0IGhvdyB0aGUgdG9kbydzIGFyZSBzdG9yZWQgZm9yIGVhc3kgcmV0cmlldmFsIGludG8gbGlzdHNcblxuLy8gcHJvamVjdHMgd2lsbDpcbi8vIGhhdmUgYSBwcm9qZWN0IGhlYWRpbmcgbmFtZVxuLy8gZWFjaCBwcm9qZWN0IHdpbGwgY29udGFpbiByZWxldmFudCB0b2Rvc1xuLy8g8J+SpSBkaXYgd2hpY2ggY29udGFpbnMgYSBsaXN0IG9mIHRvZG9zXG5cbi8vIGNyZWF0ZSBhIFRvZG8gLSAgd2hlbiBjcmVhdGluZyBhIHRvZG8gdXNlcnMgbXVzdCBmaWxsIGluIGFsbCB0aGUgdG9kbyBjb250ZW50cyBhbmQgaGF2ZSBhIHByb2plY3QgcGlja2VyIGxpc3Rcbi8vIGNyZWF0ZSBhIHByb2plY3QgLSBoYXZlIGFuIGFiaWxpdHkgdG8gYWRkIGEgbmV3IHByb2plY3QgbmFtZSB0aGluayBhcnJheSBvZiBwcm9qZWN0IG5hbWVzIHRoYXQgY29udGlhbiBvYmplY3RzIG9mIHRvZG9zP1xuXG4vLyBQcm9qZWN0IHBpY2tlciBsaXN0IHdpbGw6XG4vLyB1cGRhdGUgYXMgbmV3IHByb2plY3QgYWRkZWRcblxuLy8g4pyo4pyoIG5leHQgdGFzayBzdGFydCB0byB0aGluayBhYm91dCBob3cgd2UgZG8gYWJvdmUgYW5kIG1ha2UgYSBwbGFuIC0gISEhISEhc3RhcnQgc21hbGwgYW5kIGJ1aWxkIGFjb3JkaW5nbHkhISEhISEhIVxuLy8g8J+SpSB0aGluayBhYm91dCBTT0xJRCBhbmQga2VlcGluZyBmdW5jdGlvbnMgc21hbGwgYW5kIHJldXNhYmxlXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=