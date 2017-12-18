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
    cards = this.shuffle(cards);
    this.state = {cards: cards, noClick: false};
    this.handleSelect = this.handleSelect.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleNewGame() {
    let cards = this.state.cards.map(card => ({
      ...card,
      cardState: CardState.HIDING
    }))
    cards = this.shuffle(cards);
    this.setState({cards});
  }

  handleSelect(id){
    const mapCardState = (cards, idsToChange, newCardState) => {
      return cards.map(card => {
        if (idsToChange.includes(card.id)) {
          return {
            ...card,
            cardState: newCardState
          };
        }
        return card;
      });
    }

    const foundCard = this.state.cards.find(card => card.id === id);
    // if found card not hiding, do nothing
    if (this.state.noClick || foundCard.cardState !== CardState.HIDING) {
      return;
    }

    let noClick = false;
    // update state of clicked card to showing
    let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);
    // take out only showing cards
    const showingCards = cards.filter((c) => c.cardState === CardState.SHOWING);
    // get ids of all showing cards
    const ids = showingCards.map(c => c.id);
    // if 2 cards showing and backgroundColors match
    if (showingCards.length === 2 && showingCards[0].backgroundColor === showingCards[1].backgroundColor) {
      // change state of both cards to matching
      cards = mapCardState(cards, ids, CardState.MATCHING);
    } else if (showingCards.length === 2) {
      // otherwise 2 cards showing and they don't match so need to hide them
      let hidingCards = mapCardState(cards, ids, CardState.HIDING);

      noClick = true;
      // keep cards showing for 1.3s and then update state to hide cards
      // while cards showing can't click
      this.setState({cards,noClick}, () => {
        setTimeout(() => {
          this.setState({cards: hidingCards, noClick: false});
        }, 1300);
      });
      return; // exit function
    }
    // only hit this setState if only one card showing and no match or 2 cards showing that match
    this.setState({cards, noClick})
  }

  shuffle(array) {
    for (let i = array.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  render() {
    return (
      <div className="App">
        <Navbar onNewGame={this.handleNewGame}/>
        <Game cards={this.state.cards} onSelect={this.handleSelect}/>
      </div>
    );
  }
}

export default App;
