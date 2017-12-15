import React, {Component} from 'react';
import './Card.css'

class Card extends Component {

  render(){
    const {id, cardState, backgroundColor, onSelect} = this.props

    const style = {
      width: '150px',
      height: '160px',
      borderRadius: '25px',
      backgroundColor: cardState === 0 ? 'grey' : backgroundColor
    }
    return (
      <div onClick={() => onSelect(id, cardState)}style={style}>
      </div>
    )
  }
}

export default Card;
