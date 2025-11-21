//get multiple elements using getElements by class name
//get multiple elements items using querySelectorAll

// const navItems = document.getElementsByClassName("nav-item");//select all the elements with class nav-items    
// console.log(navItems);          
// console.log(navItems[0]);          
// console.log(navItems[1]); 


let navItems = document.getElementsByTagName("a");
console.log(navItems);
// navItems.forEach(...) //wont work on html collection

// for(let navItem of navItems){
//     navItem.style.color = "green";
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.fontWeight = "bold";
// }

//converting into real array

navItems = Array.from(navItems);
console.log(Array.isArray(navItems));

navItems.forEach((navItem)=>{
    navItem.style.color = "green";
    navItem.style.backgroundColor = "#fff";
    navItem.style.fontWeight = "bold";

});