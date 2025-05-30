

// Write a JavaScript function to calculate the sum of two numbers.  

function sumFunc(a, b) {
 return a + b;
}

console.log(sumFunc(2, 3));

// Write a JavaScript program to find the maximum number in an array. 


let arr = [78, 20, 40, 50, 89, 70, 60];
let max = arr[0]
for (let i = 0; i < arr.length; i++)
{
 if (arr[i] > max)
  max = arr[i];
}

console.log(max);
