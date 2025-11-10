//object oriented programming

const user = {
    firstName : "Archie",
    lastName : "Yadav",
    email : "archiey1404@gmail.com",
    age : 20,
    address : "vijay nagar",
    about:function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18:function(){
        return this.age >= 18;           
    }
}

const aboutUser = user.about();

console.log(aboutUser);

//suppose we want to create mpre such users
//we can create a function 
//that function can:
//1.create object
//2.add key value pair              
//3.return that object  

