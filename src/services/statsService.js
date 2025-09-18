import api from './api';

export const statsService = {
  async getStats() {
    const response = await api.get('/stats/dashboard');
    return response.data;
  },

  async getStudentStats() {
    const response = await api.get('/stats/students');
    return response.data;
  },

  async getTeacherStats() {
    const response = await api.get('/stats/teachers');
    return response.data;
  },

  async getClassStats() {
    const response = await api.get('/stats/classes');
    return response.data;
  }
};