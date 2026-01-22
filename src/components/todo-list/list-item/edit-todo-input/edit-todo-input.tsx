import React from 'react';
import styled from 'styled-components';

type EditTodoInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.Ref<HTMLInputElement>;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const EditTodoInput: React.FC<EditTodoInputProps> = (props) => {
  const {
    value,
    onChange,
    onKeyDown,
    inputRef,
    onBlur
  } = props

  return (
    <StyledEditTodoInput
      value={value}
      ref={inputRef}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  )
}

const StyledEditTodoInput = styled.input`
  width: 100%;
  padding: 10px;
  font-family: "Bentham", serif;
  font-weight: 300;
  font-size: 18px;
  border: none;
  border-radius: 2px;
  outline: ${props => props.theme.colors.hTransparentMermaidKiss} solid 1px;
  background-color: transparent;
  box-shadow: inset -2px -2px 8px ${
  props => props.theme.colors.hTransparentMermaidKiss
  },
  inset -2px -2px 12px ${props => props.theme.colors.hTransparentMermaidKiss},
  inset 2px 2px 4px ${props => props.theme.colors.hTransparentMermaidKiss},
  inset 2px 2px 8px ${props => props.theme.colors.lTransparentMermaidKiss};
`;