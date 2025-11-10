//in map we can make anything as key

//how to make a map 

const person = new Map();
person.set('firstname','Archie');
person.set('age',7);
person.set(1,'one');
// person.set('[2,3,4]',4);
// console.log(person);
// console.log(person.get(1)); 

// for(let key of person.keys()){
//     console.log(typeof key);
// }

for(let key of person){
        console.log(Array.isArray(key));//returns in the form of array
}           

//Another way of making Map

const person1 = new Map([['firstname','archie'],['age',7],['gender','female']]);

console.log(person1);

//Setting an object as the key in a map

const person2 = {
    id:1,
    firstName:'Archie'
}   

const userInfo = new Map();
userInfo.set(person2,{age:8,gender:'female'});

console.log(userInfo);//here key is also an object and value is also an onject          

console.log(person2.id);
console.log(userInfo.get(person2).age);