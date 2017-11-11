/////////////////////////
// reduce implementation
/////////////////////////
// 1. Accepts a callback function and optional second paramater
// 2. Iterates through an array
// 3. Runs a callback on each value in the array
// 4. The first paramater to the callback is either the first value in the array or
//     the optional second parameter
// 5. The first parameter to the callback is often called the 'accumulator'
// 6. The returned value from the callback becomes the new value of the accumulator
// IMPORTANT: Whatever is returned from the callback function becomes the new value of the accumulator

[1, 2, 3].reduce(function(accumulator, nextValue, index, array) {
  // callbcak function
}, optionalSecondParam);

var arr = [1, 2, 3, 4, 5];
arr.reduce(function(accumulator, nextValue) {
  return accumulator + nextValue;
});
// accumulator:  1 3 6  10
// nextValue:    2 3 4  5
// returnedVal:  3 6 10 15
// Returns 15

// WIth second optional param
var arr = [1, 2, 3, 4, 5];
arr.reduce(function(accumulator, nextValue) {
  return accumulator + nextValue;
}, 10);
// accumulator:  10 11 13  16 20
// nextValue:    1  2  3   4  5
// returnedVal:  11 13 16  20 25
// Returns 25

//Reduce with strings
var names = ['Tim', 'Matt', 'Colt', 'Elie'];
names.reduce(function(accumulator, nextValue) {
  return (accumulator += ' ' + nextValue);
}, 'The instructors are');
// returns 'The instructors are Tim Matt Colt Elie'

// reduce to return obj
var arr = [5, 4, 1, 4, 5];
arr.reduce(function(accumulator, nextValue) {
  if (nextValue in accumulator) {
    accumulator[nextValue]++;
  } else {
    accumulator[nextValue] = 1;
  }
}, {});
// returns {5: 2, 4: 2, 1: 1}

function sumOddNumbers(arr) {
  arr.reduce(function(accumulator, nextValue) {
    if (nextValue % 2 !== 0) {
      return (accumulator += nextValue);
    }
    return accumulator;
  }, 0);
}

function createFullName(arr) {
  arr.reduce(function(accumulator, nextValue) {
    accumulator.push(nextValue.first + ' ' + nextValue.last);
  }, []);
}
