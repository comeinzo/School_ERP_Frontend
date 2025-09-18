import React from 'react';
import StatsCards from './StatsCards';
import QuickActions from './QuickActions';
import RecentActivities from './RecentActivities';
import UpcomingEvents from './UpcomingEvents';
// import './DashboardView.css';

const DashboardView = ({ stats, onSectionChange }) => {
  const recentActivities = [
    { title: 'New student John Doe registered', time: '2 hours ago', type: 'student', priority: 'low' },
    { title: 'Teacher Mary Smith profile updated', time: '4 hours ago', type: 'teacher', priority: 'medium' },
    { title: 'Class 10-A schedule modified', time: '6 hours ago', type: 'schedule', priority: 'high' },
    { title: 'System backup completed successfully', time: '1 day ago', type: 'system', priority: 'low' },
    { title: 'New admin account created', time: '2 days ago', type: 'user', priority: 'high' }
  ];

  const upcomingEvents = [
    { title: 'Parent-Teacher Meeting', date: 'Tomorrow', type: 'meeting', icon: '🤝' },
    { title: 'Annual Sports Day', date: 'Next Week', type: 'event', icon: '🏃‍♂️' },
    { title: 'Mid-term Examinations', date: 'Mar 15-20', type: 'exam', icon: '📝' },
    { title: 'School Anniversary', date: 'Apr 5', type: 'celebration', icon: '🎉' }
  ];

  return (
    <>
      <StatsCards stats={stats} onCardClick={onSectionChange} />
      
      <section className="dashboard-content">
        <div className="dashboard-grid">
          <QuickActions onActionClick={onSectionChange} />
          <RecentActivities activities={recentActivities} />
          <UpcomingEvents events={upcomingEvents} />
        </div>
      </section>
    </>
  );
};

export default DashboardView;