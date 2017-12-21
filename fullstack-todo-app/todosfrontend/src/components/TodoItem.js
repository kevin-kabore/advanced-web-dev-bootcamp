import React from 'react';

const TodoItem = ({ name, completed }) => {
  return (
    <li
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {name}
    </li>
  );
};
export default TodoItem;
