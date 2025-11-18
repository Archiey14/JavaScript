let numbers = [1,2,3];

console.log(Object.getPrototypeOf(numbers));//returns array
console.log(numbers);

function hello(){
    console.log("hello");
}

console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
