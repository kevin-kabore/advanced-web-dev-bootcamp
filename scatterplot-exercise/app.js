// write your code here!
var width = 500;
var height = 500;
var padding = 30;

var data = regionData.filter(mustHaveKeys);

function mustHaveKeys(obj){
  var keys = [
    'subscribersPer100',
    'adultLiteracyRate',
    'urbanPopulationRate',
    'extremePovertyRate'
  ]
  for (var i = 0; i < keys.length; i++) {
    if (obj[keys[i]] === null) {
      return false
    }
  }
  return true;
};

var yScale = d3.scaleLinear()
                .domain(d3.extent(data, d => d.subscribersPer100))
                .range([height - padding, padding]);

var xScale = d3.scaleLinear()
                .domain(d3.extent(data, d => d.adultLiteracyRate))
                .range([padding, width - padding]);

var xAxis = d3.axisBottom(xScale)
              .tickSize(-height + 2 * padding)
              .tickSizeOuter(0);

var yAxis = d3.axisLeft(yScale)
              .tickSize(-width + 2 * padding)
              .tickSizeOuter(0);

var colorScale = d3.scaleLinear()
                    .domain(d3.extent(data, d => d.extremePovertyRate))
                    .range(['blue', 'green']);

var radiusScale = d3.scaleLinear()
                    .domain(d3.extent(data, d => d.urbanPopulationRate))
                    .range([4,30]);

d3.select('svg')
  .append('g')
    .attr('transform', 'translate(0,' + (height - padding) + ')')
    .call(xAxis);

d3.select('svg')
  .append('g')
    .attr('transform', 'translate(' + padding + ',0)')
    .call(yAxis);

d3.select('svg')
    .attr('width', width)
    .attr('height', height)
  .selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
    .attr('cx', d => xScale(d.adultLiteracyRate))
    .attr('cy', d => yScale(d.subscribersPer100))
    .attr('fill', d => colorScale(d.extremePovertyRate))
    .attr('r', d => radiusScale(d.urbanPopulationRate))
    .attr('stroke', '#fff')

d3.select('svg')
  .append('text')
  .attr('x', width / 2)
  .attr('y', height - padding)
  .attr('dy', '1.5em')
  .style('text-anchor', 'middle')
  .text('Adult Literacy Rate')

d3.select('svg')
  .append('text')
  .attr('x', width / 2)
  .attr('y', padding)
  .style('text-anchor', 'middle')
  .style('font-size', '1.2em')
  .text('Literacy Rate vs Cellular Subscribers')

d3.select('svg')
  .append('text')
  .attr('transform', 'rotate(-90)')
  .attr('x', -height /2)
  .attr('y', padding)
  .attr('dy', '-1.2em')
  .style('text-anchor', 'middle')
  .text('Cellular Subscribers per 100 people')
