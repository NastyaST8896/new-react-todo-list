import style from './item-counters.module.scss';

import { useTypedSelectorTodos } from '../../../app/todosSlice';

function ItemCounters() {
  const todos = useTypedSelectorTodos((state) => state.todos.todos);

  let checkedItemsLength = todos.filter((todo) => {
    return todo.checked === true;
  }).length

  let leftItemsLength = todos.length - checkedItemsLength
  return (
    <div className={style['item-counters']} >
      <span>{leftItemsLength} {leftItemsLength === 1 ? "item" : "items"} left</span>
      <span>{checkedItemsLength} {checkedItemsLength === 1 ? "item" : "items"} checked</span>
    </div>
  )
}

export default ItemCounters