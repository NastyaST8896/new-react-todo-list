import Grid from '@mui/material/Grid';
import InputCustom from './input-new-todo';
import ListItems from './list-items';
import ItemCounters from './item-counters/item-counters'
import FilterButtons from '../../components/filter-buttons/filter-buttons';

import './todo-list.css'

function TodoList() {

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
          <InputCustom />

          <ListItems />

          <div className='groupingfiltrs'>
            <ItemCounters />

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