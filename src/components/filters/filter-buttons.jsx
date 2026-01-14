import {useDispatch, useSelector} from "react-redux";
import {selectFilter} from "../../app/filtersSlice";
import { ButtonCustom } from '../button-custom/button-custom';

function FilterButtons() {
  const currentFilter = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleClick = (filter) => dispatch(selectFilter(filter));

  const getButtonVariant = (filter) => {
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