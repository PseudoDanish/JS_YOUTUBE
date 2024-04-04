
function helloworld(username) {
    if (!username) {
        console.log("Please Enter A Username");
        return
    }
    return `${username} prints out Hello World.`;
}

console.log(helloworld("Danish"));

// Function Has A keyword name paranthesis and its definition where the logic is implemented and is written in {}
//Function Parameters can be passed and they can be of various datatypes.

function hellObject(object){
    return `${object.username} has a net worth of ${object.price}.`;
}

const details = {
    username:"Danish",
    price:1000000000
}

console.log(hellObject(details)); 

const array=[12,13,14,15,16,17,18,19,20];

function arrayValues(arr1){
    return arr1[2]
}

console.log(arrayValues(array));
