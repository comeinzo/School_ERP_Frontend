// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import {
// // // // // //   TextField, Button, Grid, Box, Typography, Card, CardContent,
// // // // // //   IconButton, Divider, FormControl, InputLabel, Select, MenuItem,
// // // // // //   FormControlLabel, Checkbox, Paper, Chip, Avatar, LinearProgress
// // // // // // } from '@mui/material';
// // // // // // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // // // // // import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// // // // // // import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// // // // // // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // // // // // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // // // // // import dayjs from 'dayjs';
// // // // // // import {
// // // // // //   CalendarMonth, School, AttachMoney, Delete, Save,
// // // // // //   Update, Payment, AccountBalance, Schedule,
// // // // // //   CheckCircle, Error, TrendingUp
// // // // // // } from '@mui/icons-material';

// // // // // // // Move StyledTextField outside the main component
// // // // // // const StyledTextField = ({ ...props }) => (
// // // // // //   <TextField
// // // // // //     {...props}
// // // // // //     variant="outlined"
// // // // // //     sx={{
// // // // // //       '& .MuiOutlinedInput-root': {
// // // // // //         borderRadius: '12px',
// // // // // //         backgroundColor: '#f8f9fa',
// // // // // //         transition: 'all 0.3s ease',
// // // // // //         '&:hover': {
// // // // // //           backgroundColor: '#fff',
// // // // // //           boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// // // // // //         },
// // // // // //         '&.Mui-focused': {
// // // // // //           backgroundColor: '#fff',
// // // // // //           boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
// // // // // //         },
// // // // // //       },
// // // // // //       ...props.sx
// // // // // //     }}
// // // // // //   />
// // // // // // );

// // // // // // // Move StyledCard outside the main component as well
// // // // // // const StyledCard = ({ children, title, icon, subtitle, ...props }) => (
// // // // // //   <Card 
// // // // // //     elevation={0}
// // // // // //     sx={{ 
// // // // // //       mb: 3,
// // // // // //       borderRadius: '16px',
// // // // // //       background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
// // // // // //       boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// // // // // //       transition: 'all 0.3s ease',
// // // // // //       '&:hover': {
// // // // // //         boxShadow: '0 6px 30px rgba(0, 0, 0, 0.12)',
// // // // // //       },
// // // // // //       ...props.sx
// // // // // //     }}
// // // // // //   >
// // // // // //     <CardContent sx={{ p: 3 }}>
// // // // // //       {title && (
// // // // // //         <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
// // // // // //           {icon && (
// // // // // //             <Avatar sx={{ 
// // // // // //               bgcolor: 'primary.light', 
// // // // // //               mr: 2,
// // // // // //               width: 48,
// // // // // //               height: 48
// // // // // //             }}>
// // // // // //               {icon}
// // // // // //             </Avatar>
// // // // // //           )}
// // // // // //           <Box>
// // // // // //             <Typography variant="h6" sx={{ 
// // // // // //               fontWeight: 600,
// // // // // //               color: 'text.primary'
// // // // // //             }}>
// // // // // //               {title}
// // // // // //             </Typography>
// // // // // //             {subtitle && (
// // // // // //               <Typography variant="body2" color="text.secondary">
// // // // // //                 {subtitle}
// // // // // //               </Typography>
// // // // // //             )}
// // // // // //           </Box>
// // // // // //         </Box>
// // // // // //       )}
// // // // // //       {children}
// // // // // //     </CardContent>
// // // // // //   </Card>
// // // // // // );

// // // // // // const DynamicFeeForm = ({ 
// // // // // //   onSubmit = () => {}, 
// // // // // //   onUpdate = () => {}, 
// // // // // //   onDelete = () => {}, 
// // // // // //   loading = false, 
// // // // // //   initialData = null 
// // // // // // }) => {
// // // // // //   // State and logic remain unchanged
// // // // // //   const [fees, setFees] = useState([{ name: '', amount: 0, is_quarterly: false }]);
// // // // // //   const [total, setTotal] = useState(0);
// // // // // //   const [quarterlyTotal, setQuarterlyTotal] = useState(0);
// // // // // //   const [paymentFrequency, setPaymentFrequency] = useState(4);
// // // // // //   const [mode, setMode] = useState('create');
// // // // // //   const [academicYear, setAcademicYear] = useState({ start: null, end: null });

// // // // // //   useEffect(() => {
// // // // // //     if (initialData && initialData.id) {
// // // // // //       setMode('update');
// // // // // //       if (initialData.fee_items && initialData.fee_items.length > 0) {
// // // // // //         setFees(initialData.fee_items);
// // // // // //       }
// // // // // //       if (initialData.academic_year_start) {
// // // // // //         setAcademicYear(prev => ({ ...prev, start: dayjs(initialData.academic_year_start) }));
// // // // // //       }
// // // // // //       if (initialData.academic_year_end) {
// // // // // //         setAcademicYear(prev => ({ ...prev, end: dayjs(initialData.academic_year_end) }));
// // // // // //       }
// // // // // //       if (initialData.payment_frequency) {
// // // // // //         setPaymentFrequency(initialData.payment_frequency);
// // // // // //       }
// // // // // //       if (initialData.quarterly_fee) {
// // // // // //         setQuarterlyTotal(initialData.quarterly_fee);
// // // // // //       }
// // // // // //     } else {
// // // // // //       setMode('create');
// // // // // //       setFees([{ name: '', amount: 0, is_quarterly: false }]);
// // // // // //       setAcademicYear({ start: null, end: null });
// // // // // //     }
// // // // // //   }, [initialData]);

// // // // // //   useEffect(() => {
// // // // // //     const totalAmount = fees.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
// // // // // //     setTotal(totalAmount);
// // // // // //     const quarterlyFeesSum = fees.reduce((sum, item) => sum + (item.is_quarterly ? Number(item.amount) : 0), 0);
// // // // // //     setQuarterlyTotal(Math.round(quarterlyFeesSum / paymentFrequency) || 0);
// // // // // //   }, [fees, paymentFrequency]);

// // // // // //   const handleFeeItemChange = (index, field) => (e) => {
// // // // // //     const newFees = [...fees];
// // // // // //     newFees[index][field] = e.target.value;
// // // // // //     setFees(newFees);
// // // // // //   };
  
// // // // // //   const handleQuarterlyChange = (index) => (e) => {
// // // // // //     const newFees = [...fees];
// // // // // //     newFees[index].is_quarterly = e.target.checked;
// // // // // //     setFees(newFees);
// // // // // //   };
  
// // // // // //   const handleAddFeeItem = () => {
// // // // // //     setFees([...fees, { name: '', amount: 0, is_quarterly: false }]);
// // // // // //   };
  
// // // // // //   const handleRemoveFeeItem = (index) => {
// // // // // //     const newFees = fees.filter((_, i) => i !== index);
// // // // // //     setFees(newFees);
// // // // // //   };
  
// // // // // //   const handleDateChange = (type) => (date) => {
// // // // // //     setAcademicYear(prev => ({ ...prev, [type]: date }));
// // // // // //   };
  
// // // // // //   const createPayload = () => ({
// // // // // //     fee_items: fees.filter(item => item.name && item.amount > 0),
// // // // // //     total_fee: total,
// // // // // //     quarterly_fee: quarterlyTotal,
// // // // // //     payment_frequency: paymentFrequency,
// // // // // //     academic_year_start: academicYear.start?.format('YYYY-MM-DD') || null,
// // // // // //     academic_year_end: academicYear.end?.format('YYYY-MM-DD') || null,
// // // // // //   });
  
// // // // // //   const handleSave = () => onSubmit(createPayload());
// // // // // //   const handleUpdate = () => onUpdate(createPayload());

// // // // // //   // Calculate progress
// // // // // //   const filledFees = fees.filter(f => f.name && f.amount > 0).length;
// // // // // //   const progress = fees.length > 0 ? (filledFees / fees.length) * 100 : 0;

// // // // // //   return (
// // // // // //     <LocalizationProvider dateAdapter={AdapterDayjs}>
// // // // // //       <Box sx={{ 
// // // // // //         minHeight: '100vh',
// // // // // //         backgroundColor: '#f5f7fa',
// // // // // //         p: { xs: 2, md: 4 }
// // // // // //       }}>
// // // // // //         <Grid container spacing={3}>
// // // // // //           {/* Right Column - Main Form */}
// // // // // //           <Grid item xs={12} md={9}>
// // // // // //             {/* Academic Year Section */}
// // // // // //             <StyledCard 
// // // // // //               title="Academic Year"
// // // // // //               subtitle="Define the start and end dates for this fee structure"
// // // // // //               icon={<CalendarMonth />}
// // // // // //             >
// // // // // //               <Grid container spacing={3}>
// // // // // //                 <Grid item xs={12} md={6}>
// // // // // //                   <DatePicker
// // // // // //                     label="Academic Year Start"
// // // // // //                     value={academicYear.start}
// // // // // //                     onChange={handleDateChange('start')}
// // // // // //                     slotProps={{ 
// // // // // //                       textField: { 
// // // // // //                         fullWidth: true,
// // // // // //                         sx: {
// // // // // //                           '& .MuiOutlinedInput-root': {
// // // // // //                             borderRadius: '12px',
// // // // // //                             backgroundColor: '#f8f9fa',
// // // // // //                             '&:hover': {
// // // // // //                               backgroundColor: '#fff',
// // // // // //                               boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// // // // // //                             },
// // // // // //                             '&.Mui-focused': {
// // // // // //                               backgroundColor: '#fff',
// // // // // //                               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
// // // // // //                             },
// // // // // //                           },
// // // // // //                         }
// // // // // //                       } 
// // // // // //                     }}
// // // // // //                   />
// // // // // //                 </Grid>
// // // // // //                 <Grid item xs={12} md={6}>
// // // // // //                   <DatePicker
// // // // // //                     label="Academic Year End"
// // // // // //                     value={academicYear.end}
// // // // // //                     onChange={handleDateChange('end')}
// // // // // //                     slotProps={{ 
// // // // // //                       textField: { 
// // // // // //                         fullWidth: true,
// // // // // //                         sx: {
// // // // // //                           '& .MuiOutlinedInput-root': {
// // // // // //                             borderRadius: '12px',
// // // // // //                             backgroundColor: '#f8f9fa',
// // // // // //                             '&:hover': {
// // // // // //                               backgroundColor: '#fff',
// // // // // //                               boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// // // // // //                             },
// // // // // //                             '&.Mui-focused': {
// // // // // //                               backgroundColor: '#fff',
// // // // // //                               boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
// // // // // //                             },
// // // // // //                           },
// // // // // //                         }
// // // // // //                       } 
// // // // // //                     }}
// // // // // //                   />
// // // // // //                 </Grid>
// // // // // //               </Grid>
// // // // // //             </StyledCard>

// // // // // //             {/* Fee Items Section */}
// // // // // //             <StyledCard 
// // // // // //               title="Fee Components"
// // // // // //               subtitle="Add individual fee items and mark quarterly payments"
// // // // // //               icon={<AccountBalance />}
// // // // // //             >
// // // // // //               {fees.map((feeItem, index) => (
// // // // // //                 <Paper
// // // // // //                   key={index}
// // // // // //                   elevation={0}
// // // // // //                   sx={{ 
// // // // // //                     p: 2, 
// // // // // //                     mb: 2,
// // // // // //                     borderRadius: '12px',
// // // // // //                     backgroundColor: index % 2 === 0 ? '#f8f9fa' : '#fff',
// // // // // //                     border: '1px solid',
// // // // // //                     borderColor: 'divider',
// // // // // //                     transition: 'all 0.3s ease',
// // // // // //                     '&:hover': {
// // // // // //                       boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// // // // // //                       transform: 'translateY(-2px)'
// // // // // //                     }
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   <Grid container spacing={2} alignItems="center">
// // // // // //                     <Grid item xs={12} md={5}>
// // // // // //                       <StyledTextField 
// // // // // //                         fullWidth 
// // // // // //                         label="Fee Name" 
// // // // // //                         placeholder="e.g., Tuition Fee, Lab Fee"
// // // // // //                         name="name" 
// // // // // //                         value={feeItem.name} 
// // // // // //                         onChange={handleFeeItemChange(index, 'name')} 
// // // // // //                       />
// // // // // //                     </Grid>
// // // // // //                     <Grid item xs={12} md={4}>
// // // // // //                       <StyledTextField 
// // // // // //                         fullWidth 
// // // // // //                         type="number" 
// // // // // //                         label="Amount (₹)" 
// // // // // //                         name="amount" 
// // // // // //                         value={feeItem.amount} 
// // // // // //                         onChange={handleFeeItemChange(index, 'amount')} 
// // // // // //                         inputProps={{ min: 0 }} 
// // // // // //                       />
// // // // // //                     </Grid>
// // // // // //                     <Grid item xs={6} md={2}>
// // // // // //                       <FormControlLabel 
// // // // // //                         control={
// // // // // //                           <Checkbox 
// // // // // //                             checked={feeItem.is_quarterly} 
// // // // // //                             onChange={handleQuarterlyChange(index)}
// // // // // //                             sx={{ 
// // // // // //                               color: 'primary.main',
// // // // // //                               '&.Mui-checked': {
// // // // // //                                 color: 'primary.main',
// // // // // //                               }
// // // // // //                             }}
// // // // // //                           />
// // // // // //                         } 
// // // // // //                         label={
// // // // // //                           <Typography variant="body2">
// // // // // //                             Quarterly
// // // // // //                           </Typography>
// // // // // //                         }
// // // // // //                       />
// // // // // //                     </Grid>
// // // // // //                     <Grid item xs={6} md={1} sx={{ textAlign: 'right' }}>
// // // // // //                       <IconButton 
// // // // // //                         onClick={() => handleRemoveFeeItem(index)} 
// // // // // //                         sx={{ 
// // // // // //                           color: 'error.main',
// // // // // //                           '&:hover': {
// // // // // //                             backgroundColor: 'error.light',
// // // // // //                             transform: 'scale(1.1)'
// // // // // //                           }
// // // // // //                         }}
// // // // // //                       >
// // // // // //                         <RemoveCircleIcon />
// // // // // //                       </IconButton>
// // // // // //                     </Grid>
// // // // // //                   </Grid>
// // // // // //                 </Paper>
// // // // // //               ))}
              
// // // // // //               <Box mt={3}>
// // // // // //                 <Button 
// // // // // //                   variant="outlined" 
// // // // // //                   onClick={handleAddFeeItem} 
// // // // // //                   startIcon={<AddCircleIcon />}
// // // // // //                   sx={{ 
// // // // // //                     borderRadius: '12px',
// // // // // //                     textTransform: 'none',
// // // // // //                     borderWidth: 2,
// // // // // //                     px: 3,
// // // // // //                     py: 1,
// // // // // //                     '&:hover': {
// // // // // //                       borderWidth: 2,
// // // // // //                       backgroundColor: 'primary.light'
// // // // // //                     }
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   Add Fee Item
// // // // // //                 </Button>
// // // // // //               </Box>
// // // // // //             </StyledCard>
// // // // // //             {/* Action Buttons */}
// // // // // //             <Box 
// // // // // //               sx={{ 
// // // // // //                 display: 'flex', 
// // // // // //                 justifyContent: 'flex-end', 
// // // // // //                 gap: 2, 
// // // // // //                 mt: 4,
// // // // // //                 flexWrap: 'wrap'
// // // // // //               }}
// // // // // //             >
// // // // // //               {mode === 'update' && (
// // // // // //                 <Button 
// // // // // //                   variant="outlined" 
// // // // // //                   color="error" 
// // // // // //                   onClick={onDelete} 
// // // // // //                   disabled={loading}
// // // // // //                   startIcon={<Delete />}
// // // // // //                   sx={{ 
// // // // // //                     borderRadius: '12px',
// // // // // //                     textTransform: 'none',
// // // // // //                     px: 3,
// // // // // //                     py: 1.2,
// // // // // //                     borderWidth: 2,
// // // // // //                     '&:hover': {
// // // // // //                       borderWidth: 2,
// // // // // //                       backgroundColor: 'error.light'
// // // // // //                     }
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   Delete Structure
// // // // // //                 </Button>
// // // // // //               )}
// // // // // //               <Button 
// // // // // //                 type="submit" 
// // // // // //                 variant="contained" 
// // // // // //                 size="large" 
// // // // // //                 onClick={mode === 'create' ? handleSave : handleUpdate} 
// // // // // //                 disabled={loading}
// // // // // //                 startIcon={mode === 'create' ? <Save /> : <Update />}
// // // // // //                 sx={{ 
// // // // // //                   minWidth: '180px',
// // // // // //                   borderRadius: '12px',
// // // // // //                   textTransform: 'none',
// // // // // //                   px: 4,
// // // // // //                   py: 1.2,
// // // // // //                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
// // // // // //                   boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
// // // // // //                   '&:hover': {
// // // // // //                     background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
// // // // // //                     boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
// // // // // //                   }
// // // // // //                 }}
// // // // // //               >
// // // // // //                 {loading ? 
// // // // // //                   (mode === 'create' ? 'Saving...' : 'Updating...') : 
// // // // // //                   (mode === 'create' ? 'Save Fee Structure' : 'Update Fee Structure')
// // // // // //                 }
// // // // // //               </Button>
// // // // // //             </Box>
// // // // // //           </Grid>
// // // // // //         </Grid>
// // // // // //       </Box>
// // // // // //     </LocalizationProvider>
// // // // // //   );
// // // // // // };

// // // // // // export default DynamicFeeForm;






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

// // // // // // StyledTextField and StyledCard remain the same...
// // // // // const StyledTextField = ({ ...props }) => (
// // // // //     <TextField
// // // // //       {...props}
// // // // //       variant="outlined"
// // // // //       sx={{
// // // // //         '& .MuiOutlinedInput-root': {
// // // // //           borderRadius: '12px',
// // // // //           backgroundColor: '#f8f9fa',
// // // // //           transition: 'all 0.3s ease',
// // // // //           '&:hover': {
// // // // //             backgroundColor: '#fff',
// // // // //             boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// // // // //           },
// // // // //           '&.Mui-focused': {
// // // // //             backgroundColor: '#fff',
// // // // //             boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
// // // // //           },
// // // // //         },
// // // // //         ...props.sx
// // // // //       }}
// // // // //     />
// // // // // );
  
// // // // // const StyledCard = ({ children, title, icon, subtitle, ...props }) => (
// // // // //     <Card 
// // // // //       elevation={0}
// // // // //       sx={{ 
// // // // //         mb: 3,
// // // // //         borderRadius: '16px',
// // // // //         background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
// // // // //         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// // // // //         transition: 'all 0.3s ease',
// // // // //         '&:hover': {
// // // // //           boxShadow: '0 6px 30px rgba(0, 0, 0, 0.12)',
// // // // //         },
// // // // //         ...props.sx
// // // // //       }}
// // // // //     >
// // // // //       <CardContent sx={{ p: 3 }}>
// // // // //         {title && (
// // // // //           <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
// // // // //             {icon && (
// // // // //               <Avatar sx={{ 
// // // // //                 bgcolor: 'primary.light', 
// // // // //                 mr: 2,
// // // // //                 width: 48,
// // // // //                 height: 48
// // // // //               }}>
// // // // //                 {icon}
// // // // //               </Avatar>
// // // // //             )}
// // // // //             <Box>
// // // // //               <Typography variant="h6" sx={{ 
// // // // //                 fontWeight: 600,
// // // // //                 color: 'text.primary'
// // // // //               }}>
// // // // //                 {title}
// // // // //               </Typography>
// // // // //               {subtitle && (
// // // // //                 <Typography variant="body2" color="text.secondary">
// // // // //                   {subtitle}
// // // // //                 </Typography>
// // // // //               )}
// // // // //             </Box>
// // // // //           </Box>
// // // // //         )}
// // // // //         {children}
// // // // //       </CardContent>
// // // // //     </Card>
// // // // // );

// // // // // const DynamicFeeForm = ({ 
// // // // //   onSubmit = () => {}, 
// // // // //   onUpdate = () => {}, 
// // // // //   onDelete = () => {}, 
// // // // //   loading = false, 
// // // // //   initialData = null 
// // // // // }) => {
// // // // //   // UPDATED: Added startDate and dueDate to the fee item structure
// // // // //   const [fees, setFees] = useState([{ name: '', amount: 0, is_quarterly: false, startDate: null, dueDate: null }]);
// // // // //   const [total, setTotal] = useState(0);
// // // // //   const [quarterlyTotal, setQuarterlyTotal] = useState(0);
// // // // //   const [paymentFrequency, setPaymentFrequency] = useState(4);
// // // // //   const [mode, setMode] = useState('create');
// // // // //   const [academicYear, setAcademicYear] = useState({ start: null, end: null });

// // // // //   // UPDATED: Logic to handle dates when populating from initialData
// // // // //   useEffect(() => {
// // // // //     console.log("initial data :",initialData)
// // // // //     if (initialData && initialData.id) {
// // // // //       setMode('update');
// // // // //       if (initialData.fee_items && initialData.fee_items.length > 0) {
// // // // //         const processedFees = initialData.fee_items.map(item => ({
// // // // //           ...item,
// // // // //           startDate: item.fee_start_date ? dayjs(item.fee_start_date) : null,
// // // // //           dueDate: item.fee_due_date ? dayjs(item.fee_due_date) : null,
// // // // //         }));
// // // // //         setFees(processedFees);
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
// // // // //       setFees([{ name: '', amount: 0, is_quarterly: false, startDate: null, dueDate: null }]);
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
  
// // // // //   // ADDED: New handler for date changes within a fee item
// // // // //   const handleFeeDateChange = (index, field) => (date) => {
// // // // //     const newFees = [...fees];
// // // // //     newFees[index][field] = date;
// // // // //     setFees(newFees);
// // // // //   };

// // // // //   // UPDATED: Added startDate and dueDate to new fee items
// // // // //   const handleAddFeeItem = () => {
// // // // //     setFees([...fees, { name: '', amount: 0, is_quarterly: false, startDate: null, dueDate: null }]);
// // // // //   };
  
// // // // //   const handleRemoveFeeItem = (index) => {
// // // // //     const newFees = fees.filter((_, i) => i !== index);
// // // // //     setFees(newFees);
// // // // //   };
  
// // // // //   const handleDateChange = (type) => (date) => {
// // // // //     setAcademicYear(prev => ({ ...prev, [type]: date }));
// // // // //   };
  
// // // // // const createPayload = () => {
// // // // //   const payload = {
// // // // //     fee_items: fees
// // // // //       .filter(item => item.name && item.amount > 0)
// // // // //       .map(item => ({
// // // // //         // 1. Copy all existing properties from the state (name, amount, is_quarterly)
// // // // //         ...item,
        
// // // // //         // 2. Overwrite the date properties with formatted strings
// // // // //         fee_start_date: item.startDate?.format('YYYY-MM-DD') || null,
// // // // //         fee_due_date: item.dueDate?.format('YYYY-MM-DD') || null,
// // // // //       })),
// // // // //     total_fee: total,
// // // // //     quarterly_fee: quarterlyTotal,
// // // // //     payment_frequency: paymentFrequency,
// // // // //     academic_year_start: academicYear.start?.format('YYYY-MM-DD') || null,
// // // // //     academic_year_end: academicYear.end?.format('YYYY-MM-DD') || null,
// // // // //   };
  
// // // // //   // For debugging, you can log the payload right before it's used
// // // // //   console.log("Final Payload:", payload);
  
// // // // //   return payload;
// // // // // };
// // // // //   const handleSave = () => onSubmit(createPayload());
// // // // //   const handleUpdate = () => onUpdate(createPayload());

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
// // // // //           <Grid item xs={12} md={9}>
// // // // //             {/* Academic Year Section remains the same */}
// // // // //             <StyledCard 
// // // // //               title="Academic Year"
// // // // //               subtitle="Define the start and end dates for this fee structure"
// // // // //               icon={<CalendarMonth />}
// // // // //             >
// // // // //                               <Grid container spacing={3}>
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

// // // // //             <StyledCard 
// // // // //               title="Fee Components"
// // // // //               subtitle="Add individual fee items and mark quarterly payments"
// // // // //               icon={<AccountBalance />}
// // // // //             >
// // // // //               {/* UPDATED: JSX for fee item rows now includes DatePickers */}
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
// // // // //                   }}
// // // // //                 >
// // // // //                   <Grid container spacing={2} alignItems="center">
// // // // //                     <Grid item xs={12} sm={6} md={5}>
// // // // //                       <StyledTextField 
// // // // //                         fullWidth 
// // // // //                         label="Fee Name" 
// // // // //                         placeholder="e.g., Tuition Fee"
// // // // //                         value={feeItem.name} 
// // // // //                         onChange={handleFeeItemChange(index, 'name')} 
// // // // //                       />
// // // // //                     </Grid>
// // // // //                     <Grid item xs={12} sm={6} md={3}>
// // // // //                       <StyledTextField 
// // // // //                         fullWidth 
// // // // //                         type="number" 
// // // // //                         label="Amount (₹)" 
// // // // //                         value={feeItem.amount} 
// // // // //                         onChange={handleFeeItemChange(index, 'amount')} 
// // // // //                         inputProps={{ min: 0 }} 
// // // // //                       />
// // // // //                     </Grid>
// // // // //                     <Grid item xs={6} sm={4} md={3}>
// // // // //                       <FormControlLabel 
// // // // //                         control={
// // // // //                           <Checkbox 
// // // // //                             checked={feeItem.is_quarterly} 
// // // // //                             onChange={handleQuarterlyChange(index)}
// // // // //                           />
// // // // //                         } 
// // // // //                         label={<Typography variant="body2">Quarterly</Typography>}
// // // // //                       />
// // // // //                     </Grid>
// // // // //                     <Grid item xs={6} sm={2} md={1} sx={{ textAlign: 'right' }}>
// // // // //                       <IconButton 
// // // // //                         onClick={() => handleRemoveFeeItem(index)} 
// // // // //                         color="error"
// // // // //                       >
// // // // //                         <RemoveCircleIcon />
// // // // //                       </IconButton>
// // // // //                     </Grid>

// // // // //                     {/* --- ADDED: Row for Date Pickers --- */}
// // // // //                     <Grid item xs={12} sm={6}>
// // // // //                       <DatePicker
// // // // //                         label="Payment Start Date"
// // // // //                         value={feeItem.startDate}
// // // // //                         onChange={handleFeeDateChange(index, 'startDate')}
// // // // //                         slotProps={{ textField: { fullWidth: true, sx: { mt: 1 } } }}
// // // // //                       />
// // // // //                     </Grid>
// // // // //                     <Grid item xs={12} sm={6}>
// // // // //                       <DatePicker
// // // // //                         label="Payment Due Date"
// // // // //                         value={feeItem.dueDate}
// // // // //                         onChange={handleFeeDateChange(index, 'dueDate')}
// // // // //                         slotProps={{ textField: { fullWidth: true, sx: { mt: 1 } } }}
// // // // //                       />
// // // // //                     </Grid>
// // // // //                   </Grid>
// // // // //                 </Paper>
// // // // //               ))}
              
// // // // //               {/* Add Fee Item Button and Action Buttons remain the same */}
// // // // //               <Box mt={3}>
// // // // //                 <Button 
// // // // //                   variant="outlined" 
// // // // //                   onClick={handleAddFeeItem} 
// // // // //                   startIcon={<AddCircleIcon />}
// // // // //                   // ... sx props
// // // // //                 >
// // // // //                   Add Fee Item
// // // // //                 </Button>
// // // // //               </Box>
// // // // //             </StyledCard>
            
// // // // //             {/* ... Action buttons JSX ... */}
// // // // //                         <Box 
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
// // // //     TextField, Button, Grid, Box, Typography, Card, CardContent,
// // // //     IconButton, Paper, Avatar, FormControlLabel, Checkbox
// // // // } from '@mui/material';
// // // // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // // // import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// // // // import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// // // // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // // // import dayjs from 'dayjs';
// // // // import { Delete, Update, AccountBalance } from '@mui/icons-material';

// // // // // Styled component for consistent text field appearance
// // // // const StyledTextField = ({ ...props }) => (
// // // //     <TextField
// // // //       {...props}
// // // //       variant="outlined"
// // // //       sx={{
// // // //         '& .MuiOutlinedInput-root': {
// // // //           borderRadius: '12px',
// // // //           backgroundColor: '#f8f9fa',
// // // //           transition: 'all 0.3s ease',
// // // //           '&:hover': {
// // // //             backgroundColor: '#fff',
// // // //             boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// // // //           },
// // // //           '&.Mui-focused': {
// // // //             backgroundColor: '#fff',
// // // //             boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
// // // //           },
// // // //         },
// // // //         ...props.sx
// // // //       }}
// // // //     />
// // // // );

// // // // // Styled component for consistent card appearance
// // // // const StyledCard = ({ children, title, icon, subtitle, ...props }) => (
// // // //     <Card 
// // // //       elevation={0}
// // // //       sx={{ 
// // // //         mb: 3,
// // // //         borderRadius: '16px',
// // // //         background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
// // // //         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// // // //         transition: 'all 0.3s ease',
// // // //         '&:hover': {
// // // //           boxShadow: '0 6px 30px rgba(0, 0, 0, 0.12)',
// // // //         },
// // // //         ...props.sx
// // // //       }}
// // // //     >
// // // //       <CardContent sx={{ p: 3 }}>
// // // //         {title && (
// // // //           <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
// // // //             {icon && (
// // // //               <Avatar sx={{ 
// // // //                 bgcolor: 'primary.light', 
// // // //                 mr: 2,
// // // //                 width: 48,
// // // //                 height: 48
// // // //               }}>
// // // //                 {icon}
// // // //               </Avatar>
// // // //             )}
// // // //             <Box>
// // // //               <Typography variant="h6" sx={{ 
// // // //                 fontWeight: 600,
// // // //                 color: 'text.primary'
// // // //               }}>
// // // //                 {title}
// // // //               </Typography>
// // // //               {subtitle && (
// // // //                 <Typography variant="body2" color="text.secondary">
// // // //                   {subtitle}
// // // //                 </Typography>
// // // //               )}
// // // //             </Box>
// // // //           </Box>
// // // //         )}
// // // //         {children}
// // // //       </CardContent>
// // // //     </Card>
// // // // );


// // // // const AdmissionFeeForm = ({ 
// // // //     onSubmit = () => {}, 
// // // //     onUpdate = () => {}, 
// // // //     onDelete = () => {}, 
// // // //     loading = false, 
// // // //     initialData = {} 
// // // // }) => {
// // // //     const [fees, setFees] = useState([{ name: '', amount: 0, is_quarterly: false, startDate: null, dueDate: null }]);
// // // //     const [total, setTotal] = useState(0);
// // // //     const [quarterlyTotal, setQuarterlyTotal] = useState(0);
// // // //     const [paymentFrequency, setPaymentFrequency] = useState(4);
// // // //     const [mode, setMode] = useState('create');
// // // //     const [academicYear, setAcademicYear] = useState({ start: null, end: null });

// // // //     useEffect(() => {
// // // //         if (initialData && initialData.id) {
// // // //             setMode('update');
// // // //             const feeItems = initialData.fee_items || [];
// // // //             setFees(feeItems.length > 0 ? feeItems.map(item => ({
// // // //                 ...item,
// // // //                 startDate: item.fee_start_date ? dayjs(item.fee_start_date) : null,
// // // //                 dueDate: item.fee_due_date ? dayjs(item.fee_due_date) : null,
// // // //             })) : [{ name: '', amount: 0, is_quarterly: false, startDate: null, dueDate: null }]);

// // // //             setAcademicYear({
// // // //                 start: initialData.academic_year_start ? dayjs(initialData.academic_year_start) : null,
// // // //                 end: initialData.academic_year_end ? dayjs(initialData.academic_year_end) : null
// // // //             });
// // // //             setPaymentFrequency(initialData.payment_frequency || 4);
// // // //         } else {
// // // //             setMode('create');
// // // //             setFees([{ name: '', amount: 0, is_quarterly: false, startDate: null, dueDate: null }]);
// // // //             setAcademicYear({
// // // //                 start: initialData.academic_year_start ? dayjs(initialData.academic_year_start) : null,
// // // //                 end: initialData.academic_year_end ? dayjs(initialData.academic_year_end) : null
// // // //             });
// // // //         }
// // // //     }, [initialData]);

// // // //     useEffect(() => {
// // // //         const totalAmount = fees.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
// // // //         setTotal(totalAmount);
// // // //         const quarterlyFeesSum = fees.reduce((sum, item) => sum + (item.is_quarterly ? Number(item.amount) : 0), 0);
// // // //         setQuarterlyTotal(Math.round(quarterlyFeesSum / paymentFrequency) || 0);
// // // //     }, [fees, paymentFrequency]);

// // // //     const handleFeeItemChange = (index, field) => (e) => {
// // // //         const newFees = [...fees];
// // // //         newFees[index][field] = e.target.value;
// // // //         setFees(newFees);
// // // //     };
    
// // // //     const handleQuarterlyChange = (index) => (e) => {
// // // //         const newFees = [...fees];
// // // //         newFees[index].is_quarterly = e.target.checked;
// // // //         setFees(newFees);
// // // //     };
    
// // // //     const handleFeeDateChange = (index, field) => (date) => {
// // // //         const newFees = [...fees];
// // // //         newFees[index][field] = date;
// // // //         setFees(newFees);
// // // //     };

// // // //     const handleAddFeeItem = () => {
// // // //         setFees([...fees, { name: '', amount: 0, is_quarterly: false, startDate: null, dueDate: null }]);
// // // //     };
    
// // // //     const handleRemoveFeeItem = (index) => {
// // // //         const newFees = fees.filter((_, i) => i !== index);
// // // //         setFees(newFees);
// // // //     };
    
// // // //     const createPayload = () => ({
// // // //         academic_year_start: academicYear.start?.format('YYYY-MM-DD') || null,
// // // //         academic_year_end: academicYear.end?.format('YYYY-MM-DD') || null,
// // // //         total_fee: total,
// // // //         quarterly_fee: quarterlyTotal,
// // // //         payment_frequency: paymentFrequency,
// // // //         fee_items: fees.filter(item => item.name && item.amount > 0).map(item => ({
// // // //             name: item.name,
// // // //             amount: item.amount,
// // // //             is_quarterly: item.is_quarterly,
// // // //             fee_start_date: item.startDate?.format('YYYY-MM-DD') || null,
// // // //             fee_due_date: item.dueDate?.format('YYYY-MM-DD') || null,
// // // //         })),
// // // //     });

// // // //     const handleUpdate = () => onUpdate(createPayload());

// // // //     return (
// // // //         <LocalizationProvider dateAdapter={AdapterDayjs}>
// // // //             <Box>
// // // //                 <StyledCard 
// // // //                     title="Fee Components" 
// // // //                     subtitle={`Editing for Academic Year: ${academicYear.start ? academicYear.start.format('YYYY') : ''} - ${academicYear.end ? academicYear.end.format('YYYY') : ''}`} 
// // // //                     icon={<AccountBalance />}
// // // //                 >
// // // //                     {fees.map((feeItem, index) => (
// // // //                         <Paper key={index} elevation={0} sx={{ p: 2, mb: 2, borderRadius: '12px', border: '1px solid #e0e0e0' }}>
// // // //                             <Grid container spacing={2} alignItems="center">
// // // //                                 <Grid item xs={12} md={5}>
// // // //                                     <StyledTextField fullWidth label="Fee Name" placeholder="e.g., Tuition Fee" value={feeItem.name} onChange={handleFeeItemChange(index, 'name')} />
// // // //                                 </Grid>
// // // //                                 <Grid item xs={12} md={3}>
// // // //                                     <StyledTextField fullWidth type="number" label="Amount (₹)" value={feeItem.amount} onChange={handleFeeItemChange(index, 'amount')} inputProps={{ min: 0 }} />
// // // //                                 </Grid>
// // // //                                 <Grid item xs={6} md={3}>
// // // //                                     <FormControlLabel control={<Checkbox checked={feeItem.is_quarterly} onChange={handleQuarterlyChange(index)} />} label="Installment" />
// // // //                                 </Grid>
// // // //                                 <Grid item xs={6} md={1} sx={{ textAlign: 'right' }}>
// // // //                                     <IconButton onClick={() => handleRemoveFeeItem(index)} color="error"><RemoveCircleIcon /></IconButton>
// // // //                                 </Grid>
// // // //                                 <Grid item xs={12} sm={6}>
// // // //                                     <DatePicker label="Payment Start Date" value={feeItem.startDate} onChange={handleFeeDateChange(index, 'startDate')} slotProps={{ textField: { fullWidth: true, sx: { mt: 1 } } }} />
// // // //                                 </Grid>
// // // //                                 <Grid item xs={12} sm={6}>
// // // //                                     <DatePicker label="Payment Due Date" value={feeItem.dueDate} onChange={handleFeeDateChange(index, 'dueDate')} slotProps={{ textField: { fullWidth: true, sx: { mt: 1 } } }} />
// // // //                                 </Grid>
// // // //                             </Grid>
// // // //                         </Paper>
// // // //                     ))}
// // // //                     <Box mt={3}>
// // // //                         <Button variant="outlined" onClick={handleAddFeeItem} startIcon={<AddCircleIcon />}>
// // // //                             Add Fee Item
// // // //                         </Button>
// // // //                     </Box>
// // // //                 </StyledCard>
                
// // // //                 <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
// // // //                     {mode === 'update' && (
// // // //                         <Button variant="outlined" color="error" onClick={onDelete} disabled={loading} startIcon={<Delete />}>
// // // //                             Delete Structure
// // // //                         </Button>
// // // //                     )}
// // // //                     <Button type="submit" variant="contained" size="large" onClick={handleUpdate} disabled={loading} startIcon={<Update />}>
// // // //                         {loading ? 'Saving...' : 'Save Changes'}
// // // //                     </Button>
// // // //                 </Box>
// // // //             </Box>
// // // //         </LocalizationProvider>
// // // //     );
// // // // };

// // // // export default AdmissionFeeForm;





// // // // import React, { useState, useEffect } from 'react';
// // // // import {
// // // //     TextField, Button, Grid, Box, Typography, Card, CardContent,
// // // //     IconButton, Paper, Avatar, FormControl, InputLabel, Select, MenuItem
// // // // } from '@mui/material';
// // // // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // // // import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// // // // import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// // // // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // // // import dayjs from 'dayjs';
// // // // import { v4 as uuidv4 } from 'uuid'; // Make sure you have run: npm install uuid
// // // // import { Delete, Update, AccountBalance } from '@mui/icons-material';

// // // // // Styled component for consistent text field appearance
// // // // const StyledTextField = ({ ...props }) => (
// // // //     <TextField
// // // //       {...props}
// // // //       variant="outlined"
// // // //       sx={{
// // // //         '& .MuiOutlinedInput-root': {
// // // //           borderRadius: '12px',
// // // //           backgroundColor: '#f8f9fa',
// // // //           transition: 'all 0.3s ease',
// // // //           '&:hover': {
// // // //             backgroundColor: '#fff',
// // // //             boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// // // //           },
// // // //           '&.Mui-focused': {
// // // //             backgroundColor: '#fff',
// // // //             boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
// // // //           },
// // // //         },
// // // //         ...props.sx
// // // //       }}
// // // //     />
// // // // );

// // // // // Styled component for consistent card appearance
// // // // const StyledCard = ({ children, title, icon, subtitle, ...props }) => (
// // // //     <Card 
// // // //       elevation={0}
// // // //       sx={{ 
// // // //         mb: 3,
// // // //         borderRadius: '16px',
// // // //         background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
// // // //         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// // // //         transition: 'all 0.3s ease',
// // // //         '&:hover': {
// // // //           boxShadow: '0 6px 30px rgba(0, 0, 0, 0.12)',
// // // //         },
// // // //         ...props.sx
// // // //       }}
// // // //     >
// // // //       <CardContent sx={{ p: 3 }}>
// // // //         {title && (
// // // //           <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
// // // //             {icon && (
// // // //               <Avatar sx={{ 
// // // //                 bgcolor: 'primary.light', 
// // // //                 mr: 2,
// // // //                 width: 48,
// // // //                 height: 48
// // // //               }}>
// // // //                 {icon}
// // // //               </Avatar>
// // // //             )}
// // // //             <Box>
// // // //               <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
// // // //                 {title}
// // // //               </Typography>
// // // //               {subtitle && (
// // // //                 <Typography variant="body2" color="text.secondary">
// // // //                   {subtitle}
// // // //                 </Typography>
// // // //               )}
// // // //             </Box>
// // // //           </Box>
// // // //         )}
// // // //         {children}
// // // //       </CardContent>
// // // //     </Card>
// // // // );


// // // // const AdmissionFeeForm = ({ 
// // // //     onUpdate = () => {}, 
// // // //     onDelete = () => {}, 
// // // //     loading = false, 
// // // //     initialData = {} 
// // // // }) => {
// // // //     // State to hold the fee structure in a way that's easy for the UI to render
// // // //     const [fees, setFees] = useState([]);
// // // //     const [total, setTotal] = useState(0);
// // // //     const [mode, setMode] = useState('create');
// // // //     const [academicYear, setAcademicYear] = useState({ start: null, end: null });

// // // //     const createEmptyFeeItem = () => ({
// // // //         id: uuidv4(),
// // // //         name: '',
// // // //         totalAmount: 0,
// // // //         installments: 1,
// // // //         details: [{ amount: 0, startDate: null, dueDate: null }]
// // // //     });

// // // //     // Effect to transform incoming API data (`initialData`) into the UI's state shape
// // // //     useEffect(() => {
// // // //         // This check is important. It will run once the new backend is ready.
// // // //         if (initialData && initialData.id && initialData.fee_items && initialData.fee_items.every(item => 'installments' in item)) {
// // // //             setMode('update');
// // // //             const transformedFees = (initialData.fee_items || []).map(item => ({
// // // //                 id: uuidv4(),
// // // //                 name: item.name,
// // // //                 totalAmount: item.amount,
// // // //                 installments: item.installments.length || 1,
// // // //                 details: item.installments.map(inst => ({
// // // //                     amount: inst.amount,
// // // //                     startDate: inst.fee_start_date ? dayjs(inst.fee_start_date) : null,
// // // //                     dueDate: inst.fee_due_date ? dayjs(inst.fee_due_date) : null,
// // // //                 }))
// // // //             }));
// // // //             setFees(transformedFees.length > 0 ? transformedFees : [createEmptyFeeItem()]);
// // // //         } else {
// // // //              // Handles creating a new form or if initialData is in old format
// // // //              setMode(initialData && initialData.id ? 'update' : 'create');
// // // //              setFees([createEmptyFeeItem()]);
// // // //         }
        
// // // //         setAcademicYear({
// // // //             start: initialData.academic_year_start ? dayjs(initialData.academic_year_start) : null,
// // // //             end: initialData.academic_year_end ? dayjs(initialData.academic_year_end) : null
// // // //         });

// // // //     }, [initialData]);

// // // //     // Effect to recalculate the grand total whenever fees change
// // // //     useEffect(() => {
// // // //         const totalAmount = fees.reduce((sum, item) => sum + (Number(item.totalAmount) || 0), 0);
// // // //         setTotal(totalAmount);
// // // //     }, [fees]);

// // // //     const recalculateInstallments = (fee) => {
// // // //         const totalAmount = Number(fee.totalAmount) || 0;
// // // //         const newCount = fee.installments;
// // // //         const newDetails = [];

// // // //         if (totalAmount > 0 && newCount > 0) {
// // // //             const installmentAmount = Math.floor(totalAmount / newCount);
// // // //             const remainder = totalAmount % newCount;

// // // //             for (let i = 0; i < newCount; i++) {
// // // //                 newDetails.push({
// // // //                     amount: i === 0 ? installmentAmount + remainder : installmentAmount,
// // // //                     startDate: fee.details[i]?.startDate || null,
// // // //                     dueDate: fee.details[i]?.dueDate || null,
// // // //                 });
// // // //             }
// // // //         } else {
// // // //              for (let i = 0; i < newCount; i++) newDetails.push({ amount: 0, startDate: null, dueDate: null });
// // // //         }
// // // //         return { ...fee, details: newDetails };
// // // //     };

// // // //     const handleFeeItemChange = (id, field, value) => {
// // // //         setFees(fees.map(fee => {
// // // //             if (fee.id === id) {
// // // //                 const updatedFee = { ...fee, [field]: value };
// // // //                 return recalculateInstallments(updatedFee);
// // // //             }
// // // //             return fee;
// // // //         }));
// // // //     };
    
// // // //     const handleInstallmentDateChange = (feeId, detailIndex, field, date) => {
// // // //         setFees(fees.map(fee => {
// // // //             if (fee.id === feeId) {
// // // //                 const newDetails = [...fee.details];
// // // //                 newDetails[detailIndex][field] = date;
// // // //                 return { ...fee, details: newDetails };
// // // //             }
// // // //             return fee;
// // // //         }));
// // // //     };

// // // //     const handleInstallmentChange = (feeId, newCount) => {
// // // //         setFees(fees.map(fee => {
// // // //             if (fee.id === feeId) {
// // // //                 const updatedFee = { ...fee, installments: newCount };
// // // //                 return recalculateInstallments(updatedFee);
// // // //             }
// // // //             return fee;
// // // //         }));
// // // //     };
    
// // // //     const handleAddFeeItem = () => setFees([...fees, createEmptyFeeItem()]);
// // // //     const handleRemoveFeeItem = (id) => setFees(fees.filter(fee => fee.id !== id));

// // // //     const createPayload = () => ({
// // // //         academic_year_start: academicYear.start?.format('YYYY-MM-DD') || null,
// // // //         academic_year_end: academicYear.end?.format('YYYY-MM-DD') || null,
// // // //         total_fee: total,
// // // //         fee_items: fees
// // // //             .filter(item => item.name && item.totalAmount > 0)
// // // //             .map(item => ({
// // // //                 name: item.name,
// // // //                 amount: Number(item.totalAmount),
// // // //                 installments: item.details.map(detail => ({
// // // //                     amount: Number(detail.amount),
// // // //                     fee_start_date: detail.startDate?.format('YYYY-MM-DD') || null,
// // // //                     fee_due_date: detail.dueDate?.format('YYYY-MM-DD') || null,
// // // //                 })),
// // // //             })),
// // // //     });

// // // //     const handleUpdate = () => {
// // // //         const payload = createPayload();
// // // //         console.log("SENDING THIS PAYLOAD TO BACKEND:", JSON.stringify(payload, null, 2));
// // // //         onUpdate(payload);
// // // //     };

// // // //     return (
// // // //         <LocalizationProvider dateAdapter={AdapterDayjs}>
// // // //             <Box>
// // // //                 <StyledCard title="Fee Components" subtitle={`Editing for Academic Year: ${academicYear.start ? academicYear.start.format('YYYY') : ''} - ${academicYear.end ? academicYear.end.format('YYYY') : ''}`} icon={<AccountBalance />}>
// // // //                     {fees.map((feeItem) => (
// // // //                         <Paper key={feeItem.id} elevation={0} sx={{ p: 2, mb: 2, borderRadius: '12px', border: '1px solid #e0e0e0' }}>
// // // //                             {/* --- Main Fee Item Row --- */}
// // // //                             <Grid container spacing={2} alignItems="center">
// // // //                                 <Grid item xs={12} md={5}>
// // // //                                     <StyledTextField fullWidth label="Fee Name" value={feeItem.name} onChange={(e) => handleFeeItemChange(feeItem.id, 'name', e.target.value)} />
// // // //                                 </Grid>
// // // //                                 <Grid item xs={12} sm={6} md={3}>
// // // //                                     <StyledTextField fullWidth type="number" label="Total Amount (₹)" value={feeItem.totalAmount} onChange={(e) => handleFeeItemChange(feeItem.id, 'totalAmount', e.target.value)} inputProps={{ min: 0 }}/>
// // // //                                 </Grid>
// // // //                                 <Grid item xs={10} sm={4} md={3}>
// // // //                                     <FormControl fullWidth>
// // // //                                         <InputLabel>Installments</InputLabel>
// // // //                                         <Select value={feeItem.installments} label="Installments" onChange={(e) => handleInstallmentChange(feeItem.id, e.target.value)}>
// // // //                                             {[1, 2, 3, 4, 5, 6, 10, 12].map(i => <MenuItem key={i} value={i}>{i} Installment{i > 1 ? 's' : ''}</MenuItem>)}
// // // //                                         </Select>
// // // //                                     </FormControl>
// // // //                                 </Grid>
// // // //                                 <Grid item xs={2} sm={2} md={1} sx={{ textAlign: 'right' }}>
// // // //                                     <IconButton onClick={() => handleRemoveFeeItem(feeItem.id)} color="error"><RemoveCircleIcon /></IconButton>
// // // //                                 </Grid>
// // // //                             </Grid>
// // // //                             {/* --- Installment Details Sub-section --- */}
// // // //                             {feeItem.installments > 1 && (
// // // //                                 <Box sx={{ mt: 2, pt: 2, pl: 2, borderLeft: '3px solid', borderColor: 'primary.light' }}>
// // // //                                     <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>Installment Details:</Typography>
// // // //                                     {feeItem.details.map((detail, index) => (
// // // //                                         <Grid container spacing={2} key={index} sx={{ mb: 1.5 }} alignItems="center">
// // // //                                             <Grid item xs={12} sm={4} sx={{ display: 'flex', alignItems: 'center' }}>
// // // //                                                 <Typography variant="body1">
// // // //                                                     Part {index + 1}: <strong>₹{detail.amount}</strong>
// // // //                                                 </Typography>
// // // //                                             </Grid>
// // // //                                             <Grid item xs={12} sm={4}>
// // // //                                                 <DatePicker label="Start Date" value={detail.startDate} onChange={(date) => handleInstallmentDateChange(feeItem.id, index, 'startDate', date)} slotProps={{ textField: { fullWidth: true, size: 'small' } }} />
// // // //                                             </Grid>
// // // //                                             <Grid item xs={12} sm={4}>
// // // //                                                 <DatePicker label="Due Date" value={detail.dueDate} onChange={(date) => handleInstallmentDateChange(feeItem.id, index, 'dueDate', date)} slotProps={{ textField: { fullWidth: true, size: 'small' } }} />
// // // //                                             </Grid>
// // // //                                         </Grid>
// // // //                                     ))}
// // // //                                 </Box>
// // // //                             )}
// // // //                         </Paper>
// // // //                     ))}
// // // //                     <Box mt={3}><Button variant="outlined" onClick={handleAddFeeItem} startIcon={<AddCircleIcon />}>Add Fee Item</Button></Box>
// // // //                 </StyledCard>
// // // //                 <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
// // // //                     {mode === 'update' && (<Button variant="outlined" color="error" onClick={onDelete} disabled={loading} startIcon={<Delete />}>Delete Structure</Button>)}
// // // //                     <Button type="submit" variant="contained" size="large" onClick={handleUpdate} disabled={loading} startIcon={<Update />}>{loading ? 'Saving...' : 'Save Changes'}</Button>
// // // //                 </Box>
// // // //             </Box>
// // // //         </LocalizationProvider>
// // // //     );
// // // // };

// // // // export default AdmissionFeeForm;





// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //     TextField, Button, Grid, Box, Typography, Card, CardContent,
// // //     IconButton, Paper, Avatar, FormControl, InputLabel, Select, MenuItem
// // // } from '@mui/material';
// // // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // // import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// // // import { v4 as uuidv4 } from 'uuid'; // Make sure you have run: npm install uuid
// // // import { Delete, Update, AccountBalance } from '@mui/icons-material';

// // // // Styled component for consistent text field appearance
// // // const StyledTextField = ({ ...props }) => (
// // //     <TextField
// // //       {...props}
// // //       variant="outlined"
// // //       InputLabelProps={{ shrink: true }} // Ensures label doesn't overlap with date input content
// // //       sx={{
// // //         '& .MuiOutlinedInput-root': {
// // //           borderRadius: '12px',
// // //           backgroundColor: '#f8f9fa',
// // //           transition: 'all 0.3s ease',
// // //           '&:hover': {
// // //             backgroundColor: '#fff',
// // //             boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// // //           },
// // //           '&.Mui-focused': {
// // //             backgroundColor: '#fff',
// // //             boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
// // //           },
// // //         },
// // //         ...props.sx
// // //       }}
// // //     />
// // // );

// // // // Styled component for consistent card appearance
// // // const StyledCard = ({ children, title, icon, subtitle, ...props }) => (
// // //     <Card 
// // //       elevation={0}
// // //       sx={{ 
// // //         mb: 3,
// // //         borderRadius: '16px',
// // //         background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
// // //         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// // //         transition: 'all 0.3s ease',
// // //         '&:hover': {
// // //           boxShadow: '0 6px 30px rgba(0, 0, 0, 0.12)',
// // //         },
// // //         ...props.sx
// // //       }}
// // //     >
// // //       <CardContent sx={{ p: 3 }}>
// // //         {title && (
// // //           <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
// // //             {icon && (
// // //               <Avatar sx={{ 
// // //                 bgcolor: 'primary.light', 
// // //                 mr: 2,
// // //                 width: 48,
// // //                 height: 48
// // //               }}>
// // //                 {icon}
// // //               </Avatar>
// // //             )}
// // //             <Box>
// // //               <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
// // //                 {title}
// // //               </Typography>
// // //               {subtitle && (
// // //                 <Typography variant="body2" color="text.secondary">
// // //                   {subtitle}
// // //                 </Typography>
// // //               )}
// // //             </Box>
// // //           </Box>
// // //         )}
// // //         {children}
// // //       </CardContent>
// // //     </Card>
// // // );


// // // const AdmissionFeeForm = ({ 
// // //     onUpdate = () => {}, 
// // //     onDelete = () => {}, 
// // //     loading = false, 
// // //     initialData = {} 
// // // }) => {
// // //     // State to hold the fee structure in a way that's easy for the UI to render
// // //     const [fees, setFees] = useState([]);
// // //     const [total, setTotal] = useState(0);
// // //     const [mode, setMode] = useState('create');
// // //     const [academicYear, setAcademicYear] = useState({ start: '', end: '' });

// // //     const createEmptyFeeItem = () => ({
// // //         id: uuidv4(),
// // //         name: '',
// // //         totalAmount: 0,
// // //         installments: 1,
// // //         details: [{ amount: 0, startDate: '', dueDate: '' }]
// // //     });

// // //     // Helper to format date string
// // //     const formatDateForInput = (dateString) => {
// // //         if (!dateString) return '';
// // //         // Handles both Date objects and string formats like 'YYYY-MM-DD...'
// // //         return new Date(dateString).toISOString().split('T')[0];
// // //     };

// // //     // Effect to transform incoming API data (`initialData`) into the UI's state shape
// // //     useEffect(() => {
// // //         if (initialData && initialData.id && initialData.fee_items && initialData.fee_items.every(item => 'installments' in item)) {
// // //             setMode('update');
// // //             const transformedFees = (initialData.fee_items || []).map(item => ({
// // //                 id: uuidv4(),
// // //                 name: item.name,
// // //                 totalAmount: item.amount,
// // //                 installments: item.installments.length || 1,
// // //                 details: item.installments.map(inst => ({
// // //                     amount: inst.amount,
// // //                     startDate: formatDateForInput(inst.fee_start_date),
// // //                     dueDate: formatDateForInput(inst.fee_due_date),
// // //                 }))
// // //             }));
// // //             setFees(transformedFees.length > 0 ? transformedFees : [createEmptyFeeItem()]);
// // //         } else {
// // //              setMode(initialData && initialData.id ? 'update' : 'create');
// // //              setFees([createEmptyFeeItem()]);
// // //         }
        
// // //         setAcademicYear({
// // //             start: formatDateForInput(initialData.academic_year_start),
// // //             end: formatDateForInput(initialData.academic_year_end)
// // //         });

// // //     }, [initialData]);

// // //     // Effect to recalculate the grand total whenever fees change
// // //     useEffect(() => {
// // //         const totalAmount = fees.reduce((sum, item) => sum + (Number(item.totalAmount) || 0), 0);
// // //         setTotal(totalAmount);
// // //     }, [fees]);

// // //     const recalculateInstallments = (fee) => {
// // //         const totalAmount = Number(fee.totalAmount) || 0;
// // //         const newCount = fee.installments;
// // //         const newDetails = [];

// // //         if (totalAmount > 0 && newCount > 0) {
// // //             const installmentAmount = Math.floor(totalAmount / newCount);
// // //             const remainder = totalAmount % newCount;

// // //             for (let i = 0; i < newCount; i++) {
// // //                 newDetails.push({
// // //                     amount: i === 0 ? installmentAmount + remainder : installmentAmount,
// // //                     startDate: fee.details[i]?.startDate || '',
// // //                     dueDate: fee.details[i]?.dueDate || '',
// // //                 });
// // //             }
// // //         } else {
// // //              for (let i = 0; i < newCount; i++) newDetails.push({ amount: 0, startDate: '', dueDate: '' });
// // //         }
// // //         return { ...fee, details: newDetails };
// // //     };

// // //     const handleFeeItemChange = (id, field, value) => {
// // //         setFees(fees.map(fee => {
// // //             if (fee.id === id) {
// // //                 const updatedFee = { ...fee, [field]: value };
// // //                 return recalculateInstallments(updatedFee);
// // //             }
// // //             return fee;
// // //         }));
// // //     };
    
// // //     const handleInstallmentDateChange = (feeId, detailIndex, field, value) => {
// // //         setFees(fees.map(fee => {
// // //             if (fee.id === feeId) {
// // //                 const newDetails = [...fee.details];
// // //                 newDetails[detailIndex][field] = value;
// // //                 return { ...fee, details: newDetails };
// // //             }
// // //             return fee;
// // //         }));
// // //     };

// // //     const handleInstallmentChange = (feeId, newCount) => {
// // //         setFees(fees.map(fee => {
// // //             if (fee.id === feeId) {
// // //                 const updatedFee = { ...fee, installments: newCount };
// // //                 return recalculateInstallments(updatedFee);
// // //             }
// // //             return fee;
// // //         }));
// // //     };
    
// // //     const handleAddFeeItem = () => setFees([...fees, createEmptyFeeItem()]);
// // //     const handleRemoveFeeItem = (id) => setFees(fees.filter(fee => fee.id !== id));

// // //     const createPayload = () => ({
// // //         academic_year_start: academicYear.start || null,
// // //         academic_year_end: academicYear.end || null,
// // //         total_fee: total,
// // //         fee_items: fees
// // //             .filter(item => item.name && item.totalAmount > 0)
// // //             .map(item => ({
// // //                 name: item.name,
// // //                 amount: Number(item.totalAmount),
// // //                 installments: item.details.map(detail => ({
// // //                     amount: Number(detail.amount),
// // //                     fee_start_date: detail.startDate || null,
// // //                     fee_due_date: detail.dueDate || null,
// // //                 })),
// // //             })),
// // //     });

// // //     const handleUpdate = () => {
// // //         const payload = createPayload();
// // //         console.log("SENDING THIS PAYLOAD TO BACKEND:", JSON.stringify(payload, null, 2));
// // //         onUpdate(payload);
// // //     };

// // //     return (
// // //         <Box>
// // //             <StyledCard title="Fee Components" subtitle={`Editing for Academic Year: ${academicYear.start.substring(0,4)} - ${academicYear.end.substring(0,4)}`} icon={<AccountBalance />}>
// // //                 {fees.map((feeItem) => (
// // //                     <Paper key={feeItem.id} elevation={0} sx={{ p: 2, mb: 2, borderRadius: '12px', border: '1px solid #e0e0e0' }}>
// // //                         {/* --- Main Fee Item Row --- */}
// // //                         <Grid container spacing={2} alignItems="center">
// // //                             <Grid item xs={12} md={5}>
// // //                                 <StyledTextField fullWidth label="Fee Name" value={feeItem.name} onChange={(e) => handleFeeItemChange(feeItem.id, 'name', e.target.value)} />
// // //                             </Grid>
// // //                             <Grid item xs={12} sm={6} md={3}>
// // //                                 <StyledTextField fullWidth type="number" label="Total Amount (₹)" value={feeItem.totalAmount} onChange={(e) => handleFeeItemChange(feeItem.id, 'totalAmount', e.target.value)} inputProps={{ min: 0 }}/>
// // //                             </Grid>
// // //                             <Grid item xs={10} sm={4} md={3}>
// // //                                 <FormControl fullWidth>
// // //                                     <InputLabel>Installments</InputLabel>
// // //                                     <Select value={feeItem.installments} label="Installments" onChange={(e) => handleInstallmentChange(feeItem.id, e.target.value)}>
// // //                                         {[1, 2, 3, 4, 5, 6, 10, 12].map(i => <MenuItem key={i} value={i}>{i} Installment{i > 1 ? 's' : ''}</MenuItem>)}
// // //                                     </Select>
// // //                                 </FormControl>
// // //                             </Grid>
// // //                             <Grid item xs={2} sm={2} md={1} sx={{ textAlign: 'right' }}>
// // //                                 <IconButton onClick={() => handleRemoveFeeItem(feeItem.id)} color="error"><RemoveCircleIcon /></IconButton>
// // //                             </Grid>
// // //                         </Grid>
                        
// // //                         <Box sx={{ mt: 2, pt: 2, pl: 2, borderLeft: '3px solid', borderColor: 'grey.200' }}>
// // //                             {feeItem.installments > 1 && (
// // //                                 <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>
// // //                                     Installment Details:
// // //                                 </Typography>
// // //                             )}

// // //                             {feeItem.details.map((detail, index) => (
// // //                                 <Grid container spacing={2} key={index} sx={{ mb: 1.5 }} alignItems="center">
// // //                                     <Grid item xs={12} sm={4} sx={{ display: 'flex', alignItems: 'center' }}>
// // //                                         <Typography variant="body1">
// // //                                             {feeItem.installments > 1 && `Part ${index + 1}: `}
// // //                                             <strong>₹{detail.amount}</strong>
// // //                                         </Typography>
// // //                                     </Grid>
// // //                                     <Grid item xs={12} sm={4}>
// // //                                         <StyledTextField
// // //                                             fullWidth
// // //                                             type="date"
// // //                                             label="Start Date"
// // //                                             value={detail.startDate}
// // //                                             onChange={(e) => handleInstallmentDateChange(feeItem.id, index, 'startDate', e.target.value)}
// // //                                             size="small"
// // //                                         />
// // //                                     </Grid>
// // //                                     <Grid item xs={12} sm={4}>
// // //                                          <StyledTextField
// // //                                             fullWidth
// // //                                             type="date"
// // //                                             label="Due Date"
// // //                                             value={detail.dueDate}
// // //                                             onChange={(e) => handleInstallmentDateChange(feeItem.id, index, 'dueDate', e.target.value)}
// // //                                             size="small"
// // //                                         />
// // //                                     </Grid>
// // //                                 </Grid>
// // //                             ))}
// // //                         </Box>
// // //                     </Paper>
// // //                 ))}
// // //                 <Box mt={3}><Button variant="outlined" onClick={handleAddFeeItem} startIcon={<AddCircleIcon />}>Add Fee Item</Button></Box>
// // //             </StyledCard>
// // //             <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
// // //                 {mode === 'update' && (<Button variant="outlined" color="error" onClick={onDelete} disabled={loading} startIcon={<Delete />}>Delete Structure</Button>)}
// // //                 <Button type="submit" variant="contained" size="large" onClick={handleUpdate} disabled={loading} startIcon={<Update />}>{loading ? 'Saving...' : 'Save Changes'}</Button>
// // //             </Box>
// // //         </Box>
// // //     );
// // // };

// // // export default AdmissionFeeForm;




// // import React, { useState, useEffect } from 'react';
// // import {
// //     TextField, Button, Grid, Box, Typography, Card, CardContent,
// //     IconButton, Paper, Avatar, FormControl, InputLabel, Select, MenuItem
// // } from '@mui/material';
// // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// // import { v4 as uuidv4 } from 'uuid'; // Make sure you have run: npm install uuid
// // import { Delete, Update, AccountBalance } from '@mui/icons-material';

// // // Styled component for consistent text field appearance
// // const StyledTextField = ({ ...props }) => (
// //     <TextField
// //       {...props}
// //       variant="outlined"
// //       InputLabelProps={{ shrink: true }} // Ensures label doesn't overlap with date input content
// //       sx={{
// //         '& .MuiOutlinedInput-root': {
// //           borderRadius: '12px',
// //           backgroundColor: '#f8f9fa',
// //           transition: 'all 0.3s ease',
// //           '&:hover': {
// //             backgroundColor: '#fff',
// //             boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
// //           },
// //           '&.Mui-focused': {
// //             backgroundColor: '#fff',
// //             boxShadow: '0 2px 12px rgba(0, 0, 0, 0.12)',
// //           },
// //         },
// //         ...props.sx
// //       }}
// //     />
// // );

// // // Styled component for consistent card appearance
// // const StyledCard = ({ children, title, icon, subtitle, ...props }) => (
// //     <Card 
// //       elevation={0}
// //       sx={{ 
// //         mb: 3,
// //         borderRadius: '16px',
// //         background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
// //         boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// //         transition: 'all 0.3s ease',
// //         '&:hover': {
// //           boxShadow: '0 6px 30px rgba(0, 0, 0, 0.12)',
// //         },
// //         ...props.sx
// //       }}
// //     >
// //       <CardContent sx={{ p: 3 }}>
// //         {title && (
// //           <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
// //             {icon && (
// //               <Avatar sx={{ 
// //                 bgcolor: 'primary.light', 
// //                 mr: 2,
// //                 width: 48,
// //                 height: 48
// //               }}>
// //                 {icon}
// //               </Avatar>
// //             )}
// //             <Box>
// //               <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
// //                 {title}
// //               </Typography>
// //               {subtitle && (
// //                 <Typography variant="body2" color="text.secondary">
// //                   {subtitle}
// //                 </Typography>
// //               )}
// //             </Box>
// //           </Box>
// //         )}
// //         {children}
// //       </CardContent>
// //     </Card>
// // );


// // const AdmissionFeeForm = ({ 
// //     onUpdate = () => {}, 
// //     onDelete = () => {}, 
// //     loading = false, 
// //     initialData = {} 
// // }) => {
// //     // State to hold the fee structure in a way that's easy for the UI to render
// //     const [fees, setFees] = useState([]);
// //     const [total, setTotal] = useState(0);
// //     const [mode, setMode] = useState('create');
// //     const [academicYear, setAcademicYear] = useState({ start: '', end: '' });

// //     const createEmptyFeeItem = () => ({
// //         id: uuidv4(),
// //         name: '',
// //         totalAmount: 0,
// //         installments: 1,
// //         details: [{ amount: 0, startDate: '', dueDate: '' }],
// //         isDetailsVisible: false, // State to control visibility of details
// //     });

// //     // Helper to format date string
// //     const formatDateForInput = (dateString) => {
// //         if (!dateString) return '';
// //         return new Date(dateString).toISOString().split('T')[0];
// //     };

// //     // Effect to transform incoming API data (`initialData`) into the UI's state shape
// //     useEffect(() => {
// //         if (initialData && initialData.id && initialData.fee_items && initialData.fee_items.every(item => 'installments' in item)) {
// //             setMode('update');
// //             const transformedFees = (initialData.fee_items || []).map(item => ({
// //                 id: uuidv4(),
// //                 name: item.name,
// //                 totalAmount: item.amount,
// //                 installments: item.installments.length || 1,
// //                 isDetailsVisible: false, // Details are hidden by default
// //                 details: item.installments.map(inst => ({
// //                     amount: inst.amount,
// //                     startDate: formatDateForInput(inst.fee_start_date),
// //                     dueDate: formatDateForInput(inst.fee_due_date),
// //                 }))
// //             }));
// //             setFees(transformedFees.length > 0 ? transformedFees : [createEmptyFeeItem()]);
// //         } else {
// //              setMode(initialData && initialData.id ? 'update' : 'create');
// //              setFees([createEmptyFeeItem()]);
// //         }
        
// //         setAcademicYear({
// //             start: formatDateForInput(initialData.academic_year_start),
// //             end: formatDateForInput(initialData.academic_year_end)
// //         });

// //     }, [initialData]);

// //     // Effect to recalculate the grand total whenever fees change
// //     useEffect(() => {
// //         const totalAmount = fees.reduce((sum, item) => sum + (Number(item.totalAmount) || 0), 0);
// //         setTotal(totalAmount);
// //     }, [fees]);

// //     const recalculateInstallments = (fee) => {
// //         const totalAmount = Number(fee.totalAmount) || 0;
// //         const newCount = fee.installments;
// //         const newDetails = [];

// //         if (totalAmount > 0 && newCount > 0) {
// //             const installmentAmount = Math.floor(totalAmount / newCount);
// //             const remainder = totalAmount % newCount;

// //             for (let i = 0; i < newCount; i++) {
// //                 newDetails.push({
// //                     amount: i === 0 ? installmentAmount + remainder : installmentAmount,
// //                     startDate: fee.details[i]?.startDate || '',
// //                     dueDate: fee.details[i]?.dueDate || '',
// //                 });
// //             }
// //         } else {
// //              for (let i = 0; i < newCount; i++) newDetails.push({ amount: 0, startDate: '', dueDate: '' });
// //         }
// //         return { ...fee, details: newDetails };
// //     };

// //     const handleFeeItemChange = (id, field, value) => {
// //         setFees(fees.map(fee => {
// //             if (fee.id === id) {
// //                 const updatedFee = { ...fee, [field]: value };
// //                 return recalculateInstallments(updatedFee);
// //             }
// //             return fee;
// //         }));
// //     };
    
// //     const handleInstallmentDateChange = (feeId, detailIndex, field, value) => {
// //         setFees(fees.map(fee => {
// //             if (fee.id === feeId) {
// //                 const newDetails = [...fee.details];
// //                 newDetails[detailIndex][field] = value;
// //                 return { ...fee, details: newDetails };
// //             }
// //             return fee;
// //         }));
// //     };

// //     const handleInstallmentChange = (feeId, newCount) => {
// //         setFees(fees.map(fee => {
// //             if (fee.id === feeId) {
// //                 const updatedFee = { ...fee, installments: newCount };
// //                 return recalculateInstallments(updatedFee);
// //             }
// //             return fee;
// //         }));
// //     };
    
// //     const handleAddFeeItem = () => setFees([...fees, createEmptyFeeItem()]);
// //     const handleRemoveFeeItem = (id) => setFees(fees.filter(fee => fee.id !== id));

// //     const toggleDetailsVisibility = (id) => {
// //         setFees(fees.map(fee => 
// //             fee.id === id ? { ...fee, isDetailsVisible: !fee.isDetailsVisible } : fee
// //         ));
// //     };

// //     const createPayload = () => ({
// //         academic_year_start: academicYear.start || null,
// //         academic_year_end: academicYear.end || null,
// //         total_fee: total,
// //         fee_items: fees
// //             .filter(item => item.name && item.totalAmount > 0)
// //             .map(item => ({
// //                 name: item.name,
// //                 amount: Number(item.totalAmount),
// //                 installments: item.details.map(detail => ({
// //                     amount: Number(detail.amount),
// //                     fee_start_date: detail.startDate || null,
// //                     fee_due_date: detail.dueDate || null,
// //                 })),
// //             })),
// //     });

// //     const handleUpdate = () => {
// //         const payload = createPayload();
// //         console.log("SENDING THIS PAYLOAD TO BACKEND:", JSON.stringify(payload, null, 2));
// //         onUpdate(payload);
// //     };

// //     return (
// //         <Box>
// //             <StyledCard title="Fee Components" subtitle={`Editing for Academic Year: ${academicYear.start.substring(0,4)} - ${academicYear.end.substring(0,4)}`} icon={<AccountBalance />}>
// //                 {fees.map((feeItem) => (
// //                     <Paper key={feeItem.id} elevation={0} sx={{ p: 2, mb: 2, borderRadius: '12px', border: '1px solid #e0e0e0' }}>
// //                         {/* --- Main Fee Item Row --- */}
// //                         <Grid container spacing={2} alignItems="center">
// //                             <Grid item xs={12} md={4}>
// //                                 <StyledTextField fullWidth label="Fee Name" value={feeItem.name} onChange={(e) => handleFeeItemChange(feeItem.id, 'name', e.target.value)} />
// //                             </Grid>
// //                             <Grid item xs={12} sm={6} md={3}>
// //                                 <StyledTextField fullWidth type="number" label="Total Amount (₹)" value={feeItem.totalAmount} onChange={(e) => handleFeeItemChange(feeItem.id, 'totalAmount', e.target.value)} inputProps={{ min: 0 }}/>
// //                             </Grid>
// //                             <Grid item xs={6} sm={4} md={2}>
// //                                 <FormControl fullWidth>
// //                                     <InputLabel>Installments</InputLabel>
// //                                     <Select value={feeItem.installments} label="Installments" onChange={(e) => handleInstallmentChange(feeItem.id, e.target.value)}>
// //                                         {[1, 2, 3, 4, 5, 6, 10, 12].map(i => <MenuItem key={i} value={i}>{i} Installment{i > 1 ? 's' : ''}</MenuItem>)}
// //                                     </Select>
// //                                 </FormControl>
// //                             </Grid>
// //                             <Grid item xs={6} sm={4} md={2}>
// //                                 <Button fullWidth variant="text" onClick={() => toggleDetailsVisibility(feeItem.id)}>
// //                                     {feeItem.isDetailsVisible ? 'Hide Details' : 'View Details'}
// //                                 </Button>
// //                             </Grid>
// //                             <Grid item xs={12} sm={4} md={1} sx={{ textAlign: 'right' }}>
// //                                 <IconButton onClick={() => handleRemoveFeeItem(feeItem.id)} color="error"><RemoveCircleIcon /></IconButton>
// //                             </Grid>
// //                         </Grid>
                        
// //                         {/* --- Conditionally Rendered Installment Details --- */}
// //                         {feeItem.isDetailsVisible && (
// //                             <Box sx={{ mt: 2, pt: 2, pl: 2, borderLeft: '3px solid', borderColor: 'grey.200' }}>
// //                                 <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>
// //                                     Installment Details:
// //                                 </Typography>

// //                                 {feeItem.details.map((detail, index) => (
// //                                     <Grid container spacing={2} key={index} sx={{ mb: 1.5 }} alignItems="center">
// //                                         <Grid item xs={12} sm={4} sx={{ display: 'flex', alignItems: 'center' }}>
// //                                             <Typography variant="body1">
// //                                                 {feeItem.installments > 1 && `Part ${index + 1}: `}
// //                                                 <strong>₹{detail.amount}</strong>
// //                                             </Typography>
// //                                         </Grid>
// //                                         <Grid item xs={12} sm={4}>
// //                                             <StyledTextField
// //                                                 fullWidth
// //                                                 type="date"
// //                                                 label="Start Date"
// //                                                 value={detail.startDate}
// //                                                 onChange={(e) => handleInstallmentDateChange(feeItem.id, index, 'startDate', e.target.value)}
// //                                                 size="small"
// //                                             />
// //                                         </Grid>
// //                                         <Grid item xs={12} sm={4}>
// //                                             <StyledTextField
// //                                                 fullWidth
// //                                                 type="date"
// //                                                 label="Due Date"
// //                                                 value={detail.dueDate}
// //                                                 onChange={(e) => handleInstallmentDateChange(feeItem.id, index, 'dueDate', e.target.value)}
// //                                                 size="small"
// //                                             />
// //                                         </Grid>
// //                                     </Grid>
// //                                 ))}
// //                             </Box>
// //                         )}
// //                     </Paper>
// //                 ))}
// //                 <Box mt={3}><Button variant="outlined" onClick={handleAddFeeItem} startIcon={<AddCircleIcon />}>Add Fee Item</Button></Box>
// //             </StyledCard>
// //             <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
// //                 {mode === 'update' && (<Button variant="outlined" color="error" onClick={onDelete} disabled={loading} startIcon={<Delete />}>Delete Structure</Button>)}
// //                 <Button type="submit" variant="contained" size="large" onClick={handleUpdate} disabled={loading} startIcon={<Update />}>{loading ? 'Saving...' : 'Save Changes'}</Button>
// //             </Box>
// //         </Box>
// //     );
// // };

// // export default AdmissionFeeForm;




// import React, { useState, useEffect } from 'react';
// import {
//     TextField, Button, Grid, Box, Typography, Card, CardContent,
//     IconButton, Paper, Avatar, FormControl, InputLabel, Select, MenuItem,
//     Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Collapse
// } from '@mui/material';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import { v4 as uuidv4 } from 'uuid'; // Make sure you have run: npm install uuid
// import { Delete, Update, AccountBalance, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

// // Styled component for consistent text field appearance
// const StyledTextField = ({ ...props }) => (
//     <TextField
//       {...props}
//       variant="outlined"
//       InputLabelProps={{ shrink: true }} // Ensures label doesn't overlap with date input content
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
// );

// // Styled component for consistent card appearance
// const StyledCard = ({ children, title, icon, subtitle, ...props }) => (
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
//               <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
//                 {title}
//               </Typography>
//               {subtitle && (
//                 <Typography variant="body2" color="text.secondary">
//                   {subtitle}
//                 </Typography>
//               )}
//             </Box>
//           </Box>
//         )}
//         {children}
//       </CardContent>
//     </Card>
// );

// const FeeRow = ({ feeItem, onFeeChange, onInstallmentChange, onDateChange, onRemove, onToggleDetails }) => {
//     return (
//         <React.Fragment>
//             <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//                 <TableCell style={{ width: '5%' }}>
//                     <IconButton
//                         aria-label="expand row"
//                         size="small"
//                         onClick={() => onToggleDetails(feeItem.id)}
//                     >
//                         {feeItem.isDetailsVisible ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
//                     </IconButton>
//                 </TableCell>
//                 <TableCell style={{ width: '35%' }}>
//                     <StyledTextField fullWidth label="Fee Name" value={feeItem.name} onChange={(e) => onFeeChange(feeItem.id, 'name', e.target.value)} size="small" />
//                 </TableCell>
//                 <TableCell style={{ width: '20%' }}>
//                     <StyledTextField fullWidth type="number" label="Total Amount (₹)" value={feeItem.totalAmount} onChange={(e) => onFeeChange(feeItem.id, 'totalAmount', e.target.value)} inputProps={{ min: 0 }} size="small" />
//                 </TableCell>
//                 <TableCell style={{ width: '20%' }}>
//                     <FormControl fullWidth size="small">
//                         <InputLabel>Installments</InputLabel>
//                         <Select value={feeItem.installments} label="Installments" onChange={(e) => onInstallmentChange(feeItem.id, e.target.value)}>
//                             {[1, 2, 3, 4, 5, 6, 10, 12].map(i => <MenuItem key={i} value={i}>{i} Installment{i > 1 ? 's' : ''}</MenuItem>)}
//                         </Select>
//                     </FormControl>
//                 </TableCell>
//                 <TableCell align="right" style={{ width: '10%' }}>
//                     <IconButton onClick={() => onRemove(feeItem.id)} color="error"><RemoveCircleIcon /></IconButton>
//                 </TableCell>
//             </TableRow>
//             <TableRow>
//                 <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//                     <Collapse in={feeItem.isDetailsVisible} timeout="auto" unmountOnExit>
//                         <Box sx={{ margin: 1, p: 2, border: '1px solid #e0e0e0', borderRadius: '8px' }}>
//                             <Typography variant="subtitle2" gutterBottom component="div">
//                                 Installment Details
//                             </Typography>
//                             {feeItem.details.map((detail, index) => (
//                                 <Grid container spacing={2} key={index} sx={{ mb: 1.5 }} alignItems="center">
//                                     <Grid item xs={12} sm={4}>
//                                         <Typography variant="body1">
//                                             {feeItem.installments > 1 && `Part ${index + 1}: `}
//                                             <strong>₹{detail.amount}</strong>
//                                         </Typography>
//                                     </Grid>
//                                     <Grid item xs={12} sm={4}>
//                                         <StyledTextField fullWidth type="date" label="Start Date" value={detail.startDate} onChange={(e) => onDateChange(feeItem.id, index, 'startDate', e.target.value)} size="small"/>
//                                     </Grid>
//                                     <Grid item xs={12} sm={4}>
//                                         <StyledTextField fullWidth type="date" label="Due Date" value={detail.dueDate} onChange={(e) => onDateChange(feeItem.id, index, 'dueDate', e.target.value)} size="small"/>
//                                     </Grid>
//                                 </Grid>
//                             ))}
//                         </Box>
//                     </Collapse>
//                 </TableCell>
//             </TableRow>
//         </React.Fragment>
//     );
// };


// const AdmissionFeeForm = ({ 
//     onUpdate = () => {}, 
//     onDelete = () => {}, 
//     loading = false, 
//     initialData = {} 
// }) => {
//     // State to hold the fee structure in a way that's easy for the UI to render
//     const [fees, setFees] = useState([]);
//     const [total, setTotal] = useState(0);
//     const [mode, setMode] = useState('create');
//     const [academicYear, setAcademicYear] = useState({ start: '', end: '' });

//     const createEmptyFeeItem = () => ({
//         id: uuidv4(),
//         name: '',
//         totalAmount: 0,
//         installments: 1,
//         details: [{ amount: 0, startDate: '', dueDate: '' }],
//         isDetailsVisible: false, // State to control visibility of details
//     });

//     // Helper to format date string
//     const formatDateForInput = (dateString) => {
//         if (!dateString) return '';
//         return new Date(dateString).toISOString().split('T')[0];
//     };

//     // Effect to transform incoming API data (`initialData`) into the UI's state shape
//     useEffect(() => {
//         if (initialData && initialData.id && initialData.fee_items && initialData.fee_items.every(item => 'installments' in item)) {
//             setMode('update');
//             const transformedFees = (initialData.fee_items || []).map(item => ({
//                 id: uuidv4(),
//                 name: item.name,
//                 totalAmount: item.amount,
//                 installments: item.installments.length || 1,
//                 isDetailsVisible: false, // Details are hidden by default
//                 details: item.installments.map(inst => ({
//                     amount: inst.amount,
//                     startDate: formatDateForInput(inst.fee_start_date),
//                     dueDate: formatDateForInput(inst.fee_due_date),
//                 }))
//             }));
//             setFees(transformedFees.length > 0 ? transformedFees : [createEmptyFeeItem()]);
//         } else {
//              setMode(initialData && initialData.id ? 'update' : 'create');
//              setFees([createEmptyFeeItem()]);
//         }
        
//         setAcademicYear({
//             start: formatDateForInput(initialData.academic_year_start),
//             end: formatDateForInput(initialData.academic_year_end)
//         });

//     }, [initialData]);

//     // Effect to recalculate the grand total whenever fees change
//     useEffect(() => {
//         const totalAmount = fees.reduce((sum, item) => sum + (Number(item.totalAmount) || 0), 0);
//         setTotal(totalAmount);
//     }, [fees]);

//     const recalculateInstallments = (fee) => {
//         const totalAmount = Number(fee.totalAmount) || 0;
//         const newCount = fee.installments;
//         const newDetails = [];

//         if (totalAmount > 0 && newCount > 0) {
//             const installmentAmount = Math.floor(totalAmount / newCount);
//             const remainder = totalAmount % newCount;

//             for (let i = 0; i < newCount; i++) {
//                 newDetails.push({
//                     amount: i === 0 ? installmentAmount + remainder : installmentAmount,
//                     startDate: fee.details[i]?.startDate || '',
//                     dueDate: fee.details[i]?.dueDate || '',
//                 });
//             }
//         } else {
//              for (let i = 0; i < newCount; i++) newDetails.push({ amount: 0, startDate: '', dueDate: '' });
//         }
//         return { ...fee, details: newDetails };
//     };

//     const handleFeeItemChange = (id, field, value) => {
//         setFees(fees.map(fee => {
//             if (fee.id === id) {
//                 const updatedFee = { ...fee, [field]: value };
//                 return recalculateInstallments(updatedFee);
//             }
//             return fee;
//         }));
//     };
    
//     const handleInstallmentDateChange = (feeId, detailIndex, field, value) => {
//         setFees(fees.map(fee => {
//             if (fee.id === feeId) {
//                 const newDetails = [...fee.details];
//                 newDetails[detailIndex][field] = value;
//                 return { ...fee, details: newDetails };
//             }
//             return fee;
//         }));
//     };

//     const handleInstallmentChange = (feeId, newCount) => {
//         setFees(fees.map(fee => {
//             if (fee.id === feeId) {
//                 const updatedFee = { ...fee, installments: newCount };
//                 return recalculateInstallments(updatedFee);
//             }
//             return fee;
//         }));
//     };
    
//     const handleAddFeeItem = () => setFees([...fees, createEmptyFeeItem()]);
//     const handleRemoveFeeItem = (id) => setFees(fees.filter(fee => fee.id !== id));

//     const toggleDetailsVisibility = (id) => {
//         setFees(fees.map(fee => 
//             fee.id === id ? { ...fee, isDetailsVisible: !fee.isDetailsVisible } : fee
//         ));
//     };

//     const createPayload = () => ({
//         academic_year_start: academicYear.start || null,
//         academic_year_end: academicYear.end || null,
//         total_fee: total,
//         fee_items: fees
//             .filter(item => item.name && item.totalAmount > 0)
//             .map(item => ({
//                 name: item.name,
//                 amount: Number(item.totalAmount),
//                 installments: item.details.map(detail => ({
//                     amount: Number(detail.amount),
//                     fee_start_date: detail.startDate || null,
//                     fee_due_date: detail.dueDate || null,
//                 })),
//             })),
//     });

//     const handleUpdate = () => {
//         const payload = createPayload();
//         console.log("SENDING THIS PAYLOAD TO BACKEND:", JSON.stringify(payload, null, 2));
//         onUpdate(payload);
//     };

//     return (
//         <Box>
//             <StyledCard title="Fee Components" subtitle={`Editing for Academic Year: ${academicYear.start.substring(0,4)} - ${academicYear.end.substring(0,4)}`} icon={<AccountBalance />}>
//                 <TableContainer component={Paper} elevation={0} variant="outlined" sx={{ borderRadius: '12px' }}>
//                     <Table aria-label="collapsible table">
//                         <TableHead>
//                             <TableRow sx={{ backgroundColor: '#f8f9fa' }}>
//                                 <TableCell />
//                                 <TableCell>Fee Name</TableCell>
//                                 <TableCell>Total Amount (₹)</TableCell>
//                                 <TableCell>Installments</TableCell>
//                                 <TableCell align="right">Actions</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {fees.map((feeItem) => (
//                                 <FeeRow
//                                     key={feeItem.id}
//                                     feeItem={feeItem}
//                                     onFeeChange={handleFeeItemChange}
//                                     onInstallmentChange={handleInstallmentChange}
//                                     onDateChange={handleInstallmentDateChange}
//                                     onRemove={handleRemoveFeeItem}
//                                     onToggleDetails={toggleDetailsVisibility}
//                                 />
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>

//                 <Box mt={3}><Button variant="outlined" onClick={handleAddFeeItem} startIcon={<AddCircleIcon />}>Add Fee Item</Button></Box>
//             </StyledCard>
//             <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
//                 {mode === 'update' && (<Button variant="outlined" color="error" onClick={onDelete} disabled={loading} startIcon={<Delete />}>Delete Structure</Button>)}
//                 <Button type="submit" variant="contained" size="large" onClick={handleUpdate} disabled={loading} startIcon={<Update />}>{loading ? 'Saving...' : 'Save Changes'}</Button>
//             </Box>
//         </Box>
//     );
// };

// export default AdmissionFeeForm;


import React, { useState, useEffect } from 'react';
import {
    TextField, Button, Grid, Box, Typography, Card, CardContent,
    IconButton, Paper, Avatar, FormControl, InputLabel, Select, MenuItem,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Collapse
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { v4 as uuidv4 } from 'uuid'; // Make sure you have run: npm install uuid
import { Delete, Update, AccountBalance, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

// Styled component for consistent text field appearance
const StyledTextField = ({ ...props }) => (
    <TextField
      {...props}
      variant="outlined"
      InputLabelProps={{ shrink: true }} // Ensures label doesn't overlap with date input content
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
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

// Styled component for consistent card appearance
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
              <Typography variant="h6" sx={{ fontWeight: 600, color: 'text.primary' }}>
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

const FeeRow = ({ feeItem, onFeeChange, onInstallmentChange, onDateChange, onRemove, onToggleDetails }) => {
    return (
        <React.Fragment>
            <TableRow sx={{ '&:hover': { backgroundColor: '#fafafa' } }}>
                <TableCell style={{ width: 60 }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => onToggleDetails(feeItem.id)}
                    >
                        {feeItem.isDetailsVisible ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
                <TableCell>
                    <StyledTextField fullWidth label="Fee Name" value={feeItem.name} onChange={(e) => onFeeChange(feeItem.id, 'name', e.target.value)} size="small" />
                </TableCell>
                <TableCell style={{ width: 200 }}>
                    <StyledTextField fullWidth type="number" label="Total Amount (₹)" value={feeItem.totalAmount} onChange={(e) => onFeeChange(feeItem.id, 'totalAmount', e.target.value)} inputProps={{ min: 0 }} size="small" />
                </TableCell>
                <TableCell style={{ width: 200 }}>
                    <FormControl fullWidth size="small" variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px', backgroundColor: '#f8f9fa' }}}>
                        <InputLabel>Installments</InputLabel>
                        <Select value={feeItem.installments} label="Installments" onChange={(e) => onInstallmentChange(feeItem.id, e.target.value)}>
                            {[1, 2, 3, 4, 5, 6, 10, 12].map(i => <MenuItem key={i} value={i}>{i} Installment{i > 1 ? 's' : ''}</MenuItem>)}
                        </Select>
                    </FormControl>
                </TableCell>
                <TableCell align="right" style={{ width: 80 }}>
                    <IconButton onClick={() => onRemove(feeItem.id)} color="error"><RemoveCircleIcon /></IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, border: 0 }} colSpan={5}>
                    <Collapse in={feeItem.isDetailsVisible} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1, p: 2, backgroundColor: '#f9f9f9', border: '1px solid #eee', borderRadius: '8px' }}>
                            <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 500, fontSize: '1.1rem', mb: 2 }}>
                                Installment Details
                            </Typography>
                            <TableContainer>
                                <Table size="small" aria-label="installments">
                                    <TableHead>
                                        <TableRow sx={{ '& .MuiTableCell-root': { fontWeight: 'bold', color: 'text.secondary', borderBottom: '2px solid #e0e0e0' } }}>
                                            {feeItem.installments > 1 && <TableCell>Part</TableCell>}
                                            <TableCell>Amount (₹)</TableCell>
                                            <TableCell>Start Date</TableCell>
                                            <TableCell>Due Date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {feeItem.details.map((detail, index) => (
                                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                {feeItem.installments > 1 && <TableCell component="th" scope="row">{index + 1}</TableCell>}
                                                <TableCell><strong>{detail.amount}</strong></TableCell>
                                                <TableCell>
                                                    <StyledTextField fullWidth type="date" label="Start Date" value={detail.startDate} onChange={(e) => onDateChange(feeItem.id, index, 'startDate', e.target.value)} size="small" InputLabelProps={{ shrink: true }}/>
                                                </TableCell>
                                                <TableCell>
                                                    <StyledTextField fullWidth type="date" label="Due Date" value={detail.dueDate} onChange={(e) => onDateChange(feeItem.id, index, 'dueDate', e.target.value)} size="small" InputLabelProps={{ shrink: true }}/>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
};


const AdmissionFeeForm = ({ 
    onUpdate = () => {}, 
    onDelete = () => {}, 
    loading = false, 
    initialData = {} 
}) => {
    // State to hold the fee structure in a way that's easy for the UI to render
    const [fees, setFees] = useState([]);
    const [total, setTotal] = useState(0);
    const [mode, setMode] = useState('create');
    const [academicYear, setAcademicYear] = useState({ start: '', end: '' });

    const createEmptyFeeItem = () => ({
        id: uuidv4(),
        name: '',
        totalAmount: 0,
        installments: 1,
        details: [{ amount: 0, startDate: '', dueDate: '' }],
        isDetailsVisible: false, // State to control visibility of details
    });

    // Helper to format date string
    const formatDateForInput = (dateString) => {
        if (!dateString) return '';
        return new Date(dateString).toISOString().split('T')[0];
    };

    // Effect to transform incoming API data (`initialData`) into the UI's state shape
    useEffect(() => {
        if (initialData && initialData.id && initialData.fee_items && initialData.fee_items.every(item => 'installments' in item)) {
            setMode('update');
            const transformedFees = (initialData.fee_items || []).map(item => ({
                id: uuidv4(),
                name: item.name,
                totalAmount: item.amount,
                installments: item.installments.length || 1,
                isDetailsVisible: false, // Details are hidden by default
                details: item.installments.map(inst => ({
                    amount: inst.amount,
                    startDate: formatDateForInput(inst.fee_start_date),
                    dueDate: formatDateForInput(inst.fee_due_date),
                }))
            }));
            setFees(transformedFees.length > 0 ? transformedFees : [createEmptyFeeItem()]);
        } else {
             setMode(initialData && initialData.id ? 'update' : 'create');
             setFees([createEmptyFeeItem()]);
        }
        
        setAcademicYear({
            start: formatDateForInput(initialData.academic_year_start),
            end: formatDateForInput(initialData.academic_year_end)
        });

    }, [initialData]);

    // Effect to recalculate the grand total whenever fees change
    useEffect(() => {
        const totalAmount = fees.reduce((sum, item) => sum + (Number(item.totalAmount) || 0), 0);
        setTotal(totalAmount);
    }, [fees]);

    const recalculateInstallments = (fee) => {
        const totalAmount = Number(fee.totalAmount) || 0;
        const newCount = fee.installments;
        const newDetails = [];

        if (totalAmount > 0 && newCount > 0) {
            const installmentAmount = Math.floor(totalAmount / newCount);
            const remainder = totalAmount % newCount;

            for (let i = 0; i < newCount; i++) {
                newDetails.push({
                    amount: i === 0 ? installmentAmount + remainder : installmentAmount,
                    startDate: fee.details[i]?.startDate || '',
                    dueDate: fee.details[i]?.dueDate || '',
                });
            }
        } else {
             for (let i = 0; i < newCount; i++) newDetails.push({ amount: 0, startDate: '', dueDate: '' });
        }
        return { ...fee, details: newDetails };
    };

    const handleFeeItemChange = (id, field, value) => {
        setFees(fees.map(fee => {
            if (fee.id === id) {
                const updatedFee = { ...fee, [field]: value };
                return recalculateInstallments(updatedFee);
            }
            return fee;
        }));
    };
    
    const handleInstallmentDateChange = (feeId, detailIndex, field, value) => {
        setFees(fees.map(fee => {
            if (fee.id === feeId) {
                const newDetails = [...fee.details];
                newDetails[detailIndex][field] = value;
                return { ...fee, details: newDetails };
            }
            return fee;
        }));
    };

    const handleInstallmentChange = (feeId, newCount) => {
        setFees(fees.map(fee => {
            if (fee.id === feeId) {
                const updatedFee = { ...fee, installments: newCount };
                return recalculateInstallments(updatedFee);
            }
            return fee;
        }));
    };
    
    const handleAddFeeItem = () => setFees([...fees, createEmptyFeeItem()]);
    const handleRemoveFeeItem = (id) => setFees(fees.filter(fee => fee.id !== id));

    const toggleDetailsVisibility = (id) => {
        setFees(fees.map(fee => 
            fee.id === id ? { ...fee, isDetailsVisible: !fee.isDetailsVisible } : fee
        ));
    };

    const createPayload = () => ({
        academic_year_start: academicYear.start || null,
        academic_year_end: academicYear.end || null,
        total_fee: total,
        fee_items: fees
            .filter(item => item.name && item.totalAmount > 0)
            .map(item => ({
                name: item.name,
                amount: Number(item.totalAmount),
                installments: item.details.map(detail => ({
                    amount: Number(detail.amount),
                    fee_start_date: detail.startDate || null,
                    fee_due_date: detail.dueDate || null,
                })),
            })),
    });

    const handleUpdate = () => {
        const payload = createPayload();
        console.log("SENDING THIS PAYLOAD TO BACKEND:", JSON.stringify(payload, null, 2));
        onUpdate(payload);
    };

    return (
        <Box>
            <StyledCard title="Fee Components" subtitle={`Editing for Academic Year: ${academicYear.start.substring(0,4)} - ${academicYear.end.substring(0,4)}`} icon={<AccountBalance />}>
                <TableContainer component={Paper} elevation={0} variant="outlined" sx={{ borderRadius: '12px' }}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow sx={{ '& .MuiTableCell-root': { backgroundColor: '#f4f6f8', fontWeight: 'bold' } }}>
                                <TableCell style={{ width: 60 }} />
                                <TableCell>Fee Name</TableCell>
                                <TableCell>Total Amount (₹)</TableCell>
                                <TableCell>Installments</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fees.map((feeItem) => (
                                <FeeRow
                                    key={feeItem.id}
                                    feeItem={feeItem}
                                    onFeeChange={handleFeeItemChange}
                                    onInstallmentChange={handleInstallmentChange}
                                    onDateChange={handleInstallmentDateChange}
                                    onRemove={handleRemoveFeeItem}
                                    onToggleDetails={toggleDetailsVisibility}
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box mt={3}><Button variant="outlined" onClick={handleAddFeeItem} startIcon={<AddCircleIcon />}>Add Fee Item</Button></Box>
            </StyledCard>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
                {mode === 'update' && (<Button variant="outlined" color="error" onClick={onDelete} disabled={loading} startIcon={<Delete />}>Delete Structure</Button>)}
                <Button type="submit" variant="contained" size="large" onClick={handleUpdate} disabled={loading} startIcon={<Update />}>{loading ? 'Saving...' : 'Save Changes'}</Button>
            </Box>
        </Box>
    );
};

export default AdmissionFeeForm;

