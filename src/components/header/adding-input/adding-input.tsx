import React, { useRef, useState, useEffect } from 'react';
import { addTodo, checkAllTodo } from '../../../app/todos-slice';

import ArrowDown from '../../../img/arrow-down.svg';
import styles from './adding-input.module.scss';
import {useAppDispatch} from '../../../app/types';

export const AddingInput:React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      dispatch(addTodo(inputValue.trim()));
      setInputValue("");
    }
  }

  const handleClickArrowButton = () => {
    dispatch(checkAllTodo());
  }

  return (
    <div>
      <button 
      className={styles['arrow-down-button']} 
      onClick={handleClickArrowButton}
      >
        <img src={ArrowDown} alt='arrow down'></img>
      </button>

      <input
        className={styles['adding-input']}
        placeholder="add a new todo"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
    </div>
  )
}