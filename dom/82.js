//using querySelectorAll

let navItems = document.querySelectorAll("a");
navItems = Array.from(navItems);
console.log(Array.isArray(navItems));


// simple for loop 
// for of loop 
// forEach


for(let i=0; i< navItems.length; i++){
    // console.log(navItems[i]);
    const navItem = navItems[i];
    navItem.style.backgroundColor = "#fff";
    navItem.style.color = "green";
    navItem.style.fontWeight = "bold";

}

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })
// console.log(navItems);