let myDate=new Date();

// console.log(myDate);
// console.log(myDate.toDateString()); //only Dates No Time
// console.log(myDate.toLocaleDateString()); //Simple human Written Dates With slash
// console.log(myDate.toLocaleString()); //Date And Time Both

// console.log(typeof myDate);

// let customDate=new Date(2027,4,19,6,8,10,11);
// let customDate=new Date(2027,4,19); //FOr arrays in count format the motnhshould start from zero
// let customDate=new Date("2027-11-30"); //yy-mm-dd
let customDate=new Date("11-30-2023"); //mm-dd-yy
// console.log(customDate.toLocaleString());

let myTime=Date.now();
// console.log(myTime);
// console.log(customDate.getTime());
// console.log(Math.floor(myTime/1000));

let date=new Date();
// console.log(date.toLocaleString());
// console.log(date.getHours());
// console.log(date.getMonth()+1);

const date2=date.toLocaleString('default',{
    minute:'2-digit',
    weekday:"long"
});

console.log(date2); //Customized View Of wht we want thought creating it as and object;