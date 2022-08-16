import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
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
    [registerUser.pending]: () => {
      Loading.circle({
        svgColor: '#3152f5',
        backgroundColor: 'rgba(0,0,0,0.2)',
      });
    },
    [registerUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      Loading.remove();
    },
    [registerUser.rejected]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      Notify.failure('Oops, something wrong, try again');
      Loading.remove();
    },
    [logInUser.pending]: () => {
      Loading.circle({
        svgColor: '#3152f5',
        backgroundColor: 'rgba(0,0,0,0.2)',
      });
    },
    [logInUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      Loading.remove();
    },
    [logInUser.rejected]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      Notify.failure('Oops, something wrong, try again');
      Loading.remove();
    },
    [logOutUser.pending]: () => {
      Loading.circle({
        svgColor: '#3152f5',
        backgroundColor: 'rgba(0,0,0,0.2)',
      });
    },
    [logOutUser.fulfilled]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      Loading.remove();
    },
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshed = false;
      Loading.remove();
    },
    [fetchCurrentUser.pending]: (state, _) => {
      state.isRefreshed = true;
      Loading.circle({
        svgColor: '#3152f5',
        backgroundColor: 'rgba(0,0,0,0.2)',
      });
    },
    [fetchCurrentUser.rejected]: (state, _) => {
      state.isRefreshed = false;
      Loading.remove();
    },
  },
});
