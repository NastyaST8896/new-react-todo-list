import React from 'react';
import style from './edited-input.module.scss'

type EditedInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.Ref<HTMLInputElement>;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export const EditedInput: React.FC<EditedInputProps> = (props) => {
  const {
    value,
    onChange,
    onKeyDown,
    inputRef,
    onBlur
  } = props

  return (
    <input
      className={style['edited-input']}
      value={value}
      ref={inputRef}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  )
}