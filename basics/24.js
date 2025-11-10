//block scope vs function scope
//let and const are block scoped
//var is function scoped

{
    let firstName = "archie";
    console.log(firstName);//let is block scoped can only be accessed within the block it is defined
}

// console.log(firstName);

{
    let lastName = "Yadav";
    console.log(lastName);//const is also a block scoped variable
}
// console.log(lastName);

function greet(){
    var message = "Hello";
    console.log(message);
}

greet();

// console.log(message);