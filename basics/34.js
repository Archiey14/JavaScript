//Iterables 
//jinpe hum for of loop laga sakte hai i.e. arrays and strings

const firstName = 'Archie';

for(let char of firstName){
        console.log(char);
}

const items = ['item1','item2','item3'];

for(let item of items){
    console.log(item);
}

//Object is not iterable we cannot apply for of loop on it

const users = {
    'key1':'value1',
    'key2':'value2',
    'key3':'value3'
}

for(let user of users){
    console.log(user);
}