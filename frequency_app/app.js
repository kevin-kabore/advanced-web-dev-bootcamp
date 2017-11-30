var phrase = d3.select('#phrase')

d3.select('form').on('submit', function() {
  d3.event.preventDefault()

  var text = d3.select('input').property('value')

  var data = getFrequencies(text);

  setPhrase(text)
  addLetters(data)
  console.log(data)
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
  d3.select('#letters')
      .selectAll('div')
        .data(data)
        .enter()
        .append('div', d => d.character)
          .text( d => d.character)
          .classed('letter new', true)
          .style('width', '20px')
          .style('line-height', '20px')
          .style('margin-right', '5px')
          .style('height', d => `${d.count * 20}px`)
          // .classed('letter', true)
}

// for every character append div to #letters with class letter-new
// second phrase update to class letter and enter to letter new
