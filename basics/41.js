//to avoid this we can clone the object using assign method 

//one more way of doing cloning is by using the spread operator

const obj = {
    'key1':'value1',
    'key2':'value2'
}

obj1 = {...obj};

obj.key3 = "value3";
console.log(obj);
console.log(obj1);

//assign

const obj2 = Object.assign({},obj);
obj.key4 = "value4";
console.log(obj);
console.log(obj2);