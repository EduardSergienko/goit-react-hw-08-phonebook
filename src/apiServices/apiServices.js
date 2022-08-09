import axios from 'axios';

const BASE_URL = 'https://62ef99df57311485d12494d0.mockapi.io/';

export async function getItems() {
  return await axios.get(`${BASE_URL}contacts`);
}

export async function addItems(item) {
  return await axios.post(`${BASE_URL}contacts`, item);
}

export async function deleteItems(id) {
  return await axios.delete(`${BASE_URL}contacts/${id}`);
}
