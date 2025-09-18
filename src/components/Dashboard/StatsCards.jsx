import React from 'react';
// import './StatsCards.css';

const StatsCards = ({ stats, onCardClick }) => {
  const cards = [
    {
      id: 'students',
      icon: '👥',
      value: stats.totalStudents,
      label: 'Total Students',
      change: '+12 this month',
      className: 'students'
    },
    {
      id: 'teachers',
      icon: '👨‍🏫',
      value: stats.totalTeachers,
      label: 'Total Teachers',
      change: '+2 this month',
      className: 'teachers'
    },
    {
      id: 'classes',
      icon: '🏫',
      value: stats.totalClasses,
      label: 'Total Classes',
      change: 'Active sessions',
      className: 'classes'
    },
    {
      id: 'users',
      icon: '📈',
      value: stats.activeUsers,
      label: 'Active Users',
      change: 'Online now',
      className: 'users',
      clickable: false
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {cards.map((card) => (
          <div 
            key={card.id}
            className={`stat-card ${card.className}`}
            onClick={() => card.clickable !== false && onCardClick(card.id)}
            style={{ cursor: card.clickable !== false ? 'pointer' : 'default' }}
          >
            <div className="stat-icon">{card.icon}</div>
            <div className="stat-content">
              <h3>{card.value}</h3>
              <p>{card.label}</p>
              <span className="stat-change">{card.change}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCards;