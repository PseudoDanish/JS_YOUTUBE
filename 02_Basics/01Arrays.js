// Different Types Of Array Representations

const myArray=[1,2,3,4,5,6]

// Array Methods

myArray.push(10)
console.log(myArray);
myArray.pop()

myArray.shift()
myArray.unshift(7)
console.log(myArray.includes(6)); //Boolean Data Type
console.log(myArray.indexOf(2)); //Returns Index Of The Given Value or -1 if not present
    
const newArray=myArray.join()
console.log(myArray);
console.log(newArray);

        //Splice Slice Methods

console.log("A)", myArray); //Original Array

const mynew1=myArray.slice(1,4)
console.log(mynew1);

console.log("B)", myArray); //No changes Done With Slice()

const mynew2=myArray.splice(1,4)
console.log(mynew2);
console.log("C)", myArray); //The output Removes The elements from The given index ranges in the Splice().
