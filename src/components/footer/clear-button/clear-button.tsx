import React from 'react';
import {clearAllTodo} from '../../../app/todos-slice';
import {useAppDispatch} from '../../../app/types';

import styled from 'styled-components';

const StyledClearButton = styled.button`
  border: 1px solid #4cd5a7;
  border-radius: 2px;
  padding: 10px;
  font-family: "Bentham", serif;
  font-weight: 500;
  font-size: 16px;
  color: #2f7d63;

  &:hover {
    background-color: #4cd5a718;
  }
`;

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