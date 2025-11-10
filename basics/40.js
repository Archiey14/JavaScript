//clone object using assign

//since oject is a reference datatype in java therefore its reference is stored in memory

const obj = {
    'key1':'value1',
    'key2':'value2'
}

const obj2 = obj;

obj.key3 = "value3";//here we have added new key to obj but it also automatically get linked to obj2 because they are linked by their address

console.log(obj);
console.log(obj2);



