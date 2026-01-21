import React from 'react';
import {ItemsCounters} from './items-counters/items-counters';
import {FilterButtons} from './filter-buttons/filter-buttons';
import {ClearButton} from './clear-button/clear-button';
import styled from 'styled-components';

export const Footer:React.FC = () => {
  return (
    <StyledFooter>
      <ItemsCounters />
      <FilterButtons />
      <ClearButton />
    </StyledFooter>
  )
 
}

const StyledFooter = styled.footer`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;