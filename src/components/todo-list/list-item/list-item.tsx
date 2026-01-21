import styled from 'styled-components';

import {
  removeTodo,
  changeTodoText
} from '../../../app/todos-slice';

import React, {useRef, useState, useEffect} from 'react';
import {EditTodoInput} from './edit-todo-input/edit-todo-input';
import {DeleteButton} from './delete-button/delete-button'

import {TypeTodo} from '../../../app/todos-slice'
import {useAppDispatch} from "../../../app/types";
import {TodoCheckbox} from './todo-checkbox/todo-checkbox';

const StyledListItem = styled.li`
  user-select: none;
  list-style-type: none;
  border-bottom: 1px solid #4cd5a7;
  box-shadow: 0px 6px 8px rgba(28, 82, 62, 0.3);
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;

const StyledListItemInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  max-width: 690px;
  width: 90%;

  .item-info-text {
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "Bentham", serif;
    font-weight: 500;
    font-size: 18px;
    margin: 0 0 0 10px;
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 80%;

    .item-info-text {
      width: 90%;
    }
  }
`;

type ListItemProps = {
  todo: TypeTodo
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  const {todo} = props;

  const [editTodoId, setEditTodoId] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    inputRef.current?.focus();
  }, [editTodoId]);

  const handleEditInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(event.target.value);
  }

  const handleDoubleClick = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    setEditTodoId(true);
    setInputValue(todo.text.trim());
  }

  const handleEditInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      dispatch(changeTodoText({
        text: inputValue,
        id: todo.id,
        checked: todo.checked
      }));
      setEditTodoId(false);
      setInputValue('');
    }

    if (event.key === 'Escape') {
      setEditTodoId(false);
      setInputValue('');
    }
  }

  const handleCancelEdit = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setEditTodoId(false);
    setInputValue('');
  }

  return (
    <StyledListItem>
      <StyledListItemInfo>
        <TodoCheckbox todo={todo} />

        {
          editTodoId ?
            <EditTodoInput
              value={inputValue}
              inputRef={inputRef}
              onChange={handleEditInputChange}
              onKeyDown={handleEditInputKeyDown}
              onBlur={handleCancelEdit}
            />
            :
            <p
              className='item-info-text'
              onDoubleClick={handleDoubleClick}
            >
              {todo.text}
            </p>
        }
      </StyledListItemInfo>

      <DeleteButton
        onClick={() => dispatch(removeTodo(todo.id))}
      />
    </StyledListItem>
  )
}