import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../app/store';


const allTodos = (state: RootState) => state.todos.todos;
const filter = (state: RootState) => state.filters;

export const selectTodosByFilter = createSelector(
  [allTodos, filter],
  (allTodos, filter) => {
    if (filter === 'all') {
      return allTodos;
    }

    if (filter === 'active') {
      return allTodos.filter((todo) => {
        return todo.checked === false;
      })
    }

    if (filter === 'completed') {
      return allTodos.filter((todo) => {
        return todo.checked === true;
      })
    }
  }
)
