import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useSelector } from 'react-redux';

export type Todo = {
  id: number;
  text: string;
  checked: boolean;
}

export type ArrayTodos = {
  todos: Todo[];
}

interface RootStateTodos { todos: ArrayTodos }

export const useTypedSelectorTodos: TypedUseSelectorHook<RootStateTodos> = useSelector;

const initialState: ArrayTodos = {
  todos: [
    { id: 123, text: 'Hello', checked: false },
    { id: 124, text: 'Bye', checked: true },
  ]
}

const todosSlice = createSlice({
  name: 'todosArray',
  initialState,
  reducers: {
    addTodo: (state = initialState, action: PayloadAction<string>) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        checked: false,
      }
      state.todos = [...state.todos, newTodo];
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    changeTodoChecked: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.checked = !todo.checked;
        }
        return todo;
      });
    },

    changeTodoText: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((todo) => {
        if (+action.payload.id === todo.id) {
          todo.text = action.payload.text;
        }

        return todo;
      });
    },

    checkAllTodo: (state) => {
      state.todos = state.todos.map((todo) => {
        if (!todo.checked) {
          todo.checked = !todo.checked
        }
        return todo
      })
    },

    clearAllTodo: (state) => {
      state.todos.splice(0, state.todos.length);
    }
  },
})

export const {
  addTodo,
  removeTodo,
  changeTodoChecked,
  changeTodoText,
  checkAllTodo,
  clearAllTodo,
} = todosSlice.actions;

export default todosSlice.reducer;