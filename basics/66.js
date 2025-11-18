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

class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);//super is referring to the parent class
        this.speed = speed;
    }

    eat(){
        return `Modified eat:${this.name} is eating`;
    }

    run(){
        return `${this.name} is running`;
    }

}

const tommy = new Dog("TOMMY",2,45);
console.log(tommy.run());
console.log(tommy.eat());