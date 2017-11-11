// map Example
// map returns a new arr of same length
// with val from cb function in new arr
var arr = [1, 2, 3];
arr.map(function(val, index, array) {
  return val * 2;
}); // [2,4,6]

/////////////////////////
// map implementation
/////////////////////////
// takes array and callback function as arguments
// 1. creates new array
// 2. iterates through an array
// 3. Runs a callback function for each value in the array
// 4. Pushes result of the callback function to the new array
// 5. Returns the new array

function map(array, callback) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(callback(array[i], i, array));
  }
  return newArr;
}

// map in a function
function trpleValues(arr) {
  return arr.map(function(value) {
    return value * 3;
  });
}
// tripleValues([1, 2, 3]) = [3, 6, 9]

function onlyFirstNames(arr) {
  return arr.map(function(val) {
    return val.first;
  });
}
// onlyFirstNames([{first: 'Kevin', last: 'Kabore'}, {first: 'Kirsten', last: 'Peterson'}])
// returns ['Kevin', 'Kirsten']
