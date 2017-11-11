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
