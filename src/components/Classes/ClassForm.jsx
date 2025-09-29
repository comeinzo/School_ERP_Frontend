// import React, { useState, useEffect } from 'react';
// import {
//   TextField,
//   Button,
//   Grid,
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Chip,
//   Checkbox,
//   FormControlLabel,
//   InputAdornment,
//   IconButton
// } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs from 'dayjs';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import ClearIcon from '@mui/icons-material/Clear';
// import "../Students/StudentsForm.css"

// // Ensure this component is wrapped in <LocalizationProvider> in your parent component
// // e.g., <LocalizationProvider dateAdapter={AdapterDayjs}><ClassForm ... /></LocalizationProvider>

// const ClassForm = ({ onSubmit, onPreview, onChange, loading, initialData = null }) => {
//   const [formData, setFormData] = useState({
//     className: '',
//     medium: '',
//     divisions: [],
//     numDivisions: 1,
//     academicYear: dayjs().year(), // Use dayjs for the year
//     maxStudentsPerDivision: 40,
//     classTeacher: '',
//     room: '',
//     description: '',
//     customDivision: '' // For custom division input
//   });

//   const [errors, setErrors] = useState({});
//   const [useCustomDivisions, setUseCustomDivisions] = useState(false);

//   const divisionOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

//   useEffect(() => {
//     if (initialData) {
//       setFormData({
//         ...initialData,
//         academicYear: initialData.academicYear ? dayjs(String(initialData.academicYear)) : dayjs(),
//         numDivisions: initialData.divisions ? initialData.divisions.length : 1,
//         customDivision: '',
//       });
//       const isCustom = initialData.divisions && initialData.divisions.some(d => !divisionOptions.includes(d));
//       setUseCustomDivisions(isCustom);
//     }
//   }, [initialData]);

//   useEffect(() => {
//     onChange && onChange(formData);
//   }, [formData]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleNumDivisionsChange = (e) => {
//     let value = parseInt(e.target.value, 10);
//     if (isNaN(value) || value < 1) value = 1;
//     if (value > 10) value = 10;
    
//     setFormData(prev => ({ ...prev, numDivisions: value }));
//     generateDivisions(value);
//   };

//   const handleAcademicYearChange = (date) => {
//     const year = date ? date.year() : dayjs().year();
//     setFormData(prev => ({ ...prev, academicYear: year }));
//   };

//   const generateDivisions = (count) => {
//     if (!useCustomDivisions) {
//       const newDivisions = divisionOptions.slice(0, count);
//       setFormData(prev => ({ ...prev, divisions: newDivisions }));
//     }
//   };

//   const handleAddCustomDivision = () => {
//     const division = formData.customDivision.trim().toUpperCase();
//     if (division && !formData.divisions.includes(division)) {
//       setFormData(prev => ({
//         ...prev,
//         divisions: [...prev.divisions, division].sort(),
//         customDivision: ''
//       }));
//     }
//   };

//   const handleRemoveDivision = (division) => {
//     setFormData(prev => ({
//       ...prev,
//       divisions: prev.divisions.filter(d => d !== division)
//     }));
//   };

//   const toggleDivisionMode = (e) => {
//     const isCustom = e.target.checked;
//     setUseCustomDivisions(isCustom);
//     if (!isCustom) {
//       generateDivisions(formData.numDivisions);
//     } else {
//       setFormData(prev => ({ ...prev, divisions: [] }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.className) newErrors.className = 'Class name is required';
//     if (!formData.medium) newErrors.medium = 'Medium is required';
//     if (formData.divisions.length === 0) newErrors.divisions = 'At least one division is required';
//     if (formData.maxStudentsPerDivision < 1 || formData.maxStudentsPerDivision > 100) {
//       newErrors.maxStudentsPerDivision = 'Max students must be between 1 and 100';
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       onSubmit(formData);
//       console.log("formdata",formData)
//     }
//   };

//   const handlePreview = () => {
//     if (validateForm()) {
//       onPreview(formData);
//     }
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box component="form" className="stylish-input" onSubmit={handleSubmit} sx={{ maxWidth: 800, margin: 'auto', p: 2 }}>
//         <Card sx={{ mb: 3 }}>
//           <CardContent>
//             <Typography variant="h5" gutterBottom>
//               📚 Class Information
//             </Typography>
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   required
//                   label="Class Name"
//                   name="className"
//                   value={formData.className}
//                   onChange={handleInputChange}
//                   placeholder="e.g., 10, UKG"
//                   error={!!errors.className}
//                   helperText={errors.className}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   required
//                   label="Medium"
//                   name="medium"
//                   value={formData.medium}
//                   onChange={handleInputChange}
//                   placeholder="e.g., English, CBSE"
//                   error={!!errors.medium}
//                   helperText={errors.medium}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <DatePicker
//                   views={['year']}
//                   label="Academic Year"
//                   value={dayjs(String(formData.academicYear))}
//                   onChange={handleAcademicYearChange}
//                   slotProps={{ textField: { fullWidth: true } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   required
//                   type="number"
//                   label="Max Students per Division"
//                   name="maxStudentsPerDivision"
//                   value={formData.maxStudentsPerDivision}
//                   onChange={handleInputChange}
//                   inputProps={{ min: 1, max: 100 }}
//                   error={!!errors.maxStudentsPerDivision}
//                   helperText={errors.maxStudentsPerDivision}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   fullWidth
//                   label="Room/Location (Optional)"
//                   name="room"
//                   value={formData.room}
//                   onChange={handleInputChange}
//                   placeholder="e.g., Room 201, Block A"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   multiline
//                   rows={3}
//                   label="Description (Optional)"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleInputChange}
//                   placeholder="Add any additional information about this class..."
//                 />
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>

//         <Card sx={{ mb: 3 }}>
//           <CardContent>
//             <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//               <Typography variant="h5">
//                 📊 Divisions
//               </Typography>
//               <FormControlLabel
//                 control={
//                   <Checkbox
//                     checked={useCustomDivisions}
//                     onChange={toggleDivisionMode}
//                   />
//                 }
//                 label="Use Custom Divisions"
//               />
//             </Box>

//             {!useCustomDivisions ? (
//               <TextField
//                 fullWidth
//                 type="number"
//                 label="Number of Divisions (A, B, C...)"
//                 name="numDivisions"
//                 value={formData.numDivisions}
//                 onChange={handleNumDivisionsChange}
//                 inputProps={{ min: 1, max: 10 }}
//               />
//             ) : (
//               <Grid container spacing={2} alignItems="center">
//                 <Grid item xs>
//                   <TextField
//                     fullWidth
//                     label="Enter custom division name"
//                     name="customDivision"
//                     value={formData.customDivision}
//                     onChange={handleInputChange}
//                     onKeyPress={(e) => e.key === 'Enter' && handleAddCustomDivision()}
//                   />
//                 </Grid>
//                 <Grid item>
//                   <Button
//                     variant="contained"
//                     onClick={handleAddCustomDivision}
//                     startIcon={<AddCircleIcon />}
//                   >
//                     Add
//                   </Button>
//                 </Grid>
//               </Grid>
//             )}

//             {formData.divisions.length > 0 && (
//               <Box mt={3}>
//                 <Typography variant="subtitle1" gutterBottom>
//                   Selected Divisions ({formData.divisions.length})
//                 </Typography>
//                 <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//                   {formData.divisions.map(division => (
//                     <Chip
//                       key={division}
//                       label={`Division ${division}`}
//                       onDelete={() => handleRemoveDivision(division)}
//                       color="primary"
//                       variant="outlined"
//                       deleteIcon={<ClearIcon />}
//                     />
//                   ))}
//                 </Box>
//               </Box>
//             )}
//             {errors.divisions && (
//               <Typography color="error" variant="body2" sx={{ mt: 1 }}>
//                 {errors.divisions}
//               </Typography>
//             )}
//           </CardContent>
//         </Card>

//         <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
//           <Button
//             variant="outlined"
//             onClick={() => window.history.back()}
//           >
//             Cancel
//           </Button>
//           <Button
//             variant="outlined"
//             onClick={handlePreview}
//           >
//             Preview
//           </Button>
//           <Button
//             type="submit"
//             variant="contained"
//             disabled={loading}
//           >
//             {loading ? 'Creating...' : 'Create Class'}
//           </Button>
//         </Box>
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default ClassForm;




import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ClearIcon from '@mui/icons-material/Clear';
import SectionHeader from '../common/SectionHeader'; // Assuming you have this component
import ClassIcon from '@mui/icons-material/Class';
import AppsIcon from '@mui/icons-material/Apps';
import "../Students/StudentsForm.css";

const ClassForm = ({ onSubmit, onPreview, onChange, loading, initialData = null }) => {
  const [formData, setFormData] = useState({
    className: '',
    medium: '',
    divisions: [],
    numDivisions: 1,
    academicYear: dayjs().year(),
    maxStudentsPerDivision: 40,
    classTeacher: '',
    room: '',
    description: '',
    customDivision: ''
  });

  const [errors, setErrors] = useState({});
  const [useCustomDivisions, setUseCustomDivisions] = useState(false);

  const divisionOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    // All your existing functions (useEffect, handleInputChange, validateForm, etc.) remain unchanged.
    // ...

    useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        academicYear: initialData.academicYear ? dayjs(String(initialData.academicYear)) : dayjs(),
        numDivisions: initialData.divisions ? initialData.divisions.length : 1,
        customDivision: '',
      });
      const isCustom = initialData.divisions && initialData.divisions.some(d => !divisionOptions.includes(d));
      setUseCustomDivisions(isCustom);
    }
  }, [initialData]);

  useEffect(() => {
    onChange && onChange(formData);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleNumDivisionsChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) value = 1;
    if (value > 10) value = 10;
    
    setFormData(prev => ({ ...prev, numDivisions: value }));
    generateDivisions(value);
  };

  const handleAcademicYearChange = (date) => {
    const year = date ? date.year() : dayjs().year();
    setFormData(prev => ({ ...prev, academicYear: year }));
  };

  const generateDivisions = (count) => {
    if (!useCustomDivisions) {
      const newDivisions = divisionOptions.slice(0, count);
      setFormData(prev => ({ ...prev, divisions: newDivisions }));
    }
  };

  const handleAddCustomDivision = () => {
    const division = formData.customDivision.trim().toUpperCase();
    if (division && !formData.divisions.includes(division)) {
      setFormData(prev => ({
        ...prev,
        divisions: [...prev.divisions, division].sort(),
        customDivision: ''
      }));
    }
  };

  const handleRemoveDivision = (division) => {
    setFormData(prev => ({
      ...prev,
      divisions: prev.divisions.filter(d => d !== division)
    }));
  };

  const toggleDivisionMode = (e) => {
    const isCustom = e.target.checked;
    setUseCustomDivisions(isCustom);
    if (!isCustom) {
      generateDivisions(formData.numDivisions);
    } else {
      setFormData(prev => ({ ...prev, divisions: [] }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.className) newErrors.className = 'Class name is required';
    if (!formData.medium) newErrors.medium = 'Medium is required';
    if (formData.divisions.length === 0) newErrors.divisions = 'At least one division is required';
    if (formData.maxStudentsPerDivision < 1 || formData.maxStudentsPerDivision > 100) {
      newErrors.maxStudentsPerDivision = 'Max students must be between 1 and 100';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      console.log("formdata",formData)
    }
  };

  const handlePreview = () => {
    if (validateForm()) {
      onPreview(formData);
    }
  };


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component="form" className="stylish-input" onSubmit={handleSubmit} sx={{ maxWidth: 1200, margin: 'auto', p: 2 }}>
        
        {/* Class Information Card */}
        <Card sx={{ mb: 3, backgroundColor: '#e1ebecff' }}>
          <CardContent>
            <SectionHeader
              icon={<ClassIcon />}
              title="Class Information"
              subtitle="Define the core details of the new class."
            />
            <Grid container spacing={3}>
              {/* --- Row 1: THREE items --- */}
              <Grid item xs={12} md={4}>
                <TextField fullWidth required label="Class Name" name="className" value={formData.className} onChange={handleInputChange} placeholder="e.g., 10, UKG" error={!!errors.className} helperText={errors.className} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth required label="Medium" name="medium" value={formData.medium} onChange={handleInputChange} placeholder="e.g., English, CBSE" error={!!errors.medium} helperText={errors.medium} />
              </Grid>
              <Grid item xs={12} md={4}>
                <DatePicker views={['year']} label="Year" value={dayjs().year(formData.academicYear)} onChange={handleAcademicYearChange} slotProps={{ textField: { fullWidth: true } }} />
              </Grid>

              {/* --- Row 2: TWO items --- */}
              <Grid item xs={12} md={6}>
                <TextField fullWidth required type="number" label="Max Students per Division" name="maxStudentsPerDivision" value={formData.maxStudentsPerDivision} onChange={handleInputChange} inputProps={{ min: 1, max: 100 }} error={!!errors.maxStudentsPerDivision} helperText={errors.maxStudentsPerDivision} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Room/Location (Optional)" name="room" value={formData.room} onChange={handleInputChange} placeholder="e.g., Room 201, Block A" />
              </Grid>

              {/* --- Row 3: ONE item --- */}
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={3} label="Description (Optional)" name="description" value={formData.description} onChange={handleInputChange} placeholder="Add any additional information about this class..." />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Divisions Card */}
        <Card sx={{ mb: 3, backgroundColor: '#e1ebecff' }}>
          <CardContent>
            <SectionHeader
              icon={<AppsIcon />}
              title="Divisions"
              subtitle="Manage the divisions for this class."
            />
            <FormControlLabel
              control={<Checkbox checked={useCustomDivisions} onChange={toggleDivisionMode} />}
              label="Use Custom Division Names"
              sx={{ mb: 2, display: 'block' }}
            />
            {!useCustomDivisions ? (
              <TextField fullWidth type="number" label="Number of Divisions (A, B, C...)" name="numDivisions" value={formData.numDivisions} onChange={handleNumDivisionsChange} inputProps={{ min: 1, max: 10 }} />
            ) : (
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <TextField fullWidth label="Enter custom division name" name="customDivision" value={formData.customDivision} onChange={handleInputChange} onKeyPress={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddCustomDivision(); } }} />
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={handleAddCustomDivision} startIcon={<AddCircleIcon />}>Add</Button>
                </Grid>
              </Grid>
            )}
            {formData.divisions.length > 0 && (
              <Box mt={3}>
                <Typography variant="subtitle1" gutterBottom>
                  Created Divisions ({formData.divisions.length})
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {formData.divisions.map(division => (
                    <Chip key={division} label={`Division ${division}`} onDelete={() => handleRemoveDivision(division)} color="primary" variant="outlined" deleteIcon={<ClearIcon />} />
                  ))}
                </Box>
              </Box>
            )}
            {errors.divisions && <Typography color="error" variant="body2" sx={{ mt: 1 }}>{errors.divisions}</Typography>}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
          <Button variant="outlined" onClick={() => window.history.back()}>Cancel</Button>
          <Button variant="outlined" onClick={handlePreview}>Preview</Button>
          <Button type="submit" variant="contained" disabled={loading}>{loading ? 'Creating...' : 'Create Class'}</Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default ClassForm;