import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type TypeTodo = {
  id: number;
  text: string;
  checked: boolean;
}

export type TypeArrayTodos = {
  todos: TypeTodo[];
}

const initialState: TypeArrayTodos = {
  todos: [
    {id: 123, text: 'Hello', checked: false},
    {id: 124, text: 'Bye', checked: true},
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
      const todo = state.todos.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.checked = !todo.checked;
      }
    },

    changeTodoText: (state, action: PayloadAction<TypeTodo>) => {
      const todo = state.todos.find((todo) => action.payload.id === todo.id);
      if(todo) {
        todo.text = action.payload.text;
      }
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
      state.todos = [];
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