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

// jQuery
$('#jquery').click(function() {
  $.getJSON(url).done(function(data) {
    $('#quote').text(data);
  });
});

// Axios
var axiosBtn = document.querySelector('#axios');

axiosBtn.addEventListener('click', getQuote);

function getQuote() {
  axios.get(url).then(function(res) {
    quoteDisp.innerText = res.data;
  });
}
