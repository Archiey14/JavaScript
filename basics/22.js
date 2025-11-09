//lexical scope 

const globalVar = "i am global";

function myApp(){
    const outerVar = "i am outer";

    const myFunc = () =>{
        const innerVar = "i am inner";

        console.log(innerVar);
        console.log(outerVar);
        console.log(globalVar);
    }

    // console.log(innerVar);(inner scope not accessible)
    console.log(globalVar);
    myFunc();
}

myApp();