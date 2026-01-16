import AddingInput from '../adding-input/adding-input';
import ListItems from '../list-items/list-items';
import ItemCounters from '../../filters/item-counters/item-counters';
import FilterButtons from '../../filters/filter-buttons';
import { useSelector } from 'react-redux';
import { selectTodosByFilter } from '../../../app/selector';
import ClearButton from '../clear-button';
import { Todo } from '../../../app/todosSlice';

import styles from './todo-list.module.scss';
import styled from 'styled-components';

const TodoList: React.FC = () => {
  const todos = useSelector(selectTodosByFilter);

  return (

    <StyledWrapper>
      <StyledHeader className="todo-list__header">
        <div className={styles['container']}>
          <h1>todos</h1>
        </div>
      </StyledHeader>


      <main className={styles['main']}>
        <div className={styles['container']}>
          <div className={styles['adding-input-container']}>
            <AddingInput />
          </div>

          <ul>
            {todos?.map((todo) => <ListItems key={todo.id} todo={todo} />)}
          </ul>

          <div className={styles['filters']}>
            <ItemCounters className={styles['filters-item']} />
            <FilterButtons />
            <ClearButton />
          </div>
        </div>
      </main>

    </StyledWrapper>
  )
}

const StyledWrapper = styled.main`
  background-color: tomato;

  .todo-list__header {
   color: blue;
  }
`;

const StyledHeader = styled.header`
  margin: 40px 0;
  color: #2f7d63;
`;

export default TodoList


