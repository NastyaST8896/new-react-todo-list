import style from './item-counters.module.scss'

import { useSelector } from 'react-redux';

function ItemCounters() {
  const todos = useSelector((state) => state.todosArray.todos);

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