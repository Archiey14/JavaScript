const obj = {
    key1 : 'value1',
    key2 : 'value2'
}

const obj1 = Object.create(obj);    //this is one more way to create an empty object and setting the prototype

obj1.key3 = "value3";

console.log(obj1);  
console.log(obj1.key2);//searches for key2 in proto

console.log(obj1.__proto__);