const user = {
    name: "Danush",
    price: "1300",
    welcomeMessage: function () {
        console.log(`Welcome To The Website ${this.name}`);
        console.log(this); //Gives all the variables
    }
}

// user.welcomeMessage()
// user.name="Muski"
// user.welcomeMessage()

// console.log(this); //Gives empty object 

// Now Can We use this in function or not?

function hello() {
    const user = "danMuk"
    console.log(this.user); //Undefined
    console.log(this); //Gives Whole OBject details 
}
// hello()

// ========Arrow Function=======

const hello2 =  () => {
    const user = "danMuk";
    console.log(this); //{}
}
// hello2()

// Implicit Return
const addNum=(n1,n2,n3)=>{
    return n1+n2+n3;
}
// console.log(addNum(1,2,3));

// Implicit Return Arrow Function (single line)
const mulNum=(n1,n2)=> n1*n2
// console.log(mulNum(4,8));

// Implicit Return Arrow Function for object (single line)
const give=(name,price)=> ({username:name,cost:price})
// console.log(give("Danish",500));

