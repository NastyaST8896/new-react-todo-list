import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

  export const todosSlice = createSlice({
    name: 'todosArray',
    initialState,
    reducers: {
      addTodo: (state, action) => {
        const  newTodo = {
          id: Date.now(),
          text: action.payload,
          checked: false,
        }
        state.todos.push(newTodo);
      },

      removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      },

      changeTodo: (state, action) => {
        state.todos = state.todos.map((todo) => {
          if(todo.id === action.payload) {
          todo.checked = !todo.checked;
          }
          return todo
        });
      }
    },
  })

  export const { addTodo, removeTodo, changeTodo } = todosSlice.actions;

  export default todosSlice.reducer;