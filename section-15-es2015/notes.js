 // Rest operator to collect arguments in a function in array
 function sumArguments(){
   var total = 0
   for (var i = 0; i < aruments.length; i++) {
     total += aruments[i]
   }
   return total;
 }
 // same as
 function sumArguments1(){
   var argsArr = [].slice.call(arguments);
   return argsArr.reduce(function(acc, next) {
     return acc + next;
   })
 }
// same as
var sumArguments2 = (...args) => args.reduce((acc, next) => acc + next);

// Spread operator: used on arrays to spread each value
// ES5
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];
var combined = arr1.concat(arr2).concat(arr3);
// ES2015
var combined1 = [...arr1, ...arr2, arr3]

//ES5
var arr = [3,2,4,1,5]
Math.max(arr) //NaN
Math.max.apply(this, arr) // 5
Math.max(...arr) // 5

function sumVals(a,b,c){
  return a+b+c;
}
var nums = [12, 15, 20];

//ES5
sumVals.apply(this, nums)
//ES2015
sumVals(...nums)
