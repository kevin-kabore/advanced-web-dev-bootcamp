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
