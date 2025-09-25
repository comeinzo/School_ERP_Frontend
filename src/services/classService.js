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
  },




  /**
   * Adds a new mapping to the master_classes table.
   * @param {object} mappingData - The mapping data for a single division and teacher.
   * @returns {Promise<object>} The newly created mapping record.
   */
  async addMasterClassMapping(mappingData) {
    const response = await api.post('/master-classes', mappingData);
    return response.data;
  },
  async getMasterClassDetails(){
    const response=await api.get('/master-classes/view');
    return response.data;
  },

  /**
   * Updates an existing master class mapping with a PATCH request.
   * @param {number} classId - The ID of the class.
   * @param {string} division - The division of the class.
   * @param {object} updatedData - The data to update (e.g., { class_teacher_id: 5 }).
   * @returns {Promise<object>} The updated mapping record.
   */
  async updateMasterClass(classId, division, updatedData) {
    console.log("classss_id",classId )
    console.log("division",division )
    // Corrected: The URL now uses the classId and division variables
    const response = await api.patch(`/master-classes/${classId}/${division}`, updatedData);
    return response.data;
  },
};