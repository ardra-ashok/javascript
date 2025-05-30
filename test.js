var a = 4;
console.log(a);

let str = "hello"
console.log(str);

let flag = true
console.log(flag);

console.log(a + 7);

if (flag)
 console.log("true");
else
 console.log("false");
 
let marks = Array(29, 45, 65, 76, 78);

let mark = Array(6)

console.log(marks[0]);
console.log(marks.length);
console.log("*********************");


console.log(marks.push(65));

console.log(marks);
marks.pop()
console.log(marks);

marks.unshift(45);
console.log(marks);

console.log(marks.indexOf(65));

console.log(marks.indexOf(0));
console.log(mark.includes(65));

console.log("***************");

console.log(marks.slice(2,4));


console.log(marks);

let total = marks.reduce((sum ,m)=>sum + m, 0);

console.log(total); 
let sum = 0;

for (let i = 0; i < marks.length; i++)
 sum = sum + marks[i]
 
console.log(sum);

let tottal = marks.reduce((sum,t)=>sum+t)

console.log(tottal);

let scores = [];

for (let i = 0; i < marks.length; i++)
{
 if (marks[i] % 2 == 0)
  scores.push(marks[i])
}

console.log(scores);

let filterArray = marks.filter(mark=>mark%2==0)


console.log(filterArray);
console.log("********");


let mappedArray = filterArray.map(map => map * 3)
console.log(mappedArray);

total = mappedArray.reduce((mappedArray,s)=>mappedArray+s,0)
console.log(total);

