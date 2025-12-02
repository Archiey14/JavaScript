console.log("script start");

setTimeout(()=>{
    console.log("inside setTimeout");
},0);

for(let i =0;i<100;i++){
    console.log("...");
}

console.log("script end");