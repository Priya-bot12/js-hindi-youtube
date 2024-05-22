//OBJECTS
//object.create  //singleton

//object literals

//Symbol

const mySymbol = Symbol("key1")

const JsUser = {
    name: "Priya",
    "full Name" : "Priya Chauhan",
    //symbol as  a key this method is not allowed
    //mySymbol : "mykey1"  **    //it will not be used as symbol 
    [mySymbol] : "mykey1" ,           
    age : 18,
    location: "Jaipur",
    email: "priya0906.@gmail.com",
    isLoggedIn: false

}

//accesing methods
console.log(JsUser.email)     //we will never be able to get the full name using dot method
console.log(JsUser["email"])  //behind the system name,email,location are stored as string thats why email is in ""!!
console.log(JsUser["full Name"])
console.log(JsUser[mySymbol])

//Change the value

JsUser.email = "priya@chatgpt.com"

//if we want that no one can change values
//Object.freeze(JsUser)

JsUser.email = "hey@09.gmail"  // will not give any error but changes will not get propagate

//Functions

JsUser.greeting = function(){
    console.log("hello Js User")
}
JsUser.greeting()
console.log(JsUser.greeting)  //[Function (anonymous)] function is not executed only the reference has come

JsUser2.greeting = function(){
    console.log(`hello Js User ${this.name}`)   //referencing the same object
}