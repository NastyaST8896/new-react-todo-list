import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FiltersState = {
  current: 'all' | 'active' | 'completed';
};

const initialState = {
  current: 'all'
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    selectFilter: (state, action: PayloadAction<FiltersState['current']>) => {
      state.current = action.payload;
    }
  }
})

export const { selectFilter } = filtersSlice.actions;

export default filtersSlice.reducer;