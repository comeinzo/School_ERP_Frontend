import React from 'react';
// import './RecentActivities.css';

const RecentActivities = ({ activities }) => {
  return (
    <div className="dashboard-panel">
      <div className="panel-header">
        <h3>📋 Recent Activities</h3>
      </div>
      <div className="activities-list">
        {activities.map((activity, index) => (
          <div key={index} className="activity-item">
            <div className="activity-content">
              <p className="activity-title">{activity.title}</p>
              <div className="activity-meta">
                <span className="activity-time">{activity.time}</span>
                <span className={`priority-badge ${activity.priority}`}>
                  {activity.priority}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;