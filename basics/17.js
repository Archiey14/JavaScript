//function declaration 

// function happyBirthday(){
//     console.log("Hey wishing you a very happy birthday");
// }

// happyBirthday();

// function sum(number1,number2){
//     return number1+number2;
// }

// console.log(sum(9,18));

// function threeSum(num1,num2,num3){
// return num1+num2+num3;
// }

// console.log(threeSum(2,3,4));

// function firstChar(anyString){
//     return anyString[0];
// }

// console.log(firstChar("abcd"));

function findTarget(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1
}

console.log(findTarget([1,2,3,4],2));