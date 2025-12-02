//callbacks, callback hell, pyramid of doom
//asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
// setTimeout(()=>{
//     heading1.textContent = "heading1";
//     heading1.style.color = "violet";


// },1000);

// setTimeout(()=>{
//     heading2.textContent = "heading2";
//     heading2.style.color = "red";
// },3000);



//callback hell  
setTimeout(()=>{
     heading1.textContent = "one";
     heading1.style.color = "violet";

     setTimeout(()=>{
        heading2.textContent = "two";
        heading2.style.color = "purple";

        setTimeout(()=>{
        heading3.textContent = "three";
        heading3.style.color = "red";

        setTimeout(()=>{
        heading4.textContent = "four";
        heading4.style.color = "pink"; 

        setTimeout(()=>{
        heading5.textContent = "five";
        heading5.style.color = "green";


        },2000)

        },1000)

        },2000)

     },2000)

},1000);


// function changeText(element,text,color,time){

//     setTimeout(()=>{

 
//     element.textContent = text;
//     element.style.color = color;

//        },time)

// }

// changeText(heading6,"six","yellow",2000);


