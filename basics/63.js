//classes in js(class in js are fake)

class createUser{
    constructor(firstName,lastName,email,age,address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    }

    about(){
         return `${this.firstName} is ${this.age} years old`;
    };
    is18(){
          return this.age >= 18;                          
    }

    sing(){
        return "lalalala";
    }


}

const user1 = new createUser("archie","yadav","archiey1404@gmail.com",20,"vijay nagar");

console.log(user1);
console.log(Object.getPrototypeOf(user1));