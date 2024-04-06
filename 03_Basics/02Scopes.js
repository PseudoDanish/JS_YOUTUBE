// let var and const ki khaani

// IF the Initialised Vairables are inside a condtional statement then they are called Block Scope Variable sand if they are defined at the top of the code thay are globbal scope variables
//var is not used  as it is not practical
// var c=300


let a=300
if(true){
    let a=10
    const b=20
    // var c=30
    console.log("Inner:"+a);
}


// console.log(a); //Giver And errror And it is correct (Block Scopee)
// console.log(b); //GGiver Error and it is correct (Block Scope)
// console.log(c); //Output 30 Which is NOT CORRECT

console.log(a);
