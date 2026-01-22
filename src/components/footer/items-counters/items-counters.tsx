import React from 'react';
import {useAppSelector} from '../../../app/types';
import styled from 'styled-components';

export const ItemsCounters: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);

  let checkedItemsLength = todos.filter((todo) => {
    return todo.checked === true;
  }).length

  let leftItemsLength = todos.length - checkedItemsLength
  return (
    <StyledItemsCounters>
      <StyledCounter>
        {leftItemsLength}
        {leftItemsLength === 1 ? " item" : " items"} left</StyledCounter>
      <StyledCounter>
        {checkedItemsLength}
        {checkedItemsLength === 1 ? " item" : " items"} checked</StyledCounter>
    </StyledItemsCounters>
  )
}

const StyledItemsCounters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 160px;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const StyledCounter = styled.span`
  color: ${props => props.theme.colors.darkLimeGreen};
`;