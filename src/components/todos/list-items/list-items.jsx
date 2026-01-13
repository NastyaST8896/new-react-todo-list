import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';

import classNames from 'classnames';
import styles from './list-items.module.css';

import {useDispatch} from 'react-redux';
import {removeTodo, changeTodoChecked, changeTodoText} from '../../../app/todosSlice';
import {useRef, useState, useEffect} from 'react';

function ListItems({todo}) {
  const [editTodoId, setEditTodoId] = useState('');
  const[inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
      inputRef.current?.focus();
    }, [editTodoId]);

  const listItemClasses = classNames(styles['list-item'], {[styles['edited']]: todo.id === +editTodoId});
  
  const handleEditInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleDoubleClick = (event) => {
    setEditTodoId(event.target.id);
    setInputValue(todo.text);
  }

  const handleEditInputKeyDown = (event) => {
    if(event.key === 'Enter') {
      dispatch(changeTodoText({text: inputValue, id: editTodoId }));
      setEditTodoId('');
      setInputValue('');
    }

    if(event.key === 'Escape') {
      setEditTodoId('');
      setInputValue('');
    }
  }

  const handleCancelEdit = () => {
    setEditTodoId('');
    setInputValue('');
  }



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
            className={styles.typografy}
            textOverflow="ellipsis"
            overflow="hidden"
            id={todo.id}
          >
            {todo.text}
          </Typography>
        }
        onDoubleClick={handleDoubleClick}
      />
      
      <Input 
        className={styles['edited-input']} 
        sx={{display: 'none'}} 
        fullWidth={true}
        value={inputValue}
        inputRef={inputRef}
        onChange={handleEditInputChange}
        onKeyDown={handleEditInputKeyDown}
        onBlur={handleCancelEdit}
      />
    </ListItem>
  )
}

export default ListItems;