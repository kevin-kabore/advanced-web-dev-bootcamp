var btn = document.querySelector('#btn');
var img = document.querySelector('#photo');

btn.addEventListener('click', function() {
  // alert('CLICKED!');
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).message;
      img.src = url;
    }
  };
  XHR.open('GET', 'https://dog.ceo/api/breeds/image/random');
  XHR.send();
});
