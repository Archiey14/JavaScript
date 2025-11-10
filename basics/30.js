//Callback function

function myFunc2(name){
    console.log("Inside myFunc2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("Inside myFunc");
    // callback();
    callback("Archie    ");
}

myFunc(myFunc2);