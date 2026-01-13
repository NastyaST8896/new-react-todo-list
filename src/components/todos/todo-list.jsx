import Grid from '@mui/material/Grid';
import List from '@mui/material/List';

import InputCustom from './input-custom';
import ListItems from './list-items/list-items';
import ItemCounters from './item-counters/item-counters';
import FilterButtons from '../filters/filter-buttons';
import {useSelector} from "react-redux";
import {selectTodosByFilter} from "../../app/selector";
import ClearButton from './clear-button';

function TodoList() {
  const todos = useSelector(selectTodosByFilter);

  return (
    <Grid container spacing={0}>
      <Grid
        size={{xs: 1, md: 2, lg: 3, xl: 4}}
      >
      </Grid>

      <Grid
        size={{xs: 10, md: 8, lg: 6, xl: 4}}
      >
        <header>
          <h1>todos</h1>
        </header>

        <main>
          <InputCustom />

          <List>
            {todos.map((todo) => <ListItems key={todo.id} todo={todo} /> )}
          </List>
          <Grid
            container
            spacing={2}
            sx={{
              flexDirection: {xs: "column", md: "row", lg: "row", xl: "row"},
              justifyContent: "space-between",
              alignItems: {xs: "center"}
            }}
          >
            <Grid>
              <ItemCounters />
            </Grid>

            <Grid>
              <FilterButtons />
            </Grid>

            <Grid>
              <ClearButton />
            </Grid>
          </Grid>

        </main>

      </Grid>

      <Grid
        size={{xs: 1, md: 2, lg: 3, xl: 4}}
      >
      </Grid>
    </Grid>
  )
}

export default TodoList