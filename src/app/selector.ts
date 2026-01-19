import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './types';


const allTodos = (state: RootState) => state.todos.todos;
const filter = (state: RootState) => state.filters;

export const selectTodosByFilter = createSelector(
  [allTodos, filter],
  (allTodos, filter) => {
    if (filter.current === 'all') {
      return allTodos;
    }

    if (filter.current === 'active') {
      return allTodos.filter((todo) => {
        return todo.checked === false;
      })
    }

    if (filter.current === 'completed') {
      return allTodos.filter((todo) => {
        return todo.checked === true;
      })
    }
  }
)
