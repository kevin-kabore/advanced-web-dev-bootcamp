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
// map Example
// map returns a new arr of same length
// with val from cb function in new arr
var arr = [1, 2, 3];
arr.map(function(val, index, array) {
  return val * 2;
}); // [2,4,6]

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

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/

function doubleValues(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
  return arr.map(function(val, i) {
    return val * i;
  });
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
  return arr.map(function(val) {
    return val[key];
  });
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space.

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
  return arr.map(function(val) {
    return val.first + ' ' + val.last;
  });
}
