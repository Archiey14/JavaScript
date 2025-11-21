// some old methods to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild

// These four methods were used to add, insert, replace, and delete elements — especially to support old browsers like Internet Explorer.


const ul = document.querySelector(".todo-list");

// new element
const li = document.createElement("li");
li.textContent = "new todo";


const referenceNode = document.querySelector(".first-todo");

ul.removeChild(referenceNode);