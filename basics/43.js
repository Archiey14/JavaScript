//methods : Functions inside object

const obj ={
    'firstName':'Archie',
    'age':7,
    about:function(){
        console.log(this);//this refers to the object obj itself.
        console.log(this.firstName);
        console.log(this.age);
    }
}

console.log(obj);  
obj.about();

