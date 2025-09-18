// import api from './api';

// export const teacherService = {
//     /**
//    * Sends class form data to the backend API to create a new class.
//    * @param {object} teacherData - The data from the class creation form.
//    * @returns {Promise<object>} The response data from the server.
//    */
//   // async createClass(teacherData) {
//   //   const response = await api.post('/classes', classData);
//   //   return response.data;
//   // },
//     async addTeacher(teacherData) {
//     try {
//       const response = await api.post('/Add/teacher', teacherData);
//       return response.data;
//     } catch (error) {
//       console.error('Error creating class:', error);
//       // You can re-throw the error or handle it as needed in your component
//       throw error;
//     }
//   },

//   async getClasses() {
//     const response = await api.get('/teacher');
//     return response.data;
//   },

//   async getClassById(id) {
//     const response = await api.get(`/teacher/${id}`);
//     return response.data;
//   },

//   async updateClass(id, teacherData) {
//     const response = await api.put(`/teacher/${id}`, teacherData);
//     return response.data;
//   },

//   async deleteClass(id) {
//     const response = await api.delete(`/teacher/${id}`);
//     return response.data;
//   },

//   async checkClassExists(className, medium) {
//     const response = await api.get('/teachers/check-exists', {
//       params: { className, medium }
//     });
//     return response.data;
//   }
// };











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