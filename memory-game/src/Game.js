import React from 'react';
import Card from './Card'
import './Game.css'

const Game = ({cards, onSelect}) => {
  const allCards = cards.map((card, i) =>
    <Card
      key={card.id}
      showing={card.cardState !== 0}
      onSelect={onSelect}
      {...card}
      />
    )
  return(
    <div className="game-container">
      {allCards}
    </div>
  )
}


export default Game
