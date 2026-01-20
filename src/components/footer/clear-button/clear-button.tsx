import React from 'react';

import { ButtonCustom } from '../../button-custom/button-custom';

import { clearAllTodo } from '../../../app/todos-slice';
import {useAppDispatch} from '../../../app/types';

export const ClearButton:React.FC = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(clearAllTodo());
    }

    return <ButtonCustom 
           onClick={handleClick} 
           variant='outlined' 
           text='CLEAR ALL' />
}