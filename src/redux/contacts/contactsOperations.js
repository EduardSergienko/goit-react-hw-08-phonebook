import { createAsyncThunk } from '@reduxjs/toolkit';
import { getItems, addItems, deleteItems } from 'apiServices/apiServices';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getItems();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await addItems(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await deleteItems(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
