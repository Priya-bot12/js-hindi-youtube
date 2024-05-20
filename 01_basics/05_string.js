const name = "priya"
const repoCount = 50

console.log(name + repoCount + "value")

//String interpolation
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Hello-world')

console.log(gameName[0]);
console.log(gameName.__proto__)    //gives object {}

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('l'))

const newString = gameName.substring(0,4) // no negative values ...by default start from 0
console.log(newString)

const anotherString = gameName.slice (-8,4)
console.log(anotherString)

const newStringOne = "     priya   "
console.log(newStringOne.trim())  //trim all the starting space and the ending spaace

//there is trim start and trim end method also


const url = "https://hitesh.com/hitesh%20choudahry"
console.log(url.replace('%20' , '-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-'))    //gives an array

console.log(gameName.bold())