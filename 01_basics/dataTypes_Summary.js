/*On the basis of how the data is stored in the memory datatypes are classified into two categories 
    primitive and Non-Primitive*/

//Primitive : call by value
//7 types : String , Number , Boolean , null , undefined, symbol , BigInt

//Non-Primitive : call by reference
//Arrays , objects and functions

//JavaScript is Dynamically typed language

const score = 100
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)

const bigNumber = 4545576357653896n

const heros = ["shaktiman" , "naagraaj"]

let myObj = {
    name : "Priya"
    age : 18
}

const myFunction= function (){     //function Object
    console.log("Hello world")
}

// https://262.ecma-international.org/5.1/#sec-11.4.3