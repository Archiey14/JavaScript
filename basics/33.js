//Important Array Methods
//foreach

const numbers = [1,2,3,4];

function multiplyBy2(number,index){
    console.log('Index is',index);
    console.log(`${number}*2 = ${number*2}`);
}

// multiplyBy2(numbers[0],0);

// for(let i=0;i<numbers.length;i++){
//     multiplyBy2(numbers[i],i);

// }

//Instead of using the above loop we can use the for each function 

    numbers.forEach(function(number,index){
        console.log(`Number is ${number} and index is ${index}`);
    });

    //For objects 

    