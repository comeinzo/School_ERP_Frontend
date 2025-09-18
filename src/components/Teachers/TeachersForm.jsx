// // import React, { useState, useEffect } from 'react';
// // import {
// //   TextField,
// //   Button,
// //   Grid,
// //   Box,
// //   Typography,
// //   Card,
// //   CardContent,
// //   Chip,
// //   Checkbox,
// //   FormControlLabel,
// //   InputAdornment,
// //   IconButton
// // } from '@mui/material';
// // import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import dayjs from 'dayjs';
// // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // import ClearIcon from '@mui/icons-material/Clear';

// // // Ensure this component is wrapped in <LocalizationProvider> in your parent component
// // // e.g., <LocalizationProvider dateAdapter={AdapterDayjs}><ClassForm ... /></LocalizationProvider>

// // const TeacherForm = ({ onSubmit, onPreview, onChange, loading, initialData = null }) => {
// //   const [formData, setFormData] = useState({
// //     Name: '',
// //     Fathers_name: '',
// //     Address:'',
// //     PinCode:'',
// //     Age:'',
// //     Gender:'',
// //     Aadhar_no:'',
// //     Ph_Number:'',
// //     DateOfBirth: dayjs().year(), // Use dayjs for the year
// //     HighestEducation:'',
// //     Languages:'',
// //     Class_type : '',
// //     description: '',
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [useCustomDivisions, setUseCustomDivisions] = useState(false);

// //   const divisionOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

// //   useEffect(() => {
// //     if (initialData) {
// //       setFormData({
// //         ...initialData,
// //         academicYear: initialData.DateOfBirth ? dayjs(String(initialData.DateOfBirth)) : dayjs(),
// //       });
// //     }
// //   }, [initialData]);

// //   useEffect(() => {
// //     onChange && onChange(formData);
// //   }, [formData]);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({ ...prev, [name]: value }));
// //     if (errors[name]) {
// //       setErrors(prev => ({ ...prev, [name]: '' }));
// //     }
// //   };

// //   const handleNumDivisionsChange = (e) => {
// //     let value = parseInt(e.target.value, 10);
// //     if (isNaN(value) || value < 1) value = 1;
// //     if (value > 10) value = 10;
    
// //     setFormData(prev => ({ ...prev, numDivisions: value }));
// //     generateDivisions(value);
// //   };

// //   const handleDateOfBirth = (date) => {
// //     const year = date ? date.year() : dayjs().year();
// //     setFormData(prev => ({ ...prev, DateOfBirth: year }));
// //   };



// //   const handleRemoveDivision = (division) => {
// //     setFormData(prev => ({
// //       ...prev,
// //       divisions: prev.divisions.filter(d => d !== division)
// //     }));
// //   };

// //   const toggleDivisionMode = (e) => {
// //     const isCustom = e.target.checked;
// //     setUseCustomDivisions(isCustom);
// //     if (!isCustom) {
// //       generateDivisions(formData.numDivisions);
// //     } else {
// //       setFormData(prev => ({ ...prev, divisions: [] }));
// //     }
// //   };

// //   const validateForm = () => {
// //     const newErrors = {};
// //     if (!formData.className) newErrors.className = 'Class name is required';
// //     if (!formData.medium) newErrors.medium = 'Medium is required';
// //     if (formData.divisions.length === 0) newErrors.divisions = 'At least one division is required';
// //     if (formData.maxStudentsPerDivision < 1 || formData.maxStudentsPerDivision > 100) {
// //       newErrors.maxStudentsPerDivision = 'Max students must be between 1 and 100';
// //     }
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (validateForm()) {
// //       onSubmit(formData);
// //       console.log("formdata",formData)
// //     }
// //   };

// //   const handlePreview = () => {
// //     if (validateForm()) {
// //       onPreview(formData);
// //     }
// //   };

// //   return (
// //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// //       <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 800, margin: 'auto', p: 2 }}>
// //         <Card sx={{ mb: 3 }}>
// //           <CardContent>
// //             <Typography variant="h5" gutterBottom>
// //               📚 Class Information
// //             </Typography>
// //             <Grid container spacing={3}>
// //               <Grid item xs={12} sm={6}>
// //                 <TextField
// //                   fullWidth
// //                   required
// //                   label="Class Name"
// //                   name="className"
// //                   value={formData.className}
// //                   onChange={handleInputChange}
// //                   placeholder="e.g., 10, UKG"
// //                   error={!!errors.className}
// //                   helperText={errors.className}
// //                 />
// //               </Grid>
// //               <Grid item xs={12} sm={6}>
// //                 <TextField
// //                   fullWidth
// //                   required
// //                   label="Medium"
// //                   name="medium"
// //                   value={formData.medium}
// //                   onChange={handleInputChange}
// //                   placeholder="e.g., English, CBSE"
// //                   error={!!errors.medium}
// //                   helperText={errors.medium}
// //                 />
// //               </Grid>
// //               <Grid item xs={12} sm={6}>
// //                 <DatePicker
// //                   views={['year']}
// //                   label="Academic Year"
// //                   value={dayjs(String(formData.academicYear))}
// //                   onChange={handleDateOfBirth}
// //                   slotProps={{ textField: { fullWidth: true } }}
// //                 />
// //               </Grid>
// //               <Grid item xs={12} sm={6}>
// //                 <TextField
// //                   fullWidth
// //                   required
// //                   type="number"
// //                   label="Max Students per Division"
// //                   name="maxStudentsPerDivision"
// //                   value={formData.maxStudentsPerDivision}
// //                   onChange={handleInputChange}
// //                   inputProps={{ min: 1, max: 100 }}
// //                   error={!!errors.maxStudentsPerDivision}
// //                   helperText={errors.maxStudentsPerDivision}
// //                 />
// //               </Grid>
// //               <Grid item xs={12} sm={6}>
// //                 <TextField
// //                   fullWidth
// //                   label="Room/Location (Optional)"
// //                   name="room"
// //                   value={formData.room}
// //                   onChange={handleInputChange}
// //                   placeholder="e.g., Room 201, Block A"
// //                 />
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <TextField
// //                   fullWidth
// //                   multiline
// //                   rows={3}
// //                   label="Description (Optional)"
// //                   name="description"
// //                   value={formData.description}
// //                   onChange={handleInputChange}
// //                   placeholder="Add any additional information about this class..."
// //                 />
// //               </Grid>
// //             </Grid>
// //           </CardContent>
// //         </Card>

// //         <Card sx={{ mb: 3 }}>
// //           <CardContent>
// //             <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
// //               <Typography variant="h5">
// //                 📊 Divisions
// //               </Typography>
// //               <FormControlLabel
// //                 control={
// //                   <Checkbox
// //                     checked={useCustomDivisions}
// //                     onChange={toggleDivisionMode}
// //                   />
// //                 }
// //                 label="Use Custom Divisions"
// //               />
// //             </Box>

// //             {!useCustomDivisions ? (
// //               <TextField
// //                 fullWidth
// //                 type="number"
// //                 label="Number of Divisions (A, B, C...)"
// //                 name="numDivisions"
// //                 value={formData.numDivisions}
// //                 onChange={handleNumDivisionsChange}
// //                 inputProps={{ min: 1, max: 10 }}
// //               />
// //             ) : (
// //               <Grid container spacing={2} alignItems="center">
// //                 <Grid item xs>
// //                   <TextField
// //                     fullWidth
// //                     label="Enter custom division name"
// //                     name="customDivision"
// //                     value={formData.customDivision}
// //                     onChange={handleInputChange}
// //                     onKeyPress={(e) => e.key === 'Enter' && handleAddCustomDivision()}
// //                   />
// //                 </Grid>
// //                 <Grid item>
// //                   <Button
// //                     variant="contained"
// //                     onClick={handleAddCustomDivision}
// //                     startIcon={<AddCircleIcon />}
// //                   >
// //                     Add
// //                   </Button>
// //                 </Grid>
// //               </Grid>
// //             )}

// //             {formData.divisions.length > 0 && (
// //               <Box mt={3}>
// //                 <Typography variant="subtitle1" gutterBottom>
// //                   Selected Divisions ({formData.divisions.length})
// //                 </Typography>
// //                 <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
// //                   {formData.divisions.map(division => (
// //                     <Chip
// //                       key={division}
// //                       label={`Division ${division}`}
// //                       onDelete={() => handleRemoveDivision(division)}
// //                       color="primary"
// //                       variant="outlined"
// //                       deleteIcon={<ClearIcon />}
// //                     />
// //                   ))}
// //                 </Box>
// //               </Box>
// //             )}
// //             {errors.divisions && (
// //               <Typography color="error" variant="body2" sx={{ mt: 1 }}>
// //                 {errors.divisions}
// //               </Typography>
// //             )}
// //           </CardContent>
// //         </Card>

// //         <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
// //           <Button
// //             variant="outlined"
// //             onClick={() => window.history.back()}
// //           >
// //             Cancel
// //           </Button>
// //           <Button
// //             variant="outlined"
// //             onClick={handlePreview}
// //           >
// //             Preview
// //           </Button>
// //           <Button
// //             type="submit"
// //             variant="contained"
// //             disabled={loading}
// //           >
// //             {loading ? 'Creating...' : 'Create Class'}
// //           </Button>
// //         </Box>
// //       </Box>
// //     </LocalizationProvider>
// //   );
// // };

// // export default TeacherForm;



















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
//   IconButton,
//   MenuItem,
//   Select,
//   InputLabel,
//   FormControl
// } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs from 'dayjs';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import ClearIcon from '@mui/icons-material/Clear';

// const TeacherForm = ({ onSubmit, onPreview, onChange, loading, initialData = null }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     fathers_name: '',
//     address: '',
//     pin_code: '',
//     age: '',
//     gender: '',
//     aadhar_no: '',
//     ph_number: '',
//     date_of_birth: null,
//     highest_education: '',
//     languages: [],
//     class_type: '',
//     description: '',
//     customLanguage: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [useCustomLanguages, setUseCustomLanguages] = useState(false);
//   const languageOptions = ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam'];

//   useEffect(() => {
//     if (initialData) {
//       setFormData({
//         ...initialData,
//         date_of_birth: initialData.date_of_birth ? dayjs(initialData.date_of_birth) : null,
//       });
//       const isCustom = initialData.languages && initialData.languages.some(lang => !languageOptions.includes(lang));
//       setUseCustomLanguages(isCustom);
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

//   const handleDateOfBirthChange = (date) => {
//     setFormData(prev => ({ ...prev, date_of_birth: date }));
//     if (errors.date_of_birth) {
//       setErrors(prev => ({ ...prev, date_of_birth: '' }));
//     }
//   };

//   const handleAddCustomLanguage = () => {
//     const language = formData.customLanguage.trim();
//     if (language && !formData.languages.includes(language)) {
//       setFormData(prev => ({
//         ...prev,
//         languages: [...prev.languages, language].sort(),
//         customLanguage: ''
//       }));
//     }
//   };

//   const handleRemoveLanguage = (languageToRemove) => {
//     setFormData(prev => ({
//       ...prev,
//       languages: prev.languages.filter(lang => lang !== languageToRemove)
//     }));
//   };
  
//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.fathers_name) newErrors.fathers_name = "Father's name is required";
//     if (!formData.address) newErrors.address = 'Address is required';
//     if (!formData.pin_code) newErrors.pin_code = 'Pin Code is required';
//     if (!formData.age) newErrors.age = 'Age is required';
//     if (!formData.gender) newErrors.gender = 'Gender is required';
//     if (!formData.aadhar_no) newErrors.aadhar_no = 'Aadhar number is required';
//     if (!formData.ph_number) newErrors.ph_number = 'Phone number is required';
//     if (!formData.date_of_birth) newErrors.date_of_birth = 'Date of Birth is required';
//     if (!formData.highest_education) newErrors.highest_education = 'Highest Education is required';
//     if (!formData.languages || formData.languages.length === 0) newErrors.languages = 'At least one language is required';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       onSubmit(formData);
//     }
//   };

//   const handlePreview = () => {
//     if (validateForm()) {
//       onPreview(formData);
//     }
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 1000, margin: 'auto', p: 2 }}>
//         <Card sx={{ mb: 3 }}>
//           <CardContent>
//             <Typography variant="h5" gutterBottom>👨‍🏫 Teacher Information</Typography>
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth required label="Name" name="name" value={formData.name} onChange={handleInputChange} error={!!errors.name} helperText={errors.name} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth required label="Father's Name" name="fathers_name" value={formData.fathers_name} onChange={handleInputChange} error={!!errors.fathers_name} helperText={errors.fathers_name} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth required label="Address" name="address" value={formData.address} onChange={handleInputChange} error={!!errors.address} helperText={errors.address} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth required label="Pin Code" name="pin_code" value={formData.pin_code} onChange={handleInputChange} error={!!errors.pin_code} helperText={errors.pin_code} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth required type="number" label="Age" name="age" value={formData.age} onChange={handleInputChange} error={!!errors.age} helperText={errors.age} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <FormControl fullWidth required error={!!errors.gender}>
//                   <InputLabel id="gender-label">Gender</InputLabel>
//                   <Select labelId="gender-label" label="Gender" name="gender" value={formData.gender} onChange={handleInputChange}>
//                     <MenuItem value=""><em>Select Gender</em></MenuItem>
//                     <MenuItem value="male">Male</MenuItem>
//                     <MenuItem value="female">Female</MenuItem>
//                     <MenuItem value="other">Other</MenuItem>
//                   </Select>
//                   {errors.gender && <Typography color="error" variant="body2">{errors.gender}</Typography>}
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth required label="Aadhar No." name="aadhar_no" value={formData.aadhar_no} onChange={handleInputChange} error={!!errors.aadhar_no} helperText={errors.aadhar_no} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth required label="Phone Number" name="ph_number" value={formData.ph_number} onChange={handleInputChange} error={!!errors.ph_number} helperText={errors.ph_number} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <DatePicker label="Date of Birth" name="date_of_birth" value={formData.date_of_birth} onChange={handleDateOfBirthChange} slotProps={{ textField: { fullWidth: true, required: true, error: !!errors.date_of_birth, helperText: errors.date_of_birth } }} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth required label="Highest Education" name="highest_education" value={formData.highest_education} onChange={handleInputChange} error={!!errors.highest_education} helperText={errors.highest_education} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth label="Class Type" name="class_type" value={formData.class_type} onChange={handleInputChange} />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField fullWidth multiline rows={3} label="Description (Optional)" name="description" value={formData.description} onChange={handleInputChange} placeholder="Add any additional information..." />
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>

//         <Card sx={{ mb: 3 }}>
//           <CardContent>
//             <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//               <Typography variant="h5">🗣️ Languages</Typography>
//               <FormControlLabel control={<Checkbox checked={useCustomLanguages} onChange={(e) => setUseCustomLanguages(e.target.checked)} />} label="Use Custom Languages" />
//             </Box>
//             {!useCustomLanguages ? (
//               <FormControl fullWidth required error={!!errors.languages}>
//                 <InputLabel id="languages-label">Languages</InputLabel>
//                 <Select labelId="languages-label" label="Languages" name="languages" multiple value={formData.languages} onChange={handleInputChange}>
//                   {languageOptions.map(lang => (<MenuItem key={lang} value={lang}>{lang}</MenuItem>))}
//                 </Select>
//                 {errors.languages && <Typography color="error" variant="body2">{errors.languages}</Typography>}
//               </FormControl>
//             ) : (
//               <Grid container spacing={2} alignItems="center">
//                 <Grid item xs>
//                   <TextField fullWidth label="Enter custom language" name="customLanguage" value={formData.customLanguage} onChange={handleInputChange} onKeyPress={(e) => e.key === 'Enter' && handleAddCustomLanguage()} />
//                 </Grid>
//                 <Grid item>
//                   <Button variant="contained" onClick={handleAddCustomLanguage} startIcon={<AddCircleIcon />}>Add</Button>
//                 </Grid>
//               </Grid>
//             )}
//             {formData.languages.length > 0 && (
//               <Box mt={3}>
//                 <Typography variant="subtitle1" gutterBottom>Selected Languages ({formData.languages.length})</Typography>
//                 <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
//                   {formData.languages.map(lang => (
//                     <Chip key={lang} label={lang} onDelete={() => handleRemoveLanguage(lang)} color="primary" variant="outlined" deleteIcon={<ClearIcon />} />
//                   ))}
//                 </Box>
//               </Box>
//             )}
//             {errors.languages && <Typography color="error" variant="body2" sx={{ mt: 1 }}>{errors.languages}</Typography>}
//           </CardContent>
//         </Card>

//         <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
//           <Button variant="outlined" onClick={() => window.history.back()}>Cancel</Button>
//           <Button variant="outlined" onClick={handlePreview}>Preview</Button>
//           <Button type="submit" variant="contained" disabled={loading}>{loading ? 'Creating...' : 'Create Teacher'}</Button>
//         </Box>
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default TeacherForm;









import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Grid, Box, Typography, Card, CardContent, Chip, Checkbox,
  FormControlLabel, InputAdornment, IconButton, MenuItem, Select, InputLabel, FormControl
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ClearIcon from '@mui/icons-material/Clear';

const TeacherForm = ({ onSubmit, onPreview, onChange, loading, initialData = null }) => {
  const [formData, setFormData] = useState({
    name: '',
    fathers_name: '',
    address: '',
    pin_code: '',
    age: '',
    gender: '',
    aadhar_no: '',
    ph_number: '',
    date_of_birth: null,
    highest_education: '',
    languages: [],
    class_type: '',
    description: '',
    customLanguage: ''
  });

  const [errors, setErrors] = useState({});
  const [useCustomLanguages, setUseCustomLanguages] = useState(false);
  const languageOptions = ['English', 'Hindi', 'Tamil', 'Telugu', 'Kannada', 'Malayalam'];

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        date_of_birth: initialData.date_of_birth ? dayjs(initialData.date_of_birth) : null,
      });
      const isCustom = initialData.languages && initialData.languages.some(lang => !languageOptions.includes(lang));
      setUseCustomLanguages(isCustom);
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

  const handleDateOfBirthChange = (date) => {
    setFormData(prev => ({ ...prev, date_of_birth: date }));
    if (errors.date_of_birth) {
      setErrors(prev => ({ ...prev, date_of_birth: '' }));
    }
  };

  const handleAddCustomLanguage = () => {
    const language = formData.customLanguage.trim();
    if (language && !formData.languages.includes(language)) {
      setFormData(prev => ({
        ...prev,
        languages: [...prev.languages, language].sort(),
        customLanguage: ''
      }));
    }
  };

  const handleRemoveLanguage = (languageToRemove) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.filter(lang => lang !== languageToRemove)
    }));
  };
  
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.fathers_name) newErrors.fathers_name = "Father's name is required";
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.pin_code) newErrors.pin_code = 'Pin Code is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.aadhar_no) newErrors.aadhar_no = 'Aadhar number is required';
    if (!formData.ph_number) newErrors.ph_number = 'Phone number is required';
    if (!formData.date_of_birth) newErrors.date_of_birth = 'Date of Birth is required';
    if (!formData.highest_education) newErrors.highest_education = 'Highest Education is required';
    if (!formData.languages || formData.languages.length === 0) newErrors.languages = 'At least one language is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Create a clean payload with correct data types and no extra fields
//       const payload = {
//         full_name: formData.name,
//         fathers_name: formData.fathers_name,
//         address: formData.address,
//         pin_code: formData.pin_code,
//         age: parseInt(formData.age, 10), // Convert age to integer
//         gender: formData.gender,
//         aadhar_no: formData.aadhar_no,
//         ph_number: formData.ph_number,
//         date_of_birth: formData.date_of_birth.format('YYYY-MM-DD'), // Format date to YYYY-MM-DD string
//         highest_education: formData.highest_education,
//         languages: formData.languages,
//         class_type: formData.class_type,
//         description: formData.description,
//       };
      
//       onSubmit(payload);
//     }
//   };

// ... (rest of the component code)

const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Create a clean payload with correct data types and no extra fields
      const payload = {
        full_name: formData.name,
        fathers_name: formData.fathers_name,
        address: formData.address,
        pin_code: formData.pin_code,
        age: parseInt(formData.age, 10), // Convert age to integer
        gender: formData.gender,
        aadhar_no: formData.aadhar_no,
        ph_number: formData.ph_number,
        date_of_birth: formData.date_of_birth.format('YYYY-MM-DD'), // Format date to YYYY-MM-DD string
        highest_education: formData.highest_education,
        languages: formData.languages,
        class_type: formData.class_type,
        description: formData.description,
      };

      console.log("payload from teacherForm",payload)
      
      onSubmit(payload); // Corrected: pass the clean 'payload' object
    }
  };

// ... (rest of the component code)


  const handlePreview = () => {
    if (validateForm()) {
      onPreview(formData);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 1000, margin: 'auto', p: 2 }}>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>👨‍🏫 Teacher Information</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required label="Name" name="name" value={formData.name} onChange={handleInputChange} error={!!errors.name} helperText={errors.name} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required label="Father's Name" name="fathers_name" value={formData.fathers_name} onChange={handleInputChange} error={!!errors.fathers_name} helperText={errors.fathers_name} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required label="Address" name="address" value={formData.address} onChange={handleInputChange} error={!!errors.address} helperText={errors.address} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required label="Pin Code" name="pin_code" value={formData.pin_code} onChange={handleInputChange} error={!!errors.pin_code} helperText={errors.pin_code} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required type="number" label="Age" name="age" value={formData.age} onChange={handleInputChange} error={!!errors.age} helperText={errors.age} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required error={!!errors.gender}>
                  <InputLabel id="gender-label">Gender</InputLabel>
                  <Select labelId="gender-label" label="Gender" name="gender" value={formData.gender} onChange={handleInputChange}>
                    <MenuItem value=""><em>Select Gender</em></MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                  {errors.gender && <Typography color="error" variant="body2">{errors.gender}</Typography>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required label="Aadhar No." name="aadhar_no" value={formData.aadhar_no} onChange={handleInputChange} error={!!errors.aadhar_no} helperText={errors.aadhar_no} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required label="Phone Number" name="ph_number" value={formData.ph_number} onChange={handleInputChange} error={!!errors.ph_number} helperText={errors.ph_number} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePicker label="Date of Birth" name="date_of_birth" value={formData.date_of_birth} onChange={handleDateOfBirthChange} slotProps={{ textField: { fullWidth: true, required: true, error: !!errors.date_of_birth, helperText: errors.date_of_birth } }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required label="Highest Education" name="highest_education" value={formData.highest_education} onChange={handleInputChange} error={!!errors.highest_education} helperText={errors.highest_education} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Class Type" name="class_type" value={formData.class_type} onChange={handleInputChange} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth multiline rows={3} label="Description (Optional)" name="description" value={formData.description} onChange={handleInputChange} placeholder="Add any additional information..." />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h5">🗣️ Languages</Typography>
              <FormControlLabel control={<Checkbox checked={useCustomLanguages} onChange={(e) => setUseCustomLanguages(e.target.checked)} />} label="Use Custom Languages" />
            </Box>
            {!useCustomLanguages ? (
              <FormControl fullWidth required error={!!errors.languages}>
                <InputLabel id="languages-label">Languages</InputLabel>
                <Select labelId="languages-label" label="Languages" name="languages" multiple value={formData.languages} onChange={handleInputChange}>
                  {languageOptions.map(lang => (<MenuItem key={lang} value={lang}>{lang}</MenuItem>))}
                </Select>
                {errors.languages && <Typography color="error" variant="body2">{errors.languages}</Typography>}
              </FormControl>
            ) : (
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <TextField fullWidth label="Enter custom language" name="customLanguage" value={formData.customLanguage} onChange={handleInputChange} onKeyPress={(e) => e.key === 'Enter' && handleAddCustomLanguage()} />
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={handleAddCustomLanguage} startIcon={<AddCircleIcon />}>Add</Button>
                </Grid>
              </Grid>
            )}
            {formData.languages.length > 0 && (
              <Box mt={3}>
                <Typography variant="subtitle1" gutterBottom>Selected Languages ({formData.languages.length})</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {formData.languages.map(lang => (
                    <Chip key={lang} label={lang} onDelete={() => handleRemoveLanguage(lang)} color="primary" variant="outlined" deleteIcon={<ClearIcon />} />
                  ))}
                </Box>
              </Box>
            )}
            {errors.languages && <Typography color="error" variant="body2" sx={{ mt: 1 }}>{errors.languages}</Typography>}
          </CardContent>
        </Card>

        <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
          <Button variant="outlined" onClick={() => window.history.back()}>Cancel</Button>
          <Button variant="outlined" onClick={handlePreview}>Preview</Button>
          <Button type="submit" variant="contained" disabled={loading}>{loading ? 'Creating...' : 'Create Teacher'}</Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default TeacherForm;