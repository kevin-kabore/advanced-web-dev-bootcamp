var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var quoteDisp = document.querySelector('#quote');

// XHR
var xhrBtn = document.querySelector('#xhr');

xhrBtn.addEventListener('click', function() {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var res = JSON.parse(XHR.responseText);
      quoteDisp.innerText = res;
    }
  };
  var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
  XHR.open('GET', url);
  XHR.send();
});

// FETCH

var fetchBtn = document.querySelector('#fetch');

fetchBtn.addEventListener('click', function() {
  fetch(url)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      quoteDisp.innerText = data;
    });
});
