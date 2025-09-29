// // // src/pages/ViewClasses/ViewClasses.js
// // import React from 'react';

// // const ViewClasses = () => {
// //     return (
// //         <div>
// //             <h2>View All Classes</h2>
// //             <p>This is where the list of classes will be displayed.</p>
// //             {/* You will fetch and display class data here */}
// //         </div>
// //     );
// // };

// // export default ViewClasses;


// import React, { useState, useEffect } from 'react';
// import { 
//     Box, 
//     Typography, 
//     CircularProgress, 
//     Alert,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Paper,
//     IconButton,
//     Tooltip
// } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { classService } from '../../services/classService'; // Adjust the import path

// const ViewClasses = () => {
//     const [classes, setClasses] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchClasses = async () => {
//             try {
//                 const data = await classService.getClasses(); // Your API call
//                 setClasses(data);
//             } catch (err) {
//                 setError('Failed to fetch classes. Please try again later.');
//                 console.error(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchClasses();
//     }, []); // Empty array ensures this runs only once on mount

//     if (loading) {
//         return (
//             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     if (error) {
//         return <Alert severity="error">{error}</Alert>;
//     }

//     return (
//         <Box>
//             <Typography variant="h4" gutterBottom>
//                 Manage Classes
//             </Typography>
//             <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Class Name</TableCell>
//                             <TableCell align="left">Medium</TableCell>
//                             <TableCell align="center">Divisions</TableCell>
//                             <TableCell align="center">Max Students</TableCell>
//                             <TableCell align="center">Academic Year</TableCell>
//                             <TableCell align="right">Actions</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {classes.map((cls) => (
//                             <TableRow
//                                 key={cls.id}
//                                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                             >
//                                 <TableCell component="th" scope="row">
//                                     {cls.className}
//                                 </TableCell>
//                                 <TableCell align="left">{cls.medium}</TableCell>
//                                 <TableCell align="center">{cls.divisions.join(', ')}</TableCell>
//                                 <TableCell align="center">{cls.maxStudentsPerDivision}</TableCell>
//                                 <TableCell align="center">{cls.academicYear}</TableCell>
//                                 <TableCell align="right">
//                                     <Tooltip title="Edit">
//                                         <IconButton onClick={() => console.log('Edit class', cls.id)}>
//                                             <EditIcon />
//                                         </IconButton>
//                                     </Tooltip>
//                                     <Tooltip title="Delete">
//                                         <IconButton onClick={() => console.log('Delete class', cls.id)}>
//                                             <DeleteIcon color="error" />
//                                         </IconButton>
//                                     </Tooltip>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </Box>
//     );
// };

// export default ViewClasses;



import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering'; // A fitting icon

const ViewClasses = () => {
    return (
        <Paper 
            sx={{ 
                textAlign: 'center', 
                p: { xs: 3, md: 5 }, 
                mt: 4,
                backgroundColor: '#f5f5f5' 
            }}
        >
            <Box>
                <EngineeringIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
                <Typography variant="h4" component="h2" gutterBottom>
                    Page Under Construction
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    This feature is currently a work in progress. Please check back soon!
                </Typography>
            </Box>
        </Paper>
    );
};

export default ViewClasses;