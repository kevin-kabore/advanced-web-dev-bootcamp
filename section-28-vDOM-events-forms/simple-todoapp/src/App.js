import React, { Component } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        'First todo',
        'Second todo'
      ],
      newTodo: ''
    }
    this.handleNewTodo = this.handleNewTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleNewTodo(e) {
    e.preventDefault()
    const todos = [...this.state.todos, this.state.newTodo]
    this.setState({
      todos,
      newTodo: ''
    })
  }
  handleChange(e){
    e.preventDefault()
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">
          <h1 >Simple Todo App</h1>
          <TodoForm handleNewTodo={this.handleNewTodo} newTodo={this.state.newTodo} handleChange={this.handleChange}/>
        </div>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
