//loop

const navItems = document.getElementsByTagName("a");//select all the elements with class nav-items    
console.log(navItems);   

//we cannot use forEach method with collections
    // for(let i = 0;i<navItems.length;i++){
    //     const navItem = navItems[i];
    //     navItem.style.color = "green";
    //     navItem.style.backgroundColor = "#fff";
    //     navItem.style.fontWeight = "bold";

    // }            

for(let navItem of navItems){
    navItem.style.color = "green";
    navItem.style.backgroundColor = "#fff";
    navItem.style.fontWeight = "bold";
}