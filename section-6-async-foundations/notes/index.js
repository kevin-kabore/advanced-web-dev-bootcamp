// Foreach function definition
function forEach(array, callback) {
  // to be implemented
}

// Callback signature
function callback(curElement, curIndex, array) {
  // implemented by the caller of forEach
}

// forEach example with all Callback parameters

var strings = ['my', 'callback', 'example'];

var result = '';
forEach(strings, function(str, index, array) {
  if (array.length - 1 !== index) {
    result += str + ' ';
  } else {
    result += str + '!!!';
  }
});
// resule = 'my callback example!!!'

// forEach function implementation
function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

// findIndex definition:
// Returns the index of the first element in the array for which
// the callback returns a truthy value.
// -1 is returned if the callback never returns a truthy value.

// findIndex function implementation
function findIndex(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr) === true) {
      return i;
    }
  }
  return -1;
}
