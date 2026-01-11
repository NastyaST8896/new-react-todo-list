import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../app/filtersSlice";
import {useMediaQuery, useTheme} from "@mui/material";

function FilterButtons() {
  const filter = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleClick = (filter) => () => dispatch(selectFilter(filter));
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ButtonGroup variant="outlined" size={isSmall ? "small" : "medium"} aria-label="Basic button group">
      <Button variant={filter === 'all' ? 'contained' : 'outlined'} onClick={handleClick('all')}>All</Button>
      <Button variant={filter === 'active' ? 'contained' : 'outlined'} onClick={handleClick('active')}>Active</Button>
      <Button variant={filter === 'completed' ? 'contained' : 'outlined'} onClick={handleClick('completed')}>Completed</Button>
    </ButtonGroup>
  );
}

export default FilterButtons