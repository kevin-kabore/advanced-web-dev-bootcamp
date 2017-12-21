import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
const APIURL = '/api/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
  }
  componentWillMount() {
    this.loadTodos();
  }
  loadTodos() {
    fetch(APIURL)
      .then(resp => {
        if (!resp.ok) {
          if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
              let err = { errorMessage: data.message };
              throw err;
            });
          } else {
            let err = {
              errorMessage:
                'Please try again later, server is not responding...'
            };
            throw err;
          }
        }
        return resp.json();
      })
      .then(todos => this.setState({ todos }));
  }
  addTodo(val) {
    fetch(APIURL, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ name: val })
    })
      .then(resp => {
        if (!resp.ok) {
          if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
              let err = { errorMessage: data.message };
              throw err;
            });
          } else {
            let err = {
              errorMessage:
                'Please try again later, server is not responding...'
            };
            throw err;
          }
        }
        return resp.json();
      })
      .then(newTodo => {
        this.setState({ todos: [...this.state.todos, newTodo] });
      });
  }
  render() {
    const todos = this.state.todos.map(t => <TodoItem key={t._id} {...t} />);
    return (
      <div>
        <h1>Todo List!</h1>
        <TodoForm addTodo={this.addTodo} />
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
