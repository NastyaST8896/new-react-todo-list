import {FiltersState, selectFilter} from '../../app/filters-slice';
import { ButtonCustom } from '../button-custom/button-custom';
import {useAppDispatch, useAppSelector} from "../../app/types";

function FilterButtons() {
  const currentFilter = useAppSelector((state) => state.filters)
  const dispatch = useAppDispatch();

  const handleClick = (filter: FiltersState['current']) => dispatch(selectFilter(filter));

  const getButtonVariant =(filter: FiltersState['current']) => {
    return filter === currentFilter.current ? 'contained' : 'outlined';
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