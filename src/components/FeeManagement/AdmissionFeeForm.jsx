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