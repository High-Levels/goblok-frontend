import axios from 'axios'

// const API_URL = 'http://localhost:5000'
const API_URL = 'http://13.239.136.211/api/blog'

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData, {
      headers: { 'Content-Type': 'application/json' },
    })
    return response.data
  } catch (error) {
    throw error.response.data
  }
}

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    })

    const { accessToken, refreshToken } = response.data

    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)

    return response.data
  } catch (error) {
    throw new Error(error.response.data.Message)
  }
}
export const editUser = async (id) => {
  return await axios.put(`${API_URL}/update/profile/${id}`);
}
export const getallUsers = async (id) => {
  id = id || '';
  return await axios.get(`${API_URL}/update/profile/${id}`);
}
