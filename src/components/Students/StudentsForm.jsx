


// import React, { useState, useEffect } from 'react';
// import {
//   TextField, Button, Grid, Box, Typography, Card, CardContent,
//   FormControl, InputLabel, Select, MenuItem,
//   RadioGroup, Radio, FormControlLabel,
//   FormLabel, Checkbox, FormGroup,
//   Divider
// } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs from 'dayjs';
// import { classService } from '../../services/classService';
// import { studentService } from '../../services/studentService'; // Assuming this service exists

// const StudentAdmissionForm = ({ onSubmit, onPreview, onChange, loading, initialData = null }) => {
//   const [formData, setFormData] = useState({
//     photo: null,
//     student_name: '',
//     age: '',
//     date_of_birth: null,
//     birth_place: '',
//     nationality: 'Indian',
//     gender: '',
//     blood_group: '',
//     aadhar_no: '',
//     state: '',
//     religion: '',
//     cast: '',
//     fathers_name: '',
//     fathers_occupation: '',
//     mothers_name: '',
//     mothers_occupation: '',
//     current_address: '',
//     current_pincode: '',
//     permanent_address: '',
//     permanent_pincode: '',
//     mother_tongue: '',
//     identification_mark: '',
//     previous_school: '',
//     previous_school_board: '',
//     admission_class: '',
//     admission_division: '', // New field for division
//   });
  
//   const [allClasses, setAllClasses] = useState([]);
//   const [availableDivisions, setAvailableDivisions] = useState([]);
//   const [admissionNumber, setAdmissionNumber] = useState('');
//   const [isSameAddress, setIsSameAddress] = useState(false);
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     fetchClasses();
//     fetchNextAdmissionNumber();

//     if (initialData) {
//       setFormData({
//         ...initialData,
//         date_of_birth: initialData.date_of_birth ? dayjs(initialData.date_of_birth) : null,
//       });
//       if (initialData.current_address === initialData.permanent_address) {
//         setIsSameAddress(true);
//       }
//     }
//   }, [initialData]);

//   useEffect(() => {
//     onChange && onChange(formData);
//   }, [formData]);

//   const fetchClasses = async () => {
//     try {
//       const classes = await classService.getClasses();
//       setAllClasses(classes);
//     } catch (error) {
//       console.error('Failed to fetch classes:', error);
//     }
//   };

//   const fetchNextAdmissionNumber = async () => {
//       try {
//           const nextNumber = await studentService.getNextAdmissionNumber();
//           setAdmissionNumber(nextNumber);
//       } catch (error) {
//           console.error('Failed to fetch next admission number:', error);
//       }
//   };

//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'photo' && files && files[0]) {
//       setFormData(prev => ({ ...prev, photo: files[0] }));
//     } else if (name === 'admission_class') {
//       const selectedClass = allClasses.find(cls => cls.id === value);
//       setAvailableDivisions(selectedClass ? selectedClass.divisions : []);
//       setFormData(prev => ({ ...prev, [name]: value, admission_division: '' }));
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     }
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

//   const handleSameAddressChange = (e) => {
//     const checked = e.target.checked;
//     setIsSameAddress(checked);
//     if (checked) {
//       setFormData(prev => ({
//         ...prev,
//         permanent_address: prev.current_address,
//         permanent_pincode: prev.current_pincode
//       }));
//     } else {
//         setFormData(prev => ({
//             ...prev,
//             permanent_address: '',
//             permanent_pincode: ''
//         }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.student_name) newErrors.student_name = 'Student Name is required';
//     if (!formData.age) newErrors.age = 'Age is required';
//     if (!formData.date_of_birth) newErrors.date_of_birth = 'Date of Birth is required';
//     if (!formData.gender) newErrors.gender = 'Gender is required';
//     if (!formData.aadhar_no) newErrors.aadhar_no = 'Aadhar number is required';
//     if (!formData.fathers_name) newErrors.fathers_name = "Father's Name is required";
//     if (!formData.current_address) newErrors.current_address = 'Current Address is required';
//     if (!formData.current_pincode) newErrors.current_pincode = 'Current Pincode is required';
//     if (!isSameAddress && !formData.permanent_address) newErrors.permanent_address = 'Permanent Address is required';
//     if (!isSameAddress && !formData.permanent_pincode) newErrors.permanent_pincode = 'Permanent Pincode is required';
//     if (!formData.admission_class) newErrors.admission_class = 'Admission Class is required';
//     if (availableDivisions.length > 0 && !formData.admission_division) newErrors.admission_division = 'Admission Division is required';
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (validateForm()) {
//   //     const payload = {
//   //       student_name: formData.student_name,
//   //       age: parseInt(formData.age, 10),
//   //       date_of_birth: formData.date_of_birth ? formData.date_of_birth.format('YYYY-MM-DD') : null,
//   //       birth_place: formData.birth_place,
//   //       nationality: formData.nationality,
//   //       gender: formData.gender,
//   //       blood_group: formData.blood_group,
//   //       aadhar_no: formData.aadhar_no,
//   //       state: formData.state,
//   //       religion: formData.religion,
//   //       cast: formData.cast,
//   //       fathers_name: formData.fathers_name,
//   //       fathers_occupation: formData.fathers_occupation,
//   //       mothers_name: formData.mothers_name,
//   //       mothers_occupation: formData.mothers_occupation,
//   //       current_address: formData.current_address,
//   //       current_pincode: formData.current_pincode,
//   //       permanent_address: formData.permanent_address,
//   //       permanent_pincode: formData.permanent_pincode,
//   //       mother_tongue: formData.mother_tongue,
//   //       identification_mark: formData.identification_mark,
//   //       previous_school: formData.previous_school,
//   //       previous_school_board: formData.previous_school_board,
//   //       admission_class: formData.admission_class,
//   //       admission_division: formData.admission_division,
//   //       admission_number: admissionNumber,
//   //       admission_year_start: dayjs().startOf('year').format('YYYY-MM-DD'),
//   //       admission_year_end: dayjs().endOf('year').format('YYYY-MM-DD'),
//   //     };
//   //     onSubmit(payload);
//   //   }
//   // };



//   // Inside StudentAdmissionForm component, modify the handleSubmit function

// const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Create a new FormData object
//       const formDataPayload = new FormData();

//       // Append all form data to the FormData object
//       formDataPayload.append('student_name', formData.student_name);
//       formDataPayload.append('age', parseInt(formData.age, 10));
//       formDataPayload.append('date_of_birth', formData.date_of_birth ? formData.date_of_birth.format('YYYY-MM-DD') : '');
//       formDataPayload.append('birth_place', formData.birth_place);
//       formDataPayload.append('nationality', formData.nationality);
//       formDataPayload.append('gender', formData.gender);
//       formDataPayload.append('blood_group', formData.blood_group);
//       formDataPayload.append('aadhar_no', formData.aadhar_no);
//       formDataPayload.append('state', formData.state);
//       formDataPayload.append('religion', formData.religion);
//       formDataPayload.append('cast', formData.cast);
//       formDataPayload.append('fathers_name', formData.fathers_name);
//       formDataPayload.append('fathers_occupation', formData.fathers_occupation);
//       formDataPayload.append('mothers_name', formData.mothers_name);
//       formDataPayload.append('mothers_occupation', formData.mothers_occupation);
//       formDataPayload.append('current_address', formData.current_address);
//       formDataPayload.append('current_pincode', formData.current_pincode);
//       formDataPayload.append('permanent_address', formData.permanent_address);
//       formDataPayload.append('permanent_pincode', formData.permanent_pincode);
//       formDataPayload.append('mother_tongue', formData.mother_tongue);
//       formDataPayload.append('identification_mark', formData.identification_mark);
//       formDataPayload.append('previous_school', formData.previous_school);
//       formDataPayload.append('previous_school_board', formData.previous_school_board);
//       formDataPayload.append('admission_class', formData.admission_class);
//       formDataPayload.append('admission_division', formData.admission_division);
//       formDataPayload.append('admission_number', admissionNumber);
//       formDataPayload.append('admission_year_start', dayjs().startOf('year').format('YYYY-MM-DD'));
//       formDataPayload.append('admission_year_end', dayjs().endOf('year').format('YYYY-MM-DD'));
//       
//       // Append the photo file itself
//       if (formData.photo) {
//         formDataPayload.append('photo', formData.photo);
//       }

//       onSubmit(formDataPayload);
//     }
//   };

//   const handlePreview = () => {
//     if (validateForm()) {
//       onPreview(formData);
//     }
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 1200, margin: 'auto', p: 2 }}>
//         <Card sx={{ mb: 3 }}>
//           <CardContent>
//             <Typography variant="h5" gutterBottom>Admission Details</Typography>
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth label="Admission Number" name="admission_number" value={admissionNumber} disabled />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Typography variant="body1" sx={{ mt: 2 }}>
//                   Academic Year: **{dayjs().year()}**
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Divider sx={{ my: 2 }} />

//             <Typography variant="h5" gutterBottom>👶 Student Information</Typography>
//             <Grid container spacing={3}>
//               {/* ... (existing fields) */}
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth required label="Student Name" name="student_name" value={formData.student_name} onChange={handleInputChange} error={!!errors.student_name} helperText={errors.student_name} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <DatePicker label="Date of Birth" value={formData.date_of_birth} onChange={handleDateOfBirthChange} slotProps={{ textField: { fullWidth: true, required: true, error: !!errors.date_of_birth, helperText: errors.date_of_birth } }} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth required type="number" label="Age" name="age" value={formData.age} onChange={handleInputChange} error={!!errors.age} helperText={errors.age} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth label="Birth Place" name="birth_place" value={formData.birth_place} onChange={handleInputChange} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <FormControl fullWidth>
//                   <InputLabel id="nationality-label">Nationality</InputLabel>
//                   <Select labelId="nationality-label" label="Nationality" name="nationality" value={formData.nationality} onChange={handleInputChange}>
//                     <MenuItem value="Indian">Indian</MenuItem>
//                     <MenuItem value="Other">Other</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <FormControl fullWidth required error={!!errors.gender}>
//                   <FormLabel id="gender-label">Gender</FormLabel>
//                   <RadioGroup row aria-labelledby="gender-label" name="gender" value={formData.gender} onChange={handleInputChange}>
//                     <FormControlLabel value="male" control={<Radio />} label="Male" />
//                     <FormControlLabel value="female" control={<Radio />} label="Female" />
//                     <FormControlLabel value="other" control={<Radio />} label="Other" />
//                   </RadioGroup>
//                   {errors.gender && <Typography color="error" variant="body2">{errors.gender}</Typography>}
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth label="Blood Group" name="blood_group" value={formData.blood_group} onChange={handleInputChange} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth required label="Aadhar No." name="aadhar_no" value={formData.aadhar_no} onChange={handleInputChange} error={!!errors.aadhar_no} helperText={errors.aadhar_no} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth label="State" name="state" value={formData.state} onChange={handleInputChange} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth label="Religion" name="religion" value={formData.religion} onChange={handleInputChange} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <FormControl fullWidth>
//                   <InputLabel id="cast-label">Cast</InputLabel>
//                   <Select labelId="cast-label" label="Cast" name="cast" value={formData.cast} onChange={handleInputChange}>
//                     <MenuItem value="general">General</MenuItem>
//                     <MenuItem value="sc">SC</MenuItem>
//                     <MenuItem value="st">ST</MenuItem>
//                     <MenuItem value="obc">OBC</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth label="Mother Tongue" name="mother_tongue" value={formData.mother_tongue} onChange={handleInputChange} />
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>

//         <Card sx={{ mb: 3 }}>
//           <CardContent>
//             <Typography variant="h5" gutterBottom>👨‍👩‍👧 Family Information</Typography>
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth required label="Father's Name" name="fathers_name" value={formData.fathers_name} onChange={handleInputChange} error={!!errors.fathers_name} helperText={errors.fathers_name} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth label="Father's Occupation" name="fathers_occupation" value={formData.fathers_occupation} onChange={handleInputChange} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth label="Mother's Name" name="mothers_name" value={formData.mothers_name} onChange={handleInputChange} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth label="Mother's Occupation" name="mothers_occupation" value={formData.mothers_occupation} onChange={handleInputChange} />
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>

//         <Card sx={{ mb: 3 }}>
//           <CardContent>
//             <Typography variant="h5" gutterBottom>🏠 Address Information</Typography>
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth required multiline rows={3} label="Current Address" name="current_address" value={formData.current_address} onChange={handleInputChange} error={!!errors.current_address} helperText={errors.current_address} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth required label="Current Pincode" name="current_pincode" value={formData.current_pincode} onChange={handleInputChange} error={!!errors.current_pincode} helperText={errors.current_pincode} />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox checked={isSameAddress} onChange={handleSameAddressChange} />}
//                   label="Permanent address is the same as current address"
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth required={!isSameAddress} multiline rows={3} label="Permanent Address" name="permanent_address" value={formData.permanent_address} onChange={handleInputChange} disabled={isSameAddress} error={!!errors.permanent_address} helperText={errors.permanent_address} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth required={!isSameAddress} label="Permanent Pincode" name="permanent_pincode" value={formData.permanent_pincode} onChange={handleInputChange} disabled={isSameAddress} error={!!errors.permanent_pincode} helperText={errors.permanent_pincode} />
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>
        
//         <Card sx={{ mb: 3 }}>
//           <CardContent>
//             <Typography variant="h5" gutterBottom>🏫 Previous School & Other Details</Typography>
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <TextField fullWidth label="Identification Mark" name="identification_mark" value={formData.identification_mark} onChange={handleInputChange} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth label="Previous School" name="previous_school" value={formData.previous_school} onChange={handleInputChange} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth label="Previous School Board" name="previous_school_board" value={formData.previous_school_board} onChange={handleInputChange} />
//               </Grid>
              
//               {/* Dynamic class and division selection */}
//               <Grid item xs={12} sm={6}>
//                 <FormControl fullWidth required error={!!errors.admission_class}>
//                   <InputLabel id="admission-class-label">Admission Class</InputLabel>
//                   <Select
//                     labelId="admission-class-label"
//                     label="Admission Class"
//                     name="admission_class"
//                     value={formData.admission_class}
//                     onChange={handleInputChange}
//                   >
//                     {allClasses.map((cls) => (
//                       <MenuItem key={cls.id} value={cls.id}>{cls.name} ({cls.medium})</MenuItem>
//                     ))}
//                   </Select>
//                   {errors.admission_class && <Typography color="error" variant="body2">{errors.admission_class}</Typography>}
//                 </FormControl>
//               </Grid>
              
//               {/* Conditionally render divisions dropdown */}
//               {availableDivisions.length > 0 && (
//                   <Grid item xs={12} sm={6}>
//                     <FormControl fullWidth required error={!!errors.admission_division}>
//                       <InputLabel id="admission-division-label">Admission Division</InputLabel>
//                       <Select
//                         labelId="admission-division-label"
//                         label="Admission Division"
//                         name="admission_division"
//                         value={formData.admission_division}
//                         onChange={handleInputChange}
//                       >
//                         {availableDivisions.map((div, index) => (
//                           <MenuItem key={index} value={div}>{div}</MenuItem>
//                         ))}
//                       </Select>
//                       {errors.admission_division && <Typography color="error" variant="body2">{errors.admission_division}</Typography>}
//                     </FormControl>
//                   </Grid>
//               )}

//               {/* Photo upload field */}
//               <Grid item xs={12} sm={6}>
//                 <FormLabel component="legend" sx={{mb: 1}}>Student Photo</FormLabel>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   name="photo"
//                   onChange={handleInputChange}
//                 />
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>

//         <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
//           <Button variant="outlined" onClick={() => window.history.back()}>Cancel</Button>
//           <Button variant="outlined" onClick={handlePreview}>Preview</Button>
//           <Button type="submit" variant="contained" disabled={loading}>{loading ? 'Submitting...' : 'Submit Admission'}</Button>
//         </Box>
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default StudentAdmissionForm;




import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Grid, Box, Typography, Card, CardContent,
  FormControl, InputLabel, Select, MenuItem,
  RadioGroup, Radio, FormControlLabel,
  FormLabel, Checkbox, FormGroup,
  Divider
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

const StudentAdmissionForm = ({ 
  onSubmit, 
  onPreview, 
  onChange, 
  loading, 
  allClasses = [], 
  admissionNumber = '', 
  initialData = null 
}) => {
  const [formData, setFormData] = useState({
    photo: null,
    student_name: '',
    age: '',
    date_of_birth: null,
    birth_place: '',
    nationality: 'Indian',
    gender: '',
    blood_group: '',
    aadhar_no: '',
    state: '',
    religion: '',
    cast: '',
    fathers_name: '',
    fathers_occupation: '',
    mothers_name: '',
    mothers_occupation: '',
    current_address: '',
    current_pincode: '',
    permanent_address: '',
    permanent_pincode: '',
    mother_tongue: '',
    identification_mark: '',
    previous_school: '',
    previous_school_board: '',
    admission_class: '',
    admission_division: '',
    admission_number: '',
  });
  
  const [availableDivisions, setAvailableDivisions] = useState([]);
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [errors, setErrors] = useState({});

  // Initialize form with initial data or props
  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        date_of_birth: initialData.date_of_birth ? dayjs(initialData.date_of_birth) : null,
      });
      if (initialData.current_address === initialData.permanent_address) {
        setIsSameAddress(true);
      }
    }
  }, [initialData]);

  // Update available divisions when admission class changes
  useEffect(() => {
    if (formData.admission_class && allClasses.length > 0) {
      const selectedClass = allClasses.find(cls => cls.id === formData.admission_class);
      if (selectedClass && selectedClass.divisions) {
        setAvailableDivisions(selectedClass.divisions);
      } else {
        setAvailableDivisions([]);
      }
    }
  }, [formData.admission_class, allClasses]);

  // Calculate age automatically when date of birth changes
  useEffect(() => {
    if (formData.date_of_birth) {
      const today = dayjs();
      const birthDate = dayjs(formData.date_of_birth);
      const age = today.diff(birthDate, 'year');
      if (age !== parseInt(formData.age)) {
        setFormData(prev => ({ ...prev, age: age.toString() }));
      }
    }
  }, [formData.date_of_birth]);

  // Notify parent of form changes
  useEffect(() => {
    if (onChange) {
      onChange(formData);
    }
  }, [formData, onChange]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'photo' && files && files[0]) {
      setFormData(prev => ({ ...prev, photo: files[0] }));
    } else if (name === 'admission_class') {
      // Find selected class and update available divisions
      const selectedClass = allClasses.find(cls => cls.id === value);
      setAvailableDivisions(selectedClass ? selectedClass.divisions || [] : []);
      setFormData(prev => ({ ...prev, [name]: value, admission_division: '' }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error for this field
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

  const handleSameAddressChange = (e) => {
    const checked = e.target.checked;
    setIsSameAddress(checked);
    
    if (checked) {
      setFormData(prev => ({
        ...prev,
        permanent_address: prev.current_address,
        permanent_pincode: prev.current_pincode
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        permanent_address: '',
        permanent_pincode: ''
      }));
    }
  };

  // Update permanent address when current address changes and same address is checked
  useEffect(() => {
    if (isSameAddress) {
      setFormData(prev => ({
        ...prev,
        permanent_address: prev.current_address,
        permanent_pincode: prev.current_pincode
      }));
    }
  }, [formData.current_address, formData.current_pincode, isSameAddress]);

  const validateForm = () => {
    const newErrors = {};
    
    // Required field validations
    if (!formData.student_name?.trim()) newErrors.student_name = 'Student Name is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.date_of_birth) newErrors.date_of_birth = 'Date of Birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.aadhar_no?.trim()) newErrors.aadhar_no = 'Aadhar number is required';
    if (!formData.fathers_name?.trim()) newErrors.fathers_name = "Father's Name is required";
    if (!formData.current_address?.trim()) newErrors.current_address = 'Current Address is required';
    if (!formData.current_pincode?.trim()) newErrors.current_pincode = 'Current Pincode is required';
    
    if (!isSameAddress) {
      if (!formData.permanent_address?.trim()) newErrors.permanent_address = 'Permanent Address is required';
      if (!formData.permanent_pincode?.trim()) newErrors.permanent_pincode = 'Permanent Pincode is required';
    }
    
    if (!formData.admission_class) newErrors.admission_class = 'Admission Class is required';
    if (availableDivisions.length > 0 && !formData.admission_division) {
      newErrors.admission_division = 'Admission Division is required';
    }

    // Data format validations
    if (formData.age && (isNaN(formData.age) || parseInt(formData.age) < 1 || parseInt(formData.age) > 100)) {
      newErrors.age = 'Please enter a valid age between 1 and 100';
    }

    if (formData.aadhar_no && formData.aadhar_no.length !== 12) {
      newErrors.aadhar_no = 'Aadhar number must be 12 digits';
    }

    if (formData.current_pincode && (formData.current_pincode.length !== 6 || isNaN(formData.current_pincode))) {
      newErrors.current_pincode = 'Pincode must be 6 digits';
    }

    if (formData.permanent_pincode && (formData.permanent_pincode.length !== 6 || isNaN(formData.permanent_pincode))) {
      newErrors.permanent_pincode = 'Pincode must be 6 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      console.log('Form validation failed:', errors);
      return;
    }

    // Create the payload
    const payload = {
      student_name: formData.student_name.trim(),
      age: parseInt(formData.age, 10),
      date_of_birth: formData.date_of_birth ? formData.date_of_birth.format('YYYY-MM-DD') : null,
      birth_place: formData.birth_place.trim(),
      nationality: formData.nationality,
      gender: formData.gender,
      blood_group: formData.blood_group.trim(),
      aadhar_no: formData.aadhar_no.trim(),
      state: formData.state.trim(),
      religion: formData.religion.trim(),
      cast: formData.cast,
      fathers_name: formData.fathers_name.trim(),
      fathers_occupation: formData.fathers_occupation.trim(),
      mothers_name: formData.mothers_name.trim(),
      mothers_occupation: formData.mothers_occupation.trim(),
      current_address: formData.current_address.trim(),
      current_pincode: formData.current_pincode.trim(),
      permanent_address: formData.permanent_address.trim(),
      permanent_pincode: formData.permanent_pincode.trim(),
      mother_tongue: formData.mother_tongue.trim(),
      identification_mark: formData.identification_mark.trim(),
      previous_school: formData.previous_school.trim(),
      previous_school_board: formData.previous_school_board.trim(),
      admission_class_id: formData.admission_class,
      admission_division: formData.admission_division,
      admission_number: admissionNumber,
      // admission_year_start: dayjs().startOf('year').format('YYYY-MM-DD'),
      // admission_year_end: dayjs().endOf('year').format('YYYY-MM-DD'),
      photo: formData.photo, // Include photo file
    };

    console.log('Form submitted with payload:', payload);
    onSubmit(payload);
  };

  const handlePreview = () => {
    if (validateForm()) {
      const previewData = {
        ...formData,
        admission_number: admissionNumber,
        admission_year: dayjs().year(),
      };
      onPreview(previewData);
    }
  };

  const handleReset = () => {
    setFormData({
      photo: null,
      student_name: '',
      age: '',
      date_of_birth: null,
      birth_place: '',
      nationality: 'Indian',
      gender: '',
      blood_group: '',
      aadhar_no: '',
      state: '',
      religion: '',
      cast: '',
      fathers_name: '',
      fathers_occupation: '',
      mothers_name: '',
      mothers_occupation: '',
      current_address: '',
      current_pincode: '',
      permanent_address: '',
      permanent_pincode: '',
      mother_tongue: '',
      identification_mark: '',
      previous_school: '',
      previous_school_board: '',
      admission_class: '',
      admission_division: '',
    });
    setAvailableDivisions([]);
    setIsSameAddress(false);
    setErrors({});
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 1200, margin: 'auto', p: 2 }}>
        
        {/* Admission Details Card */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>📋 Admission Details</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Admission Number" 
                  name="admission_number" 
                  value={admissionNumber} 
                  disabled 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Academic Year: <strong>{dayjs().year()}-{dayjs().year() + 1}</strong>
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />

            {/* Student Information */}
            <Typography variant="h5" gutterBottom>👶 Student Information</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  required 
                  label="Student Name" 
                  name="student_name" 
                  value={formData.student_name} 
                  onChange={handleInputChange} 
                  error={!!errors.student_name} 
                  helperText={errors.student_name} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePicker 
                  label="Date of Birth" 
                  value={formData.date_of_birth} 
                  onChange={handleDateOfBirthChange} 
                  maxDate={dayjs().subtract(1, 'year')}
                  slotProps={{ 
                    textField: { 
                      fullWidth: true, 
                      required: true, 
                      error: !!errors.date_of_birth, 
                      helperText: errors.date_of_birth 
                    } 
                  }} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  required 
                  type="number" 
                  label="Age" 
                  name="age" 
                  value={formData.age} 
                  onChange={handleInputChange} 
                  error={!!errors.age} 
                  helperText={errors.age}
                  inputProps={{ min: 1, max: 100 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Birth Place" 
                  name="birth_place" 
                  value={formData.birth_place} 
                  onChange={handleInputChange} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="nationality-label">Nationality</InputLabel>
                  <Select 
                    labelId="nationality-label" 
                    label="Nationality" 
                    name="nationality" 
                    value={formData.nationality} 
                    onChange={handleInputChange}
                  >
                    <MenuItem value="Indian">Indian</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required error={!!errors.gender}>
                  <FormLabel id="gender-label">Gender</FormLabel>
                  <RadioGroup 
                    row 
                    aria-labelledby="gender-label" 
                    name="gender" 
                    value={formData.gender} 
                    onChange={handleInputChange}
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                  {errors.gender && <Typography color="error" variant="body2">{errors.gender}</Typography>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="blood-group-label">Blood Group</InputLabel>
                  <Select 
                    labelId="blood-group-label" 
                    label="Blood Group" 
                    name="blood_group" 
                    value={formData.blood_group} 
                    onChange={handleInputChange}
                  >
                    <MenuItem value="">Select Blood Group</MenuItem>
                    <MenuItem value="A+">A+</MenuItem>
                    <MenuItem value="A-">A-</MenuItem>
                    <MenuItem value="B+">B+</MenuItem>
                    <MenuItem value="B-">B-</MenuItem>
                    <MenuItem value="AB+">AB+</MenuItem>
                    <MenuItem value="AB-">AB-</MenuItem>
                    <MenuItem value="O+">O+</MenuItem>
                    <MenuItem value="O-">O-</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  required 
                  label="Aadhar No." 
                  name="aadhar_no" 
                  value={formData.aadhar_no} 
                  onChange={handleInputChange} 
                  error={!!errors.aadhar_no} 
                  helperText={errors.aadhar_no}
                  inputProps={{ maxLength: 12 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="State" 
                  name="state" 
                  value={formData.state} 
                  onChange={handleInputChange} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Religion" 
                  name="religion" 
                  value={formData.religion} 
                  onChange={handleInputChange} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="cast-label">Caste</InputLabel>
                  <Select 
                    labelId="cast-label" 
                    label="Caste" 
                    name="cast" 
                    value={formData.cast} 
                    onChange={handleInputChange}
                  >
                    <MenuItem value="">Select Caste</MenuItem>
                    <MenuItem value="general">General</MenuItem>
                    <MenuItem value="sc">SC</MenuItem>
                    <MenuItem value="st">ST</MenuItem>
                    <MenuItem value="obc">OBC</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Mother Tongue" 
                  name="mother_tongue" 
                  value={formData.mother_tongue} 
                  onChange={handleInputChange} 
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Family Information Card */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>👨‍👩‍👧 Family Information</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  required 
                  label="Father's Name" 
                  name="fathers_name" 
                  value={formData.fathers_name} 
                  onChange={handleInputChange} 
                  error={!!errors.fathers_name} 
                  helperText={errors.fathers_name} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Father's Occupation" 
                  name="fathers_occupation" 
                  value={formData.fathers_occupation} 
                  onChange={handleInputChange} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Mother's Name" 
                  name="mothers_name" 
                  value={formData.mothers_name} 
                  onChange={handleInputChange} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Mother's Occupation" 
                  name="mothers_occupation" 
                  value={formData.mothers_occupation} 
                  onChange={handleInputChange} 
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Address Information Card */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>🏠 Address Information</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  required 
                  multiline 
                  rows={3} 
                  label="Current Address" 
                  name="current_address" 
                  value={formData.current_address} 
                  onChange={handleInputChange} 
                  error={!!errors.current_address} 
                  helperText={errors.current_address} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  required 
                  label="Current Pincode" 
                  name="current_pincode" 
                  value={formData.current_pincode} 
                  onChange={handleInputChange} 
                  error={!!errors.current_pincode} 
                  helperText={errors.current_pincode}
                  inputProps={{ maxLength: 6 }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox 
                      checked={isSameAddress} 
                      onChange={handleSameAddressChange} 
                    />
                  }
                  label="Permanent address is the same as current address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  required={!isSameAddress} 
                  multiline 
                  rows={3} 
                  label="Permanent Address" 
                  name="permanent_address" 
                  value={formData.permanent_address} 
                  onChange={handleInputChange} 
                  disabled={isSameAddress} 
                  error={!!errors.permanent_address} 
                  helperText={errors.permanent_address} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  required={!isSameAddress} 
                  label="Permanent Pincode" 
                  name="permanent_pincode" 
                  value={formData.permanent_pincode} 
                  onChange={handleInputChange} 
                  disabled={isSameAddress} 
                  error={!!errors.permanent_pincode} 
                  helperText={errors.permanent_pincode}
                  inputProps={{ maxLength: 6 }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        
        {/* Previous School & Other Details Card */}
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>🏫 Previous School & Other Details</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField 
                  fullWidth 
                  label="Identification Mark" 
                  name="identification_mark" 
                  value={formData.identification_mark} 
                  onChange={handleInputChange} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Previous School" 
                  name="previous_school" 
                  value={formData.previous_school} 
                  onChange={handleInputChange} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Previous School Board" 
                  name="previous_school_board" 
                  value={formData.previous_school_board} 
                  onChange={handleInputChange} 
                />
              </Grid>
              
              {/* Class and Division Selection */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required error={!!errors.admission_class}>
                  <InputLabel id="admission-class-label">Admission Class</InputLabel>
                  <Select
                    labelId="admission-class-label"
                    label="Admission Class"
                    name="admission_class"
                    value={formData.admission_class}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="">Select Class</MenuItem>
                    {allClasses.map((cls) => (
                      <MenuItem key={cls.id} value={cls.id}>
                        {cls.name} ({cls.medium})
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.admission_class && (
                    <Typography color="error" variant="body2" sx={{ mt: 0.5 }}>
                      {errors.admission_class}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              
              {/* Divisions dropdown - shown only if divisions are available */}
              {availableDivisions.length > 0 && (
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth required error={!!errors.admission_division}>
                    <InputLabel id="admission-division-label">Admission Division</InputLabel>
                    <Select
                      labelId="admission-division-label"
                      label="Admission Division"
                      name="admission_division"
                      value={formData.admission_division}
                      onChange={handleInputChange}
                    >
                      <MenuItem value="">Select Division</MenuItem>
                      {availableDivisions.map((div, index) => (
                        <MenuItem key={index} value={div}>{div}</MenuItem>
                      ))}
                    </Select>
                    {errors.admission_division && (
                      <Typography color="error" variant="body2" sx={{ mt: 0.5 }}>
                        {errors.admission_division}
                      </Typography>
                    )}
                  </FormControl>
                </Grid>
              )}

              {/* Photo upload field */}
              <Grid item xs={12} sm={6}>
                <Box>
                  <FormLabel component="legend" sx={{ mb: 1, display: 'block' }}>
                    Student Photo
                  </FormLabel>
                  <input
                    type="file"
                    accept="image/*"
                    name="photo"
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '8px',
                      border: '1px solid #ccc',
                      borderRadius: '4px'
                    }}
                  />
                  {formData.photo && (
                    <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
                      Selected: {formData.photo.name}
                    </Typography>
                  )}
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
          <Button 
            variant="outlined" 
            onClick={handleReset}
            disabled={loading}
          >
            Reset Form
          </Button>
          <Button 
            variant="outlined" 
            onClick={handlePreview}
            disabled={loading}
          >
            Preview
          </Button>
          <Button 
            type="submit" 
            variant="contained" 
            disabled={loading}
            sx={{ minWidth: '150px' }}
          >
            {loading ? 'Submitting...' : 'Submit Admission'}
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default StudentAdmissionForm;