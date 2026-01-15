import classNames from 'classnames';
import styles from './list-items.module.scss';

import {useDispatch} from 'react-redux';
import {removeTodo, changeTodoChecked, changeTodoText} from '../../../app/todosSlice';
import {useRef, useState, useEffect} from 'react';
import InputCustom from '../../input-custom/input-custom';
import CheckMark from '../../../img/check-mark.svg'
import DeleteIcon from '../../../img/delete.svg'

function ListItems({todo}) {
  const [editTodoId, setEditTodoId] = useState('');
  const[inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
      inputRef.current?.focus();
    }, [editTodoId]);

  const listItemClasses = classNames(styles['list-item'], {[styles['edited']]: todo.id === +editTodoId});
  
  const handleEditInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleDoubleClick = (event) => {
    setEditTodoId(event.target.id);
    setInputValue(todo.text.trim());
  }

  const handleEditInputKeyDown = (event) => {
    if(event.key === 'Enter') {
      dispatch(changeTodoText({text: inputValue, id: editTodoId }));
      setEditTodoId('');
      setInputValue('');
    }

    if(event.key === 'Escape') {
      setEditTodoId('');
      setInputValue('');
    }
  }

  const handleCancelEdit = () => {
    setEditTodoId('');
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
            {todo.checked? (
            <img 
            className={styles['img']} 
            src={CheckMark} 
            alt="checked" 
            />
            ) : ''}
            </div>
          </div>

          <p 
          className={styles['li-text']} 
          onDoubleClick={handleDoubleClick} 
          id={todo.id} 
          >
            {todo.text}
          </p>

          <InputCustom 
          variant='edited-input'
          active={todo.id === +editTodoId ? 'true' : 'false'}
          value={inputValue}
          inputRef={inputRef}
          onChange={handleEditInputChange}
          onKeyDown={handleEditInputKeyDown}
          onBlur={handleCancelEdit}
        /> 
        </div>
        
        <button className={styles['delete-button']} onClick={() => {
            dispatch(removeTodo(todo.id))
          }}><img src={DeleteIcon} alt="delete" /></button>
      </div>
    </li>
  )
}

export default ListItems;