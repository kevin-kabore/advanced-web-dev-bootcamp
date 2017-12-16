import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stories: []
    }
  }
  componentWillMount() {
    const topStories = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    const storyBaseUrl = 'https://hacker-news.firebaseio.com/v0/item/';

    fetch(topStories)
      .then(data => data.json())
      .then(data => data.map(id => { // returns array
        const url = `${storyBaseUrl}${id}.json`
        return fetch(url).then(data => data.json())
      })) // is array
      .then(promises => Promise.all(promises))
      .then(stories => this.setState({stories}));
  }
  render() {
    let views = <div>Loading...</div>
    const {stories} = this.state;

    if (stories && stories.length > 0) {
      views = stories.map(story => (
        <p key={story.id}><a href={story.url}>{story.title}</a>from <strong>{story.by}</strong></p>
      ))
    }
    return (
      <div className="App">
        <h2>Hacker News Top Stories</h2>
        {views}
      </div>
    );
  }
}

export default App;
