var catImg = $('#catImg');
$('#getCatImgBtn').click(function() {
  $.getJSON('https://random.cat/meow')
    .done(function(data) {
      var src = data.file;
      catImg.attr('src', src);
    })
    .fail(function(err) {
      aler(err);
    });
});
