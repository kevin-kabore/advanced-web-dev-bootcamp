var width = 600;
var height = 600;
var minYear = d3.min(birthData, d => d.year);
var yearData = birthData.filter(d => d.year === minYear);

var months = []

for (var i = 0; i < birthData.length; i++) {
  var month = birthData[i].month
  if (months.indexOf(month) === -1) {
    months.push(month)
  }
};

var svg = d3.select('svg')
              .attr('width', width)
              .attr('height', height);

var colorScale = d3.scaleOrdinal()
                   .domain(months)
                   .range(d3.schemeCategory20);

svg
  .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
    .classed('chart', true)

var arcs = d3.pie()
             .value(d => d.births)
             (yearData)

var path = d3.arc()
             .outerRadius(width / 2 - 10)
             .innerRadius(width / 4);

d3.select('.chart')
  .selectAll('.arc')
  .data(arcs)
  .enter()
  .append('path')
    .classed('arc', true)
    .attr('fill', d => colorScale(d.data.month))
    .attr('stroke', 'black')
    .attr('d', path);
