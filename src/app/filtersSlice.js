import {createSlice} from '@reduxjs/toolkit';

const initialState = 'all';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    selectFilter: (_, action) => action.payload
  }
})

export const {selectFilter} = filtersSlice.actions;

export default filtersSlice.reducer;