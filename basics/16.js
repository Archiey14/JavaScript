//objects inside array

let users = [
    {user_id:1,username:"Archie",gender:"male"},
    {user_id:2,username:"Myra",gender:"female"},
    {user_id:3,username:"Misha",gender:"female"}
]

// for(let user of users){
//     console.log(user.user_id);
//     console.log(user.username);
//     console.log(user.gender);
// }


//array destructuring : giving each object a variable

// const [user1,user2,user3] = users;
const [{username : user1username,gender : user1gender},{username : user2username,gender : user2gender}] = users;

console.log(user1username);
console.log(user1gender);

console.log(user2username);
console.log(user2gender);


