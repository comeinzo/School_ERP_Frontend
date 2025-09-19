import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Grid, Box, Typography, Card, CardContent,
  IconButton, Divider, FormControl, InputLabel, Select, MenuItem,
  FormControlLabel, Checkbox
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

const DynamicFeeForm = ({ onSubmit, onUpdate, onDelete, loading = false, initialData = null }) => {
  const [fees, setFees] = useState([{ name: '', amount: 0, is_quarterly: false }]);
  const [total, setTotal] = useState(0);
  const [quarterlyTotal, setQuarterlyTotal] = useState(0);
  const [paymentFrequency, setPaymentFrequency] = useState(4);
  const [mode, setMode] = useState('create'); // 'create' or 'update'
  
  const [academicYear, setAcademicYear] = useState({
    start: null,
    end: null
  });

  useEffect(() => {
    // If there's initial data, load it and switch to update mode
    if (initialData && initialData.id) {
      setMode('update');
      if (initialData.fee_items && initialData.fee_items.length > 0) {
        setFees(initialData.fee_items);
      }
      if (initialData.academic_year_start) {
          setAcademicYear(prev => ({ ...prev, start: dayjs(initialData.academic_year_start) }));
      }
      if (initialData.academic_year_end) {
          setAcademicYear(prev => ({ ...prev, end: dayjs(initialData.academic_year_end) }));
      }
      if (initialData.payment_frequency) {
        setPaymentFrequency(initialData.payment_frequency);
      }
      if (initialData.quarterly_fee) {
          setQuarterlyTotal(initialData.quarterly_fee);
      }
    } else {
      setMode('create');
      setFees([{ name: '', amount: 0, is_quarterly: false }]);
      setAcademicYear({ start: null, end: null });
    }
  }, [initialData]);

  useEffect(() => {
    const totalAmount = fees.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
    setTotal(totalAmount);
    
    const quarterlyFeesSum = fees.reduce((sum, item) => sum + (item.is_quarterly ? Number(item.amount) : 0), 0);
    setQuarterlyTotal(Math.round(quarterlyFeesSum / paymentFrequency) || 0);
  }, [fees, paymentFrequency]);

  const handleFeeItemChange = (index, field) => (e) => {
    const newFees = [...fees];
    newFees[index][field] = e.target.value;
    setFees(newFees);
  };
  
  const handleQuarterlyChange = (index) => (e) => {
      const newFees = [...fees];
      newFees[index].is_quarterly = e.target.checked;
      setFees(newFees);
  };
  
  const handleAddFeeItem = () => {
    setFees([...fees, { name: '', amount: 0, is_quarterly: false }]);
  };
  
  const handleRemoveFeeItem = (index) => {
    const newFees = fees.filter((_, i) => i !== index);
    setFees(newFees);
  };
  
  const handleDateChange = (type) => (date) => {
    setAcademicYear(prev => ({
      ...prev,
      [type]: date
    }));
  };

  const createPayload = () => ({
    fee_items: fees.filter(item => item.name && item.amount > 0),
    total_fee: total,
    quarterly_fee: quarterlyTotal,
    payment_frequency: paymentFrequency,
    academic_year_start: academicYear.start?.format('YYYY-MM-DD') || null,
    academic_year_end: academicYear.end?.format('YYYY-MM-DD') || null,
  });

  const handleSave = () => {
    onSubmit(createPayload());
  };

  const handleUpdate = () => {
    onUpdate(createPayload());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 2 }}>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>Fees Management</Typography>
            <Grid container spacing={2} mb={3}>
              <Grid item xs={12} sm={6}>
                <DatePicker
                  label="Academic Year Start"
                  value={academicYear.start}
                  onChange={handleDateChange('start')}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePicker
                  label="Academic Year End"
                  value={academicYear.end}
                  onChange={handleDateChange('end')}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>
            </Grid>
            
            <Divider sx={{ my: 3 }} />

            <Typography variant="subtitle1" gutterBottom>Fee Details</Typography>
            {fees.map((feeItem, index) => (
              <Grid container spacing={2} key={index} alignItems="center" sx={{ mb: 2 }}>
                <Grid item xs={12} sm={4}>
                  <TextField 
                    fullWidth 
                    label="Fee Name" 
                    name="name" 
                    value={feeItem.name} 
                    onChange={handleFeeItemChange(index, 'name')} 
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField 
                    fullWidth 
                    type="number" 
                    label="Amount" 
                    name="amount" 
                    value={feeItem.amount} 
                    onChange={handleFeeItemChange(index, 'amount')} 
                    inputProps={{ min: 0 }}
                  />
                </Grid>
                <Grid item xs={6} sm={2}>
                  <FormControlLabel
                    control={
                        <Checkbox checked={feeItem.is_quarterly} onChange={handleQuarterlyChange(index)} />
                    }
                    label="Quarterly"
                  />
                </Grid>
                <Grid item xs={6} sm={2}>
                  <IconButton onClick={() => handleRemoveFeeItem(index)} color="error">
                    <RemoveCircleIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            
            <Box mt={2}>
              <Button 
                variant="outlined" 
                onClick={handleAddFeeItem} 
                startIcon={<AddCircleIcon />}
              >
                Add Fee Item
              </Button>
            </Box>
            
            <Divider sx={{ my: 3 }} />

            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">Total Fees: ₹{total}</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel>Payment Frequency</InputLabel>
                        <Select
                            value={paymentFrequency}
                            label="Payment Frequency"
                            onChange={(e) => setPaymentFrequency(Number(e.target.value))}
                        >
                            <MenuItem value={1}>Annually (1 payment)</MenuItem>
                            <MenuItem value={2}>Biannually (2 payments)</MenuItem>
                            <MenuItem value={3}>Trimester (3 payments)</MenuItem>
                            <MenuItem value={4}>Quarterly (4 payments)</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">Payable per installment: ₹{quarterlyTotal}</Typography>
                </Grid>
            </Grid>
            
          </CardContent>
        </Card>
        
        <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
            {mode === 'create' ? (
                <Button type="submit" variant="contained" onClick={handleSave} disabled={loading}>
                    {loading ? 'Saving...' : 'Save Fees'}
                </Button>
            ) : (
                <>
                    <Button variant="contained" color="error" onClick={onDelete} disabled={loading}>Delete</Button>
                    <Button type="submit" variant="contained" onClick={handleUpdate} disabled={loading}>
                        {loading ? 'Updating...' : 'Update Fees'}
                    </Button>
                </>
            )}
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default DynamicFeeForm;