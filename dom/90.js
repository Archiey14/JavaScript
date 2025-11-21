//how to get the dimension of an element


const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect(); 
console.log(info);