import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

export async function getItems() {
  return await axios.get(`${BASE_URL}/contacts`);
}
export async function refresh() {
  return await axios.get(`${BASE_URL}/users/current`);
}

export async function addItems(item) {
  return await axios.post(`${BASE_URL}/contacts`, item);
}

export async function deleteItems(id) {
  return await axios.delete(`${BASE_URL}/contacts/${id}`);
}

export async function logIn(data) {
  return await axios.post(`${BASE_URL}/users/login`, data);
}

export async function logOut() {
  return await axios.post(`${BASE_URL}/users/logout`);
}

export async function register(data) {
  return await axios.post(`${BASE_URL}/users/signup`, data);
}
