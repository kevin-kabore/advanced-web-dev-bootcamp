// 4 rules for determining the value of the keyword thisArg
// 1. global context
// 2. Object binding
// 3. Explicit binding
// 4. new keyword

// 3. Explicit binding; explicitly binding the key word this
// Call; parameters: thisArg, a, b, c, ...; immediately invoked
// Apply; parameters: thisArg, [a, b, c, ...]; immediately invoked
// Bind; parameters: thisArg, a, b, c, ...; not immediately invoked

//  Call
var person = {
  firstName: 'Colt',
  sayHi: function() {
    return 'Hi ' + this.firstName;
  },
  determineContext: function() {
    return this === person;
  },
  dog: {
    sayHello: function() {
      return 'Hello ' + this.firstName;
    },
    determineContext: function() {
      return this === person;
    }
  }
};
person.dog.sayHello(); // returns "Hello undefined";
person.dog.sayHello.call(person); // returns "Hello  Colt"
person.dog.determineContext.call(person); // returns true

// Common use case is to avoid duplication

var colt = {
  firstName: 'Colt',
  sayHi: function() {
    return 'Hi ' + this.firstName;
  }
};
var elie = {
  firstName: 'Elie',
  sayHi: function() {
    return 'Hi ' + this.firstName;
  }
};
// refactor to
function sayHi() {
  return 'Hi ' + this.firstName;
}
var colt = {
  firstName: 'Colt'
};
var elie = {
  firstName: 'Elie'
};
sayHi.call(elie);

// Converting Array like object into array using call
var divs = document.getElementsByTagName('div');
divs.filter(); // returns undefined

var divsArr = [].slice.call(divs);
divsArr.filter(function(val) {
  return val.innerText === 'Hello';
});

// Apply
function addNumbers(a, b, c, d) {
  return this.firstName + ' just calculated ' + (a + b + c + d);
}
var colt = {
  firstName: 'Colt'
};
var elie = {
  firstName: 'Elie'
};
addNumbers.call(colt, 1, 2, 3, 4); // returns "Colt cjust calculated 10"
addNumbers.apply(colt, [1, 2, 3, 4]); // returns "Colt cjust calculated 10"

// apply useful when function does not accept arr as parameters, can spread args using apply
var nums = [5, 7, 1, 4, 2];
Math.max(nums); // NaN
Math.max.apply(this, nums); //returns 7

function sumValues(a, b, c) {
  return a + b + c;
}
var values = [4, 1, 2];
sumValues(values); // "4,1,2undefined"
sumValues.apply(this, values); // 7

// Bind
// returns a new function with the first paramaters equal to values passed into bind
function addNumbers(a, b, c, d) {
  return this.firstName + ' just calculated ' + (a + b + c + d);
}
var colt = {
  firstName: 'Colt'
};
var coltCalc = addNumbers.bind(colt, 1, 2, 3, 4); // returns a function
coltCal(); // returns Colt just calculated 10

// also used for partial application of arguments
var coltCalc = addNumbers.bind(colt, 1, 2); // returns a function
coltCalc(3, 4); // returns Colt just calculated 10

// bind with async code
var colt = {
  firstName: 'Colt',
  sayHi: function() {
    setTimeOut(
      function() {
        console.log('Hi ' + this.firstName);
      }.bind(this),
      1000
    );
  }
};
colt.sayHi(); // returns 'Hi window' without bind because setTimeout is async so this is attached to the window
