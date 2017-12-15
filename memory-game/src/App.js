import React, { Component } from 'react';
import Navbar from './Navbar'
import Game from './Game'
import './App.css';

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

    this.state = {
      cards: shuffle(cards)
    }

    shuffle(array) {
      for (let i = 0; i < array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [array[i], [array[j]]] = [array[j], [array[i]]]
      }
      return array
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Game cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
