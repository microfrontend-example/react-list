import store, { ITodo } from "@throwjs/store";
import React, { useState } from "react";
import "./TodoItem.scss";

const TodoItem: React.FC<ITodo> = ({ completed, id, text }) => {
  const [checked, setChecked] = useState(completed);

  const handleChange = () => {
    setChecked(!checked);
    store.changeCompleted(id);
  };

  const handleDelete = () => {
    store.deleteTodo(id);
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
