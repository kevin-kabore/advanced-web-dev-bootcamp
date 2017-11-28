// Accessing Nodes
console.log(d3.selectAll('li').nodes());
console.log(d3.selectAll('li').node());

// usually do this to select nodes and chain
d3.select('#page-title').style('background-color', '#00feab');

// Using .select to select and then set props/values
d3
  .select('#page-title')
  .style('background-color', '#000') //set style
  .style('color', '#fff')
  .attr('class', 'new-class') // set any attributes
  .text('D3 is cool!'); // set innerText or use selection.html() for innerHTML

// can get by not passing in any arguments
console.log(d3.select('#page-title').text());
console.log(d3.select('#page-title').style('color'));

// class method to set classes without using attr method
// takes comma separated list of new classNames and bool value for added or removed
d3.select('#page-title').classed('new-class', true);

//Selections and Callbacks

// run once for each element in the section
// can randomly change font-size for each element

d3.selectAll('li').style('font-size', function() {
  return Math.random() * 40 + 'px';
});

// second arg is index of current el in selection
// add stripped background to list
d3.selectAll('li').style('background-color', function(_, idx) {
  return idx % 2 === 0 ? 'light-grey' : 'white';
});

// can use method chaining to add style to multiple  d3 selections in sequence
// modify bottom divs at bottom of html page
// outer div first
// then div inside
// same innermost div
// four spaces/2 tabs for current
// two spaces/ 1 tab for new selection

// d3.select('.outer')
//     .style('color', 'purple')
//   .select('div')
//     .style('font-size', '30px')
//     .style('background-color', 'orange')
//   .select('div')
//     .style('border', '8px solid blue')

d3
  .select('.outer')
  .style('color', 'purple')
  .select('div')
  .style('font-size', '30px')
  .style('background-color', 'orange')
  .select('div')
  .style('border', '8px solid blue');
