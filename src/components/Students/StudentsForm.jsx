import React, { useState, useEffect } from 'react';
import {Avatar } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge'; // A great icon for personal info

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
import './StudentsForm.css'

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
      {/* <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 1200, margin: 'auto', p: 2, backgroundColor:'#00000'}}> */}

        <Box 
  component="form" 
  onSubmit={handleSubmit} 
  sx={{ 
    maxWidth: 1200, 
    margin: 'auto', 
    p: { xs: 1, md: 1 }, // Added responsive padding from your original code
    // backgroundColor: '#e4eef0ff' // Soft and professional off-white
  }}
>
        {/* Admission Details Card */}
        <Card sx={{ mb: 3 ,
          backgroundColor: '#e1ebecff'
        }}>
          <CardContent>
    <Grid 
      container 
      spacing={3} 
      alignItems="flex-start" 
      justifyContent="space-between"
    >
      {/* Left Side - Admission Details */}
      <Grid item xs={12} sm={8}>
        <Typography variant="h5" gutterBottom>📋 Admission Details</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField 
              fullWidth 
              label="Admission Number" 
              name="admission_number" 
              value={admissionNumber} 
              disabled 
              className="stylish-input"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Academic Year: <strong>{dayjs().year()}-{dayjs().year() + 1}</strong>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Right Side - Photo Upload */}
      <Grid 
        item 
        xs={12} 
        sm="auto" 
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar
          src={formData.photo ? URL.createObjectURL(formData.photo) : ""}
          alt="Student Photo"
          sx={{ width: 100, height: 100, mb: 1, border: "2px solid #fff" }}
        />
        <Button
          variant="outlined"
          component="label"
          size="small"
        >
          Upload
          <input
            type="file"
            accept="image/*"
            name="photo"
            hidden
            onChange={handleInputChange}
          />
        </Button>
      </Grid>
    </Grid>

    <Divider sx={{ my: 2, bgcolor: "rgba(255,255,255,0.2)" }} />

            <Typography variant="h5" gutterBottom>👶 Student Information</Typography>
            <Grid container spacing={2} xs={12} sm={6} sx={{ flexGrow: 1 }}>
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
                  className="stylish-input"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
                  className="stylish-input"
                />
              </Grid>
              </Grid>
              <Grid container spacing={2} xs={12} sm={6} sx={{ flexGrow: 1,my:3 }}>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Birth Place" 
                  name="birth_place" 
                  value={formData.birth_place} 
                  onChange={handleInputChange} 
                  className="stylish-input"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth className="stylish-input">
                  <InputLabel id="nationality-label" >Nationality</InputLabel>
                  <Select 
                    labelId="nationality-label" 
                    label="Nationality" 
                    name="nationality" 
                    value={formData.nationality} 
                    onChange={handleInputChange}
                    className="stylish-input"
                  >
                    <MenuItem value="Indian">Indian</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

                            {/* <Grid item xs={12} sm={6}>
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
              </Grid> */}


<Grid item xs={12} sm={6}>
  <FormControl fullWidth required error={!!errors.gender} className="stylish-input">
    <InputLabel id="gender-label">Gender</InputLabel>
    <Select
      labelId="gender-label"
      label="Gender"
      name="gender"
      value={formData.gender}
      onChange={handleInputChange}
    >
      <MenuItem value=""><em>Select Gender</em></MenuItem>
      <MenuItem value="male">Male</MenuItem>
      <MenuItem value="female">Female</MenuItem>
      <MenuItem value="other">Other</MenuItem>
    </Select>
    {/* FormHelperText is the standard way to show errors/help text in a FormControl */}
    {errors.gender && <FormHelperText>{errors.gender}</FormHelperText>}
  </FormControl>
</Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth className="stylish-input" >
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
              </Grid>



              <Grid container spacing={2} xs={12} sm={6} sx={{ flexGrow: 1,my:3 }}>
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
                  className="stylish-input"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="State" 
                  name="state" 
                  value={formData.state} 
                  onChange={handleInputChange} 
                  className="stylish-input"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Religion" 
                  name="religion" 
                  value={formData.religion} 
                  onChange={handleInputChange} 
                  className="stylish-input"
                />
              </Grid>

                            </Grid>
              <Grid container spacing={2} xs={12} sm={6} sx={{ flexGrow: 1,my:3 }}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth className="stylish-input">
                  <InputLabel id="cast-label">Caste</InputLabel>
                  <Select 
                    labelId="cast-label" 
                    label="Caste" 
                    name="cast" 
                    value={formData.cast} 
                    onChange={handleInputChange}
                    className="stylish-input"
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
                  className="stylish-input"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Family Information Card */}
        <Card sx={{ mb: 3 ,backgroundColor: '#e1ebecff'}}>
          <CardContent>
            <Typography variant="h5" gutterBottom>👨‍👩‍👧 Family Information</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} lg={6}>
                <TextField 
                  fullWidth 
                  required 
                  label="Father's Name" 
                  name="fathers_name" 
                  value={formData.fathers_name} 
                  onChange={handleInputChange} 
                  error={!!errors.fathers_name} 
                  helperText={errors.fathers_name} 
                  className="stylish-input"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Father's Occupation" 
                  name="fathers_occupation" 
                  value={formData.fathers_occupation} 
                  onChange={handleInputChange} 
                  className="stylish-input"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Mother's Name" 
                  name="mothers_name" 
                  value={formData.mothers_name} 
                  onChange={handleInputChange} 
                  className="stylish-input"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Mother's Occupation" 
                  name="mothers_occupation" 
                  value={formData.mothers_occupation} 
                  onChange={handleInputChange} 
                  className="stylish-input"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Address Information Card */}
        <Card sx={{ mb: 3 ,backgroundColor: '#e1ebecff' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>🏠 Address Information</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={9}>
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
                   className="stylish-textarea"
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
                  className="stylish-input"
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
                                          </Grid>
              <Grid container spacing={2} xs={12} sm={6} sx={{ flexGrow: 1,my:3 }}>
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
                  className="stylish-textarea"
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
                  className="stylish-input"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        
        {/* Previous School & Other Details Card */}
        <Card sx={{ mb: 3 ,backgroundColor: '#e1ebecff'}}>
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
                  className="stylish-input"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Previous School" 
                  name="previous_school" 
                  value={formData.previous_school} 
                  onChange={handleInputChange} 
                  className="stylish-input"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                  fullWidth 
                  label="Previous School Board" 
                  name="previous_school_board" 
                  value={formData.previous_school_board} 
                  onChange={handleInputChange} 
                  className="stylish-input"
                />
              </Grid>
              
              {/* Class and Division Selection */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required error={!!errors.admission_class} className="stylish-input">
                  <InputLabel className="stylish-input" id="admission-class-label">Admission Class</InputLabel>
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
                  <FormControl fullWidth required error={!!errors.admission_division} className="stylish-input">
                    <InputLabel id="admission-division-label" >Admission Division</InputLabel>
                    <Select
                      labelId="admission-division-label"
                      label="Admission Division"
                      name="admission_division"
                      value={formData.admission_division}
                      onChange={handleInputChange}
                      className="stylish-input"
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




















// import React, { useState, useEffect } from 'react';
// import {
//   TextField, Button, Grid, Box, Typography, Card, CardContent,
//   FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel,
//   Divider, Avatar, Tooltip, IconButton
// } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs from 'dayjs';
// // import * as XLSX from 'xlsx'; // For reading Excel files

// // --- Import Icons ---
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import DownloadIcon from '@mui/icons-material/Download';

// import './StudentsForm.css'; // Your custom CSS file

// const StudentAdmissionForm = ({
//   onSubmit,
//   onPreview,
//   onChange,
//   onBulkSubmit, // Prop to handle the array of students from Excel
//   loading,
//   allClasses = [],
//   admissionNumber = '',
//   initialData = null
// }) => {
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
//     admission_division: '',
//     admission_number: '',
//   });

//   const [availableDivisions, setAvailableDivisions] = useState([]);
//   const [isSameAddress, setIsSameAddress] = useState(false);
//   const [errors, setErrors] = useState({});

//   // Effect to populate form with initial data for editing
//   useEffect(() => {
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

//   // Effect to update available divisions when class changes
//   useEffect(() => {
//     if (formData.admission_class && allClasses.length > 0) {
//       const selectedClass = allClasses.find(cls => cls.id === formData.admission_class);
//       setAvailableDivisions(selectedClass?.divisions || []);
//     }
//   }, [formData.admission_class, allClasses]);

//   // Effect to auto-calculate age from date of birth
//   useEffect(() => {
//     if (formData.date_of_birth) {
//       const age = dayjs().diff(dayjs(formData.date_of_birth), 'year');
//       if (age !== parseInt(formData.age)) {
//         setFormData(prev => ({ ...prev, age: age.toString() }));
//       }
//     }
//   }, [formData.date_of_birth]);

//   // Notify parent of form data changes
//   useEffect(() => {
//     onChange?.(formData);
//   }, [formData, onChange]);

//   // --- Handlers for Form Inputs ---
//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'photo' && files?.[0]) {
//       setFormData(prev => ({ ...prev, photo: files[0] }));
//     } else if (name === 'admission_class') {
//       const selectedClass = allClasses.find(cls => cls.id === value);
//       setAvailableDivisions(selectedClass?.divisions || []);
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
//         permanent_pincode: prev.current_pincode,
//       }));
//     } else {
//       setFormData(prev => ({ ...prev, permanent_address: '', permanent_pincode: '' }));
//     }
//   };

//   useEffect(() => {
//     if (isSameAddress) {
//       setFormData(prev => ({
//         ...prev,
//         permanent_address: prev.current_address,
//         permanent_pincode: prev.current_pincode,
//       }));
//     }
//   }, [formData.current_address, formData.current_pincode, isSameAddress]);

//   const validateForm = () => { /* Your validation logic here */ return true; };
//   const handleSubmit = (e) => { e.preventDefault(); /* Your submit logic here */ };
//   const handlePreview = () => { /* Your preview logic here */ };
//   const handleReset = () => { /* Your reset logic here */ };
  
//   // --- Bulk Upload Functionality ---

//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       try {
//         const data = new Uint8Array(event.target.result);
//         const workbook = XLSX.read(data, { type: 'array', cellDates: true });
//         const sheetName = workbook.SheetNames[0];
//         const worksheet = workbook.Sheets[sheetName];
//         const json = XLSX.utils.sheet_to_json(worksheet);

//         const formattedStudents = json.map(row => {
//             const classInfo = allClasses.find(cls => 
//                 cls.name === row["Admission Class Name"] && 
//                 cls.medium === row["Admission Class Medium"]
//             );
//             return {
//                 student_name: row["Student Name"],
//                 date_of_birth: row["Date of Birth"] ? dayjs(row["Date of Birth"]).format('YYYY-MM-DD') : null,
//                 gender: row["Gender"],
//                 aadhar_no: String(row["Aadhar No"]),
//                 fathers_name: row["Father's Name"],
//                 current_address: row["Current Address"],
//                 current_pincode: String(row["Current Pincode"]),
//                 admission_class_id: classInfo ? classInfo.id : null,
//                 admission_division: row["Admission Division"],
//                 blood_group: row["Blood Group"] || '',
//                 religion: row["Religion"] || '',
//             };
//         });

//         const invalidRows = formattedStudents.filter(s => !s.admission_class_id);
//         if (invalidRows.length > 0) {
//             alert(`Error: Could not find a matching class for ${invalidRows.length} student(s). Please check the "Admission Class Name" and "Admission Class Medium" columns in your Excel file.`);
//             return;
//         }

//         onBulkSubmit?.(formattedStudents);

//       } catch (error) {
//         console.error("Error processing Excel file:", error);
//         alert("There was an error processing the file. Please ensure it's a valid Excel file and matches the template format.");
//       }
//     };
//     reader.readAsArrayBuffer(file);
//     e.target.value = null; // Reset file input
//   };
  
//   const handleDownloadTemplate = () => {
//     const templateData = [{
//       "Student Name": "Example Kumar", "Date of Birth": "2010-05-15", "Gender": "Male",
//       "Aadhar No": "123456789012", "Father's Name": "Ramesh Kumar", "Current Address": "123, Main Street",
//       "Current Pincode": "123456", "Admission Class Name": "10th", "Admission Class Medium": "English",
//       "Admission Division": "A", "Blood Group": "O+", "Religion": "Hindu"
//     }];
//     const worksheet = XLSX.utils.json_to_sheet(templateData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
//     XLSX.writeFile(workbook, "Student_Admission_Template.xlsx");
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 1200, margin: 'auto', p: 1 }}>
        
//         {/* All your <Card> components for student details go here... */}
//         {/* For brevity, I am not repeating them, but you should keep them as they were. */}

//         {/* --- Action Buttons Section --- */}
//         <Card sx={{ mt: 3, backgroundColor: '#e1ebecff' }}>
//           <CardContent>
//             <Typography variant="h6" gutterBottom>Actions</Typography>
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
//               {/* Single Admission Buttons */}
//               <Button variant="outlined" onClick={handleReset} disabled={loading}>Reset Form</Button>
//               <Button variant="outlined" onClick={handlePreview} disabled={loading}>Preview</Button>
//               <Button type="submit" variant="contained" disabled={loading} sx={{ minWidth: '150px' }}>
//                 {loading ? 'Submitting...' : 'Submit Admission'}
//               </Button>
              
//               <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

//               {/* Bulk Upload Buttons */}
//               <Button
//                 variant="contained"
//                 component="label"
//                 color="secondary"
//                 startIcon={<CloudUploadIcon />}
//                 disabled={loading}
//               >
//                 Bulk Upload
//                 <input type="file" hidden accept=".xlsx, .xls" onChange={handleFileUpload} />
//               </Button>
//               <Tooltip title="Download Excel template for bulk upload">
//                 <IconButton onClick={handleDownloadTemplate} color="primary">
//                   <DownloadIcon />
//                 </IconButton>
//               </Tooltip>
//             </Box>
//           </CardContent>
//         </Card>
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default StudentAdmissionForm;