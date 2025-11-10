function about(hobby,favMusician){
                console.log(this.firstName,this.age,hobby,favMusician);
        }

const user1 = {
        firstName: "Archie",
        age : 20,
      
}

const user2 = {
       firstName: "Myra",
        age : 7
}

about.call(user2,"guitar","coldplay");//means we have passed this as user2    
//in this way using call we can link one obj property or method to another object
about.call(user1,"guitar","coldplay");