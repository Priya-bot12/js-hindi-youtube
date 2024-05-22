//objects singleton or with the help of constructors

const tinderUser = new Object()    //empty object    //Singleton Object

const tinderUser1 = {}           //empty object same as above  //non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser1)

const regularUser = {
    email : "hello@gmail.com",
    fullname : {
        userfullname : {
            firstname:"Priya",
            lastname:"Chauhan"
        }
    }
}

console.log(regularUser.fullname.userfullname)

const obj1 = {1: "a" , 2:"b"}
const obj2 = {3: "a" , 4:"b"}

// const obj3 = {obj1 , obj2}  //same problem like array object in an object
//empty {} is target and other are source
const obj3 = Object.assign({} ,obj1 , obj2)  //all the values will be combined

//best way to combine object is

const obje3 = {...obj1, ...obj2}

// console.log(obj3)

//when the values come from database they actuall come as array of objects

const user = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {

    },
]

console.log(user[0].id)

console.log(tinderUser)
//methods 
console.log(Object.values(tinderUser))   //get all the keys and values  and the datatype will be array
console.log(Object.entries(tinderUser))    //all the entries in the form of arry in array

//to check if the object contain that property or not

console.log(tinderUser.hasOwnProperty("isLoggedIn"))

//other properties can be know from inspect


