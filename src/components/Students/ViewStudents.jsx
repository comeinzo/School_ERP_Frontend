import React, { useState, useEffect } from 'react';
import { studentService } from '../../services/studentService';
import { 
    Box, Paper, Table, TableBody, TableCell, TableContainer, 
    TableHead, TableRow, TablePagination, Typography, CircularProgress, 
    IconButton, Tooltip 
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ViewStudents = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalStudents, setTotalStudents] = useState(0); // Assuming you might get a total count from API later

    useEffect(() => {
        fetchStudents();
    }, [page, rowsPerPage]);

    const fetchStudents = async () => {
        try {
            setLoading(true);
            const response = await studentService.getStudents(page, rowsPerPage);
            setStudents(response);
            // For now, we'll set a placeholder total. A real app would get this from the API.
            // setTotalStudents(response.totalCount); 
        } catch (err) {
            console.error("Failed to fetch students:", err);
            setError('Failed to load student data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                <CircularProgress />
            </Box>
        );
    }
    
    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>All Students</Typography>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer>
                    <Table stickyHeader aria-label="student table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Adm No.</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Class</TableCell>
                                <TableCell>Gender</TableCell>
                                <TableCell>Date Of Birth</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {students.map((student) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={student.id}>
                                    <TableCell>{student.admission_number}</TableCell>
                                    <TableCell>{student.student_name}</TableCell>
                                    <TableCell>{student.admission_class_id} - {student.admission_division}</TableCell>
                                    <TableCell>{student.gender}</TableCell>
                                    <TableCell>{student.date_of_birth}</TableCell>
                                    <TableCell align="right">
                                        <Tooltip title="Edit">
                                            <IconButton onClick={() => console.log('Edit student', student.id)} size="small">
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton onClick={() => console.log('Delete student', student.id)} size="small">
                                                <DeleteIcon color="error" />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* For now, we use client-side pagination display. A full solution would use a total count from the API */}
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={-1} // Use -1 for server-side pagination without a total count
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
};

export default ViewStudents;