// filter
// 1. creates new array
// 2. iterates through an array
// 3. Runs a callback function on each value in the array
// 4. If the callback function returns true, that value will be added to the array
// 5. If the callback function returns false, that value will be ignored from the array

// ex:
var arr = [1, 2, 3]
arr.filter(functtion(value, index, array) {
  // no need for an if statement
  // just return an expression
  // that evaluates to true or false
  return value > 2;
})
// returns [3]

// return array where names have length > 3
var instructors = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, name: 'Colt']

instructors.filtr(function(value, index, array){
  return value.name.length > 3;
})
// return [{name:'Elie'}, {name:'Matt'}, {name:'Colt'}]

////////////////////////////
// filter implementation
////////////////////////////
// 1. creates new array
// 2. iterates through an array
// 3. Runs a callback function on each value in the array
// 4. If the callback function returns true, that value will be added to the array
// 5. If the callback function returns false, that value will be ignored from the array
function filter(arr, callback){
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
     if (callback(arr[i], i, array) === true) {
       newArr.push(arr[i])
     }
  }
  return newArr;
}

// filter array to return only four letter names
function onlyFourLetterWords(arr){
  return arr.filter(function(value){
    return value.length === 4;
  })
}

function divisibleByThree(arr){
  return arr.filter(function(val){
    return val % 3 === 0;
  })
}
