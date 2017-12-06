// write your code here!
// Median Age of pop in different regions- X axis
// Frequency/count - Y axis
var width = 600
var height = 600
var barPadding = 1

var xScale = d3.scaleLinear()
              .domain([0, d3.max(regionData, d => d.medianAge)])
              .rangeRound([0, width])

var histogram = d3.histogram()
                  .domain(xScale.domain())
                  .thresholds(xScale.ticks())
                  .value(d => d.medianAge)

var bins = histogram(regionData)

var barWidth = width / bins.length - barPadding;

var yScale = d3.scaleLinear()
                .domain([0, d3.max(bins, d => d.length)])
                .range([height, 0]);

var bars = d3.select('svg')
                .attr('width', width)
                .attr('height', height)
              .selectAll('.bar')
              .data(bins)
              .enter()
              .append('g')
                .classed('bar', true)

// enter selection
bars
  .append('rect')
   .attr('x', (d,i) => xScale(d.x0))
   .attr('y', d => yScale(d.length))
   .attr('height', d => height - yScale(d.length))
   .attr('width', d => xScale(d.x1) - xScale(d.x0) - barPadding)
   .attr('fill', 'blue')

bars
  .append('text')
    .text(d => d.length)
    .attr('fill', 'white')
    .attr('x', d => (xScale(d.x1) + xScale(d.x0)) / 2)
    .attr('y', d => yScale(d.length) + 20)
    .style('text-anchor', 'middle')
