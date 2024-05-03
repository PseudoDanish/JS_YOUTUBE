//For Loop

for (let index = 0; index < 7; index++) {
    const element = index;
    if(element==5)
    {
        // console.log("5 IS The Best Num");
    }
    // console.log(element);
}


// Array For Loop

const myArray=["Hello","Hii","Heyy"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);    
}

//Break and Continues

for (let index = 0; index <=25; index++) {
    if(index==5)
    {
        // console.log(`Detected ${index}`);
        break
    }
    // console.log(`Value Of I is : ${index}`);

}
for (let index = 0; index <=25; index++) {
    if(index==5)
    {
        console.log(`Detected ${index}`);
        continue
    }
    console.log(`Value Of I is : ${index}`);

}
