import React from 'react';
import {FiltersState, selectFilter} from '../../../app/filters-slice';
import {useAppDispatch, useAppSelector} from '../../../app/types';
import styled from 'styled-components';

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

const StyledFilterButton = styled.button<{$primary: boolean;}>`
  border: 1px solid ${props => props.theme.colors.LightLimeGreen};
  border-radius: 2px;
  padding: 10px;
  font-family: "Bentham", serif;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.colors.darkLimeGreen};
  background-color: ${(props) => props.$primary ? 
  props.theme.colors.limeGreen :
  props.theme.colors.beige};

  &:hover {
    background-color: ${props => props.theme.colors.transparentLimeGreen};
  }
  
  @media (max-width: 768px) {
  padding: 8px;
  }
`;