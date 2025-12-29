import { useState } from 'react';
import Grid from '@mui/material/Grid';
import InputCustom from '../input-new-todo';
import ListItems from '../list-items';
import ItemCounters from '../item-counters/item-counters';
import FilterButtons from '../filter-buttons/filter-buttons';

import './todo-list.css'

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'gjlfhrb', checked: false },
    { id: 2, text: 'klrf', checked: false },
    { id: 3, text: 'cfkfn gjl ie,jq', checked: false },
  ]);

  const [filterTodos, setFilterTodos] = useState(todos);

  


  const handleAddListItem = (inputValue) => {
    const text = inputValue;
    const newTodo = { id: Date.now(), text: text, checked: false }
    setTodos([...todos, newTodo]);
  }

   let checkedItemsLength = todos.filter((todo) => {
      return todo.checked === true
    }).length

  const handleCheck = (id, checked) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.checked = checked;
      }
      return todo
    })
    setTodos(newTodos)


  }

  const handleDeleteListItem = (id) => {
    const newTodos = todos.filter((item) => {
      return item.id !== id
    })
    setTodos(newTodos)

  }

  return (
    <Grid container spacing={0} >
      <Grid 
      size={{ xs: 1, md: 2, lg: 3, xl: 4 }}
      >
      </Grid>

      <Grid 
      size={{ xs: 10, md: 8, lg: 6, xl: 4 }}
      >
        <header>
          <h1>todos</h1>
        </header>

        <main>
          <InputCustom 
          handleAddListItem={handleAddListItem} 
          />

          <ListItems 
          todos={todos} 
          handleCheck={handleCheck}
          handleDeleteListItem={handleDeleteListItem}
          />

          <div className='groupingfiltrs'>
            <ItemCounters 
            counterChecked={checkedItemsLength} 
            counterLeft={todos.length - checkedItemsLength} 
          />

          <FilterButtons />
          </div>
          
        </main>

      </Grid>

      <Grid 
      size={{ xs: 1, md: 2, lg: 3, xl: 4 }}
      >
      </Grid>
    </Grid>
  )
}

export default TodoList