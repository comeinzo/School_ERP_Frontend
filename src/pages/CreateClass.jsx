import React, { useState } from 'react'
import './CreateClass.css' // We'll use the same CSS structure

const CreateClass = ({ onBack }) => {
  const [formData, setFormData] = useState({
    className: '',
    medium: '',
    division: ''
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // Predefined options
  const classOptions = [
    'Pre-KG', 'LKG', 'UKG',
    '1st', '2nd', '3rd', '4th', '5th',
    '6th', '7th', '8th', '9th', '10th',
    '11th', '12th'
  ]

  const mediumOptions = [
    'English',
    'Hindi',
    'Tamil',
    'Telugu',
    'Malayalam',
    'Kannada',
    'Marathi',
    'Bengali',
    'Gujarati',
    'Punjabi'
  ]

  const divisionOptions = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
    setSuccess(false)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.className.trim()) {
      newErrors.className = 'Class is required'
    }

    if (!formData.medium.trim()) {
      newErrors.medium = 'Medium is required'
    }

    if (!formData.division.trim()) {
      newErrors.division = 'Division is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setLoading(true)
    
    try {
      // Simulate API call - Replace with actual backend call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Creating class:', formData)
      
      // Show success message
      setSuccess(true)
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          className: '',
          medium: '',
          division: ''
        })
        setSuccess(false)
      }, 2000)
      
    } catch (error) {
      console.error('Error creating class:', error)
      setErrors({ submit: 'Failed to create class. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setFormData({
      className: '',
      medium: '',
      division: ''
    })
    setErrors({})
    setSuccess(false)
  }

  return (
    <div className="content-section">
      <div className="content-header">
        <h2>Create New Class</h2>
        <p>Add a new class to the school system</p>
      </div>

      <div className="form-container">
        <div className="form-card">
          <div className="form-header">
            <div className="form-icon">🏫</div>
            <h3>Class Details</h3>
            <p>Fill in the information below to create a new class</p>
          </div>

          {success && (
            <div className="success-message">
              <span className="success-icon">✅</span>
              Class created successfully!
            </div>
          )}

          {errors.submit && (
            <div className="error-message">
              <span className="error-icon">❌</span>
              {errors.submit}
            </div>
          )}

          <form onSubmit={handleSubmit} className="class-form">
            <div className="form-grid">
              {/* Class Name */}
              <div className="form-group">
                <label htmlFor="className" className="form-label">
                  Class Name *
                </label>
                <select
                  id="className"
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  className={`form-select ${errors.className ? 'error' : ''}`}
                  disabled={loading}
                >
                  <option value="">Select Class</option>
                  {classOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.className && (
                  <span className="field-error">{errors.className}</span>
                )}
              </div>

              {/* Medium */}
              <div className="form-group">
                <label htmlFor="medium" className="form-label">
                  Medium *
                </label>
                <select
                  id="medium"
                  name="medium"
                  value={formData.medium}
                  onChange={handleChange}
                  className={`form-select ${errors.medium ? 'error' : ''}`}
                  disabled={loading}
                >
                  <option value="">Select Medium</option>
                  {mediumOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.medium && (
                  <span className="field-error">{errors.medium}</span>
                )}
              </div>

              {/* Division */}
              <div className="form-group">
                <label htmlFor="division" className="form-label">
                  Division *
                </label>
                <select
                  id="division"
                  name="division"
                  value={formData.division}
                  onChange={handleChange}
                  className={`form-select ${errors.division ? 'error' : ''}`}
                  disabled={loading}
                >
                  <option value="">Select Division</option>
                  {divisionOptions.map((option) => (
                    <option key={option} value={option}>
                      Division {option}
                    </option>
                  ))}
                </select>
                {errors.division && (
                  <span className="field-error">{errors.division}</span>
                )}
              </div>
            </div>

            {/* Class Preview */}
            {(formData.className || formData.medium || formData.division) && (
              <div className="class-preview">
                <h4>Class Preview:</h4>
                <div className="preview-card">
                  <div className="preview-icon">🎓</div>
                  <div className="preview-details">
                    <div className="preview-name">
                      {formData.className && formData.division 
                        ? `${formData.className} - ${formData.division}`
                        : 'Class Name - Division'}
                    </div>
                    <div className="preview-medium">
                      Medium: {formData.medium || 'Not selected'}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Form Actions */}
            <div className="form-actions">
              <button
                type="button"
                onClick={handleReset}
                className="btn-secondary"
                disabled={loading}
              >
                Reset
              </button>
              <button
                type="button"
                onClick={onBack}
                className="btn-outline"
                disabled={loading}
              >
                Back to Dashboard
              </button>
              <button
                type="submit"
                className="btn-primary"
                disabled={loading || !formData.className || !formData.medium || !formData.division}
              >
                {loading ? (
                  <>
                    <span className="loading-spinner">⏳</span>
                    Creating...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">✅</span>
                    Create Class
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Info Card */}
        <div className="info-card">
          <div className="info-header">
            <span className="info-icon">ℹ️</span>
            <h4>Information</h4>
          </div>
          <div className="info-content">
            <div className="info-item">
              <strong>Class:</strong> Select the academic level (e.g., 1st, 2nd, 10th)
            </div>
            <div className="info-item">
              <strong>Medium:</strong> Language of instruction for the class
            </div>
            <div className="info-item">
              <strong>Division:</strong> Section identifier (A, B, C, etc.)
            </div>
          </div>
          
          <div className="quick-stats">
            <h4>Current Stats</h4>
            <div className="stat-row">
              <span>Total Classes:</span>
              <strong>12</strong>
            </div>
            <div className="stat-row">
              <span>Active Students:</span>
              <strong>245</strong>
            </div>
            <div className="stat-row">
              <span>Teachers:</span>
              <strong>18</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateClass