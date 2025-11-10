//function returning function

function myFunc(){
    return function(){
            return "hello world";
    }
}

const ans = myFunc();
console.log(ans());