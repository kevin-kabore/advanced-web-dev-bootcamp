// - create a constructor function for a Dog
// - Each dog should have a name and age
// - Add a function for each dog called bark which console.log's the name of the dog added to the
// string 'just barked!'

var milo = new Dog('Milo', 3);
milo.bark(); // returns Milo just barked!

// new keyword
// 1. creates an empty object
// 2. sets the value of the keyword this in the function to be the object that was just created
// 3. adds an implicit return this at the end of the function so that the object can be returned from the fn
// 4. adds __proto__ property

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.numberOfWheels = 4;
}
// refactoring Motorcycle to use Car with call function
function Motorcycle(make, model, year) {
  Car.call(this, make, model, year);
  this.numberOfWheels = 2;
}
// refactoring Motorcycle to use Car with apply function
function Motorcycle1(make, model, year) {
  Car.apply(this, [make, model, year]);
  this.numberOfWheels = 2;
}

function Motorcycle1(make, model, year) {
  Car.apply(this, arguments);
  this.numberOfWheels = 2;
}
