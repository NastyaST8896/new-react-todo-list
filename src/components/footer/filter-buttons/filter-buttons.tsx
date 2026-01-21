import React from 'react';
import {FiltersState, selectFilter} from '../../../app/filters-slice';
import {useAppDispatch, useAppSelector} from '../../../app/types';
import style from './filter-buttons.module.scss';
import cn from 'classnames';

export const FilterButtons: React.FC = () => {
  const currentFilter = useAppSelector((state) => state.filters)
  const dispatch = useAppDispatch();

  const handleClick = (filter: FiltersState['current']) => {
    dispatch(selectFilter(filter));
  }

  const getButtonVariant = (filter: FiltersState['current']) => {
    return cn(
      style['filter-button'],
      {[style['outlined']]: filter !== currentFilter.current},
      {[style['contained']]: filter === currentFilter.current}
    )
  };

  return (
    <div>
      <button
        className={getButtonVariant('all')}
        onClick={() => handleClick('all')}
      >
        ALL
      </button>

      <button
        className={getButtonVariant('active')}
        onClick={() => handleClick('active')}
      >
        ACTIVE
      </button>

      <button
        className={getButtonVariant('completed')}
        onClick={() => handleClick('completed')}
      >
        COMPLETED
      </button>
    </div>
  );
}