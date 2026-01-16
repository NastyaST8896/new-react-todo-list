import { useDispatch } from 'react-redux';
import { selectFilter } from '../../app/filtersSlice';
import { ButtonCustom } from '../button-custom/button-custom';


import { useTypedSelectorFilters } from '../../app/filtersSlice';

function FilterButtons() {
  const currentFilter = useTypedSelectorFilters((state) => state.filters)
  const dispatch = useDispatch();

  const handleClick = (filter: string) => dispatch(selectFilter(filter));

  const getButtonVariant = (filter: string) => {
    return filter === currentFilter ? 'contained' : 'outlined';
  };

  return (
    <div>
      <ButtonCustom
        variant={getButtonVariant('all')}
        onClick={() => handleClick('all')}
        text='ALL'
      />
      <ButtonCustom
        variant={getButtonVariant('active')}
        onClick={() => handleClick('active')}
        text='ACTIVE'
      />
      <ButtonCustom
        variant={getButtonVariant('completed')}
        onClick={() => handleClick('completed')}
        text='COMPLETED'
      />
    </div>
  );
}

export default FilterButtons