import React, {Component} from 'react';
import './Card.css'

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const {color} = this.props
    const style = {
      width: '150px',
      height: '160px',
      borderRadius: '25px',
      backgroundColor: color
    }
    return (
      <div style={style}>
      </div>
    )
  }
}

export default Card;
