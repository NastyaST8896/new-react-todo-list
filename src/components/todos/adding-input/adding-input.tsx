import InputCustom from '../../input-custom/input-custom';

import { useRef, useState, useEffect } from 'react';
import { addTodo, checkAllTodo } from '../../../app/todos-slice';
import React from "react";

import ArrowDown from '../../../img/arrow-down.svg';
import style from './adding-input.module.scss';
import {useAppDispatch} from "../../../app/types";

function AddingInput() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <button className={style['arrow-down-button']} onClick={handleClickArrowButton}>
        <img src={ArrowDown} alt='all checked'></img>
      </button>

      <InputCustom
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