import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import './filter-buttons.css'



function FilterButtons() {
    return (

        <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Button className='all'>All</Button>
            <Button className='active'>Active</Button>
            <Button className='completed'>Completed</Button>
        </ButtonGroup>
    )
}

export default FilterButtons