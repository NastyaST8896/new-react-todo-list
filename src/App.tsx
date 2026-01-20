import React from 'react';
import {Footer} from './components/footer/footer';
import {Header} from './components/header/header';
import {TodoList} from './components/todo-list/todo-list';

export const App:React.FC = () => {
  return (
    <>
     <Header />
     <TodoList />
     <Footer/>
    </>
  )
}
