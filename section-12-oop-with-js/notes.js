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

function Person(name) {
  this.name = name;
  this.sayHi = function() {
    return 'Hi ' + this.name;
  };
}

// refactor using prototype
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function() {
  return 'Hi ' + this.name;
};

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  isRunning: false;
}
Vehicle.prototype.turnOn = function() {
  this.isRunning = true;
};
Vehicle.prototype.turnOff = function() {
  this.isRunning = false;
};
Vehicle.prototype.honk = function() {
  if (this.isRunning) {
    return 'beep';
  }
};

// Inheritance
// The passing od methods and properties from one class to another
// In js you pass the prototype of one constructor to another

// Two parts of Inheritance
// 1. Set the prototype to be an object created with another prototype
// 2. Reset the constructor property

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.sayHi = function() {
  return 'Hello ' + this.firstName + ' ' + this.lastName;
};
function Student(firstName, lastName) {
  return Person.apply(this, arguments);
}

//WRONG
Student.prototype = Person.prototype;
var kevin = new Student('Kevin', 'Kabore'); // creates a reference/link so changing student changes person
kevin.sayHi(); // "Hello Kevin Kabore"

Student.prototype.status = function() {
  return 'I am currently a student!';
};
var kirsten = new Person('Kirsten', 'Peterson');
kirsten.status(); // "I am currently a student!"

// fix with Object.create()
function Student(firstName, lastName) {
  return Person.apply(this, arguments);
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.status = function() {
  return 'I am currently a student';
};
var elie = new Person('Elie', 'Schoppik');
elie.status(); // return undefined
// must reset the prototype
Student.prototype.constructor; //Person
Student.prototype.constructor = Student;
