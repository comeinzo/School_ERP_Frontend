import api from './api';

export const authService = {
  async getCurrentUser() {
    const response = await api.get('/users/me');
    return response.data;
  },

  async logout() {
    const response = await api.post('/auth/logout');
    return response.data;
  }
};