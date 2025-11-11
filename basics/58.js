//solution

const userMethods = {
    about : function(){
         return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
          return this.age >= 18;              
    }
}

function createUser(firstName,lastName,email,age,address){
    const user = Object.create(userMethods) //firstly we create an empty object

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    // user.about = userMethods.about;
    // user.is18 = userMethods.is18;
    

    return user;

}


const user1 = createUser('Archie','Yadav','archiey1404@gmail.com',20,'Vijay Nagar');

const user2 = createUser('Mya','Katariya','myra@gmail.com',7,'Star Park ');

console.log(user1);     

