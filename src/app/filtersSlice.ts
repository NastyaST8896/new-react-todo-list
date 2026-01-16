import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

interface RootStateFilters { filters: string }

const initialState = 'all';

export const useTypedSelectorFilters: TypedUseSelectorHook<RootStateFilters> = useSelector;

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    selectFilter: (_, action: PayloadAction<string>) => action.payload
  }
})

export const { selectFilter } = filtersSlice.actions;

export default filtersSlice.reducer;