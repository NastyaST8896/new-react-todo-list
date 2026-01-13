import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { clearAllTodo } from '../../app/todosSlice';

function ClearButton () {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearAllTodo());
    }

    return <Button onClick={handleClick}  variant='outlined'>Clear all</Button>
}

export default ClearButton;