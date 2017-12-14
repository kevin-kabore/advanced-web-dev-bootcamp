import React, { Component } from 'react';
import CardList from './CardList'

const NUM_CARDS = 16

class Game extends Component {
  constructor(props) {
    super(props);
    const cards = Array(NUM_CARDS).fill('DimGrey')
    this.state = {
      cards
    }
  }
  render() {
    // const cards = this.state.cards.map((color, i) => <Card key={i} color={color}/>)
    return(
      <CardList cards={this.state.cards}/>
    )
  }
}


export default Game
