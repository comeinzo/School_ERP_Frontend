// // src/services/feeService.js
// import api from './api';

// export const feeService = {
//   /**
//    * Fetches all fee data for a specific class.
//    * @param {number} classId - The ID of the class.
//    * @returns {Promise<object>} The fees for the class, categorized.
//    */
//   async getFeesByClassId(classId) {
//     try {
//       // You will need to implement this backend endpoint.
//       // It should return a consolidated fees object for the class.
//       const response = await api.get(`/fees/${classId}`);
//       return response.data;
//     } catch (error) {
//       // Handle the case where no fees exist yet gracefully.
//       if (error.response?.status === 404) {
//         return {};
//       }
//       throw error;
//     }
//   },

//   /**
//    * Adds or updates a fee category for a specific class.
//    * @param {number} classId - The ID of the class.
//    * @param {string} category - The fee category (e.g., 'admission', 'tuition').
//    * @param {object} feeData - The data for the fees in that category.
//    * @returns {Promise<object>} The saved fee data.
//    */
//   async saveFees(classId, category, feeData) {
//     // You will need to implement this backend endpoint.
//     const response = await api.post(`/fees/${classId}/${category}`, feeData);
//     return response.data;
//   },

//   /**
//    * Updates an existing fee category.
//    * @param {number} classId - The ID of the class.
//    * @param {string} category - The fee category to update.
//    * @param {object} feeData - The updated fee data.
//    * @returns {Promise<object>} The updated fee data.
//    */
//   async updateFees(classId, category, feeData) {
//     // You will need to implement this backend endpoint.
//     const response = await api.put(`/fees/${classId}/${category}`, feeData);
//     return response.data;
//   },

//   /**
//    * Deletes a fee category for a specific class.
//    * @param {number} classId - The ID of the class.
//    * @param {string} category - The fee category to delete.
//    * @returns {Promise<void>} A promise that resolves on successful deletion.
//    */
//   async deleteFees(classId, category) {
//     // You will need to implement this backend endpoint.
//     await api.delete(`/fees/${classId}/${category}`);
//   }
// };

// src/services/feeService.js
import api from './api';

export const feeService = {
  /**
   * Fetches all fee data for a specific class.
   * @param {number} classId - The ID of the class.
   * @returns {Promise<object>} The fees for the class, categorized.
   */
  async getFeesByClassId(classId) {
    try {
      const response = await api.get(`/fees/${classId}`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        return null; // Return null if no fees are found
      }
      throw error;
    }
  },

  /**
   * Creates a new fee record for a specific class.
   * @param {number} classId - The ID of the class.
   * @param {object} feeData - The complete fee data.
   * @returns {Promise<object>} The saved fee data.
   */
  async addFee(classId, feeData) {
    console.log("add fee data before -------------",feeData)
    const response = await api.post(`/fees/${classId}`, feeData);
    return response.data;
  },

  /**
   * Updates an existing fee category.
   * @param {number} classId - The ID of the class.
   * @param {object} feeData - The updated fee data.
   * @returns {Promise<object>} The updated fee data.
   */
  async updateFee(classId, feeData) {
    console.log("update fee data before -------------",feeData)
    const response = await api.put(`/fees/${classId}`, feeData);
    console.log("fee service-------------",response.data)
    return response.data;
  },

  /**
   * Deletes a fee category for a specific class.
   * @param {number} classId - The ID of the class.
   * @returns {Promise<void>} A promise that resolves on successful deletion.
   */
  async deleteFee(classId) {
    await api.delete(`/fees/${classId}`);
  },


// /**
//    * Fetches all unique academic years for a specific class.
//    * @param {number} classId - The ID of the class.
//    * @returns {Promise<Array>} A list of academic year objects.
//    */
//   async getAcademicYearsByClassId(classId) {
//       const response = await api.get(`/fees/academic-years/${classId}`);
//       return response.data;
//   }


 /**
   * Fetches the fee data for a specific class and academic year.
   * @param {number} classId - The ID of the class.
   * @param {string} academicYearStart - The start date of the academic year (YYYY-MM-DD).
   * @param {string} academicYearEnd - The end date of the academic year (YYYY-MM-DD).
   * @returns {Promise<object | null>} The fee data or null if not found.
   */
  async getFeesByClassAndYear(classId, academicYearStart, academicYearEnd) {
      const response = await api.get(`/fees/${classId}/year`, {
          params: {
              academic_year_start: academicYearStart,
              academic_year_end: academicYearEnd
          }
      });
      // The backend returns a 200 even for no data, so check for null
      return response.data;
  },

  /**
   * Fetches all unique academic years for a specific class.
   * @param {number} classId - The ID of the class.
   * @returns {Promise<Array>} A list of academic year objects.
   */
  async getAcademicYearsByClassId(classId) {
      const response = await api.get(`/fees/academic-years/${classId}`);
      return response.data;
  },
  
  // /**
  //  * Creates a new fee record for a specific class.
  //  * @param {number} classId - The ID of the class.
  //  * @param {object} feeData - The complete fee data.
  //  * @returns {Promise<object>} The saved fee data.
  //  */
  // async addFee(classId, feeData) {
  //   const response = await api.post(`/fees/${classId}`, feeData);
  //   return response.data;
  // },





};