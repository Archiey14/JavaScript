//set is also an iterable
//they store data and have their own methods 
//no index based access
//order is not guaranteed
//unique items only (no duplicates allowed)

const items = ['item1','item2','item3'];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6   );
numbers.add(items);

console.log(numbers);

//methods of set 

if(numbers.has(1)){
    console.log('1 is present');
}else{
    console.log('1 is not present');
}

for(let number of numbers){
    console.log(number);
}


//set should only be used when we have unique values and one value appears only once 

//ex - id 



