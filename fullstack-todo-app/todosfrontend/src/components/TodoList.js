import React, { Component } from 'react';
const APIURL = '/api/todos';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
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
  render() {
    return <div>Todo List</div>;
  }
}

export default TodoList;
