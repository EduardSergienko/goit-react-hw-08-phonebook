import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

export async function getItems() {
  return await axios.get(`${BASE_URL}/contacts`);
}

export async function addItems(item) {
  return await axios.post(`${BASE_URL}/contacts`, item);
}

export async function deleteItems(id) {
  return await axios.delete(`${BASE_URL}/contacts/${id}`);
}
