const sectionTodo = document.querySelector(".section-todo");

console.log(sectionTodo.classList);

sectionTodo.classList.add('bg-dark');
// sectionTodo.classList.remove('container');

console.log(sectionTodo.classList);

const ans = sectionTodo.classList.contains('container');
console.log(ans);

sectionTodo.classList.toggle('bg-dark');

