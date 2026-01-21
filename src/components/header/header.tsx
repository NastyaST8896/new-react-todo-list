import React from 'react';
import {AddingInput} from './adding-input/adding-input';
import styled from 'styled-components';

const StyledHeader = styled.header`
    color: #2f7d63;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 16px;
`;

const StyledContainer = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <h1>todos</h1>
      </StyledContainer>

      <AddingInput />
    </StyledHeader>
  )
}