import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: '',
  },
  reducers: {
    changeFilterText(state, { payload }) {
      state.name = payload;
    },
  },
});

export const filtersReducer = filterSlice.reducer
export const { changeFilterText } = filterSlice.actions
export const selectValue = (state) => state.name;

