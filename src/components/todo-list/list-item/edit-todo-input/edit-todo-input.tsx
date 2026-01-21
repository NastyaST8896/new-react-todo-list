import React from 'react';
import style from './edit-todo-input.module.scss'

type EditedInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.Ref<HTMLInputElement>;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const EditTodoInput: React.FC<EditedInputProps> = (props) => {
  const {
    value,
    onChange,
    onKeyDown,
    inputRef,
    onBlur
  } = props

  return (
    <input
      className={style['edit-todo-input']}
      value={value}
      ref={inputRef}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  )
}