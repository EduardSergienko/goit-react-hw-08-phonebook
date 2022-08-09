import { configureStore } from '@reduxjs/toolkit';

import { contactsSlice } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => getDefaultMiddleware({}),
});

export const getValue = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isloading;
