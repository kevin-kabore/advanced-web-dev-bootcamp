/* 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter

    function tripleAndFilter(arr){
      return arr.map(function(value){
        return value * 3;
      }).filter(function(value){
        return value % 5 === 0;
      })
    }

*/

function tripleAndFilter(arr){
    return arr.map(val => val * 3).filter(val => val % 5 === 0);
}

let tripleAndFiler = arr => arr.map(val => val * 3).filter(val => val % 5 === 0);

/* 2 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers

    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }

*/
function doubleOddNumbers(arr){
    return arr.filter(val => val % 2 !== 0).map(val => val * 2);
}

let doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2);
/* 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce.

    function mapFilterAndReduce(arr){
      return arr.map(function(val){
        return val.firstName
      }).filter(function(val){
        return val.length < 5;
      }).reduce(function(acc,next){
        acc[next] = next.length
        return acc;
      }, {})
    }
*/

function mapFilterAndReduce(arr){
    return arr.map(val => val.firstName).filter(val => val.length < 5).reduce((acc, next) => {
        acc[next] = next.length;
        return acc;
    }, {});
}

let mapFilterAndReduce = arr => arr.map(val => val.firstName).filter(val => val.length < 5).reduce((acc, next) => {
    acc[next] = next.length;
    return acc;
}, {});

/* 4 - Write a function called createStudentObj which accepts two parameters, firstName and lastName and returns an object with the keys of firstName and lastName with the values as the parameters passed to the function.

Example:
    createStudentObj('Elie', 'Schoppik') // {firstName: 'Elie', lastName: 'Schoppik'}
*/

function createStudentObj(first, last){
    return {firstName: first, lastName: last};
}

let createStudentObj = (first, last) => ({firstName: first, lastName: last};)

/* 5 - Given the following code:


Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Colt'

    var instructor = {
      firstName: "Colt",
      sayHi: function(){
        setTimeout(function(){
          console.log('Hello ' + this.firstName)
        },1000)
      }
    }

*/

var instructor = {
    firstName: 'Colt',
    sayHi: function(){
        setTimeout(() => {
            console.log(`Hello ${this.firstName}`);
        }, 1000);
    }
};
