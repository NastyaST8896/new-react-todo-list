import React from 'react';
import DeleteIcon from '../../../../img/delete.svg';
import style from './delete-button.module.scss'

type DeleteButtonProp = {
  onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const DeleteButton:React.FC<DeleteButtonProp> = (prop) => {
  const {onClick} = prop;
  return (
    <button 
        className={style['delete-button']} 
        onClick={onClick}
        >
          <img
          className={style['delete-button-img']}
          src={DeleteIcon} 
          alt="trash can" />
        </button>
  )
}