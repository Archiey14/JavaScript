const allButtons = document.querySelector("my-buttons button");

allButtons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
    console.log(e.currentTarget.textContent);  

    })

})