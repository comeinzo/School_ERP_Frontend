import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { classService } from '../../services/classService';
import ClassForm from '../../components/Classes/ClassForm';
import ClassPreview from '../../components/Classes/ClassPreview';
import Toast from '../../components/common/Toast';
import './CreateClass.css';

const CreateClass = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [formData, setFormData] = useState({
    className: '',
    medium: '',
    divisions: []
  });

  const handleFormChange = (data) => {
    setFormData(data);
  };

  const handleSubmit = async (data) => {
    setLoading(true);
    setToast({ show: false, message: '', type: '' });

    try {
      // Check if class already exists
      const existsResponse = await classService.checkClassExists(data.className, data.medium);
      if (existsResponse.exists) {
        setToast({
          show: true,
          message: 'This class with the same medium already exists!',
          type: 'error'
        });
        return;
      }
      
      // Create a clean payload with correct keys for the API
      const payload = {
        name: data.className,
        medium: data.medium,
        academic_year: data.academicYear,
        max_students_per_division: data.maxStudentsPerDivision,
        description: data.description,
        divisions: data.divisions,
      };

      // Create the class
      await classService.createClass(payload);
      
      setToast({
        show: true,
        message: `Class "${data.className}" created successfully!`,
        type: 'success'
      });

      // Redirect after 2 seconds to allow the user to see the success message
      setTimeout(() => {
        navigate('/admin/classes'); // Changed to a specific view route
      }, 2000);

    } catch (error) {
      console.error('Error creating class:', error);
      setToast({
        show: true,
        message: error.response?.data?.message || 'Failed to create class. Please check your network and try again.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePreview = (data) => {
    setFormData(data);
    setShowPreview(true);
  };

  return (
    <div className="create-class-page">
      <div className="page-header">
        {/* <button className="back-btn" onClick={() => navigate('/admin/classes')}>
          ← Back to Classes
        </button> */}
        <h1>Create New Class</h1>
        <p>Add a new class with divisions to your school</p>
      </div>

      <div className="content-grid">
        <div className="form-section">
          <ClassForm 
            onSubmit={handleSubmit}
            onPreview={handlePreview}
            onChange={handleFormChange}
            loading={loading}
          />
        </div>

        {showPreview && (
          <div className="preview-section">
            <ClassPreview 
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

export default CreateClass;