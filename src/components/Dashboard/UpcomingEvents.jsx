import React from 'react';
// import './UpcomingEvents.css';

const UpcomingEvents = ({ events }) => {
  return (
    <div className="dashboard-panel">
      <div className="panel-header">
        <h3>📅 Upcoming Events</h3>
      </div>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <div className="event-icon">{event.icon}</div>
            <div className="event-content">
              <h4>{event.title}</h4>
              <p>{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;