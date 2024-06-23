import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchItems } from "./contactOps";
import { selectValue } from "./filtersSlice";

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
        state.items = payload.items;
        state.loading = false;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  }
})

export const contactsReducer = contactsSlice.reducer; 
export const selectItems = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectItems, selectValue],
  (contacts, filter) => {
    return contacts.filter((el)=>el.name.toLowerCase().includes(filter.toLowerCase()))
  }
)

// export const selectFilteredContacts = (state) => {
//   const items = selectItems(state)
//   const filterContacts = selectValue(state)
//   return items?.filter((el) => el.name.toLowerCase().includes(filterContacts.toLowerCase())); 
// }

