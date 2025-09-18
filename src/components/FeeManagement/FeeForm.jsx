import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Grid, Box, Typography, Card, CardContent,
  FormControl, InputLabel, Select, MenuItem,
  FormGroup, FormLabel, Checkbox
} from '@mui/material';

const FeeForm = ({ onSubmit, onUpdate, onDelete, initialData = null, loading = false }) => {
  const [fees, setFees] = useState({
    admission: { admission_fee: 0, registration_fee: 0, caution_deposit: 0 },
    tuition: { tuition_fee: 0, term_fee: 0, examination_fee: 0, laboratory_fee: 0, library_fee: 0 },
    activity: { sports_fee: 0, cultural_fee: 0, cocurricular_fee: 0, development_fee: 0, smart_class_fee: 0 },
    transport: { transport_fee: 0, hostel_fee: 0, mess_fee: 0 },
    miscellaneous: { uniform_books_fee: 0, id_card_fee: 0, health_fee: 0, picnic_excursion_fee: 0, annual_day_fee: 0 }
  });
  const [totalByCategory, setTotalByCategory] = useState({});
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    if (initialData) {
      setFees(initialData);
    }
  }, [initialData]);

  useEffect(() => {
    const newTotals = {};
    let total = 0;

    for (const category in fees) {
      const categoryTotal = Object.values(fees[category]).reduce((sum, value) => sum + (Number(value) || 0), 0);
      newTotals[category] = categoryTotal;
      total += categoryTotal;
    }

    setTotalByCategory(newTotals);
    setGrandTotal(total);
  }, [fees]);

  const handleFeeChange = (category, feeName) => (event) => {
    const value = Number(event.target.value) || 0;
    setFees(prevFees => ({
      ...prevFees,
      [category]: {
        ...prevFees[category],
        [feeName]: value
      }
    }));
  };

  const renderFeeCard = (categoryName, categoryLabel, categoryFees) => (
    <Card sx={{ mb: 3 }} key={categoryName}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" gutterBottom>{categoryLabel}</Typography>
          <Typography variant="h6">Total: ₹{totalByCategory[categoryName] || 0}</Typography>
        </Box>
        <Grid container spacing={2}>
          {Object.keys(categoryFees).map(feeName => (
            <Grid item xs={12} sm={6} md={4} key={feeName}>
              <TextField
                fullWidth
                type="number"
                label={feeName.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                value={fees[categoryName][feeName]}
                onChange={handleFeeChange(categoryName, feeName)}
                inputProps={{ min: 0 }}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  return (
    <Box component="form" sx={{ maxWidth: 1000, margin: 'auto', p: 2 }}>
      {renderFeeCard('admission', '1. Admission-Related Fees', fees.admission)}
      {renderFeeCard('tuition', '2. Tuition and Academic Fees', fees.tuition)}
      {renderFeeCard('activity', '3. Activity & Development Fees', fees.activity)}
      {renderFeeCard('transport', '4. Transport and Boarding Fees', fees.transport)}
      {renderFeeCard('miscellaneous', '5. Miscellaneous Fees', fees.miscellaneous)}

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <Typography variant="h4" align="right">Grand Total: ₹{grandTotal}</Typography>
        </CardContent>
      </Card>

      <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
        {onDelete && <Button variant="contained" color="error" onClick={onDelete}>Delete</Button>}
        {onUpdate && <Button variant="contained" onClick={() => onUpdate(fees)} disabled={loading}>
          {loading ? 'Updating...' : 'Update Fees'}
        </Button>}
        {onSubmit && <Button type="submit" variant="contained" onClick={() => onSubmit(fees)} disabled={loading}>
          {loading ? 'Submitting...' : 'Save Fees'}
        </Button>}
      </Box>
    </Box>
  );
};

export default FeeForm;