import React from 'react';
import style from './item-counters.module.scss';
import cn from 'classnames';
import {useAppSelector} from '../../../app/types';

export const ItemCounters: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);

  let checkedItemsLength = todos.filter((todo) => {
    return todo.checked === true;
  }).length

  let leftItemsLength = todos.length - checkedItemsLength
  return (
    <div className={cn(style['item-counters'])} >
      <span>
        {leftItemsLength} 
        {leftItemsLength === 1 ? " item" : " items"} left</span>
      <span>
        {checkedItemsLength} 
        {checkedItemsLength === 1 ? " item" : " items"} checked</span>
    </div>
  )
}