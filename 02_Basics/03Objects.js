// Object are made by two methods

//1) Constructor (Singleton Objects)
// Object.create()

//object lierals

// Symbol Inititalisation
const mySymbol=Symbol("key1");

const jsUser={
    name:"DanMuski",
    age:18,
    [mySymbol]:"helloKey", //Using Symbol inside Objects
    "fav game":"valorant",
    location:"Himmatnagar",
    email:"danMuski@gmail.com",
    isCoding:true,
    lastCommitted:["Friday","Saturday"]
}

// 2 ways to print Objects
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser.fav game); //Not Gonna work so Square Notation IS the only way
// console.log(jsUser["fav game"]);
// console.log(jsUser[mySymbol]); //No String Needed to Print Symbol From Objects

//To keep Your values in Objects Default Then U Freeze
// Object.freeze(jsUser)

jsUser.age=22
// console.log(jsUser) //NO Change From The Original Output

jsUser.greetings=function (){
    console.log("Hello JS User. Hope You Are Doing Fine.");
}

jsUser.greetingsTwo=function (){
    console.log(`Hello JS User. Hope You Are Doing Fine, ${this.name}`);
}
// console.log(jsUser.greetings); //undefined if the object is  frozen or else you get {[Function (anonymous)]}
console.log(jsUser.greetings())
; //Hello JS User. Hope You Are Doing Fine.
console.log(jsUser.greetingsTwo()); //Hello JS User. Hope You Are Doing Fine, DanMuski