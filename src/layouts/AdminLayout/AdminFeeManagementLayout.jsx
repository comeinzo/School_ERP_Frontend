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



import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { authService } from '../../services/authService';
import { getSidebarItems } from '../../constants/sidebarItems';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import {
  Box, Typography, FormControl, InputLabel, Select, MenuItem,
  Grid, Card, CardContent
} from "@mui/material";

// Corrected import: Use the dynamic form
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

    const getActiveSection = () => {
        const path = location.pathname;
        if (path.includes('/fees')) return 'fees';
        return 'dashboard';
    };
    const [activeSection, setActiveSection] = useState(getActiveSection());
    const sidebarItems = getSidebarItems(stats);

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

    useEffect(() => {
        if (selectedClassId) {
            fetchAcademicYears(selectedClassId);
        }
    }, [selectedClassId]);

    useEffect(() => {
        if (selectedClassId && selectedYear) {
            fetchFeesForClassAndYear(selectedClassId, selectedYear.start, selectedYear.end);
        }
    }, [selectedYear]);
    
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
        }
    };

    const fetchAcademicYears = async (classId) => {
        try {
            const years = await feeService.getAcademicYearsByClassId(classId);
            setAcademicYears(years);
            if (years.length > 0) {
                setSelectedYear(years[years.length - 1]);
            } else {
                setSelectedYear('');
                setFees({});
            }
        } catch (error) {
            console.error('Failed to fetch academic years:', error);
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

    // Corrected: Implemented the logic for creating, updating, and deleting fees
    const handleCreateFees = async (feeData) => {
        console.log("fee data------------------",feeData)
        setFeeLoading(true);
        try {
            const response = await feeService.addFee(selectedClassId, feeData);
            console.log('Fees saved successfully:', response);
            setFees(response);
        } catch (error) {
            console.error('Failed to save fees:', error);
        } finally {
            setFeeLoading(false);
        }
    };

    const handleUpdateFees = async (feeData) => {
        console.log("fee data------------------",feeData)
        setFeeLoading(true);
        try {
            const response = await feeService.updateFee(selectedClassId, feeData);
            console.log('Fees updated successfully:', response);
            setFees(response);
        } catch (error) {
            console.error('Failed to update fees:', error);
        } finally {
            setFeeLoading(false);
        }
    };
    
    const handleDeleteFees = async () => {
        if (!window.confirm("Are you sure you want to delete these fees?")) return;
        setFeeLoading(true);
        try {
            await feeService.deleteFee(selectedClassId);
            console.log('Fees deleted successfully.');
            setFees({});
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
        <div className="admin-layout">
            <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} activeSection={activeSection} onSectionChange={handleSectionChange} user={user} onLogout={handleLogout} stats={stats} />
            <div className={`admin-layout-main ${sidebarCollapsed ? 'expanded' : ''}`}>
                <Header user={user} onLogout={handleLogout} currentSection={activeSection} sidebarItems={sidebarItems} />
                <main className="admin-content">
                    <Box sx={{ p: 2 }}>
                        <Typography variant="h4" gutterBottom>Fee Management</Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
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
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth disabled={academicYears.length === 0}>
                                    <InputLabel id="select-year-label">Academic Year</InputLabel>
                                    <Select
                                        labelId="select-year-label"
                                        value={selectedYear}
                                        label="Academic Year"
                                        onChange={(e) => setSelectedYear(e.target.value)}
                                        renderValue={(selected) => 
                                            `${dayjs(selected.start).format('MMM D, YYYY')} - ${dayjs(selected.end).format('MMM D, YYYY')}`
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
                        <Box mt={3}>
                            {feeLoading ? <Typography>Loading fees...</Typography> : (
                                <AdmissionFeeForm
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
        </div>
    );
};

export default AdminFeeManagementLayout;