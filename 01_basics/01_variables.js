const accountId = 144456
let accountEmail = "priya@gmail.com"  
var accountPassword = "12345"
accountCity = "Jaipur" //this can be used too...but dont use
let accountState  //JavaScript treat it as a undefine

//accountId = 2 //not allowed as it is a constant

accountEmail = "abc@gmail.com"
accountPassword = "1234"
accountCity= "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword , accountCity])

console.log("Hello")

//variables can be declare by two ways let and var
//Earlier in javascript does not inderstand the concept of scopes so var could be changed
/*
prefer not to use var before in use in block scope and functional scope....use let
*/