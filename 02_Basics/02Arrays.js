const myHeroes = ["Mohammed", "Ibn-Abbas", "Gibrael"];
const urHeroes = ["Batman", "Patrick", "RDJ"];

// myHeroes.push(urHeroes); //Gives Non Suitable Output:[ 'Mohammed', 'Ibn-Abbas', 'Gibrael', [ 'Batman', 'Patrick', 'RDJ' ] ]
// console.log(myHeroes);

// const allHeroes=myHeroes.concat(urHeroes); //School Level Output :[ 'Mohammed', 'Ibn-Abbas', 'Gibrael', 'Batman', 'Patrick', 'RDJ' ]
// console.log(allHeroes);

//Spread Operator

const allourHeroes = [...myHeroes, ...urHeroes];
// console.log(allourHeroes); //Used EveryWhere Except Colleges OUTPUT:[ 'Mohammed', 'Ibn-Abbas', 'Gibrael', 'Batman', 'Patrick', 'RDJ' ] 

const mixArray = [1, 2, 4, 5, [1, 6, 7, 8, [0, 9, 5, 3, 2, [1, 2, 3, 44, 6, [10, 11, 12, 14]]]]];
const realArray = mixArray.flat(10);
// console.log(realArray); //Gives A Complete Line Output Array in a single array

//Array Conversion
// console.log(Array.isArray("DanMuski"));
// console.log(Array.from("takla and bhootni"));

const usObj = { name: "DanMusk" }
// console.log(Array.from(usObj.name)); //Interesting Topic To be Discussed Further

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
