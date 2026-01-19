import { ButtonCustom } from '../button-custom/button-custom';

import { clearAllTodo } from '../../app/todos-slice';
import {useAppDispatch} from "../../app/types";

function ClearButton() {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(clearAllTodo());
    }

    return <ButtonCustom onClick={handleClick} variant='outlined' text='CLEAR ALL' />
}

export default ClearButton;