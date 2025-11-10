//primitive vs reference data types

//primitive type

let num1 = 6
num2 = num1

console.log(num1)
console.log(num2)

num1++

console.log("After incrementing....")

console.log(num1)
console.log(num2)

//reference type

let array1 = ["item1","item2"]
let array2 = array1

console.log("array1",array1)
console.log("array2",array2)

array1.push("item3")

console.log("array1",array1)
console.log("array2",array2)