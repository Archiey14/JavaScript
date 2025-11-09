//var vs let vs const

function test(){
    if(true){
        var x = 10;
        let y = 20;
        const z = 30;
        console.log(x,y,z);
    }
    console.log(x);
    // console.log(y);
    // console.log(z);
}

test();