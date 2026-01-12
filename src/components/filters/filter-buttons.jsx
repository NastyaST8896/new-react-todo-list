import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import {useDispatch, useSelector} from "react-redux";
import {selectFilter} from "../../app/filtersSlice";
import {useMediaQuery, useTheme} from "@mui/material";

function FilterButtons() {
  const currentFilter = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleClick = (filter) => dispatch(selectFilter(filter));
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const getButtonVariant = (filter) => {
    return filter === currentFilter ? 'contained' : 'outlined';
  };

  return (
    <ButtonGroup size={isSmall ? "small" : "medium"} aria-label="Basic button group">
      <Button
        variant={getButtonVariant('all')}
        onClick={() => handleClick('all')}>All</Button>
      <Button
        variant={getButtonVariant('active')}
        onClick={() => handleClick('active')}>Active</Button>
      <Button
        variant={getButtonVariant('completed')}
        onClick={() => handleClick('completed')}>Completed</Button>
    </ButtonGroup>
  );
}

export default FilterButtons