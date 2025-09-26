// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate, useLocation } from 'react-router-dom';
// // // import { authService } from '../../services/authService';
// // // import { getSidebarItems } from '../../constants/sidebarItems';
// // // import Sidebar from '../../components/Sidebar/Sidebar';
// // // import Header from '../../components/Header/Header';
// // // import {
// // //   Box, Typography, FormControl, InputLabel, Select, MenuItem,
// // //   Grid, Card, CardContent
// // // } from "@mui/material";

// // // import AdmissionFeeForm from '../../components/FeeManagement/AdmissionFeeForm';

// // // import './AdminLayout.css';
// // // import { classService } from '../../services/classService';
// // // import { feeService } from '../../services/feeService';
// // // import dayjs from 'dayjs';

// // // const AdminFeeManagementLayout = () => {
// // //     const [loading, setLoading] = useState(true);

// // //     const [user, setUser] = useState(null);
// // //     const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
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
    
// // //     const [academicYears, setAcademicYears] = useState([]);
// // //     const [selectedYear, setSelectedYear] = useState('');

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
// // //             fetchAcademicYears(selectedClassId);
// // //         }
// // //     }, [selectedClassId]);

// // //     useEffect(() => {
// // //         if (selectedClassId && selectedYear) {
// // //             fetchFeesForClassAndYear(selectedClassId, selectedYear);
// // //         }
// // //     }, [selectedYear]);
    
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

// // //     const fetchAcademicYears = async (classId) => {
// // //         try {
// // //             const years = await feeService.getAcademicYearsByClassId(classId);
// // //             setAcademicYears(years);
// // //             if (years.length > 0) {
// // //                 setSelectedYear(years[years.length - 1]);
// // //             } else {
// // //                 setSelectedYear('');
// // //                 setFees({});
// // //             }
// // //         } catch (error) {
// // //             console.error('Failed to fetch academic years:', error);
// // //         }
// // //     };
    
// // //     const fetchFeesForClassAndYear = async (classId, year) => {
// // //         setFeeLoading(true);
// // //         try {
// // //             // Corrected: Pass start and end dates to the service
// // //             const classFees = await feeService.getFeesByClassAndYear(classId, year.start, year.end);
// // //             setFees(classFees || {});
// // //         } catch (error) {
// // //             console.error('Failed to fetch fees:', error);
// // //             setFees({});
// // //         } finally {
// // //             setFeeLoading(false);
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
// // //         // ... (existing logic)
// // //     };

// // //     const handleUpdateFees = async (feeData) => {
// // //         // ... (existing logic)
// // //     };
    
// // //     const handleDeleteFees = async () => {
// // //         // ... (existing logic)
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
// // //                         <Grid container spacing={3}>
// // //                             <Grid item xs={12} sm={6}>
// // //                                 <FormControl fullWidth>
// // //                                     <InputLabel id="select-class-label">Select Class</InputLabel>
// // //                                     <Select
// // //                                         labelId="select-class-label"
// // //                                         value={selectedClassId}
// // //                                         label="Select Class"
// // //                                         onChange={(e) => setSelectedClassId(e.target.value)}
// // //                                     >
// // //                                         {allClasses.map((cls) => (
// // //                                             <MenuItem key={cls.id} value={cls.id}>
// // //                                                 {cls.name} ({cls.medium})
// // //                                             </MenuItem>
// // //                                         ))}
// // //                                     </Select>
// // //                                 </FormControl>
// // //                             </Grid>
// // //                             <Grid item xs={12} sm={6}>
// // //                                 <FormControl fullWidth disabled={academicYears.length === 0}>
// // //                                     <InputLabel id="select-year-label">Academic Year</InputLabel>
// // //                                     <Select
// // //                                         labelId="select-year-label"
// // //                                         value={selectedYear}
// // //                                         label="Academic Year"
// // //                                         onChange={(e) => setSelectedYear(e.target.value)}
// // //                                         renderValue={(selected) => 
// // //                                             `${dayjs(selected.start).format('MMM D, YYYY')} - ${dayjs(selected.end).format('MMM D, YYYY')}`
// // //                                         }
// // //                                     >
// // //                                         {academicYears.map((year, index) => (
// // //                                             <MenuItem key={index} value={year}>
// // //                                                 {dayjs(year.start).format('MMM D, YYYY')} - {dayjs(year.end).format('MMM D, YYYY')}
// // //                                             </MenuItem>
// // //                                         ))}
// // //                                     </Select>
// // //                                 </FormControl>
// // //                             </Grid>
// // //                         </Grid>
// // //                         <Box mt={3}>
// // //                             {feeLoading ? <Typography>Loading fees...</Typography> : (
// // //                                 <AdmissionFeeForm
// // //                                     initialData={fees}
// // //                                     onSubmit={handleCreateFees}
// // //                                     onUpdate={handleUpdateFees}
// // //                                     onDelete={handleDeleteFees}
// // //                                     loading={feeLoading}
// // //                                 />
// // //                             )}
// // //                         </Box>
// // //                     </Box>
// // //                 </main>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default AdminFeeManagementLayout;



// // import React, { useState, useEffect } from 'react';
// // import { useNavigate, useLocation } from 'react-router-dom';
// // import { authService } from '../../services/authService';
// // import { getSidebarItems } from '../../constants/sidebarItems';
// // import Sidebar from '../../components/Sidebar/Sidebar';
// // import Header from '../../components/Header/Header';
// // import {
// //   Box, Typography, FormControl, InputLabel, Select, MenuItem,
// //   Grid, Card, CardContent
// // } from "@mui/material";

// // // Corrected import: Use the dynamic form
// // import AdmissionFeeForm from '../../components/FeeManagement/AdmissionFeeForm';

// // import './AdminLayout.css';
// // import { classService } from '../../services/classService';
// // import { feeService } from '../../services/feeService';
// // import dayjs from 'dayjs';

// // const AdminFeeManagementLayout = () => {
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
// //             fetchFeesForClassAndYear(selectedClassId, selectedYear.start, selectedYear.end);
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
    
// //     const fetchFeesForClassAndYear = async (classId, start, end) => {
// //         setFeeLoading(true);
// //         try {
// //             const classFees = await feeService.getFeesByClassAndYear(classId, start, end);
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

// //     // Corrected: Implemented the logic for creating, updating, and deleting fees
// //     const handleCreateFees = async (feeData) => {
// //         console.log("fee data------------------",feeData)
// //         setFeeLoading(true);
// //         try {
// //             const response = await feeService.addFee(selectedClassId, feeData);
// //             console.log('Fees saved successfully:', response);
// //             setFees(response);
// //         } catch (error) {
// //             console.error('Failed to save fees:', error);
// //         } finally {
// //             setFeeLoading(false);
// //         }
// //     };

// //     const handleUpdateFees = async (feeData) => {
// //         console.log("fee data------------------",feeData)
// //         setFeeLoading(true);
// //         try {
// //             const response = await feeService.updateFee(selectedClassId, feeData);
// //             console.log('Fees updated successfully:', response);
// //             setFees(response);
// //         } catch (error) {
// //             console.error('Failed to update fees:', error);
// //         } finally {
// //             setFeeLoading(false);
// //         }
// //     };
    
// //     const handleDeleteFees = async () => {
// //         if (!window.confirm("Are you sure you want to delete these fees?")) return;
// //         setFeeLoading(true);
// //         try {
// //             await feeService.deleteFee(selectedClassId);
// //             console.log('Fees deleted successfully.');
// //             setFees({});
// //         } catch (error) {
// //             console.error('Failed to delete fees:', error);
// //         } finally {
// //             setFeeLoading(false);
// //         }
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
//     Box, Typography, FormControl, InputLabel, Select, MenuItem,
//     Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions
// } from "@mui/material";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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
//     const [isYearModalOpen, setIsYearModalOpen] = useState(false);
//     const [newAcademicYear, setNewAcademicYear] = useState({ start: null, end: null });

//     const getActiveSection = () => {
//         const path = location.pathname;
//         if (path.includes('/fees')) return 'fees';
//         return 'dashboard';
//     };
//     const [activeSection, setActiveSection] = useState(getActiveSection());
//     const sidebarItems = getSidebarItems(stats);

//     useEffect(() => {
//         const loadInitialData = async () => {
//             try {
//                 const userData = await authService.getCurrentUser();
//                 setUser(userData);
//                 const classes = await classService.getClasses();
//                 setAllClasses(classes);
//                 if (classes.length > 0) {
//                     setSelectedClassId(classes[0].id);
//                 }
//             } catch (error) {
//                 console.error("Failed to load initial data:", error);
//                 if (error.response?.status === 401) navigate('/login');
//             } finally {
//                 setLoading(false);
//             }
//         };
//         loadInitialData();
//         const savedSidebarState = localStorage.getItem('sidebarCollapsed');
//         if (savedSidebarState) {
//             setSidebarCollapsed(JSON.parse(savedSidebarState));
//         }
//     }, [navigate]);

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
//         } else {
//             setFees({});
//         }
//     }, [selectedClassId, selectedYear]);

//     // --- CORRECTED FUNCTION ---
//     const fetchAcademicYears = async (classId) => {
//         try {
//             // Clear previous state to prevent showing old data for a new class
//             setAcademicYears([]);
//             setSelectedYear('');

//             const years = await feeService.getAcademicYearsByClassId(classId);
//             setAcademicYears(years);

//             // If years are found, set a sensible default (the most recent one)
//             if (years.length > 0) {
//                 // Sorting to ensure the last one is the most recent
//                 const sortedYears = years.sort((a, b) => new Date(b.start) - new Date(a.start));
//                 setSelectedYear(sortedYears[0]);
//             }
//         } catch (error) {
//             console.error(`Failed to fetch academic years for class ${classId}:`, error);
//             // Ensure state is clean on error
//             setAcademicYears([]);
//             setSelectedYear('');
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
    
//     // Other handlers remain the same...
//     const handleLogout = async () => {/* ... */};
//     const handleSectionChange = (sectionId) => {/* ... */};
//     const toggleSidebar = () => {/* ... */};
//     const handleOpenYearModal = () => setIsYearModalOpen(true);
//     const handleCloseYearModal = () => setIsYearModalOpen(false);
//     const handleModalDateChange = (type) => (date) => {
//         setNewAcademicYear(prev => ({ ...prev, [type]: date }));
//     };
//     const handleSaveNewYear = async () => {
//         if (!newAcademicYear.start || !newAcademicYear.end || !selectedClassId) {
//             alert("Please select a valid start and end date for the new academic year.");
//             return;
//         }
//         const newFeePayload = {
//             academic_year_start: newAcademicYear.start.format('YYYY-MM-DD'),
//             academic_year_end: newAcademicYear.end.format('YYYY-MM-DD'),
//             total_fee: 0, quarterly_fee: 0, payment_frequency: 4, fee_items: []
//         };
//         await handleCreateFees(newFeePayload, true);
//         handleCloseYearModal();
//         setNewAcademicYear({ start: null, end: null });
//     };
//     const handleCreateFees = async (feeData, isNewYear = false) => {
//         setFeeLoading(true);
//         try {
//             const response = await feeService.addFee(selectedClassId, feeData);
//             setFees(response);
//             if (isNewYear) {
//                 await fetchAcademicYears(selectedClassId);
//             }
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
//             setFees(response);
//         } catch (error) {
//             console.error('Failed to update fees:', error);
//         } finally {
//             setFeeLoading(false);
//         }
//     };
//     const handleDeleteFees = async () => {/* ... */};

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <div className="admin-layout">
//                 <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} activeSection={activeSection} onSectionChange={handleSectionChange} user={user} onLogout={handleLogout} stats={stats} />
//                 <div className={`admin-layout-main ${sidebarCollapsed ? 'expanded' : ''}`}>
//                     <Header user={user} onLogout={handleLogout} currentSection={activeSection} sidebarItems={sidebarItems} />
//                     <main className="admin-content">
//                         <Box sx={{ p: 3 }}>
//                             {/* <Typography variant="h4" gutterBottom>Fee Management</Typography> */}
//                             <Grid container spacing={3} alignItems="center">
//                                 <Grid item xs={12} sm={5}>
//                                     <FormControl fullWidth>
//                                         <InputLabel>Select Class</InputLabel>
//                                         <Select value={selectedClassId} label="Select Class" onChange={(e) => setSelectedClassId(e.target.value)}>
//                                             {allClasses.map((cls) => (<MenuItem key={cls.id} value={cls.id}>{cls.name} ({cls.medium})</MenuItem>))}
//                                         </Select>
//                                     </FormControl>
//                                 </Grid>
//                                 <Grid item xs={12} sm={5}>
//                                     <FormControl fullWidth disabled={!selectedClassId}>
//                                         <InputLabel>Academic Year</InputLabel>
//                                         <Select
//                                             value={selectedYear}
//                                             label="Academic Year"
//                                             onChange={(e) => setSelectedYear(e.target.value)} // This now works as expected
//                                             renderValue={(selected) => selected ? `${dayjs(selected.start).format('YYYY')} - ${dayjs(selected.end).format('YYYY')}` : ''}
//                                         >
//                                             {academicYears.map((year, index) => (
//                                                 <MenuItem key={index} value={year}>
//                                                     {dayjs(year.start).format('MMM D, YYYY')} - {dayjs(year.end).format('MMM D, YYYY')}
//                                                 </MenuItem>
//                                             ))}
//                                         </Select>
//                                     </FormControl>
//                                 </Grid>
//                                 <Grid item xs={12} sm={2}>
//                                     <Button variant="outlined" fullWidth onClick={handleOpenYearModal} disabled={!selectedClassId} startIcon={<AddCircleOutlineIcon />}>
//                                         New Year
//                                     </Button>
//                                 </Grid>
//                             </Grid>
//                             <Box mt={3}>
//                                 {feeLoading ? <Typography>Loading fees...</Typography> : 
//                                     (selectedClassId && selectedYear) ? (
//                                     <AdmissionFeeForm
//                                         initialData={fees}
//                                         onSubmit={handleCreateFees}
//                                         onUpdate={handleUpdateFees}
//                                         onDelete={handleDeleteFees}
//                                         loading={feeLoading}
//                                     />
//                                 ) : (
//                                     <Typography color="text.secondary" sx={{mt: 4, textAlign: 'center'}}>
//                                         Please select a class and an academic year to manage fees.
//                                     </Typography>
//                                 )}
//                             </Box>
//                         </Box>
//                     </main>
//                 </div>
//             </div>
//             <Dialog open={isYearModalOpen} onClose={handleCloseYearModal} fullWidth maxWidth="sm">
//                 <DialogTitle>Add New Academic Year</DialogTitle>
//                 <DialogContent>
//                     <Grid container spacing={3} sx={{ pt: 1 }}>
//                         <Grid item xs={12}>
//                             <DatePicker
//                                 label="Academic Year Start"
//                                 value={newAcademicYear.start}
//                                 onChange={handleModalDateChange('start')}
//                                 slotProps={{ textField: { fullWidth: true, margin: 'normal' } }}
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <DatePicker
//                                 label="Academic Year End"
//                                 value={newAcademicYear.end}
//                                 onChange={handleModalDateChange('end')}
//                                 slotProps={{ textField: { fullWidth: true, margin: 'normal' } }}
//                             />
//                         </Grid>
//                     </Grid>
//                 </DialogContent>
//                 <DialogActions sx={{ p: '16px 24px' }}>
//                     <Button onClick={handleCloseYearModal}>Cancel</Button>
//                     <Button onClick={handleSaveNewYear} variant="contained">Create & Save</Button>
//                 </DialogActions>
//             </Dialog>
//         </LocalizationProvider>
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
    Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions,
    FormControlLabel, Checkbox
} from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AdmissionFeeForm from '../../components/FeeManagement/AdmissionFeeForm';
import './AdminLayout.css';
import { classService } from '../../services/classService';
import { feeService } from '../../services/feeService';
import dayjs from 'dayjs';

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
    const [allClasses, setAllClasses] = useState([]);
    const [selectedClassId, setSelectedClassId] = useState('');
    const [fees, setFees] = useState({});
    const [feeLoading, setFeeLoading] = useState(false);
    const [academicYears, setAcademicYears] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');
    const [isYearModalOpen, setIsYearModalOpen] = useState(false);
    const [newAcademicYear, setNewAcademicYear] = useState({ start: null, end: null });
    const [applyToAllClasses, setApplyToAllClasses] = useState(false);

    const getActiveSection = () => {
        const path = location.pathname;
        if (path.includes('/fees')) return 'fees';
        return 'dashboard';
    };
    const [activeSection, setActiveSection] = useState(getActiveSection());
    const sidebarItems = getSidebarItems(stats);

    useEffect(() => {
        const loadInitialData = async () => {
            try {
                const userData = await authService.getCurrentUser();
                setUser(userData);
                const classes = await classService.getClasses();
                setAllClasses(classes);
                if (classes.length > 0) {
                    setSelectedClassId(classes[0].id);
                }
            } catch (error) {
                console.error("Failed to load initial data:", error);
                if (error.response?.status === 401) navigate('/login');
            } finally {
                setLoading(false);
            }
        };
        loadInitialData();
        const savedSidebarState = localStorage.getItem('sidebarCollapsed');
        if (savedSidebarState) {
            setSidebarCollapsed(JSON.parse(savedSidebarState));
        }
    }, [navigate]);

    useEffect(() => {
        setActiveSection(getActiveSection());
    }, [location]);

    useEffect(() => {
        if (selectedClassId) {
            fetchAcademicYears(selectedClassId);
        }
    }, [selectedClassId]);

    useEffect(() => {
        if (selectedClassId && selectedYear) {
            fetchFeesForClassAndYear(selectedClassId, selectedYear.start, selectedYear.end);
        } else {
            setFees({});
        }
    }, [selectedClassId, selectedYear]);

    const fetchAcademicYears = async (classId) => {
        try {
            setAcademicYears([]);
            setSelectedYear('');
            const years = await feeService.getAcademicYearsByClassId(classId);
            setAcademicYears(years);
            if (years.length > 0) {
                const sortedYears = years.sort((a, b) => new Date(b.start) - new Date(a.start));
                setSelectedYear(sortedYears[0]);
            }
        } catch (error) {
            console.error(`Failed to fetch academic years for class ${classId}:`, error);
            setAcademicYears([]);
            setSelectedYear('');
        }
    };

    const fetchFeesForClassAndYear = async (classId, start, end) => {
        setFeeLoading(true);
        try {
            const classFees = await feeService.getFeesByClassAndYear(classId, start, end);
            setFees(classFees || {});
        } catch (error) {
            console.error('Failed to fetch fees:', error);
            setFees({});
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
        navigate(`/admin/${sectionId}`);
    };

    const toggleSidebar = () => {
        const newState = !sidebarCollapsed;
        setSidebarCollapsed(newState);
        localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
    };

    const handleOpenYearModal = () => setIsYearModalOpen(true);

    const handleCloseYearModal = () => {
        setIsYearModalOpen(false);
        setNewAcademicYear({ start: null, end: null });
        setApplyToAllClasses(false);
    };

    const handleModalDateChange = (type) => (date) => {
        setNewAcademicYear(prev => ({ ...prev, [type]: date }));
    };

    const handleSaveNewYear = async () => {
        if (!newAcademicYear.start || !newAcademicYear.end) {
            alert("Please select a valid start and end date.");
            return;
        }
        const newFeePayload = {
            academic_year_start: newAcademicYear.start.format('YYYY-MM-DD'),
            academic_year_end: newAcademicYear.end.format('YYYY-MM-DD'),
            total_fee: 0,
            quarterly_fee: 0,
            payment_frequency: 4,
            fee_items: []
        };
        setFeeLoading(true);
        try {
            if (applyToAllClasses) {
                const promises = allClasses.map(cls =>
                    feeService.addFee(cls.id, newFeePayload)
                );
                await Promise.all(promises);
            } else {
                if (!selectedClassId) {
                    alert("No class selected.");
                    return;
                }
                await feeService.addFee(selectedClassId, newFeePayload);
            }
            await fetchAcademicYears(selectedClassId);
        } catch (error) {
            console.error('Failed to create new academic year(s):', error);
            alert('An error occurred. Please check the console for details.');
        } finally {
            setFeeLoading(false);
            handleCloseYearModal();
        }
    };

    const handleUpdateFees = async (feeData) => {
        setFeeLoading(true);
        try {
            const response = await feeService.updateFee(selectedClassId, feeData);
            setFees(response);
        } catch (error) {
            console.error('Failed to update fees:', error);
        } finally {
            setFeeLoading(false);
        }
    };

    const handleDeleteFees = async () => {
        if (!window.confirm("Are you sure you want to delete this fee structure?")) return;
        setFeeLoading(true);
        try {
            await feeService.deleteFee(fees.id);
            setFees({});
            await fetchAcademicYears(selectedClassId);
        } catch (error) {
            console.error('Failed to delete fees:', error);
        } finally {
            setFeeLoading(false);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="admin-layout">
                <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} activeSection={activeSection} onSectionChange={handleSectionChange} user={user} onLogout={handleLogout} stats={stats} />
                <div className={`admin-layout-main ${sidebarCollapsed ? 'expanded' : ''}`}>
                    <Header user={user} onLogout={handleLogout} currentSection={activeSection} sidebarItems={sidebarItems} />
                    <main className="admin-content">
                        <Box sx={{ p: 3 }}>
                            <Grid container spacing={3} alignItems="center">
                                <Grid item xs={12} sm={5}>
                                    <FormControl fullWidth>
                                        <InputLabel>Select Class</InputLabel>
                                        <Select value={selectedClassId} label="Select Class" onChange={(e) => setSelectedClassId(e.target.value)}>
                                            {allClasses.map((cls) => (<MenuItem key={cls.id} value={cls.id}>{cls.name} ({cls.medium})</MenuItem>))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <FormControl fullWidth disabled={!selectedClassId}>
                                        <InputLabel>Academic Year</InputLabel>
                                        <Select
                                            value={selectedYear}
                                            label="Academic Year"
                                            onChange={(e) => setSelectedYear(e.target.value)}
                                            renderValue={(selected) => selected ? `${dayjs(selected.start).format('YYYY')} - ${dayjs(selected.end).format('YYYY')}` : ''}
                                        >
                                            {academicYears.map((year, index) => (
                                                <MenuItem key={index} value={year}>
                                                    {dayjs(year.start).format('MMM D, YYYY')} - {dayjs(year.end).format('MMM D, YYYY')}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={2}>
                                    <Button variant="outlined" fullWidth onClick={handleOpenYearModal} disabled={!selectedClassId} startIcon={<AddCircleOutlineIcon />}>
                                        New Year
                                    </Button>
                                </Grid>
                            </Grid>
                            <Box mt={3}>
                                {feeLoading ? <Typography>Loading fees...</Typography> :
                                    (selectedClassId && selectedYear) ? (
                                    <AdmissionFeeForm
                                        initialData={fees}
                                        onUpdate={handleUpdateFees}
                                        onDelete={handleDeleteFees}
                                        loading={feeLoading}
                                    />
                                ) : (
                                    <Typography color="text.secondary" sx={{mt: 4, textAlign: 'center'}}>
                                        Please select a class and an academic year to manage fees.
                                    </Typography>
                                )}
                            </Box>
                        </Box>
                    </main>
                </div>
            </div>
            <Dialog open={isYearModalOpen} onClose={handleCloseYearModal} fullWidth maxWidth="sm">
                <DialogTitle>Add New Academic Year</DialogTitle>
                <DialogContent>
                    <Grid container spacing={3} sx={{ pt: 1 }}>
                        <Grid item xs={12}>
                            <DatePicker
                                label="Academic Year Start"
                                value={newAcademicYear.start}
                                onChange={handleModalDateChange('start')}
                                slotProps={{ textField: { fullWidth: true, margin: 'normal' } }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <DatePicker
                                label="Academic Year End"
                                value={newAcademicYear.end}
                                onChange={handleModalDateChange('end')}
                                slotProps={{ textField: { fullWidth: true, margin: 'normal' } }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={applyToAllClasses}
                                        onChange={(e) => setApplyToAllClasses(e.target.checked)}
                                    />
                                }
                                label="Apply this academic year to all classes"
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions sx={{ p: '16px 24px' }}>
                    <Button onClick={handleCloseYearModal}>Cancel</Button>
                    <Button onClick={handleSaveNewYear} variant="contained">Create & Save</Button>
                </DialogActions>
            </Dialog>
        </LocalizationProvider>
    );
};

export default AdminFeeManagementLayout;