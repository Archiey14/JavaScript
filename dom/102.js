
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//Non Capturing events
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


//Capturing events


child.addEventListener('click',()=>{
    console.log("u clicked child");
},true)

parent.addEventListener('click',()=>{
    console.log("u clicked parent");
},true)

grandparent.addEventListener('click',()=>{
    console.log("u clicked grandparent");
},true)

document.body.addEventListener('click',()=>{
    console.log("u clicked body");
},true)