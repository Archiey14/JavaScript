//for ex- if we have an array with repeating values then we can pass it into a set we will get all the unique values

const myArray = [1,3,4,4,7,5,7,8,2,3];

const unique = new Set(myArray);

console.log(unique)
console.log(unique.length)  //undefined
//to find the length of set

let length = 0;

for(let element of unique){
    length++
}

console.log(length) 