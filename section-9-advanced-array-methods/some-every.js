/////////////////////////
// some implementation
/////////////////////////
// 1. Iterates through an array
// 2. Runs a callback on each value in the array
// 3. If the callback returns true for at least one single value, return true
// 4. Otherwise return false

function some(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

// Example
var arr = [1, 2, 3];
arr.some(function(value, index, array) {
  return value < 2;
});
// returns true

function hasEvenNumbers(arr) {
  return arr.some(function(val) {
    return val % 2 === 0;
  });
}

function hasComma(str) {
  return str.split('').some(function(letter) {
    return letter === ',';
  });
}

/////////////////////////
// every implementation
/////////////////////////
// 1. Iterates through an array
// 2. Runs a callback on every values
// 3. If the callback returns false for any value, return false
// 4. Otherwise return true
function every(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) === false) {
      return false;
    }
  }
  return true;
}

// ex.
var arr1 = [-1, -2, -3];
arr.every(function(val, index, array) {
  return val < 0;
});
// returns true;

function allLowerCase(str) {
  return str.split('').every(function(val) {
    return val === val.toLowerCase();
  });
}

function allArrays(arr) {
  return arr.every(Array.isArray);
}

// PRACTICE

/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr) {
  return arr.some(function(val) {
    return val % 2 !== 0;
  });
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(arr) {
  arr = arr.toString().split('');
  return arr.some(function(val) {
    return parseInt(val) === 0;
  });
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false.

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr) {
  return arr.every(function(num) {
    return num % 2 !== 0;
  });
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr) {
  return arr.every(function(val) {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"},
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
        {title: "Instructor", first: 'Matt', last:"Lane"},
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]

    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key) {
  return arr.every(function(obj) {
    return key in val;
  });
}

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"},
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
        {title: "Instructor", first: 'Matt', last:"Lane"},
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]

    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false

*/

function hasCertainValue(arr, key, searchValue) {
  return arr.every(function(val) {
    return val[key] === searchValue;
  });
}
