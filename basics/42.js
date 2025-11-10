//optional chaining
//this property is basically used to prevent an error when we try to access the null or undefined properties of any object

const user = {
    'firstName' : 'Archie'
}

console.log(user?.firstName);
console.log(user?.address?.house);
// console.log(user.address.house);//such a property doesnot exist so it will throw an error