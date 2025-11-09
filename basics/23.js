//lexical scope 

const myVar = "value1";

function myApp(){
    //const myVar = "value2";

    const myFunc = () =>{
        const myVar = "value3";

        console.log(myVar);

    }

    console.log(myVar);
    myFunc();
}

myApp();