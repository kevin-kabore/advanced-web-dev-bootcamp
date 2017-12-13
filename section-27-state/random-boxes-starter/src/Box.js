import React from 'react';
import PropTypes from 'prop-types';
import './Box.css'

const Box = ({color}) => {
  const style = {
    width: '128px',
    height: '128px',
    backgroundColor: color
  }
  return (
    <div style={style}>
    </div>
  )
}

// Box.propTypes = {
//   color: PropTypes.string.isRequired
// }

export default Box;
