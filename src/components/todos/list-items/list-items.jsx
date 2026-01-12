import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import classNames from 'classnames';
import styles from './list-items.module.css';

import {useSelector, useDispatch} from 'react-redux';
import {removeTodo, changeTodoChecked, findCurrentTodo} from '../../../app/todosSlice';

function ListItems({todo}) {
  const editTodo = useSelector(state => state.todosArray.editTodo);
  const dispatch = useDispatch();

  const listItemClasses = classNames(styles['list-item'], {[styles['edited']]: todo.id === editTodo?.id});

  return (
    <ListItem
      divider={true}
      key={todo.id}
      className={listItemClasses}
      secondaryAction={
        <IconButton
          color="info"
          edge="end"
          aria-label="delete"
          onClick={() => {
            dispatch(removeTodo(todo.id))
          }}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={todo.checked}
          sx={{"& .MuiSvgIcon-root": {fontSize: 28}}}
          onChange={() => {
            dispatch(changeTodoChecked(todo.id))
          }}
        />
      </ListItemIcon>
      <ListItemText
        primary={
          <Typography
            color={editTodo?.id === todo.id ? "textDisabled" : ""}
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {todo.text}
          </Typography>
        }
        onDoubleClick={() => {
          dispatch(findCurrentTodo(todo))
        }}
      />
    </ListItem>
  )
}

export default ListItems;