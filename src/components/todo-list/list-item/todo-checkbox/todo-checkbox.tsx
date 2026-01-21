import React from 'react';
import {TypeTodo} from '../../../../app/todos-slice';
import {changeTodoChecked} from '../../../../app/todos-slice';
import CheckMark from '../../../../img/check-mark.svg';
import styles from './todo-checkbox.module.scss';
import {useAppDispatch} from '../../../../app/types';

type ItemCheckboxProp = {
  todo: TypeTodo
}

export const TodoCheckbox: React.FC<ItemCheckboxProp> = (prop) => {
  const {todo} = prop;

  const dispatch = useAppDispatch();

  return (
    <>
      {todo.checked ?
        <div
        className={styles['todo-checkbox--checked']}
        onClick={() => {
          dispatch(changeTodoChecked(todo.id))
        }}
        >
          <img
            className={styles['check-mark']}
            src={CheckMark}
            alt="check mark"
          />
        </div>
      :
        <input
        type="checkbox"
        checked={todo.checked}
        className={styles['todo-checkbox']}
        onChange={() => {
          dispatch(changeTodoChecked(todo.id))
        }}
        />
      }
    </>
  )
}