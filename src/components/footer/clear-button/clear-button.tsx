import React from 'react';
import style from './clear-button.module.scss';
import {clearAllTodo} from '../../../app/todos-slice';
import {useAppDispatch} from '../../../app/types';

export const ClearButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(clearAllTodo());
  }

  return (
    <button className={style['clear-button']} onClick={handleClick}>
      CLEAR ALL
    </button>
  )
}