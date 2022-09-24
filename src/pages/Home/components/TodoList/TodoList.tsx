import React, { useEffect, useState } from 'react';
import './TodoList.scss';
import { ITodo, storeTodo } from '@throwjs/store';
import { TodoItem } from '../TodoItem';

export interface TodoListInterface {}

const TodoList: React.FC<TodoListInterface> = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const subscription = storeTodo.storeTodo$.subscribe((todos) => {
      setTodos(todos);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <ul className="TodoList">
      {todos.length ? (
        todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
      ) : (
        <div>No data</div>
      )}
    </ul>
  );
};

export default TodoList;
