import React from 'react';
import {Footer} from './components/footer/footer';
import {Header} from './components/header/header';
import {TodoList} from './components/todo-list/todo-list';
import { ThemeProvider } from 'styled-components';
import {theme} from './color-styles';

export const App:React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <TodoList />
      <Footer/>
    </ThemeProvider>
  )
}
