// My solution
function countDown(secs) {
  var countDownId = setInterval(function(secs) {
    if (secs === 0) {
      console.log('Ring Ring Ring!!!');
      clearInterval(countDownId);
    } else {
      console.log('Timer: ' + secs);
      secs--;
    }
  }, 1000);
}

// Correct solution
function countDown(seconds) {
  var intervalId = setInterval(function() {
    seconds--;
    if (seconds > 0) {
      console.log('Timer: ' + seconds);
    } else {
      console.log('Ring Ring Ring!!!');
      clearInterval(intervalId);
    }
  }, 1000);
}
