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
//   const [selectedDivision, setSelectedDivision] = useState(''); // NEW: state for selected division
//   const [availableDivisions, setAvailableDivisions] = useState([]); // NEW: state for available divisions
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
//     setSelectedDivision(''); // Reset division when class changes

//     // Find the selected class and set its divisions
//     const selectedClass = allClasses.find(cls => cls.id === classId);
//     if (selectedClass && selectedClass.divisions) {
//       setAvailableDivisions(selectedClass.divisions);
//       // Fetch currently assigned teachers for the class
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
//     if (!selectedClassId) {
//       alert('Please select a class.');
//       return;
//     }
//     setIsMappingLoading(true);
//     try {
//       const fullClassData = allClasses.find(cls => cls.id === selectedClassId);
      
//       const payload = {
//         name: fullClassData.name,
//         medium: fullClassData.medium,
//         max_students_per_division: fullClassData.max_students_per_division,
//         description: fullClassData.description,
//         divisions: fullClassData.divisions,
//         class_type: fullClassData.class_type,
//         class_teacher_ids: selectedTeacherIds,
//         // You would typically also save the selected division if the API supports it
//         // e.g., division: selectedDivision
//       };

//       await classService.updateClass(selectedClassId, payload);
//       alert('Class teacher mapping saved successfully!');
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
//           <Typography variant="h5" gutterBottom>Map Class Teacher</Typography>
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
          
//           <FormControl fullWidth sx={{ mt: 2, mb: 2 }} disabled={!selectedClassId}>
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

//           <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
//             <Button
//               variant="contained"
//               onClick={handleSaveMapping}
//               disabled={!selectedClassId || isMappingLoading}
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



import React, { useState, useEffect } from 'react';
import {
  Box, Typography, FormControl, InputLabel, Select, MenuItem, Button, Card, CardContent, Grid
} from '@mui/material';
import { classService } from '../../services/classService';
import { teacherService } from '../../services/teacherService';

const ClassTeacherMapper = ({ loading = false }) => {
  const [allClasses, setAllClasses] = useState([]);
  const [allTeachers, setAllTeachers] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState('');
  const [selectedDivision, setSelectedDivision] = useState('');
  const [availableDivisions, setAvailableDivisions] = useState([]);
  const [selectedTeacherIds, setSelectedTeacherIds] = useState([]);
  const [isMappingLoading, setIsMappingLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const classes = await classService.getClasses();
      setAllClasses(classes);
      const teachers = await teacherService.getTeachers();
      setAllTeachers(teachers);
    } catch (error) {
      console.error('Failed to fetch data for mapper:', error);
    }
  };

  const handleClassChange = (e) => {
    const classId = e.target.value;
    setSelectedClassId(classId);
    setSelectedDivision('');

    const selectedClass = allClasses.find(cls => cls.id === classId);
    if (selectedClass && selectedClass.divisions) {
      setAvailableDivisions(selectedClass.divisions);
      // Fetch currently assigned teachers for the class
      setSelectedTeacherIds(selectedClass.class_teacher_ids || []);
    } else {
      setAvailableDivisions([]);
      setSelectedTeacherIds([]);
    }
  };

  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
  };

  const handleTeacherChange = (e) => {
    setSelectedTeacherIds(e.target.value);
  };

  const handleSaveMapping = async () => {
    if (!selectedClassId || !selectedDivision || selectedTeacherIds.length === 0) {
      alert('Please select a class, division, and at least one teacher.');
      return;
    }
    setIsMappingLoading(true);
    try {
      // Loop through selected teachers and save a new mapping for each
      for (const teacherId of selectedTeacherIds) {
        const payload = {
          class_id: selectedClassId,
          division: selectedDivision,
          class_teacher_id: teacherId,
        };
        await classService.addMasterClassMapping(payload);
      }
      
      alert('Class teacher mapping saved successfully!');
      
      // Clear the form after a successful save
      setSelectedClassId('');
      setSelectedDivision('');
      setSelectedTeacherIds([]);
      setAvailableDivisions([]);
      
    } catch (error) {
      console.error('Failed to save mapping:', error);
      alert('Failed to save mapping. Please try again.');
    } finally {
      setIsMappingLoading(false);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>Map Class Teacher</Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Select a class and assign one or more teachers to it.
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="select-class-label">Select Class</InputLabel>
                <Select
                  labelId="select-class-label"
                  value={selectedClassId}
                  label="Select Class"
                  onChange={handleClassChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {allClasses.map((cls) => (
                    <MenuItem key={cls.id} value={cls.id}>
                      {cls.name} ({cls.medium})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {availableDivisions.length > 0 && (
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="select-division-label">Select Division</InputLabel>
                        <Select
                            labelId="select-division-label"
                            value={selectedDivision}
                            label="Select Division"
                            onChange={handleDivisionChange}
                        >
                            {availableDivisions.map((division) => (
                                <MenuItem key={division} value={division}>
                                    {division}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            )}
          </Grid>
          
          <FormControl fullWidth sx={{ mt: 2, mb: 2 }} disabled={!selectedClassId || !selectedDivision}>
            <InputLabel id="select-teachers-label">Select Class Teachers</InputLabel>
            <Select
              labelId="select-teachers-label"
              multiple
              value={selectedTeacherIds}
              onChange={handleTeacherChange}
              label="Select Class Teachers"
              renderValue={(selected) => selected.map(id => allTeachers.find(t => t.id === id)?.full_name).join(', ')}
            >
              {allTeachers.length === 0 ? (
                <MenuItem disabled>No teachers available.</MenuItem>
              ) : (
                allTeachers.map((teacher) => (
                  <MenuItem key={teacher.id} value={teacher.id}>
                    {teacher.full_name}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
            <Button
              variant="contained"
              onClick={handleSaveMapping}
              disabled={!selectedClassId || !selectedDivision || selectedTeacherIds.length === 0 || isMappingLoading}
            >
              {isMappingLoading ? 'Saving...' : 'Save Mapping'}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ClassTeacherMapper;