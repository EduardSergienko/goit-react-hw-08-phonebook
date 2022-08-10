import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk('auth/register', async newUser => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/signup`, newUser);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logInUser = createAsyncThunk('auth/login', async userData => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/login`, userData);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logOutUser = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post(`${BASE_URL}/users/logout`);
    token.unset();
  } catch (error) {
    console.log(error);
  }
});
