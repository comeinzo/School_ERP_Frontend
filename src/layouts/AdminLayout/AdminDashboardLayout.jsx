import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { authService } from '../../services/authService';
import { getSidebarItems } from '../../constants/sidebarItems';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import DashboardView from '../../components/Dashboard/DashboardView';
import { teacherService } from '../../services/teacherService';
import { studentService } from '../../services/studentService';
import './AdminLayout.css';

const AdminLayout = () => {
  const [user, setUser] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [teacherCount, setTeacherCount] = useState(0);
  const [teachers, setTeachers] = useState([]); // Also good to store the data itself

  const [stats, setStats] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    totalClasses: 12,
    activeUsers: 156
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTeachers = await teacherService.getTeachers();
        const fetchedStudents = await studentService.getStudents();
        
        // --- FIX 1: Check both variables separately ---
        if (Array.isArray(fetchedTeachers) && Array.isArray(fetchedStudents)) {
          const teachercount = fetchedTeachers.length;
          const studentCount = fetchedStudents.length;

          // // Store the actual data in state
          // setTeachers(fetchedTeachers); 
          // setStudents(fetchedStudents); // Assumes you have a setStudents state setter
          
          // Update the stats object with the new counts
          setStats(prevStats => ({
            ...prevStats,
            totalTeachers: teachercount,
            totalStudents: studentCount,
          }));

          // --- FIX 2: Use the correct variable names ---
          console.log("Total teachers found:", teachercount);
          console.log("Total students found:", studentCount);

        } else {
            console.error("Fetched data is not in the expected array format.");
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []); // Empty array ensures this runs only once
  
  //  useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const fetchedTeachers = await teacherService.getTeachers();
        
  //       if (Array.isArray(fetchedTeachers)) {
  //         const count = fetchedTeachers.length;
  //         // setTeachers(fetchedTeachers); // Store the teacher data
          
  //         // --- THIS IS THE FIX ---
  //         // Update the stats object with the new teacher count
  //         setStats(prevStats => ({
  //           ...prevStats, // Keep the old values for students, classes, etc.
  //           totalTeachers: count // Overwrite totalTeachers with the new count
  //         }));

  //         console.log("Total teachers found:", count);
  //       }
  //     } catch (error) {
  //       console.error('Failed to fetch data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty array ensures this runs only once

  
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get active section from URL
  const getActiveSection = () => {
    const path = location.pathname;
    if (path.includes('/classes')) return 'classes';
    if (path.includes('/students')) return 'students';
    if (path.includes('/teachers')) return 'teachers';
    if (path.includes('/examinations')) return 'examinations';
    if (path.includes('/library')) return 'library';
    if (path.includes('/fees')) return 'fees';
    if (path.includes('/reports')) return 'reports';
    if (path.includes('/settings')) return 'settings';
    return 'dashboard';
  };

  const [activeSection, setActiveSection] = useState(getActiveSection());
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
          {/* <Outlet context={{ user, stats }} /> */}
          <DashboardView 
          stats={stats} 
          onSectionChange={handleSectionChange}
        />
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;