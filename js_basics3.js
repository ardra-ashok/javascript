module.exports = class Person{
 age = 25

 get location() {
  return "canada"
 }

 constructor(firstName,lastName) {
  this.firstName = firstName
  this.lastName = lastName
 }
 fullName() {
  console.log(this.firstName+this.lastName);
 }
}

// let person = new Person("Tiara","Taya")
// console.log(person.age);
// console.log(person.location);
// person.fullName();


