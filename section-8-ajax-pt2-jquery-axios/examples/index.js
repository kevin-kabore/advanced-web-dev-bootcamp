$("#btn").click(function(){
  $.ajax({
    method: 'GET',
    url: 'https://baconipsum.com/api/?type=meat-and-filler',
    dataType: 'json'
  })
  .done(addP)
  .fail(function(){
    alert('Fail')
  })
})

function addP(data) {
  $("#p").text(data[0])
}
