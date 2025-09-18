import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';
import { getSidebarItems } from '../../constants/sidebarItems';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import DashboardView from '../../components/Dashboard/DashboardView';
import ModulePlaceholder from '../../components/ModulePlaceholder/ModulePlaceholder';
import './AdminHome.css';

const AdminHome = () => {
  const [user, setUser] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalStudents: 245,
    totalTeachers: 18,
    totalClasses: 12,
    activeUsers: 156
  });
  
  const navigate = useNavigate();
  const sidebarItems = getSidebarItems(stats);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const userData = await authService.getCurrentUser();
      setUser(userData);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      if (error.response?.status === 401) {
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await authService.logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      navigate('/login');
    }
  };

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  const renderMainContent = () => {
    if (activeSection === 'dashboard') {
      return (
        <DashboardView 
          stats={stats} 
          onSectionChange={handleSectionChange}
        />
      );
    }

    const currentSection = sidebarItems.find(item => item.id === activeSection);
    return (
      <ModulePlaceholder 
        section={currentSection}
        onBackToDashboard={() => setActiveSection('dashboard')}
      />
    );
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  return (
    <div className="admin-home">
      <Sidebar 
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        user={user}
        onLogout={handleLogout}
        stats={stats}
      />

      <div className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
        <Header 
          user={user}
          onLogout={handleLogout}
          currentSection={activeSection}
          sidebarItems={sidebarItems}
        />

        <main className="admin-main">
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminHome;