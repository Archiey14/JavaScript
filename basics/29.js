//rest + param destructuring

//case1-Array
function headAndTail(head,...tail){
    console.log(head,tail);
}

headAndTail(1,2,3,4,5);

//case2-object

function separate({id,...other}){
    console.log(id);
    console.log(other);

}

separate({id:1,name:'Archie',city:'Jabalpur'});