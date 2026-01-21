import React from 'react';
import {clearAllTodo} from '../../../app/todos-slice';
import {useAppDispatch} from '../../../app/types';

import styled from 'styled-components';
import { theme } from '../../../color-styles';

export const ClearButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(clearAllTodo());
  }

  return (
    <StyledClearButton onClick={handleClick}>
      CLEAR ALL
    </StyledClearButton>
  )
}

const StyledClearButton = styled.button`
  border: 1px solid ${theme.colors.border};
  border-radius: 2px;
  padding: 10px;
  font-family: "Bentham", serif;
  font-weight: 500;
  font-size: 16px;
  color: ${theme.colors.color};

  &:hover {
    background-color: ${theme.colors.hover};
  }
`;