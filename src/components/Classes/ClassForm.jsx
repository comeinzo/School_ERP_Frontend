// // import React, { useState, useEffect } from 'react';
// // // import './ClassForm.css';

// // const ClassForm = ({ onSubmit, onPreview, onChange, loading, initialData = null }) => {
// //   const [formData, setFormData] = useState({
// //     className: '',
// //     medium: '',
// //     divisions: [],
// //     customDivision: '',
// //     academicYear: new Date().getFullYear(),
// //     maxStudentsPerDivision: 40,
// //     classTeacher: '',
// //     room: '',
// //     description: ''
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [selectedDivisions, setSelectedDivisions] = useState([]);
// //   const [useCustomDivisions, setUseCustomDivisions] = useState(false);

// //   // Predefined options
// //   const classOptions = [
// //     '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
// //     'LKG', 'UKG', 'Nursery', 'Pre-K'
// //   ];

// //   const mediumOptions = [
// //     'English',
// //     'Hindi',
// //     'Malayalam',
// //     'Tamil',
// //     'Telugu',
// //     'Kannada',
// //     'Bengali',
// //     'Marathi',
// //     'Gujarati',
// //     'CBSE',
// //     'ICSE',
// //     'State Board'
// //   ];

// //   const divisionOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

// //   useEffect(() => {
// //     if (initialData) {
// //       setFormData(initialData);
// //       setSelectedDivisions(initialData.divisions || []);
// //     }
// //   }, [initialData]);

// //   useEffect(() => {
// //     onChange && onChange({ ...formData, divisions: selectedDivisions });
// //   }, [formData, selectedDivisions]);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));
    
// //     // Clear error for this field
// //     if (errors[name]) {
// //       setErrors(prev => ({ ...prev, [name]: '' }));
// //     }
// //   };

// //   const handleDivisionToggle = (division) => {
// //     setSelectedDivisions(prev => {
// //       if (prev.includes(division)) {
// //         return prev.filter(d => d !== division);
// //       } else {
// //         return [...prev, division].sort();
// //       }
// //     });
// //   };

// //   const handleAddCustomDivision = () => {
// //     const division = formData.customDivision.trim().toUpperCase();
// //     if (division && !selectedDivisions.includes(division)) {
// //       setSelectedDivisions(prev => [...prev, division].sort());
// //       setFormData(prev => ({ ...prev, customDivision: '' }));
// //     }
// //   };

// //   const handleRemoveDivision = (division) => {
// //     setSelectedDivisions(prev => prev.filter(d => d !== division));
// //   };

// //   const validateForm = () => {
// //     const newErrors = {};

// //     if (!formData.className) {
// //       newErrors.className = 'Class name is required';
// //     }

// //     if (!formData.medium) {
// //       newErrors.medium = 'Medium is required';
// //     }

// //     if (selectedDivisions.length === 0) {
// //       newErrors.divisions = 'At least one division is required';
// //     }

// //     if (formData.maxStudentsPerDivision < 1 || formData.maxStudentsPerDivision > 100) {
// //       newErrors.maxStudentsPerDivision = 'Max students must be between 1 and 100';
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (validateForm()) {
// //       const submitData = {
// //         ...formData,
// //         divisions: selectedDivisions
// //       };
// //       onSubmit(submitData);
// //     }
// //   };

// //   const handlePreview = () => {
// //     if (validateForm()) {
// //       onPreview({
// //         ...formData,
// //         divisions: selectedDivisions
// //       });
// //     }
// //   };

// //   const selectAllDivisions = () => {
// //     setSelectedDivisions(divisionOptions.slice(0, 5)); // Select A to E by default
// //   };

// //   const clearAllDivisions = () => {
// //     setSelectedDivisions([]);
// //   };

// //   return (
// //     <form className="class-form" onSubmit={handleSubmit}>
// //       <div className="form-card">
// //         <h2>📚 Class Information</h2>
        
// //         {/* Class Name Field */}
// //         <div className="form-group">
// //           <label htmlFor="className">
// //             Class Name <span className="required">*</span>
// //           </label>
// //           <select
// //             id="className"
// //             name="className"
// //             value={formData.className}
// //             onChange={handleInputChange}
// //             className={errors.className ? 'error' : ''}
// //           >
// //             <option value="">Select Class</option>
// //             <optgroup label="Primary Classes">
// //               {['LKG', 'UKG', 'Nursery', 'Pre-K', '1', '2', '3', '4', '5'].map(cls => (
// //                 <option key={cls} value={cls}>Class {cls}</option>
// //               ))}
// //             </optgroup>
// //             <optgroup label="Middle School">
// //               {['6', '7', '8'].map(cls => (
// //                 <option key={cls} value={cls}>Class {cls}</option>
// //               ))}
// //             </optgroup>
// //             <optgroup label="High School">
// //               {['9', '10', '11', '12'].map(cls => (
// //                 <option key={cls} value={cls}>Class {cls}</option>
// //               ))}
// //             </optgroup>
// //           </select>
// //           {errors.className && <span className="error-text">{errors.className}</span>}
// //         </div>

// //         {/* Medium Field */}
// //         <div className="form-group">
// //           <label htmlFor="medium">
// //             Medium <span className="required">*</span>
// //           </label>
// //           <select
// //             id="medium"
// //             name="medium"
// //             value={formData.medium}
// //             onChange={handleInputChange}
// //             className={errors.medium ? 'error' : ''}
// //           >
// //             <option value="">Select Medium</option>
// //             {mediumOptions.map(medium => (
// //               <option key={medium} value={medium}>{medium} Medium</option>
// //             ))}
// //           </select>
// //           {errors.medium && <span className="error-text">{errors.medium}</span>}
// //         </div>

// //         {/* Academic Year */}
// //         <div className="form-row">
// //           <div className="form-group">
// //             <label htmlFor="academicYear">Academic Year</label>
// //             <input
// //               type="number"
// //               id="academicYear"
// //               name="academicYear"
// //               value={formData.academicYear}
// //               onChange={handleInputChange}
// //               min="2020"
// //               max="2030"
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label htmlFor="maxStudentsPerDivision">Max Students per Division</label>
// //             <input
// //               type="number"
// //               id="maxStudentsPerDivision"
// //               name="maxStudentsPerDivision"
// //               value={formData.maxStudentsPerDivision}
// //               onChange={handleInputChange}
// //               min="1"
// //               max="100"
// //               className={errors.maxStudentsPerDivision ? 'error' : ''}
// //             />
// //             {errors.maxStudentsPerDivision && 
// //               <span className="error-text">{errors.maxStudentsPerDivision}</span>
// //             }
// //           </div>
// //         </div>

// //         {/* Optional Fields */}
// //         <div className="form-row">
// //           <div className="form-group">
// //             <label htmlFor="classTeacher">Class Teacher (Optional)</label>
// //             <input
// //               type="text"
// //               id="classTeacher"
// //               name="classTeacher"
// //               value={formData.classTeacher}
// //               onChange={handleInputChange}
// //               placeholder="Enter teacher name"
// //             />
// //           </div>

// //           <div className="form-group">
// //             <label htmlFor="room">Room/Location (Optional)</label>
// //             <input
// //               type="text"
// //               id="room"
// //               name="room"
// //               value={formData.room}
// //               onChange={handleInputChange}
// //               placeholder="e.g., Room 201, Block A"
// //             />
// //           </div>
// //         </div>

// //         {/* Description */}
// //         <div className="form-group">
// //           <label htmlFor="description">Description (Optional)</label>
// //           <textarea
// //             id="description"
// //             name="description"
// //             value={formData.description}
// //             onChange={handleInputChange}
// //             rows="3"
// //             placeholder="Add any additional information about this class..."
// //           />
// //         </div>
// //       </div>

// //       {/* Divisions Section */}
// //       <div className="form-card">
// //         <div className="divisions-header">
// //           <h2>📊 Divisions <span className="required">*</span></h2>
// //           <div className="division-actions">
// //             <button type="button" onClick={selectAllDivisions} className="btn-text">
// //               Select A-E
// //             </button>
// //             <button type="button" onClick={clearAllDivisions} className="btn-text">
// //               Clear All
// //             </button>
// //             <label className="custom-toggle">
// //               <input
// //                 type="checkbox"
// //                 checked={useCustomDivisions}
// //                 onChange={(e) => setUseCustomDivisions(e.target.checked)}
// //               />
// //               <span>Custom Divisions</span>
// //             </label>
// //           </div>
// //         </div>

// //         {!useCustomDivisions ? (
// //           <div className="divisions-grid">
// //             {divisionOptions.map(division => (
// //               <div
// //                 key={division}
// //                 className={`division-card ${selectedDivisions.includes(division) ? 'selected' : ''}`}
// //                 onClick={() => handleDivisionToggle(division)}
// //               >
// //                 <div className="division-checkbox">
// //                   <input
// //                     type="checkbox"
// //                     checked={selectedDivisions.includes(division)}
// //                     onChange={() => {}}
// //                   />
// //                 </div>
// //                 <div className="division-label">Division {division}</div>
// //               </div>
// //             ))}
// //           </div>
// //         ) : (
// //           <div className="custom-divisions">
// //             <div className="custom-input-group">
// //               <input
// //                 type="text"
// //                 value={formData.customDivision}
// //                 onChange={handleInputChange}
// //                 name="customDivision"
// //                 placeholder="Enter custom division name"
// //                 onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddCustomDivision())}
// //               />
// //               <button type="button" onClick={handleAddCustomDivision} className="btn-add">
// //                 Add Division
// //               </button>
// //             </div>
// //           </div>
// //         )}

// //         {/* Selected Divisions Display */}
// //         {selectedDivisions.length > 0 && (
// //           <div className="selected-divisions">
// //             <h4>Selected Divisions ({selectedDivisions.length})</h4>
// //             <div className="division-tags">
// //               {selectedDivisions.map(division => (
// //                 <span key={division} className="division-tag">
// //                   Division {division}
// //                   <button
// //                     type="button"
// //                     onClick={() => handleRemoveDivision(division)}
// //                     className="remove-btn"
// //                   >
// //                     ×
// //                   </button>
// //                 </span>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {errors.divisions && <span className="error-text">{errors.divisions}</span>}
// //       </div>

// //       {/* Form Actions */}
// //       <div className="form-actions">
// //         <button 
// //           type="button" 
// //           onClick={() => window.history.back()} 
// //           className="btn-secondary"
// //         >
// //           Cancel
// //         </button>
// //         <button 
// //           type="button" 
// //           onClick={handlePreview} 
// //           className="btn-outline"
// //         >
// //           Preview
// //         </button>
// //         <button 
// //           type="submit" 
// //           className="btn-primary"
// //           disabled={loading}
// //         >
// //           {loading ? 'Creating...' : 'Create Class'}
// //         </button>
// //       </div>
// //     </form>
// //   );
// // };

// // export default ClassForm;




// import React, { useState, useEffect } from 'react';
// // import './ClassForm.css';

// const ClassForm = ({ onSubmit, onPreview, onChange, loading, initialData = null }) => {
//   const [formData, setFormData] = useState({
//     className: '',
//     medium: '',
//     divisions: [],
//     numDivisions: 1, // Added for numerical input
//     academicYear: new Date().getFullYear(),
//     maxStudentsPerDivision: 40,
//     classTeacher: '',
//     room: '',
//     description: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [useCustomDivisions, setUseCustomDivisions] = useState(false);

//   // Predefined options
//   const divisionOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

//   useEffect(() => {
//     if (initialData) {
//       setFormData({
//         ...initialData,
//         numDivisions: initialData.divisions ? initialData.divisions.length : 1,
//       });
//       // Assuming 'initialData' may have custom divisions
//       const isCustom = initialData.divisions && initialData.divisions.some(d => !divisionOptions.includes(d));
//       setUseCustomDivisions(isCustom);
//     }
//   }, [initialData]);

//   useEffect(() => {
//     onChange && onChange(formData);
//   }, [formData]);

//   const handleInputChange = (e) => {
//     const { name, value, type } = e.target;
//     let newValue = value;

//     if (name === 'numDivisions') {
//       newValue = Math.max(1, Math.min(10, parseInt(value, 10) || 1));
//       if (newValue !== formData.numDivisions) {
//         generateDivisions(newValue);
//       }
//     }

//     setFormData(prev => ({
//       ...prev,
//       [name]: newValue
//     }));

//     // Clear error for this field
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const generateDivisions = (count) => {
//     if (!useCustomDivisions) {
//       const newDivisions = divisionOptions.slice(0, count);
//       setFormData(prev => ({
//         ...prev,
//         divisions: newDivisions
//       }));
//     }
//   };

//   const handleAddCustomDivision = () => {
//     const division = formData.customDivision.trim().toUpperCase();
//     if (division && !formData.divisions.includes(division)) {
//       const newDivisions = [...formData.divisions, division].sort();
//       setFormData(prev => ({
//         ...prev,
//         divisions: newDivisions,
//         customDivision: ''
//       }));
//     }
//   };

//   const handleRemoveDivision = (division) => {
//     const newDivisions = formData.divisions.filter(d => d !== division);
//     setFormData(prev => ({ ...prev, divisions: newDivisions }));
//   };

//   const toggleDivisionMode = (e) => {
//     const isCustom = e.target.checked;
//     setUseCustomDivisions(isCustom);
//     if (!isCustom) {
//       // Switch back to auto-generation
//       generateDivisions(formData.numDivisions);
//     } else {
//       // Clear divisions for custom input
//       setFormData(prev => ({ ...prev, divisions: [] }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.className) {
//       newErrors.className = 'Class name is required';
//     }

//     if (!formData.medium) {
//       newErrors.medium = 'Medium is required';
//     }

//     if (formData.divisions.length === 0) {
//       newErrors.divisions = 'At least one division is required';
//     }

//     if (formData.maxStudentsPerDivision < 1 || formData.maxStudentsPerDivision > 100) {
//       newErrors.maxStudentsPerDivision = 'Max students must be between 1 and 100';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       onSubmit(formData);
//     }
//   };

//   const handlePreview = () => {
//     if (validateForm()) {
//       onPreview(formData);
//     }
//   };

//   return (
//     <form className="class-form" onSubmit={handleSubmit}>
//       <div className="form-card">
//         <h2>📚 Class Information</h2>

//         {/* Class Name Text Input */}
//         <div className="form-group">
//           <label htmlFor="className">
//             Class Name <span className="required">*</span>
//           </label>
//           <input
//             type="text"
//             id="className"
//             name="className"
//             value={formData.className}
//             onChange={handleInputChange}
//             placeholder="e.g., 10, UKG"
//             className={errors.className ? 'error' : ''}
//           />
//           {errors.className && <span className="error-text">{errors.className}</span>}
//         </div>

//         {/* Medium Text Input */}
//         <div className="form-group">
//           <label htmlFor="medium">
//             Medium <span className="required">*</span>
//           </label>
//           <input
//             type="text"
//             id="medium"
//             name="medium"
//             value={formData.medium}
//             onChange={handleInputChange}
//             placeholder="e.g., English, CBSE"
//             className={errors.medium ? 'error' : ''}
//           />
//           {errors.medium && <span className="error-text">{errors.medium}</span>}
//         </div>

//         {/* Academic Year & Max Students */}
//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="academicYear">Academic Year</label>
//             <input
//               type="number"
//               id="academicYear"
//               name="academicYear"
//               value={formData.academicYear}
//               onChange={handleInputChange}
//               min="2020"
//               max="2030"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="maxStudentsPerDivision">Max Students per Division</label>
//             <input
//               type="number"
//               id="maxStudentsPerDivision"
//               name="maxStudentsPerDivision"
//               value={formData.maxStudentsPerDivision}
//               onChange={handleInputChange}
//               min="1"
//               max="100"
//               className={errors.maxStudentsPerDivision ? 'error' : ''}
//             />
//             {errors.maxStudentsPerDivision &&
//               <span className="error-text">{errors.maxStudentsPerDivision}</span>
//             }
//           </div>
//         </div>

//         {/* Optional Fields (Class Teacher & Room) */}
//         <div className="form-row">
//           {/* <div className="form-group">
//             <label htmlFor="classTeacher">Class Teacher (Optional)</label>
//             <input
//               type="text"
//               id="classTeacher"
//               name="classTeacher"
//               value={formData.classTeacher}
//               onChange={handleInputChange}
//               placeholder="Enter teacher name"
//             />
//           </div> */}
//           <div className="form-group">
//             <label htmlFor="room">Room/Location (Optional)</label>
//             <input
//               type="text"
//               id="room"
//               name="room"
//               value={formData.room}
//               onChange={handleInputChange}
//               placeholder="e.g., Room 201, Block A"
//             />
//           </div>
//         </div>

//         {/* Description */}
//         <div className="form-group">
//           <label htmlFor="description">Description (Optional)</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             rows="3"
//             placeholder="Add any additional information about this class..."
//           />
//         </div>
//       </div>

//       {/* Divisions Section */}
//       <div className="form-card">
//         <div className="divisions-header">
//           <h2>📊 Divisions <span className="required">*</span></h2>
//           <div className="division-actions">
//             <label className="custom-toggle">
//               <input
//                 type="checkbox"
//                 checked={useCustomDivisions}
//                 onChange={toggleDivisionMode}
//               />
//               <span>Use Custom Divisions</span>
//             </label>
//           </div>
//         </div>

//         {!useCustomDivisions ? (
//           <div className="form-group">
//             <label htmlFor="numDivisions">Number of Divisions (A, B, C...)</label>
//             <input
//               type="number"
//               id="numDivisions"
//               name="numDivisions"
//               value={formData.numDivisions}
//               onChange={handleInputChange}
//               min="1"
//               max="10"
//               onBlur={() => generateDivisions(formData.numDivisions)}
//             />
//           </div>
//         ) : (
//           <div className="custom-divisions">
//             <div className="custom-input-group">
//               <input
//                 type="text"
//                 value={formData.customDivision}
//                 onChange={handleInputChange}
//                 name="customDivision"
//                 placeholder="Enter custom division name"
//                 onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddCustomDivision())}
//               />
//               <button type="button" onClick={handleAddCustomDivision} className="btn-add">
//                 Add Division
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Selected Divisions Display */}
//         {formData.divisions.length > 0 && (
//           <div className="selected-divisions">
//             <h4>Selected Divisions ({formData.divisions.length})</h4>
//             <div className="division-tags">
//               {formData.divisions.map(division => (
//                 <span key={division} className="division-tag">
//                   Division {division}
//                   <button
//                     type="button"
//                     onClick={() => handleRemoveDivision(division)}
//                     className="remove-btn"
//                   >
//                     ×
//                   </button>
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {errors.divisions && <span className="error-text">{errors.divisions}</span>}
//       </div>

//       {/* Form Actions */}
//       <div className="form-actions">
//         <button
//           type="button"
//           onClick={() => window.history.back()}
//           className="btn-secondary"
//         >
//           Cancel
//         </button>
//         <button
//           type="button"
//           onClick={handlePreview}
//           className="btn-outline"
//         >
//           Preview
//         </button>
//         <button
//           type="submit"
//           className="btn-primary"
//           disabled={loading}
//         >
//           {loading ? 'Creating...' : 'Create Class'}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ClassForm;










import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ClearIcon from '@mui/icons-material/Clear';

// Ensure this component is wrapped in <LocalizationProvider> in your parent component
// e.g., <LocalizationProvider dateAdapter={AdapterDayjs}><ClassForm ... /></LocalizationProvider>

const ClassForm = ({ onSubmit, onPreview, onChange, loading, initialData = null }) => {
  const [formData, setFormData] = useState({
    className: '',
    medium: '',
    divisions: [],
    numDivisions: 1,
    academicYear: dayjs().year(), // Use dayjs for the year
    maxStudentsPerDivision: 40,
    classTeacher: '',
    room: '',
    description: '',
    customDivision: '' // For custom division input
  });

  const [errors, setErrors] = useState({});
  const [useCustomDivisions, setUseCustomDivisions] = useState(false);

  const divisionOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        academicYear: initialData.academicYear ? dayjs(String(initialData.academicYear)) : dayjs(),
        numDivisions: initialData.divisions ? initialData.divisions.length : 1,
        customDivision: '',
      });
      const isCustom = initialData.divisions && initialData.divisions.some(d => !divisionOptions.includes(d));
      setUseCustomDivisions(isCustom);
    }
  }, [initialData]);

  useEffect(() => {
    onChange && onChange(formData);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleNumDivisionsChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) value = 1;
    if (value > 10) value = 10;
    
    setFormData(prev => ({ ...prev, numDivisions: value }));
    generateDivisions(value);
  };

  const handleAcademicYearChange = (date) => {
    const year = date ? date.year() : dayjs().year();
    setFormData(prev => ({ ...prev, academicYear: year }));
  };

  const generateDivisions = (count) => {
    if (!useCustomDivisions) {
      const newDivisions = divisionOptions.slice(0, count);
      setFormData(prev => ({ ...prev, divisions: newDivisions }));
    }
  };

  const handleAddCustomDivision = () => {
    const division = formData.customDivision.trim().toUpperCase();
    if (division && !formData.divisions.includes(division)) {
      setFormData(prev => ({
        ...prev,
        divisions: [...prev.divisions, division].sort(),
        customDivision: ''
      }));
    }
  };

  const handleRemoveDivision = (division) => {
    setFormData(prev => ({
      ...prev,
      divisions: prev.divisions.filter(d => d !== division)
    }));
  };

  const toggleDivisionMode = (e) => {
    const isCustom = e.target.checked;
    setUseCustomDivisions(isCustom);
    if (!isCustom) {
      generateDivisions(formData.numDivisions);
    } else {
      setFormData(prev => ({ ...prev, divisions: [] }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.className) newErrors.className = 'Class name is required';
    if (!formData.medium) newErrors.medium = 'Medium is required';
    if (formData.divisions.length === 0) newErrors.divisions = 'At least one division is required';
    if (formData.maxStudentsPerDivision < 1 || formData.maxStudentsPerDivision > 100) {
      newErrors.maxStudentsPerDivision = 'Max students must be between 1 and 100';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      console.log("formdata",formData)
    }
  };

  const handlePreview = () => {
    if (validateForm()) {
      onPreview(formData);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 800, margin: 'auto', p: 2 }}>
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              📚 Class Information
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Class Name"
                  name="className"
                  value={formData.className}
                  onChange={handleInputChange}
                  placeholder="e.g., 10, UKG"
                  error={!!errors.className}
                  helperText={errors.className}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Medium"
                  name="medium"
                  value={formData.medium}
                  onChange={handleInputChange}
                  placeholder="e.g., English, CBSE"
                  error={!!errors.medium}
                  helperText={errors.medium}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePicker
                  views={['year']}
                  label="Academic Year"
                  value={dayjs(String(formData.academicYear))}
                  onChange={handleAcademicYearChange}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  type="number"
                  label="Max Students per Division"
                  name="maxStudentsPerDivision"
                  value={formData.maxStudentsPerDivision}
                  onChange={handleInputChange}
                  inputProps={{ min: 1, max: 100 }}
                  error={!!errors.maxStudentsPerDivision}
                  helperText={errors.maxStudentsPerDivision}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Room/Location (Optional)"
                  name="room"
                  value={formData.room}
                  onChange={handleInputChange}
                  placeholder="e.g., Room 201, Block A"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Description (Optional)"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Add any additional information about this class..."
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h5">
                📊 Divisions
              </Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={useCustomDivisions}
                    onChange={toggleDivisionMode}
                  />
                }
                label="Use Custom Divisions"
              />
            </Box>

            {!useCustomDivisions ? (
              <TextField
                fullWidth
                type="number"
                label="Number of Divisions (A, B, C...)"
                name="numDivisions"
                value={formData.numDivisions}
                onChange={handleNumDivisionsChange}
                inputProps={{ min: 1, max: 10 }}
              />
            ) : (
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <TextField
                    fullWidth
                    label="Enter custom division name"
                    name="customDivision"
                    value={formData.customDivision}
                    onChange={handleInputChange}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddCustomDivision()}
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={handleAddCustomDivision}
                    startIcon={<AddCircleIcon />}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            )}

            {formData.divisions.length > 0 && (
              <Box mt={3}>
                <Typography variant="subtitle1" gutterBottom>
                  Selected Divisions ({formData.divisions.length})
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {formData.divisions.map(division => (
                    <Chip
                      key={division}
                      label={`Division ${division}`}
                      onDelete={() => handleRemoveDivision(division)}
                      color="primary"
                      variant="outlined"
                      deleteIcon={<ClearIcon />}
                    />
                  ))}
                </Box>
              </Box>
            )}
            {errors.divisions && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {errors.divisions}
              </Typography>
            )}
          </CardContent>
        </Card>

        <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
          <Button
            variant="outlined"
            onClick={() => window.history.back()}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            onClick={handlePreview}
          >
            Preview
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Class'}
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default ClassForm;