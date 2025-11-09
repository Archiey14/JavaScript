//function inside function

function myApp(){
    const myFunc = () =>{
        console.log("Hello from my function");
    };

    const sum = (num1,num2) =>{
        return num1+num2;
    }

    const mul = (num1,num2) =>{
        return num1*num2;
    }

    console.log("hello from my app");
    myFunc();
}

myApp();