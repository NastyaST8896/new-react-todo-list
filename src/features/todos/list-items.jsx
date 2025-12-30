import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from './todosSlice';

function ListItems() {
  const todos = useSelector((state) => state.todosArray.todos);
  const dispatch = useDispatch();

  // const handleChange = (todo) => {
  //   todo.checked = !todo.checked
  //   handleCheck(todo.id, todo.checked)
  // }

  return (
    <List>
      {todos.map((todo) => (
        <ListItem
          divider={true}
          key={todo.id}
          secondaryAction={
            <IconButton 
            edge="end" 
            aria-label="delete"
            onClick={() => { dispatch(removeTodo(todo.id))}}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              color="success"
              checked={todo.checked}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              // onChange={() => handleChange(todo)}
            />
          </ListItemIcon>
          <ListItemText primary={todo.text} />
        </ListItem>
      ))}
    </List>
  )
}

export default ListItems;