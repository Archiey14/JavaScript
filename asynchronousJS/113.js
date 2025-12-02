//function returning promise 

function ricePromise(){
    const bucket = ['vegetables','rice','chips','coffee']

    return new Promise((resolve,reject)=>{
    
    if(bucket.includes("vegetables")&&bucket.includes("rice")&&bucket.includes("salt")){
        resolve("fried rice");
    }else{
        reject("cant make it")
    }
})

}   

ricePromise().then(()=>{
    console.log("lets eat fried rice");
}).catch((error)=>{
    console.log("not possible");
}) 
