import InputCustom from '../../input-custom/input-custom';

import {useRef, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo, checkAllTodo} from '../../../app/todosSlice';

import ArrowDown from '../../../img/arrow-down.svg'
import style from './adding-input.module.scss'

function AddingInput() {
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
      dispatch(addTodo(inputValue.trim()));
        setInputValue("");
    }
  }

  const handleClickArrowButton = (event) => {
    dispatch(checkAllTodo());
  }

  return (
    <div>
    <button className={style['arrow-down-button']} onClick={handleClickArrowButton}>
      <img src={ArrowDown}></img>
    </button>

    <InputCustom
        type='text'
        variant="adding-input"
        placeholder="add a new todo"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        inputRef={inputRef}
      />
    </div>
  )
}

export default AddingInput