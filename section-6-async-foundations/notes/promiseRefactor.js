// Nested callback to be refactored:
var counter = 0;
setTimeout(function() {
  counter++;
  console.log('Counter: ', counter);
  setTimeout(function() {
    counter++;
    console.log('Counter: ', counter);
    setTimeout(function() {
      couter++;
      console.log('Counter: ', counter);
    }, 3000);
  }, 2000);
}, 1000);

// How to refactor:
// - Step1: create a function for incrementing
var counter = 0;
function incCounter() {
  counter++;
  console.log('Counter: ', counter);
}
// - Step2 crate a runLater function
// Takes callback and timeInMs and assigns setTimeout to promise
function runLater(callback, timeInMs) {
  var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      var res = callback();
      resolve(res);
    }, timeInMs);
  });
  return p;
}
// - Step3 Chain Promises
runLater(incCounter, 1000)
  .then(function() {
    return runLater(incCounter, 2000);
  })
  .then(function() {
    return runLater(incCounter, 3000);
  })
  .then(function() {
    // final .then not necessary
    console.log('Finished running.');
  });
