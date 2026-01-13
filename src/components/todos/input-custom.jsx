import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {useRef, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo, checkAllTodo} from '../../app/todosSlice';

function InputCustom() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      dispatch(addTodo(inputValue));
        setInputValue("");
    }
  }

  const handleClickArrowButton = (event) => {
    dispatch(checkAllTodo());
  }

  return (
    <Paper>
      <IconButton onClick={handleClickArrowButton}>
        <KeyboardArrowDownIcon />
      </IconButton>

      <InputBase
        autoComplete="off"
        id="outlined-basic"
        placeholder="add a new todo"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        // onBlur={handleCancelEdit}
        inputRef={inputRef}
      />
    </Paper>
  )
}

export default InputCustom