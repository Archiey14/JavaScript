function createUser(firstName,lastName,email,age,address){
    const user = { }//firstly we create an empty object

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
         return `${this.firstName} is ${this.age} years old`;
    }
    user.is18 = function(){
        return this.age >= 18;              
    }

    return user;

}

const user1 = createUser('archie','yadav','archie@gmail.com',20,'vijay nagar');
console.log(user1); 
const is18 = user1.is18();
console.log(is18)
console.log(user1.about())  

//the limitation in this method of creating object is that jitni baar ham object banayenge utni baar object ke methof firse banenge which eventually lead to waste of memory

//to recover from this limitation - we can create another object for the user methods 