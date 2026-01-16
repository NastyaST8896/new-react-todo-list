import style from './item-counters.module.scss';
import cn from 'classnames';

import { useTypedSelectorTodos } from '../../../app/todosSlice';

type Props = {
  className?:string;
}

const ItemCounters: React.FC<Props> = (props) => {
  const todos = useTypedSelectorTodos((state) => state.todos.todos);

  let checkedItemsLength = todos.filter((todo) => {
    return todo.checked === true;
  }).length

  let leftItemsLength = todos.length - checkedItemsLength
  return (
    <div className={cn(style['item-counters'], props.className)} >
      <span>{leftItemsLength} {leftItemsLength === 1 ? "item" : "items"} left</span>
      <span>{checkedItemsLength} {checkedItemsLength === 1 ? "item" : "items"} checked</span>
    </div>
  )
}

export default ItemCounters