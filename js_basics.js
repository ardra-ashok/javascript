console.log('hello')

let a = 4
console.log(typeof a)
let b = 234.45
console.log(typeof b)

let flag = true
console.log(typeof flag)

var c = 'test'
console.log(typeof 'Hello')

var c = a + b
console.log(c)

console.log(!flag)
const test = 'test_Param'
//  null and undefined

// flag = false

// if loop

if (flag) console.log(`I am ${flag}`)
else console.log(`I am ${flag}`)

let i = 0
while (i < 5) {
  console.log(i)
  i++
}
do {
 console.log(i)
 i++
} while (i < 5);

for (let i = 0; i <= 6; i++)
 console.log(i);
 
const person = {
 first_name: "John",
 last_name: "Doe",
 age: 25
}
// for in
for (let x in person) 
 console.log(`the persons ${x} is ${person[x]}`);

// for of 
let names = ["test_1","test_2","test_3"]
for (let x of names)
 console.log(x);

// for each
 let sum = 0
 const numbers = [23, 44, 12, 4]
 numbers.forEach(myFunction)

 function myFunction(item) {
   sum += item
 }
 console.log(sum);
 
// logical Operators - AND && , OR || , NOT !
// Comparison Operators - > , < , >= , <= , === , and !==

// Arrays 
let marks = Array(6)
marks = new Array(45,56,67,87,34,22)

marks = [20, 40, 35, 56, 78]

console.log(marks[3]);
console.log(marks.length);
marks.push(2)
console.log(marks);
marks.pop()
console.log(marks);
marks.unshift(35)
console.log(marks);

console.log(marks.indexOf(45));
console.log(marks.indexOf(40));
console.log(marks.includes(56));
console.log(marks.slice(2,5));
console.log(marks);

// reduce 

marks.reduce((sum, mark) => sum + mark,0)

console.log(sum);
