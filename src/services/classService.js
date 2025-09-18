import api from './api';

export const classService = {
    /**
   * Sends class form data to the backend API to create a new class.
   * @param {object} classData - The data from the class creation form.
   * @returns {Promise<object>} The response data from the server.
   */
  // async createClass(classData) {
  //   const response = await api.post('/classes', classData);
  //   return response.data;
  // },
    async createClass(classData) {
    try {
      const response = await api.post('/classes', classData);
      return response.data;
    } catch (error) {
      console.error('Error creating class:', error);
      // You can re-throw the error or handle it as needed in your component
      throw error;
    }
  },

  async getClasses() {
    const response = await api.get('/classes');
    return response.data;
  },

  async getClassById(id) {
    const response = await api.get(`/classes/${id}`);
    return response.data;
  },

  async updateClass(id, classData) {
    const response = await api.put(`/classes/${id}`, classData);
    return response.data;
  },

  async deleteClass(id) {
    const response = await api.delete(`/classes/${id}`);
    return response.data;
  },

  async checkClassExists(className, medium) {
    const response = await api.get('/classes/check-exists', {
      params: { className, medium }
    });
    return response.data;
  }
};