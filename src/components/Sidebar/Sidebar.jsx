import React from 'react';
// import './Sidebar.css';

const Sidebar = ({ 
  collapsed, 
  onToggle, 
  activeSection, 
  onSectionChange, 
  user, 
  onLogout,
  stats 
}) => {
  const sidebarItems = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: '📊',
      description: 'Overview & Analytics'
    },
    {
      id: 'students',
      title: 'Students',
      icon: '👨‍🎓',
      description: 'Student Management',
    //   badge: stats?.totalStudents
    },
    {
      id: 'teachers',
      title: 'Teachers',
      icon: '👨‍🏫',
      description: 'Staff Management',
    //   badge: stats?.totalTeachers
    },
    {
      id: 'classes',
      title: 'Classes',
      icon: '🏫',
      description: 'Academic Management',
    //   badge: stats?.totalClasses
    },
    {
      id: 'examinations',
      title: 'Examinations',
      icon: '📝',
      description: 'Exams & Results'
    },
    {
      id: 'library',
      title: 'Library',
      icon: '📚',
      description: 'Book Management'
    },
    {
      id: 'fees',
      title: 'Fee Management',
      icon: '💰',
      description: 'Financial Records'
    },
    {
      id: 'reports',
      title: 'Reports',
      icon: '📈',
      description: 'Analytics & Reports'
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: '⚙️',
      description: 'System Configuration'
    }
  ];

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="logo-icon">🎓</span>
          {!collapsed && <span className="logo-text">School ERP</span>}
        </div>
        <button 
          className="sidebar-toggle"
          onClick={onToggle}
        >
          {collapsed ? '▶️' : '◀️'}
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {sidebarItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => onSectionChange(item.id)}
                title={collapsed ? item.title : ''}
              >
                <span className="nav-icon">{item.icon}</span>
                {!collapsed && (
                  <>
                    <span className="nav-text">{item.title}</span>
                    {item.badge && (
                      <span className="nav-badge">{item.badge}</span>
                    )}
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* {!collapsed && (
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar-small">
              {user?.username?.charAt(0).toUpperCase() || 'A'}
            </div>
            <div className="user-details">
              <span className="user-name_below">{user?.full_name || user?.username || 'Admin'}</span>
              <span className="user-role">{user?.role || 'Administrator'}</span>
            </div>
          </div>
          <button className="logout-btn" onClick={onLogout}>
            🚪 Logout
          </button>
        </div>
      )} */}
    </aside>
  );
};

export default Sidebar;