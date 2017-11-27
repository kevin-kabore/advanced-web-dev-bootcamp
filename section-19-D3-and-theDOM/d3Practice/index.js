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
