import React from 'react';
import './Home.scss';
import { TodoList } from '@/pages/Home/components';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <div className="Home">
      <div className="Home__container">
        <div className="Home__card">
          <h2 className="Home__title">Todo list</h2>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Home;
