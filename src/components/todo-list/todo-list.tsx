import React from 'react';
import {ListItem} from './list-item/list-item';
import { selectTodosByFilter } from '../../app/selector';
import styled from 'styled-components';
import {useAppSelector} from '../../app/types';

export const TodoList: React.FC = () => {
  const todos = useAppSelector(selectTodosByFilter);

  return (
        <StyledMain>
          <ul className='todo-list'>
            {todos?.map((todo) => <ListItem key={todo.id} todo={todo} />)}
          </ul>
        </StyledMain>
  )
}

const StyledMain = styled.main`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;

  .todo-list {
    padding: 0 16px;
  }
`;
