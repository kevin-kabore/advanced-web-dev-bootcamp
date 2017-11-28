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
  input.property('value', ''); // set value to empty string
});
// remove all elements on page with selector.remove()
d3.selectAll('p').remove();
