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


$("#getBtn").click(function(){
  $.get('https://api.github.com/users/colt')
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    console.log("ERROR!");
  })
});

$("#postBtn").click(function(){
 var data = {name: "Charlie", city: "Florence"};
 $.post("www.catsarecoolandsoaredogs.com", data)
  .done(function(data){
   console.log("HI!");
 })
  .fail(function(){
   console.log("ERROR!");
 })
});

$("#getJSONBtn").click(function(){
  $.getJSON("https://api.github.com/users/colt")
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    console.log("PROBLEM!");
  })
});
