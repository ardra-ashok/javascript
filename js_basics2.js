
fetch('./students.json')
  .then((response) => response.json())
  .then((data) => {
    studentData(data) // Call the studentData function with the JSON data
  })
  .catch((error) => console.error('Error loading JSON:', error))

function display(a, b) {
  document.write(a + b, '<br>')
}
display(2, 5)

function displayString(c) {
  document.write(c, '<br>')
}
displayString('welcome')

function largestNumber(a, b) {
  let result = a > b ? a : b
  document.write('The largest is ', result,'<br>')
}

largestNumber(5, 6)

function oddOrEven(a)
{
 result = (a % 2 == 0) ? "even" : "odd"
 document.write("The number is ",result,'<br>')
}
oddOrEven(5)
oddOrEven(8)


function studentData(data) {
 data.forEach((d) => {
   for (let key in d) {
     document.write(`${key}: ${d[key]}`,"<br>")
   }
 })
}
studentData(data)
