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

/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
  return arr.reduce(function(accumulator, nextValue) {
    accumulator.push(nextValue[key]);
    return accumulator;
  }, []);
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
  str = str.toLowerCase().split('');
  var vowels = 'aeiou';
  return str.reduce(function(accumulator, nextValue) {
    if (vowels.indexOf(nextValue) !== -1) {
      //if is a vowel
      if (accumulator[nextValue]) {
        // already exists in obj
        accumulator[nextValue]++;
      } else {
        accumulator[nextValue] = 1;
      }
    }
    return accumulator;
  }, {});
  //   return result
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

    addKeyAndValue(arr, 'title', 'Instructor') //
      [
        {title: 'Instructor', name: 'Elie'},
        {title: 'Instructor', name: 'Tim'},
        {title: 'Instructor', name: 'Matt'},
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
  return arr.reduce(function(accumulator, nextValue, i) {
    accumulator[i][key] = value;
    return accumulator;
  }, arr);
}

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray.

Examples:

    function isEven(val){
        return val % 2 === 0;
    }

    var arr = [1,2,3,4,5,6,7,8];

    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];

    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }

    var names = ['Elie', 'Colt', 'Tim', 'Matt'];

    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
  return arr.reduce(
    function(acc, next) {
      if (callback(next)) {
        acc[0].push(next);
      } else {
        acc[1].push(next);
      }
      return acc;
    },
    [[], []]
  );
}
