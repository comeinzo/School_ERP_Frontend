

// // import React, { useState } from 'react';
// // import { Button, Box, Typography, Alert, CircularProgress, Link } from '@mui/material';
// // import UploadFileIcon from '@mui/icons-material/UploadFile';
// // import axios from 'axios';

// // const BulkAdmission = () => {
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [uploadResult, setUploadResult] = useState(null);

// //   const handleFileChange = (event) => {
// //     setSelectedFile(event.target.files[0]);
// //     setUploadResult(null); // Reset previous results on new file selection
// //   };

// //   const handleDownloadTemplate = () => {
// //     // CRITICAL: This file MUST be placed in your project's '/public' folder.
// //     const link = document.createElement('a');
// //     link.href = '/student_admission_template.xlsx';
// //     link.setAttribute('download', 'student_admission_template.xlsx');
// //     document.body.appendChild(link);
// //     link.click();
// //     document.body.removeChild(link);
// //   };

// //   const handleUpload = async () => {
// //     if (!selectedFile) {
// //       setUploadResult({ success: false, message: 'Please select a file first!' });
// //       return;
// //     }

// //     setIsLoading(true);
// //     setUploadResult(null);

// //     const formData = new FormData();
// //     formData.append('file', selectedFile);

// //     try {
// //       // IMPORTANT: Replace with your actual API endpoint URL
// //       const apiUrl = 'http://127.0.0.1:8000/students/bulk-upload';
      
// //       const response = await axios.post(apiUrl, formData);
// //       setUploadResult({ success: true, data: response.data });
// //     } catch (error) {
// //       const errorMessage = error.response?.data?.detail || 'An unexpected error occurred during upload.';
// //       setUploadResult({ success: false, message: errorMessage });
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <Box sx={{ p: 3, maxWidth: 700, margin: 'auto', mt: 4, border: '1px solid #ddd', borderRadius: 2, boxShadow: 3 }}>
// //       <Typography variant="h4" gutterBottom align="center">
// //         Bulk Student Admission
// //       </Typography>
// //       <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }} align="center">
// //         Download the template, fill it out, and upload it here to admit multiple students at once.
// //       </Typography>
      
// //       <Box textAlign="center" sx={{ mb: 3 }}>
// //           <Link component="button" variant="body2" onClick={handleDownloadTemplate}>
// //             Download Excel Template
// //           </Link>
// //       </Box>

// //       <Box sx={{ border: '2px dashed #ccc', borderRadius: 2, p: 3, textAlign: 'center', mb: 3, backgroundColor: '#f9f9f9' }}>
// //         <Button
// //           variant="contained"
// //           component="label"
// //           startIcon={<UploadFileIcon />}
// //         >
// //           Select Excel File
// //           <input
// //             type="file"
// //             hidden
// //             accept=".xlsx, .xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
// //             onChange={handleFileChange}
// //           />
// //         </Button>
// //         {selectedFile && <Typography sx={{ mt: 2, fontStyle: 'italic' }}>File selected: {selectedFile.name}</Typography>}
// //       </Box>

// //       <Button
// //         variant="contained"
// //         color="primary"
// //         onClick={handleUpload}
// //         disabled={!selectedFile || isLoading}
// //         fullWidth
// //         sx={{ py: 1.5, fontSize: '1rem' }}
// //       >
// //         {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Upload and Process File'}
// //       </Button>

// //       {/* This section displays the detailed results from the backend */}
// //       {uploadResult && (
// //         <Box sx={{ mt: 3 }}>
// //           {uploadResult.success ? (
// //             <Alert severity={uploadResult.data.failed_admissions > 0 ? "warning" : "success"}>
// //               <Typography><strong>{uploadResult.data.message}</strong></Typography>
// //               <Typography>Successful Admissions: {uploadResult.data.successful_admissions}</Typography>
// //               <Typography>Failed Admissions: {uploadResult.data.failed_admissions}</Typography>
// //               {uploadResult.data.errors?.length > 0 && (
// //                  <Box component="ul" sx={{ pl: 2, mt: 1, maxHeight: 200, overflowY: 'auto' }}>
// //                     {uploadResult.data.errors.map((err, i) => (
// //                       <li key={i}><Typography variant="body2">Row {err.row}: {err.error}</Typography></li>
// //                     ))}
// //                  </Box>
// //               )}
// //             </Alert>
// //           ) : (
// //             <Alert severity="error">{uploadResult.message}</Alert>
// //           )}
// //         </Box>
// //       )}
// //     </Box>
// //   );
// // };

// // export default BulkAdmission;



// import React, { useState } from 'react';
// import { Button, Box, Typography, Alert, CircularProgress, Link, Paper, Stepper, Step, StepLabel, Divider, Chip } from '@mui/material';
// import UploadFileIcon from '@mui/icons-material/UploadFile';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import DownloadIcon from '@mui/icons-material/Download';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
// import DescriptionIcon from '@mui/icons-material/Description';
// import axios from 'axios';

// const BulkAdmission = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [uploadResult, setUploadResult] = useState(null);
//   const [activeStep, setActiveStep] = useState(0);

//   const steps = ['Download Template', 'Select File', 'Upload & Process'];

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//     setUploadResult(null);
//     if (file) {
//       setActiveStep(2);
//     }
//   };

//   const handleDownloadTemplate = () => {
//     const link = document.createElement('a');
//     link.href = '/student_admission_template.xlsx';
//     link.setAttribute('download', 'student_admission_template.xlsx');
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     setActiveStep(1);
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       setUploadResult({ success: false, message: 'Please select a file first!' });
//       return;
//     }

//     setIsLoading(true);
//     setUploadResult(null);

//     const formData = new FormData();
//     formData.append('file', selectedFile);

//     try {
//       const apiUrl = 'http://127.0.0.1:8000/students/bulk-upload';
//       const response = await axios.post(apiUrl, formData);
//       setUploadResult({ success: true, data: response.data });
//     } catch (error) {
//       const errorMessage = error.response?.data?.detail || 'An unexpected error occurred during upload.';
//       setUploadResult({ success: false, message: errorMessage });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleRemoveFile = () => {
//     setSelectedFile(null);
//     setUploadResult(null);
//     setActiveStep(1);
//   };

//   return (
//     <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 900, margin: 'auto', mt: 2 }}>
//       <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3 }}>
//         {/* Header Section */}
//         <Box sx={{ textAlign: 'center', mb: 4 }}>
//           <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', color: 'white', width: 64, height: 64, borderRadius: '50%', mb: 2 }}>
//             <CloudUploadIcon sx={{ fontSize: 32 }} />
//           </Box>
//           <Typography variant="h4" gutterBottom fontWeight={600} color="primary.main">
//             Bulk Student Admission
//           </Typography>
//           <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, margin: 'auto' }}>
//             Streamline your admission process by uploading multiple student records at once using our Excel template
//           </Typography>
//         </Box>

//         {/* Stepper */}
//         <Stepper activeStep={activeStep} sx={{ mb: 4 }} alternativeLabel>
//           {steps.map((label) => (
//             <Step key={label}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </Stepper>

//         <Divider sx={{ mb: 4 }} />

//         {/* Step 1: Download Template */}
//         <Paper variant="outlined" sx={{ p: 3, mb: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//             <DownloadIcon sx={{ mr: 1, color: 'primary.main' }} />
//             <Typography variant="h6" fontWeight={500}>
//               Step 1: Download Template
//             </Typography>
//           </Box>
//           <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//             Download the Excel template and fill in student information following the provided format
//           </Typography>
//           <Button
//             variant="contained"
//             startIcon={<DownloadIcon />}
//             onClick={handleDownloadTemplate}
//             sx={{ borderRadius: 2 }}
//           >
//             Download Excel Template
//           </Button>
//         </Paper>

//         {/* Step 2: Upload File */}
//         <Paper variant="outlined" sx={{ p: 3, mb: 3, bgcolor: 'grey.50', borderRadius: 2 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//             <UploadFileIcon sx={{ mr: 1, color: 'primary.main' }} />
//             <Typography variant="h6" fontWeight={500}>
//               Step 2: Select File
//             </Typography>
//           </Box>
          
//           {!selectedFile ? (
//             <Box 
//               sx={{ 
//                 border: '2px dashed', 
//                 borderColor: 'primary.main', 
//                 borderRadius: 2, 
//                 p: 4, 
//                 textAlign: 'center', 
//                 bgcolor: 'background.paper',
//                 transition: 'all 0.3s',
//                 '&:hover': {
//                   bgcolor: 'action.hover',
//                   borderColor: 'primary.dark'
//                 }
//               }}
//             >
//               <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
//               <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
//                 Drag and drop your file here or click to browse
//               </Typography>
//               <Button
//                 variant="outlined"
//                 component="label"
//                 startIcon={<UploadFileIcon />}
//                 sx={{ borderRadius: 2 }}
//               >
//                 Choose Excel File
//                 <input
//                   type="file"
//                   hidden
//                   accept=".xlsx, .xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
//                   onChange={handleFileChange}
//                 />
//               </Button>
//               <Typography variant="caption" display="block" sx={{ mt: 2, color: 'text.secondary' }}>
//                 Supported formats: .xlsx, .xls
//               </Typography>
//             </Box>
//           ) : (
//             <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, bgcolor: 'success.50', borderRadius: 2, border: '1px solid', borderColor: 'success.main' }}>
//               <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
//                 <DescriptionIcon sx={{ mr: 2, color: 'success.main', fontSize: 40 }} />
//                 <Box>
//                   <Typography variant="body1" fontWeight={500}>
//                     {selectedFile.name}
//                   </Typography>
//                   <Typography variant="caption" color="text.secondary">
//                     {(selectedFile.size / 1024).toFixed(2)} KB
//                   </Typography>
//                 </Box>
//               </Box>
//               <Button 
//                 size="small" 
//                 color="error" 
//                 onClick={handleRemoveFile}
//                 sx={{ borderRadius: 1 }}
//               >
//                 Remove
//               </Button>
//             </Box>
//           )}
//         </Paper>

//         {/* Step 3: Upload */}
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleUpload}
//           disabled={!selectedFile || isLoading}
//           fullWidth
//           size="large"
//           startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <CloudUploadIcon />}
//           sx={{ py: 1.5, fontSize: '1rem', fontWeight: 600, borderRadius: 2, mb: 3 }}
//         >
//           {isLoading ? 'Processing...' : 'Upload and Process File'}
//         </Button>

//         {/* Results Section */}
//         {uploadResult && (
//           <Paper 
//             elevation={2} 
//             sx={{ 
//               p: 3, 
//               borderRadius: 2,
//               bgcolor: uploadResult.success ? 'success.50' : 'error.50',
//               border: '1px solid',
//               borderColor: uploadResult.success ? 'success.main' : 'error.main'
//             }}
//           >
//             {uploadResult.success ? (
//               <>
//                 <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                   <CheckCircleOutlineIcon sx={{ mr: 1, color: 'success.main', fontSize: 28 }} />
//                   <Typography variant="h6" fontWeight={600} color="success.dark">
//                     {uploadResult.data.message}
//                   </Typography>
//                 </Box>
                
//                 <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
//                   <Chip 
//                     icon={<CheckCircleOutlineIcon />} 
//                     label={`${uploadResult.data.successful_admissions} Successful`} 
//                     color="success" 
//                     sx={{ fontWeight: 500 }}
//                   />
//                   {uploadResult.data.failed_admissions > 0 && (
//                     <Chip 
//                       icon={<ErrorOutlineIcon />} 
//                       label={`${uploadResult.data.failed_admissions} Failed`} 
//                       color="error" 
//                       sx={{ fontWeight: 500 }}
//                     />
//                   )}
//                 </Box>

//                 {uploadResult.data.errors?.length > 0 && (
//                   <Box>
//                     <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1, color: 'error.dark' }}>
//                       Error Details:
//                     </Typography>
//                     <Box 
//                       sx={{ 
//                         maxHeight: 250, 
//                         overflowY: 'auto', 
//                         bgcolor: 'background.paper', 
//                         p: 2, 
//                         borderRadius: 1,
//                         border: '1px solid',
//                         borderColor: 'divider'
//                       }}
//                     >
//                       {uploadResult.data.errors.map((err, i) => (
//                         <Alert severity="error" sx={{ mb: 1 }} key={i}>
//                           <Typography variant="body2">
//                             <strong>Row {err.row}:</strong> {err.error}
//                           </Typography>
//                         </Alert>
//                       ))}
//                     </Box>
//                   </Box>
//                 )}
//               </>
//             ) : (
//               <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                 <ErrorOutlineIcon sx={{ mr: 1, color: 'error.main', fontSize: 28 }} />
//                 <Typography variant="body1" fontWeight={500} color="error.dark">
//                   {uploadResult.message}
//                 </Typography>
//               </Box>
//             )}
//           </Paper>
//         )}
//       </Paper>
//     </Box>
//   );
// };

// export default BulkAdmission;




import React, { useState } from 'react';
import { Button, Box, Typography, Alert, CircularProgress, Paper, Stepper, Step, StepLabel, Divider, Chip } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import DescriptionIcon from '@mui/icons-material/Description';
import axios from 'axios';

const BulkAdmission = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  // Custom color theme matching your ERP
  const primaryColor = '#1976d2'; // Keep blue for primary actions
  const accentColor = '#00897b'; // Teal to match your sidebar
  const successColor = '#2e7d32';
  const warningColor = '#ed6c02';
  const errorColor = '#d32f2f';

  const steps = ['Download Template', 'Select File', 'Upload & Process'];

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setUploadResult(null);
    if (file) {
      setActiveStep(2);
    }
  };

  const handleDownloadTemplate = () => {
    const link = document.createElement('a');
    link.href = '/student_admission_template.xlsx';
    link.setAttribute('download', 'student_admission_template.xlsx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setActiveStep(1);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadResult({ success: false, message: 'Please select a file first!' });
      return;
    }

    setIsLoading(true);
    setUploadResult(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const apiUrl = 'http://127.0.0.1:8000/students/bulk-upload';
      const response = await axios.post(apiUrl, formData);
      setUploadResult({ success: true, data: response.data });
    } catch (error) {
      const errorMessage = error.response?.data?.detail || 'An unexpected error occurred during upload.';
      setUploadResult({ success: false, message: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setUploadResult(null);
    setActiveStep(1);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 3 }, maxWidth: 1000, margin: 'auto' }}>
      {/* Header Section - More subtle */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Box 
          sx={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            bgcolor: accentColor,
            color: 'white', 
            width: 70, 
            height: 70, 
            borderRadius: '50%', 
            mb: 2,
            boxShadow: '0 4px 12px rgba(0,137,123,0.3)'
          }}
        >
          <CloudUploadIcon sx={{ fontSize: 36 }} />
        </Box>
        <Typography variant="h4" gutterBottom fontWeight={600} sx={{ color: '#263238' }}>
          Bulk Student Admission
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 650, margin: 'auto' }}>
          Streamline your admission process by uploading multiple student records at once using our Excel template
        </Typography>
      </Box>

      {/* Stepper with custom colors */}
      <Stepper 
        activeStep={activeStep} 
        sx={{ 
          mb: 4,
          '& .MuiStepIcon-root.Mui-active': {
            color: accentColor,
          },
          '& .MuiStepIcon-root.Mui-completed': {
            color: successColor,
          }
        }} 
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Divider sx={{ mb: 4 }} />

      {/* Step 1: Download Template - Neutral background */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 3, 
          mb: 3, 
          bgcolor: '#f5f5f5', 
          borderRadius: 2,
          border: '1px solid #e0e0e0'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <DownloadIcon sx={{ mr: 1.5, color: accentColor, fontSize: 28 }} />
          <Typography variant="h6" fontWeight={600} sx={{ color: '#263238' }}>
            Step 1: Download Template
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5 }}>
          Download the Excel template and fill in student information following the provided format
        </Typography>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={handleDownloadTemplate}
          sx={{ 
            borderRadius: 2,
            bgcolor: accentColor,
            '&:hover': {
              bgcolor: '#00796b'
            },
            textTransform: 'none',
            px: 3,
            py: 1
          }}
        >
          Download Excel Template
        </Button>
      </Paper>

      {/* Step 2: Upload File */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 3, 
          mb: 3, 
          bgcolor: '#f5f5f5', 
          borderRadius: 2,
          border: '1px solid #e0e0e0'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <UploadFileIcon sx={{ mr: 1.5, color: accentColor, fontSize: 28 }} />
          <Typography variant="h6" fontWeight={600} sx={{ color: '#263238' }}>
            Step 2: Select File
          </Typography>
        </Box>
        
        {!selectedFile ? (
          <Box 
            sx={{ 
              border: '2px dashed', 
              borderColor: '#bdbdbd', 
              borderRadius: 2, 
              p: 4, 
              textAlign: 'center', 
              bgcolor: 'white',
              transition: 'all 0.3s',
              '&:hover': {
                borderColor: accentColor,
                bgcolor: '#f0f8f7'
              }
            }}
          >
            <CloudUploadIcon sx={{ fontSize: 56, color: '#9e9e9e', mb: 2 }} />
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Drag and drop your file here or click to browse
            </Typography>
            <Button
              variant="outlined"
              component="label"
              startIcon={<UploadFileIcon />}
              sx={{ 
                borderRadius: 2,
                borderColor: accentColor,
                color: accentColor,
                '&:hover': {
                  borderColor: '#00796b',
                  bgcolor: '#f0f8f7'
                },
                textTransform: 'none',
                px: 3,
                py: 1
              }}
            >
              Choose Excel File
              <input
                type="file"
                hidden
                accept=".xlsx, .xls, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                onChange={handleFileChange}
              />
            </Button>
            <Typography variant="caption" display="block" sx={{ mt: 2, color: 'text.secondary' }}>
              Supported formats: .xlsx, .xls
            </Typography>
          </Box>
        ) : (
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              p: 2.5, 
              bgcolor: '#e8f5e9', 
              borderRadius: 2, 
              border: '1px solid',
              borderColor: successColor
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <DescriptionIcon sx={{ mr: 2, color: successColor, fontSize: 42 }} />
              <Box>
                <Typography variant="body1" fontWeight={600} sx={{ color: '#1b5e20' }}>
                  {selectedFile.name}
                </Typography>
                <Typography variant="caption" sx={{ color: '#2e7d32' }}>
                  {(selectedFile.size / 1024).toFixed(2)} KB
                </Typography>
              </Box>
            </Box>
            <Button 
              size="small" 
              variant="outlined"
              color="error" 
              onClick={handleRemoveFile}
              sx={{ 
                borderRadius: 1,
                textTransform: 'none'
              }}
            >
              Remove
            </Button>
          </Box>
        )}
      </Paper>

      {/* Step 3: Upload Button */}
      <Button
        variant="contained"
        onClick={handleUpload}
        disabled={!selectedFile || isLoading}
        fullWidth
        size="large"
        startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : <CloudUploadIcon />}
        sx={{ 
          py: 1.5, 
          fontSize: '1rem', 
          fontWeight: 600, 
          borderRadius: 2, 
          mb: 3,
          bgcolor: primaryColor,
          '&:hover': {
            bgcolor: '#1565c0'
          },
          textTransform: 'none',
          boxShadow: '0 4px 12px rgba(25,118,210,0.3)'
        }}
      >
        {isLoading ? 'Processing...' : 'Upload and Process File'}
      </Button>

      {/* Results Section */}
      {uploadResult && (
        <Paper 
          elevation={2} 
          sx={{ 
            p: 3, 
            borderRadius: 2,
            bgcolor: uploadResult.success 
              ? (uploadResult.data.failed_admissions > 0 ? '#fff8e1' : '#e8f5e9')
              : '#ffebee',
            border: '1px solid',
            borderColor: uploadResult.success 
              ? (uploadResult.data.failed_admissions > 0 ? warningColor : successColor)
              : errorColor
          }}
        >
          {uploadResult.success ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CheckCircleOutlineIcon 
                  sx={{ 
                    mr: 1.5, 
                    color: uploadResult.data.failed_admissions > 0 ? warningColor : successColor, 
                    fontSize: 32 
                  }} 
                />
                <Typography 
                  variant="h6" 
                  fontWeight={600} 
                  sx={{ 
                    color: uploadResult.data.failed_admissions > 0 ? '#e65100' : '#1b5e20'
                  }}
                >
                  {uploadResult.data.message}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                <Chip 
                  icon={<CheckCircleOutlineIcon />} 
                  label={`${uploadResult.data.successful_admissions} Successful`} 
                  sx={{ 
                    bgcolor: successColor,
                    color: 'white',
                    fontWeight: 500,
                    '& .MuiChip-icon': { color: 'white' }
                  }}
                />
                {uploadResult.data.failed_admissions > 0 && (
                  <Chip 
                    icon={<ErrorOutlineIcon />} 
                    label={`${uploadResult.data.failed_admissions} Failed`} 
                    sx={{ 
                      bgcolor: errorColor,
                      color: 'white',
                      fontWeight: 500,
                      '& .MuiChip-icon': { color: 'white' }
                    }}
                  />
                )}
              </Box>

              {uploadResult.data.errors?.length > 0 && (
                <Box>
                  <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1.5, color: errorColor }}>
                    Error Details:
                  </Typography>
                  <Box 
                    sx={{ 
                      maxHeight: 250, 
                      overflowY: 'auto', 
                      bgcolor: 'white', 
                      p: 2, 
                      borderRadius: 1,
                      border: '1px solid',
                      borderColor: '#e0e0e0'
                    }}
                  >
                    {uploadResult.data.errors.map((err, i) => (
                      <Alert 
                        severity="error" 
                        sx={{ 
                          mb: 1,
                          '&:last-child': { mb: 0 }
                        }} 
                        key={i}
                      >
                        <Typography variant="body2">
                          <strong>Row {err.row}:</strong> {err.error}
                        </Typography>
                      </Alert>
                    ))}
                  </Box>
                </Box>
              )}
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ErrorOutlineIcon sx={{ mr: 1.5, color: errorColor, fontSize: 32 }} />
              <Typography variant="body1" fontWeight={500} sx={{ color: '#b71c1c' }}>
                {uploadResult.message}
              </Typography>
            </Box>
          )}
        </Paper>
      )}
    </Box>
  );
};

export default BulkAdmission;