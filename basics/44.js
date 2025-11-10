//more about this

function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "Archie",
    age:20,
    about:personInfo
}

const person2 = {
    firstName : "Myra",
    age:7,
    about:personInfo
}

const person3 = {
    firstName : "Misha",
    age:1.5,
    about:personInfo
}

person1.about();
person2.about();
person3.about();
