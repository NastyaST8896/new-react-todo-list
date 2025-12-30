import './item-counters.css'
import { useSelector } from 'react-redux';

function ItemCounters() {
  const todos = useSelector((state) => state.todosArray.todos);

  let checkedItemsLength = todos.filter((todo) => {
    return todo.checked === true
  }).length
  return (
    <div className="item-counters">
        <span>{todos.length - checkedItemsLength} {(todos.length - checkedItemsLength) === 1 ? 'item' : 'items'} left</span>
        <span>{checkedItemsLength} {checkedItemsLength === 1 ? 'item' : 'items'} checked</span>
    </div>
  )
}

export default ItemCounters