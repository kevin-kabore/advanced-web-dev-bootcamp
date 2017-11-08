var btn = document.querySelector('#btn');
var fullname = document.querySelector('#fullname');
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var city = document.querySelector('#city');
var avatar = document.querySelector('#avatar');

btn.addEventListener('click', function() {
  var url = 'https://randomuser.me/api/';
  fetch(url)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      // console.log(data.results[0])

      fullname.innerHTML = getFullName(data);
      username.innerHTML = getUserName(data);
      email.innerHTML = getEmail(data);
      city.innerHTML = getCity(data);
      avatar.src = getImage(data);
    });
});

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function getFullName(data) {
  var firstName = capitalizeFirst(data.results[0].name.first);
  var lastName = capitalizeFirst(data.results[0].name.last);
  var fullName = firstName + ' ' + lastName;
  return fullName;
}

function getUserName(data) {
  var userName = data.results[0].login.username;
  return userName;
}

function getEmail(data) {
  var email = data.results[0].email;
  return email;
}

function getCity(data) {
  var city = capitalizeFirst(data.results[0].location.city);
  return city;
}

function getImage(data) {
  var img = data.results[0].picture.medium;
  return img;
}