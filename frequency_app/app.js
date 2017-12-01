var phrase = d3.select('#phrase')
var count = d3.select('#count')
var input = d3.select('input')

d3.select('#reset').on('click', function(){
  d3.selectAll('.letter').remove()
  phrase.text('')
  count.text('')
})

d3.select('form').on('submit', function() {
  d3.event.preventDefault()

  var text = input.property('value')

  var data = getFrequencies(text); // gets frequencies and returns sorted arr of obj

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
  var letters = d3.select('#letters') //update selection
                    .selectAll('div')
                      .data(data, d => d.character) // key function to join by character
  letters // exit selection - remove class of new
        .classed('new', false)
        .exit()
        .remove()

  letters // enter selection - add class of new
        .enter()
        .append('div')
        .classed('letter new', true)
        .merge(letters)
          .style('width', '20px')
          .style('line-height', '20px')
          .style('margin-right', '5px')
          .style('height', d => `${d.count * 20}px`)
          .text( d => d.character)

  count.text(`New characters ${letters.enter().nodes().length}`)
}
