import React, { Component } from 'react';

class HobbyList extends Component {
  render(){
    const listStyle = {fontSize: '1.5em'}
    const hobbies = ['Sleeping', 'Eating', 'Cuddling']
    return (
      <ul>
        {hobbies.map((hobby, i) => <li key={i} style={listStyle}>{hobby}</li>)}
      </ul>
    )
  }
}

export default HobbyList;
