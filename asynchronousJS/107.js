//setTimeout() id

console.log("script start");

const id = setTimeout(()=>{
    console.log("Inside timeout");
},1000);

for(let i=1;i<100;i++){
    console.log("......");

}

console.log("setTimeout id is ",id);
console.log("script end");