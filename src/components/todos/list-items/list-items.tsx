import classNames from 'classnames';
import styles from './list-items.module.scss';

import { useDispatch } from 'react-redux';
import { removeTodo, changeTodoChecked, changeTodoText } from '../../../app/todosSlice';
import { useRef, useState, useEffect } from 'react';
import InputCustom from '../../input-custom/input-custom';
import CheckMark from '../../../img/check-mark.svg'
import DeleteIcon from '../../../img/delete.svg'

import { Todo } from '../../../app/todosSlice'

function ListItems(todo: Todo) {
  const [editTodoId, setEditTodoId] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current?.focus();
  }, [editTodoId]);

  const listItemClasses = classNames(styles['list-item'], { [styles['edited']]: todo.id === +editTodoId });

  const handleEditInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleDoubleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const editTodoId = +(event.target as HTMLInputElement).id;
    setEditTodoId(editTodoId);
    setInputValue(todo.text.trim());
  }

  const handleEditInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(changeTodoText({ text: inputValue, id: editTodoId, checked: todo.checked }));
      setEditTodoId(0);
      setInputValue('');
    }

    if (event.key === 'Escape') {
      setEditTodoId(0);
      setInputValue('');
    }
  }

  const handleCancelEdit = () => {
    setEditTodoId(0);
    setInputValue('');
  }

  return (
    <li
      className={listItemClasses}
    >
      <div className={styles['li-components']}>
        <div className={styles['li-components-info']}>
          <div className={styles['checkbox-component']}>
            <input
              type='checkbox'
              checked={todo.checked}
              className={styles['li-checkbox']}
              onChange={() => {
                dispatch(changeTodoChecked(todo.id))
              }}
            />

            <div
              className={styles['checkbox-img']}
              onClick={() => { dispatch(changeTodoChecked(todo.id)) }}
            >
              {todo.checked ? (
                <img
                  className={styles['img']}
                  src={CheckMark}
                  alt="checked"
                />
              ) : ''}
            </div>
          </div>

          <div className={styles['li-text-component']}>
            <p
              className={styles['li-text']}
              onDoubleClick={handleDoubleClick}
              id={String(todo.id)}
            >
              {todo.text}
            </p>
          </div>

          <InputCustom
            variant='edited-input'
            active={todo.id === +editTodoId ? true : false}
            value={inputValue}
            inputRef={inputRef}
            onChange={handleEditInputChange}
            onKeyDown={handleEditInputKeyDown}
            onBlur={handleCancelEdit}
          />
        </div>

        <div className={styles['button-component']}>
          <button className={styles['delete-button']} onClick={() => {
            dispatch(removeTodo(todo.id))
          }}>
            <img src={DeleteIcon} alt="delete" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default ListItems;