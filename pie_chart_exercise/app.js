var width = 600;
var height = 600;
var minYear = d3.min(birthData, d => d.year);
var maxYear = d3.max(birthData, d => d.year);
var orderedMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var innerColors = ['#1f77b4', '#2ca02c', '#d62728', '#ff7f0e'];

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
                   .domain(orderedMonths)
                   .range(d3.schemeCategory20);



// outer chart
svg
  .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
    .classed('chart', true);
//inner chart
svg
  .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
    .classed('inner-chart', true)

svg
  .append('text')
  .classed('title', true)
  .attr('x', width /2)
  .attr('y', 20)
  .style('font-size', '2em')
  .style('text-anchor, middle');

d3.select('input')
    .property('min', minYear)
    .property('max', maxYear)
    .property('value', minYear)
    .on('input', function(){
      makeGraph(+d3.event.target.value)
    })


makeGraph(minYear)

function makeGraph(year) {
  var yearData = birthData.filter(d => d.year === year);

  var arcs = d3.pie()
               .value(d => d.births)
               .sort((a, b) => orderedMonths.indexOf(a.month) - orderedMonths.indexOf(b.month))

  var innerArcs = d3.pie()
                    .value(d => d.births)
                    .sort((a,b) => a.quarter - b.quarter);

  var path = d3.arc()
               .innerRadius(width / 4)
               .outerRadius(width / 2 - 40)

  var innerPath = d3.arc()
                    .innerRadius(0)
                    .outerRadius(width / 4)

  // select update selection and store
  var outer = d3.select('.chart')
                 .selectAll('.arc')
                 .data(arcs(yearData))

  var inner = d3.select('.inner-chart')
                .selectAll('.arc')
                .data(innerArcs(getDataByQuarter(yearData)))
  // exit selection and remove
  outer
    .exit()
    .remove()

  inner
    .exit()
    .remove()

  // enter selection
  outer
    .enter()
    .append('path')
      .classed('arc', true)
      .attr('fill', d => colorScale(d.data.month))
    .merge(outer)
      .attr('stroke', 'black')
      .attr('d', path);
 inner
  .enter()
  .append('path')
    .classed('arc', true)
    .attr('fill', (d, i) => innerColors[i])
  .merge(inner)
    .attr('stroke', 'black')
    .attr('d', innerPath)

  d3.select('.title')
    .text('Births by month and quarter for ' + year);
}


function getDataByQuarter(data) {
  var quarterTallies = [0,1,2,3].map(n => ({quarter: n, births: 0}))

  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var quarter = Math.floor(orderedMonths.indexOf(row.month) / 3)
    quarterTallies[quarter].births += row.births;
  }
  return quarterTallies;
}
