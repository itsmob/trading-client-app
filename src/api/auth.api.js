import axios from './axios';

export const register = async (payload) => {
  try {
    const res = await axios.post('/auth/register', payload);
    return res.data;
  } catch (error) {
    console.log('registerApiError');
    throw error;
  }
};

export const login = async (payload) => {
  try {
    const res = await axios.post('/auth/login', payload);
    return res.data;
  } catch (error) {
    console.log('loginApiError');
    throw error;
  }
};
