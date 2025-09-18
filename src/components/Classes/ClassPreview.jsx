import React from 'react';
import './ClassPreview.css';

const ClassPreview = ({ data, onClose }) => {
  const getTotalCapacity = () => {
    return data.divisions.length * data.maxStudentsPerDivision;
  };

  return (
    <div className="class-preview">
      <div className="preview-header">
        <h3>📋 Class Preview</h3>
        <button onClick={onClose} className="close-btn">×</button>
      </div>

      <div className="preview-content">
        <div className="preview-section">
          <h4>Basic Information</h4>
          <div className="preview-field">
            <span className="field-label">Class:</span>
            <span className="field-value">Class {data.className}</span>
          </div>
          <div className="preview-field">
            <span className="field-label">Medium:</span>
            <span className="field-value">{data.medium} Medium</span>
          </div>
          <div className="preview-field">
            <span className="field-label">Academic Year:</span>
            <span className="field-value">{data.academicYear}</span>
          </div>
          {data.classTeacher && (
            <div className="preview-field">
              <span className="field-label">Class Teacher:</span>
              <span className="field-value">{data.classTeacher}</span>
            </div>
          )}
          {data.room && (
            <div className="preview-field">
              <span className="field-label">Room:</span>
              <span className="field-value">{data.room}</span>
            </div>
          )}
        </div>

        <div className="preview-section">
          <h4>Divisions ({data.divisions.length})</h4>
          <div className="divisions-preview">
            {data.divisions.map(division => (
              <div key={division} className="division-preview-card">
                <div className="division-name">Division {division}</div>
                <div className="division-capacity">
                  Max: {data.maxStudentsPerDivision} students
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="preview-section">
          <h4>Capacity Summary</h4>
          <div className="capacity-stats">
            <div className="stat">
              <span className="stat-label">Total Divisions:</span>
              <span className="stat-value">{data.divisions.length}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Students per Division:</span>
              <span className="stat-value">{data.maxStudentsPerDivision}</span>
            </div>
            <div className="stat">
              <span className="stat-label">Total Capacity:</span>
              <span className="stat-value">{getTotalCapacity()} students</span>
            </div>
          </div>
        </div>

        {data.description && (
          <div className="preview-section">
            <h4>Description</h4>
            <p className="description-text">{data.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassPreview;