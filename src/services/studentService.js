// // src/services/studentService.js
// import api from './api';

// export const studentService = {
//   /**
//    * Fetches the next available admission number from the backend.
//    * @returns {Promise<string>} The next admission number.
//    */
//   async getNextAdmissionNumber() {
//     try {
//       const response = await api.get('/students/next-admission-number');
//       return response.data.next_admission_number;
//     } catch (error) {
//       console.error('Error fetching next admission number:', error);
//       // Return a default value or re-throw the error
//       return 'N/A';
//     }
//   },

//   /**
//    * Submits a new student admission form to the backend.
//    * @param {object} studentData - The student's admission data.
//    * @returns {Promise<object>} The newly created student record.
//    */
//   async addStudent(studentData) {
//     console.log("student Data",studentData)
//     const response = await api.post('/students', studentData);
//     return response.data;
//   },

//   /**
//    * Fetches all student records from the backend.
//    * @returns {Promise<Array<object>>} A list of all student records.
//    */
//   async getStudents() {
//     const response = await api.get('/students');
//     return response.data;
//   },

//   /**
//    * Fetches a single student record by their ID.
//    * @param {number} id - The ID of the student.
//    * @returns {Promise<object>} The student record.
//    */
//   async getStudentById(id) {
//     const response = await api.get(`/students/${id}`);
//     return response.data;
//   },

//   /**
//    * Updates an existing student record.
//    * @param {number} id - The ID of the student to update.
//    * @param {object} studentData - The updated student data.
//    * @returns {Promise<object>} The updated student record.
//    */
//   async updateStudent(id, studentData) {
//     const response = await api.put(`/students/${id}`, studentData);
//     return response.data;
//   },

//   /**
//    * Deletes a student record by their ID.
//    * @param {number} id - The ID of the student to delete.
//    * @returns {Promise<void>} A promise that resolves on successful deletion.
//    */
//   async deleteStudent(id) {
//     await api.delete(`/students/${id}`);
//   },
// };










// src/services/studentService.js
import api from './api';

export const studentService = {
  /**
   * Fetches the next available admission number from the backend.
   * @returns {Promise<string>} The next admission number.
   */
  async getNextAdmissionNumber() {
    try {
      const response = await api.get('/students/next-admission-number');
      return response.data.next_admission_number;
    } catch (error) {
      console.error('Error fetching next admission number:', error);
      // Return a default value or re-throw the error
      return 'N/A';
    }
  },

  /**
   * Submits a new student admission form to the backend.
   * @param {FormData} studentData - The student's admission data as FormData.
   * @returns {Promise<object>} The newly created student record.
   */
  async addStudent(studentData) {
    console.log("student Data", studentData);
    
    // Log FormData contents for debugging
    console.log("FormData entries:");
    for (let [key, value] of studentData.entries()) {
      console.log(`${key}:`, value);
    }
    
    // When sending FormData, we need to ensure proper headers
    const response = await api.post('/students', studentData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      // Some APIs require this for file uploads
      transformRequest: [(data) => data], // Don't transform FormData
    });
    
    return response.data;
  },

  /**
   * Alternative method if your API expects JSON + separate file upload
   * @param {object} studentData - The student's admission data.
   * @returns {Promise<object>} The newly created student record.
   */
  async addStudentAsJSON(studentData) {
    console.log("student Data (JSON approach)", studentData);
    
    // Extract photo file if it exists
    const { photo, ...otherData } = studentData;
    
    if (photo && photo instanceof File) {
      // If there's a photo, use FormData approach
      const formData = new FormData();
      
      // Append all non-photo fields as JSON or individual fields
      Object.entries(otherData).forEach(([key, value]) => {
        formData.append(key, value || '');
      });
      
      // Append the photo file
      formData.append('photo', photo, photo.name);
      
      return this.addStudent(formData);
    } else {
      // If no photo, send as regular JSON
      const response = await api.post('/students', otherData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    }
  },

  /**
   * Fetches all student records from the backend.
   * @returns {Promise<Array<object>>} A list of all student records.
   */
  async getStudents() {
    const response = await api.get('/students');
    return response.data;
  },

  /**
   * Fetches a single student record by their ID.
   * @param {number} id - The ID of the student.
   * @returns {Promise<object>} The student record.
   */
  async getStudentById(id) {
    const response = await api.get(`/students/${id}`);
    return response.data;
  },

  /**
   * Updates an existing student record.
   * @param {number} id - The ID of the student to update.
   * @param {object} studentData - The updated student data.
   * @returns {Promise<object>} The updated student record.
   */
  async updateStudent(id, studentData) {
    const response = await api.put(`/students/${id}`, studentData);
    return response.data;
  },

  /**
   * Deletes a student record by their ID.
   * @param {number} id - The ID of the student to delete.
   * @returns {Promise<void>} A promise that resolves on successful deletion.
   */
  async deleteStudent(id) {
    await api.delete(`/students/${id}`);
  },
};