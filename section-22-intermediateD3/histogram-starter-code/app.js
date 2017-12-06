// we'll write this code together
var width = 600
var height = 600
var barPadding = 1
var padding = 20;
var minYear = d3.min(birthData, d => d.year)
var maxYear = d3.max(birthData, d => d.year)
var yearData = birthData.filter(d => d.year === minYear)

var xScale = d3.scaleLinear()
              .domain([0, d3.max(yearData, d => d.births)])
              .rangeRound([padding, width - padding]);

var histogram = d3.histogram()
                  .domain(xScale.domain())
                  .thresholds(xScale.ticks())
                  .value(d => d.births);

var bins = histogram(yearData);

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


bars
  .append('rect')
    .attr('x', (d, i) => xScale(d.x0))
    .attr('y', d => yScale(d.length))
    .attr('height', d => height - yScale(d.length))
    .attr('width', d => xScale(d.x1) - xScale(d.x0) - barPadding)
    .attr('fill', '#9c27b0')

bars
  .append('text')
    .text(d => d.x0 + ' - ' + d.x1 + ' (bar height: ' + d.length + ')')
    .attr('transform', 'rotate(-90)')
    .attr('y', d => (xScale(d.x1) + xScale(d.x0)) / 2)
    .attr('x', -height + 10)
    .style('alignment-baseline', 'middle')

d3.select('input')
  .property('min', minYear)
  .property('max', maxYear)
  .property('value', minYear)
  .on('input', () =>{
    var year = +d3.event.target.value;
    yearData = birthData.filter(d => d.year === year);
    xScale.domain([0, d3.max(yearData, d => d.births)]);
    histogram.domain(xScale.domain())
              .thresholds(xScale.ticks());
    bins = histogram(yearData);
    yScale.domain([0, d3.max(bins, d => d.length)]);

    //update selection
    bars = d3.select('svg')
              .selectAll('.bar')
              .data(bins)

    // exit selection - remove any elements
    bars
      .exit()
      .remove();

    //enter selection
    var g = bars
              .enter()
              .append('g')
                .classed('bar', true);

    g.append('rect');
    g.append('text');

    // merge enter selection with update selection and update rect and text for each bar
    g.merge(bars)
      .select('rect')
        .attr('x', (d, i) => xScale(d.x0))
        .attr('y', d => yScale(d.length))
        .attr('height', d => height - yScale(d.length))
        .attr('width', d => {
            var width = xScale(d.x1) - xScale(d.x0) - barPadding;
            return width < 0 ? 0 : width;
        })
        .attr('fill', '#9c27b0')

    g.merge(bars)
      .select('text')
        .text(d => d.x0 + ' - ' + d.x1 + ' (bar height: ' + d.length + ')')
        .attr('transform', 'rotate(-90)')
        .attr('y', d => (xScale(d.x1) + xScale(d.x0)) / 2)
        .attr('x', -height + 10)
        .style('alignment-baseline', 'middle')

  })
