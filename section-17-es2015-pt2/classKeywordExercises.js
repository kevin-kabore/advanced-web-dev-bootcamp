// 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.
class Person {
  constructor(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
  }
  multiplyFavoriteNumber(num) {
    // instance method not class Method
    return num * this.favoriteNumber;
  }
}

/* 2 - Add an instance method called multiplyFavoriteNumber that accepts one parameter and returns the product of the parameter multiplied with the favoriteNumber property on a person object.

Examples:
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.multiplyFavoriteNumber(10) // 340

*/
