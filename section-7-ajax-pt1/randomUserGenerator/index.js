var btn = document.querySelector('#btn');
var fullnameDisp = document.querySelector('#fullname');
var usernameDisp = document.querySelector('#username');
var emailDisp = document.querySelector('#email');
var cityDisp = document.querySelector('#city');
var avatarDisp = document.querySelector('#avatar');

btn.addEventListener('click', function() {
  var url = 'https://randomuser.me/api/';
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError);
});

// FETCH functions
function handleErrors(req) {
  if (!req.ok) {
    throw Error(req.status);
  }
  return req;
}

function parseJSON(res) {
  return res.json().then(function(data) {
    return data.results[0];
  });
}

function updateProfile(data) {
  fullnameDisp.innerHTML = getFullName(data);
  usernameDisp.innerHTML = getUserName(data);
  emailDisp.innerHTML = getEmail(data);
  cityDisp.innerHTML = getCity(data);
  avatarDisp.src = getImage(data);
}

function printError(err) {
  console.log('ERROR: ' + err);
}

// JSON api res parsing functions
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getFullName(data) {
  var firstName = capitalizeFirst(data.name.first);
  var lastName = capitalizeFirst(data.name.last);
  var fullName = firstName + ' ' + lastName;
  return fullName;
}

function getUserName(data) {
  var userName = data.login.username;
  return userName;
}

function getEmail(data) {
  var email = data.email;
  return email;
}

function getCity(data) {
  var city = capitalizeFirst(data.location.city);
  return city;
}

function getImage(data) {
  var img = data.picture.medium;
  return img;
}
