//Default parameters

// function sum(a,b){
//     if(typeof b=="undefined"){
//         b=0;
//     }

//     return a+b;
// }

// console.log(sum(5));

//Another way of setting default parameter

function sum(a,b=0){
    return a+b;
}

console.log(sum(4,3));
console.log(sum(4));