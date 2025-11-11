//prototype
//only functions have prototypes


function hello(){
    console.log("hello");
}

// const hello = 1;


if(hello.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype not present")
}

//we can also add properties to our prototype

hello.prototype.abc = "abc";    
hello.prototype.xyz = "xyz";    
hello.prototype.sing = function(){
        return "lalala";
}

console.log(hello.prototype);
console.log(hello.prototype.sing());