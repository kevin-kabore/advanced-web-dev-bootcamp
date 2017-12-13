import React, { Component } from 'react';
import './App.css';

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
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
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
