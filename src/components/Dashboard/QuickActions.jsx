import React from 'react';
// import './QuickActions.css';

const QuickActions = ({ onActionClick }) => {
  const quickActions = [
    { 
      id: 'students',
      title: 'Add Student', 
      icon: '👨‍🎓', 
      color: '#4caf50', 
      description: 'Register new student'
    },
    { 
      id: 'teachers',
      title: 'Add Teacher', 
      icon: '👨‍🏫', 
      color: '#2196f3', 
      description: 'Add teaching staff'
    },
    { 
      id: 'classes',
      title: 'Create Class', 
      icon: '🏫', 
      color: '#ff9800', 
      description: 'Setup new class'
    },
    { 
      id: 'reports',
      title: 'View Reports', 
      icon: '📊', 
      color: '#f44336', 
      description: 'Generate reports'
    }
  ];

  return (
    <div className="dashboard-panel">
      <div className="panel-header">
        <h3>⚡ Quick Actions</h3>
      </div>
      <div className="quick-actions-grid">
        {quickActions.map((action) => (
          <div 
            key={action.id}
            className="quick-action-card"
            onClick={() => onActionClick(action.id)}
            style={{ borderColor: action.color }}
          >
            <div className="action-icon" style={{ color: action.color }}>
              {action.icon}
            </div>
            <h4>{action.title}</h4>
            <p>{action.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;