//Object

const person = {
    name:"Archie",
    age:20,
    "person hobbies":['guitar','music','singing'] 

}

for(let key in person){
    console.log(key);
}

for(let key in person){
    console.log(`the person's ${key} is ${person[key]}`);
}


console.log(Object.keys(person));
console.log(typeof Object.keys(person));