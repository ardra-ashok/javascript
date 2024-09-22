const Person = require('./js_basics3')

class Pet extends Person{
 get location() {
  return "Bluecross"
 }
 constructor(firstName,lastName) {
  super(firstName,lastName)
 }
}


let pet = new Pet("Leo", "Syh")

pet.fullName()
console.log(pet.location);
