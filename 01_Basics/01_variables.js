const accoundId= 144553
let accountEmail="dragzy@gmail.com"
var accountPass="2131"
accountCity="Bangalore"
let accountState;

// accoundId=5464 //Not Allowed To Change Const variables
accountEmail="drag@google.com"
accountPass="5464"
accountCity="Gujarati"
console.log(accoundId);//Simple

/*
Prefer Not to Use Var because of issue in block scope and functional scope.
*/

console.table([accoundId,accountEmail,accountPass,accountCity,accountState]);//Al Little Better