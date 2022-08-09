import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contactsOperations';
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isloading: false,
  },
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state, _) => {
      state.isloading = true;
    },
    [addContacts.pending]: (state, _) => {
      state.isloading = true;
    },
    [deleteContacts.pending]: (state, _) => {
      state.isloading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isloading = false;
    },
    [addContacts.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.isloading = false;
    },
    [deleteContacts.fulfilled]: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
      state.isloading = false;
    },
  },
});
export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;
