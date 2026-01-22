import React from 'react';
import DeleteIcon from '../../../../img/delete.svg';
import styled from 'styled-components';

type DeleteButtonProp = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const DeleteButton: React.FC<DeleteButtonProp> = (props) => {
  const {onClick} = props;
  return (
    <StyledDeleteButton
      onClick={onClick}
    >
      <StyledDeleteButtonImg
        src={DeleteIcon}
        alt="trash can" />
    </StyledDeleteButton>
  )
}

const StyledDeleteButton = styled.button`
  width: 36px;
  height: 36px;
  border: 1px solid transparent;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    border: 1px solid ${props => props.theme.colors.limeGreen};
  }
`;

const StyledDeleteButtonImg = styled.img`
  width: 100%;
  object-fit: contain;
`;