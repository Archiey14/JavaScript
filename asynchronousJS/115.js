//promise.resolve
//promise chaining

// const myPromise = Promise.resolve(5);

// myPromise.then(value=>{
//     console.log(value);
// })  

//then() method hamesha promise return karta h

const myPromise = function(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}

myPromise().then(value=>{
    console.log(value);

    value += "bar";

    return value;
    //return myPromise.resolve(value)
})
.then(value=>{
    console.log(value);
})
