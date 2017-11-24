// 1. Write a function called hasMostFollowers, which accepts a variable number of arguments. You should then make an AJAX call to the Github User API (https://developer.github.com/v3/users/#get-a-single-user) to get the name and number of followers of each argument. The function should return a string which displays the username who has the most followers.
//
// Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) return a promise.

hasMostFollowers('elie', 'tigarcia', 'colt').then(function(data) {
  console.log(data);
});
let hasMostFollowers = (...userNames) => {
  let baseUrl = 'https://api.github.com/users/';
  let urls = userNames.map(name => $.getJSON(baseUrl + name));
  return Promise.all(urls).then(function(data) {
    let max = data.sort((a, b) => a.followers < b.followers)[0];
    return `${max.name} has the most followers with ${max.followers}`;
  });
};

// "Colt has the most followers with 424"

// 2. Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) to search for a specific character by the number passed to the function. Your function should return a promise that when resolved will console.log the name of the character.

let starWarsString = id => {
  let url = `https://swapi.co/api/people/${id}`;
  return $.getJSON(url).then(data => {
    return `${data.name}`;
  });
};

starWarsString(1).then(function(data) {
  console.log(data);
});

// "Luke Skywalker"

// Bonus 1 -  Using the data from the previous AJAX call above, make another AJAX request to get the first film that character is featured in and return a promise that when resolved will console.log the name of the character and the film they are featured in

let starWarsString = id => {
  let str = '';
  let url = `https://swapi.co/api/people/${id}`;
  return $.getJSON(url).then(data => {
    str += `${data.name} is featured in `;
    return $.getJSON(data.films[0]).then(res => {
      // console.log(res);
      str += `${res.title}, directed by ${res.director}`;
      return $.getJSON(res.planets[0])
        .then(res => {
          return (str += ` and it takes place on ${res.name}`);
        })
        .then(finalStr => {
          return finalStr;
        });
    });
  });
};

starWarsString(1).then(function(data) {
  console.log(data);
});

// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner
