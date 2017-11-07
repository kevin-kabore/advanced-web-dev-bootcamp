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

//////////////////////////////
//////////////////////////////
// The Stack and the Heap
//////////////////////////////
//////////////////////////////

// What is the Stack?
// - An ordered data structure
// - Keeps track of funtion invocations
// - Part of the javascript runtime (you don't access it directly)

// Stack definition
// - An ordered set of stack frames
// - Most recently invoked function is on the top of the stack
// - The bottom of the stack is the first function invoked
// - The bottom of the stack is the first function invoked
// - The stack is processed from top to bottom

// How your code changes the Stack
// - WHenever you invoke a function, the details of the invocation are saved
// to the top of  the Stack (pushed to the top)
// - Whenever a function returns, the information about the invocation is
// taken off the top of the stack (popped off the stack)

// Stack frame contents
// - The function that was invoked
// - the parameters that were passed to the function
// - CUrrent line number (VERY IMPORTANT)

// What is a Heap?
// - An area in memory where your data is stored
// - Example:
// The object is created in the heap.
// obj is a recference to the object.
var obj = { firstname: 'Kevin', lastName: 'Kabore' }; // Creates memory in heap
// New data is not created, only a copy of the reference
var referenceCopy = obj; // just a copy

//////////////////////////////
//////////////////////////////
// The Queue
//////////////////////////////
//////////////////////////////

// What is the Queue?
// - An ordered list of functions waiting to be placed on the stack
// - functions in the queue are processed on a first in, first out basis FIFO

// What is the event loop?
// - Functionality in the javascript runtime that checks the queue when the stack is emptu
// - If the stack is empty, the front of the queue is placed in the stack

//////////////////////////////
//////////////////////////////
// Promises
//////////////////////////////
//////////////////////////////

// What is a promise?
// - A promise is an object that represents a task that will be completed in the future
// example
var p1 = new Promise(function(resolve, reject) {
  resolve([1, 2, 3, 4]);
});

p1
  .then(function(data) {
    console.log('Promise p1 resolved with data: ', data);
  })
  .catch(function(data) {
    console.log('Promise p1 was rejected with data: ', data);
  });

var p2 = new Promise(function(resolve, reject) {
  var num = Math.random();
  if (num < 0.5) {
    resolve(num);
  } else {
    reject(num);
  }
});

p2
  .then(function(result) {
    console.log('Success: ', reuslt);
  })
  .catch(function(error) {
    console.log('Error: ', error);
  });

// promise with setTimeout
var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    var randomInt = Mathh.floor(Math.random() * 10);
    resolve(randomInt);
  }, 4000);
});

promise.then(function(data) {
  console.log('Random int passed to resole: ', data);
});
