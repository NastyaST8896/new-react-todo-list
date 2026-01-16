import { ButtonCustom } from '../button-custom/button-custom';

import { useDispatch } from 'react-redux';
import { clearAllTodo } from '../../app/todosSlice';

function ClearButton() {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearAllTodo());
    }

    return <ButtonCustom onClick={handleClick} variant='outlined' text='CLEAR ALL' />
}

export default ClearButton;