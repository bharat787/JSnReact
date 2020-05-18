/* There are seven types of data types in JS
undefined, null, boolean, string, symbol, number and object
*/

// ways to declare a variable (3 ways)

var myName = "Bharat"   // can be used througout the prog

let ourName = "Gupta"   // can only be used within the scope

const pi = 3.14         // sets a constant, if you try to change you get error

console.log(myName)     // allows you to see value in console

// until a variable is assigned a value it is a null variable
// JS is case sensitive
// backticks ` ` can also be used to init a string

var myNameLen = myName.length   //returns length

// You can access an indice using [] (lke python)

// Strings are immutable, thus you can't change a string element by reassignment

// defining arrays
var arr =  ["bg", 20]
console.log(arr[0])

// to append an array we use push()

arr.push("bits")

console.log(arr)

// to remove the last element we use pop()
// to remove the first element we use shift()

arr.pop()
arr.shift()
console.log(arr)

// to add an element at the start we use unshift()

arr.unshift("bg")
console.log(arr)

// function def 

function hi() {
    console.log("hey")
}

hi()

// if you do not use var then the variable automatically becomes global 