//get and set attributes

const link = document.querySelector("a");//thhis will select and return the first anchor tag
console.log(link);
console.log(link.getAttribute("href").slice(1));
link.setAttribute("href","https://codprog.com");
console.log(link.getAttribute("href"));
