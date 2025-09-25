// import React, { useState, useEffect } from 'react';
// import { Outlet, useNavigate, useLocation } from 'react-router-dom';
// import { authService } from '../../services/authService';
// import { getSidebarItems } from '../../constants/sidebarItems';
// import Sidebar from '../../components/Sidebar/Sidebar';
// import Header from '../../components/Header/Header';
// import { Box, Tabs, Tab, Typography } from "@mui/material";

// import StudentAdmissionForm from '../../components/Students/StudentsForm'; // Assuming this is your form component
// import { classService } from '../../services/classService';
// import { studentService } from '../../services/studentService';

// import './AdminLayout.css';

// const AdminAddStudentLayout = () => {
//   const [user, setUser] = useState(null);
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [stats, setStats] = useState({
//     totalStudents: 245,
//     totalTeachers: 18,
//     totalClasses: 12,
//     activeUsers: 156
//   });
  
//   const navigate = useNavigate();
//   const location = useLocation();

//   // State for student admission data
//   const [allClasses, setAllClasses] = useState([]);
//   const [admissionNumber, setAdmissionNumber] = useState('');
//   const [formLoading, setFormLoading] = useState(false);

//   // Get active section from URL
//   const getActiveSection = () => {
//     const path = location.pathname;
//     if (path.includes('/classes')) return 'classes';
//     if (path.includes('/students')) return 'students';
//     if (path.includes('/teachers')) return 'teachers';
//     if (path.includes('/examinations')) return 'examinations';
//     if (path.includes('/library')) return 'library';
//     if (path.includes('/fees')) return 'fees';
//     if (path.includes('/reports')) return 'reports';
//     if (path.includes('/settings')) return 'settings';
//     return 'dashboard';
//   };

//   const [activeSection, setActiveSection] = useState(getActiveSection());
//   const [activeClassSubSection, setActiveClassSubSection] = useState('Student-Admission'); // Set default to admission form
//   const sidebarItems = getSidebarItems(stats);

//   useEffect(() => {
//     fetchUserData();
//     fetchInitialStudentData(); // Fetch initial data for the form
//     const savedSidebarState = localStorage.getItem('sidebarCollapsed');
//     if (savedSidebarState) {
//       setSidebarCollapsed(JSON.parse(savedSidebarState));
//     }
//   }, []);

//   useEffect(() => {
//     setActiveSection(getActiveSection());
//   }, [location]);

//   const fetchUserData = async () => {
//     try {
//       setLoading(true);
//       const userData = await authService.getCurrentUser();
//       setUser(userData);
//     } catch (error) {
//       console.error('Failed to fetch user data:', error);
//       if (error.response?.status === 401) {
//         navigate('/login');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchInitialStudentData = async () => {
//     try {
//       setFormLoading(true);
//       const classes = await classService.getClasses();
//       setAllClasses(classes);
//       const nextNumber = await studentService.getNextAdmissionNumber();
//       setAdmissionNumber(nextNumber.next_admission_number);
//     } catch (error) {
//       console.error('Failed to fetch student data:', error);
//     } finally {
//       setFormLoading(false);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await authService.logout();
//       navigate('/login');
//     } catch (error) {
//       console.error('Logout error:', error);
//       navigate('/login');
//     }
//   };

//   const handleClassSubSectionChange = (section) => {
//     setActiveClassSubSection(section);
//   };

//   const handleSectionChange = (sectionId) => {
//     setActiveSection(sectionId);
//     switch(sectionId) {
//       case 'dashboard':
//         navigate('/Admin/Dashboard');
//         break;
//       case 'classes':
//         navigate('/admin/classes');
//         break;
//       case 'students':
//         navigate('/admin/students');
//         break;
//       case 'teachers':
//         navigate('/admin/teachers');
//         break;
//       case 'examinations':
//         navigate('/admin/examinations');
//         break;
//       case 'library':
//         navigate('/admin/library');
//         break;
//       case 'fees':
//         navigate('/admin/fees');
//         break;
//       case 'reports':
//         navigate('/admin/reports');
//         break;
//       case 'settings':
//         navigate('/admin/settings');
//         break;
//       default:
//         navigate('/admin');
//     }
//   };

//   const handleStudentFormSubmit = async (data) => {
//     setFormLoading(true);
//     try {
//       const response = await studentService.addStudent(data);
//       console.log('Student added successfully:', response);
//       // You can add a success toast or reset the form here
//     } catch (error) {
//       console.error('Failed to add student:', error);
//       // You can add an error toast here
//     } finally {
//       setFormLoading(false);
//     }
//   };

//   const handleStudentFormPreview = (data) => {
//     console.log('Previewing student data:', data);
//     // Logic to display a preview of the data
//   };

//   const toggleSidebar = () => {
//     const newState = !sidebarCollapsed;
//     setSidebarCollapsed(newState);
//     localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
//   };

//   // Conditional rendering based on the active sub-section
//   const renderContent = () => {
//     if (activeClassSubSection === 'Student-Admission') {
//       return (
//         <StudentAdmissionForm
//           onSubmit={handleStudentFormSubmit}
//           onPreview={handleStudentFormPreview}
//           loading={formLoading}
//           allClasses={allClasses}
//           admissionNumber={admissionNumber}
//         />
//       );
//     }
//     return (
//         <Typography variant="body1">
//             View Classes content goes here.
//         </Typography>
//     );
//   };

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="loading-spinner">
//           <div className="spinner"></div>
//           <p>Loading...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="admin-layout">
//       <Sidebar 
//         collapsed={sidebarCollapsed}
//         onToggle={toggleSidebar}
//         activeSection={activeSection}
//         onSectionChange={handleSectionChange}
//         user={user}
//         onLogout={handleLogout}
//         stats={stats}
//       />
//       <div className={`admin-layout-main ${sidebarCollapsed ? 'expanded' : ''}`}>
//         <Header 
//           user={user}
//           onLogout={handleLogout}
//           currentSection={activeSection}
//           sidebarItems={sidebarItems}
//         />
//         <main className="admin-content">
//           <div className="class-management-header">
//             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//               <Tabs
//                 value={activeClassSubSection === 'Student-Admission' ? 0 : 1}
//                 onChange={(e, newValue) =>
//                   handleClassSubSectionChange(newValue === 0 ? 'Student-Admission' : 'view-classes')
//                 }
//                 variant="fullWidth"
//                 textColor="primary"
//                 indicatorColor="primary"
//               >
//                 <Tab label="Student Admission" />
//                 <Tab label="View Students" />
//               </Tabs>
//             </Box>
//           </div>
//           <div className="class-content-container">
//             {renderContent()}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminAddStudentLayout;





import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { authService } from '../../services/authService';
import { getSidebarItems } from '../../constants/sidebarItems';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { Box, Tabs, Tab, Typography, Snackbar, Alert } from "@mui/material";

import StudentAdmissionForm from '../../components/Students/StudentsForm';
import { classService } from '../../services/classService';
import { studentService } from '../../services/studentService';

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

  // State for student admission data
  const [allClasses, setAllClasses] = useState([]);
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  
  // Snackbar states for notifications
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'info'
  });

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
  const [activeClassSubSection, setActiveClassSubSection] = useState('Student-Admission');
  const sidebarItems = getSidebarItems(stats);

  useEffect(() => {
    fetchUserData();
    fetchInitialStudentData();
    const savedSidebarState = localStorage.getItem('sidebarCollapsed');
    if (savedSidebarState) {
      setSidebarCollapsed(JSON.parse(savedSidebarState));
    }
  }, []);

  useEffect(() => {
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

  const fetchInitialStudentData = async () => {
    try {
      setFormLoading(true);
      
      // Fetch classes
      const classes = await classService.getClasses();
      setAllClasses(classes);
      
      // Fetch next admission number
      const nextNumber = await studentService.getNextAdmissionNumber();
      console.log('Fetched admission number:', nextNumber); // Debug log
      
      // Handle different response formats
      if (typeof nextNumber === 'string') {
        setAdmissionNumber(nextNumber);
      } else if (nextNumber && nextNumber.next_admission_number) {
        setAdmissionNumber(nextNumber.next_admission_number);
      } else {
        // Fallback: generate a default admission number
        const currentYear = new Date().getFullYear();
        const defaultNumber = `ADM${currentYear}001`;
        setAdmissionNumber(defaultNumber);
        console.warn('Using default admission number:', defaultNumber);
      }
      
    } catch (error) {
      console.error('Failed to fetch student data:', error);
      setSnackbar({
        open: true,
        message: 'Failed to load initial data. Please refresh the page.',
        severity: 'error'
      });
      
      // Set fallback admission number
      const currentYear = new Date().getFullYear();
      const fallbackNumber = `ADM${currentYear}001`;
      setAdmissionNumber(fallbackNumber);
    } finally {
      setFormLoading(false);
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

  const handleClassSubSectionChange = (section) => {
    setActiveClassSubSection(section);
  };

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
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
        navigate('/admin/teachers');
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

  // const handleStudentFormSubmit = async (data) => {
  //   console.log('Submitting student data:', data); // Debug log
  //   setFormLoading(true);
    
  //   try {
  //     // Create FormData for file upload if photo exists
  //     let submitData;
      
  //     if (data.photo) {
  //       submitData = new FormData();
        
  //       // Append all form fields to FormData
  //       Object.keys(data).forEach(key => {
  //         if (key === 'photo') {
  //           submitData.append(key, data[key]);
  //         } else {
  //           submitData.append(key, data[key]);
  //         }
  //       });
  //     } else {
  //       // Remove photo field if no photo
  //       const { photo, ...dataWithoutPhoto } = data;
  //       submitData = dataWithoutPhoto;
  //     }
      
  //     console.log('Sending data to API:', submitData); // Debug log
      
  //     const response = await studentService.addStudent(submitData);
  //     console.log('Student added successfully:', response);
      
  //     setSnackbar({
  //       open: true,
  //       message: 'Student admission successful!',
  //       severity: 'success'
  //     });
      
  //     // Refresh the admission number for next student
  //     await fetchInitialStudentData();
      
  //     // Optionally reset form or navigate
  //     // You can add form reset logic here if needed
      
  //   } catch (error) {
  //     console.error('Failed to add student:', error);
      
  //             // ADD THIS LINE to see the specific validation error from FastAPI
  //     if (error.response) {
  //       console.log('Detailed validation error from server:', error.response.data);
  //     }
      
  //     let errorMessage = 'Failed to submit student admission.';
  //     // This part will now work better
  //     if (error.response?.data?.detail) {
  //       if (Array.isArray(error.response.data.detail)) {
  //           // Format the detailed message
  //           errorMessage = error.response.data.detail.map(e => `${e.loc[1]}: ${e.msg}`).join('; ');
  //       } else {
  //           errorMessage = error.response.data.detail;
  //       }
  //     }



  //     // let errorMessage = 'Failed to submit student admission. Please try again.';
      
  //     // Extract more specific error message if available
  //     if (error.response?.data?.message) {
  //       errorMessage = error.response.data.message;
  //     } else if (error.response?.data?.error) {
  //       errorMessage = error.response.data.error;
  //     } else if (error.message) {
  //       errorMessage = error.message;
  //     }
      
  //     setSnackbar({
  //       open: true,
  //       message: errorMessage,
  //       severity: 'error'
  //     });
  //   } finally {
  //     setFormLoading(false);
  //   }
  // };

const handleStudentFormSubmit = async (data) => {
  console.log('Submitting student data:', data);
  setFormLoading(true);

  try {
    // Method 1: Using FormData (recommended for file uploads)
    const formData = new FormData();

    // Append all fields to FormData
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'photo') {
        // Handle photo file
        if (value instanceof File) {
          formData.append('photo', value, value.name);
          console.log(`✅ Added photo: ${value.name} (${value.size} bytes)`);
        } else if (value) {
          console.log(`⚠️ Photo value is not a File:`, value);
        }
      } else {
        // Handle other fields - convert to string, handle null/undefined
        const stringValue = value !== null && value !== undefined ? String(value) : '';
        formData.append(key, stringValue);
        console.log(`✅ Added ${key}: "${stringValue}"`);
      }
    });

    // Debug: Log all FormData entries
    console.log("=== FormData Contents ===");
    for (let [key, value] of formData.entries()) {
      if (value instanceof File) {
        console.log(`${key}: [File] ${value.name} (${value.size} bytes, ${value.type})`);
      } else {
        console.log(`${key}: "${value}"`);
      }
    }
    console.log("========================");

    // Submit using FormData
    const response = await studentService.addStudent(formData);
    
    console.log('Student added successfully:', response);
    
    setSnackbar({
      open: true,
      message: 'Student admission successful!',
      severity: 'success'
    });
    
    await fetchInitialStudentData();
    
  } catch (error) {
    console.error('Failed to add student:', error);
    
    // Enhanced error logging
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
      console.error('Response data:', error.response.data);
    }
    
    let errorMessage = 'Failed to submit student admission.';
    
    if (error.response?.status === 422) {
      // Handle validation errors specifically
      if (error.response.data?.detail) {
        if (Array.isArray(error.response.data.detail)) {
          errorMessage = 'Validation errors: ' + 
            error.response.data.detail.map(e => `${e.loc?.join('.')} - ${e.msg}`).join('; ');
        } else {
          errorMessage = error.response.data.detail;
        }
      } else {
        errorMessage = 'Invalid data format. Please check all fields.';
      }
    } else if (error.response?.data?.message) {
      errorMessage = error.response.data.message;
    }
    
    setSnackbar({
      open: true,
      message: errorMessage,
      severity: 'error'
    });
  } finally {
    setFormLoading(false);
  }
};

// Alternative approach if FormData doesn't work
const handleStudentFormSubmitJSON = async (data) => {
  console.log('Submitting student data (JSON approach):', data);
  setFormLoading(true);

  try {
    // If your API expects JSON instead of FormData
    const response = await studentService.addStudentAsJSON(data);
    
    console.log('Student added successfully:', response);
    
    setSnackbar({
      open: true,
      message: 'Student admission successful!',
      severity: 'success'
    });
    
    await fetchInitialStudentData();
    
  } catch (error) {
    console.error('Failed to add student:', error);
    
    let errorMessage = 'Failed to submit student admission.';
    if (error.response?.data?.detail) {
      if (Array.isArray(error.response.data.detail)) {
        errorMessage = error.response.data.detail.map(e => `${e.loc[1]}: ${e.msg}`).join('; ');
      } else {
        errorMessage = error.response.data.detail;
      }
    }
    
    setSnackbar({
      open: true,
      message: errorMessage,
      severity: 'error'
    });
  } finally {
    setFormLoading(false);
  }
};

// const handleStudentFormSubmit = async (data) => {
//   console.log('Submitting student data:', data);
//   setFormLoading(true);

//   const formData = new FormData();

//   // More robust approach - handle different data types properly
//   Object.entries(data).forEach(([key, value]) => {
//     console.log(`Processing ${key}:`, value);
    
//     if (key === 'photo') {
//       // Handle photo file specifically
//       if (value instanceof File) {
//         formData.append('photo', value, value.name);
//         console.log(`✅ Added photo file: ${value.name}`);
//       } else if (value && typeof value === 'object' && value.name) {
//         // Sometimes form libraries wrap files differently
//         formData.append('photo', value, value.name);
//         console.log(`✅ Added photo object: ${value.name}`);
//       } else if (value) {
//         console.log(`⚠️ Photo value exists but unrecognized format:`, value);
//       }
//     } else {
//       // Handle other fields - include empty strings but skip null/undefined
//       if (value !== null && value !== undefined) {
//         formData.append(key, String(value));
//         console.log(`✅ Added ${key}: ${String(value)}`);
//       } else {
//         // Optionally append empty string for null/undefined values
//         formData.append(key, '');
//         console.log(`✅ Added ${key}: (empty string)`);
//       }
//     }
//   });

//   // Verify FormData contents
//   console.log("=== Final FormData Contents ===");
//   const entries = Array.from(formData.entries());
//   console.log(`Total entries: ${entries.length}`);
  
//   entries.forEach(([key, value]) => {
//     if (value instanceof File) {
//       console.log(`${key}: [File] ${value.name} (${value.size} bytes, ${value.type})`);
//     } else {
//       console.log(`${key}: ${value}`);
//     }
//   });
//   console.log("===============================");

//   if (entries.length === 0) {
//     console.error('❌ FormData is empty! Check your form data structure.');
//     setSnackbar({
//       open: true,
//       message: 'No data to submit. Please check the form.',
//       severity: 'error'
//     });
//     setFormLoading(false);
//     return;
//   }
  
//   try {
//     const response = await studentService.addStudent(formData);
    
//     console.log('Student added successfully:', response);
    
//     setSnackbar({
//       open: true,
//       message: 'Student admission successful!',
//       severity: 'success'
//     });
    
//     await fetchInitialStudentData();
    
//   } catch (error) {
//     console.error('Failed to add student:', error);
//     if (error.response) {
//       console.log('Detailed validation error from server:', error.response.data);
//     }
    
//     let errorMessage = 'Failed to submit student admission.';
//     if (error.response?.data?.detail) {
//       if (Array.isArray(error.response.data.detail)) {
//         errorMessage = error.response.data.detail.map(e => `${e.loc[1]}: ${e.msg}`).join('; ');
//       } else {
//         errorMessage = error.response.data.detail;
//       }
//     }
    
//     setSnackbar({
//       open: true,
//       message: errorMessage,
//       severity: 'error'
//     });
//   } finally {
//     setFormLoading(false);
//   }
// };

// const handleStudentFormSubmit = async (data) => {
//   console.log('Submitting student data:', data);
//   setFormLoading(true);

//   // --- START: REVISED LOGIC ---
//   // Step 1: Always create a new FormData object.
//   const formData = new FormData();

//   // Step 2: Loop through the data and append each field.
//   Object.keys(data).forEach(key => {
//     const value = data[key];

//     // Don't append null or undefined values, except for the photo file
//     if (value === null || value === undefined) {
//       return;
//     }

//     // If the key is 'photo', only append it if it's a file object.
//     // Otherwise, append the other fields.
//     if (key === 'photo') {
//       if (value) {
//         formData.append('photo', value, value.name);
//       }
//     } else {
//       formData.append(key, value);
//     }
//   });
//   // --- END: REVISED LOGIC ---

//   // Optional: A better way to see what's inside FormData for debugging
//   console.log("--- FormData Contents ---");
//   for (let [key, value] of formData.entries()) {
//     console.log(`${key}:`, value);
//   }
//   console.log("-------------------------",formData);
  
//   try {
//     // Pass the correctly built formData object to the service
//     const response = await studentService.addStudent(formData);
    
//     console.log('Student added successfully:', response);
    
//     setSnackbar({
//       open: true,
//       message: 'Student admission successful!',
//       severity: 'success'
//     });
    
//     await fetchInitialStudentData();
    
//   } catch (error) {
//     console.error('Failed to add student:', error);
//     if (error.response) {
//       console.log('Detailed validation error from server:', error.response.data);
//     }
    
//     let errorMessage = 'Failed to submit student admission.';
//     if (error.response?.data?.detail) {
//       if (Array.isArray(error.response.data.detail)) {
//         errorMessage = error.response.data.detail.map(e => `${e.loc[1]}: ${e.msg}`).join('; ');
//       } else {
//         errorMessage = error.response.data.detail;
//       }
//     }
    
//     setSnackbar({
//       open: true,
//       message: errorMessage,
//       severity: 'error'
//     });
//   } finally {
//     setFormLoading(false);
//   }
// };


  const handleStudentFormPreview = (data) => {
    console.log('Previewing student data:', data);
    // You can implement a preview modal or navigate to a preview page
    setSnackbar({
      open: true,
      message: 'Preview functionality will be implemented soon.',
      severity: 'info'
    });
  };

  const toggleSidebar = () => {
    const newState = !sidebarCollapsed;
    setSidebarCollapsed(newState);
    localStorage.setItem('sidebarCollapsed', JSON.stringify(newState));
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  // Conditional rendering based on the active sub-section
  const renderContent = () => {
    if (activeClassSubSection === 'Student-Admission') {
      return (
        <StudentAdmissionForm
          onSubmit={handleStudentFormSubmit}
          onPreview={handleStudentFormPreview}
          loading={formLoading}
          allClasses={allClasses}
          admissionNumber={admissionNumber}
          initialData={null} // Add this if you want to support editing
        />
      );
    }
    return (
        <Typography variant="body1">
            View Students content goes here.
        </Typography>
    );
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
          <div className="class-management-header">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                value={activeClassSubSection === 'Student-Admission' ? 0 : 1}
                onChange={(e, newValue) =>
                  handleClassSubSectionChange(newValue === 0 ? 'Student-Admission' : 'view-students')
                }
                variant="fullWidth"
                textColor="primary"
                indicatorColor="primary"
              >
                <Tab label="Student Admission" />
                <Tab label="View Students" />
              </Tabs>
            </Box>
          </div>
          <div className="class-content-container">
            {renderContent()}
          </div>
        </main>
      </div>
      
      {/* Snackbar for notifications */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity} 
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AdminAddStudentLayout;