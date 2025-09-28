// import React, { useState, useEffect } from 'react';
// import {
//   TextField, Button, Grid, Box, Typography, Card, CardContent, Chip, Checkbox,
//   FormControlLabel, InputAdornment, IconButton, MenuItem, Select, InputLabel, FormControl
// } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs from 'dayjs';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import ClearIcon from '@mui/icons-material/Clear';
// import SectionHeader from '../common/SectionHeader';

// import BadgeIcon from '@mui/icons-material/Badge';

// import '../Students/StudentsForm.css'

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
//     Subject_to_Teach:'',
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
//     if (!formData.Subject_to_Teach) newErrors.Subject_to_Teach = 'Subject to Teach is required';
//     if (!formData.languages || formData.languages.length === 0) newErrors.languages = 'At least one language is required';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };


// const handleSubmit = (e) => {
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
//         Subject_to_Teach: formData.Subject_to_Teach,
//         languages: formData.languages,
//         class_type: formData.class_type,
//         description: formData.description,
//       };

//       console.log("payload from teacherForm",payload)
      
//       onSubmit(payload); // Corrected: pass the clean 'payload' object
//     }
//   };

// // ... (rest of the component code)


//   const handlePreview = () => {
//     if (validateForm()) {
//       onPreview(formData);
//     }
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box component="form" onSubmit={handleSubmit} className="stylish-input" sx={{ maxWidth: 1000, margin: 'auto', p: 2 }}>
//         <Card sx={{ mb: 3 }}>
//           <CardContent>
//             {/* <Typography variant="h5" gutterBottom>👨‍🏫 Teacher Information</Typography/> */}
//     <SectionHeader 
//       icon={<BadgeIcon />} 
//       title="Personal Information"
//       subtitle="Enter the teacher's core personal details and upload a photo."
//     />
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={6}>
//                 <TextField fullWidth required label="Name" name="name"  value={formData.name} onChange={handleInputChange} error={!!errors.name} helperText={errors.name} />
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
//                 <TextField fullWidth required label="Subject to Teach" name="Subject_to_Teach" value={formData.Subject_to_Teach} onChange={handleInputChange} error={!!errors.Subject_to_Teach} helperText={errors.Subject_to_Teach} />
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
  FormControlLabel, MenuItem, Select, InputLabel, FormControl, Avatar
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SectionHeader from '../common/SectionHeader'; // Assuming this component exists
import BadgeIcon from '@mui/icons-material/Badge';
import WorkIcon from '@mui/icons-material/Work';
import TranslateIcon from '@mui/icons-material/Translate';

// Assuming your CSS is in a path like this
import '../Students/StudentsForm.css';

const TeacherForm = ({ onSubmit, onPreview, onChange, loading, initialData = null }) => {
  const [formData, setFormData] = useState({
    photo: null,
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
    Subject_to_Teach: '',
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
    const { name, value, files } = e.target;
    if (name === 'photo' && files && files[0]) {
      setFormData(prev => ({ ...prev, photo: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
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
    if (!formData.Subject_to_Teach) newErrors.Subject_to_Teach = 'Subject to Teach is required';
    if (!formData.languages || formData.languages.length === 0) newErrors.languages = 'At least one language is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const payload = {
        full_name: formData.name,
        fathers_name: formData.fathers_name,
        address: formData.address,
        pin_code: formData.pin_code,
        age: parseInt(formData.age, 10),
        gender: formData.gender,
        aadhar_no: formData.aadhar_no,
        ph_number: formData.ph_number,
        date_of_birth: formData.date_of_birth.format('YYYY-MM-DD'),
        highest_education: formData.highest_education,
        Subject_to_Teach: formData.Subject_to_Teach,
        languages: formData.languages,
        class_type: formData.class_type,
        description: formData.description,
        photo: formData.photo
      };
      onSubmit(payload);
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

        {/* Personal Information Card */}
        <Card sx={{ mb: 3, backgroundColor: '#e1ebecff' }}>
          <CardContent>
            <SectionHeader
              icon={<BadgeIcon />}
              title="Personal Information"
              subtitle="Enter the teacher's core personal details."
            />
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <TextField fullWidth required label="Name" name="name" value={formData.name} onChange={handleInputChange} error={!!errors.name} helperText={errors.name} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth required label="Father's Name" name="fathers_name" value={formData.fathers_name} onChange={handleInputChange} error={!!errors.fathers_name} helperText={errors.fathers_name} />
              </Grid>
              <Grid item xs={12} md={4}>
                {/* <DatePicker
                  label="Date of Birth"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleDateOfBirthChange}
                  slotProps={{ textField: { className: "stylish-input stylish-date-input",fullWidth: true, required: true, error: !!errors.date_of_birth, helperText: errors.date_of_birth } }}
                /> */}
                                <DatePicker 
                                  label="Date of Birth" 
                                  value={formData.date_of_birth} 
                                  onChange={handleDateOfBirthChange} 
                                  maxDate={dayjs().subtract(1, 'year')}
                                  format="DD/MM/YYYY"
                                  // className="stylish-input stylish-date-input"
                                  sx={{ width: 372,background:"white",borderRadius:2 }}
                                  slotProps={{ 
                                    textField: { 
                                      // fullWidth: true, 
                                      required: true, 
                                      error: !!errors.date_of_birth, 
                                      helperText: errors.date_of_birth,
                                      variant: "outlined",
                                      size: "small",
                                      placeholder: "Select date",
                                      className: "stylish-input stylish-date-input",
                                      backgroundColor:"white"
                                    
                                    }
                                  }}
                                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth required type="number" label="Age" name="age" value={formData.age} onChange={handleInputChange} error={!!errors.age} helperText={errors.age} />
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl fullWidth required error={!!errors.gender}>
                  <InputLabel>Gender</InputLabel>
                  <Select label="Gender" name="gender" value={formData.gender} onChange={handleInputChange}>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                  {errors.gender && <Typography color="error" variant="caption" sx={{ mt: 0.5 }}>{errors.gender}</Typography>}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth required label="Aadhar No." name="aadhar_no" value={formData.aadhar_no} onChange={handleInputChange} error={!!errors.aadhar_no} helperText={errors.aadhar_no} inputProps={{ maxLength: 12 }} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Contact & Professional Details Card */}
        <Card sx={{ mb: 3, backgroundColor: '#e1ebecff' }}>
          <CardContent>
            <SectionHeader
              icon={<WorkIcon />}
              title="Contact & Professional Details"
              subtitle="Provide contact and qualification information."
            />
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <TextField fullWidth required label="Phone Number" name="ph_number" value={formData.ph_number} onChange={handleInputChange} error={!!errors.ph_number} helperText={errors.ph_number} />
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField fullWidth required label="Address" name="address" value={formData.address} onChange={handleInputChange} error={!!errors.address} helperText={errors.address} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth required label="Pin Code" name="pin_code" value={formData.pin_code} onChange={handleInputChange} error={!!errors.pin_code} helperText={errors.pin_code} inputProps={{ maxLength: 6 }} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth required label="Highest Education" name="highest_education" value={formData.highest_education} onChange={handleInputChange} error={!!errors.highest_education} helperText={errors.highest_education} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth required label="Subject to Teach" name="Subject_to_Teach" value={formData.Subject_to_Teach} onChange={handleInputChange} error={!!errors.Subject_to_Teach} helperText={errors.Subject_to_Teach} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Languages Card - Fully Implemented */}
        <Card sx={{ mb: 3, backgroundColor: '#e1ebecff' }}>
          <CardContent>
            <SectionHeader
              icon={<TranslateIcon />}
              title="Languages"
              subtitle="Specify the languages the teacher is proficient in."
            />
            <FormControlLabel 
              control={<Checkbox checked={useCustomLanguages} onChange={(e) => setUseCustomLanguages(e.target.checked)} />} 
              label="Enter Custom Languages" 
              sx={{ mb: 2 }}
            />
            {!useCustomLanguages ? (
              <FormControl fullWidth required error={!!errors.languages}>
                <InputLabel>Select Languages</InputLabel>
                <Select
                  label="Select Languages"
                  name="languages"
                  multiple
                  value={formData.languages}
                  onChange={handleInputChange}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {languageOptions.map(lang => (<MenuItem key={lang} value={lang}>{lang}</MenuItem>))}
                </Select>
                {errors.languages && <Typography color="error" variant="caption" sx={{ mt: 0.5 }}>{errors.languages}</Typography>}
              </FormControl>
            ) : (
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <TextField fullWidth label="Enter custom language" name="customLanguage" value={formData.customLanguage} onChange={handleInputChange} onKeyPress={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddCustomLanguage(); } }} />
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={handleAddCustomLanguage} startIcon={<AddCircleIcon />}>Add</Button>
                </Grid>
              </Grid>
            )}
            {formData.languages.length > 0 && (
              <Box mt={2}>
                <Typography variant="subtitle2" gutterBottom>Selected:</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {formData.languages.map(lang => (
                    <Chip key={lang} label={lang} onDelete={() => handleRemoveLanguage(lang)} color="primary" variant="outlined" />
                  ))}
                </Box>
              </Box>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
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