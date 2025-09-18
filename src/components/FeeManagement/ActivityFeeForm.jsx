import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Box, Typography, Card, CardContent } from '@mui/material';

const ActivityFeeForm = ({ feeData, onSubmit, onUpdate, onDelete, loading = false }) => {
  const [fees, setFees] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (feeData) {
      setFees(feeData);
    }
  }, [feeData]);

  useEffect(() => {
    const categoryTotal = Object.values(fees).reduce((sum, value) => sum + (Number(value) || 0), 0);
    setTotal(categoryTotal);
  }, [fees]);

  const handleFeeChange = (e) => {
    const { name, value } = e.target;
    setFees(prevFees => ({
      ...prevFees,
      [name]: Number(value) || 0
    }));
  };

  const handleSave = () => {
    onSubmit(fees);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" gutterBottom>Activity & Development Fees</Typography>
            <Typography variant="h6">Total: ₹{total}</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField fullWidth type="number" label="Sports Fee" name="sports_fee" value={fees.sports_fee || 0} onChange={handleFeeChange} inputProps={{ min: 0 }} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField fullWidth type="number" label="Cultural Fee" name="cultural_fee" value={fees.cultural_fee || 0} onChange={handleFeeChange} inputProps={{ min: 0 }} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField fullWidth type="number" label="Co-curricular Fee" name="cocurricular_fee" value={fees.cocurricular_fee || 0} onChange={handleFeeChange} inputProps={{ min: 0 }} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField fullWidth type="number" label="Development Fee" name="development_fee" value={fees.development_fee || 0} onChange={handleFeeChange} inputProps={{ min: 0 }} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField fullWidth type="number" label="Smart Class Fee" name="smart_class_fee" value={fees.smart_class_fee || 0} onChange={handleFeeChange} inputProps={{ min: 0 }} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      
      <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
        {onDelete && <Button variant="contained" color="error" onClick={() => onDelete(fees)}>Delete</Button>}
        {onUpdate && <Button variant="contained" onClick={() => onUpdate(fees)} disabled={loading}>
          {loading ? 'Updating...' : 'Update Fees'}
        </Button>}
        {onSubmit && <Button type="submit" variant="contained" onClick={handleSave} disabled={loading}>
          {loading ? 'Saving...' : 'Save Fees'}
        </Button>}
      </Box>
    </Box>
  );
};

export default ActivityFeeForm;