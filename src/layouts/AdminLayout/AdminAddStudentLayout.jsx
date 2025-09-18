import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { authService } from '../../services/authService';
import { getSidebarItems } from '../../constants/sidebarItems';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { Box, Tabs, Tab } from "@mui/material";
import StudentAdmissionForm from '../../components/Students/StudentsForm';

// import AddTeachers from '../../pages/AddTeachers/AddTeachers';
// import ViewClasses from '../../pages/ViewClasses/ViewClasses'; 
import './AdminLayout.css';

const AdminAddStudentLayout = () => {
  const [user, setUser] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalStudents: 245,
    totalTeachers: 18,
    totalClasses: 12,
    activeUsers: 156
  });
  
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get active section from URL
  const getActiveSection = () => {
    const path = location.pathname;
    if (path.includes('/classes')) return 'classes';
    if (path.includes('/students')) return 'students';
    if (path.includes('/Teachers')) return 'teachers';
    if (path.includes('/examinations')) return 'examinations';
    if (path.includes('/library')) return 'library';
    if (path.includes('/fees')) return 'fees';
    if (path.includes('/reports')) return 'reports';
    if (path.includes('/settings')) return 'settings';
    return 'dashboard';
  };

  const [activeSection, setActiveSection] = useState(getActiveSection());
        const [activeClassSubSection, setActiveClassSubSection] = useState('view-classes');
  const sidebarItems = getSidebarItems(stats);

  useEffect(() => {
    fetchUserData();
    // Load sidebar state from localStorage
    const savedSidebarState = localStorage.getItem('sidebarCollapsed');
    if (savedSidebarState) {
      setSidebarCollapsed(JSON.parse(savedSidebarState));
    }
  }, []);

  useEffect(() => {
    // Update active section when route changes
    setActiveSection(getActiveSection());
  }, [location]);

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



    // Function to handle the navigation between sub-sections
    const handleClassSubSectionChange = (section) => {
        setActiveClassSubSection(section);
    };

    // Conditional rendering based on the active sub-section
    const renderContent = () => {
        if (activeClassSubSection === 'view-classes') {
            // return <ViewClasses stats={stats} />;
        } else if (activeClassSubSection === 'Student-Admission') {
            return <StudentAdmissionForm stats={stats} />;
        }
    };
    

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);

    
    
    // Navigate to the appropriate route
    switch(sectionId) {
      case 'dashboard':
        navigate('/Admin/Dashboard');
        break;
      case 'classes':
        navigate('/admin/classes');
        break;
      case 'students':
        navigate('/admin/students');
        break;
      case 'teachers':
        navigate('/admin/Teachers');
        break;
      case 'examinations':
        navigate('/admin/examinations');
        break;
      case 'library':
        navigate('/admin/library');
        break;
      case 'fees':
        navigate('/admin/fees');
        break;
      case 'reports':
        navigate('/admin/reports');
        break;
      case 'settings':
        navigate('/admin/settings');
        break;
      default:
        navigate('/admin');
    }
  };

  const toggleSidebar = () => {
    const newState = !sidebarCollapsed;
    setSidebarCollapsed(newState);
    // Save to localStorage
    localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      <Sidebar 
        collapsed={sidebarCollapsed}
        onToggle={toggleSidebar}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        user={user}
        onLogout={handleLogout}
        stats={stats}
      />

      <div className={`admin-layout-main ${sidebarCollapsed ? 'expanded' : ''}`}>
        <Header 
          user={user}
          onLogout={handleLogout}
          currentSection={activeSection}
          sidebarItems={sidebarItems}
        />

            <main className="admin-content">
                {/* <div className="class-management-header">
                    <div className="class-menu-tabs" >
                        <button
                            className={activeClassSubSection === 'add-students' ? 'active-tab' : ''}
                            onClick={() => handleClassSubSectionChange('add-class')}
                        >
                            Add Class
                        </button>
                        <button
                            className={activeClassSubSection === 'view-students' ? 'active-tab' : ''}
                            onClick={() => handleClassSubSectionChange('view-classes')}
                        >
                            View Classes
                        </button>
                    </div>
                </div> */}
<div className="class-management-header">
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs
      value={activeClassSubSection === 'Student-Admission' ? 0 : 1}
      onChange={(e, newValue) =>
        handleClassSubSectionChange(newValue === 0 ? 'Student-Admission' : 'view-classes')
      }
      variant="fullWidth"
      textColor="primary"
      indicatorColor="primary"
    >
      <Tab label="Add Class" />
      <Tab label="View Classes" />
    </Tabs>
  </Box>
</div>


                <div className="class-content-container">
                    {renderContent()}
                </div>
            </main>

      </div>
    </div>
  );
};

export default AdminAddStudentLayout;