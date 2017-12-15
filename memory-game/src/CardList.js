import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({cards}) => {
  const cards = props.cards.map((card, i) => <Card key={card.id} {...card}/>)
  return (
    <ul>
      {cards}
    </ul>
  )
}

export default CardList;
