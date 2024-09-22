const Person1 = require('./js_basics3')

let person = {
 firstName: 'Tim',
 lastName: 'Jack',
 fullName: function () {
  console.log(this.firstName + this.lastName)
 }
}

console.log(person.lastName);
console.log(person['lastName']);
person.firstName = "Helen"
console.log(person.firstName);

person.gender = 'male'
console.log(person.gender);

delete person.gender

console.log(person);

console.log('gender' in person);

for (let key in person)
 console.log(`${key} is ${person[key]}`);


person.fullName();

let person1 = new Person1('Tim', 'Peter')
person1.fullName()
