var phrase = d3.select('#phrase')
var count = d3.select('#count')
var input = d3.select('input')
var width = 800
var height = 400
var barWidth;
var barPadding = 25
var svg = d3.select('svg')
                .attr('width', width)
                .attr('height', height)

d3.select('#reset').on('click', function(){
  d3.selectAll('.letter').remove()
  phrase.text('')
  count.text('')
})



d3.select('form').on('submit', function() {
  d3.event.preventDefault()
  var text = input.property('value')

  var data = getFrequencies(text); // gets frequencies and returns sorted arr of obj
  barWidth = width / data.length - barPadding

  setPhrase(text) // sets header phrase
  addLetters(data)
  input.property('value', '')
})



function getFrequencies(str) {
  var sorted = str.split('').sort();
  var data = []
  for (var i = 0; i < sorted.length; i++) {
    var last = data[data.length -1];
    if (last && last.character === sorted[i]) last.count++;
    else data.push({character : sorted[i], count: 1});
  }
  return data
}

function setPhrase(text){
  phrase.text(`Analysis of: ${text}`);
}


function addLetters(data) {
  var letters = svg //update selection
                  .selectAll('.letter')
                  .data(data, d => d.character) // key function to join by character
  letters // exit selection - remove class of new
        .classed('new', false)
        .exit()
        .remove()

  var letterEnter = letters // enter selection - add class of new
        .enter()
        .append('g')
          .classed('letter new', true)

  letterEnter.append('rect')
  letterEnter.append('text')

  letterEnter.merge(letters)
    .select('rect')
      .attr('width', barWidth)
      .attr('height', function(d, i){
        return d.count * 20
      })
      .attr('y', function(d, i){
        return height - (d.count * 20)
      })
      .attr('x', function(d, i){
        return (barWidth + barPadding) * i
      })
      .attr('fill', 'green')

  letterEnter.merge(letters)
      .select('text')
        .attr('x', function(d, i){
           return (barWidth + barPadding) * i + barWidth / 2;
        })
        .attr('text-anchor', 'middle')
        .attr('y', function(d){
          return height - d.count * 20 - 10;
        })
        .text(function(d){
          return d.character;
        })
          // .style('width', '20px')
          // .style('line-height', '20px')
          // .style('margin-right', '5px')
          // .style('height', d => `${d.count * 20}px`)
          // .text( d => d.character)

  count.text(`New characters ${letters.enter().nodes().length}`)
}
