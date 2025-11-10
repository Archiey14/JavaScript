function myFunc(){
    "use strict"
    console.log(this);
}

myFunc();

//with strict mode on this will return global object ie window object
//without strict mode this will return undefined cause there is no obj defined      