var quotes = [
  {
    quote: "I see dead people.",
    movie: "The Sixth Sense",
    year: 1999,
    rating: "PG-13"
  }, {
    quote: "May the force be with you.",
    movie: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    rating: "PG"
  }, {
    quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    movie: "Dirty Harry",
    year: 1971,
    rating: "R"
  }, {
    quote: "You had me at 'hello.'",
    movie: "Jerry Maguire",
    year: 1996,
    rating: "R"
  }, {
    quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
    movie: "Finding Nemo",
    year: 2003,
    rating: "G"
  }
];

var newQuotes = [
  {
    quote: "Houston, we have a problem.",
    movie: "Apollo 13",
    year: 1995,
    rating: "PG-13"
  }, {
    quote: "Gentlemen, you can't fight in here! This is the war room!",
    movie: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
    rating: "PG"
  }
];

var colors = {
  "G" : "#3cff00",
  "PG": "#f9ff00",
  "PG-13": "#ff9000",
  "R": "#ff0000"
}

// General update pattern
// used when joining arbitrary number of data to arbitrary number of elements
// 1. Grab update selection and make any unique changes to that selection ex style
//    store in a variable
// 2. Grab exit selection and remove any unecessary elements
// 3. Grab enter selection and make any changes
// 4. Merge enter and update selections and make any changes to be shared across both
var add = d3.select('#add')

add.on('click', addNewQuotes)

function addNewQuotes() {
  quotes = quotes.concat(newQuotes)

  var listItems = d3.select('#quotes') // update selection
      .selectAll('li')
        .data(quotes, d => d.quote)

  listItems // hop into enter selection and style as needed
        .enter() // will only affect enter selection because
        .append('li')
          .text(d => `${d.quote} - ${d.movie} (${d.year}) `)
          .style('margin', '20px')
          .style('padding', '0px') // will only affect enter selection because
          .style('font-size', d => d.quote.length < 25 ? '2em' : '1em')
          .style('background-color', d => colors[d.rating])
          .style('border-radius', '8px')
        .merge(listItems) // merges enter selection with update selection
  add.remove()
}

d3.select('#quotes')
    .style('list-style', 'none')
  .selectAll('li')
  .data(quotes) // binds data to enter nodes
  .enter() // attaches to placeholder html nodes
  .append('li') // append to DOM
    .text(d =>  // d is data object , second arg = i for index
       `${d.quote} - ${d.movie} (${d.year}) ` // each object has quote property
    )
    .style('margin', '20px')
    .style('padding', '20px')
    .style('font-size', d => d.quote.length < 25 ? '2em' : '1em') // double font size if fewer than 25 chars
    .style('background-color', d => colors[d.rating])
    .style('border-radius', '8px')


// Remove last quote
// quotes.pop() // remove last quote from data set
//
// d3.selectAll('li')
//     .data(quotes) // update data binding and moves last Li to exitArr
//     .exit() // access exit selection
//     .remove() // remove data bind from DOM

// remove all movies with an R rating
var removeBtn = d3.select('#remove')
removeBtn.on('click', removeRquotes)

function removeRquotes() {
  var nonRQuotes = quotes.filter(movie => movie.rating !== "R") // filter out of data arr
  d3.selectAll('li')
    .data(nonRQuotes, d => d.quote) // return from key function is how it is bound so two that got filtered out are taken out
    .exit()
    .remove()

  removeBtn.remove()
}
