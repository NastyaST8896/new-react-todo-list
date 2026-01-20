import React from 'react';
import {ListItem} from './list-item/list-item';
import { selectTodosByFilter } from '../../app/selector';

import styles from './todo-list.module.scss';
import {useAppSelector} from '../../app/types';

export const TodoList: React.FC = () => {
  const todos = useAppSelector(selectTodosByFilter);

  return (
        <div className={styles.container}>
          <ul className={styles['todo-list']}>
            {todos?.map((todo) => <ListItem key={todo.id} todo={todo} />)}
          </ul>
        </div>
  )
}


