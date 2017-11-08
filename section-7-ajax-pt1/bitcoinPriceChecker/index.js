var span = document.querySelector('span');
var btn = document.querySelector('button');

btn.addEventListener('click', function() {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var currency = document.querySelector('input[name=currency]:checked')
        .value;
      if (!currency) {
        currency = 'USD';
      }
      var res = JSON.parse(XHR.responseText);
      var price = res.bpi[currency].rate;
      span.innerHTML = price + ' ' + currency;
    }
  };
  var url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  XHR.open('GET', url);
  XHR.send();
});
