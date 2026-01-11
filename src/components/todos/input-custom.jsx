import TextField from '@mui/material/TextField';

import {useRef, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, changeTodoText, findCurrentTodo} from '../../app/todosSlice';

function InputCustom() {
  const [inputValue, setInputValue] = useState("");
  const editTodo = useSelector(state => state.todosArray.editTodo);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();

    if (editTodo) {
      setInputValue(editTodo.text);
    }
  }, [editTodo]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      editTodo ? dispatch(changeTodoText(inputValue)) : dispatch(addTodo(inputValue));
      setInputValue("");
    }

    if (event.key === "Escape") {
      dispatch(findCurrentTodo(null));
      setInputValue("");
    }
  }

  const handleCancelEdit = (event) => {
    dispatch(findCurrentTodo(null));
    setInputValue("");
  }

  return (
    <TextField
      autoComplete="off"
      id="outlined-basic"
      placeholder="add a new todo"
      variant="outlined"
      fullWidth
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      onBlur={handleCancelEdit}
      inputRef={inputRef}
    />
  )
}

export default InputCustom