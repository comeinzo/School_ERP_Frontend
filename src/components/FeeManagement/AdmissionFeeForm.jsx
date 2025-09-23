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
//   const [paymentFrequency, setPaymentFrequency] = useState(4);
//   const [mode, setMode] = useState('create'); // 'create' or 'update'
  
//   const [academicYear, setAcademicYear] = useState({
//     start: null,
//     end: null
//   });

//   useEffect(() => {
//     // If there's initial data, load it and switch to update mode
//     if (initialData && initialData.id) {
//       setMode('update');
//       if (initialData.fee_items && initialData.fee_items.length > 0) {
//         setFees(initialData.fee_items);
//       }
//       if (initialData.academic_year_start) {
//           setAcademicYear(prev => ({ ...prev, start: dayjs(initialData.academic_year_start) }));
//       }
//       if (initialData.academic_year_end) {
//           setAcademicYear(prev => ({ ...prev, end: dayjs(initialData.academic_year_end) }));
//       }
//       if (initialData.payment_frequency) {
//         setPaymentFrequency(initialData.payment_frequency);
//       }
//       if (initialData.quarterly_fee) {
//           setQuarterlyTotal(initialData.quarterly_fee);
//       }
//     } else {
//       setMode('create');
//       setFees([{ name: '', amount: 0, is_quarterly: false }]);
//       setAcademicYear({ start: null, end: null });
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

//   const createPayload = () => ({
//     fee_items: fees.filter(item => item.name && item.amount > 0),
//     total_fee: total,
//     quarterly_fee: quarterlyTotal,
//     payment_frequency: paymentFrequency,
//     academic_year_start: academicYear.start?.format('YYYY-MM-DD') || null,
//     academic_year_end: academicYear.end?.format('YYYY-MM-DD') || null,
//   });

//   const handleSave = () => {
//     onSubmit(createPayload());
//   };

//   const handleUpdate = () => {
//     onUpdate(createPayload());
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
//             {mode === 'create' ? (
//                 <Button type="submit" variant="contained" onClick={handleSave} disabled={loading}>
//                     {loading ? 'Saving...' : 'Save Fees'}
//                 </Button>
//             ) : (
//                 <>
//                     <Button variant="contained" color="error" onClick={onDelete} disabled={loading}>Delete</Button>
//                     <Button type="submit" variant="contained" onClick={handleUpdate} disabled={loading}>
//                         {loading ? 'Updating...' : 'Update Fees'}
//                     </Button>
//                 </>
//             )}
//         </Box>
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default DynamicFeeForm;











// import React, { useState, useEffect } from 'react';
// import {
//   TextField, Button, Grid, Box, Typography, Card, CardContent,
//   IconButton, Divider, FormControl, InputLabel, Select, MenuItem,
//   FormControlLabel, Checkbox, Paper, Chip, Avatar, LinearProgress
// } from '@mui/material';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs from 'dayjs';
// import {
//   CalendarMonth, School, AttachMoney, Delete, Save,
//   Update, Payment, AccountBalance, Schedule,
//   CheckCircle, Error, TrendingUp
// } from '@mui/icons-material';

// const DynamicFeeForm = ({ 
//   onSubmit = () => {}, 
//   onUpdate = () => {}, 
//   onDelete = () => {}, 
//   loading = false, 
//   initialData = null 
// }) => {
//   // --- NO CHANGES TO STATE OR LOGIC ---
//   const [fees, setFees] = useState([{ name: '', amount: 0, is_quarterly: false }]);
//   const [total, setTotal] = useState(0);
//   const [quarterlyTotal, setQuarterlyTotal] = useState(0);
//   const [paymentFrequency, setPaymentFrequency] = useState(4);
//   const [mode, setMode] = useState('create');
//   const [academicYear, setAcademicYear] = useState({ start: null, end: null });

//   useEffect(() => {
//     if (initialData && initialData.id) {
//       setMode('update');
//       if (initialData.fee_items && initialData.fee_items.length > 0) {
//         setFees(initialData.fee_items);
//       }
//       if (initialData.academic_year_start) {
//         setAcademicYear(prev => ({ ...prev, start: dayjs(initialData.academic_year_start) }));
//       }
//       if (initialData.academic_year_end) {
//         setAcademicYear(prev => ({ ...prev, end: dayjs(initialData.academic_year_end) }));
//       }
//       if (initialData.payment_frequency) {
//         setPaymentFrequency(initialData.payment_frequency);
//       }
//       if (initialData.quarterly_fee) {
//         setQuarterlyTotal(initialData.quarterly_fee);
//       }
//     } else {
//       setMode('create');
//       setFees([{ name: '', amount: 0, is_quarterly: false }]);
//       setAcademicYear({ start: null, end: null });
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
//     const newFees = [...fees];
//     newFees[index].is_quarterly = e.target.checked;
//     setFees(newFees);
//   };
//   const handleAddFeeItem = () => {
//     setFees([...fees, { name: '', amount: 0, is_quarterly: false }]);
//   };
//   const handleRemoveFeeItem = (index) => {
//     const newFees = fees.filter((_, i) => i !== index);
//     setFees(newFees);
//   };
//   const handleDateChange = (type) => (date) => {
//     setAcademicYear(prev => ({ ...prev, [type]: date }));
//   };
//   const createPayload = () => ({
//     fee_items: fees.filter(item => item.name && item.amount > 0),
//     total_fee: total,
//     quarterly_fee: quarterlyTotal,
//     payment_frequency: paymentFrequency,
//     academic_year_start: academicYear.start?.format('YYYY-MM-DD') || null,
//     academic_year_end: academicYear.end?.format('YYYY-MM-DD') || null,
//   });
//   const handleSave = () => onSubmit(createPayload());
//   const handleUpdate = () => onUpdate(createPayload());
//   // --- END OF UNCHANGED LOGIC ---

//   // Custom styled components
//   const StyledCard = ({ children, title, icon, ...props }) => (
//     <Card 
//       elevation={0}
//       sx={{ 
//         mb: 3,
//         borderRadius: '16px',
//         background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
//         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
//         transition: 'all 0.3s ease',
//         '&:hover': {
//           boxShadow: '0 6px 30px rgba(0, 0, 0, 0.12)',
//         },
//         ...props.sx
//       }}
//     >
//       <CardContent sx={{ p: 3 }}>
//         {title && (
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//             {icon && (
//               <Avatar sx={{ 
//                 bgcolor: 'primary.light', 
//                 mr: 2,
//                 width: 48,
//                 height: 48
//               }}>
//                 {icon}
//               </Avatar>
//             )}
//             <Box>
//               <Typography variant="h6" sx={{ 
//                 fontWeight: 600,
//                 color: 'text.primary'
//               }}>
//                 {title}
//               </Typography>
//               {props.subtitle && (
//                 <Typography variant="body2" color="text.secondary">
//                   {props.subtitle}
//                 </Typography>
//               )}
//             </Box>
//           </Box>
//         )}
//         {children}
//       </CardContent>
//     </Card>
//   );

//   const StyledTextField = ({ ...props }) => (
//     <TextField
//       {...props}
//       variant="outlined"
//       sx={{
//         '& .MuiOutlinedInput-root': {
//           borderRadius: '12px',
//           backgroundColor: '#f8f9fa',
//           transition: 'all 0.3s ease',
//           '&:hover': {
//             backgroundColor: '#fff',
//             boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
//           },
//           '&.Mui-focused': {
//             backgroundColor: '#fff',
//             boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
//           },
//         },
//         ...props.sx
//       }}
//     />
//   );

//   // Calculate progress
//   const filledFees = fees.filter(f => f.name && f.amount > 0).length;
//   const progress = fees.length > 0 ? (filledFees / fees.length) * 100 : 0;

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box sx={{ 
//         minHeight: '100vh',
//         backgroundColor: '#f5f7fa',
//         p: { xs: 2, md: 4 }
//       }}>
        

//         <Grid container spacing={3}>
//           {/* Left Column - Summary Stats */}
//           <Grid item xs={12} md={3}>
//             {/* Total Summary Card */}
//             <StyledCard>
//               <Box sx={{ textAlign: 'center' }}>
//                 <Avatar sx={{ 
//                   bgcolor: 'primary.main', 
//                   width: 80, 
//                   height: 80, 
//                   margin: 'auto',
//                   mb: 2
//                 }}>
//                   <AttachMoney sx={{ fontSize: 40 }} />
//                 </Avatar>
//                 <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
//                   ₹{total.toLocaleString()}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Total Annual Fee
//                 </Typography>
//               </Box>
//             </StyledCard>

//             {/* Payment Info Card */}
//             <StyledCard>
//               <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
//                 Payment Information
//               </Typography>
//               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//                 <Box>
//                   <Typography variant="caption" color="text.secondary">
//                     Installments
//                   </Typography>
//                   <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                     {paymentFrequency} per year
//                   </Typography>
//                 </Box>
//                 <Divider />
//                 <Box>
//                   <Typography variant="caption" color="text.secondary">
//                     Per Installment
//                   </Typography>
//                   <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main' }}>
//                     ₹{quarterlyTotal.toLocaleString()}
//                   </Typography>
//                 </Box>
//               </Box>
//             </StyledCard>

//             {/* Progress Card */}
//             <StyledCard>
//               <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
//                 Form Completion
//               </Typography>
//               <Box sx={{ mb: 2 }}>
//                 <LinearProgress 
//                   variant="determinate" 
//                   value={progress} 
//                   sx={{ 
//                     height: 8, 
//                     borderRadius: 4,
//                     backgroundColor: 'grey.200',
//                     '& .MuiLinearProgress-bar': {
//                       borderRadius: 4,
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                     }
//                   }}
//                 />
//                 <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
//                   {filledFees} of {fees.length} items completed
//                 </Typography>
//               </Box>
//               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   {academicYear.start && academicYear.end ? 
//                     <CheckCircle color="success" fontSize="small" /> : 
//                     <Error color="action" fontSize="small" />
//                   }
//                   <Typography variant="body2">Academic Year</Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   {filledFees > 0 ? 
//                     <CheckCircle color="success" fontSize="small" /> : 
//                     <Error color="action" fontSize="small" />
//                   }
//                   <Typography variant="body2">Fee Items</Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <CheckCircle color="success" fontSize="small" />
//                   <Typography variant="body2">Payment Plan</Typography>
//                 </Box>
//               </Box>
//             </StyledCard>
//           </Grid>

//           {/* Right Column - Main Form */}
//           <Grid item xs={12} md={9}>
//             {/* Academic Year Section */}
//             <StyledCard 
//               title="Academic Year"
//               subtitle="Define the start and end dates for this fee structure"
//               icon={<CalendarMonth />}
//             >
//               <Grid container spacing={3}>
//                 <Grid item xs={12} md={6}>
//                   <DatePicker
//                     label="Academic Year Start"
//                     value={academicYear.start}
//                     onChange={handleDateChange('start')}
//                     slotProps={{ 
//                       textField: { 
//                         fullWidth: true,
//                         sx: {
//                           '& .MuiOutlinedInput-root': {
//                             borderRadius: '12px',
//                             backgroundColor: '#f8f9fa',
//                             '&:hover': {
//                               backgroundColor: '#fff',
//                               boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
//                             },
//                             '&.Mui-focused': {
//                               backgroundColor: '#fff',
//                               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
//                             },
//                           },
//                         }
//                       } 
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <DatePicker
//                     label="Academic Year End"
//                     value={academicYear.end}
//                     onChange={handleDateChange('end')}
//                     slotProps={{ 
//                       textField: { 
//                         fullWidth: true,
//                         sx: {
//                           '& .MuiOutlinedInput-root': {
//                             borderRadius: '12px',
//                             backgroundColor: '#f8f9fa',
//                             '&:hover': {
//                               backgroundColor: '#fff',
//                               boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
//                             },
//                             '&.Mui-focused': {
//                               backgroundColor: '#fff',
//                               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
//                             },
//                           },
//                         }
//                       } 
//                     }}
//                   />
//                 </Grid>
//               </Grid>
//             </StyledCard>

//             {/* Fee Items Section */}
//             <StyledCard 
//               title="Fee Components"
//               subtitle="Add individual fee items and mark quarterly payments"
//               icon={<AccountBalance />}
//             >
//               {fees.map((feeItem, index) => (
//                 <Paper
//                   key={index}
//                   elevation={0}
//                   sx={{ 
//                     p: 2, 
//                     mb: 2,
//                     borderRadius: '12px',
//                     backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#fff',
//                     border: '1px solid',
//                     borderColor: 'divider',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
//                       transform: 'translateY(-2px)'
//                     }
//                   }}
//                 >
//                   <Grid container spacing={2} alignItems="center">
//                     <Grid item xs={12} md={5}>
//                       <StyledTextField 
//                         fullWidth 
//                         label="Fee Name" 
//                         placeholder="e.g., Tuition Fee, Lab Fee"
//                         name="name" 
//                         value={feeItem.name} 
//                         onChange={handleFeeItemChange(index, 'name')} 
//                       />
//                     </Grid>
//                     <Grid item xs={12} md={4}>
//                       <StyledTextField 
//                         fullWidth 
//                         type="number" 
//                         label="Amount (₹)" 
//                         name="amount" 
//                         value={feeItem.amount} 
//                         onChange={handleFeeItemChange(index, 'amount')} 
//                         inputProps={{ min: 0 }} 
//                       />
//                     </Grid>
//                     <Grid item xs={6} md={2}>
//                       <FormControlLabel 
//                         control={
//                           <Checkbox 
//                             checked={feeItem.is_quarterly} 
//                             onChange={handleQuarterlyChange(index)}
//                             sx={{ 
//                               color: 'primary.main',
//                               '&.Mui-checked': {
//                                 color: 'primary.main',
//                               }
//                             }}
//                           />
//                         } 
//                         label={
//                           <Typography variant="body2">
//                             Quarterly
//                           </Typography>
//                         }
//                       />
//                     </Grid>
//                     <Grid item xs={6} md={1} sx={{ textAlign: 'right' }}>
//                       <IconButton 
//                         onClick={() => handleRemoveFeeItem(index)} 
//                         sx={{ 
//                           color: 'error.main',
//                           '&:hover': {
//                             backgroundColor: 'error.light',
//                             transform: 'scale(1.1)'
//                           }
//                         }}
//                       >
//                         <RemoveCircleIcon />
//                       </IconButton>
//                     </Grid>
//                   </Grid>
//                 </Paper>
//               ))}
              
//               <Box mt={3}>
//                 <Button 
//                   variant="outlined" 
//                   onClick={handleAddFeeItem} 
//                   startIcon={<AddCircleIcon />}
//                   sx={{ 
//                     borderRadius: '12px',
//                     textTransform: 'none',
//                     borderWidth: 2,
//                     px: 3,
//                     py: 1,
//                     '&:hover': {
//                       borderWidth: 2,
//                       backgroundColor: 'primary.light'
//                     }
//                   }}
//                 >
//                   Add Fee Item
//                 </Button>
//               </Box>
//             </StyledCard>

//             {/* Payment Plan Section */}
//             <StyledCard 
//               title="Payment Plan Configuration"
//               subtitle="Set up installment frequency and view calculations"
//               icon={<Payment />}
//             >
//               <Grid container spacing={3}>
//                 <Grid item xs={12} md={6}>
//                   <FormControl fullWidth>
//                     <InputLabel>Payment Frequency</InputLabel>
//                     <Select
//                       value={paymentFrequency}
//                       label="Payment Frequency"
//                       onChange={(e) => setPaymentFrequency(Number(e.target.value))}
//                       sx={{
//                         borderRadius: '12px',
//                         backgroundColor: '#f8f9fa',
//                         '&:hover': {
//                           backgroundColor: '#fff',
//                         },
//                       }}
//                     >
//                       <MenuItem value={1}>Annually (1 payment)</MenuItem>
//                       <MenuItem value={2}>Biannually (2 payments)</MenuItem>
//                       <MenuItem value={3}>Trimester (3 payments)</MenuItem>
//                       <MenuItem value={4}>Quarterly (4 payments)</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <Paper 
//                     elevation={0} 
//                     sx={{ 
//                       p: 2, 
//                       borderRadius: '12px',
//                       background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
//                       border: '2px solid',
//                       borderColor: 'primary.light'
//                     }}
//                   >
//                     <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                       <Box>
//                         <Typography variant="caption" color="text.secondary">
//                           Amount Per Installment
//                         </Typography>
//                         <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
//                           ₹{quarterlyTotal.toLocaleString()}
//                         </Typography>
//                       </Box>
//                       <TrendingUp sx={{ fontSize: 40, color: 'primary.light' }} />
//                     </Box>
//                   </Paper>
//                 </Grid>
//               </Grid>

//               {/* Summary Stats */}
//               <Grid container spacing={2} sx={{ mt: 2 }}>
//                 <Grid item xs={6} md={3}>
//                   <Paper 
//                     elevation={0}
//                     sx={{ 
//                       p: 2, 
//                       textAlign: 'center',
//                       borderRadius: '12px',
//                       backgroundColor: '#f8f9fa'
//                     }}
//                   >
//                     <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                       {fees.filter(f => f.name && f.amount > 0).length}
//                     </Typography>
//                     <Typography variant="caption" color="text.secondary">
//                       Fee Items
//                     </Typography>
//                   </Paper>
//                 </Grid>
//                 <Grid item xs={6} md={3}>
//                   <Paper 
//                     elevation={0}
//                     sx={{ 
//                       p: 2, 
//                       textAlign: 'center',
//                       borderRadius: '12px',
//                       backgroundColor: '#f8f9fa'
//                     }}
//                   >
//                     <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                       {paymentFrequency}
//                     </Typography>
//                     <Typography variant="caption" color="text.secondary">
//                       Installments
//                     </Typography>
//                   </Paper>
//                 </Grid>
//                 <Grid item xs={6} md={3}>
//                   <Paper 
//                     elevation={0}
//                     sx={{ 
//                       p: 2, 
//                       textAlign: 'center',
//                       borderRadius: '12px',
//                       backgroundColor: '#e8f5e9'
//                     }}
//                   >
//                     <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main' }}>
//                       ₹{total.toLocaleString()}
//                     </Typography>
//                     <Typography variant="caption" color="text.secondary">
//                       Total Annual
//                     </Typography>
//                   </Paper>
//                 </Grid>
//                 <Grid item xs={6} md={3}>
//                   <Paper 
//                     elevation={0}
//                     sx={{ 
//                       p: 2, 
//                       textAlign: 'center',
//                       borderRadius: '12px',
//                       backgroundColor: '#e3f2fd'
//                     }}
//                   >
//                     <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
//                       ₹{quarterlyTotal.toLocaleString()}
//                     </Typography>
//                     <Typography variant="caption" color="text.secondary">
//                       Per Payment
//                     </Typography>
//                   </Paper>
//                 </Grid>
//               </Grid>
//             </StyledCard>

//             {/* Action Buttons */}
//             <Box 
//               sx={{ 
//                 display: 'flex', 
//                 justifyContent: 'flex-end', 
//                 gap: 2, 
//                 mt: 4,
//                 flexWrap: 'wrap'
//               }}
//             >
//               {mode === 'update' && (
//                 <Button 
//                   variant="outlined" 
//                   color="error" 
//                   onClick={onDelete} 
//                   disabled={loading}
//                   startIcon={<Delete />}
//                   sx={{ 
//                     borderRadius: '12px',
//                     textTransform: 'none',
//                     px: 3,
//                     py: 1.2,
//                     borderWidth: 2,
//                     '&:hover': {
//                       borderWidth: 2,
//                       backgroundColor: 'error.light'
//                     }
//                   }}
//                 >
//                   Delete Structure
//                 </Button>
//               )}
//               <Button 
//                 type="submit" 
//                 variant="contained" 
//                 size="large" 
//                 onClick={mode === 'create' ? handleSave : handleUpdate} 
//                 disabled={loading}
//                 startIcon={mode === 'create' ? <Save /> : <Update />}
//                 sx={{ 
//                   minWidth: '180px',
//                   borderRadius: '12px',
//                   textTransform: 'none',
//                   px: 4,
//                   py: 1.2,
//                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                   boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
//                   '&:hover': {
//                     background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
//                     boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
//                   }
//                 }}
//               >
//                 {loading ? 
//                   (mode === 'create' ? 'Saving...' : 'Updating...') : 
//                   (mode === 'create' ? 'Save Fee Structure' : 'Update Fee Structure')
//                 }
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default DynamicFeeForm;





import React, { useState, useEffect } from 'react';
import {
  TextField, Button, Grid, Box, Typography, Card, CardContent,
  IconButton, Divider, FormControl, InputLabel, Select, MenuItem,
  FormControlLabel, Checkbox, Paper, Chip, Avatar, LinearProgress
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import {
  CalendarMonth, School, AttachMoney, Delete, Save,
  Update, Payment, AccountBalance, Schedule,
  CheckCircle, Error, TrendingUp
} from '@mui/icons-material';

// Move StyledTextField outside the main component
const StyledTextField = ({ ...props }) => (
  <TextField
    {...props}
    variant="outlined"
    sx={{
      '& .MuiOutlinedInput-root': {
        borderRadius: '12px',
        backgroundColor: '#f8f9fa',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: '#fff',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        },
        '&.Mui-focused': {
          backgroundColor: '#fff',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
        },
      },
      ...props.sx
    }}
  />
);

// Move StyledCard outside the main component as well
const StyledCard = ({ children, title, icon, subtitle, ...props }) => (
  <Card 
    elevation={0}
    sx={{ 
      mb: 3,
      borderRadius: '16px',
      background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: '0 6px 30px rgba(0, 0, 0, 0.12)',
      },
      ...props.sx
    }}
  >
    <CardContent sx={{ p: 3 }}>
      {title && (
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          {icon && (
            <Avatar sx={{ 
              bgcolor: 'primary.light', 
              mr: 2,
              width: 48,
              height: 48
            }}>
              {icon}
            </Avatar>
          )}
          <Box>
            <Typography variant="h6" sx={{ 
              fontWeight: 600,
              color: 'text.primary'
            }}>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body2" color="text.secondary">
                {subtitle}
              </Typography>
            )}
          </Box>
        </Box>
      )}
      {children}
    </CardContent>
  </Card>
);

const DynamicFeeForm = ({ 
  onSubmit = () => {}, 
  onUpdate = () => {}, 
  onDelete = () => {}, 
  loading = false, 
  initialData = null 
}) => {
  // State and logic remain unchanged
  const [fees, setFees] = useState([{ name: '', amount: 0, is_quarterly: false }]);
  const [total, setTotal] = useState(0);
  const [quarterlyTotal, setQuarterlyTotal] = useState(0);
  const [paymentFrequency, setPaymentFrequency] = useState(4);
  const [mode, setMode] = useState('create');
  const [academicYear, setAcademicYear] = useState({ start: null, end: null });

  useEffect(() => {
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
    setAcademicYear(prev => ({ ...prev, [type]: date }));
  };
  
  const createPayload = () => ({
    fee_items: fees.filter(item => item.name && item.amount > 0),
    total_fee: total,
    quarterly_fee: quarterlyTotal,
    payment_frequency: paymentFrequency,
    academic_year_start: academicYear.start?.format('YYYY-MM-DD') || null,
    academic_year_end: academicYear.end?.format('YYYY-MM-DD') || null,
  });
  
  const handleSave = () => onSubmit(createPayload());
  const handleUpdate = () => onUpdate(createPayload());

  // Calculate progress
  const filledFees = fees.filter(f => f.name && f.amount > 0).length;
  const progress = fees.length > 0 ? (filledFees / fees.length) * 100 : 0;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ 
        minHeight: '100vh',
        backgroundColor: '#f5f7fa',
        p: { xs: 2, md: 4 }
      }}>
        <Grid container spacing={3}>
          {/* Left Column - Summary Stats */}
          <Grid item xs={12} md={3}>
            {/* Total Summary Card */}
            <StyledCard>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ 
                  bgcolor: 'primary.main', 
                  width: 80, 
                  height: 80, 
                  margin: 'auto',
                  mb: 2
                }}>
                  <AttachMoney sx={{ fontSize: 40 }} />
                </Avatar>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  ₹{total.toLocaleString()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Annual Fee
                </Typography>
              </Box>
            </StyledCard>

            {/* Payment Info Card */}
            <StyledCard>
              <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                Payment Information
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Installments
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {paymentFrequency} per year
                  </Typography>
                </Box>
                <Divider />
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Per Installment
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main' }}>
                    ₹{quarterlyTotal.toLocaleString()}
                  </Typography>
                </Box>
              </Box>
            </StyledCard>

            {/* Progress Card */}
            <StyledCard>
              <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                Form Completion
              </Typography>
              <Box sx={{ mb: 2 }}>
                <LinearProgress 
                  variant="determinate" 
                  value={progress} 
                  sx={{ 
                    height: 8, 
                    borderRadius: 4,
                    backgroundColor: 'grey.200',
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 4,
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    }
                  }}
                />
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                  {filledFees} of {fees.length} items completed
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {academicYear.start && academicYear.end ? 
                    <CheckCircle color="success" fontSize="small" /> : 
                    <Error color="action" fontSize="small" />
                  }
                  <Typography variant="body2">Academic Year</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {filledFees > 0 ? 
                    <CheckCircle color="success" fontSize="small" /> : 
                    <Error color="action" fontSize="small" />
                  }
                  <Typography variant="body2">Fee Items</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CheckCircle color="success" fontSize="small" />
                  <Typography variant="body2">Payment Plan</Typography>
                </Box>
              </Box>
            </StyledCard>
          </Grid>

          {/* Right Column - Main Form */}
          <Grid item xs={12} md={9}>
            {/* Academic Year Section */}
            <StyledCard 
              title="Academic Year"
              subtitle="Define the start and end dates for this fee structure"
              icon={<CalendarMonth />}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <DatePicker
                    label="Academic Year Start"
                    value={academicYear.start}
                    onChange={handleDateChange('start')}
                    slotProps={{ 
                      textField: { 
                        fullWidth: true,
                        sx: {
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            backgroundColor: '#f8f9fa',
                            '&:hover': {
                              backgroundColor: '#fff',
                              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                            },
                            '&.Mui-focused': {
                              backgroundColor: '#fff',
                              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
                            },
                          },
                        }
                      } 
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <DatePicker
                    label="Academic Year End"
                    value={academicYear.end}
                    onChange={handleDateChange('end')}
                    slotProps={{ 
                      textField: { 
                        fullWidth: true,
                        sx: {
                          '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            backgroundColor: '#f8f9fa',
                            '&:hover': {
                              backgroundColor: '#fff',
                              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                            },
                            '&.Mui-focused': {
                              backgroundColor: '#fff',
                              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
                            },
                          },
                        }
                      } 
                    }}
                  />
                </Grid>
              </Grid>
            </StyledCard>

            {/* Fee Items Section */}
            <StyledCard 
              title="Fee Components"
              subtitle="Add individual fee items and mark quarterly payments"
              icon={<AccountBalance />}
            >
              {fees.map((feeItem, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{ 
                    p: 2, 
                    mb: 2,
                    borderRadius: '12px',
                    backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#fff',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={5}>
                      <StyledTextField 
                        fullWidth 
                        label="Fee Name" 
                        placeholder="e.g., Tuition Fee, Lab Fee"
                        name="name" 
                        value={feeItem.name} 
                        onChange={handleFeeItemChange(index, 'name')} 
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <StyledTextField 
                        fullWidth 
                        type="number" 
                        label="Amount (₹)" 
                        name="amount" 
                        value={feeItem.amount} 
                        onChange={handleFeeItemChange(index, 'amount')} 
                        inputProps={{ min: 0 }} 
                      />
                    </Grid>
                    <Grid item xs={6} md={2}>
                      <FormControlLabel 
                        control={
                          <Checkbox 
                            checked={feeItem.is_quarterly} 
                            onChange={handleQuarterlyChange(index)}
                            sx={{ 
                              color: 'primary.main',
                              '&.Mui-checked': {
                                color: 'primary.main',
                              }
                            }}
                          />
                        } 
                        label={
                          <Typography variant="body2">
                            Quarterly
                          </Typography>
                        }
                      />
                    </Grid>
                    <Grid item xs={6} md={1} sx={{ textAlign: 'right' }}>
                      <IconButton 
                        onClick={() => handleRemoveFeeItem(index)} 
                        sx={{ 
                          color: 'error.main',
                          '&:hover': {
                            backgroundColor: 'error.light',
                            transform: 'scale(1.1)'
                          }
                        }}
                      >
                        <RemoveCircleIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Paper>
              ))}
              
              <Box mt={3}>
                <Button 
                  variant="outlined" 
                  onClick={handleAddFeeItem} 
                  startIcon={<AddCircleIcon />}
                  sx={{ 
                    borderRadius: '12px',
                    textTransform: 'none',
                    borderWidth: 2,
                    px: 3,
                    py: 1,
                    '&:hover': {
                      borderWidth: 2,
                      backgroundColor: 'primary.light'
                    }
                  }}
                >
                  Add Fee Item
                </Button>
              </Box>
            </StyledCard>

            {/* Payment Plan Section */}
            <StyledCard 
              title="Payment Plan Configuration"
              subtitle="Set up installment frequency and view calculations"
              icon={<Payment />}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Payment Frequency</InputLabel>
                    <Select
                      value={paymentFrequency}
                      label="Payment Frequency"
                      onChange={(e) => setPaymentFrequency(Number(e.target.value))}
                      sx={{
                        borderRadius: '12px',
                        backgroundColor: '#f8f9fa',
                        '&:hover': {
                          backgroundColor: '#fff',
                        },
                      }}
                    >
                      <MenuItem value={1}>Annually (1 payment)</MenuItem>
                      <MenuItem value={2}>Biannually (2 payments)</MenuItem>
                      <MenuItem value={3}>Trimester (3 payments)</MenuItem>
                      <MenuItem value={4}>Quarterly (4 payments)</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 2, 
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
                      border: '2px solid',
                      borderColor: 'primary.light'
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          Amount Per Installment
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          ₹{quarterlyTotal.toLocaleString()}
                        </Typography>
                      </Box>
                      <TrendingUp sx={{ fontSize: 40, color: 'primary.light' }} />
                    </Box>
                  </Paper>
                </Grid>
              </Grid>

              {/* Summary Stats */}
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={6} md={3}>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 2, 
                      textAlign: 'center',
                      borderRadius: '12px',
                      backgroundColor: '#f8f9fa'
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {fees.filter(f => f.name && f.amount > 0).length}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Fee Items
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 2, 
                      textAlign: 'center',
                      borderRadius: '12px',
                      backgroundColor: '#f8f9fa'
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {paymentFrequency}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Installments
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 2, 
                      textAlign: 'center',
                      borderRadius: '12px',
                      backgroundColor: '#e8f5e9'
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main' }}>
                      ₹{total.toLocaleString()}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Total Annual
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Paper 
                    elevation={0}
                    sx={{ 
                      p: 2, 
                      textAlign: 'center',
                      borderRadius: '12px',
                      backgroundColor: '#e3f2fd'
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                      ₹{quarterlyTotal.toLocaleString()}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Per Payment
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </StyledCard>

            {/* Action Buttons */}
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'flex-end', 
                gap: 2, 
                mt: 4,
                flexWrap: 'wrap'
              }}
            >
              {mode === 'update' && (
                <Button 
                  variant="outlined" 
                  color="error" 
                  onClick={onDelete} 
                  disabled={loading}
                  startIcon={<Delete />}
                  sx={{ 
                    borderRadius: '12px',
                    textTransform: 'none',
                    px: 3,
                    py: 1.2,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      backgroundColor: 'error.light'
                    }
                  }}
                >
                  Delete Structure
                </Button>
              )}
              <Button 
                type="submit" 
                variant="contained" 
                size="large" 
                onClick={mode === 'create' ? handleSave : handleUpdate} 
                disabled={loading}
                startIcon={mode === 'create' ? <Save /> : <Update />}
                sx={{ 
                  minWidth: '180px',
                  borderRadius: '12px',
                  textTransform: 'none',
                  px: 4,
                  py: 1.2,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
                  }
                }}
              >
                {loading ? 
                  (mode === 'create' ? 'Saving...' : 'Updating...') : 
                  (mode === 'create' ? 'Save Fee Structure' : 'Update Fee Structure')
                }
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};

export default DynamicFeeForm;


// import React, { useState, useEffect } from 'react';
// import {
//   TextField, Button, Grid, Box, Typography, Card, CardContent,
//   IconButton, Divider, FormControl, InputLabel, Select, MenuItem,
//   FormControlLabel, Checkbox, Paper, Chip, Avatar, LinearProgress
// } from '@mui/material';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import dayjs from 'dayjs';
// import {
//   CalendarMonth, School, AttachMoney, Delete, Save,
//   Update, Payment, AccountBalance, Schedule,
//   CheckCircle, Error, TrendingUp
// } from '@mui/icons-material';

// const DynamicFeeForm = ({
//   onSubmit = () => { },
//   onUpdate = () => { },
//   onDelete = () => { },
//   loading = false,
//   initialData = null
// }) => {
//   // --- NO CHANGES TO STATE OR LOGIC ---
//   const [fees, setFees] = useState([{ name: '', amount: 0, is_quarterly: false }]);
//   const [total, setTotal] = useState(0);
//   const [quarterlyTotal, setQuarterlyTotal] = useState(0);
//   const [paymentFrequency, setPaymentFrequency] = useState(4);
//   const [mode, setMode] = useState('create');
//   const [academicYear, setAcademicYear] = useState({ start: null, end: null });

//   useEffect(() => {
//     if (initialData && initialData.id) {
//       setMode('update');
//       if (initialData.fee_items && initialData.fee_items.length > 0) {
//         setFees(initialData.fee_items);
//       }
//       if (initialData.academic_year_start) {
//         setAcademicYear(prev => ({ ...prev, start: dayjs(initialData.academic_year_start) }));
//       }
//       if (initialData.academic_year_end) {
//         setAcademicYear(prev => ({ ...prev, end: dayjs(initialData.academic_year_end) }));
//       }
//       if (initialData.payment_frequency) {
//         setPaymentFrequency(initialData.payment_frequency);
//       }
//       if (initialData.quarterly_fee) {
//         setQuarterlyTotal(initialData.quarterly_fee);
//       }
//     } else {
//       setMode('create');
//       setFees([{ name: '', amount: 0, is_quarterly: false }]);
//       setAcademicYear({ start: null, end: null });
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
//     const newFees = [...fees];
//     newFees[index].is_quarterly = e.target.checked;
//     setFees(newFees);
//   };
//   const handleAddFeeItem = () => {
//     setFees([...fees, { name: '', amount: 0, is_quarterly: false }]);
//   };
//   const handleRemoveFeeItem = (index) => {
//     const newFees = fees.filter((_, i) => i !== index);
//     setFees(newFees);
//   };
//   const handleDateChange = (type) => (date) => {
//     setAcademicYear(prev => ({ ...prev, [type]: date }));
//   };
//   const createPayload = () => ({
//     fee_items: fees.filter(item => item.name && item.amount > 0),
//     total_fee: total,
//     quarterly_fee: quarterlyTotal,
//     payment_frequency: paymentFrequency,
//     academic_year_start: academicYear.start?.format('YYYY-MM-DD') || null,
//     academic_year_end: academicYear.end?.format('YYYY-MM-DD') || null,
//   });
//   const handleSave = () => onSubmit(createPayload());
//   const handleUpdate = () => onUpdate(createPayload());
//   // --- END OF UNCHANGED LOGIC ---

//   // Custom styled components
//   const StyledCard = ({ children, title, icon, ...props }) => (
//     <Card
//       elevation={0}
//       sx={{
//         mb: 3,
//         borderRadius: '16px',
//         background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
//         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
//         transition: 'all 0.3s ease',
//         '&:hover': {
//           boxShadow: '0 6px 30px rgba(0, 0, 0, 0.12)',
//         },
//         ...props.sx
//       }}
//     >
//       <CardContent sx={{ p: 3 }}>
//         {title && (
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//             {icon && (
//               <Avatar sx={{
//                 bgcolor: 'primary.light',
//                 mr: 2,
//                 width: 48,
//                 height: 48
//               }}>
//                 {icon}
//               </Avatar>
//             )}
//             <Box>
//               <Typography variant="h6" sx={{
//                 fontWeight: 600,
//                 color: 'text.primary'
//               }}>
//                 {title}
//               </Typography>
//               {props.subtitle && (
//                 <Typography variant="body2" color="text.secondary">
//                   {props.subtitle}
//                 </Typography>
//               )}
//             </Box>
//           </Box>
//         )}
//         {children}
//       </CardContent>
//     </Card>
//   );

//   const StyledTextField = ({ ...props }) => (
//     <TextField
//       {...props}
//       variant="outlined"
//       size="small" // <-- REDUCED HEIGHT
//       sx={{
//         '& .MuiOutlinedInput-root': {
//           borderRadius: '12px',
//           backgroundColor: '#f8f9fa',
//           transition: 'all 0.3s ease',
//           '&:hover': {
//             backgroundColor: '#fff',
//             boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
//           },
//           '&.Mui-focused': {
//             backgroundColor: '#fff',
//             boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
//           },
//         },
//         ...props.sx
//       }}
//     />
//   );

//   // Calculate progress
//   const filledFees = fees.filter(f => f.name && f.amount > 0).length;
//   const progress = fees.length > 0 ? (filledFees / fees.length) * 100 : 0;

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box sx={{
//         minHeight: '100vh',
//         backgroundColor: '#f5f7fa',
//         p: { xs: 2, md: 4 }
//       }}>


//         <Grid container spacing={3}>
//           {/* Left Column - Summary Stats */}
//           <Grid item xs={12} md={3}>
//             {/* Total Summary Card */}
//             <StyledCard>
//               <Box sx={{ textAlign: 'center' }}>
//                 <Avatar sx={{
//                   bgcolor: 'primary.main',
//                   width: 80,
//                   height: 80,
//                   margin: 'auto',
//                   mb: 2
//                 }}>
//                   <AttachMoney sx={{ fontSize: 40 }} />
//                 </Avatar>
//                 <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
//                   ₹{total.toLocaleString()}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Total Annual Fee
//                 </Typography>
//               </Box>
//             </StyledCard>

//             {/* Payment Info Card */}
//             <StyledCard>
//               <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
//                 Payment Information
//               </Typography>
//               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//                 <Box>
//                   <Typography variant="caption" color="text.secondary">
//                     Installments
//                   </Typography>
//                   <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                     {paymentFrequency} per year
//                   </Typography>
//                 </Box>
//                 <Divider />
//                 <Box>
//                   <Typography variant="caption" color="text.secondary">
//                     Per Installment
//                   </Typography>
//                   <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main' }}>
//                     ₹{quarterlyTotal.toLocaleString()}
//                   </Typography>
//                 </Box>
//               </Box>
//             </StyledCard>

//             {/* Progress Card */}
//             <StyledCard>
//               <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
//                 Form Completion
//               </Typography>
//               <Box sx={{ mb: 2 }}>
//                 <LinearProgress
//                   variant="determinate"
//                   value={progress}
//                   sx={{
//                     height: 8,
//                     borderRadius: 4,
//                     backgroundColor: 'grey.200',
//                     '& .MuiLinearProgress-bar': {
//                       borderRadius: 4,
//                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                     }
//                   }}
//                 />
//                 <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
//                   {filledFees} of {fees.length} items completed
//                 </Typography>
//               </Box>
//               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   {academicYear.start && academicYear.end ?
//                     <CheckCircle color="success" fontSize="small" /> :
//                     <Error color="action" fontSize="small" />
//                   }
//                   <Typography variant="body2">Academic Year</Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   {filledFees > 0 ?
//                     <CheckCircle color="success" fontSize="small" /> :
//                     <Error color="action" fontSize="small" />
//                   }
//                   <Typography variant="body2">Fee Items</Typography>
//                 </Box>
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                   <CheckCircle color="success" fontSize="small" />
//                   <Typography variant="body2">Payment Plan</Typography>
//                 </Box>
//               </Box>
//             </StyledCard>
//           </Grid>

//           {/* Right Column - Main Form */}
//           <Grid item xs={12} md={9}>
//             {/* Academic Year Section */}
//             <StyledCard
//               title="Academic Year"
//               subtitle="Define the start and end dates for this fee structure"
//               icon={<CalendarMonth />}
//             >
//               <Grid container spacing={3}>
//                 <Grid item xs={12} md={6}>
//                   <DatePicker
//                     label="Academic Year Start"
//                     value={academicYear.start}
//                     onChange={handleDateChange('start')}
//                     slotProps={{
//                       textField: {
//                         fullWidth: true,
//                         size: 'small', // <-- REDUCED HEIGHT
//                         sx: {
//                           '& .MuiOutlinedInput-root': {
//                             borderRadius: '12px',
//                             backgroundColor: '#f8f9fa',
//                             '&:hover': {
//                               backgroundColor: '#fff',
//                               boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
//                             },
//                             '&.Mui-focused': {
//                               backgroundColor: '#fff',
//                               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
//                             },
//                           },
//                         }
//                       }
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <DatePicker
//                     label="Academic Year End"
//                     value={academicYear.end}
//                     onChange={handleDateChange('end')}
//                     slotProps={{
//                       textField: {
//                         fullWidth: true,
//                         size: 'small', // <-- REDUCED HEIGHT
//                         sx: {
//                           '& .MuiOutlinedInput-root': {
//                             borderRadius: '12px',
//                             backgroundColor: '#f8f9fa',
//                             '&:hover': {
//                               backgroundColor: '#fff',
//                               boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
//                             },
//                             '&.Mui-focused': {
//                               backgroundColor: '#fff',
//                               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
//                             },
//                           },
//                         }
//                       }
//                     }}
//                   />
//                 </Grid>
//               </Grid>
//             </StyledCard>

//             {/* Fee Items Section */}
//             <StyledCard
//               title="Fee Components"
//               subtitle="Add individual fee items and mark quarterly payments"
//               icon={<AccountBalance />}
//             >
//               {fees.map((feeItem, index) => (
//                 <Paper
//                   key={index}
//                   elevation={0}
//                   sx={{
//                     p: 2,
//                     mb: 2,
//                     borderRadius: '12px',
//                     backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#fff',
//                     border: '1px solid',
//                     borderColor: 'divider',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                       boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
//                       transform: 'translateY(-2px)'
//                     }
//                   }}
//                 >
//                   <Grid container spacing={2} alignItems="center">
//                     <Grid item xs={12} md={5}>
//                       <StyledTextField
//                         fullWidth
//                         label="Fee Name"
//                         placeholder="e.g., Tuition Fee, Lab Fee"
//                         name="name"
//                         value={feeItem.name}
//                         onChange={handleFeeItemChange(index, 'name')}
//                       />
//                     </Grid>
//                     <Grid item xs={12} md={4}>
//                       <StyledTextField
//                         fullWidth
//                         type="number"
//                         label="Amount (₹)"
//                         name="amount"
//                         value={feeItem.amount}
//                         onChange={handleFeeItemChange(index, 'amount')}
//                         inputProps={{ min: 0 }}
//                       />
//                     </Grid>
//                     <Grid item xs={6} md={2}>
//                       <FormControlLabel
//                         control={
//                           <Checkbox
//                             checked={feeItem.is_quarterly}
//                             onChange={handleQuarterlyChange(index)}
//                             sx={{
//                               color: 'primary.main',
//                               '&.Mui-checked': {
//                                 color: 'primary.main',
//                               }
//                             }}
//                           />
//                         }
//                         label={
//                           <Typography variant="body2">
//                             Quarterly
//                           </Typography>
//                         }
//                       />
//                     </Grid>
//                     <Grid item xs={6} md={1} sx={{ textAlign: 'right' }}>
//                       <IconButton
//                         onClick={() => handleRemoveFeeItem(index)}
//                         sx={{
//                           color: 'error.main',
//                           '&:hover': {
//                             backgroundColor: 'error.light',
//                             transform: 'scale(1.1)'
//                           }
//                         }}
//                       >
//                         <RemoveCircleIcon />
//                       </IconButton>
//                     </Grid>
//                   </Grid>
//                 </Paper>
//               ))}

//               <Box mt={3}>
//                 <Button
//                   variant="outlined"
//                   onClick={handleAddFeeItem}
//                   startIcon={<AddCircleIcon />}
//                   sx={{
//                     borderRadius: '12px',
//                     textTransform: 'none',
//                     borderWidth: 2,
//                     px: 3,
//                     py: 1,
//                     '&:hover': {
//                       borderWidth: 2,
//                       backgroundColor: 'primary.light'
//                     }
//                   }}
//                 >
//                   Add Fee Item
//                 </Button>
//               </Box>
//             </StyledCard>

//             {/* Payment Plan Section */}
//             <StyledCard
//               title="Payment Plan Configuration"
//               subtitle="Set up installment frequency and view calculations"
//               icon={<Payment />}
//             >
//               <Grid container spacing={3}>
//                 <Grid item xs={12} md={6}>
//                   <FormControl fullWidth size="small"> {/* <-- REDUCED HEIGHT */}
//                     <InputLabel>Payment Frequency</InputLabel>
//                     <Select
//                       value={paymentFrequency}
//                       label="Payment Frequency"
//                       onChange={(e) => setPaymentFrequency(Number(e.target.value))}
//                       sx={{
//                         borderRadius: '12px',
//                         backgroundColor: '#f8f9fa',
//                         '&:hover': {
//                           backgroundColor: '#fff',
//                         },
//                       }}
//                     >
//                       <MenuItem value={1}>Annually (1 payment)</MenuItem>
//                       <MenuItem value={2}>Biannually (2 payments)</MenuItem>
//                       <MenuItem value={3}>Trimester (3 payments)</MenuItem>
//                       <MenuItem value={4}>Quarterly (4 payments)</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <Paper
//                     elevation={0}
//                     sx={{
//                       p: 2,
//                       borderRadius: '12px',
//                       background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
//                       border: '2px solid',
//                       borderColor: 'primary.light'
//                     }}
//                   >
//                     <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//                       <Box>
//                         <Typography variant="caption" color="text.secondary">
//                           Amount Per Installment
//                         </Typography>
//                         <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
//                           ₹{quarterlyTotal.toLocaleString()}
//                         </Typography>
//                       </Box>
//                       <TrendingUp sx={{ fontSize: 40, color: 'primary.light' }} />
//                     </Box>
//                   </Paper>
//                 </Grid>
//               </Grid>

//               {/* Summary Stats */}
//               <Grid container spacing={2} sx={{ mt: 2 }}>
//                 <Grid item xs={6} md={3}>
//                   <Paper
//                     elevation={0}
//                     sx={{
//                       p: 2,
//                       textAlign: 'center',
//                       borderRadius: '12px',
//                       backgroundColor: '#f8f9fa'
//                     }}
//                   >
//                     <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                       {fees.filter(f => f.name && f.amount > 0).length}
//                     </Typography>
//                     <Typography variant="caption" color="text.secondary">
//                       Fee Items
//                     </Typography>
//                   </Paper>
//                 </Grid>
//                 <Grid item xs={6} md={3}>
//                   <Paper
//                     elevation={0}
//                     sx={{
//                       p: 2,
//                       textAlign: 'center',
//                       borderRadius: '12px',
//                       backgroundColor: '#f8f9fa'
//                     }}
//                   >
//                     <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                       {paymentFrequency}
//                     </Typography>
//                     <Typography variant="caption" color="text.secondary">
//                       Installments
//                     </Typography>
//                   </Paper>
//                 </Grid>
//                 <Grid item xs={6} md={3}>
//                   <Paper
//                     elevation={0}
//                     sx={{
//                       p: 2,
//                       textAlign: 'center',
//                       borderRadius: '12px',
//                       backgroundColor: '#e8f5e9'
//                     }}
//                   >
//                     <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main' }}>
//                       ₹{total.toLocaleString()}
//                     </Typography>
//                     <Typography variant="caption" color="text.secondary">
//                       Total Annual
//                     </Typography>
//                   </Paper>
//                 </Grid>
//                 <Grid item xs={6} md={3}>
//                   <Paper
//                     elevation={0}
//                     sx={{
//                       p: 2,
//                       textAlign: 'center',
//                       borderRadius: '12px',
//                       backgroundColor: '#e3f2fd'
//                     }}
//                   >
//                     <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
//                       ₹{quarterlyTotal.toLocaleString()}
//                     </Typography>
//                     <Typography variant="caption" color="text.secondary">
//                       Per Payment
//                     </Typography>
//                   </Paper>
//                 </Grid>
//               </Grid>
//             </StyledCard>

//             {/* Action Buttons */}
//             <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'flex-end',
//                 gap: 2,
//                 mt: 4,
//                 flexWrap: 'wrap'
//               }}
//             >
//               {mode === 'update' && (
//                 <Button
//                   variant="outlined"
//                   color="error"
//                   onClick={onDelete}
//                   disabled={loading}
//                   startIcon={<Delete />}
//                   sx={{
//                     borderRadius: '12px',
//                     textTransform: 'none',
//                     px: 3,
//                     py: 1.2,
//                     borderWidth: 2,
//                     '&:hover': {
//                       borderWidth: 2,
//                       backgroundColor: 'error.light'
//                     }
//                   }}
//                 >
//                   Delete Structure
//                 </Button>
//               )}
//               <Button
//                 type="submit"
//                 variant="contained"
//                 size="large"
//                 onClick={mode === 'create' ? handleSave : handleUpdate}
//                 disabled={loading}
//                 startIcon={mode === 'create' ? <Save /> : <Update />}
//                 sx={{
//                   minWidth: '180px',
//                   borderRadius: '12px',
//                   textTransform: 'none',
//                   px: 4,
//                   py: 1.2,
//                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                   boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
//                   '&:hover': {
//                     background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
//                     boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
//                   }
//                 }}
//               >
//                 {loading ?
//                   (mode === 'create' ? 'Saving...' : 'Updating...') :
//                   (mode === 'create' ? 'Save Fee Structure' : 'Update Fee Structure')
//                 }
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </LocalizationProvider>
//   );
// };

// export default DynamicFeeForm;