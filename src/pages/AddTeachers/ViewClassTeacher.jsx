// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //   Box, Typography, CircularProgress,
// // //   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
// // //   IconButton, Card, CardContent
// // // } from '@mui/material';
// // // import EditIcon from '@mui/icons-material/Edit';
// // // import { classService } from '../../services/classService';
// // // import EditClassTeacherModal from './EditClassTeacherModal';

// // // const MasterClassTable = () => {
// // //   const [data, setData] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
  
// // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // //   const [editingRow, setEditingRow] = useState(null);

// // //   useEffect(() => {
// // //     fetchMasterClassDetails();
// // //   }, []);

// // //   const fetchMasterClassDetails = async () => {
// // //     try {
// // //       setLoading(true);
// // //       const response = await classService.getMasterClassDetails();
// // //       setData(response);
// // //     } catch (err) {
// // //       console.error('Failed to fetch master class details:', err);
// // //       setError('Failed to load data. Please try again.');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleEditClick = (row) => {
// // //     console.log("Edit button clicked for row:", row); // Debugging line
// // //     setEditingRow(row);
// // //     setIsModalOpen(true);
// // //   };

// // //   const handleModalClose = () => {
// // //     setIsModalOpen(false);
// // //     setEditingRow(null);
// // //   };

// // //   const handleUpdate = async (updatedData) => {
// // //     try {
// // //         await classService.updateMasterClass(updatedData);
// // //         alert("Mapping updated successfully!");
// // //         fetchMasterClassDetails(); // Refresh the table
// // //     } catch (error) {
// // //         console.error("Failed to update mapping:", error);
// // //         alert("Failed to update mapping. Please try again.");
// // //     }
// // //     handleModalClose();
// // //   };

// // //   if (loading) {
// // //     return <CircularProgress />;
// // //   }

// // //   if (error) {
// // //     return <Typography color="error">{error}</Typography>;
// // //   }

// // //   return (
// // //     <Box sx={{ p: 2 }}>
// // //       <Card>
// // //         <CardContent>
// // //           <Typography variant="h5" gutterBottom>Master Class Details</Typography>
// // //           <TableContainer component={Paper}>
// // //             <Table>
// // //               <TableHead>
// // //                 <TableRow>
// // //                   <TableCell>Class Name</TableCell>
// // //                   <TableCell>Division</TableCell>
// // //                   <TableCell>Teacher Name</TableCell>
// // //                   <TableCell>Subject</TableCell>
// // //                   <TableCell>Actions</TableCell>
// // //                 </TableRow>
// // //               </TableHead>
// // //               <TableBody>
// // //                 {data.length === 0 ? (
// // //                   <TableRow>
// // //                     <TableCell colSpan={5} align="center">No master class details found.</TableCell>
// // //                   </TableRow>
// // //                 ) : (
// // //                   data.map((row, index) => (
// // //                     <TableRow key={index}>
// // //                       <TableCell>{row.class_name}</TableCell>
// // //                       <TableCell>{row.division}</TableCell>
// // //                       <TableCell>{row.teacher_name}</TableCell>
// // //                       <TableCell>{row.teacher_subject}</TableCell>
// // //                       <TableCell>
// // //                         <IconButton color="primary" onClick={() => handleEditClick(row)}>
// // //                           <EditIcon />
// // //                         </IconButton>
// // //                       </TableCell>
// // //                     </TableRow>
// // //                   ))
// // //                 )}
// // //               </TableBody>
// // //             </Table>
// // //           </TableContainer>
// // //         </CardContent>
// // //       </Card>
// // //       {isModalOpen && (
// // //           <EditClassTeacherModal
// // //             open={isModalOpen}
// // //             onClose={handleModalClose}
// // //             data={editingRow}
// // //             onSave={handleUpdate}
// // //           />
// // //       )}
// // //     </Box>
// // //   );
// // // };

// // // export default MasterClassTable;



// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //   Box, Typography, CircularProgress,
// // //   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
// // //   IconButton, Card, CardContent
// // // } from '@mui/material';
// // // import EditIcon from '@mui/icons-material/Edit';
// // // import { classService } from '../../services/classService';
// // // import EditClassTeacherModal from './EditClassTeacherModal';

// // // const MasterClassTable = () => {
// // //   const [data, setData] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
  
// // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // //   const [editingRow, setEditingRow] = useState(null);

// // //   useEffect(() => {
// // //     fetchMasterClassDetails();
// // //   }, []);

// // //   const fetchMasterClassDetails = async () => {
// // //     try {
// // //       setLoading(true);
// // //       const response = await classService.getMasterClassDetails();
// // //       setData(response);
// // //     } catch (err) {
// // //       console.error('Failed to fetch master class details:', err);
// // //       setError('Failed to load data. Please try again.');
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleEditClick = (row) => {
// // //     console.log("Edit button clicked for row:", row);
// // //     setEditingRow(row);
// // //     setIsModalOpen(true);
// // //   };

// // //   const handleModalClose = () => {
// // //     setIsModalOpen(false);
// // //     setEditingRow(null);
// // //   };

// // //   // FIX: This function should ONLY refresh the data, not call updateMasterClass again
// // //   const handleSaveSuccess = async () => {
// // //     try {
// // //       // Just refresh the table data
// // //       await fetchMasterClassDetails();
      
// // //       // Show success message
// // //       alert("Class teacher updated successfully!");
      
// // //       // Close the modal
// // //       handleModalClose();
// // //     } catch (error) {
// // //       console.error("Failed to refresh data:", error);
// // //     }
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
// // //         <CircularProgress />
// // //       </Box>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <Box sx={{ p: 2 }}>
// // //         <Typography color="error">{error}</Typography>
// // //       </Box>
// // //     );
// // //   }

// // //   return (
// // //     <Box sx={{ p: 2 }}>
// // //       <Card>
// // //         <CardContent>
// // //           <Typography variant="h5" gutterBottom>Master Class Details</Typography>
// // //           <TableContainer component={Paper}>
// // //             <Table>
// // //               <TableHead>
// // //                 <TableRow>
// // //                   <TableCell>Class Name</TableCell>
// // //                   <TableCell>Division</TableCell>
// // //                   <TableCell>Teacher Name</TableCell>
// // //                   <TableCell>Subject</TableCell>
// // //                   <TableCell>Actions</TableCell>
// // //                 </TableRow>
// // //               </TableHead>
// // //               <TableBody>
// // //                 {data.length === 0 ? (
// // //                   <TableRow>
// // //                     <TableCell colSpan={5} align="center">No master class details found.</TableCell>
// // //                   </TableRow>
// // //                 ) : (
// // //                   data.map((row, index) => (
// // //                     <TableRow key={index}>
// // //                       <TableCell>{row.class_name}</TableCell>
// // //                       <TableCell>{row.division}</TableCell>
// // //                       <TableCell>{row.teacher_name || 'Not Assigned'}</TableCell>
// // //                       <TableCell>{row.teacher_subject || 'N/A'}</TableCell>
// // //                       <TableCell>
// // //                         <IconButton color="primary" onClick={() => handleEditClick(row)}>
// // //                           <EditIcon />
// // //                         </IconButton>
// // //                       </TableCell>
// // //                     </TableRow>
// // //                   ))
// // //                 )}
// // //               </TableBody>
// // //             </Table>
// // //           </TableContainer>
// // //         </CardContent>
// // //       </Card>
      
// // //       {/* Only render modal when it's open and we have data */}
// // //       {isModalOpen && editingRow && (
// // //         <EditClassTeacherModal
// // //           open={isModalOpen}
// // //           onClose={handleModalClose}
// // //           data={editingRow}
// // //           onSave={handleSaveSuccess}  // Changed from handleUpdate
// // //         />
// // //       )}
// // //     </Box>
// // //   );
// // // };

// // // export default MasterClassTable;




// // import React, { useState, useEffect } from 'react';
// // import {
// //   Box, Typography, CircularProgress, Skeleton,
// //   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
// //   IconButton, Card, Chip, Tooltip, TextField, InputAdornment,CardContent ,
// //   Alert, AlertTitle, Divider, Grid, Badge
// // } from '@mui/material';
// // import EditIcon from '@mui/icons-material/Edit';
// // import SearchIcon from '@mui/icons-material/Search';
// // import PersonIcon from '@mui/icons-material/Person';
// // import ClassIcon from '@mui/icons-material/Class';
// // import RefreshIcon from '@mui/icons-material/Refresh';
// // import { classService } from '../../services/classService';
// // import EditClassTeacherModal from './EditClassTeacherModal';

// // const MasterClassTable = () => {
// //   const [data, setData] = useState([]);
// //   const [filteredData, setFilteredData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState('');
  
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [editingRow, setEditingRow] = useState(null);

// //   useEffect(() => {
// //     fetchMasterClassDetails();
// //   }, []);

// //   useEffect(() => {
// //     // Filter data based on search term
// //     const filtered = data.filter(row => 
// //       row.class_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       row.division?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       row.teacher_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       row.teacher_subject?.toLowerCase().includes(searchTerm.toLowerCase())
// //     );
// //     setFilteredData(filtered);
// //   }, [searchTerm, data]);

// //   const fetchMasterClassDetails = async () => {
// //     try {
// //       setLoading(true);
// //       setError(null);
// //       const response = await classService.getMasterClassDetails();
// //       setData(response);
// //       setFilteredData(response);
// //     } catch (err) {
// //       console.error('Failed to fetch master class details:', err);
// //       setError('Failed to load data. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleEditClick = (row) => {
// //     console.log("Edit button clicked for row:", row);
// //     setEditingRow(row);
// //     setIsModalOpen(true);
// //   };

// //   const handleModalClose = () => {
// //     setIsModalOpen(false);
// //     setEditingRow(null);
// //   };

// //   const handleSaveSuccess = async () => {
// //     try {
// //       await fetchMasterClassDetails();
// //       handleModalClose();
// //     } catch (error) {
// //       console.error("Failed to refresh data:", error);
// //     }
// //   };

// //   const handleRefresh = () => {
// //     setSearchTerm('');
// //     fetchMasterClassDetails();
// //   };

// //   // Calculate statistics
// //   const totalClasses = data.length;
// //   const assignedClasses = data.filter(row => row.teacher_name && row.teacher_name !== 'Not Assigned').length;
// //   const unassignedClasses = totalClasses - assignedClasses;

// //   if (loading) {
// //     return (
// //       <Box sx={{ p: 3 }}>
// //         <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
// //           <CardContent>
// //             <Skeleton variant="rectangular" height={60} sx={{ mb: 2 }} />
// //             <Skeleton variant="rectangular" height={400} />
// //           </CardContent>
// //         </Card>
// //       </Box>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <Box sx={{ p: 3 }}>
// //         <Alert severity="error" sx={{ borderRadius: 2 }}>
// //           <AlertTitle>Error</AlertTitle>
// //           {error}
// //         </Alert>
// //       </Box>
// //     );
// //   }

// //   return (
// //     <Box sx={{ p: 3 }}>
// //       <Card sx={{ borderRadius: 2, boxShadow: 3, overflow: 'visible' }}>
// //         {/* Header Section */}
// //         <Box sx={{ 
// //           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
// //           p: 3,
// //           color: 'white'
// //         }}>
// //           <Grid container alignItems="center" justifyContent="space-between">
// //             <Grid item>
// //               <Typography variant="h4" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// //                 <ClassIcon fontSize="large" />
// //                 Master Class Management
// //               </Typography>
// //               <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
// //                 Manage class teacher assignments and divisions
// //               </Typography>
// //             </Grid>
// //             <Grid item>
// //               <Tooltip title="Refresh Data">
// //                 <IconButton 
// //                   onClick={handleRefresh}
// //                   sx={{ 
// //                     color: 'white',
// //                     bgcolor: 'rgba(255,255,255,0.2)',
// //                     '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
// //                   }}
// //                 >
// //                   <RefreshIcon />
// //                 </IconButton>
// //               </Tooltip>
// //             </Grid>
// //           </Grid>
// //         </Box>

// //         {/* Statistics Cards */}
// //         <Box sx={{ p: 3, bgcolor: '#f5f5f5' }}>
// //           <Grid container spacing={2}>
// //             <Grid item xs={12} sm={4}>
// //               <Paper sx={{ 
// //                 p: 2, 
// //                 textAlign: 'center',
// //                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// //                 color: 'white'
// //               }}>
// //                 <Typography variant="h4" fontWeight="bold">{totalClasses}</Typography>
// //                 <Typography variant="body2">Total Classes</Typography>
// //               </Paper>
// //             </Grid>
// //             <Grid item xs={12} sm={4}>
// //               <Paper sx={{ 
// //                 p: 2, 
// //                 textAlign: 'center',
// //                 background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
// //                 color: 'white'
// //               }}>
// //                 <Typography variant="h4" fontWeight="bold">{assignedClasses}</Typography>
// //                 <Typography variant="body2">Assigned Teachers</Typography>
// //               </Paper>
// //             </Grid>
// //             <Grid item xs={12} sm={4}>
// //               <Paper sx={{ 
// //                 p: 2, 
// //                 textAlign: 'center',
// //                 background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
// //                 color: 'white'
// //               }}>
// //                 <Typography variant="h4" fontWeight="bold">{unassignedClasses}</Typography>
// //                 <Typography variant="body2">Unassigned Classes</Typography>
// //               </Paper>
// //             </Grid>
// //           </Grid>
// //         </Box>

// //         <Divider />

// //         {/* Search Bar */}
// //         <Box sx={{ p: 3, bgcolor: 'background.default' }}>
// //           <TextField
// //             fullWidth
// //             variant="outlined"
// //             placeholder="Search by class, division, teacher, or subject..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             InputProps={{
// //               startAdornment: (
// //                 <InputAdornment position="start">
// //                   <SearchIcon color="action" />
// //                 </InputAdornment>
// //               ),
// //               sx: { borderRadius: 2 }
// //             }}
// //             sx={{ maxWidth: 500 }}
// //           />
// //         </Box>

// //         {/* Table Section */}
// //         <TableContainer sx={{ maxHeight: 600 }}>
// //           <Table stickyHeader>
// //             <TableHead>
// //               <TableRow>
// //                 <TableCell sx={{ 
// //                   bgcolor: '#f5f5f5', 
// //                   fontWeight: 'bold',
// //                   borderBottom: '2px solid #e0e0e0'
// //                 }}>
// //                   S.No
// //                 </TableCell>
// //                 <TableCell sx={{ 
// //                   bgcolor: '#f5f5f5', 
// //                   fontWeight: 'bold',
// //                   borderBottom: '2px solid #e0e0e0'
// //                 }}>
// //                   Class
// //                 </TableCell>
// //                 <TableCell sx={{ 
// //                   bgcolor: '#f5f5f5', 
// //                   fontWeight: 'bold',
// //                   borderBottom: '2px solid #e0e0e0'
// //                 }}>
// //                   Division
// //                 </TableCell>
// //                 <TableCell sx={{ 
// //                   bgcolor: '#f5f5f5', 
// //                   fontWeight: 'bold',
// //                   borderBottom: '2px solid #e0e0e0'
// //                 }}>
// //                   Teacher Name
// //                 </TableCell>
// //                 <TableCell sx={{ 
// //                   bgcolor: '#f5f5f5', 
// //                   fontWeight: 'bold',
// //                   borderBottom: '2px solid #e0e0e0'
// //                 }}>
// //                   Subject
// //                 </TableCell>
// //                 <TableCell sx={{ 
// //                   bgcolor: '#f5f5f5', 
// //                   fontWeight: 'bold',
// //                   borderBottom: '2px solid #e0e0e0'
// //                 }}>
// //                   Status
// //                 </TableCell>
// //                 <TableCell sx={{ 
// //                   bgcolor: '#f5f5f5', 
// //                   fontWeight: 'bold',
// //                   borderBottom: '2px solid #e0e0e0',
// //                   textAlign: 'center'
// //                 }}>
// //                   Actions
// //                 </TableCell>
// //               </TableRow>
// //             </TableHead>
// //             <TableBody>
// //               {filteredData.length === 0 ? (
// //                 <TableRow>
// //                   <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
// //                     <Typography variant="body1" color="text.secondary">
// //                       {searchTerm ? 'No results found for your search.' : 'No master class details found.'}
// //                     </Typography>
// //                   </TableCell>
// //                 </TableRow>
// //               ) : (
// //                 filteredData.map((row, index) => (
// //                   <TableRow 
// //                     key={index}
// //                     hover
// //                     sx={{ 
// //                       '&:hover': { 
// //                         bgcolor: 'rgba(102, 126, 234, 0.04)'
// //                       },
// //                       '&:nth-of-type(even)': {
// //                         bgcolor: '#fafafa'
// //                       }
// //                     }}
// //                   >
// //                     <TableCell>
// //                       <Typography variant="body2" fontWeight="medium">
// //                         {index + 1}
// //                       </Typography>
// //                     </TableCell>
// //                     <TableCell>
// //                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// //                         <Badge 
// //                           badgeContent={row.class_name} 
// //                         //   color="primary"
// //                           sx={{
// //                             '& .MuiBadge-badge': {
// //                               position: 'relative',
// //                               transform: 'none',
// //                               fontSize: '0.875rem',
// //                               height: 'auto',
// //                               padding: '4px 8px',
// //                               borderRadius: '12px'
// //                             }
// //                           }}
// //                         />
// //                       </Box>
// //                     </TableCell>
// //                     <TableCell>
// //                       <Chip 
// //                         label={row.division} 
// //                         size="small"
// //                         sx={{ 
// //                           bgcolor: '#e3f2fd',
// //                           color: '#1976d2',
// //                           fontWeight: 'bold'
// //                         }}
// //                       />
// //                     </TableCell>
// //                     <TableCell>
// //                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// //                         <PersonIcon fontSize="small" color="action" />
// //                         <Typography variant="body2">
// //                           {row.teacher_name || 'Not Assigned'}
// //                         </Typography>
// //                       </Box>
// //                     </TableCell>
// //                     <TableCell>
// //                       <Typography variant="body2" color={row.teacher_subject ? 'text.primary' : 'text.secondary'}>
// //                         {row.teacher_subject || 'N/A'}
// //                       </Typography>
// //                     </TableCell>
// //                     <TableCell>
// //                       {row.teacher_name && row.teacher_name !== 'Not Assigned' ? (
// //                         <Chip 
// //                           label="Assigned" 
// //                           size="small" 
// //                           color="success"
// //                           sx={{ fontWeight: 'bold' }}
// //                         />
// //                       ) : (
// //                         <Chip 
// //                           label="Pending" 
// //                           size="small" 
// //                           color="warning"
// //                           variant="outlined"
// //                           sx={{ fontWeight: 'bold' }}
// //                         />
// //                       )}
// //                     </TableCell>
// //                     <TableCell align="center">
// //                       <Tooltip title="Edit Teacher Assignment">
// //                         <IconButton 
// //                           color="primary" 
// //                           onClick={() => handleEditClick(row)}
// //                           sx={{ 
// //                             '&:hover': { 
// //                               bgcolor: 'rgba(102, 126, 234, 0.1)',
// //                               transform: 'scale(1.1)'
// //                             },
// //                             transition: 'all 0.2s'
// //                           }}
// //                         >
// //                           <EditIcon />
// //                         </IconButton>
// //                       </Tooltip>
// //                     </TableCell>
// //                   </TableRow>
// //                 ))
// //               )}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //       </Card>
      
// //       {/* Edit Modal */}
// //       {isModalOpen && editingRow && (
// //         <EditClassTeacherModal
// //           open={isModalOpen}
// //           onClose={handleModalClose}
// //           data={editingRow}
// //           onSave={handleSaveSuccess}
// //         />
// //       )}
// //     </Box>
// //   );
// // };

// // export default MasterClassTable;














// import React, { useState, useEffect } from 'react';
// import {
//   Box, Typography, CircularProgress, Skeleton,
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,CardContent,
//   IconButton, Card, Chip, Tooltip, TextField, InputAdornment,
//   Alert, AlertTitle, Divider, Grid, Badge
// } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import SearchIcon from '@mui/icons-material/Search';
// import PersonIcon from '@mui/icons-material/Person';
// import ClassIcon from '@mui/icons-material/Class';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import { classService } from '../../services/classService';
// import EditClassTeacherModal from './EditClassTeacherModal';

// const MasterClassTable = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
  
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingRow, setEditingRow] = useState(null);

//   useEffect(() => {
//     fetchMasterClassDetails();
//   }, []);

//   useEffect(() => {
//     // Sort data by class name (numerically if possible) and then by division
//     const sortedData = [...data].sort((a, b) => {
//       // Extract numeric part from class name if it exists (e.g., "1", "2", "10")
//       const getNumericValue = (className) => {
//         const num = parseInt(className);
//         return isNaN(num) ? className : num;
//       };
      
//       const classA = getNumericValue(a.class_name);
//       const classB = getNumericValue(b.class_name);
      
//       // First sort by class name
//       if (classA !== classB) {
//         // If both are numbers, sort numerically
//         if (typeof classA === 'number' && typeof classB === 'number') {
//           return classA - classB;
//         }
//         // Otherwise sort alphabetically
//         return String(classA).localeCompare(String(classB));
//       }
      
//       // If class names are same, sort by division
//       return String(a.division).localeCompare(String(b.division));
//     });

//     // Filter sorted data based on search term
//     const filtered = sortedData.filter(row => 
//       row.class_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       row.division?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       row.teacher_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       row.teacher_subject?.toLowerCase().includes(searchTerm.toLowerCase())
//     );
    
//     setFilteredData(filtered);
//   }, [searchTerm, data]);

//   const fetchMasterClassDetails = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const response = await classService.getMasterClassDetails();
      
//       // Sort the response data before setting it
//       const sortedResponse = [...response].sort((a, b) => {
//         // Extract numeric part from class name if it exists
//         const getNumericValue = (className) => {
//           const num = parseInt(className);
//           return isNaN(num) ? className : num;
//         };
        
//         const classA = getNumericValue(a.class_name);
//         const classB = getNumericValue(b.class_name);
        
//         // First sort by class name
//         if (classA !== classB) {
//           // If both are numbers, sort numerically
//           if (typeof classA === 'number' && typeof classB === 'number') {
//             return classA - classB;
//           }
//           // Otherwise sort alphabetically
//           return String(classA).localeCompare(String(classB));
//         }
        
//         // If class names are same, sort by division
//         return String(a.division).localeCompare(String(b.division));
//       });
      
//       setData(sortedResponse);
//       setFilteredData(sortedResponse);
//     } catch (err) {
//       console.error('Failed to fetch master class details:', err);
//       setError('Failed to load data. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEditClick = (row) => {
//     console.log("Edit button clicked for row:", row);
//     setEditingRow(row);
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     setEditingRow(null);
//   };

//   const handleSaveSuccess = async () => {
//     try {
//       await fetchMasterClassDetails();
//       handleModalClose();
//     } catch (error) {
//       console.error("Failed to refresh data:", error);
//     }
//   };

//   const handleRefresh = () => {
//     setSearchTerm('');
//     fetchMasterClassDetails();
//   };

//   // Calculate statistics
//   const totalClasses = data.length;
//   const assignedClasses = data.filter(row => row.teacher_name && row.teacher_name !== 'Not Assigned').length;
//   const unassignedClasses = totalClasses - assignedClasses;

//   if (loading) {
//     return (
//       <Box sx={{ p: 3 }}>
//         <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
//           <CardContent>
//             <Skeleton variant="rectangular" height={60} sx={{ mb: 2 }} />
//             <Skeleton variant="rectangular" height={400} />
//           </CardContent>
//         </Card>
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box sx={{ p: 3 }}>
//         <Alert severity="error" sx={{ borderRadius: 2 }}>
//           <AlertTitle>Error</AlertTitle>
//           {error}
//         </Alert>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ p: 3 }}>
//       <Card sx={{ borderRadius: 2, boxShadow: 3, overflow: 'visible' }}>
//         {/* Header Section */}
//         <Box sx={{ 
//           background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
//           p: 3,
//           color: 'white'
//         }}>
//           <Grid container alignItems="center" justifyContent="space-between">
//             <Grid item>
//               <Typography variant="h4" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                 <ClassIcon fontSize="large" />
//                 Master Class Management
//               </Typography>
//               <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
//                 Manage class teacher assignments and divisions
//               </Typography>
//             </Grid>
//             <Grid item>
//               <Tooltip title="Refresh Data">
//                 <IconButton 
//                   onClick={handleRefresh}
//                   sx={{ 
//                     color: 'white',
//                     bgcolor: 'rgba(255,255,255,0.2)',
//                     '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' }
//                   }}
//                 >
//                   <RefreshIcon />
//                 </IconButton>
//               </Tooltip>
//             </Grid>
//           </Grid>
//         </Box>

//         {/* Statistics Cards */}
//         <Box sx={{ p: 3, bgcolor: '#f5f5f5' }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <Paper sx={{ 
//                 p: 2, 
//                 textAlign: 'center',
//                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                 color: 'white'
//               }}>
//                 <Typography variant="h4" fontWeight="bold">{totalClasses}</Typography>
//                 <Typography variant="body2">Total Classes</Typography>
//               </Paper>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Paper sx={{ 
//                 p: 2, 
//                 textAlign: 'center',
//                 background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
//                 color: 'white'
//               }}>
//                 <Typography variant="h4" fontWeight="bold">{assignedClasses}</Typography>
//                 <Typography variant="body2">Assigned Teachers</Typography>
//               </Paper>
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <Paper sx={{ 
//                 p: 2, 
//                 textAlign: 'center',
//                 background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
//                 color: 'white'
//               }}>
//                 <Typography variant="h4" fontWeight="bold">{unassignedClasses}</Typography>
//                 <Typography variant="body2">Unassigned Classes</Typography>
//               </Paper>
//             </Grid>
//           </Grid>
//         </Box>

//         <Divider />

//         {/* Search Bar */}
//         <Box sx={{ p: 3, bgcolor: 'background.default' }}>
//           <TextField
//             fullWidth
//             variant="outlined"
//             placeholder="Search by class, division, teacher, or subject..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon color="action" />
//                 </InputAdornment>
//               ),
//               sx: { borderRadius: 2 }
//             }}
//             sx={{ maxWidth: 500 }}
//           />
//         </Box>

//         {/* Table Section */}
//         <TableContainer sx={{ maxHeight: 600 }}>
//           <Table stickyHeader>
//             <TableHead>
//               <TableRow>
//                 <TableCell sx={{ 
//                   bgcolor: '#f5f5f5', 
//                   fontWeight: 'bold',
//                   borderBottom: '2px solid #e0e0e0'
//                 }}>
//                   S.No
//                 </TableCell>
//                 <TableCell sx={{ 
//                   bgcolor: '#f5f5f5', 
//                   fontWeight: 'bold',
//                   borderBottom: '2px solid #e0e0e0'
//                 }}>
//                   Class
//                 </TableCell>
//                 <TableCell sx={{ 
//                   bgcolor: '#f5f5f5', 
//                   fontWeight: 'bold',
//                   borderBottom: '2px solid #e0e0e0'
//                 }}>
//                   Division
//                 </TableCell>
//                 <TableCell sx={{ 
//                   bgcolor: '#f5f5f5', 
//                   fontWeight: 'bold',
//                   borderBottom: '2px solid #e0e0e0'
//                 }}>
//                   Teacher Name
//                 </TableCell>
//                 <TableCell sx={{ 
//                   bgcolor: '#f5f5f5', 
//                   fontWeight: 'bold',
//                   borderBottom: '2px solid #e0e0e0'
//                 }}>
//                   Subject
//                 </TableCell>
//                 <TableCell sx={{ 
//                   bgcolor: '#f5f5f5', 
//                   fontWeight: 'bold',
//                   borderBottom: '2px solid #e0e0e0'
//                 }}>
//                   Status
//                 </TableCell>
//                 <TableCell sx={{ 
//                   bgcolor: '#f5f5f5', 
//                   fontWeight: 'bold',
//                   borderBottom: '2px solid #e0e0e0',
//                   textAlign: 'center'
//                 }}>
//                   Actions
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredData.length === 0 ? (
//                 <TableRow >
//                   <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
//                     <Typography variant="body1" color="text.secondary">
//                       {searchTerm ? 'No results found for your search.' : 'No master class details found.'}
//                     </Typography>
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 filteredData.map((row, index) => (
//                   <TableRow 
//                     key={index}
//                     hover
//                     sx={{ 
//                       '&:hover': { 
//                         bgcolor: 'rgba(102, 126, 234, 0.04)'
//                       },
//                       '&:nth-of-type(even)': {
//                         bgcolor: '#fafafa'
//                       }
//                     }}
//                   >
//                     <TableCell>
//                       <Typography variant="body2" fontWeight="medium">
//                         {index + 1}
//                       </Typography>
//                     </TableCell>
//                     <TableCell>
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                         <Badge 
//                           badgeContent={row.class_name} 
//                         //   color="primary"
//                           sx={{
//                             '& .MuiBadge-badge': {
//                               position: 'relative',
//                               transform: 'none',
//                               fontSize: '0.875rem',
//                               height: 'auto',
//                               padding: '4px 8px',
//                               borderRadius: '12px'
//                             }
//                           }}
//                         />
//                       </Box>
//                     </TableCell>
//                     <TableCell>
//                       <Chip 
//                         label={row.division} 
//                         size="small"
//                         sx={{ 
//                           bgcolor: '#e3f2fd',
//                           color: '#1976d2',
//                           fontWeight: 'bold'
//                         }}
//                       />
//                     </TableCell>
//                     <TableCell>
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                         <PersonIcon fontSize="small" color="action" />
//                         <Typography variant="body2">
//                           {row.teacher_name || 'Not Assigned'}
//                         </Typography>
//                       </Box>
//                     </TableCell>
//                     <TableCell>
//                       <Typography variant="body2" color={row.teacher_subject ? 'text.primary' : 'text.secondary'}>
//                         {row.teacher_subject || 'N/A'}
//                       </Typography>
//                     </TableCell>
//                     <TableCell>
//                       {row.teacher_name && row.teacher_name !== 'Not Assigned' ? (
//                         <Chip 
//                           label="Assigned" 
//                           size="small" 
//                           color="success"
//                           sx={{ fontWeight: 'bold' }}
//                         />
//                       ) : (
//                         <Chip 
//                           label="Pending" 
//                           size="small" 
//                           color="warning"
//                           variant="outlined"
//                           sx={{ fontWeight: 'bold' }}
//                         />
//                       )}
//                     </TableCell>
//                     <TableCell align="center">
//                       <Tooltip title="Edit Teacher Assignment">
//                         <IconButton 
//                           color="primary" 
//                           onClick={() => handleEditClick(row)}
//                           sx={{ 
//                             '&:hover': { 
//                               bgcolor: 'rgba(102, 126, 234, 0.1)',
//                               transform: 'scale(1.1)'
//                             },
//                             transition: 'all 0.2s'
//                           }}
//                         >
//                           <EditIcon />
//                         </IconButton>
//                       </Tooltip>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Card>
      
//       {/* Edit Modal */}
//       {isModalOpen && editingRow && (
//         <EditClassTeacherModal
//           open={isModalOpen}
//           onClose={handleModalClose}
//           data={editingRow}
//           onSave={handleSaveSuccess}
//         />
//       )}
//     </Box>
//   );
// };

// export default MasterClassTable;



import React, { useState, useEffect } from 'react';
import {
  Box, Typography, CircularProgress, Skeleton,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,CardContent,
  IconButton, Card, Chip, Tooltip, TextField, InputAdornment,
  Alert, AlertTitle, Divider, Grid, Badge
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ClassIcon from '@mui/icons-material/Class';
import RefreshIcon from '@mui/icons-material/Refresh';
import { classService } from '../../services/classService';
import EditClassTeacherModal from './EditClassTeacherModal';

const MasterClassTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  useEffect(() => {
    fetchMasterClassDetails();
  }, []);

  useEffect(() => {
    // Sort data by class name (numerically if possible) and then by division
    const sortedData = [...data].sort((a, b) => {
      // Extract numeric part from class name if it exists (e.g., "1", "2", "10")
      const getNumericValue = (className) => {
        const num = parseInt(className);
        return isNaN(num) ? className : num;
      };
      
      const classA = getNumericValue(a.class_name);
      const classB = getNumericValue(b.class_name);
      
      // First sort by class name
      if (classA !== classB) {
        // If both are numbers, sort numerically
        if (typeof classA === 'number' && typeof classB === 'number') {
          return classA - classB;
        }
        // Otherwise sort alphabetically
        return String(classA).localeCompare(String(classB));
      }
      
      // If class names are same, sort by division
      return String(a.division).localeCompare(String(b.division));
    });

    // Filter sorted data based on search term
    const filtered = sortedData.filter(row => 
      row.class_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.division?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.teacher_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.teacher_subject?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const fetchMasterClassDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await classService.getMasterClassDetails();
      
      // Sort the response data before setting it
      const sortedResponse = [...response].sort((a, b) => {
        // Extract numeric part from class name if it exists
        const getNumericValue = (className) => {
          const num = parseInt(className);
          return isNaN(num) ? className : num;
        };
        
        const classA = getNumericValue(a.class_name);
        const classB = getNumericValue(b.class_name);
        
        // First sort by class name
        if (classA !== classB) {
          // If both are numbers, sort numerically
          if (typeof classA === 'number' && typeof classB === 'number') {
            return classA - classB;
          }
          // Otherwise sort alphabetically
          return String(classA).localeCompare(String(classB));
        }
        
        // If class names are same, sort by division
        return String(a.division).localeCompare(String(b.division));
      });
      
      setData(sortedResponse);
      setFilteredData(sortedResponse);
    } catch (err) {
      console.error('Failed to fetch master class details:', err);
      setError('Failed to load data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (row) => {
    console.log("Edit button clicked for row:", row);
    setEditingRow(row);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingRow(null);
  };

  const handleSaveSuccess = async () => {
    try {
      await fetchMasterClassDetails();
      handleModalClose();
    } catch (error) {
      console.error("Failed to refresh data:", error);
    }
  };

  const handleRefresh = () => {
    setSearchTerm('');
    fetchMasterClassDetails();
  };

  // Calculate statistics
  const totalClasses = data.length;
  const assignedClasses = data.filter(row => row.teacher_name && row.teacher_name !== 'Not Assigned').length;
  const unassignedClasses = totalClasses - assignedClasses;

  if (loading) {
    return (
      <Box sx={{ p: 3 }}>
        <Card sx={{ borderRadius: 20, boxShadow: 3 }}>
          <CardContent>
            <Skeleton variant="rectangular" height={60} sx={{ mb: 2 }} />
            <Skeleton variant="rectangular" height={400} />
          </CardContent>
        </Card>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error" sx={{ borderRadius: 2 }}>
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Card sx={{ borderRadius: 2, boxShadow: 3, overflow: 'visible' }}>
      
        {/* Statistics Cards */}
        <Box sx={{ p: 3, bgcolor: '#f5f5f5' }}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <Paper sx={{ 
                p: .5, 
                textAlign: 'center',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white'
              }}>
                <Typography variant="h4" fontWeight="bold">{totalClasses}</Typography>
                <Typography variant="body2">Total Classes</Typography>
              </Paper>
            </Grid>

            <Grid item xs={6} sm={4}>
              <Paper sx={{ 
                p: .5, 
                textAlign: 'center',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white'
              }}>
                <Typography variant="h4" fontWeight="bold">{assignedClasses}</Typography>
                <Typography variant="body2">Assigned Teachers</Typography>
              </Paper>
            </Grid>

            {/* <Grid item xs={6} sm={4}>
              <Paper sx={{ 
                p: .5, 
                textAlign: 'center',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                color: 'white'
              }}>
                <Typography variant="h4" fontWeight="bold">{unassignedClasses}</Typography>
                <Typography variant="body2">Unassigned Classes</Typography>
              </Paper>
            </Grid> */}
                    <Box sx={{ p: 1, bgcolor: 'background.default' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search by class, division, teacher, or subject..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              sx: { borderRadius: 2 }
            }}
            sx={{ maxWidth: 500 }}
          />
        </Box>

          </Grid>
        </Box>

        <Divider />

        {/* Search Bar */}


        {/* Table Section */}
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow sx={{ height: 48 }}> {/* Reduced header row height */}
                <TableCell sx={{ 
                  bgcolor: '#f5f5f5', 
                  fontWeight: 'bold',
                  borderBottom: '2px solid #e0e0e0',
                  py: 1  /* Reduced vertical padding for header cells */
                }}>
                  S.No
                </TableCell>
                <TableCell sx={{ 
                  bgcolor: '#f5f5f5', 
                  fontWeight: 'bold',
                  borderBottom: '2px solid #e0e0e0'
                }}>
                  Class
                </TableCell>
                <TableCell sx={{ 
                  bgcolor: '#f5f5f5', 
                  fontWeight: 'bold',
                  borderBottom: '2px solid #e0e0e0'
                }}>
                  Division
                </TableCell>
                <TableCell sx={{ 
                  bgcolor: '#f5f5f5', 
                  fontWeight: 'bold',
                  borderBottom: '2px solid #e0e0e0'
                }}>
                  Teacher Name
                </TableCell>
                <TableCell sx={{ 
                  bgcolor: '#f5f5f5', 
                  fontWeight: 'bold',
                  borderBottom: '2px solid #e0e0e0'
                }}>
                  Subject
                </TableCell>
                <TableCell sx={{ 
                  bgcolor: '#f5f5f5', 
                  fontWeight: 'bold',
                  borderBottom: '2px solid #e0e0e0'
                }}>
                  Status
                </TableCell>
                <TableCell sx={{ 
                  bgcolor: '#f5f5f5', 
                  fontWeight: 'bold',
                  borderBottom: '2px solid #e0e0e0',
                  textAlign: 'center'
                }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                    <Typography variant="body1" color="text.secondary">
                      {searchTerm ? 'No results found for your search.' : 'No master class details found.'}
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                filteredData.map((row, index) => (
                  <TableRow 
                    key={index}
                    hover
                    sx={{ 
                      height: 48,  /* Reduced data row height */
                      '&:hover': { 
                        bgcolor: 'rgba(102, 126, 234, 0.04)'
                      },
                      '&:nth-of-type(even)': {
                        bgcolor: '#fafafa'
                      }
                    }}
                  >
                    <TableCell sx={{ py: 0.5 }}> {/* Reduced cell padding */}
                      <Typography variant="body2" fontWeight="medium">
                        {index + 1}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ py: 0.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Badge 
                          badgeContent={row.class_name} 
                          color="primary"
                          sx={{
                            '& .MuiBadge-badge': {
                              position: 'relative',
                              transform: 'none',
                              fontSize: '0.875rem',
                              height: 'auto',
                              padding: '2px 6px',  /* Reduced badge padding */
                              borderRadius: '12px'
                            }
                          }}
                        />
                      </Box>
                    </TableCell>
                    <TableCell sx={{ py: 0.5 }}>
                      <Chip 
                        label={row.division} 
                        size="small"
                        sx={{ 
                          bgcolor: '#e3f2fd',
                          color: '#1976d2',
                          fontWeight: 'bold',
                          height: 24  /* Reduced chip height */
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ py: 0.5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PersonIcon fontSize="small" color="action" />
                        <Typography variant="body2">
                          {row.teacher_name || 'Not Assigned'}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ py: 0.5 }}>
                      <Typography variant="body2" color={row.teacher_subject ? 'text.primary' : 'text.secondary'}>
                        {row.teacher_subject || 'N/A'}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ py: 0.5 }}>
                      {row.teacher_name && row.teacher_name !== 'Not Assigned' ? (
                        <Chip 
                          label="Assigned" 
                          size="small" 
                          color="success"
                          sx={{ fontWeight: 'bold', height: 24 }}  /* Reduced chip height */
                        />
                      ) : (
                        <Chip 
                          label="Pending" 
                          size="small" 
                          color="warning"
                          variant="outlined"
                          sx={{ fontWeight: 'bold', height: 24 }}  /* Reduced chip height */
                        />
                      )}
                    </TableCell>
                    <TableCell align="center" sx={{ py: 0.5 }}>
                      <Tooltip title="Edit Teacher Assignment">
                        <IconButton 
                          color="primary" 
                          size="small"  /* Added small size for icon button */
                          onClick={() => handleEditClick(row)}
                          sx={{ 
                            '&:hover': { 
                              bgcolor: 'rgba(102, 126, 234, 0.1)',
                              transform: 'scale(1.1)'
                            },
                            transition: 'all 0.2s'
                          }}
                        >
                          <EditIcon fontSize="small" />  {/* Reduced icon size */}
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      
      {/* Edit Modal */}
      {isModalOpen && editingRow && (
        <EditClassTeacherModal
          open={isModalOpen}
          onClose={handleModalClose}
          data={editingRow}
          onSave={handleSaveSuccess}
        />
      )}
    </Box>
  );
};

export default MasterClassTable;