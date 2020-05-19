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
// in 3 == '3' it return true as str is converted to num 

// JS objects
// somewhat like a python dictionary in property:value format

var Dog = {
    "name": "ubuntu",
    "legs": 4,
    "tails": 1,
    "friends": ["everything"]
}

// Using . notation to access the properties

nameDog = Dog.name
console.log(nameDog)

// alternatively we use [] notation if the propertly name has a space
// in it for eg

var school = {
    "school name": "DPS",
    "college name": "BITS"
}
    
console.log(school["college name"])

// You can assign a variable name to property name and use it 
// eg 
var schname = "school name"
school[schname]

// you can change the property by using . notation
// also we can add a property by . notation

delete Dog.tails // deletes the property

// to check if object has a property we use .hasOwnProperty

console.log(Dog.hasOwnProperty(name))

// you can have an array of objects as well
// as well as nested objects

// the math lib has useful nuf functions

// to convert string to integer 
parseInt("56")  // returns NaN if not able to convert

// let helps you to not redeclare a same variable

// object.freeze() totally blocks any method to mutate a variable
