//arrow functions

    const user1 = {
        firstName : "archie",
        age : 20,
        about: () =>{
            console.log(this.firstName,this.age);   
        }
    }

    user1.about.call(user1);

    //arrow functions ignore call , apply and bind