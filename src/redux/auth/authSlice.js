import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import {
  registerUser,
  logInUser,
  logOutUser,
  fetchCurrentUser,
} from './authOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshed: false,
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [registerUser.rejected]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      Notify.failure('Oops, something wrong, try again');
    },
    [logInUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logInUser.rejected]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      Notify.failure('Oops, something wrong, try again');
    },
    [logOutUser.fulfilled]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshed = false;
    },
    [fetchCurrentUser.pending]: (state, _) => {
      state.isRefreshed = true;
    },
    [fetchCurrentUser.rejected]: (state, _) => {
      state.isRefreshed = false;
    },
  },
});
