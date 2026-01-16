import AddingInput from '../adding-input/adding-input';
import ListItems from '../list-items/list-items';
import ItemCounters from '../../filters/item-counters/item-counters';
import FilterButtons from '../../filters/filter-buttons';
import { useSelector } from 'react-redux';
import { selectTodosByFilter } from '../../../app/selector';
import ClearButton from '../clear-button';
import { Todo } from '../../../app/todosSlice';

import styles from './todo-list.module.scss';

function TodoList() {
  const todos = useSelector(selectTodosByFilter);

  return (

    <div>
      <header className={styles['header']}>
        <div className={styles['container']}>
          <h1>todos</h1>
        </div>
      </header>


      <main className={styles['main']}>
        <div className={styles['container']}>
          <div className={styles['adding-input-container']}>
            <AddingInput />
          </div>

          <ul>
            {todos?.map((todo: Todo) => <ListItems key={todo.id} {...todo} />)}
          </ul>

          <div className={styles['filters']}>
            <div className={styles['filters-item']}>
              <ItemCounters />
            </div>

            <div className={styles['filters-item']}>
              <FilterButtons />
            </div>

            <div className={styles['filters-item']}>
              <ClearButton />
            </div>

          </div>
        </div>
      </main>

    </div>
  )
}

export default TodoList