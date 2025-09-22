// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import { Outlet, useNavigate, useLocation } from 'react-router-dom';
// // // // // // // // import { authService } from '../../services/authService';
// // // // // // // // import { getSidebarItems } from '../../constants/sidebarItems';
// // // // // // // // import Sidebar from '../../components/Sidebar/Sidebar';
// // // // // // // // import Header from '../../components/Header/Header';
// // // // // // // // import { Box, Tabs, Tab } from "@mui/material";

// // // // // // // // import FeeForm from '../../components/FeeManagement/FeeForm'; // Assuming you save it here

// // // // // // // // // import AddTeachers from '../../pages/AddTeachers/AddTeachers';
// // // // // // // // // import ViewClasses from '../../pages/ViewClasses/ViewClasses'; 
// // // // // // // // import './AdminLayout.css';

// // // // // // // // const AdminFeeManagementLayout = () => {
// // // // // // // //   const [user, setUser] = useState(null);
// // // // // // // //   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
// // // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // // //   const [stats, setStats] = useState({
// // // // // // // //     totalStudents: 245,
// // // // // // // //     totalTeachers: 18,
// // // // // // // //     totalClasses: 12,
// // // // // // // //     activeUsers: 156
// // // // // // // //   });
  
// // // // // // // //   const navigate = useNavigate();
// // // // // // // //   const location = useLocation();
  
// // // // // // // //   // Get active section from URL
// // // // // // // //   const getActiveSection = () => {
// // // // // // // //     const path = location.pathname;
// // // // // // // //     if (path.includes('/classes')) return 'classes';
// // // // // // // //     if (path.includes('/students')) return 'students';
// // // // // // // //     if (path.includes('/Teachers')) return 'teachers';
// // // // // // // //     if (path.includes('/examinations')) return 'examinations';
// // // // // // // //     if (path.includes('/library')) return 'library';
// // // // // // // //     if (path.includes('/fees')) return 'fees';
// // // // // // // //     if (path.includes('/reports')) return 'reports';
// // // // // // // //     if (path.includes('/settings')) return 'settings';
// // // // // // // //     return 'dashboard';
// // // // // // // //   };

// // // // // // // //   const [activeSection, setActiveSection] = useState(getActiveSection());
// // // // // // // //         const [activeClassSubSection, setActiveClassSubSection] = useState('view-classes');
// // // // // // // //   const sidebarItems = getSidebarItems(stats);

// // // // // // // //   useEffect(() => {
// // // // // // // //     fetchUserData();
// // // // // // // //     // Load sidebar state from localStorage
// // // // // // // //     const savedSidebarState = localStorage.getItem('sidebarCollapsed');
// // // // // // // //     if (savedSidebarState) {
// // // // // // // //       setSidebarCollapsed(JSON.parse(savedSidebarState));
// // // // // // // //     }
// // // // // // // //   }, []);

// // // // // // // //   useEffect(() => {
// // // // // // // //     // Update active section when route changes
// // // // // // // //     setActiveSection(getActiveSection());
// // // // // // // //   }, [location]);

// // // // // // // //   const fetchUserData = async () => {
// // // // // // // //     try {
// // // // // // // //       setLoading(true);
// // // // // // // //       const userData = await authService.getCurrentUser();
// // // // // // // //       setUser(userData);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error('Failed to fetch user data:', error);
// // // // // // // //       if (error.response?.status === 401) {
// // // // // // // //         navigate('/login');
// // // // // // // //       }
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleLogout = async () => {
// // // // // // // //     try {
// // // // // // // //       await authService.logout();
// // // // // // // //       navigate('/login');
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error('Logout error:', error);
// // // // // // // //       navigate('/login');
// // // // // // // //     }
// // // // // // // //   };



// // // // // // // //     // Function to handle the navigation between sub-sections
// // // // // // // //     const handleClassSubSectionChange = (section) => {
// // // // // // // //         setActiveClassSubSection(section);
// // // // // // // //     };

// // // // // // // //     // Conditional rendering based on the active sub-section
// // // // // // // //     const renderContent = () => {
// // // // // // // //         if (activeClassSubSection === 'view-classes') {
// // // // // // // //             // return <ViewClasses stats={stats} />;
// // // // // // // //         } else if (activeClassSubSection === 'Student-Admission') {
// // // // // // // //             return <StudentAdmissionForm stats={stats} />;
// // // // // // // //         }
// // // // // // // //     };
    

// // // // // // // //   const handleSectionChange = (sectionId) => {
// // // // // // // //     setActiveSection(sectionId);

    
    
// // // // // // // //     // Navigate to the appropriate route
// // // // // // // //     switch(sectionId) {
// // // // // // // //       case 'dashboard':
// // // // // // // //         navigate('/Admin/Dashboard');
// // // // // // // //         break;
// // // // // // // //       case 'classes':
// // // // // // // //         navigate('/admin/classes');
// // // // // // // //         break;
// // // // // // // //       case 'students':
// // // // // // // //         navigate('/admin/students');
// // // // // // // //         break;
// // // // // // // //       case 'teachers':
// // // // // // // //         navigate('/admin/Teachers');
// // // // // // // //         break;
// // // // // // // //       case 'examinations':
// // // // // // // //         navigate('/admin/examinations');
// // // // // // // //         break;
// // // // // // // //       case 'library':
// // // // // // // //         navigate('/admin/library');
// // // // // // // //         break;
// // // // // // // //       case 'fees':
// // // // // // // //         navigate('/admin/fees');
// // // // // // // //         break;
// // // // // // // //       case 'reports':
// // // // // // // //         navigate('/admin/reports');
// // // // // // // //         break;
// // // // // // // //       case 'settings':
// // // // // // // //         navigate('/admin/settings');
// // // // // // // //         break;
// // // // // // // //       default:
// // // // // // // //         navigate('/admin');
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const toggleSidebar = () => {
// // // // // // // //     const newState = !sidebarCollapsed;
// // // // // // // //     setSidebarCollapsed(newState);
// // // // // // // //     // Save to localStorage
// // // // // // // //     localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
// // // // // // // //   };

// // // // // // // //   if (loading) {
// // // // // // // //     return (
// // // // // // // //       <div className="loading-container">
// // // // // // // //         <div className="loading-spinner">
// // // // // // // //           <div className="spinner"></div>
// // // // // // // //           <p>Loading...</p>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="admin-layout">
// // // // // // // //       <Sidebar 
// // // // // // // //         collapsed={sidebarCollapsed}
// // // // // // // //         onToggle={toggleSidebar}
// // // // // // // //         activeSection={activeSection}
// // // // // // // //         onSectionChange={handleSectionChange}
// // // // // // // //         user={user}
// // // // // // // //         onLogout={handleLogout}
// // // // // // // //         stats={stats}
// // // // // // // //       />

// // // // // // // //       <div className={`admin-layout-main ${sidebarCollapsed ? 'expanded' : ''}`}>
// // // // // // // //         <Header 
// // // // // // // //           user={user}
// // // // // // // //           onLogout={handleLogout}
// // // // // // // //           currentSection={activeSection}
// // // // // // // //           sidebarItems={sidebarItems}
// // // // // // // //         />

// // // // // // // //             <main className="admin-content">
// // // // // // // // <div className="class-management-header">
// // // // // // // //   <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
// // // // // // // //     <Tabs
// // // // // // // //       value={activeClassSubSection === 'Student-Admission' ? 0 : 1}
// // // // // // // //       onChange={(e, newValue) =>
// // // // // // // //         handleClassSubSectionChange(newValue === 0 ? 'Student-Admission' : 'view-classes')
// // // // // // // //       }
// // // // // // // //       variant="fullWidth"
// // // // // // // //       textColor="primary"
// // // // // // // //       indicatorColor="primary"

// // // // // // // //     >
        
// // // // // // // //         <Tab label="Admission-Related Fees" />
// // // // // // // //         <Tab label="Tuition and Academic Fees" />
// // // // // // // //         <Tab label="Transport and Boarding Fees" />
// // // // // // // //         <Tab label="Miscellaneous Fees" />        
// // // // // // // //     </Tabs>
// // // // // // // //   </Box>
// // // // // // // // </div>


// // // // // // // //                 <div className="class-content-container">
// // // // // // // //                     {renderContent()}
// // // // // // // //                 </div>
// // // // // // // //             </main>

// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default AdminFeeManagementLayout;

// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { Outlet, useNavigate, useLocation } from 'react-router-dom';
// // // // // // // import { authService } from '../../services/authService';
// // // // // // // import { getSidebarItems } from '../../constants/sidebarItems';
// // // // // // // import Sidebar from '../../components/Sidebar/Sidebar';
// // // // // // // import Header from '../../components/Header/Header';
// // // // // // // import FeeForm from '../../components/FeeManagement/FeeForm'; // Import the FeeForm component
// // // // // // // import { Box, Tabs, Tab, Typography } from "@mui/material";



// // // // // // // import AdmissionFeeForm from '../../components/FeeManagement/AdmissionFeeForm';
// // // // // // // import TuitionFeeForm from '../../components/FeeManagement/TuitionFeeForm';
// // // // // // // import ActivityFeeForm from '../../components/FeeManagement/ActivityFeeForm';
// // // // // // // import TransportFeeForm from '../../components/FeeManagement/TransportFeeForm';
// // // // // // // import MiscellaneousFeeForm from '../../components/FeeManagement/MiscellaneousFeeForm';



// // // // // // // import './AdminLayout.css';

// // // // // // // const AdminFeeManagementLayout = () => {
// // // // // // //   const [user, setUser] = useState(null);
// // // // // // //   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
// // // // // // //   const [loading, setLoading] = useState(true);
// // // // // // //   const [stats, setStats] = useState({
// // // // // // //     totalStudents: 245,
// // // // // // //     totalTeachers: 18,
// // // // // // //     totalClasses: 12,
// // // // // // //     activeUsers: 156
// // // // // // //   });
  
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const location = useLocation();
  
// // // // // // //   const getActiveSection = () => {
// // // // // // //     const path = location.pathname;
// // // // // // //     if (path.includes('/classes')) return 'classes';
// // // // // // //     if (path.includes('/students')) return 'students';
// // // // // // //     if (path.includes('/Teachers')) return 'teachers';
// // // // // // //     if (path.includes('/examinations')) return 'examinations';
// // // // // // //     if (path.includes('/library')) return 'library';
// // // // // // //     if (path.includes('/fees')) return 'fees';
// // // // // // //     if (path.includes('/reports')) return 'reports';
// // // // // // //     if (path.includes('/settings')) return 'settings';
// // // // // // //     return 'dashboard';
// // // // // // //   };

// // // // // // //   const [activeSection, setActiveSection] = useState(getActiveSection());
// // // // // // //   const [activeFeeTab, setActiveFeeTab] = useState(0); // Using a numerical index for the tabs
// // // // // // //   const sidebarItems = getSidebarItems(stats);
// // // // // // //   console.log("activeFeeTab",activeFeeTab)

// // // // // // //   useEffect(() => {
// // // // // // //     fetchUserData();
// // // // // // //     const savedSidebarState = localStorage.getItem('sidebarCollapsed');
// // // // // // //     if (savedSidebarState) {
// // // // // // //       setSidebarCollapsed(JSON.parse(savedSidebarState));
// // // // // // //     }
// // // // // // //   }, []);

// // // // // // //   useEffect(() => {
// // // // // // //     setActiveSection(getActiveSection());
// // // // // // //   }, [location]);

// // // // // // //   const fetchUserData = async () => {
// // // // // // //     try {
// // // // // // //       setLoading(true);
// // // // // // //       const userData = await authService.getCurrentUser();
// // // // // // //       setUser(userData);
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Failed to fetch user data:', error);
// // // // // // //       if (error.response?.status === 401) {
// // // // // // //         navigate('/login');
// // // // // // //       }
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleLogout = async () => {
// // // // // // //     try {
// // // // // // //       await authService.logout();
// // // // // // //       navigate('/login');
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Logout error:', error);
// // // // // // //       navigate('/login');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleSectionChange = (sectionId) => {
// // // // // // //     setActiveSection(sectionId);
// // // // // // //     switch(sectionId) {
// // // // // // //       case 'dashboard':
// // // // // // //         navigate('/Admin/Dashboard');
// // // // // // //         break;
// // // // // // //       case 'classes':
// // // // // // //         navigate('/admin/classes');
// // // // // // //         break;
// // // // // // //       case 'students':
// // // // // // //         navigate('/admin/students');
// // // // // // //         break;
// // // // // // //       case 'teachers':
// // // // // // //         navigate('/admin/teachers');
// // // // // // //         break;
// // // // // // //       case 'examinations':
// // // // // // //         navigate('/admin/examinations');
// // // // // // //         break;
// // // // // // //       case 'library':
// // // // // // //         navigate('/admin/library');
// // // // // // //         break;
// // // // // // //       case 'fees':
// // // // // // //         navigate('/admin/fees');
// // // // // // //         break;
// // // // // // //       case 'reports':
// // // // // // //         navigate('/admin/reports');
// // // // // // //         break;
// // // // // // //       case 'settings':
// // // // // // //         navigate('/admin/settings');
// // // // // // //         break;
// // // // // // //       default:
// // // // // // //         navigate('/admin');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const toggleSidebar = () => {
// // // // // // //     const newState = !sidebarCollapsed;
// // // // // // //     setSidebarCollapsed(newState);
// // // // // // //     localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
// // // // // // //   };

// // // // // // // const renderFeeForm = () => {
// // // // // // //     switch (activeFeeTab) {
// // // // // // //       case 0:
// // // // // // //         return <AdmissionFeeForm  />;
// // // // // // //       case 1:
// // // // // // //         return <TuitionFeeForm />;
// // // // // // //       case 2:
// // // // // // //         return <ActivityFeeForm  />;
// // // // // // //       case 3:
// // // // // // //         return <TransportFeeForm onSubmit={(data) => handleSaveFees('transport', data)} />;
// // // // // // //       case 4:
// // // // // // //         return <MiscellaneousFeeForm onSubmit={(data) => handleSaveFees('miscellaneous', data)} />;
// // // // // // //       default:
// // // // // // //         return null;
// // // // // // //     }
// // // // // // //   };
  
// // // // // // //   // This function will be called by the FeeForm onSubmit
// // // // // // //   const handleSaveFees = (feeData) => {
// // // // // // //       console.log("Submitting fees:", feeData);
// // // // // // //       // Here you will make your API call to save the data
// // // // // // //       // e.g., feeService.saveFees(feeData);
// // // // // // //   };

// // // // // // //   if (loading) {
// // // // // // //     return (
// // // // // // //       <div className="loading-container">
// // // // // // //         <div className="loading-spinner">
// // // // // // //           <div className="spinner"></div>
// // // // // // //           <p>Loading...</p>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="admin-layout">
// // // // // // //       <Sidebar 
// // // // // // //         collapsed={sidebarCollapsed}
// // // // // // //         onToggle={toggleSidebar}
// // // // // // //         activeSection={activeSection}
// // // // // // //         onSectionChange={handleSectionChange}
// // // // // // //         user={user}
// // // // // // //         onLogout={handleLogout}
// // // // // // //         stats={stats}
// // // // // // //       />
// // // // // // //       <div className={`admin-layout-main ${sidebarCollapsed ? 'expanded' : ''}`}>
// // // // // // //         <Header 
// // // // // // //           user={user}
// // // // // // //           onLogout={handleLogout}
// // // // // // //           currentSection={activeSection}
// // // // // // //           sidebarItems={sidebarItems}
// // // // // // //         />
// // // // // // //         <main className="admin-content">
// // // // // // //           <div className="class-management-header">
// // // // // // //             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
// // // // // // //               <Tabs
// // // // // // //                 value={activeFeeTab}
// // // // // // //                 onChange={(e, newValue) => setActiveFeeTab(newValue)}
// // // // // // //                 variant="scrollable"
// // // // // // //                 scrollButtons="auto"
// // // // // // //                 textColor="primary"
// // // // // // //                 indicatorColor="primary"
// // // // // // //                 aria-label="Fee Management Tabs"
// // // // // // //               >
// // // // // // //                 <Tab label="Admission-Related Fees" value={0} />
// // // // // // //                 <Tab label="Tuition and Academic Fees" value={1} />
// // // // // // //                 <Tab label="Activity & Development Fees" value={2} />
// // // // // // //                 <Tab label="Transport and Boarding Fees" value={3} />
// // // // // // //                 <Tab label="Miscellaneous Fees" value={4} />
// // // // // // //               </Tabs>
// // // // // // //             </Box>
// // // // // // //           </div>
// // // // // // //           <div className="class-content-container">
// // // // // // //              {/* The FeeForm is now rendered inside this section */}
// // // // // // //              {/* <FeeForm onSubmit={handleSaveFees} /> */}
// // // // // // //              {renderFeeForm()}
// // // // // // //           </div>
// // // // // // //         </main>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default AdminFeeManagementLayout;




// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { useNavigate, useLocation } from 'react-router-dom';
// // // // // // import { authService } from '../../services/authService';
// // // // // // import { getSidebarItems } from '../../constants/sidebarItems';
// // // // // // import Sidebar from '../../components/Sidebar/Sidebar';
// // // // // // import Header from '../../components/Header/Header';
// // // // // // import { Box, Tabs, Tab, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

// // // // // // // Import the new dynamic fee form
// // // // // // import AdmissionFeeForm from '../../components/FeeManagement/AdmissionFeeForm';

// // // // // // import './AdminLayout.css';
// // // // // // import { classService } from '../../services/classService';
// // // // // // import { feeService } from '../../services/feeService';

// // // // // // const AdminFeeManagementLayout = () => {
// // // // // //     const [user, setUser] = useState(null);
// // // // // //     const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
// // // // // //     const [loading, setLoading] = useState(true);
// // // // // //     const [stats, setStats] = useState({
// // // // // //         totalStudents: 245,
// // // // // //         totalTeachers: 18,
// // // // // //         totalClasses: 12,
// // // // // //         activeUsers: 156
// // // // // //     });

// // // // // //     const navigate = useNavigate();
// // // // // //     const location = useLocation();

// // // // // //     // State for fee management
// // // // // //     const [allClasses, setAllClasses] = useState([]);
// // // // // //     const [selectedClassId, setSelectedClassId] = useState('');
// // // // // //     const [fees, setFees] = useState({});
// // // // // //     const [feeLoading, setFeeLoading] = useState(false);

// // // // // //     // Sidebar logic
// // // // // //     const getActiveSection = () => {
// // // // // //         const path = location.pathname;
// // // // // //         if (path.includes('/fees')) return 'fees';
// // // // // //         return 'dashboard';
// // // // // //     };
// // // // // //     const [activeSection, setActiveSection] = useState(getActiveSection());
// // // // // //     const sidebarItems = getSidebarItems(stats);

// // // // // //     useEffect(() => {
// // // // // //         fetchUserData();
// // // // // //         fetchClasses();
// // // // // //         const savedSidebarState = localStorage.getItem('sidebarCollapsed');
// // // // // //         if (savedSidebarState) {
// // // // // //             setSidebarCollapsed(JSON.parse(savedSidebarState));
// // // // // //         }
// // // // // //     }, []);

// // // // // //     useEffect(() => {
// // // // // //         setActiveSection(getActiveSection());
// // // // // //     }, [location]);

// // // // // //     useEffect(() => {
// // // // // //         if (selectedClassId) {
// // // // // //             fetchFeesForClass(selectedClassId);
// // // // // //         }
// // // // // //     }, [selectedClassId]);

// // // // // //     const fetchClasses = async () => {
// // // // // //         try {
// // // // // //             const classes = await classService.getClasses();
// // // // // //             setAllClasses(classes);
// // // // // //             if (classes.length > 0) {
// // // // // //                 setSelectedClassId(classes[0].id); // Select the first class by default
// // // // // //             }
// // // // // //         } catch (error) {
// // // // // //             console.error('Failed to fetch classes:', error);
// // // // // //         }
// // // // // //     };

// // // // // //     const fetchFeesForClass = async (classId) => {
// // // // // //         setFeeLoading(true);
// // // // // //         try {
// // // // // //             const classFees = await feeService.getFeesByClassId(classId);
// // // // // //             setFees(classFees);
// // // // // //         } catch (error) {
// // // // // //             console.error('Failed to fetch fees:', error);
// // // // // //             setFees({});
// // // // // //         } finally {
// // // // // //             setFeeLoading(false);
// // // // // //         }
// // // // // //     };

// // // // // //     const fetchUserData = async () => {
// // // // // //         try {
// // // // // //             setLoading(true);
// // // // // //             const userData = await authService.getCurrentUser();
// // // // // //             setUser(userData);
// // // // // //         } catch (error) {
// // // // // //             console.error('Failed to fetch user data:', error);
// // // // // //             if (error.response?.status === 401) {
// // // // // //                 navigate('/login');
// // // // // //             }
// // // // // //         } finally {
// // // // // //             setLoading(false);
// // // // // //         }
// // // // // //     };

// // // // // //     const handleLogout = async () => {
// // // // // //         try {
// // // // // //             await authService.logout();
// // // // // //             navigate('/login');
// // // // // //         } catch (error) {
// // // // // //             console.error('Logout error:', error);
// // // // // //             navigate('/login');
// // // // // //         }
// // // // // //     };

// // // // // //     const handleSectionChange = (sectionId) => {
// // // // // //         setActiveSection(sectionId);
// // // // // //         switch(sectionId) {
// // // // // //             case 'dashboard':
// // // // // //                 navigate('/admin/dashboard');
// // // // // //                 break;
// // // // // //             case 'classes':
// // // // // //                 navigate('/admin/classes');
// // // // // //                 break;
// // // // // //             case 'students':
// // // // // //                 navigate('/admin/students');
// // // // // //                 break;
// // // // // //             case 'teachers':
// // // // // //                 navigate('/admin/teachers');
// // // // // //                 break;
// // // // // //             case 'examinations':
// // // // // //                 navigate('/admin/examinations');
// // // // // //                 break;
// // // // // //             case 'library':
// // // // // //                 navigate('/admin/library');
// // // // // //                 break;
// // // // // //             case 'fees':
// // // // // //                 navigate('/admin/fees');
// // // // // //                 break;
// // // // // //             case 'reports':
// // // // // //                 navigate('/admin/reports');
// // // // // //                 break;
// // // // // //             case 'settings':
// // // // // //                 navigate('/admin/settings');
// // // // // //                 break;
// // // // // //             default:
// // // // // //                 navigate('/admin');
// // // // // //         }
// // // // // //     };

// // // // // //     const toggleSidebar = () => {
// // // // // //         const newState = !sidebarCollapsed;
// // // // // //         setSidebarCollapsed(newState);
// // // // // //         localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
// // // // // //     };

// // // // // //     const handleSaveFees = async (feeData) => {
// // // // // //         console.log(`Submitting fees:`, feeData);
// // // // // //         // Here you will make your API call to save the data
// // // // // //         // e.g., feeService.saveFees(selectedClassId, feeData);
// // // // // //     };

// // // // // //     if (loading) {
// // // // // //         return <p>Loading...</p>;
// // // // // //     }

// // // // // //     return (
// // // // // //         <div className="admin-layout">
// // // // // //             <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} activeSection={activeSection} onSectionChange={handleSectionChange} user={user} onLogout={handleLogout} stats={stats} />
// // // // // //             <div className={`admin-layout-main ${sidebarCollapsed ? 'expanded' : ''}`}>
// // // // // //                 <Header user={user} onLogout={handleLogout} currentSection={activeSection} sidebarItems={sidebarItems} />
// // // // // //                 <main className="admin-content">
// // // // // //                     <Box sx={{ p: 2 }}>
// // // // // //                         <Typography variant="h4" gutterBottom>Fee Management</Typography>
// // // // // //                         <FormControl fullWidth sx={{ mb: 3 }}>
// // // // // //                             <InputLabel id="select-class-label">Select Class</InputLabel>
// // // // // //                             <Select
// // // // // //                                 labelId="select-class-label"
// // // // // //                                 value={selectedClassId}
// // // // // //                                 label="Select Class"
// // // // // //                                 onChange={(e) => setSelectedClassId(e.target.value)}
// // // // // //                             >
// // // // // //                                 {allClasses.map((cls) => (
// // // // // //                                     <MenuItem key={cls.id} value={cls.id}>
// // // // // //                                         {cls.name} ({cls.medium})
// // // // // //                                     </MenuItem>
// // // // // //                                 ))}
// // // // // //                             </Select>
// // // // // //                         </FormControl>

// // // // // //                         {/* The tabs are no longer needed for separate forms, but can be used for different views */}
// // // // // //                         <Box mt={3}>
// // // // // //                             <AdmissionFeeForm
// // // // // //                               initialData={fees}
// // // // // //                               onSubmit={handleSaveFees}
// // // // // //                               loading={feeLoading}
// // // // // //                             />
// // // // // //                         </Box>
// // // // // //                     </Box>
// // // // // //                 </main>
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default AdminFeeManagementLayout;



// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { useNavigate, useLocation } from 'react-router-dom';
// // // // // import { authService } from '../../services/authService';
// // // // // import { getSidebarItems } from '../../constants/sidebarItems';
// // // // // import Sidebar from '../../components/Sidebar/Sidebar';
// // // // // import Header from '../../components/Header/Header';
// // // // // import { Box, Tabs, Tab, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

// // // // // // Import the new dynamic fee form
// // // // // import AdmissionFeeForm from '../../components/FeeManagement/AdmissionFeeForm';

// // // // // import './AdminLayout.css';
// // // // // import { classService } from '../../services/classService';
// // // // // import { feeService } from '../../services/feeService';

// // // // // const AdminFeeManagementLayout = () => {
// // // // //     const [user, setUser] = useState(null);
// // // // //     const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
// // // // //     const [loading, setLoading] = useState(true);
// // // // //     const [stats, setStats] = useState({
// // // // //         totalStudents: 245,
// // // // //         totalTeachers: 18,
// // // // //         totalClasses: 12,
// // // // //         activeUsers: 156
// // // // //     });

// // // // //     const navigate = useNavigate();
// // // // //     const location = useLocation();

// // // // //     // State for fee management
// // // // //     const [allClasses, setAllClasses] = useState([]);
// // // // //     const [selectedClassId, setSelectedClassId] = useState('');
// // // // //     const [fees, setFees] = useState({});
// // // // //     const [feeLoading, setFeeLoading] = useState(false);

// // // // //     // Sidebar logic
// // // // //     const getActiveSection = () => {
// // // // //         const path = location.pathname;
// // // // //         if (path.includes('/fees')) return 'fees';
// // // // //         return 'dashboard';
// // // // //     };
// // // // //     const [activeSection, setActiveSection] = useState(getActiveSection());
// // // // //     const sidebarItems = getSidebarItems(stats);

// // // // //     useEffect(() => {
// // // // //         fetchUserData();
// // // // //         fetchClasses();
// // // // //         const savedSidebarState = localStorage.getItem('sidebarCollapsed');
// // // // //         if (savedSidebarState) {
// // // // //             setSidebarCollapsed(JSON.parse(savedSidebarState));
// // // // //         }
// // // // //     }, []);

// // // // //     useEffect(() => {
// // // // //         setActiveSection(getActiveSection());
// // // // //     }, [location]);

// // // // //     useEffect(() => {
// // // // //         if (selectedClassId) {
// // // // //             fetchFeesForClass(selectedClassId);
// // // // //         }
// // // // //     }, [selectedClassId]);

// // // // //     const fetchClasses = async () => {
// // // // //         try {
// // // // //             const classes = await classService.getClasses();
// // // // //             setAllClasses(classes);
// // // // //             if (classes.length > 0) {
// // // // //                 setSelectedClassId(classes[0].id); // Select the first class by default
// // // // //             }
// // // // //         } catch (error) {
// // // // //             console.error('Failed to fetch classes:', error);
// // // // //         }
// // // // //     };

// // // // //     const fetchFeesForClass = async (classId) => {
// // // // //         setFeeLoading(true);
// // // // //         try {
// // // // //             const classFees = await feeService.getFeesByClassId(classId);
// // // // //             setFees(classFees);
// // // // //         } catch (error) {
// // // // //             console.error('Failed to fetch fees:', error);
// // // // //             setFees({});
// // // // //         } finally {
// // // // //             setFeeLoading(false);
// // // // //         }
// // // // //     };

// // // // //     const fetchUserData = async () => {
// // // // //         try {
// // // // //             setLoading(true);
// // // // //             const userData = await authService.getCurrentUser();
// // // // //             setUser(userData);
// // // // //         } catch (error) {
// // // // //             console.error('Failed to fetch user data:', error);
// // // // //             if (error.response?.status === 401) {
// // // // //                 navigate('/login');
// // // // //             }
// // // // //         } finally {
// // // // //             setLoading(false);
// // // // //         }
// // // // //     };

// // // // //     const handleLogout = async () => {
// // // // //         try {
// // // // //             await authService.logout();
// // // // //             navigate('/login');
// // // // //         } catch (error) {
// // // // //             console.error('Logout error:', error);
// // // // //             navigate('/login');
// // // // //         }
// // // // //     };

// // // // //     const handleSectionChange = (sectionId) => {
// // // // //         setActiveSection(sectionId);
// // // // //         switch(sectionId) {
// // // // //             case 'dashboard':
// // // // //                 navigate('/admin/dashboard');
// // // // //                 break;
// // // // //             case 'classes':
// // // // //                 navigate('/admin/classes');
// // // // //                 break;
// // // // //             case 'students':
// // // // //                 navigate('/admin/students');
// // // // //                 break;
// // // // //             case 'teachers':
// // // // //                 navigate('/admin/teachers');
// // // // //                 break;
// // // // //             case 'examinations':
// // // // //                 navigate('/admin/examinations');
// // // // //                 break;
// // // // //             case 'library':
// // // // //                 navigate('/admin/library');
// // // // //                 break;
// // // // //             case 'fees':
// // // // //                 navigate('/admin/fees');
// // // // //                 break;
// // // // //             case 'reports':
// // // // //                 navigate('/admin/reports');
// // // // //                 break;
// // // // //             case 'settings':
// // // // //                 navigate('/admin/settings');
// // // // //                 break;
// // // // //             default:
// // // // //                 navigate('/admin');
// // // // //         }
// // // // //     };

// // // // //     const toggleSidebar = () => {
// // // // //         const newState = !sidebarCollapsed;
// // // // //         setSidebarCollapsed(newState);
// // // // //         localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
// // // // //     };

// // // // //     const handleSaveFees = async (feeData) => {
// // // // //         setFeeLoading(true);
// // // // //         try {
// // // // //             const response = await feeService.addFees(selectedClassId, feeData);
// // // // //             console.log('Fees saved successfully:', response);
// // // // //             setFees(response); // Update the state with the new fees data from the server
// // // // //         } catch (error) {
// // // // //             console.error('Failed to save fees:', error);
// // // // //         } finally {
// // // // //             setFeeLoading(false);
// // // // //         }
// // // // //     };

// // // // //     if (loading) {
// // // // //         return <p>Loading...</p>;
// // // // //     }

// // // // //     return (
// // // // //         <div className="admin-layout">
// // // // //             <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} activeSection={activeSection} onSectionChange={handleSectionChange} user={user} onLogout={handleLogout} stats={stats} />
// // // // //             <div className={`admin-layout-main ${sidebarCollapsed ? 'expanded' : ''}`}>
// // // // //                 <Header user={user} onLogout={handleLogout} currentSection={activeSection} sidebarItems={sidebarItems} />
// // // // //                 <main className="admin-content">
// // // // //                     <Box sx={{ p: 2 }}>
// // // // //                         <Typography variant="h4" gutterBottom>Fee Management</Typography>
// // // // //                         <FormControl fullWidth sx={{ mb: 3 }}>
// // // // //                             <InputLabel id="select-class-label">Select Class</InputLabel>
// // // // //                             <Select
// // // // //                                 labelId="select-class-label"
// // // // //                                 value={selectedClassId}
// // // // //                                 label="Select Class"
// // // // //                                 onChange={(e) => setSelectedClassId(e.target.value)}
// // // // //                             >
// // // // //                                 {allClasses.map((cls) => (
// // // // //                                     <MenuItem key={cls.id} value={cls.id}>
// // // // //                                         {cls.name} ({cls.medium})
// // // // //                                     </MenuItem>
// // // // //                                 ))}
// // // // //                             </Select>
// // // // //                         </FormControl>

// // // // //                         <Box mt={3}>
// // // // //                             <AdmissionFeeForm
// // // // //                                 initialData={fees}
// // // // //                                 onSubmit={handleSaveFees}
// // // // //                                 loading={feeLoading}
// // // // //                             />
// // // // //                         </Box>
// // // // //                     </Box>
// // // // //                 </main>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default AdminFeeManagementLayout;



// // // // import React, { useState, useEffect } from 'react';
// // // // import { useNavigate, useLocation } from 'react-router-dom';
// // // // import { authService } from '../../services/authService';
// // // // import { getSidebarItems } from '../../constants/sidebarItems';
// // // // import Sidebar from '../../components/Sidebar/Sidebar';
// // // // import Header from '../../components/Header/Header';
// // // // import { Box, Tabs, Tab, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

// // // // // Corrected import: The single dynamic form is now named AdmissionFeeForm
// // // // import AdmissionFeeForm from '../../components/FeeManagement/AdmissionFeeForm';

// // // // import './AdminLayout.css';
// // // // import { classService } from '../../services/classService';
// // // // import { feeService } from '../../services/feeService';

// // // // const AdminFeeManagementLayout = () => {
// // // //     const [user, setUser] = useState(null);
// // // //     const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
// // // //     const [loading, setLoading] = useState(true);
// // // //     const [stats, setStats] = useState({
// // // //         totalStudents: 245,
// // // //         totalTeachers: 18,
// // // //         totalClasses: 12,
// // // //         activeUsers: 156
// // // //     });

// // // //     const navigate = useNavigate();
// // // //     const location = useLocation();

// // // //     const [allClasses, setAllClasses] = useState([]);
// // // //     const [selectedClassId, setSelectedClassId] = useState('');
// // // //     const [fees, setFees] = useState({});
// // // //     const [feeLoading, setFeeLoading] = useState(false);
// // // //     const [activeFeeTab, setActiveFeeTab] = useState(0); // Keeping this for future use if you want different content per tab

// // // //     const getActiveSection = () => {
// // // //         const path = location.pathname;
// // // //         if (path.includes('/fees')) return 'fees';
// // // //         return 'dashboard';
// // // //     };
// // // //     const [activeSection, setActiveSection] = useState(getActiveSection());
// // // //     const sidebarItems = getSidebarItems(stats);

// // // //     useEffect(() => {
// // // //         fetchUserData();
// // // //         fetchClasses();
// // // //         const savedSidebarState = localStorage.getItem('sidebarCollapsed');
// // // //         if (savedSidebarState) {
// // // //             setSidebarCollapsed(JSON.parse(savedSidebarState));
// // // //         }
// // // //     }, []);

// // // //     useEffect(() => {
// // // //         setActiveSection(getActiveSection());
// // // //     }, [location]);

// // // //     useEffect(() => {
// // // //         if (selectedClassId) {
// // // //             fetchFeesForClass(selectedClassId);
// // // //         }
// // // //     }, [selectedClassId]);

// // // //     const fetchClasses = async () => {
// // // //         try {
// // // //             const classes = await classService.getClasses();
// // // //             setAllClasses(classes);
// // // //             if (classes.length > 0) {
// // // //                 setSelectedClassId(classes[0].id);
// // // //             }
// // // //         } catch (error) {
// // // //             console.error('Failed to fetch classes:', error);
// // // //         }
// // // //     };

// // // //     const fetchFeesForClass = async (classId) => {
// // // //         setFeeLoading(true);
// // // //         try {
// // // //             const classFees = await feeService.getFeesByClassId(classId);
// // // //             setFees(classFees || {}); // Use an empty object as a fallback
// // // //         } catch (error) {
// // // //             console.error('Failed to fetch fees:', error);
// // // //             setFees({});
// // // //         } finally {
// // // //             setFeeLoading(false);
// // // //         }
// // // //     };

// // // //     const fetchUserData = async () => {
// // // //         try {
// // // //             setLoading(true);
// // // //             const userData = await authService.getCurrentUser();
// // // //             setUser(userData);
// // // //         } catch (error) {
// // // //             console.error('Failed to fetch user data:', error);
// // // //             if (error.response?.status === 401) {
// // // //                 navigate('/login');
// // // //             }
// // // //         } finally {
// // // //             setLoading(false);
// // // //         }
// // // //     };

// // // //     const handleLogout = async () => {
// // // //         try {
// // // //             await authService.logout();
// // // //             navigate('/login');
// // // //         } catch (error) {
// // // //             console.error('Logout error:', error);
// // // //             navigate('/login');
// // // //         }
// // // //     };

// // // //     const handleSectionChange = (sectionId) => {
// // // //         setActiveSection(sectionId);
// // // //         switch(sectionId) {
// // // //             case 'dashboard':
// // // //                 navigate('/admin/dashboard');
// // // //                 break;
// // // //             case 'classes':
// // // //                 navigate('/admin/classes');
// // // //                 break;
// // // //             case 'students':
// // // //                 navigate('/admin/students');
// // // //                 break;
// // // //             case 'teachers':
// // // //                 navigate('/admin/teachers');
// // // //                 break;
// // // //             case 'examinations':
// // // //                 navigate('/admin/examinations');
// // // //                 break;
// // // //             case 'library':
// // // //                 navigate('/admin/library');
// // // //                 break;
// // // //             case 'fees':
// // // //                 navigate('/admin/fees');
// // // //                 break;
// // // //             case 'reports':
// // // //                 navigate('/admin/reports');
// // // //                 break;
// // // //             case 'settings':
// // // //                 navigate('/admin/settings');
// // // //                 break;
// // // //             default:
// // // //                 navigate('/admin');
// // // //         }
// // // //     };

// // // //     const toggleSidebar = () => {
// // // //         const newState = !sidebarCollapsed;
// // // //         setSidebarCollapsed(newState);
// // // //         localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
// // // //     };

// // // //     const handleSaveFees = async (feeData) => {
// // // //         setFeeLoading(true);
// // // //         try {
// // // //             const response = await feeService.addFee(selectedClassId, feeData);
// // // //             console.log('Fees saved successfully:', response);
// // // //             setFees(response);
// // // //         } catch (error) {
// // // //             console.error('Failed to save fees:', error);
// // // //         } finally {
// // // //             setFeeLoading(false);
// // // //         }
// // // //     };

// // // //     if (loading) {
// // // //         return <p>Loading...</p>;
// // // //     }

// // // //     return (
// // // //         <div className="admin-layout">
// // // //             <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} activeSection={activeSection} onSectionChange={handleSectionChange} user={user} onLogout={handleLogout} stats={stats} />
// // // //             <div className={`admin-layout-main ${sidebarCollapsed ? 'expanded' : ''}`}>
// // // //                 <Header user={user} onLogout={handleLogout} currentSection={activeSection} sidebarItems={sidebarItems} />
// // // //                 <main className="admin-content">
// // // //                     <Box sx={{ p: 2 }}>
// // // //                         <Typography variant="h4" gutterBottom>Fee Management</Typography>
// // // //                         <FormControl fullWidth sx={{ mb: 3 }}>
// // // //                             <InputLabel id="select-class-label">Select Class</InputLabel>
// // // //                             <Select
// // // //                                 labelId="select-class-label"
// // // //                                 value={selectedClassId}
// // // //                                 label="Select Class"
// // // //                                 onChange={(e) => setSelectedClassId(e.target.value)}
// // // //                             >
// // // //                                 {allClasses.map((cls) => (
// // // //                                     <MenuItem key={cls.id} value={cls.id}>
// // // //                                         {cls.name} ({cls.medium})
// // // //                                     </MenuItem>
// // // //                                 ))}
// // // //                             </Select>
// // // //                         </FormControl>
// // // //                         <Box mt={3}>
// // // //                             {/* The single dynamic form is rendered here */}
// // // //                             <AdmissionFeeForm
// // // //                                 initialData={fees}
// // // //                                 onSubmit={handleSaveFees}
// // // //                                 loading={feeLoading}
// // // //                             />
// // // //                         </Box>
// // // //                     </Box>
// // // //                 </main>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default AdminFeeManagementLayout;












// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate, useLocation } from 'react-router-dom';
// // // import { authService } from '../../services/authService';
// // // import { getSidebarItems } from '../../constants/sidebarItems';
// // // import Sidebar from '../../components/Sidebar/Sidebar';
// // // import Header from '../../components/Header/Header';
// // // import { Box, Tabs, Tab, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

// // // import AdmissionFeeForm from '../../components/FeeManagement/AdmissionFeeForm';

// // // import './AdminLayout.css';
// // // import { classService } from '../../services/classService';
// // // import { feeService } from '../../services/feeService';

// // // const AdminFeeManagementLayout = () => {
// // //     const [user, setUser] = useState(null);
// // //     const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
// // //     const [loading, setLoading] = useState(true);
// // //     const [stats, setStats] = useState({
// // //         totalStudents: 245,
// // //         totalTeachers: 18,
// // //         totalClasses: 12,
// // //         activeUsers: 156
// // //     });

// // //     const navigate = useNavigate();
// // //     const location = useLocation();

// // //     const [allClasses, setAllClasses] = useState([]);
// // //     const [selectedClassId, setSelectedClassId] = useState('');
// // //     const [fees, setFees] = useState({});
// // //     const [feeLoading, setFeeLoading] = useState(false);
// // //     const [activeFeeTab, setActiveFeeTab] = useState(0);

// // //     const getActiveSection = () => {
// // //         const path = location.pathname;
// // //         if (path.includes('/fees')) return 'fees';
// // //         return 'dashboard';
// // //     };
// // //     const [activeSection, setActiveSection] = useState(getActiveSection());
// // //     const sidebarItems = getSidebarItems(stats);

// // //     useEffect(() => {
// // //         fetchUserData();
// // //         fetchClasses();
// // //         const savedSidebarState = localStorage.getItem('sidebarCollapsed');
// // //         if (savedSidebarState) {
// // //             setSidebarCollapsed(JSON.parse(savedSidebarState));
// // //         }
// // //     }, []);

// // //     useEffect(() => {
// // //         setActiveSection(getActiveSection());
// // //     }, [location]);

// // //     useEffect(() => {
// // //         if (selectedClassId) {
// // //             fetchFeesForClass(selectedClassId);
// // //         }
// // //     }, [selectedClassId]);

// // //     const fetchClasses = async () => {
// // //         try {
// // //             const classes = await classService.getClasses();
// // //             setAllClasses(classes);
// // //             if (classes.length > 0) {
// // //                 setSelectedClassId(classes[0].id);
// // //             }
// // //         } catch (error) {
// // //             console.error('Failed to fetch classes:', error);
// // //         }
// // //     };

// // //     const fetchFeesForClass = async (classId) => {
// // //         setFeeLoading(true);
// // //         try {
// // //             const classFees = await feeService.getFeesByClassId(classId);
// // //             setFees(classFees || {});
// // //         } catch (error) {
// // //             console.error('Failed to fetch fees:', error);
// // //             setFees({});
// // //         } finally {
// // //             setFeeLoading(false);
// // //         }
// // //     };

// // //     const fetchUserData = async () => {
// // //         try {
// // //             setLoading(true);
// // //             const userData = await authService.getCurrentUser();
// // //             setUser(userData);
// // //         } catch (error) {
// // //             console.error('Failed to fetch user data:', error);
// // //             if (error.response?.status === 401) {
// // //                 navigate('/login');
// // //             }
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };

// // //     const handleLogout = async () => {
// // //         try {
// // //             await authService.logout();
// // //             navigate('/login');
// // //         } catch (error) {
// // //             console.error('Logout error:', error);
// // //             navigate('/login');
// // //         }
// // //     };

// // //     const handleSectionChange = (sectionId) => {
// // //         setActiveSection(sectionId);
// // //         switch(sectionId) {
// // //             case 'dashboard': navigate('/admin/dashboard'); break;
// // //             case 'classes': navigate('/admin/classes'); break;
// // //             case 'students': navigate('/admin/students'); break;
// // //             case 'teachers': navigate('/admin/teachers'); break;
// // //             case 'examinations': navigate('/admin/examinations'); break;
// // //             case 'library': navigate('/admin/library'); break;
// // //             case 'fees': navigate('/admin/fees'); break;
// // //             case 'reports': navigate('/admin/reports'); break;
// // //             case 'settings': navigate('/admin/settings'); break;
// // //             default: navigate('/admin');
// // //         }
// // //     };

// // //     const toggleSidebar = () => {
// // //         const newState = !sidebarCollapsed;
// // //         setSidebarCollapsed(newState);
// // //         localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
// // //     };

// // //     const handleCreateFees = async (feeData) => {
// // //         setFeeLoading(true);
// // //         try {
// // //             const response = await feeService.addFee(selectedClassId, feeData);
// // //             console.log('Fees saved successfully:', response);
// // //             setFees(response);
// // //         } catch (error) {
// // //             console.error('Failed to save fees:', error);
// // //         } finally {
// // //             setFeeLoading(false);
// // //         }
// // //     };

// // //     const handleUpdateFees = async (feeData) => {
// // //         setFeeLoading(true);
// // //         try {
// // //             const response = await feeService.updateFee(selectedClassId, feeData);
// // //             console.log('Fees updated successfully:', response);
// // //             setFees(response);
// // //         } catch (error) {
// // //             console.error('Failed to update fees:', error);
// // //         } finally {
// // //             setFeeLoading(false);
// // //         }
// // //     };

// // //     const handleDeleteFees = async () => {
// // //         if (!window.confirm("Are you sure you want to delete these fees?")) return;
// // //         setFeeLoading(true);
// // //         try {
// // //             await feeService.deleteFee(selectedClassId);
// // //             console.log('Fees deleted successfully.');
// // //             setFees({}); // Clear the form after deletion
// // //         } catch (error) {
// // //             console.error('Failed to delete fees:', error);
// // //         } finally {
// // //             setFeeLoading(false);
// // //         }
// // //     };

// // //     if (loading) {
// // //         return <p>Loading...</p>;
// // //     }

// // //     return (
// // //         <div className="admin-layout">
// // //             <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} activeSection={activeSection} onSectionChange={handleSectionChange} user={user} onLogout={handleLogout} stats={stats} />
// // //             <div className={`admin-layout-main ${sidebarCollapsed ? 'expanded' : ''}`}>
// // //                 <Header user={user} onLogout={handleLogout} currentSection={activeSection} sidebarItems={sidebarItems} />
// // //                 <main className="admin-content">
// // //                     <Box sx={{ p: 2 }}>
// // //                         <Typography variant="h4" gutterBottom>Fee Management</Typography>
// // //                         <FormControl fullWidth sx={{ mb: 3 }}>
// // //                             <InputLabel id="select-class-label">Select Class</InputLabel>
// // //                             <Select
// // //                                 labelId="select-class-label"
// // //                                 value={selectedClassId}
// // //                                 label="Select Class"
// // //                                 onChange={(e) => setSelectedClassId(e.target.value)}
// // //                             >
// // //                                 {allClasses.map((cls) => (
// // //                                     <MenuItem key={cls.id} value={cls.id}>
// // //                                         {cls.name} ({cls.medium})
// // //                                     </MenuItem>
// // //                                 ))}
// // //                             </Select>
// // //                         </FormControl>

// // //                         <Box mt={3}>
// // //                             <AdmissionFeeForm
// // //                                 initialData={fees}
// // //                                 onSubmit={handleCreateFees}
// // //                                 onUpdate={handleUpdateFees}
// // //                                 onDelete={handleDeleteFees}
// // //                                 loading={feeLoading}
// // //                             />
// // //                         </Box>
// // //                     </Box>
// // //                 </main>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default AdminFeeManagementLayout;





// // import React, { useState, useEffect } from 'react';
// // import dayjs from 'dayjs';
// // import { useNavigate, useLocation } from 'react-router-dom';
// // import { authService } from '../../services/authService';
// // import { getSidebarItems } from '../../constants/sidebarItems';
// // import Sidebar from '../../components/Sidebar/Sidebar';
// // import Header from '../../components/Header/Header';
// // import {
// //   Box, Typography, FormControl, InputLabel, Select, MenuItem,
// //   Grid, Card, CardContent
// // } from "@mui/material";

// // import AdmissionFeeForm from '../../components/FeeManagement/AdmissionFeeForm';

// // import './AdminLayout.css';
// // import { classService } from '../../services/classService';
// // import { feeService } from '../../services/feeService';

// // const AdminFeeManagementLayout = () => {
// //     // Corrected: Define the loading state here
// //     const [loading, setLoading] = useState(true);

// //     const [user, setUser] = useState(null);
// //     const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
// //     const [stats, setStats] = useState({
// //         totalStudents: 245,
// //         totalTeachers: 18,
// //         totalClasses: 12,
// //         activeUsers: 156
// //     });

// //     const navigate = useNavigate();
// //     const location = useLocation();
    
// //     const [allClasses, setAllClasses] = useState([]);
// //     const [selectedClassId, setSelectedClassId] = useState('');
// //     const [fees, setFees] = useState({});
// //     const [feeLoading, setFeeLoading] = useState(false);
    
// //     const [academicYears, setAcademicYears] = useState([]);
// //     const [selectedYear, setSelectedYear] = useState('');

// //     const getActiveSection = () => {
// //         const path = location.pathname;
// //         if (path.includes('/fees')) return 'fees';
// //         return 'dashboard';
// //     };
// //     const [activeSection, setActiveSection] = useState(getActiveSection());
// //     const sidebarItems = getSidebarItems(stats);

// //     useEffect(() => {
// //         fetchUserData();
// //         fetchClasses();
// //         const savedSidebarState = localStorage.getItem('sidebarCollapsed');
// //         if (savedSidebarState) {
// //             setSidebarCollapsed(JSON.parse(savedSidebarState));
// //         }
// //     }, []);

// //     useEffect(() => {
// //         setActiveSection(getActiveSection());
// //     }, [location]);

// //     useEffect(() => {
// //         if (selectedClassId) {
// //             fetchAcademicYears(selectedClassId);
// //         }
// //     }, [selectedClassId]);

// //     useEffect(() => {
// //         if (selectedClassId && selectedYear) {
// //             fetchFeesForClassAndYear(selectedClassId, selectedYear);
// //         }
// //     }, [selectedYear]);
    
// //     const fetchUserData = async () => {
// //         try {
// //             setLoading(true);
// //             const userData = await authService.getCurrentUser();
// //             setUser(userData);
// //         } catch (error) {
// //             console.error('Failed to fetch user data:', error);
// //             if (error.response?.status === 401) {
// //                 navigate('/login');
// //             }
// //         } finally {
// //             setLoading(false);
// //         }
// //     };
    
// //     const fetchClasses = async () => {
// //         try {
// //             const classes = await classService.getClasses();
// //             setAllClasses(classes);
// //             if (classes.length > 0) {
// //                 setSelectedClassId(classes[0].id);
// //             }
// //         } catch (error) {
// //             console.error('Failed to fetch classes:', error);
// //         }
// //     };

// //     const fetchAcademicYears = async (classId) => {
// //         try {
// //             const years = await feeService.getAcademicYearsByClassId(classId);
// //             setAcademicYears(years);
// //             if (years.length > 0) {
// //                 setSelectedYear(years[years.length - 1]);
// //             } else {
// //                 setSelectedYear('');
// //                 setFees({});
// //             }
// //         } catch (error) {
// //             console.error('Failed to fetch academic years:', error);
// //         }
// //     };
    
// //     const fetchFeesForClassAndYear = async (classId, year) => {
// //         setFeeLoading(true);
// //         try {
// //             const classFees = await feeService.getFeesByClassAndYear(classId, year.start, year.end);
// //             setFees(classFees || {});
// //         } catch (error) {
// //             console.error('Failed to fetch fees:', error);
// //             setFees({});
// //         } finally {
// //             setFeeLoading(false);
// //         }
// //     };
    
// //     const handleLogout = async () => {
// //         try {
// //             await authService.logout();
// //             navigate('/login');
// //         } catch (error) {
// //             console.error('Logout error:', error);
// //             navigate('/login');
// //         }
// //     };

// //     const handleSectionChange = (sectionId) => {
// //         setActiveSection(sectionId);
// //         switch(sectionId) {
// //             case 'dashboard': navigate('/admin/dashboard'); break;
// //             case 'classes': navigate('/admin/classes'); break;
// //             case 'students': navigate('/admin/students'); break;
// //             case 'teachers': navigate('/admin/teachers'); break;
// //             case 'examinations': navigate('/admin/examinations'); break;
// //             case 'library': navigate('/admin/library'); break;
// //             case 'fees': navigate('/admin/fees'); break;
// //             case 'reports': navigate('/admin/reports'); break;
// //             case 'settings': navigate('/admin/settings'); break;
// //             default: navigate('/admin');
// //         }
// //     };

// //     const toggleSidebar = () => {
// //         const newState = !sidebarCollapsed;
// //         setSidebarCollapsed(newState);
// //         localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
// //     };

// //     const handleCreateFees = async (feeData) => {
// //         // ... (existing logic)
// //     };

// //     const handleUpdateFees = async (feeData) => {
// //         // ... (existing logic)
// //     };
    
// //     const handleDeleteFees = async () => {
// //         // ... (existing logic)
// //     };

// //     if (loading) {
// //         return <p>Loading...</p>;
// //     }

// //     return (
// //         <div className="admin-layout">
// //             <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} activeSection={activeSection} onSectionChange={handleSectionChange} user={user} onLogout={handleLogout} stats={stats} />
// //             <div className={`admin-layout-main ${sidebarCollapsed ? 'expanded' : ''}`}>
// //                 <Header user={user} onLogout={handleLogout} currentSection={activeSection} sidebarItems={sidebarItems} />
// //                 <main className="admin-content">
// //                     <Box sx={{ p: 2 }}>
// //                         <Typography variant="h4" gutterBottom>Fee Management</Typography>
// //                         <Grid container spacing={3}>
// //                             <Grid item xs={12} sm={6}>
// //                                 <FormControl fullWidth>
// //                                     <InputLabel id="select-class-label">Select Class</InputLabel>
// //                                     <Select
// //                                         labelId="select-class-label"
// //                                         value={selectedClassId}
// //                                         label="Select Class"
// //                                         onChange={(e) => setSelectedClassId(e.target.value)}
// //                                     >
// //                                         {allClasses.map((cls) => (
// //                                             <MenuItem key={cls.id} value={cls.id}>
// //                                                 {cls.name} ({cls.medium})
// //                                             </MenuItem>
// //                                         ))}
// //                                     </Select>
// //                                 </FormControl>
// //                             </Grid>
// //                             <Grid item xs={12} sm={6}>
// //                                 <FormControl fullWidth disabled={academicYears.length === 0}>
// //                                     <InputLabel id="select-year-label">Academic Year</InputLabel>
// //                                     <Select
// //                                         labelId="select-year-label"
// //                                         value={selectedYear}
// //                                         label="Academic Year"
// //                                         onChange={(e) => setSelectedYear(e.target.value)}
// //                                         renderValue={(selected) => 
// //                                             `${dayjs(selected.start).format('MMM D, YYYY')} - ${dayjs(selected.end).format('MMM D, YYYY')}`
// //                                         }
// //                                     >
// //                                         {academicYears.map((year, index) => (
// //                                             <MenuItem key={index} value={year}>
// //                                                 {dayjs(year.start).format('MMM D, YYYY')} - {dayjs(year.end).format('MMM D, YYYY')}
// //                                             </MenuItem>
// //                                         ))}
// //                                     </Select>
// //                                 </FormControl>
// //                             </Grid>
// //                         </Grid>
// //                         <Box mt={3}>
// //                             {feeLoading ? <Typography>Loading fees...</Typography> : (
// //                                 <AdmissionFeeForm
// //                                     initialData={fees}
// //                                     onSubmit={handleCreateFees}
// //                                     onUpdate={handleUpdateFees}
// //                                     onDelete={handleDeleteFees}
// //                                     loading={feeLoading}
// //                                 />
// //                             )}
// //                         </Box>
// //                     </Box>
// //                 </main>
// //             </div>
// //         </div>
// //     );
// // };

// // export default AdminFeeManagementLayout;



// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { authService } from '../../services/authService';
// import { getSidebarItems } from '../../constants/sidebarItems';
// import Sidebar from '../../components/Sidebar/Sidebar';
// import Header from '../../components/Header/Header';
// import {
//   Box, Typography, FormControl, InputLabel, Select, MenuItem,
//   Grid, Card, CardContent
// } from "@mui/material";

// import AdmissionFeeForm from '../../components/FeeManagement/AdmissionFeeForm';

// import './AdminLayout.css';
// import { classService } from '../../services/classService';
// import { feeService } from '../../services/feeService';
// import dayjs from 'dayjs';

// const AdminFeeManagementLayout = () => {
//     const [loading, setLoading] = useState(true);

//     const [user, setUser] = useState(null);
//     const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//     const [stats, setStats] = useState({
//         totalStudents: 245,
//         totalTeachers: 18,
//         totalClasses: 12,
//         activeUsers: 156
//     });

//     const navigate = useNavigate();
//     const location = useLocation();
    
//     const [allClasses, setAllClasses] = useState([]);
//     const [selectedClassId, setSelectedClassId] = useState('');
//     const [fees, setFees] = useState({});
//     const [feeLoading, setFeeLoading] = useState(false);
    
//     const [academicYears, setAcademicYears] = useState([]);
//     const [selectedYear, setSelectedYear] = useState('');

//     const getActiveSection = () => {
//         const path = location.pathname;
//         if (path.includes('/fees')) return 'fees';
//         return 'dashboard';
//     };
//     const [activeSection, setActiveSection] = useState(getActiveSection());
//     const sidebarItems = getSidebarItems(stats);

//     useEffect(() => {
//         fetchUserData();
//         fetchClasses();
//         const savedSidebarState = localStorage.getItem('sidebarCollapsed');
//         if (savedSidebarState) {
//             setSidebarCollapsed(JSON.parse(savedSidebarState));
//         }
//     }, []);

//     useEffect(() => {
//         setActiveSection(getActiveSection());
//     }, [location]);

//     useEffect(() => {
//         if (selectedClassId) {
//             fetchAcademicYears(selectedClassId);
//         }
//     }, [selectedClassId]);

//     useEffect(() => {
//         if (selectedClassId && selectedYear) {
//             fetchFeesForClassAndYear(selectedClassId, selectedYear);
//         }
//     }, [selectedYear]);
    
//     const fetchUserData = async () => {
//         try {
//             setLoading(true);
//             const userData = await authService.getCurrentUser();
//             setUser(userData);
//         } catch (error) {
//             console.error('Failed to fetch user data:', error);
//             if (error.response?.status === 401) {
//                 navigate('/login');
//             }
//         } finally {
//             setLoading(false);
//         }
//     };
    
//     const fetchClasses = async () => {
//         try {
//             const classes = await classService.getClasses();
//             setAllClasses(classes);
//             if (classes.length > 0) {
//                 setSelectedClassId(classes[0].id);
//             }
//         } catch (error) {
//             console.error('Failed to fetch classes:', error);
//         }
//     };

//     const fetchAcademicYears = async (classId) => {
//         try {
//             const years = await feeService.getAcademicYearsByClassId(classId);
//             setAcademicYears(years);
//             if (years.length > 0) {
//                 setSelectedYear(years[years.length - 1]);
//             } else {
//                 setSelectedYear('');
//                 setFees({});
//             }
//         } catch (error) {
//             console.error('Failed to fetch academic years:', error);
//         }
//     };
    
//     const fetchFeesForClassAndYear = async (classId, year) => {
//         setFeeLoading(true);
//         try {
//             // Corrected: Pass start and end dates to the service
//             const classFees = await feeService.getFeesByClassAndYear(classId, year.start, year.end);
//             setFees(classFees || {});
//         } catch (error) {
//             console.error('Failed to fetch fees:', error);
//             setFees({});
//         } finally {
//             setFeeLoading(false);
//         }
//     };
    
//     const handleLogout = async () => {
//         try {
//             await authService.logout();
//             navigate('/login');
//         } catch (error) {
//             console.error('Logout error:', error);
//             navigate('/login');
//         }
//     };

//     const handleSectionChange = (sectionId) => {
//         setActiveSection(sectionId);
//         switch(sectionId) {
//             case 'dashboard': navigate('/admin/dashboard'); break;
//             case 'classes': navigate('/admin/classes'); break;
//             case 'students': navigate('/admin/students'); break;
//             case 'teachers': navigate('/admin/teachers'); break;
//             case 'examinations': navigate('/admin/examinations'); break;
//             case 'library': navigate('/admin/library'); break;
//             case 'fees': navigate('/admin/fees'); break;
//             case 'reports': navigate('/admin/reports'); break;
//             case 'settings': navigate('/admin/settings'); break;
//             default: navigate('/admin');
//         }
//     };

//     const toggleSidebar = () => {
//         const newState = !sidebarCollapsed;
//         setSidebarCollapsed(newState);
//         localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
//     };

//     const handleCreateFees = async (feeData) => {
//         // ... (existing logic)
//     };

//     const handleUpdateFees = async (feeData) => {
//         // ... (existing logic)
//     };
    
//     const handleDeleteFees = async () => {
//         // ... (existing logic)
//     };

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className="admin-layout">
//             <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} activeSection={activeSection} onSectionChange={handleSectionChange} user={user} onLogout={handleLogout} stats={stats} />
//             <div className={`admin-layout-main ${sidebarCollapsed ? 'expanded' : ''}`}>
//                 <Header user={user} onLogout={handleLogout} currentSection={activeSection} sidebarItems={sidebarItems} />
//                 <main className="admin-content">
//                     <Box sx={{ p: 2 }}>
//                         <Typography variant="h4" gutterBottom>Fee Management</Typography>
//                         <Grid container spacing={3}>
//                             <Grid item xs={12} sm={6}>
//                                 <FormControl fullWidth>
//                                     <InputLabel id="select-class-label">Select Class</InputLabel>
//                                     <Select
//                                         labelId="select-class-label"
//                                         value={selectedClassId}
//                                         label="Select Class"
//                                         onChange={(e) => setSelectedClassId(e.target.value)}
//                                     >
//                                         {allClasses.map((cls) => (
//                                             <MenuItem key={cls.id} value={cls.id}>
//                                                 {cls.name} ({cls.medium})
//                                             </MenuItem>
//                                         ))}
//                                     </Select>
//                                 </FormControl>
//                             </Grid>
//                             <Grid item xs={12} sm={6}>
//                                 <FormControl fullWidth disabled={academicYears.length === 0}>
//                                     <InputLabel id="select-year-label">Academic Year</InputLabel>
//                                     <Select
//                                         labelId="select-year-label"
//                                         value={selectedYear}
//                                         label="Academic Year"
//                                         onChange={(e) => setSelectedYear(e.target.value)}
//                                         renderValue={(selected) => 
//                                             `${dayjs(selected.start).format('MMM D, YYYY')} - ${dayjs(selected.end).format('MMM D, YYYY')}`
//                                         }
//                                     >
//                                         {academicYears.map((year, index) => (
//                                             <MenuItem key={index} value={year}>
//                                                 {dayjs(year.start).format('MMM D, YYYY')} - {dayjs(year.end).format('MMM D, YYYY')}
//                                             </MenuItem>
//                                         ))}
//                                     </Select>
//                                 </FormControl>
//                             </Grid>
//                         </Grid>
//                         <Box mt={3}>
//                             {feeLoading ? <Typography>Loading fees...</Typography> : (
//                                 <AdmissionFeeForm
//                                     initialData={fees}
//                                     onSubmit={handleCreateFees}
//                                     onUpdate={handleUpdateFees}
//                                     onDelete={handleDeleteFees}
//                                     loading={feeLoading}
//                                 />
//                             )}
//                         </Box>
//                     </Box>
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default AdminFeeManagementLayout;



// import React, { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { authService } from '../../services/authService';
// import { getSidebarItems } from '../../constants/sidebarItems';
// import Sidebar from '../../components/Sidebar/Sidebar';
// import Header from '../../components/Header/Header';
// import {
//   Box, Typography, FormControl, InputLabel, Select, MenuItem,
//   Grid, Card, CardContent
// } from "@mui/material";

// // Corrected import: Use the dynamic form
// import AdmissionFeeForm from '../../components/FeeManagement/AdmissionFeeForm';

// import './AdminLayout.css';
// import { classService } from '../../services/classService';
// import { feeService } from '../../services/feeService';
// import dayjs from 'dayjs';

// const AdminFeeManagementLayout = () => {
//     const [loading, setLoading] = useState(true);
//     const [user, setUser] = useState(null);
//     const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//     const [stats, setStats] = useState({
//         totalStudents: 245,
//         totalTeachers: 18,
//         totalClasses: 12,
//         activeUsers: 156
//     });

//     const navigate = useNavigate();
//     const location = useLocation();
    
//     const [allClasses, setAllClasses] = useState([]);
//     const [selectedClassId, setSelectedClassId] = useState('');
//     const [fees, setFees] = useState({});
//     const [feeLoading, setFeeLoading] = useState(false);
    
//     const [academicYears, setAcademicYears] = useState([]);
//     const [selectedYear, setSelectedYear] = useState('');

//     const getActiveSection = () => {
//         const path = location.pathname;
//         if (path.includes('/fees')) return 'fees';
//         return 'dashboard';
//     };
//     const [activeSection, setActiveSection] = useState(getActiveSection());
//     const sidebarItems = getSidebarItems(stats);

//     useEffect(() => {
//         fetchUserData();
//         fetchClasses();
//         const savedSidebarState = localStorage.getItem('sidebarCollapsed');
//         if (savedSidebarState) {
//             setSidebarCollapsed(JSON.parse(savedSidebarState));
//         }
//     }, []);

//     useEffect(() => {
//         setActiveSection(getActiveSection());
//     }, [location]);

//     useEffect(() => {
//         if (selectedClassId) {
//             fetchAcademicYears(selectedClassId);
//         }
//     }, [selectedClassId]);

//     useEffect(() => {
//         if (selectedClassId && selectedYear) {
//             fetchFeesForClassAndYear(selectedClassId, selectedYear.start, selectedYear.end);
//         }
//     }, [selectedYear]);
    
//     const fetchUserData = async () => {
//         try {
//             setLoading(true);
//             const userData = await authService.getCurrentUser();
//             setUser(userData);
//         } catch (error) {
//             console.error('Failed to fetch user data:', error);
//             if (error.response?.status === 401) {
//                 navigate('/login');
//             }
//         } finally {
//             setLoading(false);
//         }
//     };
    
//     const fetchClasses = async () => {
//         try {
//             const classes = await classService.getClasses();
//             setAllClasses(classes);
//             if (classes.length > 0) {
//                 setSelectedClassId(classes[0].id);
//             }
//         } catch (error) {
//             console.error('Failed to fetch classes:', error);
//         }
//     };

//     const fetchAcademicYears = async (classId) => {
//         try {
//             const years = await feeService.getAcademicYearsByClassId(classId);
//             setAcademicYears(years);
//             if (years.length > 0) {
//                 setSelectedYear(years[years.length - 1]);
//             } else {
//                 setSelectedYear('');
//                 setFees({});
//             }
//         } catch (error) {
//             console.error('Failed to fetch academic years:', error);
//         }
//     };
    
//     const fetchFeesForClassAndYear = async (classId, start, end) => {
//         setFeeLoading(true);
//         try {
//             const classFees = await feeService.getFeesByClassAndYear(classId, start, end);
//             setFees(classFees || {});
//         } catch (error) {
//             console.error('Failed to fetch fees:', error);
//             setFees({});
//         } finally {
//             setFeeLoading(false);
//         }
//     };
    
//     const handleLogout = async () => {
//         try {
//             await authService.logout();
//             navigate('/login');
//         } catch (error) {
//             console.error('Logout error:', error);
//             navigate('/login');
//         }
//     };

//     const handleSectionChange = (sectionId) => {
//         setActiveSection(sectionId);
//         switch(sectionId) {
//             case 'dashboard': navigate('/admin/dashboard'); break;
//             case 'classes': navigate('/admin/classes'); break;
//             case 'students': navigate('/admin/students'); break;
//             case 'teachers': navigate('/admin/teachers'); break;
//             case 'examinations': navigate('/admin/examinations'); break;
//             case 'library': navigate('/admin/library'); break;
//             case 'fees': navigate('/admin/fees'); break;
//             case 'reports': navigate('/admin/reports'); break;
//             case 'settings': navigate('/admin/settings'); break;
//             default: navigate('/admin');
//         }
//     };

//     const toggleSidebar = () => {
//         const newState = !sidebarCollapsed;
//         setSidebarCollapsed(newState);
//         localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
//     };

//     // Corrected: Implemented the logic for creating, updating, and deleting fees
//     const handleCreateFees = async (feeData) => {
//         setFeeLoading(true);
//         try {
//             const response = await feeService.addFee(selectedClassId, feeData);
//             console.log('Fees saved successfully:', response);
//             setFees(response);
//         } catch (error) {
//             console.error('Failed to save fees:', error);
//         } finally {
//             setFeeLoading(false);
//         }
//     };

//     const handleUpdateFees = async (feeData) => {
//         setFeeLoading(true);
//         try {
//             const response = await feeService.updateFee(selectedClassId, feeData);
//             console.log('Fees updated successfully:', response);
//             setFees(response);
//         } catch (error) {
//             console.error('Failed to update fees:', error);
//         } finally {
//             setFeeLoading(false);
//         }
//     };
    
//     const handleDeleteFees = async () => {
//         if (!window.confirm("Are you sure you want to delete these fees?")) return;
//         setFeeLoading(true);
//         try {
//             await feeService.deleteFee(selectedClassId);
//             console.log('Fees deleted successfully.');
//             setFees({});
//         } catch (error) {
//             console.error('Failed to delete fees:', error);
//         } finally {
//             setFeeLoading(false);
//         }
//     };

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className="admin-layout">
//             <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} activeSection={activeSection} onSectionChange={handleSectionChange} user={user} onLogout={handleLogout} stats={stats} />
//             <div className={`admin-layout-main ${sidebarCollapsed ? 'expanded' : ''}`}>
//                 <Header user={user} onLogout={handleLogout} currentSection={activeSection} sidebarItems={sidebarItems} />
//                 <main className="admin-content">
//                     <Box sx={{ p: 2 }}>
//                         <Typography variant="h4" gutterBottom>Fee Management</Typography>
//                         <Grid container spacing={3}>
//                             <Grid item xs={12} sm={6}>
//                                 <FormControl fullWidth>
//                                     <InputLabel id="select-class-label">Select Class</InputLabel>
//                                     <Select
//                                         labelId="select-class-label"
//                                         value={selectedClassId}
//                                         label="Select Class"
//                                         onChange={(e) => setSelectedClassId(e.target.value)}
//                                     >
//                                         {allClasses.map((cls) => (
//                                             <MenuItem key={cls.id} value={cls.id}>
//                                                 {cls.name} ({cls.medium})
//                                             </MenuItem>
//                                         ))}
//                                     </Select>
//                                 </FormControl>
//                             </Grid>
//                             <Grid item xs={12} sm={6}>
//                                 <FormControl fullWidth disabled={academicYears.length === 0}>
//                                     <InputLabel id="select-year-label">Academic Year</InputLabel>
//                                     <Select
//                                         labelId="select-year-label"
//                                         value={selectedYear}
//                                         label="Academic Year"
//                                         onChange={(e) => setSelectedYear(e.target.value)}
//                                         renderValue={(selected) => 
//                                             `${dayjs(selected.start).format('MMM D, YYYY')} - ${dayjs(selected.end).format('MMM D, YYYY')}`
//                                         }
//                                     >
//                                         {academicYears.map((year, index) => (
//                                             <MenuItem key={index} value={year}>
//                                                 {dayjs(year.start).format('MMM D, YYYY')} - {dayjs(year.end).format('MMM D, YYYY')}
//                                             </MenuItem>
//                                         ))}
//                                     </Select>
//                                 </FormControl>
//                             </Grid>
//                         </Grid>
//                         <Box mt={3}>
//                             {feeLoading ? <Typography>Loading fees...</Typography> : (
//                                 <AdmissionFeeForm
//                                     initialData={fees}
//                                     onSubmit={handleCreateFees}
//                                     onUpdate={handleUpdateFees}
//                                     onDelete={handleDeleteFees}
//                                     loading={feeLoading}
//                                 />
//                             )}
//                         </Box>
//                     </Box>
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default AdminFeeManagementLayout;



import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { authService } from '../../services/authService';
import { getSidebarItems } from '../../constants/sidebarItems';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import {
  Box, Typography, FormControl, InputLabel, Select, MenuItem,
  Grid, Snackbar, Alert, CircularProgress
} from "@mui/material";

// Renamed from DynamicFeeForm to reflect its use case
import AdmissionFeeForm from '../../components/FeeManagement/AdmissionFeeForm'; 
import { classService } from '../../services/classService';
import { feeService } from '../../services/feeService';
import dayjs from 'dayjs';

import './AdminLayout.css';

const AdminFeeManagementLayout = () => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [stats, setStats] = useState({
        totalStudents: 245,
        totalTeachers: 18,
        totalClasses: 12,
        activeUsers: 156
    });

    const navigate = useNavigate();
    const location = useLocation();
    
    // Fee management state
    const [allClasses, setAllClasses] = useState([]);
    const [selectedClassId, setSelectedClassId] = useState('');
    const [fees, setFees] = useState(null); // Use null for no data
    const [feeLoading, setFeeLoading] = useState(false);
    
    const [academicYears, setAcademicYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null); // Use null for initial/empty state

    // Snackbar state for user feedback
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });

    const getActiveSection = () => {
        const path = location.pathname;
        if (path.includes('/fees')) return 'fees';
        return 'dashboard';
    };
    const [activeSection, setActiveSection] = useState(getActiveSection());
    const sidebarItems = getSidebarItems(stats);

    // Initial data fetch
    useEffect(() => {
        fetchUserData();
        fetchClasses();
        const savedSidebarState = localStorage.getItem('sidebarCollapsed');
        if (savedSidebarState) {
            setSidebarCollapsed(JSON.parse(savedSidebarState));
        }
    }, []);

    useEffect(() => {
        setActiveSection(getActiveSection());
    }, [location]);

    // Chain fetches: Class -> Academic Years -> Fee Structure
    useEffect(() => {
        if (selectedClassId) {
            fetchAcademicYears(selectedClassId);
        }
    }, [selectedClassId]);

    useEffect(() => {
        if (selectedClassId && selectedYear) {
            fetchFeesForClassAndYear(selectedClassId, selectedYear.start, selectedYear.end);
        } else {
            setFees(null); // Clear fees if no year is selected
        }
    }, [selectedClassId, selectedYear]); // Depend on both
    
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
    
    const fetchClasses = async () => {
        try {
            const classes = await classService.getClasses();
            setAllClasses(classes);
            if (classes.length > 0) {
                setSelectedClassId(classes[0].id);
            }
        } catch (error) {
            console.error('Failed to fetch classes:', error);
            setSnackbar({ open: true, message: 'Failed to load classes.', severity: 'error' });
        }
    };

    const fetchAcademicYears = async (classId) => {
        try {
            const years = await feeService.getAcademicYearsByClassId(classId);
            setAcademicYears(years);
            // Automatically select the latest academic year, or clear selection if none exist
            if (years.length > 0) {
                setSelectedYear(years[years.length - 1]);
            } else {
                setSelectedYear(null);
                setFees(null);
            }
        } catch (error) {
            console.error('Failed to fetch academic years:', error);
            setSnackbar({ open: true, message: 'Failed to load academic years.', severity: 'error' });
        }
    };
    
    const fetchFeesForClassAndYear = async (classId, start, end) => {
        setFeeLoading(true);
        try {
            const classFees = await feeService.getFeesByClassAndYear(classId, start, end);
            setFees(classFees || null); // Use null if no fees are found to reset the form
        } catch (error) {
            console.error('Failed to fetch fees:', error);
            setFees(null);
        } finally {
            setFeeLoading(false);
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
        switch(sectionId) {
            case 'dashboard': navigate('/admin/dashboard'); break;
            case 'classes': navigate('/admin/classes'); break;
            case 'students': navigate('/admin/students'); break;
            case 'teachers': navigate('/admin/teachers'); break;
            case 'examinations': navigate('/admin/examinations'); break;
            case 'library': navigate('/admin/library'); break;
            case 'fees': navigate('/admin/fees'); break;
            case 'reports': navigate('/admin/reports'); break;
            case 'settings': navigate('/admin/settings'); break;
            default: navigate('/admin');
        }
    };

    const toggleSidebar = () => {
        const newState = !sidebarCollapsed;
        setSidebarCollapsed(newState);
        localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
    };

    // --- CRUD Handlers with User Feedback ---
    const handleCreateFees = async (feeData) => {
        setFeeLoading(true);
        try {
            const response = await feeService.addFee(selectedClassId, feeData);
            setFees(response); // Update state with the newly created fee structure
            setSnackbar({ open: true, message: 'Fee structure saved successfully!', severity: 'success' });
            // Refresh academic years to include the new one if necessary
            await fetchAcademicYears(selectedClassId);
        } catch (error) {
            console.error('Failed to save fees:', error);
            setSnackbar({ open: true, message: 'Failed to save fees.', severity: 'error' });
        } finally {
            setFeeLoading(false);
        }
    };

    const handleUpdateFees = async (feeData) => {
        if (!fees?.id) {
            setSnackbar({ open: true, message: 'Cannot update. Fee ID is missing.', severity: 'error' });
            return;
        }
        setFeeLoading(true);
        try {
            // Corrected: Pass the specific fee ID to the service
            const response = await feeService.updateFee(fees.id, feeData);
            setFees(response);
            setSnackbar({ open: true, message: 'Fee structure updated successfully!', severity: 'success' });
        } catch (error) {
            console.error('Failed to update fees:', error);
            setSnackbar({ open: true, message: 'Failed to update fees.', severity: 'error' });
        } finally {
            setFeeLoading(false);
        }
    };
    
    const handleDeleteFees = async () => {
        if (!fees?.id) {
            setSnackbar({ open: true, message: 'Cannot delete. Fee ID is missing.', severity: 'error' });
            return;
        }
        if (!window.confirm("Are you sure you want to delete this fee structure? This action cannot be undone.")) return;
        
        setFeeLoading(true);
        try {
            // Corrected: Pass the specific fee ID to the service
            await feeService.deleteFee(fees.id);
            setSnackbar({ open: true, message: 'Fee structure deleted successfully.', severity: 'success' });
            setFees(null); // Clear the form
            await fetchAcademicYears(selectedClassId); // Refresh years list
        } catch (error) {
            console.error('Failed to delete fees:', error);
            setSnackbar({ open: true, message: 'Failed to delete fees.', severity: 'error' });
        } finally {
            setFeeLoading(false);
        }
    };
    
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;
        setSnackbar(prev => ({ ...prev, open: false }));
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <div className="admin-layout">
            <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} activeSection={activeSection} onSectionChange={handleSectionChange} user={user} onLogout={handleLogout} stats={stats} />
            <div className={`admin-layout-main ${sidebarCollapsed ? 'expanded' : ''}`}>
                <Header user={user} onLogout={handleLogout} currentSection={activeSection} sidebarItems={sidebarItems} />
                <main className="admin-content">
                    <Box sx={{ p: 3 }}>
                        <Typography variant="h4" gutterBottom>Fee Management</Typography>
                        <Grid container spacing={3} sx={{ mb: 3 }}>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="select-class-label">Select Class</InputLabel>
                                    <Select
                                        labelId="select-class-label"
                                        value={selectedClassId}
                                        label="Select Class"
                                        onChange={(e) => setSelectedClassId(e.target.value)}
                                    >
                                        {allClasses.map((cls) => (
                                            <MenuItem key={cls.id} value={cls.id}>
                                                {cls.name} ({cls.medium})
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth disabled={!selectedClassId || academicYears.length === 0}>
                                    <InputLabel id="select-year-label">Academic Year</InputLabel>
                                    <Select
                                        labelId="select-year-label"
                                        value={selectedYear || ''} // Handle null state
                                        label="Academic Year"
                                        onChange={(e) => setSelectedYear(e.target.value)}
                                        // Render a user-friendly format, handle null case
                                        renderValue={(selected) => 
                                            selected ? `${dayjs(selected.start).format('MMM D, YYYY')} - ${dayjs(selected.end).format('MMM D, YYYY')}` : <em>Select a year</em>
                                        }
                                    >
                                        {academicYears.map((year, index) => (
                                            <MenuItem key={index} value={year}>
                                                {dayjs(year.start).format('MMM D, YYYY')} - {dayjs(year.end).format('MMM D, YYYY')}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        
                        <Box mt={2}>
                            {feeLoading ? (
                                <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}><CircularProgress /></Box>
                            ) : (
                                <AdmissionFeeForm
                                    key={fees?.id || 'new-form'} // Force re-render when data changes
                                    initialData={fees}
                                    onSubmit={handleCreateFees}
                                    onUpdate={handleUpdateFees}
                                    onDelete={handleDeleteFees}
                                    loading={feeLoading}
                                />
                            )}
                        </Box>
                    </Box>
                </main>
            </div>
            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default AdminFeeManagementLayout;