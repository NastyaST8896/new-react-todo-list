import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function ListItems({ todos, handleCheck, handleDeleteListItem }) {
  const handleChange = (todo) => {
    todo.checked = !todo.checked
    handleCheck(todo.id, todo.checked)
  }

  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem
          divider={true}
          key={todo.id}
          secondaryAction={
            <IconButton 
            edge="end" 
            aria-label="delete"
            onClick={() => { handleDeleteListItem(todo.id)}}
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
              onChange={() => handleChange(todo)}
            />
          </ListItemIcon>
          <ListItemText primary={todo.text} />
        </ListItem>
      ))}
    </List>
  )
}

export default ListItems;