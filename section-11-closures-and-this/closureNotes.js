// Define Closure
// - A Closure is a function that makes use of variables defined in outer functions that
// have previously returned
function outer() {
  var start = 'Closures are';
  return function inner() {
    return start + ' ' + 'awesome';
  };
}

// A closure exists when an inner function makes use of varaibles defined in an outer function
// that has returned

function outer(a) {
  return function inner(b) {
    return a + b;
  };
}
// outer(1)(2) returns 3
var storeOuter = outer(5);
storeOuter(10); // returns 15

function outerFn() {
  var data = 'Something from outerFn';
  var fact = 'remember me';
  return function innerFn() {
    debugger;
    return fact;
  };
}

// outerFn() will pause at debugger where we see we have access to fact but not to data

function counter() {
  var count = 0;
  return function inner() {
    count++;
    return count;
  };
}

var counter1 = counter();
// counter1 equals
function inner() {
  count++;
  return count;
}
counter1(); //returns 1;
counter1(); //returns 2;
var counter2 = counter();
counter2(); // returns 1 since count variable was not modified

function classRoom() {
  var instructors = ['Elie', 'Colt'];
  return {
    getInstructors: function() {
      return instructors;
    },
    addInstructor: function(name) {
      instructors.push(name);
      return instructors;
    }
  };
}

var first = classRoom();
first.getInstructors(); // returns ['Elie', 'Colt']
first.addInstructor('Matt'); // returns ['Elie', 'Colt', 'Matt']
first.addInstructor('Tim'); // returns ['Elie', 'Colt', 'Matt', 'Tim']

var course2 = classRoom();
course2.addInstructor('New'); // returns ['Elie', 'Colt', 'New'] will not modify original instructors arr on first
first.getInstructors(); // returns ['Elie', 'Colt', 'Matt', 'Tim']

// However using pop can change the original array
first.getInstructors().pop(); // returns 'Tim'
first.getInstructors(); // will return ['Elie', 'Colt', 'Matt']

// to create true immutability, return a copy of the array with .slice() in original closure
function immutableClassroom() {
  var instructors = ['Elie', 'Colt'];
  return {
    getInstructors: function() {
      return instructors.slice();
    },
    addInstructor: function(name) {
      instructors.push(name);
      return instructors.slice();
    }
  };
}
var course3 = immutableClassroom();
course3.getInstructors().pop(); // ['Colt']
course3.getInstructors().pop(); // 'Colt'
course3.getInstructors(); // ['Colt', 'Elie']
