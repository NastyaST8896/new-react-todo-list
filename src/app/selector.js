import {createSelector} from '@reduxjs/toolkit';

const allTodos = (state) => state.todosArray.todos;
const filter = (state) => state.filters;

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
