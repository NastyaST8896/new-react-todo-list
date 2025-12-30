import { useRef, useState, useEffect } from "react";
import { TextField } from '@mui/material';
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";

function InputCustom() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();


  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (inputValue.trim() !== '') {
        dispatch(addTodo(inputValue))
        setInputValue('');
      }

    }
  }

  return (
    <TextField
      id="outlined-basic"
      placeholder='add a new todo'
      variant="outlined"
      fullWidth
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
      inputRef={inputRef} />
  )
}

export default InputCustom