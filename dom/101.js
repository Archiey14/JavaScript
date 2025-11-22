//event bubbling or event propogation
//event capturing 
//event delegation

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

child.addEventListener('click',()=>{
    console.log("u clicked child");
})

parent.addEventListener('click',()=>{
    console.log("u clicked parent");
})

grandparent.addEventListener('click',()=>{
    console.log("u clicked grandparent");
})

document.body.addEventListener('click',()=>{
    console.log("u clicked body");
})

//above example is of event bubbling

