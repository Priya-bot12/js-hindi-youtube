//Date 

let myDate = new Date();   //object of date
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date ( 2023 , 0 , 23);  //year month date //month start from 0 
console.log (myCreatedDate.toDateString());

let myAnotherDate = new Date ( "2023-01-14");     //here month start from 1
console.log(myAnotherDate.toLocaleString())

let timeStamp = Date.now();
console.log(timeStamp);
console.log((myAnotherDate.getTime()))

//convert millisecond into seconds 

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate())   //Similarly we can do get.month ...and many More
console.log(newDate.getMonth()+1)  //coz month start from 0

//`${newDate.getDay()} and the time is `

//to customize the format more we can use toLocale String

newDate.toLocaleString('Default', {         //ctrl+space +. to see all the properties
    weekday : "long"
})
