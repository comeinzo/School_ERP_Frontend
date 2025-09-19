
// teacherService.js

import api from './api';

export const teacherService = {
    /**
   * Adds a new teacher to the backend.
   * @param {object} teacherData - The data from the teacher creation form.
   * @returns {Promise<object>} The response data from the server.
   */
   async addTeacher(teacherData) {
    try {
    console.log("teachers data from service",teacherData)
      const response = await api.post('/teachers', teacherData);
      return response.data;
    } catch (error) {
      console.error('Error adding teacher:', error);
      throw error;
    }
  },

  async getTeachers() {
    const response = await api.get('/teachers');
    return response.data;
  },

  async getTeacherById(id) {
    const response = await api.get(`/teachers/${id}`);
    return response.data;
  },

  async updateTeacher(id, teacherData) {
    const response = await api.put(`/teachers/${id}`, teacherData);
    return response.data;
  },

  async deleteTeacher(id) {
    const response = await api.delete(`/teachers/${id}`);
    return response.data;
  },

  async checkTeacherExists(ph_number, aadhar_no) {
    const response = await api.get('/teachers/check-exists', {
      params: { ph_number, aadhar_no }
    });
    return response.data;
  }
};