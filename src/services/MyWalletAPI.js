import axios from "axios"

const BASE_URL = process.env.REACT_APP_API_BASE_URL

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } }
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body)

  return promise
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/login`, body)

  return promise
}

function logout(token) {
  const headers = createConfig(token)

  const promise = axios.delete(`${BASE_URL}/logout`, headers)

  return promise
}


function addRecord(body, token) {
  const headers = createConfig(token)

  const promise = axios.post(`${BASE_URL}/records`, body, headers)

  return promise
}

function getRecords(token) {
  const headers = createConfig(token)

  const promise = axios.get(`${BASE_URL}/records`, headers)

  return promise
}

function deleteRecord(id, token) {
  const headers = createConfig(token)

  const promise = axios.delete(`${BASE_URL}/records/${id}`, headers)

  return promise
}

function updateRecord(id, body, token) {
  const headers = createConfig(token)

  const promise = axios.put(`${BASE_URL}/records/${id}`, body, headers)

  return promise
}

const api = {
  signUp,
  login,
  logout,
  addRecord,
  getRecords,
  deleteRecord,
  updateRecord
}

export default api