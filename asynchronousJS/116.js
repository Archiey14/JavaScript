const myPromise = function(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}

myPromise().then(value=>{
    console.log(value);

    value += "bar";

    //if we donot return anything here it return undefined as a promise 
})
.then(value=>{
    console.log(value);
})