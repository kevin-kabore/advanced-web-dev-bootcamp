var span = document.querySelector('span');
var btn = document.querySelector('button');

btn.addEventListener('click', function() {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var currency = document.querySelector('input[name=currency]:checked')
        .value;
      console.log(currency);
      if (!currency) {
        currency = 'USD';
      }
      var res = JSON.parse(XHR.responseText);
      var price = res.bpi[currency].rate;
      console.log(price);
      span.innerHTML = price + ' ' + currency;
    }
  };
  XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
  XHR.send();
});
