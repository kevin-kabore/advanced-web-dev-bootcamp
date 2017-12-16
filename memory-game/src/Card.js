import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {

  render(){
    const {id, showing, backgroundColor, onSelect} = this.props
    let style = {}
    if (showing) {
      style.backgroundColor = backgroundColor
    }

    return (
      <div className="card-container" onClick={() => onSelect(id)} style={style}>
      </div>
    )
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  showing: PropTypes.bool.isRequired
}

export default Card;
