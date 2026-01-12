import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {id: 123, text: 'Hello', checked: false},
    {id: 124, text: 'Bye', checked: true},
  ],

  editTodo: null
}

export const todosSlice = createSlice({
  name: 'todosArray',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        checked: false,
      }
      state.todos = [...state.todos, newTodo];
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    changeTodoChecked: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.checked = !todo.checked;
        }
        return todo;
      });
    },

    findCurrentTodo: (state, action) => {
      state.editTodo = action.payload;
    },

    changeTodoText: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (state.editTodo.id === todo.id) {
          todo.text = action.payload;
        }

        return todo;
      });

      state.editTodo = null;
    }
  },
})

export const {
  addTodo,
  removeTodo,
  changeTodoChecked,
  findCurrentTodo,
  changeTodoText,
} = todosSlice.actions;

export default todosSlice.reducer;