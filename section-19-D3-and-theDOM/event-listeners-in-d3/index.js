// add event Listener
d3.select('h1').on('click', function() {
  console.log('event Listeners are sweet!');
});
// remove event Listener
d3.select('h1').on('click', null);

// For submit event listener, first remove default behavior
// cannot do e.preventDefault but can do d3.event
// append p tag with selection.append(tagName)
// d3.select('#new-note').on('submit', function() {
//   d3.event.preventDefault();
//
//   // select input to access value inside
//   var input = d3.select('input');
//   // append p tag to list of notes
//   d3.select('#notes')
//     .append('p')
//      .classed('note', true) // add class of note to p tag
//      .text(input.property('value')); // grab value from input field
//   input.property('value', ''); // set value to empty string
// });

d3.select('#new-note').on('submit', function() {
  d3.event.preventDefault();

  // select input to access value inside
  var input = d3.select('input');
  // append p tag to list of notes
  d3
    .select('#notes')
    .append('p')
    .classed('note', true) // add class of note to p tag
    .text(input.property('value')); // grab value from input field
  // input.property('value', ''); // set value to empty string
  setPreview('')
});
// remove all elements on page with selector.remove()
// d3.selectAll('p').remove();

d3.select('#remove-all')
    .style('background-color', 'red')
    .on('mouseover', function() {
      d3.select(this).style('background-color', '#991b1b').style('cursor', 'pointer')
    })
    .on('mouseout', function(){
      d3.select(this).style('background', 'red')
    })
    .on('click', function() {
      d3.event.preventDefault()
      d3.selectAll('.note').remove()
    })

d3.select('#feeling-lucky')
  .style('background-color', '#5ee04a').style('cursor', 'pointer')
  .on('mouseover', function() {
    d3.select(this).style('background-color', '#275e1f')
  })
  .on('mouseout', function(){
    d3.select(this).style('background-color', '#5ee04a')
  })
  .on('click', function(){
    d3.event.preventDefault()
    d3.selectAll('.note').style('font-size', function(){
      return Math.random() * 100 + 'px'
    })
  })

var preview = d3.select('.preview');

d3.select('input').on('input', function(){
  var note = d3.event.target.value;
  setPreview(note)
})


 function setPreview(val){
   preview.text(val)
      .classed('hide', val === '')
 }
