// forEach implementation
function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
// Example
function halfValues(arr) {
  var newArr = [];
  arr.forEach(function(val) {
    newArr.push(val / 2);
  });
  return newArr;
}
halfValues([2, 4, 6]); // 1, 2, 3

// PRACTICE PROBLEMS
/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,9,20]

*/
function doubleValues(arr) {
  var newArr = [];
  arr.forEach(function(val) {
    newArr.push(val * 2);
  });
  return newArr;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
  var newArr = [];
  arr.forEach(function(val) {
    if (val % 2 === 0) {
      newArr.push(val);
    }
  });
  return newArr;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {
  var newArr = [];
  arr.forEach(function(val) {
    newArr.push(val[0] + val[val.length - 1]);
  });
  return newArr;
}

/*
Write a function called addKeyAndValue which accepts an array, a key, and a value and returns a the array passed to the function with the new key and value added for each variable

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')

    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value) {
  arr.forEach(function(val) {
    val[key] = value;
  });
  return arr;
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
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var obj = {};
  str.forEach(function(letter) {
    if (vowels.includes(letter)) {
      if (obj.hasOwnProperty(letter)) {
        obj[letter] += 1;
      } else {
        obj[letter] = 1;
      }
    }
  });
  return obj;
}
