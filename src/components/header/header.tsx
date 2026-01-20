import React from 'react';
import {AddingInput} from './adding-input/adding-input';
import styled from 'styled-components';

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

const StyledHeader = styled.header`
  margin: 40px 0;
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