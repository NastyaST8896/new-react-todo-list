import React, {useRef, useState, useEffect} from 'react';
import {addTodo, checkAllTodo} from '../../../app/todos-slice';

import ArrowDown from '../../../img/arrow-down.svg';
import {useAppDispatch} from '../../../app/types';

import styled from 'styled-components';

const StyledArrowDownButton = styled.button`
  position: absolute;
  border: 1px solid #4dd6a81a;
  border-radius: 2px;
  padding: 8px;
  font-family: "Bentham", serif;
  font-weight: 500;
  font-size: 16px;
  color: #2f7d63;
  line-height: 0;
  box-shadow: 2px 2px 4px rgba(77, 214, 168, 0.1),
  2px 2px 8px rgba(28, 82, 62, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledAddTodoInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 50px;
  font-family: "Bentham", serif;
  font-weight: 300;
  font-size: 18px;
  border: none;
  border-radius: 2px;
  outline: rgba(77, 214, 168, 0.1) solid 1px;
  background-color: transparent;
  box-shadow: 2px 2px 4px rgba(77, 214, 168, 0.1),
  2px 2px 8px rgba(28, 82, 62, 0.3);
`;

export const AddingInput: React.FC = () => {
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
    <>
      <StyledArrowDownButton
        onClick={handleClickArrowButton}
      >
        <img src={ArrowDown} alt="arrow down"></img>
      </StyledArrowDownButton>

      <StyledAddTodoInput
        placeholder="add a new todo"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
    </>
  )
}