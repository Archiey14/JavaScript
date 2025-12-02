console.log("script start")
const bucket = ['vegetables','rice','chips','coffee','salt'];


//production of a promise
const friedricePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables")&&bucket.includes("rice")&&bucket.includes("salt")){
        resolve("fried rice");
    }else{
        reject("cant make it")
    }
})

//consumption of the promise

// friedricePromise.then(()=>{
//     console.log("lets eat fried rice");
// },(error)=>{
//     console.log("not possible");
// })

friedricePromise.then(()=>{
    console.log("lets eat fried rice");
}).catch((error)=>{
    console.log("not possible");
})  

setTimeout(()=>{
    console.log("Hello from set timeout ")

},1000)

for(let i=0;i<100;i++){
    console.log(Math.random(),i)
}

console.log("script end");

