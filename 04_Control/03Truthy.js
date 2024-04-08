const uName=[]

if(uName)
{
    // console.log("Got User Email");
}
else {
    // console.log("Enter User Email");
}

// Falsy Values
// false , 0 ,-0 ,BigInt 0n,"",null,undefined, NaN

// Truthy Values
// "0"," ","false",[],{},function(){}

// check if array is empty or not
if(uName.length===0)
{
    console.log("Array is Empty");
}

// check if Object is empty or not
const customObj={}

if(Object.keys(customObj).length===0)
{
    console.log("Object is Empty");
}

//Nullish Coalescing operator(??): null undefined

let val1;
// val1=5??7; //5
// val1=null??10; //10
val1=undefined ?? 11?? 12; //11

console.log(val1);

// Terniary Operator

//Condition ? true:false

const iceTea=100

iceTea!=100 ? console.log("Yes You Are Correct"):console.log("No Its Not That Much");