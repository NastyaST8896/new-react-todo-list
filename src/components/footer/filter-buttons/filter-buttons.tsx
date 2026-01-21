import React from 'react';
import {FiltersState, selectFilter} from '../../../app/filters-slice';
import {useAppDispatch, useAppSelector} from '../../../app/types';
import styled from 'styled-components';

const StyledFilterButton = styled.button<{$primary: boolean;}>`
  border: 1px solid #4cd5a7;
  border-radius: 2px;
  padding: 10px;
  font-family: "Bentham", serif;
  font-weight: 500;
  font-size: 16px;
  color: #2f7d63;
  background-color: ${(props) => props.$primary ? '#3ca280' :'#f5f5dc'};

  &:hover {
    background-color: #4cd5a718;
  }
  
  @media (max-width: 768px) {
  padding: 8px;
  }
`;

export const FilterButtons: React.FC = () => {
  const currentFilter = useAppSelector((state) => state.filters)
  const dispatch = useAppDispatch();

  const handleClick = (filter: FiltersState['current']) => {
    dispatch(selectFilter(filter));
  }

  const getButtonVariant = (filter: FiltersState['current']) => {
    if(filter === currentFilter.current) {
      return true
    } else {
      return false
    }
  };

  return (
    <div>
      <StyledFilterButton
        $primary={getButtonVariant('all')}
        onClick={() => handleClick('all')}
      >
        ALL
      </StyledFilterButton>

      <StyledFilterButton
        $primary={getButtonVariant('active')}
        onClick={() => handleClick('active')}
      >
        ACTIVE
      </StyledFilterButton>

      <StyledFilterButton
        $primary={getButtonVariant('completed')}
        onClick={() => handleClick('completed')}
      >
        COMPLETED
      </StyledFilterButton>
    </div>
  );
}