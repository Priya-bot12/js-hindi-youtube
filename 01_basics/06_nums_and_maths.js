// Number.MAX_VALUE
// Number.MIN_VALUE

// const score = 400
// console.log(score)
// const balance = new Number(100)
// console.log(balance)    //give specicaly nummber

// console.log(balance.toString())
// console.log(balance.toFixed(2))   //till two decimal point

// const otherNumber = 89.349639
// console.log(otherNumber.toPrecision(2))    //it returns string

// const  hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))    //by default uses Us standards


//*****************************maths***********************************************//


console.log(Math)     //object which have so many properties   //we can check all the properties by consoling

console.log(Math.abs(-4))    //to conver negative to positive
console.log(Math.round(4.6))    //also Math.ceil and Math.floor
console.log(Math.min(2,3,4,5,6))

console.log(Math.random())   //generate a random value between 0 and 1
console.log((Math.random()*10)+1)  //guranted that the value generated will always be grater than 1

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max-min +1)) + min)   //value between min and max





