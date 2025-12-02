//fetch 

const URL = "https://jsonplaceholder.typicode.com/postsssx";

fetch(URL)//returns promise
.then(response=>{
    if(response.ok){
    return response.json()
    }else{
        throw new Error("something went wrong")
    }
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log("inside catch")
    console.log(error)

})