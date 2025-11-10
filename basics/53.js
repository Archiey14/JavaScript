//short syntax  

const user1 = {
        firstName : "archie",
        age : 20,
        about: () =>{
            console.log(this.firstName,this.age);   
        }
    }


    //equivalent to 

    const user2 = {
        firstName : "archie",
        age : 20,
        about(){
            console.log(this.firstName,this.age);   
        }
    }
