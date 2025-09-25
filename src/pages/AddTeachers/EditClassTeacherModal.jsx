// import React, { useState, useEffect } from 'react';
// import {
//   Dialog, DialogTitle, DialogContent, DialogActions,
//   Button, FormControl, InputLabel, Select, MenuItem, Box, Typography
// } from '@mui/material';
// import { classService } from '../../services/classService';
// import { teacherService } from '../../services/teacherService';

// const EditClassTeacherModal = ({ open, onClose, data, onSave }) => {
//   const [allTeachers, setAllTeachers] = useState([]);
//   const [selectedTeacherId, setSelectedTeacherId] = useState('');

//   useEffect(() => {
//     fetchTeachers();
//     if (data) {
//       const teacher = allTeachers.find(t => t.full_name === data.teacher_name);
//       if (teacher) {
//         setSelectedTeacherId(teacher.id);
//       }
//     }
//   }, [data, allTeachers]);

//   const fetchTeachers = async () => {
//     try {
//       const teachers = await teacherService.getTeachers();
//       setAllTeachers(teachers);
//     } catch (error) {
//       console.error('Failed to fetch teachers:', error);
//     }
//   };

//   const handleSave = () => {
//     if (!selectedTeacherId) {
//       alert('Please select a teacher.');
//       return;
//     }
//     const updatedData = {
//       class_id: data.class_id,
//       division: data.division,
//       class_teacher_id: selectedTeacherId,
//     };
//     onSave(updatedData);
//   };

//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>Edit Class Teacher</DialogTitle>
//       <DialogContent>
//         <Box sx={{ width: 400 }}>
//           <Typography variant="body1">
//             Class Name: {data?.class_name}
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 2 }}>
//             Division: {data?.division}
//           </Typography>
//           <FormControl fullWidth>
//             <InputLabel id="select-teacher-label">Select New Teacher</InputLabel>
//             <Select
//               labelId="select-teacher-label"
//               value={selectedTeacherId}
//               label="Select New Teacher"
//               onChange={(e) => setSelectedTeacherId(e.target.value)}
//             >
//               {allTeachers.map((teacher) => (
//                 <MenuItem key={teacher.id} value={teacher.id}>
//                   {teacher.full_name} ({teacher.Subject_to_Teach || 'N/A'})
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Box>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose}>Cancel</Button>
//         <Button onClick={handleSave} color="primary" variant="contained">
//           Save Changes
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default EditClassTeacherModal;



// import React, { useState, useEffect } from 'react';
// import {
//   Dialog, DialogTitle, DialogContent, DialogActions,
//   Button, FormControl, InputLabel, Select, MenuItem, Box, Typography
// } from '@mui/material';
// import { classService } from '../../services/classService';
// import { teacherService } from '../../services/teacherService';

// const EditClassTeacherModal = ({ open, onClose, data, onSave }) => {
//   const [allTeachers, setAllTeachers] = useState([]);
//   const [selectedTeacherId, setSelectedTeacherId] = useState('');

//   // Fetch teachers when modal opens
//   useEffect(() => {
//     if (open) {
//       fetchTeachers();
//     }
//   }, [open]);

//   // Set selected teacher when data or allTeachers change
//   useEffect(() => {
//     if (data && allTeachers.length > 0) {
//       const teacher = allTeachers.find(t => t.full_name === data.teacher_name);
//       if (teacher) {
//         setSelectedTeacherId(teacher.id);
//       } else {
//         setSelectedTeacherId(''); // Reset if teacher not found
//       }
//     }
//   }, [data, allTeachers]);

//   // Reset selected teacher when modal closes
//   useEffect(() => {
//     if (!open) {
//       setSelectedTeacherId('');
//     }
//   }, [open]);

//   const fetchTeachers = async () => {
//     try {
//       const teachers = await teacherService.getTeachers();
//       setAllTeachers(teachers);
//     } catch (error) {
//       console.error('Failed to fetch teachers:', error);
//     }
//   };

//   const handleSave = async () => {
//     if (!selectedTeacherId) {
//       alert('Please select a teacher.');
//       return;
//     }
    
//     try {
//       // Call the service method with the correct parameters
//       const updatedData = { class_teacher_id: selectedTeacherId };
//       console.log("class_is",data.class_name)
//       await classService.updateMasterClass(data.class_name, data.division, updatedData);
      
//       // Call the parent's onSave callback to refresh the data
//       onSave();
      
//       // Close the modal
//       onClose();
//     } catch (error) {
//       console.error('Failed to update class teacher:', error);
//       alert('Failed to update class teacher. Please try again.');
//     }
//   };

//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle>Edit Class Teacher</DialogTitle>
//       <DialogContent>
//         <Box sx={{ width: 400 }}>
//           <Typography variant="body1">
//             Class Name: {data?.class_name}
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 2 }}>
//             Division: {data?.division}
//           </Typography>
//           <FormControl fullWidth>
//             <InputLabel id="select-teacher-label">Select New Teacher</InputLabel>
//             <Select
//               labelId="select-teacher-label"
//               value={selectedTeacherId}
//               label="Select New Teacher"
//               onChange={(e) => setSelectedTeacherId(e.target.value)}
//             >
//               {allTeachers.map((teacher) => (
//                 <MenuItem key={teacher.id} value={teacher.id}>
//                   {teacher.full_name} ({teacher.Subject_to_Teach || 'N/A'})
//                 </MenuItem>
//               ))}
//             </Select>
//           </FormControl>
//         </Box>
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose}>Cancel</Button>
//         <Button onClick={handleSave} color="primary" variant="contained">
//           Save Changes
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default EditClassTeacherModal;




import React, { useState, useEffect } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, FormControl, InputLabel, Select, MenuItem, Box, Typography
} from '@mui/material';
import { classService } from '../../services/classService';
import { teacherService } from '../../services/teacherService';

const EditClassTeacherModal = ({ open, onClose, data, onSave }) => {
  const [allTeachers, setAllTeachers] = useState([]);
  const [selectedTeacherId, setSelectedTeacherId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Fetch teachers when modal opens
  useEffect(() => {
    if (open && data) {
      fetchTeachers();
    }
  }, [open]);

  // Set selected teacher when data or allTeachers change
  useEffect(() => {
    if (data && allTeachers.length > 0) {
      const teacher = allTeachers.find(t => t.full_name === data.teacher_name);
      if (teacher) {
        setSelectedTeacherId(teacher.id);
      } else {
        setSelectedTeacherId(''); // Reset if teacher not found
      }
    }
  }, [data, allTeachers]);

  // Reset selected teacher when modal closes
  useEffect(() => {
    if (!open) {
      setSelectedTeacherId('');
      setIsLoading(false);
    }
  }, [open]);

  const fetchTeachers = async () => {
    try {
      const teachers = await teacherService.getTeachers();
      setAllTeachers(teachers);
    } catch (error) {
      console.error('Failed to fetch teachers:', error);
      alert('Failed to load teachers. Please try again.');
    }
  };

  const handleSave = async () => {
    // Prevent multiple submissions
    if (isLoading) {
      return;
    }
    
    if (!selectedTeacherId) {
      alert('Please select a teacher.');
      return;
    }

    // Validate required data
    if (!data?.class_name || !data?.division) {
      console.error('Missing required data:', { class_name: data?.class_name, division: data?.division });
      alert('Missing required class information. Please try again.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Call the service method with the correct parameters
      const updatedData = { class_teacher_id: selectedTeacherId };
      
      console.log('Updating master class:', { 
        class_id: data.class_name, 
        division: data.division, 
        updatedData 
      });
      
      // Make the API call ONLY ONCE here
      await classService.updateMasterClass(data.class_name, data.division, updatedData);
      
      console.log('Update successful');
      
      // Call the parent's onSave callback
      // This should ONLY refresh the data, not make another API call
      if (onSave) {
        await onSave();
      }
      
    } catch (error) {
      console.error('Failed to update class teacher:', error);
      alert('Failed to update class teacher. Please try again.');
      setIsLoading(false); // Reset loading state on error
    }
    // Note: Don't reset isLoading here because onSave will close the modal
  };

  // Don't render if no data
  if (!open || !data) {
    return null;
  }

  return (
    <Dialog 
      open={open} 
      onClose={() => {
        if (!isLoading) {
          onClose();
        }
      }}
      disableEscapeKeyDown={isLoading}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Edit Class Teacher</DialogTitle>
      <DialogContent>
        <Box sx={{ pt: 1 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Class:</strong> {data.class_name} - {data.division}
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary' }}>
            Current Teacher: {data.teacher_name || 'Not Assigned'}
          </Typography>
          
          <FormControl fullWidth>
            <InputLabel id="select-teacher-label">Select New Teacher</InputLabel>
            <Select
              labelId="select-teacher-label"
              value={selectedTeacherId}
              label="Select New Teacher"
              onChange={(e) => setSelectedTeacherId(e.target.value)}
              disabled={isLoading}
            >
              <MenuItem value="">
                <em>-- Select Teacher --</em>
              </MenuItem>
              {allTeachers.map((teacher) => (
                <MenuItem key={teacher.id} value={teacher.id}>
                  {teacher.full_name} ({teacher.Subject_to_Teach || 'N/A'})
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button 
          onClick={onClose}
          disabled={isLoading}
        >
          Cancel
        </Button>
        <Button 
          onClick={handleSave} 
          color="primary" 
          variant="contained"
          disabled={isLoading || !selectedTeacherId}
        >
          {isLoading ? 'Saving...' : 'Save Changes'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditClassTeacherModal;

// import React, { useState, useEffect } from 'react';
// import {
//   Box, Typography, FormControl, InputLabel, Select, MenuItem, Button, Card, CardContent, Grid
// } from '@mui/material';
// import { classService } from '../../services/classService';
// import { teacherService } from '../../services/teacherService';

// const ClassTeacherMapper = ({ loading = false }) => {
//   const [allClasses, setAllClasses] = useState([]);
//   const [allTeachers, setAllTeachers] = useState([]);
//   const [selectedClassId, setSelectedClassId] = useState('');
//   const [selectedDivision, setSelectedDivision] = useState('');
//   const [availableDivisions, setAvailableDivisions] = useState([]);
//   const [selectedTeacherIds, setSelectedTeacherIds] = useState([]);
//   const [isMappingLoading, setIsMappingLoading] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const classes = await classService.getClasses();
//       setAllClasses(classes);
//       const teachers = await teacherService.getTeachers();
//       setAllTeachers(teachers);
//     } catch (error) {
//       console.error('Failed to fetch data for mapper:', error);
//     }
//   };

//   const handleClassChange = (e) => {
//     const classId = e.target.value;
//     setSelectedClassId(classId);
//     setSelectedDivision('');

//     const selectedClass = allClasses.find(cls => cls.id === classId);
//     if (selectedClass && selectedClass.divisions) {
//       setAvailableDivisions(selectedClass.divisions);
//       setSelectedTeacherIds(selectedClass.class_teacher_ids || []);
//     } else {
//       setAvailableDivisions([]);
//       setSelectedTeacherIds([]);
//     }
//   };

//   const handleDivisionChange = (e) => {
//     setSelectedDivision(e.target.value);
//   };

//   const handleTeacherChange = (e) => {
//     setSelectedTeacherIds(e.target.value);
//   };

//   const handleSaveMapping = async () => {
//     if (!selectedClassId || !selectedDivision || selectedTeacherIds.length === 0) {
//       alert('Please select a class, division, and at least one teacher.');
//       return;
//     }
//     setIsMappingLoading(true);
//     try {
//       // The API endpoint handles only one teacher at a time
//       // So we loop through the selected teachers
//       for (const teacherId of selectedTeacherIds) {
//         const payload = {
//           class_teacher_id: teacherId,
//         };
//         // Corrected: Pass class_id and division as separate parameters
//         await classService.updateMasterClass(selectedClassId, selectedDivision, payload);
//       }
      
//       alert('Class teacher mapping saved successfully!');
      
//       setSelectedClassId('');
//       setSelectedDivision('');
//       setSelectedTeacherIds([]);
//       setAvailableDivisions([]);
      
//     } catch (error) {
//       console.error('Failed to save mapping:', error);
//       alert('Failed to save mapping. Please try again.');
//     } finally {
//       setIsMappingLoading(false);
//     }
//   };

//   return (
//     <Box sx={{ p: 2 }}>
//       <Card>
//         <CardContent>
//           <Typography variant="h5" gutterBottom>update Class Teacher</Typography>
//           <Typography variant="body1" sx={{ mb: 3 }}>
//             Select a class and assign one or more teachers to it.
//           </Typography>
          
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <FormControl fullWidth>
//                 <InputLabel id="select-class-label">Select Class</InputLabel>
//                 <Select
//                   labelId="select-class-label"
//                   value={selectedClassId}
//                   label="Select Class"
//                   onChange={handleClassChange}
//                 >
//                   <MenuItem value="">
//                     <em>None</em>
//                   </MenuItem>
//                   {allClasses.map((cls) => (
//                     <MenuItem key={cls.id} value={cls.id}>
//                       {cls.name} ({cls.medium})
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>

//             {availableDivisions.length > 0 && (
//                 <Grid item xs={12} sm={6}>
//                     <FormControl fullWidth>
//                         <InputLabel id="select-division-label">Select Division</InputLabel>
//                         <Select
//                             labelId="select-division-label"
//                             value={selectedDivision}
//                             label="Select Division"
//                             onChange={handleDivisionChange}
//                         >
//                             {availableDivisions.map((division) => (
//                                 <MenuItem key={division} value={division}>
//                                     {division}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>
//                 </Grid>
//             )}
//           </Grid>
          
//           <FormControl fullWidth sx={{ mt: 2, mb: 2 }} disabled={!selectedClassId || !selectedDivision}>
//             <InputLabel id="select-teachers-label">Select Class Teachers</InputLabel>
//             <Select
//               labelId="select-teachers-label"
//               multiple
//               value={selectedTeacherIds}
//               onChange={handleTeacherChange}
//               label="Select Class Teachers"
//               renderValue={(selected) => selected.map(id => allTeachers.find(t => t.id === id)?.full_name).join(', ')}
//             >
//               {allTeachers.length === 0 ? (
//                 <MenuItem disabled>No teachers available.</MenuItem>
//               ) : (
//                 allTeachers.map((teacher) => (
//                   <MenuItem key={teacher.id} value={teacher.id}>
//                     {teacher.full_name}
//                   </MenuItem>
//                 ))
//               )}
//             </Select>
//           </FormControl>

//           <Box sx={{ display: 'flex', justifyContent:"flex-end", mt: 3 }}>
//             <Button
//               variant="contained"
//               onClick={handleSaveMapping}
//               disabled={!selectedClassId || !selectedDivision || selectedTeacherIds.length === 0 || isMappingLoading}
//             >
//               {isMappingLoading ? 'Saving...' : 'Save Mapping'}
//             </Button>
//           </Box>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// };

// export default ClassTeacherMapper;