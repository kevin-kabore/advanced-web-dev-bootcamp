/*
Write a function called arrayFrom which converts an array-like-object into an array.

Examples:
    var divs = document.getElementsByTagName('divs');
    divs.reduce // undefined
    var converted = arrayFrom(divs);
    converted.reduce // function(){}....
*/

function arrayFrom(arrayLikeObject) {
  var array = [].slice.call(arrayLikeObject);
  return array;
}

/*
// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArguments(1,2,3,4) // 6
    sumEvenArguments(1,2,6) // 8
    sumEvenArguments(1,2) // 2
*/

function sumEvenArguments() {
  var argsArr = [].slice.call(arguments);
  return argsArr
    .filter(function(val) {
      return val % 2 === 0;
    })
    .reduce(function(acc, next) {
      return (acc += next);
    });
}

/*
Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"

Examples:

    function add(a,b){
        return a+b
    }

    var addOnlyThreeTimes = invokeMax(add,3);
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(2,2) // 4
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(1,2) // "Maxed Out!"

*/

function invokeMax(fn, num) {
  var max = 0;
  return function() {
    if (max >= num) {
      return 'Maxed Out!';
    }
    max++;
    return fn.apply(this, arguments);
  };
}

/*
Write a function called once which accepts two parameters, a function and a value for the keyword 'this'. Once should return a new function that can only be invoked once, with the value of the keyword this in the function set to be the second parameter.

Examples:

    function add(a,b){
        return a+b
    }

    var addOnce = once(add, this);
    addOnce(2,2) // 4
    addOnce(2,2) // undefined
    addOnce(2,2) // undefined

    function doMath(a,b,c){
        return this.firstName + " adds " + (a+b+c)
    }

    var instructor = {firstName: "Elie"}
    var doMathOnce = once(doMath, instructor);
    doMathOnce(1,2,3) // "Elie adds 6"
    doMathOnce(1,2,3) // undefined


*/

function once(fn, thisArg) {
  var hasBeenCalled = false;
  if (!hasBeenCalled) {
    hasBeenCalled = true;
    return fn.apply(thisArg, arguments);
  }
}

// BONUSES!

/*
Write a function called bind which accepts a function and a value for the keyword this.
Bind should return a new function that when invoked, will invoke the function passed
to bind with the correct value of the keyword this.
HINT - if you pass more than two parameters to bind, those parameters should be
included as parameters to the inner function when it is invoked.
You will have to make use of closure!

Examples:

    function firstNameFavoriteColor(favoriteColor){
        return this.firstName + "'s favorite color is " + favoriteColor
    }

    var person = {
        firstName: 'Elie'
    }

    var bindFn = bind(firstNameFavoriteColor, person);
    bindFn('green') // "Elie's favorite color is green"

    var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
    bindFn2('green') // "Elie's favorite color is blue"

    function addFourNumbers(a,b,c,d){
        return a+b+c+d;
    }

    bind(addFourNumbers,this,1)(2,3,4) // 10
    bind(addFourNumbers,this,1,2)(3,4) // 10
    bind(addFourNumbers,this,1,2,3)(4) // 10
    bind(addFourNumbers,this,1,2,3,4)() // 10
    bind(addFourNumbers,this)(1,2,3,4) // 10
    bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/

function bind(fn, thisArg) {
  var outerArgs = [].slice.call(arguments, 2);
  return function() {
    var innerArgs = [].slice.call(arguments);
    var allArgs = outerArgs.concat(innerArgs);
    return fn.apply(thisArg, allArgs);
  };
}

/*
Write a function called flip which accepts a function and a value for the keyword this.
Flip should return a new function that when invoked, will invoke the function passed
to flip with the correct value of the keyword this and all of the arguments
passed to the function REVERSED. HINT - if you pass more than two parameters to flip,
those parameters should be included as parameters to the inner function when it is invoked.
You will have to make use of closure!

Examples:

    function personSubtract(a,b,c){
        return this.firstName + " subtracts " + (a-b-c);
    }

    var person = {
        firstName: 'Elie'
    }

    var flipFn = flip(personSubtract, person);
    flipFn(3,2,1) // "Elie subtracts -4"

    var flipFn2 = flip(personSubtract, person, 5,6);
    flipFn(7,8). // "Elie subtracts -4"

    function subtractFourNumbers(a,b,c,d){
        return a-b-c-d;
    }

    flip(subtractFourNumbers,this,1)(2,3,4) // -2
    flip(subtractFourNumbers,this,1,2)(3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4) // -2
    flip(subtractFourNumbers,this,1,2,3,4)() // -2
    flip(subtractFourNumbers,this)(1,2,3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
    flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
    flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

*/

function flip(fn, thisArg) {
  var outerArgs = [].slice.call(arguments, 2);
  return function() {
    var innerArgs = [].slice.call(arguments);
    var allArgs = outerArgs.concat(innerArgs).slice(0, fn.length);
    return fn.apply(thisArg, allArgs.reverse());
  };
}
