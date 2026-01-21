import styles from './list-item.module.scss';

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
    <li className={styles['list-item']}>
      <div className={styles['list-item-info']}>
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
              className={styles['item-info-text']}
              onDoubleClick={handleDoubleClick}
            >
              {todo.text}
            </p>
        }
      </div>

      <DeleteButton
        onClick={() => dispatch(removeTodo(todo.id))}
      />
    </li>
  )
}