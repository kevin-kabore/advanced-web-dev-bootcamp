import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = props => {
  const cards = props.cards.map((color, i) => <Card key={i} color={color}/>)
  return (
    <ul>
      {cards}
    </ul>
  )
}

export default CardList;
