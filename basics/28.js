// addAll(1,2,3,4,5,6,7)

function addAll(a,...b){
    let sum = a;
    for(let num of b){
        sum = sum + num;
    }

    return sum;
}

console.log(addAll(1,2,3,4,5,6,7));         

//we can also do it by taking only one parameter and making an array of all the numbers