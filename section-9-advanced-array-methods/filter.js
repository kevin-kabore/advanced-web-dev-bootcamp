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


/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key){
    return arr.filter(function(val){
        return val[key] !== undefined;
    });
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue){
    return arr.filter(function(val){
        return val === searchValue;
    })[0]
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue){
    return arr.filter(function(obj){
        return obj[key] === searchValue;
    })[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str){
    var vowels = 'aeiou'.split('');
    var strArr = str.toLowerCase().split('');
    var resArr = strArr.filter(function(letter){
        return !vowels.includes(letter);
    });
    return resArr.join('');
}

// using indexOf on string
function removeVowels1(str){
  var vowels = 'aeiou'
  return str.toLowerCase().split('').filter(function(letter){
    return vowels.indexOf(val) === -1
  }).join('')
}


/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr){
    return arr.filter(function(num){
        return num % 2 !== 0;
    }).map(function(num){
        return num * 2;
    });
}
