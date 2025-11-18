class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;

    }

    eat(){
        console.log(`this ${this.name} is eating`);
    }

    isSuperCute(){
        return this.age<=1;

            }

    isCute(){
        return true;
    }
}

const a1 = new Animal("tom",1);

console.log(a1);
console.log(a1.eat());
console.log(a1.isSuperCute());