//Map
//map also holds key value pairs like an object
//Map is an iterable

//map stores data in ordered fashion and as key value pair
//here duplicate keys are not allowed like objects

//Difference between map and object

//objects can have only symbol or string as key
//whereas maps can have anything as key
//like array , number , string  

//object literal
//key->string
//key->symbol

const person = {
    firstName : "Harshit",
    age : 7 ,
    1:"one"
}

for(let key in person){
    console.log(typeof key)//1 gets converted to string 
}