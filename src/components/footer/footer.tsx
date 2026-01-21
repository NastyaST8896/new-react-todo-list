import React from 'react';
import {ItemCounters} from './item-counters/item-counters';
import {FilterButtons} from './filter-buttons/filter-buttons';
import {ClearButton} from './clear-button/clear-button';
import style from './footer.module.scss'

export const Footer:React.FC = () => {
  return (
    <footer className={style['footer']}>
      <ItemCounters />
      <FilterButtons />
      <ClearButton />
    </footer>
  )
 
}