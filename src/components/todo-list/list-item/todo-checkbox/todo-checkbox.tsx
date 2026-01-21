import React from 'react';
import {TypeTodo} from '../../../../app/todos-slice';
import {changeTodoChecked} from '../../../../app/todos-slice';
import CheckMark from '../../../../img/check-mark.svg';
import {useAppDispatch} from '../../../../app/types';
import styled from 'styled-components';

type ItemCheckboxProp = {
  todo: TypeTodo
}

export const TodoCheckbox: React.FC<ItemCheckboxProp> = (prop) => {
  const {todo} = prop;

  const dispatch = useAppDispatch();

  return (
    <>
      {todo.checked ?
        <StyledTodoCheckboxChecked
        onClick={() => {
          dispatch(changeTodoChecked(todo.id))
        }}
        >
          <img
            className='check-mark'
            src={CheckMark}
            alt="check mark"
          />
        </StyledTodoCheckboxChecked>
      :
        <StyledTodoCheckbox
        type="checkbox"
        checked={todo.checked}
        onChange={() => {
          dispatch(changeTodoChecked(todo.id))
        }}
        />
      }
    </>
  )
}

const StyledTodoCheckbox = styled.input`
  width: 22px;
  height: 22px;
  box-shadow: inset 0 0 5px hsla(160, 46%, 30%, 0.3);
  outline: 1px solid #3ca280;
  appearance: none;
  cursor: pointer;
`;

const StyledTodoCheckboxChecked = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #3ca280;
  cursor: pointer;
  margin: 2px 2px 2px 3px;

  .check-mark {
    width: 22px;
    height: 22px;
  }
`;