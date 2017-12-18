import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AppHeader from './AppHeader.js';
import ChoiceForm from './ChoiceForm';
import Flag from './Flag';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      countries: []
    }
  }

  componentWillMount(){
    const allCountiesUrl = 'https://restcountries.eu/rest/v2/all';

    fetch(allCountiesUrl)
      .then(data => data.json())
      .then(data => data.map(c => {
        let country = {}
        country.name = c.name;
        country.flag = c.flag;
        return country;
      }))
      .then(data => {
         this.setState({countries: this.shuffle(data).slice(0, 4)})
      })
  }
  // setChoices() {
  //   const randI = Math.floor(Math.random() * )
  // }

  shuffle(array) {
    for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  render() {
    let randI = Math.floor(Math.random() * 4);
    console.log(randI);
    return (
      <div className="App">
        <AppHeader />
        <ChoiceForm countries={this.state.countries}/>
        {this.state.countries.length !== 0 ?
          <Flag country={this.state.countries[randI]}/>
          : null
        }
      </div>
    );
  }
}

export default App;
