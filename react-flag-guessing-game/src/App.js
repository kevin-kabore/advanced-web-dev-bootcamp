import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader.js';
import ChoiceForm from './ChoiceForm';
import Flag from './Flag';
import Result from './Result';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      countries: [],
      answer: '',
      checked: '',
      result: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentWillMount(){
    this.handleReset();
  }

  handleChange(e) {
    this.setState({ checked: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.checked.length > 0 && this.state.checked === this.state.answer.name) {
      this.setState({result: 'Correct!'})
    } else if (this.state.checked.length > 0 && this.state.checked !== this.state.answer.name ) {
      this.setState({result: `Incorrect! Correct answer: ${this.state.answer.name}`})

    }
  }

  handleReset() {
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
        let countries = this.shuffle(data).slice(0, 4);
        let randI = Math.floor(Math.random() * 4);

        this.setState({
          countries,
          answer: countries[randI],
          checked: '',
          result: ''
        })
      })
  }

  shuffle(array) {
    for (let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        {this.state.result.length === 0 ?
          (
            <ChoiceForm
              countries={this.state.countries}
              handleChange={this.handleChange}
              checked={this.state.checked}
              handleSubmit={this.handleSubmit}
            />
          ) : <Result result={this.state.result} handleReset={this.handleReset}/>
        }

        {this.state.countries.length !== 0 ?
          <Flag country={this.state.answer}/>
          : null
        }
      </div>
    );
  }
}

export default App;
