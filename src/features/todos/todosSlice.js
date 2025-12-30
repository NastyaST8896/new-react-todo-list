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
    },
  })

  export const { addTodo, removeTodo } = todosSlice.actions;

  export default todosSlice.reducer;