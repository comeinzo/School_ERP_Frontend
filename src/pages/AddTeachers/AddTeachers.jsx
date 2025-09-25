// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { teacherService } from '../../services/teacherService';
// import TeachersForm from '../../components/Teachers/TeachersForm';
// import ClassPreview from '../../components/Classes/ClassPreview';
// import Toast from '../../components/common/Toast';
// // import './CreateClass.css';

// const AddTeacher = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [showPreview, setShowPreview] = useState(false);
//   const [toast, setToast] = useState({ show: false, message: '', type: '' });
//   const [formData, setFormData] = useState({
//     className: '',
//     medium: '',
//     divisions: []
//   });

//   const handleFormChange = (data) => {
//     setFormData(data);
//   };

//   const handleSubmit = async (data) => {
//     setLoading(true);
//     setToast({ show: false, message: '', type: '' });

//     try {
//       // Check if class already exists
//       const existsResponse = await teacherService.checkClassExists(data.ph_number, data.aadhar_no);
//       if (existsResponse.exists) {
//         setToast({
//           show: true,
//           message: 'This class with the same medium already exists!',
//           type: 'error'
//         });
//         return;
//       }
      
//       // Create a clean payload with correct keys for the API
//       const payload = {
//         name: data.className,
//         medium: data.medium,
//         academic_year: data.academicYear,
//         max_students_per_division: data.maxStudentsPerDivision,
//         description: data.description,
//         divisions: data.divisions,
//       };

//       // Create the class
//       await teacherService.addTeacher(payload);
      
//       setToast({
//         show: true,
//         message: `teacher "${data.name}" created successfully!`,
//         type: 'success'
//       });

//       // Redirect after 2 seconds to allow the user to see the success message
//       setTimeout(() => {
//         navigate('/admin/Teachers'); // Changed to a specific view route
//       }, 2000);

//     } catch (error) {
//       console.error('Error creating class:', error);
//       setToast({
//         show: true,
//         message: error.response?.data?.message || 'Failed to create class. Please check your network and try again.',
//         type: 'error'
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePreview = (data) => {
//     setFormData(data);
//     setShowPreview(true);
//   };

//   return (
//     <div className="create-class-page">
//       <div className="page-header">
//         {/* <button className="back-btn" onClick={() => navigate('/admin/classes')}>
//           ← Back to Classes
//         </button> */}
//         <h1>Add New Teachhers</h1>
//         <p>Add New Teachhers to your school</p>
//       </div>

//       <div className="content-grid">
//         <div className="form-section">
//           <TeachersForm 
//             onSubmit={handleSubmit}
//             onPreview={handlePreview}
//             onChange={handleFormChange}
//             loading={loading}
//           />
//         </div>

//         {showPreview && (
//           <div className="preview-section">
//             <ClassPreview 
//               data={formData}
//               onClose={() => setShowPreview(false)}
//             />
//           </div>
//         )}
//       </div>

//       {toast.show && (
//         <Toast 
//           message={toast.message}
//           type={toast.type}
//           onClose={() => setToast({ show: false, message: '', type: '' })}
//         />
//       )}
//     </div>
//   );
// };

// export default AddTeacher;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { teacherService } from '../../services/teacherService';
import TeachersForm from '../../components/Teachers/TeachersForm';
// import TeacherPreview from '../../components/Teachers/TeacherPreview'; // Assuming this component exists
import Toast from '../../components/common/Toast';
// import './CreateClass.css';

const AddTeacher = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
//   const [formData, setFormData] = useState({
//     name: '',
//     fathers_name: '',
//     address: '',
//     pin_code: '',
//     age: '',
//     gender: '',
//     aadhar_no: '',
//     ph_number: '',
//     date_of_birth: null,
//     highest_education: '',
//     languages: [],
//     class_type: '',
//     description: '',
//   });

//   console.log("form data from add teacher.jsx",formData)

  const handleFormChange = (data) => {
    // setFormData(data);
  };

  const handleSubmit = async (data) => {
    setLoading(true);
    setToast({ show: false, message: '', type: '' });
    console.log("data from add teacher.jsx",data)

    try {
      // Check if teacher already exists using unique identifiers
      const existsResponse = await teacherService.checkTeacherExists(data.ph_number, data.aadhar_no);
      if (existsResponse.exists) {
        setToast({
          show: true,
          message: existsResponse.message, // Use the message from the backend
          type: 'error'
        });
        return;
      }
      
      // Create a clean payload with correct keys for the API
      const payload = {
        full_name: data.full_name,
        fathers_name: data.fathers_name,
        address: data.address,
        pin_code: data.pin_code,
        age: data.age,
        gender: data.gender,
        aadhar_no: data.aadhar_no,
        ph_number: data.ph_number,
        date_of_birth: data.date_of_birth, // dayjs object is handled by API
        highest_education: data.highest_education,
        Subject_to_Teach: data.Subject_to_Teach,
        languages: data.languages,
        class_type: data.class_type,
        description: data.description,
      };
      console.log("payload from add teacher.jsx",payload)

      // Call the addTeacher function from teacherService
      await teacherService.addTeacher(payload);
      
      setToast({
        show: true,
        message: `Teacher "${data.full_name}" added successfully!`,
        type: 'success'
      });

      // Redirect to the teachers view page
      setTimeout(() => {
        navigate('/admin/teachers/view');
      }, 2000);

    } catch (error) {
      console.error('Error adding teacher:', error.response?.data?.detail || error.message);
      setToast({
        show: true,
        message: error.response?.data?.message || 'Failed to add teacher. Please check the data and try again.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePreview = (data) => {
    // setFormData(data);
    setShowPreview(true);
  };

  return (
    <div className="add-teacher-page">
      <div className="page-header">
        <h1>Add New Teacher</h1>
        <p>Add new teachers to your school</p>
      </div>

      <div className="content-grid">
        <div className="form-section">
          <TeachersForm 
            onSubmit={handleSubmit}
            onPreview={handlePreview}
            onChange={handleFormChange}
            loading={loading}
          />
        </div>

        {showPreview && (
          <div className="preview-section">
            <TeacherPreview 
              data={formData}
              onClose={() => setShowPreview(false)}
            />
          </div>
        )}
      </div>

      {toast.show && (
        <Toast 
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ show: false, message: '', type: '' })}
        />
      )}
    </div>
  );
};

export default AddTeacher;