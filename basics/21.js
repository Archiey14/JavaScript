//lexical scope

const myVar = "value1";//global scope

function myApp(){
    const myFunc = () =>{
        console.log("Inside myFunc",myVar);
    };

    console.log(myVar);
    myFunc();
}

myApp();