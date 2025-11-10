//bind 

function greet(){
    console.log(`name is ${this.name}`);
}

const user = {
    name : "Archie"
}

const greetArchie = greet.bind(user);

greetArchie()