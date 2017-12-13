import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

// If functional component use propTypes after
const InstructorItem = props => {
  // static propTypes = {
  //   name: PropTypes.string,
  //   hobbies: PropTypes.arrayOf(PropTypes.string)
  // }
  return (
    <li>
      <h3>{props.name}</h3>
      <h4>Hobbies: {props.hobbies.join(', ')}</h4>
    </li>
  );
}

InstructorItem.propTypes = {
  name: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string)
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    setTimeout(() => {
      const randInstIndex = Math.floor(Math.random() * this.state.instructors.length);
      const randHobbyIndex = Math.floor(Math.random() * this.state.instructors[randInstIndex].length)

      // APPROACH 2
      // // map returns a new object
      const instructors = this.state.instructors.map((inst, i) => {
        if (i === randInstIndex) {
          const hobbies = inst.hobbies.slice() // make copy
          hobbies.splice(randHobbyIndex, 1) // remove rand hobby
          return {
            ...inst,
            hobbies: hobbies
          };
        } else {
          return inst   // if doesnt match just return instructor
        }
      })

      // APPROACH 1
      // // make copy of the instructors arr
      // const instructors = this.state.instructors.slice();
      // // copy of the object we want to mutate so reference is different object than state
      // instructors[randInstIndex] = Object.assign({}, instructors[randInstIndex])
      // // copy of hobbies array otherwise reference is still state
      // instructors[randInstIndex].hobbies = instructors[randInstIndex].hobbies.slice()
      // // can now use splice to remove since all are new copies
      // instructors[randInstIndex].hobbies.splice(randHobbyIndex, 1);
      // // finally set the new state with copy
      this.setState({instructors: instructors})
    }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <InstructorItem
        key={index}
        name={instructor.name}
        hobbies={instructor.hobbies}
      />
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
