import React from 'react';
import {TypeTodo} from '../../../../app/todos-slice';
import {changeTodoChecked} from '../../../../app/todos-slice';
import CheckMark from '../../../../img/check-mark.svg';
import styles from './item-checkbox.module.scss';
import {useAppDispatch} from '../../../../app/types';

type ItemCheckboxProp = {
  todo: TypeTodo
}

export const ItemCheckbox: React.FC<ItemCheckboxProp> = (prop) => {
  const {todo} = prop;

  const dispatch = useAppDispatch();

  return (
    <div className={styles['checkbox-component']}>
      <input
        type="checkbox"
        checked={todo.checked}
        className={styles['li-checkbox']}
        onChange={() => {
          dispatch(changeTodoChecked(todo.id))
        }}
      />

      <div
        className={styles['checkbox-img']}
        onClick={() => {
          dispatch(changeTodoChecked(todo.id))
        }}
      >
        {todo.checked ? (
          <img
            className={styles['img']}
            src={CheckMark}
            alt="check mark"
          />
        ) : ''}
      </div>
    </div>
  )
}