// let var and const ki khaani

// IF the Initialised Vairables are inside a condtional statement then they are called Block Scope Variable sand if they are defined at the top of the code thay are globbal scope variables
//var is not used  as it is not practical
// var c=300


let a=300
if(true){
    let a=10
    const b=20
    // var c=30
    // console.log("Inner:"+a);
}


// console.log(a); //Giver And errror And it is correct (Block Scopee)
// console.log(b); //GGiver Error and it is correct (Block Scope)
// console.log(c); //Output 30 Which is NOT CORRECT

// console.log(a);


// ====Nested SCOPes====

function one()
{
    const uname="danish"

    function two(){
        const webName="Github"
        console.log(uname);
    }
    // console.log(webName);// Error as it is a block scope variable

    two()
}
// one() //Exceutes and giver danish as o/p

if(true)
{
    const uName="muski";

    if(uName==="muski")
    {
        const character=" Pagaal";
        // console.log(uName + character);
    }
    // console.log(character); //Error
}
// console.log(uName);//Error


//=================INTERESTING================
console.log(addOne(2)) //No error
function addOne(num)
{
    return num+1
}

addTwo(6) //Error
const addTwo=function(num)
{
    return num+2
}
