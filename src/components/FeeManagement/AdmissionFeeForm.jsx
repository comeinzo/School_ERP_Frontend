// // // // // import React, { useState, useEffect } from 'react';
// // // // // import {
// // // // //   TextField, Button, Grid, Box, Typography, Card, CardContent,
// // // // //   IconButton, Divider, FormControl, InputLabel, Select, MenuItem,
// // // // //   FormControlLabel, Checkbox, Paper, Chip, Avatar, LinearProgress
// // // // // } from '@mui/material';
// // // // // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // // // // import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// // // // // import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// // // // // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // // // // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // // // // import dayjs from 'dayjs';
// // // // // import {
// // // // //   CalendarMonth, School, AttachMoney, Delete, Save,
// // // // //   Update, Payment, AccountBalance, Schedule,
// // // // //   CheckCircle, Error, TrendingUp
// // // // // } from '@mui/icons-material';

// // // // // // Move StyledTextField outside the main component
// // // // // const StyledTextField = ({ ...props }) => (
// // // // //   <TextField
// // // // //     {...props}
// // // // //     variant="outlined"
// // // // //     sx={{
// // // // //       '& .MuiOutlinedInput-root': {
// // // // //         borderRadius: '12px',
// // // // //         backgroundColor: '#f8f9fa',
// // // // //         transition: 'all 0.3s ease',
// // // // //         '&:hover': {
// // // // //           backgroundColor: '#fff',
// // // // //           boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// // // // //         },
// // // // //         '&.Mui-focused': {
// // // // //           backgroundColor: '#fff',
// // // // //           boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
// // // // //         },
// // // // //       },
// // // // //       ...props.sx
// // // // //     }}
// // // // //   />
// // // // // );

// // // // // // Move StyledCard outside the main component as well
// // // // // const StyledCard = ({ children, title, icon, subtitle, ...props }) => (
// // // // //   <Card 
// // // // //     elevation={0}
// // // // //     sx={{ 
// // // // //       mb: 3,
// // // // //       borderRadius: '16px',
// // // // //       background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
// // // // //       boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// // // // //       transition: 'all 0.3s ease',
// // // // //       '&:hover': {
// // // // //         boxShadow: '0 6px 30px rgba(0, 0, 0, 0.12)',
// // // // //       },
// // // // //       ...props.sx
// // // // //     }}
// // // // //   >
// // // // //     <CardContent sx={{ p: 3 }}>
// // // // //       {title && (
// // // // //         <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
// // // // //           {icon && (
// // // // //             <Avatar sx={{ 
// // // // //               bgcolor: 'primary.light', 
// // // // //               mr: 2,
// // // // //               width: 48,
// // // // //               height: 48
// // // // //             }}>
// // // // //               {icon}
// // // // //             </Avatar>
// // // // //           )}
// // // // //           <Box>
// // // // //             <Typography variant="h6" sx={{ 
// // // // //               fontWeight: 600,
// // // // //               color: 'text.primary'
// // // // //             }}>
// // // // //               {title}
// // // // //             </Typography>
// // // // //             {subtitle && (
// // // // //               <Typography variant="body2" color="text.secondary">
// // // // //                 {subtitle}
// // // // //               </Typography>
// // // // //             )}
// // // // //           </Box>
// // // // //         </Box>
// // // // //       )}
// // // // //       {children}
// // // // //     </CardContent>
// // // // //   </Card>
// // // // // );

// // // // // const DynamicFeeForm = ({ 
// // // // //   onSubmit = () => {}, 
// // // // //   onUpdate = () => {}, 
// // // // //   onDelete = () => {}, 
// // // // //   loading = false, 
// // // // //   initialData = null 
// // // // // }) => {
// // // // //   // State and logic remain unchanged
// // // // //   const [fees, setFees] = useState([{ name: '', amount: 0, is_quarterly: false }]);
// // // // //   const [total, setTotal] = useState(0);
// // // // //   const [quarterlyTotal, setQuarterlyTotal] = useState(0);
// // // // //   const [paymentFrequency, setPaymentFrequency] = useState(4);
// // // // //   const [mode, setMode] = useState('create');
// // // // //   const [academicYear, setAcademicYear] = useState({ start: null, end: null });

// // // // //   useEffect(() => {
// // // // //     if (initialData && initialData.id) {
// // // // //       setMode('update');
// // // // //       if (initialData.fee_items && initialData.fee_items.length > 0) {
// // // // //         setFees(initialData.fee_items);
// // // // //       }
// // // // //       if (initialData.academic_year_start) {
// // // // //         setAcademicYear(prev => ({ ...prev, start: dayjs(initialData.academic_year_start) }));
// // // // //       }
// // // // //       if (initialData.academic_year_end) {
// // // // //         setAcademicYear(prev => ({ ...prev, end: dayjs(initialData.academic_year_end) }));
// // // // //       }
// // // // //       if (initialData.payment_frequency) {
// // // // //         setPaymentFrequency(initialData.payment_frequency);
// // // // //       }
// // // // //       if (initialData.quarterly_fee) {
// // // // //         setQuarterlyTotal(initialData.quarterly_fee);
// // // // //       }
// // // // //     } else {
// // // // //       setMode('create');
// // // // //       setFees([{ name: '', amount: 0, is_quarterly: false }]);
// // // // //       setAcademicYear({ start: null, end: null });
// // // // //     }
// // // // //   }, [initialData]);

// // // // //   useEffect(() => {
// // // // //     const totalAmount = fees.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
// // // // //     setTotal(totalAmount);
// // // // //     const quarterlyFeesSum = fees.reduce((sum, item) => sum + (item.is_quarterly ? Number(item.amount) : 0), 0);
// // // // //     setQuarterlyTotal(Math.round(quarterlyFeesSum / paymentFrequency) || 0);
// // // // //   }, [fees, paymentFrequency]);

// // // // //   const handleFeeItemChange = (index, field) => (e) => {
// // // // //     const newFees = [...fees];
// // // // //     newFees[index][field] = e.target.value;
// // // // //     setFees(newFees);
// // // // //   };
  
// // // // //   const handleQuarterlyChange = (index) => (e) => {
// // // // //     const newFees = [...fees];
// // // // //     newFees[index].is_quarterly = e.target.checked;
// // // // //     setFees(newFees);
// // // // //   };
  
// // // // //   const handleAddFeeItem = () => {
// // // // //     setFees([...fees, { name: '', amount: 0, is_quarterly: false }]);
// // // // //   };
  
// // // // //   const handleRemoveFeeItem = (index) => {
// // // // //     const newFees = fees.filter((_, i) => i !== index);
// // // // //     setFees(newFees);
// // // // //   };
  
// // // // //   const handleDateChange = (type) => (date) => {
// // // // //     setAcademicYear(prev => ({ ...prev, [type]: date }));
// // // // //   };
  
// // // // //   const createPayload = () => ({
// // // // //     fee_items: fees.filter(item => item.name && item.amount > 0),
// // // // //     total_fee: total,
// // // // //     quarterly_fee: quarterlyTotal,
// // // // //     payment_frequency: paymentFrequency,
// // // // //     academic_year_start: academicYear.start?.format('YYYY-MM-DD') || null,
// // // // //     academic_year_end: academicYear.end?.format('YYYY-MM-DD') || null,
// // // // //   });
  
// // // // //   const handleSave = () => onSubmit(createPayload());
// // // // //   const handleUpdate = () => onUpdate(createPayload());

// // // // //   // Calculate progress
// // // // //   const filledFees = fees.filter(f => f.name && f.amount > 0).length;
// // // // //   const progress = fees.length > 0 ? (filledFees / fees.length) * 100 : 0;

// // // // //   return (
// // // // //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// // // // //       <Box sx={{ 
// // // // //         minHeight: '100vh',
// // // // //         backgroundColor: '#f5f7fa',
// // // // //         p: { xs: 2, md: 4 }
// // // // //       }}>
// // // // //         <Grid container spacing={3}>
// // // // //           {/* Left Column - Summary Stats */}
// // // // //           <Grid item xs={12} md={3}>
// // // // //             {/* Total Summary Card */}
// // // // //             <StyledCard>
// // // // //               <Box sx={{ textAlign: 'center' }}>
// // // // //                 <Avatar sx={{ 
// // // // //                   bgcolor: 'primary.main', 
// // // // //                   width: 80, 
// // // // //                   height: 80, 
// // // // //                   margin: 'auto',
// // // // //                   mb: 2
// // // // //                 }}>
// // // // //                   <AttachMoney sx={{ fontSize: 40 }} />
// // // // //                 </Avatar>
// // // // //                 <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
// // // // //                   ₹{total.toLocaleString()}
// // // // //                 </Typography>
// // // // //                 <Typography variant="body2" color="text.secondary">
// // // // //                   Total Annual Fee
// // // // //                 </Typography>
// // // // //               </Box>
// // // // //             </StyledCard>

// // // // //             {/* Payment Info Card */}
// // // // //             <StyledCard>
// // // // //               <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
// // // // //                 Payment Information
// // // // //               </Typography>
// // // // //               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
// // // // //                 <Box>
// // // // //                   <Typography variant="caption" color="text.secondary">
// // // // //                     Installments
// // // // //                   </Typography>
// // // // //                   <Typography variant="h6" sx={{ fontWeight: 600 }}>
// // // // //                     {paymentFrequency} per year
// // // // //                   </Typography>
// // // // //                 </Box>
// // // // //                 <Divider />
// // // // //                 <Box>
// // // // //                   <Typography variant="caption" color="text.secondary">
// // // // //                     Per Installment
// // // // //                   </Typography>
// // // // //                   <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main' }}>
// // // // //                     ₹{quarterlyTotal.toLocaleString()}
// // // // //                   </Typography>
// // // // //                 </Box>
// // // // //               </Box>
// // // // //             </StyledCard>

// // // // //             {/* Progress Card */}
// // // // //             <StyledCard>
// // // // //               <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
// // // // //                 Form Completion
// // // // //               </Typography>
// // // // //               <Box sx={{ mb: 2 }}>
// // // // //                 <LinearProgress 
// // // // //                   variant="determinate" 
// // // // //                   value={progress} 
// // // // //                   sx={{ 
// // // // //                     height: 8, 
// // // // //                     borderRadius: 4,
// // // // //                     backgroundColor: 'grey.200',
// // // // //                     '& .MuiLinearProgress-bar': {
// // // // //                       borderRadius: 4,
// // // // //                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // // // //                     }
// // // // //                   }}
// // // // //                 />
// // // // //                 <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
// // // // //                   {filledFees} of {fees.length} items completed
// // // // //                 </Typography>
// // // // //               </Box>
// // // // //               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
// // // // //                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// // // // //                   {academicYear.start && academicYear.end ? 
// // // // //                     <CheckCircle color="success" fontSize="small" /> : 
// // // // //                     <Error color="action" fontSize="small" />
// // // // //                   }
// // // // //                   <Typography variant="body2">Academic Year</Typography>
// // // // //                 </Box>
// // // // //                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// // // // //                   {filledFees > 0 ? 
// // // // //                     <CheckCircle color="success" fontSize="small" /> : 
// // // // //                     <Error color="action" fontSize="small" />
// // // // //                   }
// // // // //                   <Typography variant="body2">Fee Items</Typography>
// // // // //                 </Box>
// // // // //                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// // // // //                   <CheckCircle color="success" fontSize="small" />
// // // // //                   <Typography variant="body2">Payment Plan</Typography>
// // // // //                 </Box>
// // // // //               </Box>
// // // // //             </StyledCard>
// // // // //           </Grid>

// // // // //           {/* Right Column - Main Form */}
// // // // //           <Grid item xs={12} md={9}>
// // // // //             {/* Academic Year Section */}
// // // // //             <StyledCard 
// // // // //               title="Academic Year"
// // // // //               subtitle="Define the start and end dates for this fee structure"
// // // // //               icon={<CalendarMonth />}
// // // // //             >
// // // // //               <Grid container spacing={3}>
// // // // //                 <Grid item xs={12} md={6}>
// // // // //                   <DatePicker
// // // // //                     label="Academic Year Start"
// // // // //                     value={academicYear.start}
// // // // //                     onChange={handleDateChange('start')}
// // // // //                     slotProps={{ 
// // // // //                       textField: { 
// // // // //                         fullWidth: true,
// // // // //                         sx: {
// // // // //                           '& .MuiOutlinedInput-root': {
// // // // //                             borderRadius: '12px',
// // // // //                             backgroundColor: '#f8f9fa',
// // // // //                             '&:hover': {
// // // // //                               backgroundColor: '#fff',
// // // // //                               boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// // // // //                             },
// // // // //                             '&.Mui-focused': {
// // // // //                               backgroundColor: '#fff',
// // // // //                               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
// // // // //                             },
// // // // //                           },
// // // // //                         }
// // // // //                       } 
// // // // //                     }}
// // // // //                   />
// // // // //                 </Grid>
// // // // //                 <Grid item xs={12} md={6}>
// // // // //                   <DatePicker
// // // // //                     label="Academic Year End"
// // // // //                     value={academicYear.end}
// // // // //                     onChange={handleDateChange('end')}
// // // // //                     slotProps={{ 
// // // // //                       textField: { 
// // // // //                         fullWidth: true,
// // // // //                         sx: {
// // // // //                           '& .MuiOutlinedInput-root': {
// // // // //                             borderRadius: '12px',
// // // // //                             backgroundColor: '#f8f9fa',
// // // // //                             '&:hover': {
// // // // //                               backgroundColor: '#fff',
// // // // //                               boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// // // // //                             },
// // // // //                             '&.Mui-focused': {
// // // // //                               backgroundColor: '#fff',
// // // // //                               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
// // // // //                             },
// // // // //                           },
// // // // //                         }
// // // // //                       } 
// // // // //                     }}
// // // // //                   />
// // // // //                 </Grid>
// // // // //               </Grid>
// // // // //             </StyledCard>

// // // // //             {/* Fee Items Section */}
// // // // //             <StyledCard 
// // // // //               title="Fee Components"
// // // // //               subtitle="Add individual fee items and mark quarterly payments"
// // // // //               icon={<AccountBalance />}
// // // // //             >
// // // // //               {fees.map((feeItem, index) => (
// // // // //                 <Paper
// // // // //                   key={index}
// // // // //                   elevation={0}
// // // // //                   sx={{ 
// // // // //                     p: 2, 
// // // // //                     mb: 2,
// // // // //                     borderRadius: '12px',
// // // // //                     backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#fff',
// // // // //                     border: '1px solid',
// // // // //                     borderColor: 'divider',
// // // // //                     transition: 'all 0.3s ease',
// // // // //                     '&:hover': {
// // // // //                       boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// // // // //                       transform: 'translateY(-2px)'
// // // // //                     }
// // // // //                   }}
// // // // //                 >
// // // // //                   <Grid container spacing={2} alignItems="center">
// // // // //                     <Grid item xs={12} md={5}>
// // // // //                       <StyledTextField 
// // // // //                         fullWidth 
// // // // //                         label="Fee Name" 
// // // // //                         placeholder="e.g., Tuition Fee, Lab Fee"
// // // // //                         name="name" 
// // // // //                         value={feeItem.name} 
// // // // //                         onChange={handleFeeItemChange(index, 'name')} 
// // // // //                       />
// // // // //                     </Grid>
// // // // //                     <Grid item xs={12} md={4}>
// // // // //                       <StyledTextField 
// // // // //                         fullWidth 
// // // // //                         type="number" 
// // // // //                         label="Amount (₹)" 
// // // // //                         name="amount" 
// // // // //                         value={feeItem.amount} 
// // // // //                         onChange={handleFeeItemChange(index, 'amount')} 
// // // // //                         inputProps={{ min: 0 }} 
// // // // //                       />
// // // // //                     </Grid>
// // // // //                     <Grid item xs={6} md={2}>
// // // // //                       <FormControlLabel 
// // // // //                         control={
// // // // //                           <Checkbox 
// // // // //                             checked={feeItem.is_quarterly} 
// // // // //                             onChange={handleQuarterlyChange(index)}
// // // // //                             sx={{ 
// // // // //                               color: 'primary.main',
// // // // //                               '&.Mui-checked': {
// // // // //                                 color: 'primary.main',
// // // // //                               }
// // // // //                             }}
// // // // //                           />
// // // // //                         } 
// // // // //                         label={
// // // // //                           <Typography variant="body2">
// // // // //                             Quarterly
// // // // //                           </Typography>
// // // // //                         }
// // // // //                       />
// // // // //                     </Grid>
// // // // //                     <Grid item xs={6} md={1} sx={{ textAlign: 'right' }}>
// // // // //                       <IconButton 
// // // // //                         onClick={() => handleRemoveFeeItem(index)} 
// // // // //                         sx={{ 
// // // // //                           color: 'error.main',
// // // // //                           '&:hover': {
// // // // //                             backgroundColor: 'error.light',
// // // // //                             transform: 'scale(1.1)'
// // // // //                           }
// // // // //                         }}
// // // // //                       >
// // // // //                         <RemoveCircleIcon />
// // // // //                       </IconButton>
// // // // //                     </Grid>
// // // // //                   </Grid>
// // // // //                 </Paper>
// // // // //               ))}
              
// // // // //               <Box mt={3}>
// // // // //                 <Button 
// // // // //                   variant="outlined" 
// // // // //                   onClick={handleAddFeeItem} 
// // // // //                   startIcon={<AddCircleIcon />}
// // // // //                   sx={{ 
// // // // //                     borderRadius: '12px',
// // // // //                     textTransform: 'none',
// // // // //                     borderWidth: 2,
// // // // //                     px: 3,
// // // // //                     py: 1,
// // // // //                     '&:hover': {
// // // // //                       borderWidth: 2,
// // // // //                       backgroundColor: 'primary.light'
// // // // //                     }
// // // // //                   }}
// // // // //                 >
// // // // //                   Add Fee Item
// // // // //                 </Button>
// // // // //               </Box>
// // // // //             </StyledCard>

// // // // //             {/* Payment Plan Section */}
// // // // //             <StyledCard 
// // // // //               title="Payment Plan Configuration"
// // // // //               subtitle="Set up installment frequency and view calculations"
// // // // //               icon={<Payment />}
// // // // //             >
// // // // //               <Grid container spacing={3}>
// // // // //                 <Grid item xs={12} md={6}>
// // // // //                   <FormControl fullWidth>
// // // // //                     <InputLabel>Payment Frequency</InputLabel>
// // // // //                     <Select
// // // // //                       value={paymentFrequency}
// // // // //                       label="Payment Frequency"
// // // // //                       onChange={(e) => setPaymentFrequency(Number(e.target.value))}
// // // // //                       sx={{
// // // // //                         borderRadius: '12px',
// // // // //                         backgroundColor: '#f8f9fa',
// // // // //                         '&:hover': {
// // // // //                           backgroundColor: '#fff',
// // // // //                         },
// // // // //                       }}
// // // // //                     >
// // // // //                       <MenuItem value={1}>Annually (1 payment)</MenuItem>
// // // // //                       <MenuItem value={2}>Biannually (2 payments)</MenuItem>
// // // // //                       <MenuItem value={3}>Trimester (3 payments)</MenuItem>
// // // // //                       <MenuItem value={4}>Quarterly (4 payments)</MenuItem>
// // // // //                     </Select>
// // // // //                   </FormControl>
// // // // //                 </Grid>
// // // // //                 <Grid item xs={12} md={6}>
// // // // //                   <Paper 
// // // // //                     elevation={0} 
// // // // //                     sx={{ 
// // // // //                       p: 2, 
// // // // //                       borderRadius: '12px',
// // // // //                       background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
// // // // //                       border: '2px solid',
// // // // //                       borderColor: 'primary.light'
// // // // //                     }}
// // // // //                   >
// // // // //                     <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
// // // // //                       <Box>
// // // // //                         <Typography variant="caption" color="text.secondary">
// // // // //                           Amount Per Installment
// // // // //                         </Typography>
// // // // //                         <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.main' }}>
// // // // //                           ₹{quarterlyTotal.toLocaleString()}
// // // // //                         </Typography>
// // // // //                       </Box>
// // // // //                       <TrendingUp sx={{ fontSize: 40, color: 'primary.light' }} />
// // // // //                     </Box>
// // // // //                   </Paper>
// // // // //                 </Grid>
// // // // //               </Grid>

// // // // //               {/* Summary Stats */}
// // // // //               <Grid container spacing={2} sx={{ mt: 2 }}>
// // // // //                 <Grid item xs={6} md={3}>
// // // // //                   <Paper 
// // // // //                     elevation={0}
// // // // //                     sx={{ 
// // // // //                       p: 2, 
// // // // //                       textAlign: 'center',
// // // // //                       borderRadius: '12px',
// // // // //                       backgroundColor: '#f8f9fa'
// // // // //                     }}
// // // // //                   >
// // // // //                     <Typography variant="h6" sx={{ fontWeight: 600 }}>
// // // // //                       {fees.filter(f => f.name && f.amount > 0).length}
// // // // //                     </Typography>
// // // // //                     <Typography variant="caption" color="text.secondary">
// // // // //                       Fee Items
// // // // //                     </Typography>
// // // // //                   </Paper>
// // // // //                 </Grid>
// // // // //                 <Grid item xs={6} md={3}>
// // // // //                   <Paper 
// // // // //                     elevation={0}
// // // // //                     sx={{ 
// // // // //                       p: 2, 
// // // // //                       textAlign: 'center',
// // // // //                       borderRadius: '12px',
// // // // //                       backgroundColor: '#f8f9fa'
// // // // //                     }}
// // // // //                   >
// // // // //                     <Typography variant="h6" sx={{ fontWeight: 600 }}>
// // // // //                       {paymentFrequency}
// // // // //                     </Typography>
// // // // //                     <Typography variant="caption" color="text.secondary">
// // // // //                       Installments
// // // // //                     </Typography>
// // // // //                   </Paper>
// // // // //                 </Grid>
// // // // //                 <Grid item xs={6} md={3}>
// // // // //                   <Paper 
// // // // //                     elevation={0}
// // // // //                     sx={{ 
// // // // //                       p: 2, 
// // // // //                       textAlign: 'center',
// // // // //                       borderRadius: '12px',
// // // // //                       backgroundColor: '#e8f5e9'
// // // // //                     }}
// // // // //                   >
// // // // //                     <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main' }}>
// // // // //                       ₹{total.toLocaleString()}
// // // // //                     </Typography>
// // // // //                     <Typography variant="caption" color="text.secondary">
// // // // //                       Total Annual
// // // // //                     </Typography>
// // // // //                   </Paper>
// // // // //                 </Grid>
// // // // //                 <Grid item xs={6} md={3}>
// // // // //                   <Paper 
// // // // //                     elevation={0}
// // // // //                     sx={{ 
// // // // //                       p: 2, 
// // // // //                       textAlign: 'center',
// // // // //                       borderRadius: '12px',
// // // // //                       backgroundColor: '#e3f2fd'
// // // // //                     }}
// // // // //                   >
// // // // //                     <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
// // // // //                       ₹{quarterlyTotal.toLocaleString()}
// // // // //                     </Typography>
// // // // //                     <Typography variant="caption" color="text.secondary">
// // // // //                       Per Payment
// // // // //                     </Typography>
// // // // //                   </Paper>
// // // // //                 </Grid>
// // // // //               </Grid>
// // // // //             </StyledCard>

// // // // //             {/* Action Buttons */}
// // // // //             <Box 
// // // // //               sx={{ 
// // // // //                 display: 'flex', 
// // // // //                 justifyContent: 'flex-end', 
// // // // //                 gap: 2, 
// // // // //                 mt: 4,
// // // // //                 flexWrap: 'wrap'
// // // // //               }}
// // // // //             >
// // // // //               {mode === 'update' && (
// // // // //                 <Button 
// // // // //                   variant="outlined" 
// // // // //                   color="error" 
// // // // //                   onClick={onDelete} 
// // // // //                   disabled={loading}
// // // // //                   startIcon={<Delete />}
// // // // //                   sx={{ 
// // // // //                     borderRadius: '12px',
// // // // //                     textTransform: 'none',
// // // // //                     px: 3,
// // // // //                     py: 1.2,
// // // // //                     borderWidth: 2,
// // // // //                     '&:hover': {
// // // // //                       borderWidth: 2,
// // // // //                       backgroundColor: 'error.light'
// // // // //                     }
// // // // //                   }}
// // // // //                 >
// // // // //                   Delete Structure
// // // // //                 </Button>
// // // // //               )}
// // // // //               <Button 
// // // // //                 type="submit" 
// // // // //                 variant="contained" 
// // // // //                 size="large" 
// // // // //                 onClick={mode === 'create' ? handleSave : handleUpdate} 
// // // // //                 disabled={loading}
// // // // //                 startIcon={mode === 'create' ? <Save /> : <Update />}
// // // // //                 sx={{ 
// // // // //                   minWidth: '180px',
// // // // //                   borderRadius: '12px',
// // // // //                   textTransform: 'none',
// // // // //                   px: 4,
// // // // //                   py: 1.2,
// // // // //                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // // // //                   boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
// // // // //                   '&:hover': {
// // // // //                     background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
// // // // //                     boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
// // // // //                   }
// // // // //                 }}
// // // // //               >
// // // // //                 {loading ? 
// // // // //                   (mode === 'create' ? 'Saving...' : 'Updating...') : 
// // // // //                   (mode === 'create' ? 'Save Fee Structure' : 'Update Fee Structure')
// // // // //                 }
// // // // //               </Button>
// // // // //             </Box>
// // // // //           </Grid>
// // // // //         </Grid>
// // // // //       </Box>
// // // // //     </LocalizationProvider>
// // // // //   );
// // // // // };

// // // // // export default DynamicFeeForm;







// // // // import React, { useState, useEffect } from 'react';
// // // // import {
// // // //   TextField, Button, Grid, Box, Typography, Card, CardContent,
// // // //   IconButton, Divider, FormControl, InputLabel, Select, MenuItem,
// // // //   FormControlLabel, Checkbox, Paper, Chip, Avatar, LinearProgress,
// // // //   Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
// // // //   Accordion, AccordionSummary, AccordionDetails, Fab
// // // // } from '@mui/material';
// // // // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // // // import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// // // // import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// // // // import EditIcon from '@mui/icons-material/Edit';
// // // // import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// // // // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // // // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // // // import dayjs from 'dayjs';
// // // // import {
// // // //   CalendarMonth, School, AttachMoney, Delete, Save,
// // // //   Update, Payment, AccountBalance, Schedule,
// // // //   CheckCircle, Error, TrendingUp, EventNote, Add
// // // // } from '@mui/icons-material';

// // // // // Move StyledTextField outside the main component
// // // // const StyledTextField = ({ ...props }) => (
// // // //   <TextField
// // // //     {...props}
// // // //     variant="outlined"
// // // //     sx={{
// // // //       '& .MuiOutlinedInput-root': {
// // // //         borderRadius: '12px',
// // // //         backgroundColor: '#f8f9fa',
// // // //         transition: 'all 0.3s ease',
// // // //         '&:hover': {
// // // //           backgroundColor: '#fff',
// // // //           boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// // // //         },
// // // //         '&.Mui-focused': {
// // // //           backgroundColor: '#fff',
// // // //           boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
// // // //         },
// // // //       },
// // // //       ...props.sx
// // // //     }}
// // // //   />
// // // // );

// // // // // Move StyledCard outside the main component as well
// // // // const StyledCard = ({ children, title, icon, subtitle, ...props }) => (
// // // //   <Card 
// // // //     elevation={0}
// // // //     sx={{ 
// // // //       mb: 3,
// // // //       borderRadius: '16px',
// // // //       background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
// // // //       boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// // // //       transition: 'all 0.3s ease',
// // // //       '&:hover': {
// // // //         boxShadow: '0 6px 30px rgba(0, 0, 0, 0.12)',
// // // //       },
// // // //       ...props.sx
// // // //     }}
// // // //   >
// // // //     <CardContent sx={{ p: 3 }}>
// // // //       {title && (
// // // //         <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
// // // //           {icon && (
// // // //             <Avatar sx={{ 
// // // //               bgcolor: 'primary.light', 
// // // //               mr: 2,
// // // //               width: 48,
// // // //               height: 48
// // // //             }}>
// // // //               {icon}
// // // //             </Avatar>
// // // //           )}
// // // //           <Box>
// // // //             <Typography variant="h6" sx={{ 
// // // //               fontWeight: 600,
// // // //               color: 'text.primary'
// // // //             }}>
// // // //               {title}
// // // //             </Typography>
// // // //             {subtitle && (
// // // //               <Typography variant="body2" color="text.secondary">
// // // //                 {subtitle}
// // // //               </Typography>
// // // //             )}
// // // //           </Box>
// // // //         </Box>
// // // //       )}
// // // //       {children}
// // // //     </CardContent>
// // // //   </Card>
// // // // );

// // // // const DynamicFeeForm = ({ 
// // // //   onSubmit = () => {}, 
// // // //   onUpdate = () => {}, 
// // // //   onDelete = () => {}, 
// // // //   loading = false, 
// // // //   initialData = null 
// // // // }) => {
// // // //   // State and logic
// // // //   const [fees, setFees] = useState([{ 
// // // //     name: '', 
// // // //     amount: 0, 
// // // //     is_quarterly: false,
// // // //     start_date: null,
// // // //     due_date: null,
// // // //     installments: []
// // // //   }]);
// // // //   const [total, setTotal] = useState(0);
// // // //   const [quarterlyTotal, setQuarterlyTotal] = useState(0);
// // // //   const [paymentFrequency, setPaymentFrequency] = useState(4);
// // // //   const [mode, setMode] = useState('create');
// // // //   const [academicYear, setAcademicYear] = useState({ start: null, end: null });

// // // //   useEffect(() => {
// // // //     if (initialData && initialData.id) {
// // // //       setMode('update');
// // // //       if (initialData.fee_items && initialData.fee_items.length > 0) {
// // // //         setFees(initialData.fee_items);
// // // //       }
// // // //       if (initialData.academic_year_start) {
// // // //         setAcademicYear(prev => ({ ...prev, start: dayjs(initialData.academic_year_start) }));
// // // //       }
// // // //       if (initialData.academic_year_end) {
// // // //         setAcademicYear(prev => ({ ...prev, end: dayjs(initialData.academic_year_end) }));
// // // //       }
// // // //       if (initialData.payment_frequency) {
// // // //         setPaymentFrequency(initialData.payment_frequency);
// // // //       }
// // // //       if (initialData.quarterly_fee) {
// // // //         setQuarterlyTotal(initialData.quarterly_fee);
// // // //       }
// // // //     } else {
// // // //       setMode('create');
// // // //       setFees([{ 
// // // //         name: '', 
// // // //         amount: 0, 
// // // //         is_quarterly: false,
// // // //         start_date: null,
// // // //         due_date: null,
// // // //         installments: []
// // // //       }]);
// // // //       setAcademicYear({ start: null, end: null });
// // // //     }
// // // //   }, [initialData]);

// // // //   useEffect(() => {
// // // //     const totalAmount = fees.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
// // // //     setTotal(totalAmount);
// // // //     const quarterlyFeesSum = fees.reduce((sum, item) => sum + (item.is_quarterly ? Number(item.amount) : 0), 0);
// // // //     setQuarterlyTotal(Math.round(quarterlyFeesSum / paymentFrequency) || 0);
// // // //   }, [fees, paymentFrequency]);

// // // //   // Generate installments for a specific fee item
// // // //   const generateInstallments = (feeIndex) => {
// // // //     if (!fees || !fees[feeIndex]) return;
    
// // // //     const feeItem = fees[feeIndex];
// // // //     if (!feeItem.is_quarterly || !feeItem.amount || feeItem.amount <= 0) {
// // // //       return;
// // // //     }

// // // //     const installments = [];
// // // //     const amountPerInstallment = Math.round(feeItem.amount / paymentFrequency);
// // // //     const lastInstallmentAmount = feeItem.amount - (amountPerInstallment * (paymentFrequency - 1));

// // // //     for (let i = 0; i < paymentFrequency; i++) {
// // // //       const amount = i === paymentFrequency - 1 ? lastInstallmentAmount : amountPerInstallment;
// // // //       installments.push({
// // // //         installment_number: i + 1,
// // // //         amount: amount,
// // // //         start_date: null,
// // // //         due_date: null,
// // // //         status: 'pending'
// // // //       });
// // // //     }

// // // //     const newFees = [...fees];
// // // //     newFees[feeIndex].installments = installments;
// // // //     setFees(newFees);
// // // //   };

// // // //   const handleFeeItemChange = (index, field) => (e) => {
// // // //     if (!fees || !fees[index]) return;
    
// // // //     const newFees = [...fees];
// // // //     newFees[index][field] = e.target.value;
// // // //     setFees(newFees);
// // // //   };

// // // //   const handleFeeDateChange = (index, field) => (date) => {
// // // //     if (!fees || !fees[index]) return;
    
// // // //     const newFees = [...fees];
// // // //     newFees[index][field] = date;
// // // //     setFees(newFees);
// // // //   };

// // // //   const handleQuarterlyChange = (index) => (e) => {
// // // //     if (!fees || !fees[index]) return;
    
// // // //     const newFees = [...fees];
// // // //     newFees[index].is_quarterly = e.target.checked;
    
// // // //     if (e.target.checked) {
// // // //       // Generate installments when quarterly is checked
// // // //       generateInstallments(index);
// // // //     } else {
// // // //       // Clear installments when unchecked
// // // //       newFees[index].installments = [];
// // // //     }
    
// // // //     setFees(newFees);
// // // //   };

// // // //   const handleInstallmentDateChange = (feeIndex, installmentIndex, field) => (date) => {
// // // //     if (!fees || !fees[feeIndex] || !fees[feeIndex].installments || !fees[feeIndex].installments[installmentIndex]) return;
    
// // // //     const newFees = [...fees];
// // // //     newFees[feeIndex].installments[installmentIndex][field] = date;
// // // //     setFees(newFees);
// // // //   };

// // // //   const handleAddFeeItem = () => {
// // // //     setFees([...fees, { 
// // // //       name: '', 
// // // //       amount: 0, 
// // // //       is_quarterly: false,
// // // //       start_date: null,
// // // //       due_date: null,
// // // //       installments: []
// // // //     }]);
// // // //   };

// // // //   const handleRemoveFeeItem = (index) => {
// // // //     const newFees = fees.filter((_, i) => i !== index);
// // // //     setFees(newFees);
// // // //   };

// // // //   const handleDateChange = (type) => (date) => {
// // // //     setAcademicYear(prev => ({ ...prev, [type]: date }));
// // // //   };

// // // //   const createPayload = () => ({
// // // //     fee_items: (fees || []).filter(item => item && item.name && item.amount > 0),
// // // //     total_fee: total,
// // // //     quarterly_fee: quarterlyTotal,
// // // //     payment_frequency: paymentFrequency,
// // // //     academic_year_start: academicYear.start?.format('YYYY-MM-DD') || null,
// // // //     academic_year_end: academicYear.end?.format('YYYY-MM-DD') || null,
// // // //   });

// // // //   const handleSave = () => onSubmit(createPayload());
// // // //   const handleUpdate = () => onUpdate(createPayload());

// // // //   // Calculate progress with null checks
// // // //   const filledFees = (fees || []).filter(f => f && f.name && f.amount > 0).length;
// // // //   const quarterlyFees = (fees || []).filter(f => f && f.is_quarterly && f.start_date && f.due_date).length;
// // // //   const totalQuarterlyFees = (fees || []).filter(f => f && f.is_quarterly).length;
// // // //   const progress = (fees || []).length > 0 ? (filledFees / (fees || []).length) * 100 : 0;

// // // //   return (
// // // //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// // // //       <Box sx={{ 
// // // //         minHeight: '100vh',
// // // //         backgroundColor: '#f5f7fa',
// // // //         p: { xs: 2, md: 4 }
// // // //       }}>
// // // //         <Grid container spacing={3}>
// // // //           {/* Left Column - Summary Stats */}
// // // //           <Grid item xs={12} md={3}>
// // // //             {/* Total Summary Card */}
// // // //             <StyledCard>
// // // //               <Box sx={{ textAlign: 'center' }}>
// // // //                 <Avatar sx={{ 
// // // //                   bgcolor: 'primary.main', 
// // // //                   width: 80, 
// // // //                   height: 80, 
// // // //                   margin: 'auto',
// // // //                   mb: 2
// // // //                 }}>
// // // //                   <AttachMoney sx={{ fontSize: 40 }} />
// // // //                 </Avatar>
// // // //                 <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
// // // //                   ₹{total.toLocaleString()}
// // // //                 </Typography>
// // // //                 <Typography variant="body2" color="text.secondary">
// // // //                   Total Annual Fee
// // // //                 </Typography>
// // // //               </Box>
// // // //             </StyledCard>

// // // //             {/* Payment Info Card */}
// // // //             <StyledCard>
// // // //               <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
// // // //                 Payment Information
// // // //               </Typography>
// // // //               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
// // // //                 <Box>
// // // //                   <Typography variant="caption" color="text.secondary">
// // // //                     Installments per Fee
// // // //                   </Typography>
// // // //                   <Typography variant="h6" sx={{ fontWeight: 600 }}>
// // // //                     {paymentFrequency} payments
// // // //                   </Typography>
// // // //                 </Box>
// // // //                 <Divider />
// // // //                 <Box>
// // // //                   <Typography variant="caption" color="text.secondary">
// // // //                     Quarterly Fee Items
// // // //                   </Typography>
// // // //                   <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main' }}>
// // // //                     {(fees || []).filter(f => f && f.is_quarterly).length} items
// // // //                   </Typography>
// // // //                 </Box>
// // // //                 <Divider />
// // // //                 <Box>
// // // //                   <Typography variant="caption" color="text.secondary">
// // // //                     One-time Fee Items
// // // //                   </Typography>
// // // //                   <Typography variant="h6" sx={{ fontWeight: 600, color: 'info.main' }}>
// // // //                     {(fees || []).filter(f => f && !f.is_quarterly).length} items
// // // //                   </Typography>
// // // //                 </Box>
// // // //               </Box>
// // // //             </StyledCard>

// // // //             {/* Progress Card */}
// // // //             <StyledCard>
// // // //               <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
// // // //                 Form Completion
// // // //               </Typography>
// // // //               <Box sx={{ mb: 2 }}>
// // // //                 <LinearProgress 
// // // //                   variant="determinate" 
// // // //                   value={progress} 
// // // //                   sx={{ 
// // // //                     height: 8, 
// // // //                     borderRadius: 4,
// // // //                     backgroundColor: 'grey.200',
// // // //                     '& .MuiLinearProgress-bar': {
// // // //                       borderRadius: 4,
// // // //                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // // //                     }
// // // //                   }}
// // // //                 />
// // // //                 <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
// // // //                   {filledFees} of {(fees || []).length} items completed
// // // //                 </Typography>
// // // //               </Box>
// // // //               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
// // // //                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// // // //                   {academicYear.start && academicYear.end ? 
// // // //                     <CheckCircle color="success" fontSize="small" /> : 
// // // //                     <Error color="action" fontSize="small" />
// // // //                   }
// // // //                   <Typography variant="body2">Academic Year</Typography>
// // // //                 </Box>
// // // //                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// // // //                   {filledFees > 0 ? 
// // // //                     <CheckCircle color="success" fontSize="small" /> : 
// // // //                     <Error color="action" fontSize="small" />
// // // //                   }
// // // //                   <Typography variant="body2">Fee Items</Typography>
// // // //                 </Box>
// // // //                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// // // //                   {totalQuarterlyFees === 0 || quarterlyFees === totalQuarterlyFees ? 
// // // //                     <CheckCircle color="success" fontSize="small" /> : 
// // // //                     <Error color="action" fontSize="small" />
// // // //                   }
// // // //                   <Typography variant="body2">Payment Dates</Typography>
// // // //                 </Box>
// // // //                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// // // //                   <CheckCircle color="success" fontSize="small" />
// // // //                   <Typography variant="body2">Payment Plan</Typography>
// // // //                 </Box>
// // // //               </Box>
// // // //             </StyledCard>
// // // //           </Grid>

// // // //           {/* Right Column - Main Form */}
// // // //           <Grid item xs={12} md={9}>
// // // //             {/* Academic Year Section */}
// // // //             <StyledCard 
// // // //               title="Academic Year"
// // // //               subtitle="Define the start and end dates for this fee structure"
// // // //               icon={<CalendarMonth />}
// // // //             >
// // // //               <Grid container spacing={3}>
// // // //                 <Grid item xs={12} md={6}>
// // // //                   <DatePicker
// // // //                     label="Academic Year Start"
// // // //                     value={academicYear.start}
// // // //                     onChange={handleDateChange('start')}
// // // //                     slotProps={{ 
// // // //                       textField: { 
// // // //                         fullWidth: true,
// // // //                         sx: {
// // // //                           '& .MuiOutlinedInput-root': {
// // // //                             borderRadius: '12px',
// // // //                             backgroundColor: '#f8f9fa',
// // // //                             '&:hover': {
// // // //                               backgroundColor: '#fff',
// // // //                               boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// // // //                             },
// // // //                             '&.Mui-focused': {
// // // //                               backgroundColor: '#fff',
// // // //                               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
// // // //                             },
// // // //                           },
// // // //                         }
// // // //                       } 
// // // //                     }}
// // // //                   />
// // // //                 </Grid>
// // // //                 <Grid item xs={12} md={6}>
// // // //                   <DatePicker
// // // //                     label="Academic Year End"
// // // //                     value={academicYear.end}
// // // //                     onChange={handleDateChange('end')}
// // // //                     slotProps={{ 
// // // //                       textField: { 
// // // //                         fullWidth: true,
// // // //                         sx: {
// // // //                           '& .MuiOutlinedInput-root': {
// // // //                             borderRadius: '12px',
// // // //                             backgroundColor: '#f8f9fa',
// // // //                             '&:hover': {
// // // //                               backgroundColor: '#fff',
// // // //                               boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// // // //                             },
// // // //                             '&.Mui-focused': {
// // // //                               backgroundColor: '#fff',
// // // //                               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
// // // //                             },
// // // //                           },
// // // //                         }
// // // //                       } 
// // // //                     }}
// // // //                   />
// // // //                 </Grid>
// // // //               </Grid>
// // // //             </StyledCard>

// // // //             {/* Payment Frequency Selection */}
// // // //             <StyledCard 
// // // //               title="Payment Configuration"
// // // //               subtitle="Set the number of installments for quarterly fees"
// // // //               icon={<Payment />}
// // // //             >
// // // //               <Grid container spacing={3}>
// // // //                 <Grid item xs={12} md={6}>
// // // //                   <FormControl fullWidth>
// // // //                     <InputLabel>Installments per Fee</InputLabel>
// // // //                     <Select
// // // //                       value={paymentFrequency}
// // // //                       label="Installments per Fee"
// // // //                       onChange={(e) => setPaymentFrequency(Number(e.target.value))}
// // // //                       sx={{
// // // //                         borderRadius: '12px',
// // // //                         backgroundColor: '#f8f9fa',
// // // //                         '&:hover': {
// // // //                           backgroundColor: '#fff',
// // // //                         },
// // // //                       }}
// // // //                     >
// // // //                       <MenuItem value={1}>1 installment (One-time)</MenuItem>
// // // //                       <MenuItem value={2}>2 installments</MenuItem>
// // // //                       <MenuItem value={3}>3 installments</MenuItem>
// // // //                       <MenuItem value={4}>4 installments</MenuItem>
// // // //                       <MenuItem value={6}>6 installments</MenuItem>
// // // //                       <MenuItem value={12}>12 installments (Monthly)</MenuItem>
// // // //                     </Select>
// // // //                   </FormControl>
// // // //                 </Grid>
// // // //                 <Grid item xs={12} md={6}>
// // // //                   <Paper 
// // // //                     elevation={0} 
// // // //                     sx={{ 
// // // //                       p: 2, 
// // // //                       borderRadius: '12px',
// // // //                       background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
// // // //                       border: '2px solid',
// // // //                       borderColor: 'primary.light'
// // // //                     }}
// // // //                   >
// // // //                     <Typography variant="caption" color="text.secondary">
// // // //                       This setting applies to all fees marked as "Quarterly"
// // // //                     </Typography>
// // // //                     <Typography variant="body2" sx={{ fontWeight: 600, mt: 1 }}>
// // // //                       Each quarterly fee will be split into {paymentFrequency} equal payments
// // // //                     </Typography>
// // // //                   </Paper>
// // // //                 </Grid>
// // // //               </Grid>
// // // //             </StyledCard>

// // // //             {/* Fee Items Section */}
// // // //             <StyledCard 
// // // //               title="Fee Components"
// // // //               subtitle="Add fee items and configure payment schedules"
// // // //               icon={<AccountBalance />}
// // // //             >
// // // //               {fees && fees.map((feeItem, feeIndex) => (
// // // //                 <Box key={feeIndex} sx={{ mb: 3 }}>
// // // //                   <Paper
// // // //                     elevation={0}
// // // //                     sx={{ 
// // // //                       p: 2, 
// // // //                       mb: 2,
// // // //                       borderRadius: '12px',
// // // //                       backgroundColor: feeIndex % 2 === 0 ? '#f8f9fa' : '#fff',
// // // //                       border: '1px solid',
// // // //                       borderColor: 'divider',
// // // //                       transition: 'all 0.3s ease',
// // // //                       '&:hover': {
// // // //                         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// // // //                         transform: 'translateY(-2px)'
// // // //                       }
// // // //                     }}
// // // //                   >
// // // //                     <Grid container spacing={2} alignItems="center">
// // // //                       <Grid item xs={12} md={4}>
// // // //                         <StyledTextField 
// // // //                           fullWidth 
// // // //                           label="Fee Name" 
// // // //                           placeholder="e.g., Tuition Fee, Lab Fee"
// // // //                           name="name" 
// // // //                           value={feeItem.name} 
// // // //                           onChange={handleFeeItemChange(feeIndex, 'name')} 
// // // //                         />
// // // //                       </Grid>
// // // //                       <Grid item xs={12} md={3}>
// // // //                         <StyledTextField 
// // // //                           fullWidth 
// // // //                           type="number" 
// // // //                           label="Amount (₹)" 
// // // //                           name="amount" 
// // // //                           value={feeItem.amount} 
// // // //                           onChange={handleFeeItemChange(feeIndex, 'amount')} 
// // // //                           inputProps={{ min: 0 }} 
// // // //                         />
// // // //                       </Grid>
// // // //                       <Grid item xs={6} md={3}>
// // // //                         <FormControlLabel 
// // // //                           control={
// // // //                             <Checkbox 
// // // //                               checked={feeItem.is_quarterly} 
// // // //                               onChange={handleQuarterlyChange(feeIndex)}
// // // //                               sx={{ 
// // // //                                 color: 'primary.main',
// // // //                                 '&.Mui-checked': {
// // // //                                   color: 'primary.main',
// // // //                                 }
// // // //                               }}
// // // //                             />
// // // //                           } 
// // // //                           label={
// // // //                             <Typography variant="body2">
// // // //                               Allow Installments
// // // //                             </Typography>
// // // //                           }
// // // //                         />
// // // //                       </Grid>
// // // //                       <Grid item xs={6} md={2} sx={{ textAlign: 'right' }}>
// // // //                         <IconButton 
// // // //                           onClick={() => handleRemoveFeeItem(feeIndex)} 
// // // //                           sx={{ 
// // // //                             color: 'error.main',
// // // //                             '&:hover': {
// // // //                               backgroundColor: 'error.light',
// // // //                               transform: 'scale(1.1)'
// // // //                             }
// // // //                           }}
// // // //                         >
// // // //                           <RemoveCircleIcon />
// // // //                         </IconButton>
// // // //                       </Grid>
// // // //                     </Grid>

// // // //                     {/* Fee-level dates */}
// // // //                     {feeItem.is_quarterly && (
// // // //                       <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
// // // //                         <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
// // // //                           Fee Payment Period
// // // //                         </Typography>
// // // //                         <Grid container spacing={2}>
// // // //                           <Grid item xs={12} md={6}>
// // // //                             <DatePicker
// // // //                               label="Fee Start Date"
// // // //                               value={feeItem.start_date}
// // // //                               onChange={handleFeeDateChange(feeIndex, 'start_date')}
// // // //                               slotProps={{ 
// // // //                                 textField: { 
// // // //                                   fullWidth: true,
// // // //                                   size: 'small',
// // // //                                   sx: {
// // // //                                     '& .MuiOutlinedInput-root': {
// // // //                                       borderRadius: '8px',
// // // //                                       backgroundColor: '#fff',
// // // //                                     }
// // // //                                   }
// // // //                                 } 
// // // //                               }}
// // // //                             />
// // // //                           </Grid>
// // // //                           <Grid item xs={12} md={6}>
// // // //                             <DatePicker
// // // //                               label="Fee Due Date"
// // // //                               value={feeItem.due_date}
// // // //                               onChange={handleFeeDateChange(feeIndex, 'due_date')}
// // // //                               slotProps={{ 
// // // //                                 textField: { 
// // // //                                   fullWidth: true,
// // // //                                   size: 'small',
// // // //                                   sx: {
// // // //                                     '& .MuiOutlinedInput-root': {
// // // //                                       borderRadius: '8px',
// // // //                                       backgroundColor: '#fff',
// // // //                                     }
// // // //                                   }
// // // //                                 } 
// // // //                               }}
// // // //                             />
// // // //                           </Grid>
// // // //                         </Grid>
// // // //                       </Box>
// // // //                     )}
// // // //                   </Paper>

// // // //                   {/* Installment Schedule for Quarterly Fees */}
// // // //                   {feeItem && feeItem.is_quarterly && feeItem.installments && feeItem.installments.length > 0 && (
// // // //                     <Accordion 
// // // //                       sx={{ 
// // // //                         borderRadius: '12px',
// // // //                         '&:before': { display: 'none' },
// // // //                         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
// // // //                       }}
// // // //                     >
// // // //                       <AccordionSummary 
// // // //                         expandIcon={<ExpandMoreIcon />}
// // // //                         sx={{ 
// // // //                           backgroundColor: '#e3f2fd',
// // // //                           borderRadius: '12px',
// // // //                           '&.Mui-expanded': {
// // // //                             borderBottomLeftRadius: 0,
// // // //                             borderBottomRightRadius: 0
// // // //                           }
// // // //                         }}
// // // //                       >
// // // //                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// // // //                           <EventNote color="primary" />
// // // //                           <Box>
// // // //                             <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
// // // //                               {feeItem.name} - Installment Schedule
// // // //                             </Typography>
// // // //                             <Typography variant="body2" color="text.secondary">
// // // //                               {paymentFrequency} installments of ₹{Math.round(feeItem.amount / paymentFrequency)} each
// // // //                             </Typography>
// // // //                           </Box>
// // // //                         </Box>
// // // //                       </AccordionSummary>
// // // //                       <AccordionDetails sx={{ p: 0 }}>
// // // //                         <TableContainer>
// // // //                           <Table size="small">
// // // //                             <TableHead>
// // // //                               <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
// // // //                                 <TableCell sx={{ fontWeight: 600 }}>Installment</TableCell>
// // // //                                 <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
// // // //                                 <TableCell sx={{ fontWeight: 600 }}>Start Date</TableCell>
// // // //                                 <TableCell sx={{ fontWeight: 600 }}>Due Date</TableCell>
// // // //                               </TableRow>
// // // //                             </TableHead>
// // // //                             <TableBody>
// // // //                               {(feeItem.installments || []).map((installment, installmentIndex) => (
// // // //                                 <TableRow key={installmentIndex}>
// // // //                                   <TableCell>
// // // //                                     <Chip 
// // // //                                       label={`#${installment.installment_number}`}
// // // //                                       size="small"
// // // //                                       color="primary"
// // // //                                       variant="outlined"
// // // //                                     />
// // // //                                   </TableCell>
// // // //                                   <TableCell>
// // // //                                     <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main' }}>
// // // //                                       ₹{installment.amount.toLocaleString()}
// // // //                                     </Typography>
// // // //                                   </TableCell>
// // // //                                   <TableCell sx={{ width: '200px' }}>
// // // //                                     <DatePicker
// // // //                                       value={installment.start_date}
// // // //                                       onChange={handleInstallmentDateChange(feeIndex, installmentIndex, 'start_date')}
// // // //                                       slotProps={{ 
// // // //                                         textField: { 
// // // //                                           size: 'small',
// // // //                                           sx: {
// // // //                                             '& .MuiOutlinedInput-root': {
// // // //                                               borderRadius: '8px',
// // // //                                             }
// // // //                                           }
// // // //                                         } 
// // // //                                       }}
// // // //                                     />
// // // //                                   </TableCell>
// // // //                                   <TableCell sx={{ width: '200px' }}>
// // // //                                     <DatePicker
// // // //                                       value={installment.due_date}
// // // //                                       onChange={handleInstallmentDateChange(feeIndex, installmentIndex, 'due_date')}
// // // //                                       slotProps={{ 
// // // //                                         textField: { 
// // // //                                           size: 'small',
// // // //                                           sx: {
// // // //                                             '& .MuiOutlinedInput-root': {
// // // //                                               borderRadius: '8px',
// // // //                                             }
// // // //                                           }
// // // //                                         } 
// // // //                                       }}
// // // //                                     />
// // // //                                   </TableCell>
// // // //                                 </TableRow>
// // // //                               ))}
// // // //                             </TableBody>
// // // //                           </Table>
// // // //                         </TableContainer>
// // // //                       </AccordionDetails>
// // // //                     </Accordion>
// // // //                   )}
// // // //                 </Box>
// // // //               ))}
              
// // // //               <Box mt={3}>
// // // //                 <Button 
// // // //                   variant="outlined" 
// // // //                   onClick={handleAddFeeItem} 
// // // //                   startIcon={<AddCircleIcon />}
// // // //                   sx={{ 
// // // //                     borderRadius: '12px',
// // // //                     textTransform: 'none',
// // // //                     borderWidth: 2,
// // // //                     px: 3,
// // // //                     py: 1,
// // // //                     '&:hover': {
// // // //                       borderWidth: 2,
// // // //                       backgroundColor: 'primary.light'
// // // //                     }
// // // //                   }}
// // // //                 >
// // // //                   Add Fee Item
// // // //                 </Button>
// // // //               </Box>
// // // //             </StyledCard>

// // // //             {/* Summary Stats */}
// // // //             <StyledCard 
// // // //               title="Fee Summary"
// // // //               subtitle="Overview of all configured fees"
// // // //               icon={<TrendingUp />}
// // // //             >
// // // //               <Grid container spacing={2}>
// // // //                 <Grid item xs={6} md={3}>
// // // //                   <Paper 
// // // //                     elevation={0}
// // // //                     sx={{ 
// // // //                       p: 2, 
// // // //                       textAlign: 'center',
// // // //                       borderRadius: '12px',
// // // //                       backgroundColor: '#e8f5e9'
// // // //                     }}
// // // //                   >
// // // //                     <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main' }}>
// // // //                       ₹{total.toLocaleString()}
// // // //                     </Typography>
// // // //                     <Typography variant="caption" color="text.secondary">
// // // //                       Total Amount
// // // //                     </Typography>
// // // //                   </Paper>
// // // //                 </Grid>
// // // //                 <Grid item xs={6} md={3}>
// // // //                   <Paper 
// // // //                     elevation={0}
// // // //                     sx={{ 
// // // //                       p: 2, 
// // // //                       textAlign: 'center',
// // // //                       borderRadius: '12px',
// // // //                       backgroundColor: '#fff3e0'
// // // //                     }}
// // // //                   >
// // // //                     <Typography variant="h6" sx={{ fontWeight: 600, color: 'warning.main' }}>
// // // //                       {(fees || []).filter(f => f && !f.is_quarterly).length}
// // // //                     </Typography>
// // // //                     <Typography variant="caption" color="text.secondary">
// // // //                       One-time Fees
// // // //                     </Typography>
// // // //                   </Paper>
// // // //                 </Grid>
// // // //               </Grid>

// // // //               {/* Detailed Fee Breakdown */}
// // // //               {(fees || []).filter(f => f && f.name && f.amount > 0).length > 0 && (
// // // //                 <Box sx={{ mt: 3 }}>
// // // //                   <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
// // // //                     Fee Breakdown
// // // //                   </Typography>
// // // //                   <TableContainer 
// // // //                     component={Paper} 
// // // //                     elevation={0}
// // // //                     sx={{ 
// // // //                       borderRadius: '12px',
// // // //                       backgroundColor: '#f8f9fa'
// // // //                     }}
// // // //                   >
// // // //                     <Table size="small">
// // // //                       <TableHead>
// // // //                         <TableRow sx={{ backgroundColor: '#e3f2fd' }}>
// // // //                           <TableCell sx={{ fontWeight: 600 }}>Fee Name</TableCell>
// // // //                           <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
// // // //                           <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
// // // //                           <TableCell sx={{ fontWeight: 600 }}>Installments</TableCell>
// // // //                           <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
// // // //                         </TableRow>
// // // //                       </TableHead>
// // // //                       <TableBody>
// // // //                         {(fees || []).filter(f => f && f.name && f.amount > 0).map((fee, index) => (
// // // //                           <TableRow 
// // // //                             key={index}
// // // //                             sx={{ 
// // // //                               '&:nth-of-type(odd)': { backgroundColor: '#fff' },
// // // //                               '&:hover': { backgroundColor: '#f0f0f0' }
// // // //                             }}
// // // //                           >
// // // //                             <TableCell>
// // // //                               <Typography variant="body2" sx={{ fontWeight: 600 }}>
// // // //                                 {fee.name}
// // // //                               </Typography>
// // // //                             </TableCell>
// // // //                             <TableCell>
// // // //                               <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main' }}>
// // // //                                 ₹{fee.amount.toLocaleString()}
// // // //                               </Typography>
// // // //                             </TableCell>
// // // //                             <TableCell>
// // // //                               <Chip 
// // // //                                 label={fee.is_quarterly ? 'Installments' : 'One-time'} 
// // // //                                 size="small"
// // // //                                 color={fee.is_quarterly ? 'primary' : 'default'}
// // // //                                 variant="outlined"
// // // //                               />
// // // //                             </TableCell>
// // // //                             <TableCell>
// // // //                               {fee.is_quarterly ? (
// // // //                                 <Typography variant="body2">
// // // //                                   {paymentFrequency} × ₹{Math.round(fee.amount / paymentFrequency)}
// // // //                                 </Typography>
// // // //                               ) : (
// // // //                                 <Typography variant="body2" color="text.secondary">
// // // //                                   N/A
// // // //                                 </Typography>
// // // //                               )}
// // // //                             </TableCell>
// // // //                             <TableCell>
// // // //                               {fee.is_quarterly ? (
// // // //                                 fee.start_date && fee.due_date ? (
// // // //                                   <Chip 
// // // //                                     label="Configured" 
// // // //                                     size="small"
// // // //                                     color="success"
// // // //                                   />
// // // //                                 ) : (
// // // //                                   <Chip 
// // // //                                     label="Dates Required" 
// // // //                                     size="small"
// // // //                                     color="warning"
// // // //                                   />
// // // //                                 )
// // // //                               ) : (
// // // //                                 <Chip 
// // // //                                   label="Ready" 
// // // //                                   size="small"
// // // //                                   color="success"
// // // //                                 />
// // // //                               )}
// // // //                             </TableCell>
// // // //                           </TableRow>
// // // //                         ))}
// // // //                       </TableBody>
// // // //                     </Table>
// // // //                   </TableContainer>
// // // //                 </Box>
// // // //               )}
// // // //             </StyledCard>

// // // //             {/* Action Buttons */}
// // // //             <Box 
// // // //               sx={{ 
// // // //                 display: 'flex', 
// // // //                 justifyContent: 'flex-end', 
// // // //                 gap: 2, 
// // // //                 mt: 4,
// // // //                 flexWrap: 'wrap'
// // // //               }}
// // // //             >
// // // //               {mode === 'update' && (
// // // //                 <Button 
// // // //                   variant="outlined" 
// // // //                   color="error" 
// // // //                   onClick={onDelete} 
// // // //                   disabled={loading}
// // // //                   startIcon={<Delete />}
// // // //                   sx={{ 
// // // //                     borderRadius: '12px',
// // // //                     textTransform: 'none',
// // // //                     px: 3,
// // // //                     py: 1.2,
// // // //                     borderWidth: 2,
// // // //                     '&:hover': {
// // // //                       borderWidth: 2,
// // // //                       backgroundColor: 'error.light'
// // // //                     }
// // // //                   }}
// // // //                 >
// // // //                   Delete Structure
// // // //                 </Button>
// // // //               )}
// // // //               <Button 
// // // //                 type="submit" 
// // // //                 variant="contained" 
// // // //                 size="large" 
// // // //                 onClick={mode === 'create' ? handleSave : handleUpdate} 
// // // //                 disabled={loading}
// // // //                 startIcon={mode === 'create' ? <Save /> : <Update />}
// // // //                 sx={{ 
// // // //                   minWidth: '180px',
// // // //                   borderRadius: '12px',
// // // //                   textTransform: 'none',
// // // //                   px: 4,
// // // //                   py: 1.2,
// // // //                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // // //                   boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
// // // //                   '&:hover': {
// // // //                     background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
// // // //                     boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
// // // //                   }
// // // //                 }}
// // // //               >
// // // //                 {loading ? 
// // // //                   (mode === 'create' ? 'Saving...' : 'Updating...') : 
// // // //                   (mode === 'create' ? 'Save Fee Structure' : 'Update Fee Structure')
// // // //                 }
// // // //               </Button>
// // // //             </Box>
// // // //           </Grid>
// // // //         </Grid>
// // // //       </Box>
// // // //     </LocalizationProvider>
// // // //   );
// // // // };

// // // // export default DynamicFeeForm;
                   



// // import React, { useState, useEffect } from 'react';
// // import {
// //   TextField, Button, Grid, Box, Typography, Card, CardContent,
// //   IconButton, Divider, FormControl, InputLabel, Select, MenuItem,
// //   FormControlLabel, Checkbox, Paper, Chip, Avatar, LinearProgress,
// //   Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
// //   Accordion, AccordionSummary, AccordionDetails, Fab
// // } from '@mui/material';
// // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// // import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// // import EditIcon from '@mui/icons-material/Edit';
// // import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import dayjs from 'dayjs';
// // import {
// //   CalendarMonth, School, AttachMoney, Delete, Save,
// //   Update, Payment, AccountBalance, Schedule,
// //   CheckCircle, Error, TrendingUp, EventNote, Add, AccessTime
// // } from '@mui/icons-material';

// // // Move StyledTextField outside the main component
// // const StyledTextField = ({ ...props }) => (
// //   <TextField
// //     {...props}
// //     variant="outlined"
// //     sx={{
// //       '& .MuiOutlinedInput-root': {
// //         borderRadius: '12px',
// //         backgroundColor: '#f8f9fa',
// //         transition: 'all 0.3s ease',
// //         '&:hover': {
// //           backgroundColor: '#fff',
// //           boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// //         },
// //         '&.Mui-focused': {
// //           backgroundColor: '#fff',
// //           boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
// //         },
// //       },
// //       ...props.sx
// //     }}
// //   />
// // );

// // // Move StyledCard outside the main component as well
// // const StyledCard = ({ children, title, icon, subtitle, ...props }) => (
// //   <Card 
// //     elevation={0}
// //     sx={{ 
// //       mb: 3,
// //       borderRadius: '16px',
// //       background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
// //       boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// //       transition: 'all 0.3s ease',
// //       '&:hover': {
// //         boxShadow: '0 6px 30px rgba(0, 0, 0, 0.12)',
// //       },
// //       ...props.sx
// //     }}
// //   >
// //     <CardContent sx={{ p: 3 }}>
// //       {title && (
// //         <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
// //           {icon && (
// //             <Avatar sx={{ 
// //               bgcolor: 'primary.light', 
// //               mr: 2,
// //               width: 48,
// //               height: 48
// //             }}>
// //               {icon}
// //             </Avatar>
// //           )}
// //           <Box>
// //             <Typography variant="h6" sx={{ 
// //               fontWeight: 600,
// //               color: 'text.primary'
// //             }}>
// //               {title}
// //             </Typography>
// //             {subtitle && (
// //               <Typography variant="body2" color="text.secondary">
// //                 {subtitle}
// //               </Typography>
// //             )}
// //           </Box>
// //         </Box>
// //       )}
// //       {children}
// //     </CardContent>
// //   </Card>
// // );

// // const DynamicFeeForm = ({ 
// //   onSubmit = () => {}, 
// //   onUpdate = () => {}, 
// //   onDelete = () => {}, 
// //   loading = false, 
// //   initialData = null 
// // }) => {
// //   // State and logic
// //   const [fees, setFees] = useState([{ 
// //     name: '', 
// //     amount: 0, 
// //     is_quarterly: false,
// //     start_date: null,
// //     due_date: null,
// //     installments: []
// //   }]);
// //   const [total, setTotal] = useState(0);
// //   const [quarterlyTotal, setQuarterlyTotal] = useState(0);
// //   const [paymentFrequency, setPaymentFrequency] = useState(4);
// //   const [mode, setMode] = useState('create');
// //   const [academicYear, setAcademicYear] = useState({ start: null, end: null });

// //   useEffect(() => {
// //     if (initialData && initialData.id) {
// //       setMode('update');
// //       if (initialData.fee_items && initialData.fee_items.length > 0) {
// //         setFees(initialData.fee_items);
// //       }
// //       if (initialData.academic_year_start) {
// //         setAcademicYear(prev => ({ ...prev, start: dayjs(initialData.academic_year_start) }));
// //       }
// //       if (initialData.academic_year_end) {
// //         setAcademicYear(prev => ({ ...prev, end: dayjs(initialData.academic_year_end) }));
// //       }
// //       if (initialData.payment_frequency) {
// //         setPaymentFrequency(initialData.payment_frequency);
// //       }
// //       if (initialData.quarterly_fee) {
// //         setQuarterlyTotal(initialData.quarterly_fee);
// //       }
// //     } else {
// //       setMode('create');
// //       setFees([{ 
// //         name: '', 
// //         amount: 0, 
// //         is_quarterly: false,
// //         start_date: null,
// //         due_date: null,
// //         installments: []
// //       }]);
// //       setAcademicYear({ start: null, end: null });
// //     }
// //   }, [initialData]);

// //   useEffect(() => {
// //     const totalAmount = (fees || []).reduce((sum, item) => sum + (Number(item?.amount) || 0), 0);
// //     setTotal(totalAmount);
// //     const quarterlyFeesSum = (fees || []).reduce((sum, item) => sum + (item?.is_quarterly ? Number(item?.amount) : 0), 0);
// //     setQuarterlyTotal(Math.round(quarterlyFeesSum / paymentFrequency) || 0);
// //   }, [fees, paymentFrequency]);

// //   // Generate installments for a specific fee item
// //   const generateInstallments = (feeIndex) => {
// //     if (!fees || !fees[feeIndex]) return;
    
// //     const feeItem = fees[feeIndex];
// //     if (!feeItem.is_quarterly || !feeItem.amount || feeItem.amount <= 0) {
// //       return;
// //     }

// //     const installments = [];
// //     const amountPerInstallment = Math.round(feeItem.amount / paymentFrequency);
// //     const lastInstallmentAmount = feeItem.amount - (amountPerInstallment * (paymentFrequency - 1));

// //     for (let i = 0; i < paymentFrequency; i++) {
// //       const amount = i === paymentFrequency - 1 ? lastInstallmentAmount : amountPerInstallment;
// //       installments.push({
// //         installment_number: i + 1,
// //         amount: amount,
// //         start_date: null,
// //         due_date: null,
// //         status: 'pending'
// //       });
// //     }

// //     const newFees = [...fees];
// //     newFees[feeIndex].installments = installments;
// //     setFees(newFees);
// //   };

// //   const handleFeeItemChange = (index, field) => (e) => {
// //     if (!fees || !fees[index]) return;
    
// //     const newFees = [...fees];
// //     newFees[index][field] = e.target.value;
// //     setFees(newFees);
// //   };

// //   const handleFeeDateChange = (index, field) => (date) => {
// //     if (!fees || !fees[index]) return;
    
// //     const newFees = [...fees];
// //     newFees[index][field] = date;
// //     setFees(newFees);
// //   };

// //   const handleQuarterlyChange = (index) => (e) => {
// //     if (!fees || !fees[index]) return;
    
// //     const newFees = [...fees];
// //     newFees[index].is_quarterly = e.target.checked;
    
// //     if (e.target.checked) {
// //       // Generate installments when quarterly is checked
// //       const feeItem = newFees[index];
// //       if (feeItem.amount && feeItem.amount > 0) {
// //         const installments = [];
// //         const amountPerInstallment = Math.round(feeItem.amount / paymentFrequency);
// //         const lastInstallmentAmount = feeItem.amount - (amountPerInstallment * (paymentFrequency - 1));

// //         for (let i = 0; i < paymentFrequency; i++) {
// //           const amount = i === paymentFrequency - 1 ? lastInstallmentAmount : amountPerInstallment;
// //           installments.push({
// //             installment_number: i + 1,
// //             amount: amount,
// //             start_date: null,
// //             due_date: null,
// //             status: 'pending'
// //           });
// //         }
// //         newFees[index].installments = installments;
// //       }
// //     } else {
// //       // Clear installments when unchecked
// //       newFees[index].installments = [];
// //     }
    
// //     setFees(newFees);
// //   };

// //   const handleInstallmentDateChange = (feeIndex, installmentIndex, field) => (date) => {
// //     if (!fees || !fees[feeIndex] || !fees[feeIndex].installments || !fees[feeIndex].installments[installmentIndex]) return;
    
// //     const newFees = [...fees];
// //     newFees[feeIndex].installments[installmentIndex][field] = date;
// //     setFees(newFees);
// //   };

// //   const handleAddFeeItem = () => {
// //     setFees([...(fees || []), { 
// //       name: '', 
// //       amount: 0, 
// //       is_quarterly: false,
// //       start_date: null,
// //       due_date: null,
// //       installments: []
// //     }]);
// //   };

// //   const handleRemoveFeeItem = (index) => {
// //     const newFees = (fees || []).filter((_, i) => i !== index);
// //     setFees(newFees);
// //   };

// //   const handleDateChange = (type) => (date) => {
// //     setAcademicYear(prev => ({ ...prev, [type]: date }));
// //   };

// //   const createPayload = () => ({
// //     fee_items: (fees || []).filter(item => item && item.name && item.amount > 0),
// //     total_fee: total,
// //     quarterly_fee: quarterlyTotal,
// //     payment_frequency: paymentFrequency,
// //     academic_year_start: academicYear.start?.format('YYYY-MM-DD') || null,
// //     academic_year_end: academicYear.end?.format('YYYY-MM-DD') || null,
// //   });

// //   const handleSave = () => onSubmit(createPayload());
// //   const handleUpdate = () => onUpdate(createPayload());

// //   // Calculate progress with null checks
// //   const filledFees = (fees || []).filter(f => f && f.name && f.amount > 0).length;
// //   const feesWithDates = (fees || []).filter(f => f && f.name && f.amount > 0 && f.start_date && f.due_date).length;
// //   const quarterlyFeesWithInstallmentDates = (fees || []).filter(f => 
// //     f && f.is_quarterly && f.installments && f.installments.length > 0 &&
// //     f.installments.every(inst => inst.start_date && inst.due_date)
// //   ).length;
// //   const totalQuarterlyFees = (fees || []).filter(f => f && f.is_quarterly).length;
// //   const progress = (fees || []).length > 0 ? (filledFees / (fees || []).length) * 100 : 0;

// //   return (
// //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// //       <Box sx={{ 
// //         minHeight: '100vh',
// //         backgroundColor: '#f5f7fa',
// //         p: { xs: 2, md: 4 }
// //       }}>
// //         <Grid container spacing={3}>
// //           {/* Left Column - Summary Stats */}
// //           <Grid item xs={12} md={3}>
// //             {/* Total Summary Card */}
// //             <StyledCard>
// //               <Box sx={{ textAlign: 'center' }}>
// //                 <Avatar sx={{ 
// //                   bgcolor: 'primary.main', 
// //                   width: 80, 
// //                   height: 80, 
// //                   margin: 'auto',
// //                   mb: 2
// //                 }}>
// //                   <AttachMoney sx={{ fontSize: 40 }} />
// //                 </Avatar>
// //                 <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
// //                   ₹{total.toLocaleString()}
// //                 </Typography>
// //                 <Typography variant="body2" color="text.secondary">
// //                   Total Annual Fee
// //                 </Typography>
// //               </Box>
// //             </StyledCard>

// //             {/* Payment Info Card */}
// //             <StyledCard>
// //               <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
// //                 Payment Information
// //               </Typography>
// //               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
// //                 <Box>
// //                   <Typography variant="caption" color="text.secondary">
// //                     Installments per Fee
// //                   </Typography>
// //                   <Typography variant="h6" sx={{ fontWeight: 600 }}>
// //                     {paymentFrequency} payments
// //                   </Typography>
// //                 </Box>
// //                 <Divider />
// //                 <Box>
// //                   <Typography variant="caption" color="text.secondary">
// //                     Installment Fee Items
// //                   </Typography>
// //                   <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main' }}>
// //                     {(fees || []).filter(f => f && f.is_quarterly).length} items
// //                   </Typography>
// //                 </Box>
// //                 <Divider />
// //                 <Box>
// //                   <Typography variant="caption" color="text.secondary">
// //                     One-time Fee Items
// //                   </Typography>
// //                   <Typography variant="h6" sx={{ fontWeight: 600, color: 'info.main' }}>
// //                     {(fees || []).filter(f => f && !f.is_quarterly).length} items
// //                   </Typography>
// //                 </Box>
// //               </Box>
// //             </StyledCard>

// //             {/* Progress Card */}
// //             <StyledCard>
// //               <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
// //                 Form Completion
// //               </Typography>
// //               <Box sx={{ mb: 2 }}>
// //                 <LinearProgress 
// //                   variant="determinate" 
// //                   value={progress} 
// //                   sx={{ 
// //                     height: 8, 
// //                     borderRadius: 4,
// //                     backgroundColor: 'grey.200',
// //                     '& .MuiLinearProgress-bar': {
// //                       borderRadius: 4,
// //                       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// //                     }
// //                   }}
// //                 />
// //                 <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
// //                   {filledFees} of {(fees || []).length} items completed
// //                 </Typography>
// //               </Box>
// //               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
// //                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// //                   {academicYear.start && academicYear.end ? 
// //                     <CheckCircle color="success" fontSize="small" /> : 
// //                     <Error color="action" fontSize="small" />
// //                   }
// //                   <Typography variant="body2">Academic Year</Typography>
// //                 </Box>
// //                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// //                   {filledFees > 0 ? 
// //                     <CheckCircle color="success" fontSize="small" /> : 
// //                     <Error color="action" fontSize="small" />
// //                   }
// //                   <Typography variant="body2">Fee Items</Typography>
// //                 </Box>
// //                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// //                   {feesWithDates === filledFees ? 
// //                     <CheckCircle color="success" fontSize="small" /> : 
// //                     <Error color="action" fontSize="small" />
// //                   }
// //                   <Typography variant="body2">Fee Dates</Typography>
// //                 </Box>
// //                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
// //                   {totalQuarterlyFees === 0 || quarterlyFeesWithInstallmentDates === totalQuarterlyFees ? 
// //                     <CheckCircle color="success" fontSize="small" /> : 
// //                     <Error color="action" fontSize="small" />
// //                   }
// //                   <Typography variant="body2">Installment Dates</Typography>
// //                 </Box>
// //               </Box>
// //             </StyledCard>
// //           </Grid>

// //           {/* Right Column - Main Form */}
// //           <Grid item xs={12} md={9}>
// //             {/* Academic Year Section */}
// //             <StyledCard 
// //               title="Academic Year"
// //               subtitle="Define the start and end dates for this fee structure"
// //               icon={<CalendarMonth />}
// //             >
// //               <Grid container spacing={3}>
// //                 <Grid item xs={12} md={6}>
// //                   <DatePicker
// //                     label="Academic Year Start"
// //                     value={academicYear.start}
// //                     onChange={handleDateChange('start')}
// //                     slotProps={{ 
// //                       textField: { 
// //                         fullWidth: true,
// //                         sx: {
// //                           '& .MuiOutlinedInput-root': {
// //                             borderRadius: '12px',
// //                             backgroundColor: '#f8f9fa',
// //                             '&:hover': {
// //                               backgroundColor: '#fff',
// //                               boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// //                             },
// //                             '&.Mui-focused': {
// //                               backgroundColor: '#fff',
// //                               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
// //                             },
// //                           },
// //                         }
// //                       } 
// //                     }}
// //                   />
// //                 </Grid>
// //                 <Grid item xs={12} md={6}>
// //                   <DatePicker
// //                     label="Academic Year End"
// //                     value={academicYear.end}
// //                     onChange={handleDateChange('end')}
// //                     slotProps={{ 
// //                       textField: { 
// //                         fullWidth: true,
// //                         sx: {
// //                           '& .MuiOutlinedInput-root': {
// //                             borderRadius: '12px',
// //                             backgroundColor: '#f8f9fa',
// //                             '&:hover': {
// //                               backgroundColor: '#fff',
// //                               boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// //                             },
// //                             '&.Mui-focused': {
// //                               backgroundColor: '#fff',
// //                               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
// //                             },
// //                           },
// //                         }
// //                       } 
// //                     }}
// //                   />
// //                 </Grid>
// //               </Grid>
// //             </StyledCard>

// //             {/* Payment Frequency Selection */}
// //             <StyledCard 
// //               title="Payment Configuration"
// //               subtitle="Set the number of installments for quarterly fees"
// //               icon={<Payment />}
// //             >
// //               <Grid container spacing={3}>
// //                 <Grid item xs={12} md={6}>
// //                   <FormControl fullWidth>
// //                     <InputLabel>Installments per Fee</InputLabel>
// //                     <Select
// //                       value={paymentFrequency}
// //                       label="Installments per Fee"
// //                       onChange={(e) => setPaymentFrequency(Number(e.target.value))}
// //                       sx={{
// //                         borderRadius: '12px',
// //                         backgroundColor: '#f8f9fa',
// //                         '&:hover': {
// //                           backgroundColor: '#fff',
// //                         },
// //                       }}
// //                     >
// //                       <MenuItem value={1}>1 installment (One-time)</MenuItem>
// //                       <MenuItem value={2}>2 installments</MenuItem>
// //                       <MenuItem value={3}>3 installments</MenuItem>
// //                       <MenuItem value={4}>4 installments</MenuItem>
// //                       <MenuItem value={6}>6 installments</MenuItem>
// //                       <MenuItem value={12}>12 installments (Monthly)</MenuItem>
// //                     </Select>
// //                   </FormControl>
// //                 </Grid>
// //                 <Grid item xs={12} md={6}>
// //                   <Paper 
// //                     elevation={0} 
// //                     sx={{ 
// //                       p: 2, 
// //                       borderRadius: '12px',
// //                       background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
// //                       border: '2px solid',
// //                       borderColor: 'primary.light'
// //                     }}
// //                   >
// //                     <Typography variant="caption" color="text.secondary">
// //                       This setting applies to all fees marked as "Allow Installments"
// //                     </Typography>
// //                     <Typography variant="body2" sx={{ fontWeight: 600, mt: 1 }}>
// //                       Each installment fee will be split into {paymentFrequency} equal payments
// //                     </Typography>
// //                   </Paper>
// //                 </Grid>
// //               </Grid>
// //             </StyledCard>

// //             {/* Fee Items Section */}
// //             <StyledCard 
// //               title="Fee Components"
// //               subtitle="Add fee items, set payment dates, and configure installment schedules"
// //               icon={<AccountBalance />}
// //             >
// //               {fees && fees.map((feeItem, feeIndex) => (
// //                 <Box key={feeIndex} sx={{ mb: 4 }}>
// //                   <Paper
// //                     elevation={0}
// //                     sx={{ 
// //                       p: 3, 
// //                       mb: 2,
// //                       borderRadius: '16px',
// //                       backgroundColor: feeIndex % 2 === 0 ? '#f8f9fa' : '#fff',
// //                       border: '2px solid',
// //                       borderColor: feeItem?.is_quarterly ? 'primary.light' : 'divider',
// //                       transition: 'all 0.3s ease',
// //                       '&:hover': {
// //                         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
// //                         transform: 'translateY(-2px)'
// //                       }
// //                     }}
// //                   >
// //                     {/* Basic Fee Information */}
// //                     <Box sx={{ mb: 3 }}>
// //                       <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
// //                         Fee Item #{feeIndex + 1}
// //                       </Typography>
// //                       <Grid container spacing={2} alignItems="center">
// //                         <Grid item xs={12} md={4}>
// //                           <StyledTextField 
// //                             fullWidth 
// //                             label="Fee Name" 
// //                             placeholder="e.g., Tuition Fee, Lab Fee"
// //                             name="name" 
// //                             value={feeItem?.name || ''} 
// //                             onChange={handleFeeItemChange(feeIndex, 'name')} 
// //                           />
// //                         </Grid>
// //                         <Grid item xs={12} md={3}>
// //                           <StyledTextField 
// //                             fullWidth 
// //                             type="number" 
// //                             label="Amount (₹)" 
// //                             name="amount" 
// //                             value={feeItem?.amount || 0} 
// //                             onChange={handleFeeItemChange(feeIndex, 'amount')} 
// //                             inputProps={{ min: 0 }} 
// //                           />
// //                         </Grid>
// //                         <Grid item xs={6} md={3}>
// //                           <FormControlLabel 
// //                             control={
// //                               <Checkbox 
// //                                 checked={feeItem?.is_quarterly || false} 
// //                                 onChange={handleQuarterlyChange(feeIndex)}
// //                                 sx={{ 
// //                                   color: 'primary.main',
// //                                   '&.Mui-checked': {
// //                                     color: 'primary.main',
// //                                   }
// //                                 }}
// //                               />
// //                             } 
// //                             label={
// //                               <Typography variant="body2" sx={{ fontWeight: 600 }}>
// //                                 Allow Installments
// //                               </Typography>
// //                             }
// //                           />
// //                         </Grid>
// //                         <Grid item xs={6} md={2} sx={{ textAlign: 'right' }}>
// //                           <IconButton 
// //                             onClick={() => handleRemoveFeeItem(feeIndex)} 
// //                             sx={{ 
// //                               color: 'error.main',
// //                               '&:hover': {
// //                                 backgroundColor: 'error.light',
// //                                 transform: 'scale(1.1)'
// //                               }
// //                             }}
// //                           >
// //                             <RemoveCircleIcon />
// //                           </IconButton>
// //                         </Grid>
// //                       </Grid>
// //                     </Box>

// //                     {/* Fee Payment Dates - Required for ALL fees */}
// //                     <Box sx={{ 
// //                       p: 2, 
// //                       backgroundColor: '#e8f5e9', 
// //                       borderRadius: '12px',
// //                       border: '1px solid',
// //                       borderColor: 'success.light',
// //                       mb: feeItem?.is_quarterly ? 2 : 0
// //                     }}>
// //                       <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
// //                         <AccessTime sx={{ mr: 1, color: 'success.main' }} />
// //                         <Typography variant="subtitle2" sx={{ fontWeight: 600, color: 'success.main' }}>
// //                           Fee Payment Period (Required)
// //                         </Typography>
// //                       </Box>
// //                       <Grid container spacing={2}>
// //                         <Grid item xs={12} md={6}>
// //                           <DatePicker
// //                             label="Fee Start Date"
// //                             value={feeItem?.start_date}
// //                             onChange={handleFeeDateChange(feeIndex, 'start_date')}
// //                             slotProps={{ 
// //                               textField: { 
// //                                 fullWidth: true,
// //                                 required: true,
// //                                 sx: {
// //                                   '& .MuiOutlinedInput-root': {
// //                                     borderRadius: '8px',
// //                                     backgroundColor: '#fff',
// //                                   }
// //                                 }
// //                               } 
// //                             }}
// //                           />
// //                         </Grid>
// //                         <Grid item xs={12} md={6}>
// //                           <DatePicker
// //                             label="Fee Due Date"
// //                             value={feeItem?.due_date}
// //                             onChange={handleFeeDateChange(feeIndex, 'due_date')}
// //                             slotProps={{ 
// //                               textField: { 
// //                                 fullWidth: true,
// //                                 required: true,
// //                                 sx: {
// //                                   '& .MuiOutlinedInput-root': {
// //                                     borderRadius: '8px',
// //                                     backgroundColor: '#fff',
// //                                   }
// //                                 }
// //                               } 
// //                             }}
// //                           />
// //                         </Grid>
// //                       </Grid>
// //                       <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
// //                         {feeItem?.is_quarterly ? 
// //                           'These dates define the overall period for this fee. Individual installments will have their own dates below.' :
// //                           'These dates define when this one-time fee payment is due.'
// //                         }
// //                       </Typography>
// //                     </Box>

// //                     {/* Installment Schedule for Quarterly Fees */}
// //                     {feeItem && feeItem.is_quarterly && feeItem.installments && feeItem.installments.length > 0 && (
// //                       <Accordion 
// //                         sx={{ 
// //                           borderRadius: '12px',
// //                           '&:before': { display: 'none' },
// //                           boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// //                           border: '2px solid',
// //                           borderColor: 'warning.light'
// //                         }}
// //                         defaultExpanded={true}
// //                       >
// //                         <AccordionSummary 
// //                           expandIcon={<ExpandMoreIcon />}
// //                           sx={{ 
// //                             backgroundColor: '#fff3e0',
// //                             borderRadius: '12px 12px 0 0',
// //                             '&.Mui-expanded': {
// //                               borderBottomLeftRadius: 0,
// //                               borderBottomRightRadius: 0
// //                             }
// //                           }}
// //                         >
// //                           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// //                             <EventNote color="warning" />
// //                             <Box>
// //                               <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
// //                                 {feeItem.name || 'Fee'} - Installment Schedule
// //                               </Typography>
// //                               <Typography variant="body2" color="text.secondary">
// //                                 {paymentFrequency} installments of ₹{Math.round((feeItem.amount || 0) / paymentFrequency)} each
// //                               </Typography>
// //                             </Box>
// //                           </Box>
// //                         </AccordionSummary>
// //                         <AccordionDetails sx={{ p: 0 }}>
// //                           <Box sx={{ p: 2, backgroundColor: '#fafafa' }}>
// //                             <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
// //                               Set individual start and due dates for each installment payment:
// //                             </Typography>
// //                             <TableContainer>
// //                               <Table size="small">
// //                                 <TableHead>
// //                                   <TableRow sx={{ backgroundColor: '#fff3e0' }}>
// //                                     <TableCell sx={{ fontWeight: 600, width: '15%' }}>Installment</TableCell>
// //                                     <TableCell sx={{ fontWeight: 600, width: '15%' }}>Amount</TableCell>
// //                                     <TableCell sx={{ fontWeight: 600, width: '30%' }}>Start Date</TableCell>
// //                                     <TableCell sx={{ fontWeight: 600, width: '30%' }}>Due Date</TableCell>
// //                                     <TableCell sx={{ fontWeight: 600, width: '10%' }}>Status</TableCell>
// //                                   </TableRow>
// //                                 </TableHead>
// //                                 <TableBody>
// //                                   {(feeItem.installments || []).map((installment, installmentIndex) => (
// //                                     <TableRow key={installmentIndex} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
// //                                       <TableCell>
// //                                         <Chip 
// //                                           label={`#${installment?.installment_number || installmentIndex + 1}`}
// //                                           size="small"
// //                                           color="primary"
// //                                           variant="outlined"
// //                                         />
// //                                       </TableCell>
// //                                       <TableCell>
// //                                         <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main' }}>
// //                                           ₹{(installment?.amount || 0).toLocaleString()}
// //                                         </Typography>
// //                                       </TableCell>
// //                                       <TableCell sx={{ width: '200px' }}>
// //                                         <DatePicker
// //                                           label="Start Date"
// //                                           value={installment?.start_date}
// //                                           onChange={handleInstallmentDateChange(feeIndex, installmentIndex, 'start_date')}
// //                                           slotProps={{ 
// //                                             textField: { 
// //                                               size: 'small',
// //                                               fullWidth: true,
// //                                               required: true,
// //                                               sx: {
// //                                                 '& .MuiOutlinedInput-root': {
// //                                                   borderRadius: '8px',
// //                                                   backgroundColor: '#fff'
// //                                                 }
// //                                               }
// //                                             } 
// //                                           }}
// //                                         />
// //                                       </TableCell>
// //                                       <TableCell sx={{ width: '200px' }}>
// //                                         <DatePicker
// //                                           label="Due Date"
// //                                           value={installment?.due_date}
// //                                           onChange={handleInstallmentDateChange(feeIndex, installmentIndex, 'due_date')}
// //                                           slotProps={{ 
// //                                             textField: { 
// //                                               size: 'small',
// //                                               fullWidth: true,
// //                                               required: true,
// //                                               sx: {
// //                                                 '& .MuiOutlinedInput-root': {
// //                                                   borderRadius: '8px',
// //                                                   backgroundColor: '#fff'
// //                                                 }
// //                                               }
// //                                             } 
// //                                           }}
// //                                         />
// //                                       </TableCell>
// //                                       <TableCell>
// //                                         <Chip 
// //                                           label={installment?.start_date && installment?.due_date ? 'Ready' : 'Pending'} 
// //                                           size="small"
// //                                           color={installment?.start_date && installment?.due_date ? 'success' : 'warning'}
// //                                         />
// //                                       </TableCell>
// //                                     </TableRow>
// //                                   ))}
// //                                 </TableBody>
// //                               </Table>
// //                             </TableContainer>
// //                           </Box>
// //                         </AccordionDetails>
// //                       </Accordion>
// //                     )}
// //                   </Paper>
// //                 </Box>
// //               ))}
              
// //               <Box mt={3}>
// //                 <Button 
// //                   variant="outlined" 
// //                   onClick={handleAddFeeItem} 
// //                   startIcon={<AddCircleIcon />}
// //                   sx={{ 
// //                     borderRadius: '12px',
// //                     textTransform: 'none',
// //                     borderWidth: 2,
// //                     px: 3,
// //                     py: 1.5,
// //                     fontSize: '1rem',
// //                     '&:hover': {
// //                       borderWidth: 2,
// //                       backgroundColor: 'primary.light'
// //                     }
// //                   }}
// //                 >
// //                   Add Another Fee Item
// //                 </Button>
// //               </Box>
// //             </StyledCard>

// //             {/* Summary Stats */}
// //             <StyledCard 
// //               title="Fee Summary & Overview"
// //               subtitle="Complete overview of all configured fees and their payment schedules"
// //               icon={<TrendingUp />}
// //             >
// //               <Grid container spacing={2} sx={{ mb: 3 }}>
// //                 <Grid item xs={6} md={3}>
// //                   <Paper 
// //                     elevation={0}
// //                     sx={{ 
// //                       p: 2, 
// //                       textAlign: 'center',
// //                       borderRadius: '12px',
// //                       backgroundColor: '#f8f9fa'
// //                     }}
// //                   >
// //                     <Typography variant="h6" sx={{ fontWeight: 600 }}>
// //                       {(fees || []).filter(f => f && f.name && f.amount > 0).length}
// //                     </Typography>
// //                     <Typography variant="caption" color="text.secondary">
// //                       Total Fee Items
// //                     </Typography>
// //                   </Paper>
// //                 </Grid>
// //                 <Grid item xs={6} md={3}>
// //                   <Paper 
// //                     elevation={0}
// //                     sx={{ 
// //                       p: 2, 
// //                       textAlign: 'center',
// //                       borderRadius: '12px',
// //                       backgroundColor: '#e3f2fd'
// //                     }}
// //                   >
// //                     <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
// //                       {(fees || []).filter(f => f && f.is_quarterly).length}
// //                     </Typography>
// //                     <Typography variant="caption" color="text.secondary">
// //                       Installment Fees
// //                     </Typography>
// //                   </Paper>
// //                 </Grid>
// //                 <Grid item xs={6} md={3}>
// //                   <Paper 
// //                     elevation={0}
// //                     sx={{ 
// //                       p: 2, 
// //                       textAlign: 'center',
// //                       borderRadius: '12px',
// //                       backgroundColor: '#e8f5e9'
// //                     }}
// //                   >
// //                     <Typography variant="h6" sx={{ fontWeight: 600, color: 'success.main' }}>
// //                       ₹{total.toLocaleString()}
// //                     </Typography>
// //                     <Typography variant="caption" color="text.secondary">
// //                       Total Amount
// //                     </Typography>
// //                   </Paper>
// //                 </Grid>
// //                 <Grid item xs={6} md={3}>
// //                   <Paper 
// //                     elevation={0}
// //                     sx={{ 
// //                       p: 2, 
// //                       textAlign: 'center',
// //                       borderRadius: '12px',
// //                       backgroundColor: '#fff3e0'
// //                     }}
// //                   >
// //                     <Typography variant="h6" sx={{ fontWeight: 600, color: 'warning.main' }}>
// //                       {(fees || []).filter(f => f && !f.is_quarterly).length}
// //                     </Typography>
// //                     <Typography variant="caption" color="text.secondary">
// //                       One-time Fees
// //                     </Typography>
// //                   </Paper>
// //                 </Grid>
// //               </Grid>

// //               {/* Detailed Fee Breakdown */}
// //               {(fees || []).filter(f => f && f.name && f.amount > 0).length > 0 && (
// //                 <Box sx={{ mt: 3 }}>
// //                   <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
// //                     Complete Fee Breakdown
// //                   </Typography>
// //                   <TableContainer 
// //                     component={Paper} 
// //                     elevation={0}
// //                     sx={{ 
// //                       borderRadius: '12px',
// //                       backgroundColor: '#f8f9fa'
// //                     }}
// //                   >
// //                     <Table>
// //                       <TableHead>
// //                         <TableRow sx={{ backgroundColor: '#e3f2fd' }}>
// //                           <TableCell sx={{ fontWeight: 600 }}>Fee Name</TableCell>
// //                           <TableCell sx={{ fontWeight: 600 }}>Amount</TableCell>
// //                           <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
// //                           <TableCell sx={{ fontWeight: 600 }}>Fee Dates</TableCell>
// //                           <TableCell sx={{ fontWeight: 600 }}>Installments</TableCell>
// //                           <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
// //                         </TableRow>
// //                       </TableHead>
// //                       <TableBody>
// //                         {(fees || []).filter(f => f && f.name && f.amount > 0).map((fee, index) => (
// //                           <TableRow 
// //                             key={index}
// //                             sx={{ 
// //                               '&:nth-of-type(odd)': { backgroundColor: '#fff' },
// //                               '&:hover': { backgroundColor: '#f0f0f0' }
// //                             }}
// //                           >
// //                             <TableCell>
// //                               <Typography variant="body2" sx={{ fontWeight: 600 }}>
// //                                 {fee.name}
// //                               </Typography>
// //                             </TableCell>
// //                             <TableCell>
// //                               <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main' }}>
// //                                 ₹{fee.amount.toLocaleString()}
// //                               </Typography>
// //                             </TableCell>
// //                             <TableCell>
// //                               <Chip 
// //                                 label={fee.is_quarterly ? 'Installments' : 'One-time'} 
// //                                 size="small"
// //                                 color={fee.is_quarterly ? 'primary' : 'default'}
// //                                 variant="outlined"
// //                               />
// //                             </TableCell>
// //                             <TableCell>
// //                               {fee.start_date && fee.due_date ? (
// //                                 <Box>
// //                                   <Typography variant="caption" color="text.secondary">
// //                                     {fee.start_date.format('MMM DD')} - {fee.due_date.format('MMM DD, YYYY')}
// //                                   </Typography>
// //                                 </Box>
// //                               ) : (
// //                                 <Typography variant="caption" color="error">
// //                                   Dates Required
// //                                 </Typography>
// //                               )}
// //                             </TableCell>
// //                             <TableCell>
// //                               {fee.is_quarterly ? (
// //                                 <Box>
// //                                   <Typography variant="body2">
// //                                     {paymentFrequency} × ₹{Math.round(fee.amount / paymentFrequency)}
// //                                   </Typography>
// //                                   <Typography variant="caption" color="text.secondary">
// //                                     {fee.installments && fee.installments.filter(inst => inst.start_date && inst.due_date).length} of {paymentFrequency} configured
// //                                   </Typography>
// //                                 </Box>
// //                               ) : (
// //                                 <Typography variant="body2" color="text.secondary">
// //                                   N/A
// //                                 </Typography>
// //                               )}
// //                             </TableCell>
// //                             <TableCell>
// //                               {fee.is_quarterly ? (
// //                                 fee.start_date && fee.due_date && fee.installments && 
// //                                 fee.installments.every(inst => inst.start_date && inst.due_date) ? (
// //                                   <Chip 
// //                                     label="Complete" 
// //                                     size="small"
// //                                     color="success"
// //                                   />
// //                                 ) : (
// //                                   <Chip 
// //                                     label="Incomplete" 
// //                                     size="small"
// //                                     color="warning"
// //                                   />
// //                                 )
// //                               ) : (
// //                                 fee.start_date && fee.due_date ? (
// //                                   <Chip 
// //                                     label="Ready" 
// //                                     size="small"
// //                                     color="success"
// //                                   />
// //                                 ) : (
// //                                   <Chip 
// //                                     label="Dates Required" 
// //                                     size="small"
// //                                     color="warning"
// //                                   />
// //                                 )
// //                               )}
// //                             </TableCell>
// //                           </TableRow>
// //                         ))}
// //                       </TableBody>
// //                     </Table>
// //                   </TableContainer>
// //                 </Box>
// //               )}
// //             </StyledCard>

// //             {/* Action Buttons */}
// //             <Box 
// //               sx={{ 
// //                 display: 'flex', 
// //                 justifyContent: 'flex-end', 
// //                 gap: 2, 
// //                 mt: 4,
// //                 flexWrap: 'wrap'
// //               }}
// //             >
// //               {mode === 'update' && (
// //                 <Button 
// //                   variant="outlined" 
// //                   color="error" 
// //                   onClick={onDelete} 
// //                   disabled={loading}
// //                   startIcon={<Delete />}
// //                   sx={{ 
// //                     borderRadius: '12px',
// //                     textTransform: 'none',
// //                     px: 3,
// //                     py: 1.2,
// //                     borderWidth: 2,
// //                     '&:hover': {
// //                       borderWidth: 2,
// //                       backgroundColor: 'error.light'
// //                     }
// //                   }}
// //                 >
// //                   Delete Structure
// //                 </Button>
// //               )}
// //               <Button 
// //                 type="submit" 
// //                 variant="contained" 
// //                 size="large" 
// //                 onClick={mode === 'create' ? handleSave : handleUpdate} 
// //                 disabled={loading}
// //                 startIcon={mode === 'create' ? <Save /> : <Update />}
// //                 sx={{ 
// //                   minWidth: '200px',
// //                   borderRadius: '12px',
// //                   textTransform: 'none',
// //                   px: 4,
// //                   py: 1.5,
// //                   fontSize: '1rem',
// //                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// //                   boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
// //                   '&:hover': {
// //                     background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
// //                     boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
// //                   }
// //                 }}
// //               >
// //                 {loading ? 
// //                   (mode === 'create' ? 'Saving Fee Structure...' : 'Updating Fee Structure...') : 
// //                   (mode === 'create' ? 'Save Complete Fee Structure' : 'Update Complete Fee Structure')
// //                 }
// //               </Button>
// //             </Box>
// //           </Grid>
// //         </Grid>
// //       </Box>
// //     </LocalizationProvider>
// //   );
// // };

// // export default DynamicFeeForm;











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

// // Move StyledTextField outside the main component
// const StyledTextField = ({ ...props }) => (
//   <TextField
//     {...props}
//     variant="outlined"
//     sx={{
//       '& .MuiOutlinedInput-root': {
//         borderRadius: '12px',
//         backgroundColor: '#f8f9fa',
//         transition: 'all 0.3s ease',
//         '&:hover': {
//           backgroundColor: '#fff',
//           boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
//         },
//         '&.Mui-focused': {
//           backgroundColor: '#fff',
//           boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
//         },
//       },
//       ...props.sx
//     }}
//   />
// );

// // Move StyledCard outside the main component as well
// const StyledCard = ({ children, title, icon, subtitle, ...props }) => (
//   <Card 
//     elevation={0}
//     sx={{ 
//       mb: 3,
//       borderRadius: '16px',
//       background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
//       boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
//       transition: 'all 0.3s ease',
//       '&:hover': {
//         boxShadow: '0 6px 30px rgba(0, 0, 0, 0.12)',
//       },
//       ...props.sx
//     }}
//   >
//     <CardContent sx={{ p: 3 }}>
//       {title && (
//         <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//           {icon && (
//             <Avatar sx={{ 
//               bgcolor: 'primary.light', 
//               mr: 2,
//               width: 48,
//               height: 48
//             }}>
//               {icon}
//             </Avatar>
//           )}
//           <Box>
//             <Typography variant="h6" sx={{ 
//               fontWeight: 600,
//               color: 'text.primary'
//             }}>
//               {title}
//             </Typography>
//             {subtitle && (
//               <Typography variant="body2" color="text.secondary">
//                 {subtitle}
//               </Typography>
//             )}
//           </Box>
//         </Box>
//       )}
//       {children}
//     </CardContent>
//   </Card>
// );

// const DynamicFeeForm = ({ 
//   onSubmit = () => {}, 
//   onUpdate = () => {}, 
//   onDelete = () => {}, 
//   loading = false, 
//   initialData = null 
// }) => {
//   // State and logic remain unchanged
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

// StyledTextField and StyledCard remain the same...
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
  // UPDATED: Added startDate and dueDate to the fee item structure
  const [fees, setFees] = useState([{ name: '', amount: 0, is_quarterly: false, startDate: null, dueDate: null }]);
  const [total, setTotal] = useState(0);
  const [quarterlyTotal, setQuarterlyTotal] = useState(0);
  const [paymentFrequency, setPaymentFrequency] = useState(4);
  const [mode, setMode] = useState('create');
  const [academicYear, setAcademicYear] = useState({ start: null, end: null });

  // UPDATED: Logic to handle dates when populating from initialData
  useEffect(() => {
    console.log("initial data :",initialData)
    if (initialData && initialData.id) {
      setMode('update');
      if (initialData.fee_items && initialData.fee_items.length > 0) {
        const processedFees = initialData.fee_items.map(item => ({
          ...item,
          startDate: item.fee_start_date ? dayjs(item.fee_start_date) : null,
          dueDate: item.fee_due_date ? dayjs(item.fee_due_date) : null,
        }));
        setFees(processedFees);
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
      setFees([{ name: '', amount: 0, is_quarterly: false, startDate: null, dueDate: null }]);
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
  
  // ADDED: New handler for date changes within a fee item
  const handleFeeDateChange = (index, field) => (date) => {
    const newFees = [...fees];
    newFees[index][field] = date;
    setFees(newFees);
  };

  // UPDATED: Added startDate and dueDate to new fee items
  const handleAddFeeItem = () => {
    setFees([...fees, { name: '', amount: 0, is_quarterly: false, startDate: null, dueDate: null }]);
  };
  
  const handleRemoveFeeItem = (index) => {
    const newFees = fees.filter((_, i) => i !== index);
    setFees(newFees);
  };
  
  const handleDateChange = (type) => (date) => {
    setAcademicYear(prev => ({ ...prev, [type]: date }));
  };
  
const createPayload = () => {
  const payload = {
    fee_items: fees
      .filter(item => item.name && item.amount > 0)
      .map(item => ({
        // 1. Copy all existing properties from the state (name, amount, is_quarterly)
        ...item,
        
        // 2. Overwrite the date properties with formatted strings
        fee_start_date: item.startDate?.format('YYYY-MM-DD') || null,
        fee_due_date: item.dueDate?.format('YYYY-MM-DD') || null,
      })),
    total_fee: total,
    quarterly_fee: quarterlyTotal,
    payment_frequency: paymentFrequency,
    academic_year_start: academicYear.start?.format('YYYY-MM-DD') || null,
    academic_year_end: academicYear.end?.format('YYYY-MM-DD') || null,
  };
  
  // For debugging, you can log the payload right before it's used
  console.log("Final Payload:", payload);
  
  return payload;
};
  const handleSave = () => onSubmit(createPayload());
  const handleUpdate = () => onUpdate(createPayload());

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
          <Grid item xs={12} md={9}>
            {/* Academic Year Section remains the same */}
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

            <StyledCard 
              title="Fee Components"
              subtitle="Add individual fee items and mark quarterly payments"
              icon={<AccountBalance />}
            >
              {/* UPDATED: JSX for fee item rows now includes DatePickers */}
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
                  }}
                >
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} sm={6} md={5}>
                      <StyledTextField 
                        fullWidth 
                        label="Fee Name" 
                        placeholder="e.g., Tuition Fee"
                        value={feeItem.name} 
                        onChange={handleFeeItemChange(index, 'name')} 
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                      <StyledTextField 
                        fullWidth 
                        type="number" 
                        label="Amount (₹)" 
                        value={feeItem.amount} 
                        onChange={handleFeeItemChange(index, 'amount')} 
                        inputProps={{ min: 0 }} 
                      />
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                      <FormControlLabel 
                        control={
                          <Checkbox 
                            checked={feeItem.is_quarterly} 
                            onChange={handleQuarterlyChange(index)}
                          />
                        } 
                        label={<Typography variant="body2">Quarterly</Typography>}
                      />
                    </Grid>
                    <Grid item xs={6} sm={2} md={1} sx={{ textAlign: 'right' }}>
                      <IconButton 
                        onClick={() => handleRemoveFeeItem(index)} 
                        color="error"
                      >
                        <RemoveCircleIcon />
                      </IconButton>
                    </Grid>

                    {/* --- ADDED: Row for Date Pickers --- */}
                    <Grid item xs={12} sm={6}>
                      <DatePicker
                        label="Payment Start Date"
                        value={feeItem.startDate}
                        onChange={handleFeeDateChange(index, 'startDate')}
                        slotProps={{ textField: { fullWidth: true, sx: { mt: 1 } } }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <DatePicker
                        label="Payment Due Date"
                        value={feeItem.dueDate}
                        onChange={handleFeeDateChange(index, 'dueDate')}
                        slotProps={{ textField: { fullWidth: true, sx: { mt: 1 } } }}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              ))}
              
              {/* Add Fee Item Button and Action Buttons remain the same */}
              <Box mt={3}>
                <Button 
                  variant="outlined" 
                  onClick={handleAddFeeItem} 
                  startIcon={<AddCircleIcon />}
                  // ... sx props
                >
                  Add Fee Item
                </Button>
              </Box>
            </StyledCard>
            
            {/* ... Action buttons JSX ... */}
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