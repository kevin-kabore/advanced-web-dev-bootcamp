import React from 'react';
import './Flag.css';

const Flag = props => {
  console.log(props.country);
  const style = {}
  style.backgroundImage = `url('${props.country.flag}')`
  return (
    <div className="flag" style={style}>
    </div>
  )
}

export default Flag;
