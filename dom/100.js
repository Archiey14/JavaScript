const body = document.body;

body.addEventListener('keypress',(e)=>{
    console.log(e);

})

const mainButton = document.querySelector(".btn-headline");
mainButton.addEventListener('mouseover',()=>{
    console.log("mouseover event occured");

})


mainButton.addEventListener('mouseleave',()=>{
    console.log("mouseleave event occured");

})