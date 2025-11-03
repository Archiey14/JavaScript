//two ways to declare a bigint number--

let myNum = BigInt(123);
let myNum2 = 123n;

//in js the max integer that can be held is ...

console.log(Number.MAX_SAFE_INTEGER);

//We can not mix bigint with other datatypes ...one bigint can only be added to another bigint

console.log(myNum + myNum2);