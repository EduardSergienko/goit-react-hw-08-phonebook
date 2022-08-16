import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { logIn, logOut, register, refresh } from 'apiServices/apiServices';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (newUser, { rejectWithValue }) => {
    try {
      const { data } = await register(newUser);
      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await logIn(userData);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const logOutUser = createAsyncThunk('auth/logout', async () => {
  try {
    await logOut();
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await refresh();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
