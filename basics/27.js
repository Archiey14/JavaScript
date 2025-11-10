//Rest parameters


function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log('c is' , c);

}

console.log(myFunc(3,4,5,6,7,8));
//here a will get 3,b will get 4 and all the rest parameters will be grouped into an array and assigned to c    