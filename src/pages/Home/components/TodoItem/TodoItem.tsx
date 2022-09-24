import { ITodo, storeTodo } from '@throwjs/store';
import React, { useState } from 'react';
import './TodoItem.scss';

const TodoItem: React.FC<ITodo> = ({ completed, id, text }) => {
  const [checked, setChecked] = useState(completed);

  const handleChange = () => {
    setChecked(!checked);
    storeTodo.changeCompleted(id);
  };

  const handleDelete = () => {
    storeTodo.deleteTodo(id);
  };

  return (
    <li className="TodoItem">
      <input type="checkbox" defaultChecked={checked} onChange={handleChange} />
      <p>{text}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
