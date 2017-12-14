import React from 'react';
import Todo from './Todo'

const TodoList = ({todos}) => {
  var allTodos = todos.map((todo, i) => <Todo key={i} text={todo}/>)
  return (
    <ol>
      {allTodos}
    </ol>
  )
}

export default TodoList;
