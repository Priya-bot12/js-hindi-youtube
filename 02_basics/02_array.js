const marvelHeros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["Superman", "flash", "batman"]

// marvelHeros.push(dc_heros)   //array in the array  //dcHeros become the element
                            //push add in the existing array but concat needs to be store in another array

// console.log(marvelHeros)

const allHeros = marvelHeros.concat(dc_heros)   
console.log(allHeros)

//Spread operator

const allNewHeros = [...marvelHeros, ...dc_heros]   //all elements have been spread
console.log(allNewHeros)

const another_array = [1,2,3,[4,5,6], 7, [6,7,[4,5]]]
const realANotherArray = another_array.flat(Infinity)    //infinity is the depth 
console.log(realANotherArray)


console.log(Array.isArray("Priya"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"}))   //it will give the empty array coz we need to tell whether to conver values or name

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))