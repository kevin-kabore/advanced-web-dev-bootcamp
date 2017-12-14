import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleNewTodo}>
          <input
            className="todo-input"
            type="text"
            name="newTodo"
            value={this.props.newTodo}
            placeholder="What needs to be done?"
            onChange={this.props.handleChange}
          ></input>
          <button type="submit">SAVE</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;
