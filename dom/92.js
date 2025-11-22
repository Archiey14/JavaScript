const btn = document.querySelector(".btn-headline");

//here if we use an arrow function inside the event listener then this will return the surrounding environment this
// btn.addEventListener('click',()=>{
//     console.log('you clicked me!!!!');
//         console.log('value of this');
//         console.log(this);

// });


btn.addEventListener('click',function(){
    console.log('you clicked me!!!!');
        console.log('value of this');
        console.log(this);

});