//spread operator in object

let obj ={
    key1 : "value1",
    key2 :"value2",
    key1:"value3"//baad wali value will be given precedence
}

console.log(obj)

const obj1 = {
    key1:"value1",
    key2:"value2"
}

const obj2 = {
    key1:"valueunique",
    key3:"value3",
    key4:"value4"
}

// let newObj = {...obj1,...obj2};
// let newObj = {...obj1,...obj2,key69:"value69"};
// let newOb`j = {...["item1","item2"]};
let newObj = {..."abcdefghijk"};

console.log(newObj)

