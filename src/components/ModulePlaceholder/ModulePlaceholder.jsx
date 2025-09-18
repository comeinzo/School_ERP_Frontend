import React from 'react';
// import './ModulePlaceholder.css';

const ModulePlaceholder = ({ section, onBackToDashboard }) => {
  return (
    <section className="content-section">
      <div className="content-header">
        <h2>{section.title} Management</h2>
        <p>{section.description}</p>
      </div>
      <div className="content-placeholder">
        <div className="placeholder-card">
          <div className="placeholder-icon">
            {section.icon}
          </div>
          <h3>{section.title} Module</h3>
          <p>This section is under development. Coming soon with full functionality!</p>
          <button className="placeholder-btn" onClick={onBackToDashboard}>
            Back to Dashboard
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModulePlaceholder;