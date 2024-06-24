import { createSlice } from "@reduxjs/toolkit";
import { fetchItems, deleteItem } from "./contactOps";

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchItems.fulfilled, (state, { payload }) => {
        state.error = false;
        // console.dir(payload);
        state.items = payload;
        state.loading = false;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
    .addCase(deleteItem.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteItem.fulfilled, (state, { payload }) => {
        state.error = false;
        state.items = state.items.filter((el)=>el.id!==payload.id);
        state.loading = false;
      })
      .addCase(deleteItem.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  }
})

export const contactsReducer = contactsSlice.reducer; 

export const selectItems = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;




