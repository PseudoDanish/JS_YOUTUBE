const score=169;
// console.log(score);

// console.log();

const bal=new Number(14678);
// console.log(bal);
// console.log(bal.toString().length);
// console.log(bal.toFixed(4));

// console.log();

const newNum=124.1234;
// console.log(newNum);
// console.log(newNum.toPrecision(3));

// console.log();

const hundreds=100000000;
// console.log(hundreds);
// console.log(hundreds.toLocaleString()); //Us Default Based Number System Commas
// console.log(hundreds.toLocaleString('en-IN')); //Indian Based Number System Commas

// ====================================================== MATHS-LIBRARY ====================================================== //

console.log(Math);
// console.log(Math.ceil(2.1));
// console.log(Math.floor(4.9));
// console.log(Math.abs(-4.9));
// console.log(Math.round(4.5));
// console.log(Math.min(1,2,3,4,5,6,7,8,9));
// console.log(Math.max(1,2,3,4,5,6,7,8,9));

// console.log(Math.random());

// console.log((Math.random()*10) + 1); // Cause If Its Zero Then By Multiplying It will be zero so Plus one needed.

const min=10;
const max=50;

console.log(Math.floor(Math.random() * (max-min+1))+min); // plus min so that it stays within the range
