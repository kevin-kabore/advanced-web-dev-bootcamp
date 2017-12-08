var width = 600;
var height = 600;
var minYear = d3.min(birthData, d => d.year);
var maxYear = d3.max(birthData, d => d.year);

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

d3.select('input')
    .property('min', minYear)
    .property('max', maxYear)
    .property('value', minYear)
    .on('input', function(){
      makeMonthGraph(+d3.event.target.value)
    })


makeMonthGraph(minYear)

function makeMonthGraph(year) {
  var yearData = birthData.filter(d => d.year === year);

  var arcs = d3.pie()
               .value(d => d.births)
               .sort(function(a, b){
                 if (a.month < b.month) return -1
                 else if (a.month > b.month) return 1
               })
               (yearData)

  var path = d3.arc()
               .outerRadius(width / 2 - 10)
               .innerRadius(width / 4);

  // select update selection and store
  var update = d3.select('.chart')
                 .selectAll('.arc')
                 .data(arcs)

  // exit selection and remove
  update
    .exit()
    .remove()

  // enter selection
  update
    .enter()
    .append('path')
      .classed('arc', true)
    .merge(update)
      .attr('fill', d => colorScale(d.data.month))
      .attr('stroke', 'black')
      .attr('d', path);
}
