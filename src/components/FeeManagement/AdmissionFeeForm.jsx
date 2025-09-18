// // // // import React, { useState, useEffect } from 'react';
// // // // import {
// // // //   TextField, Button, Grid, Box, Typography, Card, CardContent
// // // // } from '@mui/material';
// // // // import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// // // // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // // // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // // // import dayjs from 'dayjs';

// // // // const AdmissionFeeForm = ({ feeData, onSubmit, onUpdate, onDelete, loading = false }) => {
// // // //   const [fees, setFees] = useState({});
// // // //   const [total, setTotal] = useState(0);

// // // //   // New state for the academic year date range
// // // //   const [academicYear, setAcademicYear] = useState({
// // // //     start: null,
// // // //     end: null
// // // //   });

// // // //   useEffect(() => {
// // // //     // Correctly initialize state from prop
// // // //     if (feeData) {
// // // //       setFees(feeData);
// // // //       // Initialize dates from feeData, if they exist
// // // //       if (feeData.academic_year_start) {
// // // //         setAcademicYear(prev => ({ ...prev, start: dayjs(feeData.academic_year_start) }));
// // // //       }
// // // //       if (feeData.academic_year_end) {
// // // //         setAcademicYear(prev => ({ ...prev, end: dayjs(feeData.academic_year_end) }));
// // // //       }
// // // //     }
// // // //   }, [feeData]);

// // // //   useEffect(() => {
// // // //     const categoryTotal = Object.values(fees).reduce((sum, value) => sum + (Number(value) || 0), 0);
// // // //     setTotal(categoryTotal);
// // // //   }, [fees]);

// // // //   const handleFeeChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFees(prevFees => ({
// // // //       ...prevFees,
// // // //       [name]: Number(value) || 0
// // // //     }));
// // // //   };

// // // //   const handleDateChange = (type) => (date) => {
// // // //     setAcademicYear(prev => ({
// // // //       ...prev,
// // // //       [type]: date
// // // //     }));
// // // //   };

// // // //   const handleSave = () => {
// // // //     // Combine fees and academic year into a single payload
// // // //     const payload = {
// // // //       ...fees,
// // // //       academic_year_start: academicYear.start?.format('YYYY-MM-DD') || null,
// // // //       academic_year_end: academicYear.end?.format('YYYY-MM-DD') || null,
// // // //     };
// // // //     onSubmit(payload);
// // // //   };

// // // //   return (
// // // //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// // // //       <Box sx={{ p: 2 }}>
// // // //         <Card sx={{ mb: 3 }}>
// // // //           <CardContent>
// // // //             <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
// // // //               <Typography variant="h5" gutterBottom>Admission-Related Fees</Typography>
// // // //               <Typography variant="h6">Total: ₹{total}</Typography>
// // // //             </Box>

// // // //             <Typography variant="subtitle1" gutterBottom>Academic Year</Typography>
// // // //             <Grid container spacing={2} alignItems="center">
// // // //               <Grid item xs={12} sm={6}>
// // // //                 <DatePicker
// // // //                   label="Start Date"
// // // //                   value={academicYear.start}
// // // //                   onChange={handleDateChange('start')}
// // // //                   slotProps={{ textField: { fullWidth: true } }}
// // // //                 />
// // // //               </Grid>
// // // //               <Grid item xs={12} sm={6}>
// // // //                 <DatePicker
// // // //                   label="End Date"
// // // //                   value={academicYear.end}
// // // //                   onChange={handleDateChange('end')}
// // // //                   slotProps={{ textField: { fullWidth: true } }}
// // // //                 />
// // // //               </Grid>
// // // //             </Grid>

// // // //             <Typography variant="subtitle1" gutterBottom mt={3}>Fee Details</Typography>
// // // //             <Grid container spacing={2}>
// // // //               <Grid item xs={12} sm={6} md={4}>
// // // //                 <TextField fullWidth type="number" label="Admission Fee" name="admission_fee" value={fees.admission_fee || 0} onChange={handleFeeChange} inputProps={{ min: 0 }} />
// // // //               </Grid>
// // // //               <Grid item xs={12} sm={6} md={4}>
// // // //                 <TextField fullWidth type="number" label="Registration Fee" name="registration_fee" value={fees.registration_fee || 0} onChange={handleFeeChange} inputProps={{ min: 0 }} />
// // // //               </Grid>
// // // //               <Grid item xs={12} sm={6} md={4}>
// // // //                 <TextField fullWidth type="number" label="Caution Deposit" name="caution_deposit" value={fees.caution_deposit || 0} onChange={handleFeeChange} inputProps={{ min: 0 }} />
// // // //               </Grid>
// // // //             </Grid>
// // // //           </CardContent>
// // // //         </Card>
        
// // // //         <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
// // // //           {onDelete && <Button variant="contained" color="error" onClick={() => onDelete(fees)}>Delete</Button>}
// // // //           {onUpdate && <Button variant="contained" onClick={() => onUpdate(fees)} disabled={loading}>
// // // //             {loading ? 'Updating...' : 'Update Fees'}
// // // //           </Button>}
// // // //           {onSubmit && <Button type="submit" variant="contained" onClick={handleSave} disabled={loading}>
// // // //             {loading ? 'Saving...' : 'Save Fees'}
// // // //           </Button>}
// // // //         </Box>
// // // //       </Box>
// // // //     </LocalizationProvider>
// // // //   );
// // // // };

// // // // export default AdmissionFeeForm;





















// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //   TextField, Button, Grid, Box, Typography, Card, CardContent,
// // //   IconButton, Divider
// // // } from '@mui/material';
// // // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // // import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// // // import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// // // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // // import dayjs from 'dayjs';

// // // const DynamicFeeForm = ({ onSubmit, onUpdate, onDelete, loading = false, initialData = null }) => {
// // //   const [fees, setFees] = useState([{ name: '', amount: 0 }]);
// // //   const [total, setTotal] = useState(0);
// // //   const [quarterlyTotal, setQuarterlyTotal] = useState(0);
  
// // //   const [academicYear, setAcademicYear] = useState({
// // //     start: null,
// // //     end: null
// // //   });

// // //   useEffect(() => {
// // //     // If there's initial data, load it into the form
// // //     if (initialData && initialData.fee_items && initialData.fee_items.length > 0) {
// // //       setFees(initialData.fee_items);
// // //     } else if (initialData && !initialData.fee_items) {
// // //       // Handle legacy or non-itemized fee data if needed
// // //       setFees([{ name: '', amount: 0 }]);
// // //     }
    
// // //     if (initialData && initialData.academic_year_start) {
// // //         setAcademicYear(prev => ({ ...prev, start: dayjs(initialData.academic_year_start) }));
// // //     }
// // //     if (initialData && initialData.academic_year_end) {
// // //         setAcademicYear(prev => ({ ...prev, end: dayjs(initialData.academic_year_end) }));
// // //     }
// // //   }, [initialData]);

// // //   useEffect(() => {
// // //     const totalAmount = fees.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
// // //     setTotal(totalAmount);
// // //     setQuarterlyTotal(Math.round(totalAmount / 4) || 0);
// // //   }, [fees]);

// // //   const handleFeeItemChange = (index, field) => (e) => {
// // //     const newFees = [...fees];
// // //     newFees[index][field] = e.target.value;
// // //     setFees(newFees);
// // //   };
  
// // //   const handleAddFeeItem = () => {
// // //     setFees([...fees, { name: '', amount: 0 }]);
// // //   };
  
// // //   const handleRemoveFeeItem = (index) => {
// // //     const newFees = fees.filter((_, i) => i !== index);
// // //     setFees(newFees);
// // //   };
  
// // //   const handleDateChange = (type) => (date) => {
// // //     setAcademicYear(prev => ({
// // //       ...prev,
// // //       [type]: date
// // //     }));
// // //   };

// // //   const handleSave = () => {
// // //     const payload = {
// // //       fee_items: fees.filter(item => item.name && item.amount > 0), // Filter out empty items
// // //       total_fee: total,
// // //       quarterly_fee: quarterlyTotal,
// // //       academic_year_start: academicYear.start?.format('YYYY-MM-DD') || null,
// // //       academic_year_end: academicYear.end?.format('YYYY-MM-DD') || null,
// // //     };
// // //     onSubmit(payload);
// // //   };

// // //   return (
// // //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// // //       <Box sx={{ p: 2 }}>
// // //         <Card sx={{ mb: 3 }}>
// // //           <CardContent>
// // //             <Typography variant="h5" gutterBottom>Fees Management</Typography>
// // //             <Grid container spacing={2} mb={3}>
// // //               <Grid item xs={12} sm={6}>
// // //                 <DatePicker
// // //                   label="Academic Year Start"
// // //                   value={academicYear.start}
// // //                   onChange={handleDateChange('start')}
// // //                   slotProps={{ textField: { fullWidth: true } }}
// // //                 />
// // //               </Grid>
// // //               <Grid item xs={12} sm={6}>
// // //                 <DatePicker
// // //                   label="Academic Year End"
// // //                   value={academicYear.end}
// // //                   onChange={handleDateChange('end')}
// // //                   slotProps={{ textField: { fullWidth: true } }}
// // //                 />
// // //               </Grid>
// // //             </Grid>
            
// // //             <Divider sx={{ my: 3 }} />

// // //             <Typography variant="subtitle1" gutterBottom>Fee Details</Typography>
// // //             {fees.map((feeItem, index) => (
// // //               <Grid container spacing={2} key={index} alignItems="center" sx={{ mb: 2 }}>
// // //                 <Grid item xs={12} sm={5}>
// // //                   <TextField 
// // //                     fullWidth 
// // //                     label="Fee Name" 
// // //                     name="name" 
// // //                     value={feeItem.name} 
// // //                     onChange={handleFeeItemChange(index, 'name')} 
// // //                   />
// // //                 </Grid>
// // //                 <Grid item xs={12} sm={5}>
// // //                   <TextField 
// // //                     fullWidth 
// // //                     type="number" 
// // //                     label="Amount" 
// // //                     name="amount" 
// // //                     value={feeItem.amount} 
// // //                     onChange={handleFeeItemChange(index, 'amount')} 
// // //                     inputProps={{ min: 0 }}
// // //                   />
// // //                 </Grid>
// // //                 <Grid item xs={12} sm={2}>
// // //                   <IconButton onClick={() => handleRemoveFeeItem(index)} color="error">
// // //                     <RemoveCircleIcon />
// // //                   </IconButton>
// // //                 </Grid>
// // //               </Grid>
// // //             ))}
            
// // //             <Box mt={2}>
// // //               <Button 
// // //                 variant="outlined" 
// // //                 onClick={handleAddFeeItem} 
// // //                 startIcon={<AddCircleIcon />}
// // //               >
// // //                 Add Fee Item
// // //               </Button>
// // //             </Box>
            
// // //             <Divider sx={{ my: 3 }} />

// // //             <Box display="flex" justifyContent="space-between" alignItems="center">
// // //               <Typography variant="h6">Total Fees: ₹{total}</Typography>
// // //               <Typography variant="h6">Quarterly Payable: ₹{quarterlyTotal}</Typography>
// // //             </Box>
            
// // //           </CardContent>
// // //         </Card>
        
// // //         <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
// // //           {onDelete && <Button variant="contained" color="error" onClick={() => onDelete(fees)}>Delete</Button>}
// // //           {onUpdate && <Button variant="contained" onClick={() => onUpdate(fees)} disabled={loading}>
// // //             {loading ? 'Updating...' : 'Update Fees'}
// // //           </Button>}
// // //           {onSubmit && <Button type="submit" variant="contained" onClick={handleSave} disabled={loading}>
// // //             {loading ? 'Saving...' : 'Save Fees'}
// // //           </Button>}
// // //         </Box>
// // //       </Box>
// // //     </LocalizationProvider>
// // //   );
// // // };

// // // export default DynamicFeeForm;
















// // import React, { useState, useEffect } from 'react';
// // import {
// //   TextField, Button, Grid, Box, Typography, Card, CardContent,
// //   IconButton, Divider, FormControl, InputLabel, Select, MenuItem,
// //   FormControlLabel, Checkbox
// // } from '@mui/material';
// // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// // import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import dayjs from 'dayjs';

// // const DynamicFeeForm = ({ onSubmit, onUpdate, onDelete, loading = false, initialData = null }) => {
// //   const [fees, setFees] = useState([{ name: '', amount: 0, is_quarterly: false }]);
// //   const [total, setTotal] = useState(0);
// //   const [quarterlyTotal, setQuarterlyTotal] = useState(0);
// //   const [paymentFrequency, setPaymentFrequency] = useState(4); // Default to 4 (quarterly)
  
// //   const [academicYear, setAcademicYear] = useState({
// //     start: null,
// //     end: null
// //   });

// //   useEffect(() => {
// //     if (initialData && initialData.fee_items && initialData.fee_items.length > 0) {
// //       setFees(initialData.fee_items);
// //     } else if (initialData && !initialData.fee_items) {
// //       setFees([{ name: '', amount: 0, is_quarterly: false }]);
// //     }
    
// //     if (initialData && initialData.academic_year_start) {
// //         setAcademicYear(prev => ({ ...prev, start: dayjs(initialData.academic_year_start) }));
// //     }
// //     if (initialData && initialData.academic_year_end) {
// //         setAcademicYear(prev => ({ ...prev, end: dayjs(initialData.academic_year_end) }));
// //     }
// //     if (initialData && initialData.payment_frequency) {
// //       setPaymentFrequency(initialData.payment_frequency);
// //     }
// //     if (initialData && initialData.quarterly_fee) {
// //         setQuarterlyTotal(initialData.quarterly_fee);
// //     }
// //   }, [initialData]);

// //   useEffect(() => {
// //     const totalAmount = fees.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
// //     setTotal(totalAmount);
    
// //     const quarterlyFeesSum = fees.reduce((sum, item) => sum + (item.is_quarterly ? Number(item.amount) : 0), 0);
// //     setQuarterlyTotal(Math.round(quarterlyFeesSum / paymentFrequency) || 0);
// //   }, [fees, paymentFrequency]);

// //   const handleFeeItemChange = (index, field) => (e) => {
// //     const newFees = [...fees];
// //     newFees[index][field] = e.target.value;
// //     setFees(newFees);
// //   };
  
// //   const handleQuarterlyChange = (index) => (e) => {
// //       const newFees = [...fees];
// //       newFees[index].is_quarterly = e.target.checked;
// //       setFees(newFees);
// //   };
  
// //   const handleAddFeeItem = () => {
// //     setFees([...fees, { name: '', amount: 0, is_quarterly: false }]);
// //   };
  
// //   const handleRemoveFeeItem = (index) => {
// //     const newFees = fees.filter((_, i) => i !== index);
// //     setFees(newFees);
// //   };
  
// //   const handleDateChange = (type) => (date) => {
// //     setAcademicYear(prev => ({
// //       ...prev,
// //       [type]: date
// //     }));
// //   };

// //   const handleSave = () => {
// //     const payload = {
// //       fee_items: fees.filter(item => item.name && item.amount > 0),
// //       total_fee: total,
// //       quarterly_fee: quarterlyTotal,
// //       payment_frequency: paymentFrequency,
// //       academic_year_start: academicYear.start?.format('YYYY-MM-DD') || null,
// //       academic_year_end: academicYear.end?.format('YYYY-MM-DD') || null,
// //     };
// //     onSubmit(payload);
// //   };

// //   return (
// //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// //       <Box sx={{ p: 2 }}>
// //         <Card sx={{ mb: 3 }}>
// //           <CardContent>
// //             <Typography variant="h5" gutterBottom>Fees Management</Typography>
// //             <Grid container spacing={2} mb={3}>
// //               <Grid item xs={12} sm={6}>
// //                 <DatePicker
// //                   label="Academic Year Start"
// //                   value={academicYear.start}
// //                   onChange={handleDateChange('start')}
// //                   slotProps={{ textField: { fullWidth: true } }}
// //                 />
// //               </Grid>
// //               <Grid item xs={12} sm={6}>
// //                 <DatePicker
// //                   label="Academic Year End"
// //                   value={academicYear.end}
// //                   onChange={handleDateChange('end')}
// //                   slotProps={{ textField: { fullWidth: true } }}
// //                 />
// //               </Grid>
// //             </Grid>
            
// //             <Divider sx={{ my: 3 }} />

// //             <Typography variant="subtitle1" gutterBottom>Fee Details</Typography>
// //             {fees.map((feeItem, index) => (
// //               <Grid container spacing={2} key={index} alignItems="center" sx={{ mb: 2 }}>
// //                 <Grid item xs={12} sm={4}>
// //                   <TextField 
// //                     fullWidth 
// //                     label="Fee Name" 
// //                     name="name" 
// //                     value={feeItem.name} 
// //                     onChange={handleFeeItemChange(index, 'name')} 
// //                   />
// //                 </Grid>
// //                 <Grid item xs={12} sm={4}>
// //                   <TextField 
// //                     fullWidth 
// //                     type="number" 
// //                     label="Amount" 
// //                     name="amount" 
// //                     value={feeItem.amount} 
// //                     onChange={handleFeeItemChange(index, 'amount')} 
// //                     inputProps={{ min: 0 }}
// //                   />
// //                 </Grid>
// //                 <Grid item xs={6} sm={2}>
// //                   <FormControlLabel
// //                     control={
// //                         <Checkbox checked={feeItem.is_quarterly} onChange={handleQuarterlyChange(index)} />
// //                     }
// //                     label="Quarterly"
// //                   />
// //                 </Grid>
// //                 <Grid item xs={6} sm={2}>
// //                   <IconButton onClick={() => handleRemoveFeeItem(index)} color="error">
// //                     <RemoveCircleIcon />
// //                   </IconButton>
// //                 </Grid>
// //               </Grid>
// //             ))}
            
// //             <Box mt={2}>
// //               <Button 
// //                 variant="outlined" 
// //                 onClick={handleAddFeeItem} 
// //                 startIcon={<AddCircleIcon />}
// //               >
// //                 Add Fee Item
// //               </Button>
// //             </Box>
            
// //             <Divider sx={{ my: 3 }} />

// //             <Grid container spacing={2} alignItems="center">
// //                 <Grid item xs={12} sm={4}>
// //                     <Typography variant="h6">Total Fees: ₹{total}</Typography>
// //                 </Grid>
// //                 <Grid item xs={12} sm={4}>
// //                     <FormControl fullWidth>
// //                         <InputLabel>Payment Frequency</InputLabel>
// //                         <Select
// //                             value={paymentFrequency}
// //                             label="Payment Frequency"
// //                             onChange={(e) => setPaymentFrequency(Number(e.target.value))}
// //                         >
// //                             <MenuItem value={1}>Annually (1 payment)</MenuItem>
// //                             <MenuItem value={2}>Biannually (2 payments)</MenuItem>
// //                             <MenuItem value={3}>Trimester (3 payments)</MenuItem>
// //                             <MenuItem value={4}>Quarterly (4 payments)</MenuItem>
// //                         </Select>
// //                     </FormControl>
// //                 </Grid>
// //                 <Grid item xs={12} sm={4}>
// //                     <Typography variant="h6">Payable per installment: ₹{quarterlyTotal}</Typography>
// //                 </Grid>
// //             </Grid>
            
// //           </CardContent>
// //         </Card>
        
// //         <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
// //           {onDelete && <Button variant="contained" color="error" onClick={() => onDelete(fees)}>Delete</Button>}
// //           {onUpdate && <Button variant="contained" onClick={() => onUpdate(fees)} disabled={loading}>
// //             {loading ? 'Updating...' : 'Update Fees'}
// //           </Button>}
// //           {onSubmit && <Button type="submit" variant="contained" onClick={handleSave} disabled={loading}>
// //             {loading ? 'Saving...' : 'Save Fees'}
// //           </Button>}
// //         </Box>
// //       </Box>
// //     </LocalizationProvider>
// //   );
// // };

// // export default DynamicFeeForm;



















// import React, { useState, useEffect } from 'react';
// import {
//   TextField, Button, Grid, Box, Typography, Card, CardContent,
//   IconButton, Divider, FormControl, InputLabel, Select, MenuItem,
//   FormControlLabel, Checkbox
// } from '@mui/material';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs from 'dayjs';

// const DynamicFeeForm = ({ onSubmit, onUpdate, onDelete, loading = false, initialData = null }) => {
//   const [fees, setFees] = useState([{ name: '', amount: 0, is_quarterly: false }]);
//   const [total, setTotal] = useState(0);
//   const [quarterlyTotal, setQuarterlyTotal] = useState(0);
//   const [paymentFrequency, setPaymentFrequency] = useState(4); // Default to 4 (quarterly)
  
//   const [academicYear, setAcademicYear] = useState({
//     start: null,
//     end: null
//   });

//   useEffect(() => {
//     // If there's initial data, load it into the form
//     if (initialData && initialData.fee_items && initialData.fee_items.length > 0) {
//       setFees(initialData.fee_items);
//     } else if (initialData && !initialData.fee_items) {
//       setFees([{ name: '', amount: 0, is_quarterly: false }]);
//     }
    
//     if (initialData && initialData.academic_year_start) {
//         setAcademicYear(prev => ({ ...prev, start: dayjs(initialData.academic_year_start) }));
//     }
//     if (initialData && initialData.academic_year_end) {
//         setAcademicYear(prev => ({ ...prev, end: dayjs(initialData.academic_year_end) }));
//     }
//     if (initialData && initialData.payment_frequency) {
//       setPaymentFrequency(initialData.payment_frequency);
//     }
//     if (initialData && initialData.quarterly_fee) {
//         setQuarterlyTotal(initialData.quarterly_fee);
//     }
//   }, [initialData]);

//   useEffect(() => {
//     const totalAmount = fees.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
//     setTotal(totalAmount);
    
//     const quarterlyFeesSum = fees.reduce((sum, item) => sum + (item.is_quarterly ? Number(item.amount) : 0), 0);
//     setQuarterlyTotal(Math.round(quarterlyFeesSum / paymentFrequency) || 0);
//   }, [fees, paymentFrequency]);

//   const handleFeeItemChange = (index, field) => (e) => {
//     const newFees = [...fees];
//     newFees[index][field] = e.target.value;
//     setFees(newFees);
//   };
  
//   const handleQuarterlyChange = (index) => (e) => {
//       const newFees = [...fees];
//       newFees[index].is_quarterly = e.target.checked;
//       setFees(newFees);
//   };
  
//   const handleAddFeeItem = () => {
//     setFees([...fees, { name: '', amount: 0, is_quarterly: false }]);
//   };
  
//   const handleRemoveFeeItem = (index) => {
//     const newFees = fees.filter((_, i) => i !== index);
//     setFees(newFees);
//   };
  
//   const handleDateChange = (type) => (date) => {
//     setAcademicYear(prev => ({
//       ...prev,
//       [type]: date
//     }));
//   };

//   const handleSave = () => {
//     const payload = {
//       fee_items: fees.filter(item => item.name && item.amount > 0),
//       total_fee: total,
//       quarterly_fee: quarterlyTotal,
//       payment_frequency: paymentFrequency,
//       academic_year_start: academicYear.start?.format('YYYY-MM-DD') || null,
//       academic_year_end: academicYear.end?.format('YYYY-MM-DD') || null,
//     };
//     onSubmit(payload);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box sx={{ p: 2 }}>
//         <Card sx={{ mb: 3 }}>
//           <CardContent>
//             <Typography variant="h5" gutterBottom>Fees Management</Typography>
//             <Grid container spacing={2} mb={3}>
//               <Grid item xs={12} sm={6}>
//                 <DatePicker
//                   label="Academic Year Start"
//                   value={academicYear.start}
//                   onChange={handleDateChange('start')}
//                   slotProps={{ textField: { fullWidth: true } }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <DatePicker
//                   label="Academic Year End"
//                   value={academicYear.end}
//                   onChange={handleDateChange('end')}
//                   slotProps={{ textField: { fullWidth: true } }}
//                 />
//               </Grid>
//             </Grid>
            
//             <Divider sx={{ my: 3 }} />

//             <Typography variant="subtitle1" gutterBottom>Fee Details</Typography>
//             {fees.map((feeItem, index) => (
//               <Grid container spacing={2} key={index} alignItems="center" sx={{ mb: 2 }}>
//                 <Grid item xs={12} sm={4}>
//                   <TextField 
//                     fullWidth 
//                     label="Fee Name" 
//                     name="name" 
//                     value={feeItem.name} 
//                     onChange={handleFeeItemChange(index, 'name')} 
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                   <TextField 
//                     fullWidth 
//                     type="number" 
//                     label="Amount" 
//                     name="amount" 
//                     value={feeItem.amount} 
//                     onChange={handleFeeItemChange(index, 'amount')} 
//                     inputProps={{ min: 0 }}
//                   />
//                 </Grid>
//                 <Grid item xs={6} sm={2}>
//                   <FormControlLabel
//                     control={
//                         <Checkbox checked={feeItem.is_quarterly} onChange={handleQuarterlyChange(index)} />
//                     }
//                     label="Quarterly"
//                   />
//                 </Grid>
//                 <Grid item xs={6} sm={2}>
//                   <IconButton onClick={() => handleRemoveFeeItem(index)} color="error">
//                     <RemoveCircleIcon />
//                   </IconButton>
//                 </Grid>
//               </Grid>
//             ))}
            
//             <Box mt={2}>
//               <Button 
//                 variant="outlined" 
//                 onClick={handleAddFeeItem} 
//                 startIcon={<AddCircleIcon />}
//               >
//                 Add Fee Item
//               </Button>
//             </Box>
            
//             <Divider sx={{ my: 3 }} />

//             <Grid container spacing={2} alignItems="center">
//                 <Grid item xs={12} sm={4}>
//                     <Typography variant="h6">Total Fees: ₹{total}</Typography>
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                     <FormControl fullWidth>
//                         <InputLabel>Payment Frequency</InputLabel>
//                         <Select
//                             value={paymentFrequency}
//                             label="Payment Frequency"
//                             onChange={(e) => setPaymentFrequency(Number(e.target.value))}
//                         >
//                             <MenuItem value={1}>Annually (1 payment)</MenuItem>
//                             <MenuItem value={2}>Biannually (2 payments)</MenuItem>
//                             <MenuItem value={3}>Trimester (3 payments)</MenuItem>
//                             <MenuItem value={4}>Quarterly (4 payments)</MenuItem>
//                         </Select>
//                     </FormControl>
//                 </Grid>
//                 <Grid item xs={12} sm={4}>
//                     <Typography variant="h6">Payable per installment: ₹{quarterlyTotal}</Typography>
//                 </Grid>
//             </Grid>
            
//           </CardContent>
//         </Card>
        
//         <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
//           {onDelete && <Button variant="contained" color="error" onClick={() => onDelete(fees)}>Delete</Button>}
//           {onUpdate && <Button variant="contained" onClick={() => onUpdate(fees)} disabled={loading}>
//             {loading ? 'Updating...' : 'Update Fees'}
//           </Button>}
//           {onSubmit && <Button type="submit" variant="contained" onClick={handleSave} disabled={loading}>
//             {loading ? 'Saving...' : 'Save Fees'}
//           </Button>}
//         </Box>
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default DynamicFeeForm;






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