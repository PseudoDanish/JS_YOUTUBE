// object Constructor Initialisation (Singleton Objects)

const tinderUser = new Object();
tinderUser.name = "Tommy";
tinderUser.isGood = false;
tinderUser.city = "Amd";

// console.log(tinderUser);

const newUser = {
    name: "xyz",
    email: "muski@gitinder.com",
    username: {
        fullname: {
            firstname: "Musk",
            lastname: "Shabri"
        }
    }
}

console.log(newUser.username.fullname.firstname);
//Optional Chaining IS Used When We Dont Know Where The Variable is Coming From So IT IS Denoted By A Question MArk
// console.log(newUser.username?.fullname.lastname);

const obj1 = { 2: "bc", 1: "cb" }
const obj2 = { 4: "bc", 3: "cb" }
const obj3 = { 6: "bc", 5: "cb" }

// 90% Used 
const obj4 = { ...obj1, ...obj2, ...obj3 };

const obj5 =Object.assign({},obj1,obj2,obj3); //The Empty Paranthesis Is For The Target Object Where EveryThing Is To Be Stored.
console.log(obj4);
console.log(obj5);

//Database Values

const users = [
    {
        id: 1,
        email: "dm@gmail.com"
    },
    {
        id: 2,
        email: "dm@gmail.com"
    },
    {
        id: 3,
        email: "dm@gmail.com"
    },
    {
        id: 4,
        email: "dm@gmail.com"
    }
]

console.log(users[0].id);
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //Datatype Array And Its Interesting Topic
console.log(Object.values(tinderUser));//Datatype Array And Its Interesting Topic
console.log(Object.entries(tinderUser));

// Check If an Object has A Specific Property Or Not
console.log(tinderUser.hasOwnProperty('isGood')); //True
console.log(tinderUser.hasOwnProperty('isgood')); //False
