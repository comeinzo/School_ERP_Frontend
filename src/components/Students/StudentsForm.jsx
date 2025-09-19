import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Grid, Box, Typography, Card, CardContent,
  FormControl, InputLabel, Select, MenuItem,
  RadioGroup, Radio, FormControlLabel,
  FormLabel, Checkbox, FormGroup
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

const StudentAdmissionForm = ({ onSubmit, onPreview, onChange, loading, initialData = null }) => {
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
    admission_class: ''
  });

  const [errors, setErrors] = useState({});
  const [isSameAddress, setIsSameAddress] = useState(false);

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
  
  const handleSameAddressChange = (e) => {
    const checked = e.target.checked;
    setIsSameAddress(checked);
    if (checked) {
      setFormData(prev => ({
        ...prev,
        permanent_address: prev.current_address,
        permanent_pincode: prev.current_pincode
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.student_name) newErrors.student_name = 'Student Name is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.date_of_birth) newErrors.date_of_birth = 'Date of Birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.aadhar_no) newErrors.aadhar_no = 'Aadhar number is required';
    if (!formData.fathers_name) newErrors.fathers_name = "Father's Name is required";
    if (!formData.current_address) newErrors.current_address = 'Current Address is required';
    if (!formData.current_pincode) newErrors.current_pincode = 'Current Pincode is required';
    if (!isSameAddress && !formData.permanent_address) newErrors.permanent_address = 'Permanent Address is required';
    if (!isSameAddress && !formData.permanent_pincode) newErrors.permanent_pincode = 'Permanent Pincode is required';
    if (!formData.admission_class) newErrors.admission_class = 'Admission Class is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const payload = {
        student_name: formData.student_name,
        age: parseInt(formData.age, 10),
        date_of_birth: formData.date_of_birth ? formData.date_of_birth.format('YYYY-MM-DD') : null,
        birth_place: formData.birth_place,
        nationality: formData.nationality,
        gender: formData.gender,
        blood_group: formData.blood_group,
        aadhar_no: formData.aadhar_no,
        state: formData.state,
        religion: formData.religion,
        cast: formData.cast,
        fathers_name: formData.fathers_name,
        fathers_occupation: formData.fathers_occupation,
        mothers_name: formData.mothers_name,
        mothers_occupation: formData.mothers_occupation,
        current_address: formData.current_address,
        current_pincode: formData.current_pincode,
        permanent_address: formData.permanent_address,
        permanent_pincode: formData.permanent_pincode,
        mother_tongue: formData.mother_tongue,
        identification_mark: formData.identification_mark,
        previous_school: formData.previous_school,
        previous_school_board: formData.previous_school_board,
        admission_class: formData.admission_class,
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
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 1200, margin: 'auto', p: 2 }}>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>👶 Student Information</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required label="Student Name" name="student_name" value={formData.student_name} onChange={handleInputChange} error={!!errors.student_name} helperText={errors.student_name} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePicker label="Date of Birth" value={formData.date_of_birth} onChange={handleDateOfBirthChange} slotProps={{ textField: { fullWidth: true, required: true, error: !!errors.date_of_birth, helperText: errors.date_of_birth } }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required type="number" label="Age" name="age" value={formData.age} onChange={handleInputChange} error={!!errors.age} helperText={errors.age} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Birth Place" name="birth_place" value={formData.birth_place} onChange={handleInputChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="nationality-label">Nationality</InputLabel>
                  <Select labelId="nationality-label" label="Nationality" name="nationality" value={formData.nationality} onChange={handleInputChange}>
                    <MenuItem value="Indian">Indian</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required error={!!errors.gender}>
                  <FormLabel id="gender-label">Gender</FormLabel>
                  <RadioGroup row aria-labelledby="gender-label" name="gender" value={formData.gender} onChange={handleInputChange}>
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                  {errors.gender && <Typography color="error" variant="body2">{errors.gender}</Typography>}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Blood Group" name="blood_group" value={formData.blood_group} onChange={handleInputChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required label="Aadhar No." name="aadhar_no" value={formData.aadhar_no} onChange={handleInputChange} error={!!errors.aadhar_no} helperText={errors.aadhar_no} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="State" name="state" value={formData.state} onChange={handleInputChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Religion" name="religion" value={formData.religion} onChange={handleInputChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="cast-label">Cast</InputLabel>
                  <Select labelId="cast-label" label="Cast" name="cast" value={formData.cast} onChange={handleInputChange}>
                    <MenuItem value="general">General</MenuItem>
                    <MenuItem value="sc">SC</MenuItem>
                    <MenuItem value="st">ST</MenuItem>
                    <MenuItem value="obc">OBC</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Mother Tongue" name="mother_tongue" value={formData.mother_tongue} onChange={handleInputChange} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>👨‍👩‍👧 Family Information</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required label="Father's Name" name="fathers_name" value={formData.fathers_name} onChange={handleInputChange} error={!!errors.fathers_name} helperText={errors.fathers_name} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Father's Occupation" name="fathers_occupation" value={formData.fathers_occupation} onChange={handleInputChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Mother's Name" name="mothers_name" value={formData.mothers_name} onChange={handleInputChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Mother's Occupation" name="mothers_occupation" value={formData.mothers_occupation} onChange={handleInputChange} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>🏠 Address Information</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required multiline rows={3} label="Current Address" name="current_address" value={formData.current_address} onChange={handleInputChange} error={!!errors.current_address} helperText={errors.current_address} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required label="Current Pincode" name="current_pincode" value={formData.current_pincode} onChange={handleInputChange} error={!!errors.current_pincode} helperText={errors.current_pincode} />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox checked={isSameAddress} onChange={handleSameAddressChange} />}
                  label="Permanent address is the same as current address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required={!isSameAddress} multiline rows={3} label="Permanent Address" name="permanent_address" value={formData.permanent_address} onChange={handleInputChange} disabled={isSameAddress} error={!!errors.permanent_address} helperText={errors.permanent_address} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required={!isSameAddress} label="Permanent Pincode" name="permanent_pincode" value={formData.permanent_pincode} onChange={handleInputChange} disabled={isSameAddress} error={!!errors.permanent_pincode} helperText={errors.permanent_pincode} />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>🏫 Previous School & Other Details</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField fullWidth label="Identification Mark" name="identification_mark" value={formData.identification_mark} onChange={handleInputChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Previous School" name="previous_school" value={formData.previous_school} onChange={handleInputChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Previous School Board" name="previous_school_board" value={formData.previous_school_board} onChange={handleInputChange} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth required label="Admission Class" name="admission_class" value={formData.admission_class} onChange={handleInputChange} error={!!errors.admission_class} helperText={errors.admission_class} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormLabel component="legend" sx={{mb: 1}}>Student Photo</FormLabel>
                <input
                  type="file"
                  accept="image/*"
                  name="photo"
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
          <Button variant="outlined" onClick={() => window.history.back()}>Cancel</Button>
          <Button variant="outlined" onClick={handlePreview}>Preview</Button>
          <Button type="submit" variant="contained" disabled={loading}>{loading ? 'Submitting...' : 'Submit Admission'}</Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default StudentAdmissionForm;