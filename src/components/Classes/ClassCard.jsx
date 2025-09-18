import React from 'react';
// import './ClassCard.css';

const ClassCard = ({ classData, onEdit, onDelete, onView, viewMode }) => {
  const { className, medium, divisions, maxStudentsPerDivision, classTeacher, room } = classData;

  if (viewMode === 'list') {
    return (
      <div className="class-list-item">
        <div className="class-info">
          <h3>Class {className}</h3>
          <span className="medium-badge">{medium} Medium</span>
        </div>
        <div className="divisions-info">
          {divisions.map(div => (
            <span key={div} className="division-badge">Div {div}</span>
          ))}
        </div>
        <div className="capacity-info">
          <span>{divisions.length} Divisions</span>
          <span>•</span>
          <span>{divisions.length * maxStudentsPerDivision} Students</span>
        </div>
        {classTeacher && (
          <div className="teacher-info">
            <span>👨‍🏫 {classTeacher}</span>
          </div>
        )}
        <div className="actions">
          <button onClick={onView} className="btn-icon" title="View">
            👁️
          </button>
          <button onClick={onEdit} className="btn-icon" title="Edit">
            ✏️
          </button>
          <button onClick={onDelete} className="btn-icon delete" title="Delete">
            🗑️
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="class-card">
      <div className="class-card-header">
        <h3>Class {className}</h3>
        <span className="medium-badge">{medium}</span>
      </div>
      
      <div className="class-card-body">
        <div className="divisions-section">
          <h4>Divisions ({divisions.length})</h4>
          <div className="divisions-list">
            {divisions.map(division => (
              <span key={division} className="division-chip">
                Division {division}
              </span>
            ))}
          </div>
        </div>

        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Max Students/Div:</span>
            <span className="info-value">{maxStudentsPerDivision}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Total Capacity:</span>
            <span className="info-value">
              {divisions.length * maxStudentsPerDivision}
            </span>
          </div>
          {classTeacher && (
            <div className="info-item">
              <span className="info-label">Class Teacher:</span>
              <span className="info-value">{classTeacher}</span>
            </div>
          )}
          {room && (
            <div className="info-item">
              <span className="info-label">Room:</span>
              <span className="info-value">{room}</span>
            </div>
          )}
        </div>
      </div>

      <div className="class-card-footer">
        <button onClick={onView} className="btn-action view">
          View Details
        </button>
        <button onClick={onEdit} className="btn-action edit">
          Edit
        </button>
        <button onClick={onDelete} className="btn-action delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ClassCard;