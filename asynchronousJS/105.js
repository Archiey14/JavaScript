// console.log("script start");

// for(let i = 1;i<10000;i++){
//     console.log("inside for loop");
// }
// console.log("script end");

//js is synchronous programming language as it runs on a single thread

console.log("script start");

function hello(){
    console.log("Hello world!");
}
setTimeout(hello,1000);

console.log("script end");