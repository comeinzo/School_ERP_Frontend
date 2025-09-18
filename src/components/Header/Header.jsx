import React, { useState } from 'react';
import './Header.css';

const Header = ({ user, onLogout, currentSection, sidebarItems }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
  const currentItem = sidebarItems?.find(item => item.id === currentSection);

  return (
    <header className="top-header">
      <div className="header-left">
        <h1 className="page-title">
          {currentItem?.title || 'Dashboard'}
        </h1>
        <p className="page-subtitle">
          {currentItem?.description || 'School Management System'}
        </p>
      </div>
      <div className="header-right">
        <div className="notification-bell">
          <span className="bell-icon">🔔</span>
          <span className="notification-badge">6</span>
        </div>
        <div className="user-profile" onClick={() => setShowProfileMenu(!showProfileMenu)}>
          <div className="user-avatar">
            {user?.username?.charAt(0).toUpperCase() || 'A'}
          </div>
          <span className="user-name">{user?.full_name || user?.username || 'Admin'}</span>
          <span className="dropdown-arrow">▼</span>
          {showProfileMenu && (
            <div className="profile-menu">
              <div className="menu-item">👤 Profile Settings</div>
              <div className="menu-item">⚙️ System Settings</div>
              <div className="menu-divider"></div>
              <div className="menu-item logout" onClick={onLogout}>🚪 Logout</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;