import React from 'react';
import PropTypes from 'prop-types';
import './Box.css'

const Box = props => {
  return (
    <div className="box" style={{backgroundColor: props.color}}>
    </div>
  )
}

Box.propTypes = {
  color: PropTypes.string.isRequired
}

export default Box;
