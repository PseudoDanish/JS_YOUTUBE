const course={
    name:"JS-Youtube",
    channel:"Chay||Code",
    vids:52
}
// console.log(course.name) //Common BUT NOT CLEAN CODE

// Object Destructuring

// ch is a given name by US
const {channel : ch}=course;
console.log(ch);

// API REPRESENTATION

// {
//     "name":"danmus",
//     "coursename":"JS-YT",
//     "price":"Free"
// }

// randomuser.api == This Is Where YOu Could Find Random Api Details For Practise
// Json Formatter= ( Javascript Object Notation) This Is to Understand our api details easily.
