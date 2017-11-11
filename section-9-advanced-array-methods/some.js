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
