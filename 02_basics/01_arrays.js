//Array  - > collection of multiple items in an varaible

const arr = [0,1,2,3,4, "hitesh" , true];
//properties
//1. can have more than one datatype
//2. they are resizable once declared
//3. are not associatd arrays - arrays elements can not be accessed using arbitary string as index
//4. console.log(arr["one"])  => not allowed

//whenever we use an copy operation with the arrays it always make an shallow copy 
//SHALLOW COPY - > Same reference point
//DEEP COPY - > not the same reference

const myHeros = ["Shaktiman" , "naagraj"];
const myArr = new Array(1,2,3,4,5)  //now need of square bracket it automatically takes
//by doing inspect we get prototype through which we can know the differnt arrays properties

//Arrays Methods

myArr.push(6);

// console.log(myArr.pop())

myArr.unshift(9)   //insert at the starting of the array// load on computer if so many elements
myArr.shift()     //remove the first element
// console.log(myArr.includes(9))   //does it include the elemt or not
// console.log(myArr.indexOf(9)) //return the -1 as 9 is not present in the array

const newArr = myArr.join()  //convert the array in the string

// console.log (typeof newArr)
// console.log(myArr)

//slice and splice
console.log("A" , myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1)

console.log("B", myArr)
const myn2 = myArr.splice(1,3)      //In splice orignal array grt manipulated only the elemnts which are not included in splice are left in origninal array
console.log("C" , myArr)
console.log(myn2)


