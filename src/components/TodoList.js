import React from 'react';

const TodoList = ({ todos, onDelete }) => (
  <ul>
    {todos.map((todo, index) => (
      <li key={index}>
        {todo}
        <button onClick={() => onDelete(index)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
