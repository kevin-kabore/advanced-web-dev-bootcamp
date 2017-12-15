import React, { Component } from 'react';
import Navbar from './Navbar'
import Game from './Game'
import './App.css';

// Hiding - the card is not being shown
// SHOWING - the card is being shown but does not have a match yet
// MATCHING - the card is being shown and has a match.
              // the card should never move from MATCHING to another cardState during a game play

const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
}

class App extends Component {
  constructor(props) {
    super(props);
    // The cards that we will use for our state
    let cards = [
      {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 2, cardState: CardState.HIDING, backgroundColor: 'blue'},
      {id: 3, cardState: CardState.HIDING, backgroundColor: 'blue'},
      {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 6, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 7, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 8, cardState: CardState.HIDING, backgroundColor: 'LightPink'},
      {id: 9, cardState: CardState.HIDING, backgroundColor: 'LightPink'},
      {id: 10, cardState: CardState.HIDING, backgroundColor: 'MistyRose'},
      {id: 11, cardState: CardState.HIDING, backgroundColor: 'MistyRose'},
      {id: 12, cardState: CardState.HIDING, backgroundColor: 'PaleGoldenRod'},
      {id: 13, cardState: CardState.HIDING, backgroundColor: 'PaleGoldenRod'},
      {id: 14, cardState: CardState.HIDING, backgroundColor: 'SandyBrown'},
      {id: 15, cardState: CardState.HIDING, backgroundColor: 'SandyBrown'}
    ];
    cards = this.shuffle(cards)
    this.state = {cards: cards, noClick: false}
    this.handleSelect = this.handleSelect.bind(this)

  }

  handleSelect(id, cardState){
    const cards = this.state.cards.slice();
    const card = cards.find(card => card.id === id)
    const index = cards.findIndex(card => card.id === id)
    card.cardState = CardState.SHOWING

    cards[index] = card

    // check if matching card is Showing
    this.setState({cards})
  }

  shuffle(array) {
    for (let i = array.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [array[i], [array[j]]] = [array[j], [array[i]]];
    }
    return array
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Game cards={this.state.cards} onSelect={this.handleSelect}/>
      </div>
    );
  }
}

export default App;
