// // // import React, { useState, useEffect } from 'react'
// // // import { useNavigate } from 'react-router-dom'
// // // import {
// // //   Box, 
// // //   Typography, 
// // //   Grid, 
// // //   Card, 
// // //   CardContent, 
// // //   CardActions,
// // //   Button, 
// // //   AppBar, 
// // //   Toolbar,
// // //   IconButton,
// // //   Menu,
// // //   MenuItem,
// // //   Avatar,
// // //   Chip,
// // //   Paper,
// // //   List,
// // //   ListItem,
// // //   ListItemIcon,
// // //   ListItemText,
// // //   Divider,
// // //   Badge
// // // } from '@mui/material'
// // // import {
// // //   Dashboard as DashboardIcon,
// // //   People as PeopleIcon,
// // //   School as SchoolIcon,
// // //   Assignment as AssignmentIcon,
// // //   Settings as SettingsIcon,
// // //   Logout as LogoutIcon,
// // //   Notifications as NotificationsIcon,
// // //   AccountCircle as AccountCircleIcon,
// // //   TrendingUp as TrendingUpIcon,
// // //   Group as GroupIcon,
// // //   MenuBook as MenuBookIcon,
// // //   EventNote as EventNoteIcon,
// // //   Assessment as AssessmentIcon,
// // //   Security as SecurityIcon,
// // //   Add as AddIcon,
// // //   Edit as EditIcon,
// // //   Visibility as VisibilityIcon,
// // //   SupervisorAccount as SupervisorAccountIcon,
// // //   CalendarToday as CalendarTodayIcon,
// // //   AttachMoney as AttachMoneyIcon,
// // //   LibraryBooks as LibraryBooksIcon
// // // } from '@mui/icons-material'

// // // const AdminHome = () => {
// // //   const [user, setUser] = useState(null)
// // //   const [anchorEl, setAnchorEl] = useState(null)
// // //   const [stats, setStats] = useState({
// // //     totalStudents: 245,
// // //     totalTeachers: 18,
// // //     totalClasses: 12,
// // //     activeUsers: 156
// // //   })
// // //   const navigate = useNavigate()

// // //   useEffect(() => {
// // //     fetchUserData()
// // //   }, [])

// // //   const fetchUserData = async () => {
// // //     try {
// // //       const response = await fetch(`${import.meta.env.VITE_API_BASE}/users/me`, {
// // //         credentials: 'include'
// // //       })
// // //       if (response.ok) {
// // //         const userData = await response.json()
// // //         setUser(userData)
// // //       }
// // //     } catch (error) {
// // //       console.error('Failed to fetch user data:', error)
// // //     }
// // //   }

// // //   const handleMenuClick = (event) => {
// // //     setAnchorEl(event.currentTarget)
// // //   }

// // //   const handleMenuClose = () => {
// // //     setAnchorEl(null)
// // //   }

// // //   const handleLogout = async () => {
// // //     try {
// // //       await fetch(`${import.meta.env.VITE_API_BASE}/auth/logout`, {
// // //         method: 'POST',
// // //         credentials: 'include'
// // //       })
// // //       navigate('/login')
// // //     } catch (error) {
// // //       console.error('Logout error:', error)
// // //       navigate('/login')
// // //     }
// // //   }

// // //   const quickActions = [
// // //     { 
// // //       title: 'Add Student', 
// // //       icon: <AddIcon />, 
// // //       color: '#4caf50', 
// // //       description: 'Register new student',
// // //       action: () => alert('Add Student functionality coming soon!') 
// // //     },
// // //     { 
// // //       title: 'Add Teacher', 
// // //       icon: <SupervisorAccountIcon />, 
// // //       color: '#2196f3', 
// // //       description: 'Add teaching staff',
// // //       action: () => alert('Add Teacher functionality coming soon!') 
// // //     },
// // //     { 
// // //       title: 'Create Class', 
// // //       icon: <SchoolIcon />, 
// // //       color: '#ff9800', 
// // //       description: 'Setup new class',
// // //       action: () => alert('Create Class functionality coming soon!') 
// // //     },
// // //     { 
// // //       title: 'System Settings', 
// // //       icon: <SettingsIcon />, 
// // //       color: '#9c27b0', 
// // //       description: 'Configure system',
// // //       action: () => alert('System Settings coming soon!') 
// // //     },
// // //     { 
// // //       title: 'View Reports', 
// // //       icon: <AssessmentIcon />, 
// // //       color: '#f44336', 
// // //       description: 'Generate reports',
// // //       action: () => alert('Reports functionality coming soon!') 
// // //     },
// // //     { 
// // //       title: 'Manage Fees', 
// // //       icon: <AttachMoneyIcon />, 
// // //       color: '#607d8b', 
// // //       description: 'Fee management',
// // //       action: () => alert('Fee management coming soon!') 
// // //     }
// // //   ]

// // //   const recentActivities = [
// // //     { title: 'New student John Doe registered', time: '2 hours ago', type: 'student', priority: 'low' },
// // //     { title: 'Teacher Mary Smith profile updated', time: '4 hours ago', type: 'teacher', priority: 'medium' },
// // //     { title: 'Class 10-A schedule modified', time: '6 hours ago', type: 'schedule', priority: 'high' },
// // //     { title: 'System backup completed successfully', time: '1 day ago', type: 'system', priority: 'low' },
// // //     { title: 'New admin account created', time: '2 days ago', type: 'user', priority: 'high' },
// // //     { title: 'Monthly fee collection report generated', time: '3 days ago', type: 'finance', priority: 'medium' }
// // //   ]

// // //   const managementModules = [
// // //     {
// // //       title: 'Student Management',
// // //       description: 'Manage student profiles, admissions, and academic records',
// // //       icon: <GroupIcon fontSize="large" />,
// // //       color: '#1976d2',
// // //       actions: ['View Students', 'Add Student', 'Student Records'],
// // //       count: stats.totalStudents
// // //     },
// // //     {
// // //       title: 'Teacher Management',
// // //       description: 'Manage teaching staff, schedules, and performance',
// // //       icon: <PeopleIcon fontSize="large" />,
// // //       color: '#388e3c',
// // //       actions: ['View Teachers', 'Add Teacher', 'Staff Records'],
// // //       count: stats.totalTeachers
// // //     },
// // //     {
// // //       title: 'Academic Management',
// // //       description: 'Manage classes, subjects, curriculum, and schedules',
// // //       icon: <MenuBookIcon fontSize="large" />,
// // //       color: '#f57c00',
// // //       actions: ['Manage Classes', 'Add Subjects', 'Timetable'],
// // //       count: stats.totalClasses
// // //     },
// // //     {
// // //       title: 'Fee Management',
// // //       description: 'Handle fee collection, payments, and financial records',
// // //       icon: <AttachMoneyIcon fontSize="large" />,
// // //       color: '#7b1fa2',
// // //       actions: ['Fee Structure', 'Payments', 'Financial Reports'],
// // //       count: '₹2.4M'
// // //     },
// // //     {
// // //       title: 'Examination System',
// // //       description: 'Manage exams, results, and grade calculations',
// // //       icon: <AssignmentIcon fontSize="large" />,
// // //       color: '#d32f2f',
// // //       actions: ['Create Exam', 'Results', 'Grade Reports'],
// // //       count: '24 Exams'
// // //     },
// // //     {
// // //       title: 'Library Management',
// // //       description: 'Manage books, issues, returns, and library resources',
// // //       icon: <LibraryBooksIcon fontSize="large" />,
// // //       color: '#455a64',
// // //       actions: ['Manage Books', 'Issue Books', 'Library Reports'],
// // //       count: '1,245 Books'
// // //     },
// // //     {
// // //       title: 'Reports & Analytics',
// // //       description: 'Generate comprehensive reports and analytics',
// // //       icon: <AssessmentIcon fontSize="large" />,
// // //       color: '#0097a7',
// // //       actions: ['Student Reports', 'Performance Analytics', 'Export Data'],
// // //       count: '156 Reports'
// // //     },
// // //     {
// // //       title: 'System Administration',
// // //       description: 'System settings, security, backup, and maintenance',
// // //       icon: <SecurityIcon fontSize="large" />,
// // //       color: '#5d4037',
// // //       actions: ['Security Settings', 'Backup Data', 'System Logs'],
// // //       count: stats.activeUsers + ' Users'
// // //     }
// // //   ]

// // //   const upcomingEvents = [
// // //     { title: 'Parent-Teacher Meeting', date: 'Tomorrow', type: 'meeting' },
// // //     { title: 'Annual Sports Day', date: 'Next Week', type: 'event' },
// // //     { title: 'Mid-term Examinations', date: 'Mar 15-20', type: 'exam' },
// // //     { title: 'School Anniversary', date: 'Apr 5', type: 'celebration' }
// // //   ]

// // //   const getActivityIcon = (type) => {
// // //     switch (type) {
// // //       case 'student': return <GroupIcon />
// // //       case 'teacher': return <PeopleIcon />
// // //       case 'schedule': return <CalendarTodayIcon />
// // //       case 'system': return <SettingsIcon />
// // //       case 'user': return <AccountCircleIcon />
// // //       case 'finance': return <AttachMoneyIcon />
// // //       default: return <EventNoteIcon />
// // //     }
// // //   }

// // //   const getPriorityColor = (priority) => {
// // //     switch (priority) {
// // //       case 'high': return 'error'
// // //       case 'medium': return 'warning'
// // //       case 'low': return 'success'
// // //       default: return 'default'
// // //     }
// // //   }

// // //   return (
// // //     <Box sx={{ flexGrow: 1, bgcolor: '#f8fafc' }}>
// // //       {/* App Bar */}
// // //       <AppBar position="static" sx={{ bgcolor: '#1e293b', boxShadow: 3 }}>
// // //         <Toolbar>
// // //           <DashboardIcon sx={{ mr: 2 }} />
// // //           <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
// // //             School ERP - Admin Dashboard
// // //           </Typography>
          
// // //           <IconButton color="inherit" sx={{ mr: 2 }}>
// // //             <Badge badgeContent={6} color="error">
// // //               <NotificationsIcon />
// // //             </Badge>
// // //           </IconButton>
          
// // //           <Chip 
// // //             avatar={<Avatar sx={{ bgcolor: '#3b82f6' }}>{user?.username?.charAt(0).toUpperCase()}</Avatar>}
// // //             label={user?.full_name || user?.username || 'Admin'}
// // //             sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }}
// // //           />
          
// // //           <IconButton
// // //             color="inherit"
// // //             onClick={handleMenuClick}
// // //             sx={{ ml: 1 }}
// // //           >
// // //             <AccountCircleIcon />
// // //           </IconButton>
          
// // //           <Menu
// // //             anchorEl={anchorEl}
// // //             open={Boolean(anchorEl)}
// // //             onClose={handleMenuClose}
// // //             PaperProps={{
// // //               sx: { minWidth: 200 }
// // //             }}
// // //           >
// // //             <MenuItem onClick={handleMenuClose}>
// // //               <AccountCircleIcon sx={{ mr: 2 }} />
// // //               Profile Settings
// // //             </MenuItem>
// // //             <MenuItem onClick={handleMenuClose}>
// // //               <SettingsIcon sx={{ mr: 2 }} />
// // //               System Settings
// // //             </MenuItem>
// // //             <Divider />
// // //             <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
// // //               <LogoutIcon sx={{ mr: 2 }} />
// // //               Logout
// // //             </MenuItem>
// // //           </Menu>
// // //         </Toolbar>
// // //       </AppBar>

// // //       {/* Main Content */}
// // //       <Box sx={{ p: 3 }}>
// // //         {/* Welcome Section */}
// // //         <Paper 
// // //           elevation={0}
// // //           sx={{ 
// // //             p: 4, 
// // //             mb: 3, 
// // //             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
// // //             color: 'white',
// // //             borderRadius: 3
// // //           }}
// // //         >
// // //           <Grid container alignItems="center" spacing={2}>
// // //             <Grid item xs={12} md={8}>
// // //               <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
// // //                 Welcome back, {user?.full_name || user?.username}! 👋
// // //               </Typography>
// // //               <Typography variant="h6" sx={{ opacity: 0.9, mb: 2 }}>
// // //                 School Administrator Dashboard - Manage your institution efficiently
// // //               </Typography>
// // //               <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
// // //                 <Chip 
// // //                   icon={<SecurityIcon />}
// // //                   label={`Role: ${user?.role || 'Admin'}`} 
// // //                   sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
// // //                 />
// // //                 <Chip 
// // //                   icon={<CalendarTodayIcon />}
// // //                   label={new Date().toLocaleDateString()} 
// // //                   sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
// // //                 />
// // //               </Box>
// // //             </Grid>
// // //             <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
// // //               <Avatar 
// // //                 sx={{ 
// // //                   width: 100, 
// // //                   height: 100, 
// // //                   bgcolor: 'rgba(255,255,255,0.2)', 
// // //                   fontSize: '2rem',
// // //                   mx: 'auto'
// // //                 }}
// // //               >
// // //                 {user?.username?.charAt(0).toUpperCase() || 'A'}
// // //               </Avatar>
// // //             </Grid>
// // //           </Grid>
// // //         </Paper>

// // //         {/* Statistics Cards */}
// // //         <Grid container spacing={3} sx={{ mb: 4 }}>
// // //           <Grid item xs={12} sm={6} md={3}>
// // //             <Card sx={{ 
// // //               bgcolor: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)', 
// // //               border: '1px solid #2196f3',
// // //               '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
// // //               transition: 'all 0.3s ease'
// // //             }}>
// // //               <CardContent sx={{ textAlign: 'center' }}>
// // //                 <Avatar sx={{ bgcolor: '#1976d2', mx: 'auto', mb: 2, width: 56, height: 56 }}>
// // //                   <GroupIcon fontSize="large" />
// // //                 </Avatar>
// // //                 <Typography variant="h3" sx={{ color: '#1976d2', fontWeight: 'bold', mb: 1 }}>
// // //                   {stats.totalStudents}
// // //                 </Typography>
// // //                 <Typography variant="h6" color="textSecondary">
// // //                   Total Students
// // //                 </Typography>
// // //                 <Typography variant="body2" sx={{ color: '#1976d2', mt: 1 }}>
// // //                   +12 this month
// // //                 </Typography>
// // //               </CardContent>
// // //             </Card>
// // //           </Grid>

// // //           <Grid item xs={12} sm={6} md={3}>
// // //             <Card sx={{ 
// // //               bgcolor: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)', 
// // //               border: '1px solid #4caf50',
// // //               '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
// // //               transition: 'all 0.3s ease'
// // //             }}>
// // //               <CardContent sx={{ textAlign: 'center' }}>
// // //                 <Avatar sx={{ bgcolor: '#388e3c', mx: 'auto', mb: 2, width: 56, height: 56 }}>
// // //                   <PeopleIcon fontSize="large" />
// // //                 </Avatar>
// // //                 <Typography variant="h3" sx={{ color: '#388e3c', fontWeight: 'bold', mb: 1 }}>
// // //                   {stats.totalTeachers}
// // //                 </Typography>
// // //                 <Typography variant="h6" color="textSecondary">
// // //                   Total Teachers
// // //                 </Typography>
// // //                 <Typography variant="body2" sx={{ color: '#388e3c', mt: 1 }}>
// // //                   +2 this month
// // //                 </Typography>
// // //               </CardContent>
// // //             </Card>
// // //           </Grid>

// // //           <Grid item xs={12} sm={6} md={3}>
// // //             <Card sx={{ 
// // //               bgcolor: 'linear-gradient(135deg, #fff3e0 0%, #ffcc02 100%)', 
// // //               border: '1px solid #ff9800',
// // //               '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
// // //               transition: 'all 0.3s ease'
// // //             }}>
// // //               <CardContent sx={{ textAlign: 'center' }}>
// // //                 <Avatar sx={{ bgcolor: '#f57c00', mx: 'auto', mb: 2, width: 56, height: 56 }}>
// // //                   <SchoolIcon fontSize="large" />
// // //                 </Avatar>
// // //                 <Typography variant="h3" sx={{ color: '#f57c00', fontWeight: 'bold', mb: 1 }}>
// // //                   {stats.totalClasses}
// // //                 </Typography>
// // //                 <Typography variant="h6" color="textSecondary">
// // //                   Total Classes
// // //                 </Typography>
// // //                 <Typography variant="body2" sx={{ color: '#f57c00', mt: 1 }}>
// // //                   Active sessions
// // //                 </Typography>
// // //               </CardContent>
// // //             </Card>
// // //           </Grid>

// // //           <Grid item xs={12} sm={6} md={3}>
// // //             <Card sx={{ 
// // //               bgcolor: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%)', 
// // //               border: '1px solid #e91e63',
// // //               '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 },
// // //               transition: 'all 0.3s ease'
// // //             }}>
// // //               <CardContent sx={{ textAlign: 'center' }}>
// // //                 <Avatar sx={{ bgcolor: '#c2185b', mx: 'auto', mb: 2, width: 56, height: 56 }}>
// // //                   <TrendingUpIcon fontSize="large" />
// // //                 </Avatar>
// // //                 <Typography variant="h3" sx={{ color: '#c2185b', fontWeight: 'bold', mb: 1 }}>
// // //                   {stats.activeUsers}
// // //                 </Typography>
// // //                 <Typography variant="h6" color="textSecondary">
// // //                   Active Users
// // //                 </Typography>
// // //                 <Typography variant="body2" sx={{ color: '#c2185b', mt: 1 }}>
// // //                   Online now
// // //                 </Typography>
// // //               </CardContent>
// // //             </Card>
// // //           </Grid>
// // //         </Grid>

// // //         <Grid container spacing={3} sx={{ mb: 4 }}>
// // //           {/* Quick Actions */}
// // //           <Grid item xs={12} lg={4}>
// // //             <Paper sx={{ p: 3, height: 'fit-content' }}>
// // //               <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
// // //                 <Avatar sx={{ bgcolor: '#3b82f6', mr: 2 }}>
// // //                   <AddIcon />
// // //                 </Avatar>
// // //                 <Typography variant="h6" sx={{ fontWeight: 600 }}>
// // //                   Quick Actions
// // //                 </Typography>
// // //               </Box>
// // //               <Grid container spacing={2}>
// // //                 {quickActions.map((action, index) => (
// // //                   <Grid item xs={6} key={index}>
// // //                     <Card 
// // //                       sx={{ 
// // //                         cursor: 'pointer', 
// // //                         '&:hover': { 
// // //                           transform: 'scale(1.05)',
// // //                           boxShadow: 4
// // //                         },
// // //                         transition: 'all 0.3s ease',
// // //                         height: '120px',
// // //                         display: 'flex',
// // //                         flexDirection: 'column'
// // //                       }}
// // //                       onClick={action.action}
// // //                     >
// // //                       <CardContent sx={{ 
// // //                         textAlign: 'center', 
// // //                         flexGrow: 1,
// // //                         display: 'flex',
// // //                         flexDirection: 'column',
// // //                         justifyContent: 'center'
// // //                       }}>
// // //                         <Avatar sx={{ bgcolor: action.color, mx: 'auto', mb: 1 }}>
// // //                           {action.icon}
// // //                         </Avatar>
// // //                         <Typography variant="body2" sx={{ fontWeight: 600 }}>
// // //                           {action.title}
// // //                         </Typography>
// // //                         <Typography variant="caption" color="textSecondary">
// // //                           {action.description}
// // //                         </Typography>
// // //                       </CardContent>
// // //                     </Card>
// // //                   </Grid>
// // //                 ))}
// // //               </Grid>
// // //             </Paper>
// // //           </Grid>

// // //           {/* Recent Activities */}
// // //           <Grid item xs={12} lg={4}>
// // //             <Paper sx={{ p: 3, height: 'fit-content' }}>
// // //               <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
// // //                 <Avatar sx={{ bgcolor: '#10b981', mr: 2 }}>
// // //                   <EventNoteIcon />
// // //                 </Avatar>
// // //                 <Typography variant="h6" sx={{ fontWeight: 600 }}>
// // //                   Recent Activities
// // //                 </Typography>
// // //               </Box>
// // //               <List dense sx={{ maxHeight: 400, overflow: 'auto' }}>
// // //                 {recentActivities.map((activity, index) => (
// // //                   <React.Fragment key={index}>
// // //                     <ListItem sx={{ px: 0 }}>
// // //                       <ListItemIcon>
// // //                         <Avatar sx={{ width: 32, height: 32, bgcolor: '#f1f5f9' }}>
// // //                           {React.cloneElement(getActivityIcon(activity.type), { 
// // //                             fontSize: 'small',
// // //                             sx: { color: '#64748b' }
// // //                           })}
// // //                         </Avatar>
// // //                       </ListItemIcon>
// // //                       <ListItemText 
// // //                         primary={
// // //                           <Typography variant="body2" sx={{ fontWeight: 500 }}>
// // //                             {activity.title}
// // //                           </Typography>
// // //                         }
// // //                         secondary={
// // //                           <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
// // //                             <Typography variant="caption" color="textSecondary">
// // //                               {activity.time}
// // //                             </Typography>
// // //                             <Chip 
// // //                               size="small" 
// // //                               label={activity.priority}
// // //                               color={getPriorityColor(activity.priority)}
// // //                               sx={{ ml: 1, height: 20, fontSize: '0.6rem' }}
// // //                             />
// // //                           </Box>
// // //                         }
// // //                       />
// // //                     </ListItem>
// // //                     {index < recentActivities.length - 1 && <Divider />}
// // //                   </React.Fragment>
// // //                 ))}
// // //               </List>
// // //             </Paper>
// // //           </Grid>

// // //           {/* Upcoming Events */}
// // //           <Grid item xs={12} lg={4}>
// // //             <Paper sx={{ p: 3, height: 'fit-content' }}>
// // //               <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
// // //                 <Avatar sx={{ bgcolor: '#f59e0b', mr: 2 }}>
// // //                   <CalendarTodayIcon />
// // //                 </Avatar>
// // //                 <Typography variant="h6" sx={{ fontWeight: 600 }}>
// // //                   Upcoming Events
// // //                 </Typography>
// // //               </Box>
// // //               <List>
// // //                 {upcomingEvents.map((event, index) => (
// // //                   <ListItem 
// // //                     key={index}
// // //                     sx={{ 
// // //                       px: 0,
// // //                       py: 1,
// // //                       cursor: 'pointer',
// // //                       '&:hover': { bgcolor: '#f8fafc' },
// // //                       borderRadius: 1
// // //                     }}
// // //                   >
// // //                     <ListItemIcon>
// // //                       <Avatar sx={{ 
// // //                         width: 40, 
// // //                         height: 40, 
// // //                         bgcolor: event.type === 'exam' ? '#ef4444' : 
// // //                                  event.type === 'meeting' ? '#3b82f6' :
// // //                                  event.type === 'celebration' ? '#f59e0b' : '#10b981'
// // //                       }}>
// // //                         <CalendarTodayIcon />
// // //                       </Avatar>
// // //                     </ListItemIcon>
// // //                     <ListItemText 
// // //                       primary={
// // //                         <Typography variant="body1" sx={{ fontWeight: 600 }}>
// // //                           {event.title}
// // //                         </Typography>
// // //                       }
// // //                       secondary={event.date}
// // //                     />
// // //                   </ListItem>
// // //                 ))}
// // //               </List>
// // //             </Paper>
// // //           </Grid>
// // //         </Grid>

// // //         {/* Management Modules */}
// // //         <Paper sx={{ p: 4 }}>
// // //           <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
// // //             <Avatar sx={{ bgcolor: '#1e293b', mr: 2, width: 48, height: 48 }}>
// // //               <DashboardIcon fontSize="large" />
// // //             </Avatar>
// // //             <Typography variant="h4" sx={{ fontWeight: 700 }}>
// // //               School Management Modules
// // //             </Typography>
// // //           </Box>
// // //           <Grid container spacing={3}>
// // //             {managementModules.map((module, index) => (
// // //               <Grid item xs={12} sm={6} lg={3} key={index}>
// // //                 <Card sx={{ 
// // //                   height: '100%', 
// // //                   '&:hover': { 
// // //                     boxShadow: 8,
// // //                     transform: 'translateY(-4px)'
// // //                   }, 
// // //                   transition: 'all 0.3s ease',
// // //                   cursor: 'pointer'
// // //                 }}>
// // //                   <CardContent sx={{ pb: 1 }}>
// // //                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
// // //                       <Avatar sx={{ bgcolor: module.color, mr: 2, width: 48, height: 48 }}>
// // //                         {module.icon}
// // //                       </Avatar>
// // //                       <Box sx={{ flexGrow: 1 }}>
// // //                         <Typography variant="h6" sx={{ fontWeight: 600 }}>
// // //                           {module.title}
// // //                         </Typography>
// // //                         <Chip 
// // //                           label={module.count}
// // //                           size="small"
// // //                           sx={{ bgcolor: module.color, color: 'white', mt: 0.5 }}
// // //                         />
// // //                       </Box>
// // //                     </Box>
// // //                     <Typography variant="body2" color="textSecondary" sx={{ mb: 2, minHeight: 40 }}>
// // //                       {module.description}
// // //                     </Typography>
// // //                   </CardContent>
// // //                   <CardActions sx={{ pt: 0 }}>
// // //                     {module.actions.map((action, actionIndex) => (
// // //                       <Button 
// // //                         key={actionIndex}
// // //                         size="small" 
// // //                         sx={{ 
// // //                           color: module.color,
// // //                           '&:hover': { bgcolor: `${module.color}10` }
// // //                         }}
// // //                         onClick={(e) => {
// // //                           e.stopPropagation()
// // //                           alert(`${action} functionality coming soon!`)
// // //                         }}
// // //                       >
// // //                         {action}
// // //                       </Button>
// // //                     ))}
// // //                   </CardActions>
// // //                 </Card>
// // //               </Grid>
// // //             ))}
// // //           </Grid>
// // //         </Paper>
// // //       </Box>
// // //     </Box>
// // //   )
// // // }

// // // export default AdminHome



// // // import React, { useState, useEffect } from 'react'
// // // import { useNavigate } from 'react-router-dom'
// // // import './AdminHome.css' // We'll create this CSS file

// // // const AdminHome = () => {
// // //   const [user, setUser] = useState(null)
// // //   const [showProfileMenu, setShowProfileMenu] = useState(false)
// // //   const [stats, setStats] = useState({
// // //     totalStudents: 245,
// // //     totalTeachers: 18,
// // //     totalClasses: 12,
// // //     activeUsers: 156
// // //   })
// // //   const navigate = useNavigate()

// // //   useEffect(() => {
// // //     fetchUserData()
// // //   }, [])

// // //   const fetchUserData = async () => {
// // //     try {
// // //       const response = await fetch(`${import.meta.env.VITE_API_BASE}/users/me`, {
// // //         credentials: 'include'
// // //       })
// // //       if (response.ok) {
// // //         const userData = await response.json()
// // //         setUser(userData)
// // //       }
// // //     } catch (error) {
// // //       console.error('Failed to fetch user data:', error)
// // //     }
// // //   }

// // //   const handleLogout = async () => {
// // //     try {
// // //       await fetch(`${import.meta.env.VITE_API_BASE}/auth/logout`, {
// // //         method: 'POST',
// // //         credentials: 'include'
// // //       })
// // //       navigate('/login')
// // //     } catch (error) {
// // //       console.error('Logout error:', error)
// // //       navigate('/login')
// // //     }
// // //   }

// // //   const quickActions = [
// // //     { 
// // //       title: 'Add Student', 
// // //       icon: '👨‍🎓', 
// // //       color: '#4caf50', 
// // //       description: 'Register new student',
// // //       action: () => alert('Add Student functionality coming soon!') 
// // //     },
// // //     { 
// // //       title: 'Add Teacher', 
// // //       icon: '👨‍🏫', 
// // //       color: '#2196f3', 
// // //       description: 'Add teaching staff',
// // //       action: () => alert('Add Teacher functionality coming soon!') 
// // //     },
// // //     { 
// // //       title: 'Create Class', 
// // //       icon: '🏫', 
// // //       color: '#ff9800', 
// // //       description: 'Setup new class',
// // //       action: () => alert('Create Class functionality coming soon!') 
// // //     },
// // //     { 
// // //       title: 'System Settings', 
// // //       icon: '⚙️', 
// // //       color: '#9c27b0', 
// // //       description: 'Configure system',
// // //       action: () => alert('System Settings coming soon!') 
// // //     },
// // //     { 
// // //       title: 'View Reports', 
// // //       icon: '📊', 
// // //       color: '#f44336', 
// // //       description: 'Generate reports',
// // //       action: () => alert('Reports functionality coming soon!') 
// // //     },
// // //     { 
// // //       title: 'Manage Fees', 
// // //       icon: '💰', 
// // //       color: '#607d8b', 
// // //       description: 'Fee management',
// // //       action: () => alert('Fee management coming soon!') 
// // //     }
// // //   ]

// // //   const recentActivities = [
// // //     { title: 'New student John Doe registered', time: '2 hours ago', type: 'student', priority: 'low' },
// // //     { title: 'Teacher Mary Smith profile updated', time: '4 hours ago', type: 'teacher', priority: 'medium' },
// // //     { title: 'Class 10-A schedule modified', time: '6 hours ago', type: 'schedule', priority: 'high' },
// // //     { title: 'System backup completed successfully', time: '1 day ago', type: 'system', priority: 'low' },
// // //     { title: 'New admin account created', time: '2 days ago', type: 'user', priority: 'high' }
// // //   ]

// // //   const managementModules = [
// // //     {
// // //       title: 'Student Management',
// // //       description: 'Manage student profiles, admissions, and academic records',
// // //       icon: '👥',
// // //       color: '#1976d2',
// // //       count: stats.totalStudents
// // //     },
// // //     {
// // //       title: 'Teacher Management',
// // //       description: 'Manage teaching staff, schedules, and performance',
// // //       icon: '👨‍🏫',
// // //       color: '#388e3c',
// // //       count: stats.totalTeachers
// // //     },
// // //     {
// // //       title: 'Academic Management',
// // //       description: 'Manage classes, subjects, curriculum, and schedules',
// // //       icon: '📚',
// // //       color: '#f57c00',
// // //       count: stats.totalClasses
// // //     },
// // //     {
// // //       title: 'Fee Management',
// // //       description: 'Handle fee collection, payments, and financial records',
// // //       icon: '💰',
// // //       color: '#7b1fa2',
// // //       count: '₹2.4M'
// // //     },
// // //     {
// // //       title: 'Examination System',
// // //       description: 'Manage exams, results, and grade calculations',
// // //       icon: '📝',
// // //       color: '#d32f2f',
// // //       count: '24 Exams'
// // //     },
// // //     {
// // //       title: 'Library Management',
// // //       description: 'Manage books, issues, returns, and library resources',
// // //       icon: '📖',
// // //       color: '#455a64',
// // //       count: '1,245 Books'
// // //     },
// // //     {
// // //       title: 'Reports & Analytics',
// // //       description: 'Generate comprehensive reports and analytics',
// // //       icon: '📈',
// // //       color: '#0097a7',
// // //       count: '156 Reports'
// // //     },
// // //     {
// // //       title: 'System Administration',
// // //       description: 'System settings, security, backup, and maintenance',
// // //       icon: '🔧',
// // //       color: '#5d4037',
// // //       count: stats.activeUsers + ' Users'
// // //     }
// // //   ]

// // //   const upcomingEvents = [
// // //     { title: 'Parent-Teacher Meeting', date: 'Tomorrow', type: 'meeting', icon: '🤝' },
// // //     { title: 'Annual Sports Day', date: 'Next Week', type: 'event', icon: '🏃‍♂️' },
// // //     { title: 'Mid-term Examinations', date: 'Mar 15-20', type: 'exam', icon: '📝' },
// // //     { title: 'School Anniversary', date: 'Apr 5', type: 'celebration', icon: '🎉' }
// // //   ]

// // //   return (
// // //     <div className="admin-home">
// // //       {/* Header */}
// // //       <header className="admin-header">
// // //         <div className="header-left">
// // //           <div className="logo">
// // //             <span className="logo-icon">🎓</span>
// // //             <h1>School ERP - Admin Dashboard</h1>
// // //           </div>
// // //         </div>
// // //         <div className="header-right">
// // //           <div className="notification-bell">
// // //             <span className="bell-icon">🔔</span>
// // //             <span className="notification-badge">6</span>
// // //           </div>
// // //           <div className="user-profile" onClick={() => setShowProfileMenu(!showProfileMenu)}>
// // //             <div className="user-avatar">
// // //               {user?.username?.charAt(0).toUpperCase() || 'A'}
// // //             </div>
// // //             <span className="user-name">{user?.full_name || user?.username || 'Admin'}</span>
// // //             <span className="dropdown-arrow">▼</span>
// // //             {showProfileMenu && (
// // //               <div className="profile-menu">
// // //                 <div className="menu-item">👤 Profile Settings</div>
// // //                 <div className="menu-item">⚙️ System Settings</div>
// // //                 <div className="menu-divider"></div>
// // //                 <div className="menu-item logout" onClick={handleLogout}>🚪 Logout</div>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </header>

      

// // //       {/* Main Content */}
// // //       <main className="admin-main">
// // //         {/* Welcome Section */}
// // //         {/* <section className="welcome-section">
// // //           <div className="welcome-content">
// // //             <h2>Welcome back, {user?.full_name || user?.username}! 👋</h2>
// // //             <p>School Administrator Dashboard - Manage your institution efficiently</p>
// // //             <div className="welcome-badges">
// // //               <span className="badge">🔐 Role: {user?.role || 'Admin'}</span>
// // //               <span className="badge">📅 {new Date().toLocaleDateString()}</span>
// // //             </div>
// // //           </div>
// // //           <div className="welcome-avatar">
// // //             <div className="large-avatar">
// // //               {user?.username?.charAt(0).toUpperCase() || 'A'}
// // //             </div>
// // //           </div>
// // //         </section> */}

// // //         {/* Statistics Cards */}
// // //         <section className="stats-section">
// // //           <div className="stats-grid">
// // //             <div className="stat-card students">
// // //               <div className="stat-icon">👥</div>
// // //               <div className="stat-content">
// // //                 <h3>{stats.totalStudents}</h3>
// // //                 <p>Total Students</p>
// // //                 <span className="stat-change">+12 this month</span>
// // //               </div>
// // //             </div>
// // //             <div className="stat-card teachers">
// // //               <div className="stat-icon">👨‍🏫</div>
// // //               <div className="stat-content">
// // //                 <h3>{stats.totalTeachers}</h3>
// // //                 <p>Total Teachers</p>
// // //                 <span className="stat-change">+2 this month</span>
// // //               </div>
// // //             </div>
// // //             <div className="stat-card classes">
// // //               <div className="stat-icon">🏫</div>
// // //               <div className="stat-content">
// // //                 <h3>{stats.totalClasses}</h3>
// // //                 <p>Total Classes</p>
// // //                 <span className="stat-change">Active sessions</span>
// // //               </div>
// // //             </div>
// // //             <div className="stat-card users">
// // //               <div className="stat-icon">📈</div>
// // //               <div className="stat-content">
// // //                 <h3>{stats.activeUsers}</h3>
// // //                 <p>Active Users</p>
// // //                 <span className="stat-change">Online now</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Dashboard Content */}
// // //         <section className="dashboard-content">
// // //           <div className="dashboard-grid">
// // //             {/* Quick Actions */}
// // //             <div className="dashboard-panel">
// // //               <div className="panel-header">
// // //                 <h3>⚡ Quick Actions</h3>
// // //               </div>
// // //               <div className="quick-actions-grid">
// // //                 {quickActions.map((action, index) => (
// // //                   <div 
// // //                     key={index}
// // //                     className="quick-action-card"
// // //                     onClick={action.action}
// // //                     style={{ borderColor: action.color }}
// // //                   >
// // //                     <div className="action-icon" style={{ color: action.color }}>
// // //                       {action.icon}
// // //                     </div>
// // //                     <h4>{action.title}</h4>
// // //                     <p>{action.description}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Recent Activities */}
// // //             <div className="dashboard-panel">
// // //               <div className="panel-header">
// // //                 <h3>📋 Recent Activities</h3>
// // //               </div>
// // //               <div className="activities-list">
// // //                 {recentActivities.map((activity, index) => (
// // //                   <div key={index} className="activity-item">
// // //                     <div className="activity-content">
// // //                       <p className="activity-title">{activity.title}</p>
// // //                       <div className="activity-meta">
// // //                         <span className="activity-time">{activity.time}</span>
// // //                         <span className={`priority-badge ${activity.priority}`}>
// // //                           {activity.priority}
// // //                         </span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Upcoming Events */}
// // //             <div className="dashboard-panel">
// // //               <div className="panel-header">
// // //                 <h3>📅 Upcoming Events</h3>
// // //               </div>
// // //               <div className="events-list">
// // //                 {upcomingEvents.map((event, index) => (
// // //                   <div key={index} className="event-item">
// // //                     <div className="event-icon">{event.icon}</div>
// // //                     <div className="event-content">
// // //                       <h4>{event.title}</h4>
// // //                       <p>{event.date}</p>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Management Modules */}
// // //         <section className="modules-section">
// // //           <div className="section-header">
// // //             <h2>🏫 School Management Modules</h2>
// // //           </div>
// // //           <div className="modules-grid">
// // //             {managementModules.map((module, index) => (
// // //               <div 
// // //                 key={index} 
// // //                 className="module-card"
// // //                 onClick={() => alert(`${module.title} functionality coming soon!`)}
// // //               >
// // //                 <div className="module-header">
// // //                   <div className="module-icon" style={{ color: module.color }}>
// // //                     {module.icon}
// // //                   </div>
// // //                   <div className="module-info">
// // //                     <h3>{module.title}</h3>
// // //                     <span className="module-count" style={{ backgroundColor: module.color }}>
// // //                       {module.count}
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //                 <p className="module-description">{module.description}</p>
// // //                 <div className="module-actions">
// // //                   <button className="module-btn">Manage</button>
// // //                   <button className="module-btn">View</button>
// // //                   <button className="module-btn">Reports</button>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </section>
// // //       </main>
// // //     </div>
// // //   )
// // // }

// // // export default AdminHome











































// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './AdminHome.css'; // We'll create this CSS file

// // const AdminHome = () => {
// //   const [user, setUser] = useState(null);
// //   const [showProfileMenu, setShowProfileMenu] = useState(false);
// //   const [stats, setStats] = useState({
// //     totalStudents: 245,
// //     totalTeachers: 18,
// //     totalClasses: 12,
// //     activeUsers: 156,
// //   });
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     fetchUserData();
// //   }, []);

// //   const fetchUserData = async () => {
// //     try {
// //       const response = await fetch(`${import.meta.env.VITE_API_BASE}/users/me`, {
// //         credentials: 'include',
// //       });
// //       if (response.ok) {
// //         const userData = await response.json();
// //         setUser(userData);
// //       }
// //     } catch (error) {
// //       console.error('Failed to fetch user data:', error);
// //     }
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       await fetch(`${import.meta.env.VITE_API_BASE}/auth/logout`, {
// //         method: 'POST',
// //         credentials: 'include',
// //       });
// //       navigate('/login');
// //     } catch (error) {
// //       console.error('Logout error:', error);
// //       navigate('/login');
// //     }
// //   };

// //   const quickActions = [
// //     { 
// //       title: 'Add Student', 
// //       icon: '👨‍🎓', 
// //       color: '#4caf50', 
// //       description: 'Register new student',
// //       action: () => alert('Add Student functionality coming soon!') 
// //     },
// //     { 
// //       title: 'Add Teacher', 
// //       icon: '👨‍🏫', 
// //       color: '#2196f3', 
// //       description: 'Add teaching staff',
// //       action: () => alert('Add Teacher functionality coming soon!') 
// //     },
// //     { 
// //       title: 'Create Class', 
// //       icon: '🏫', 
// //       color: '#ff9800', 
// //       description: 'Setup new class',
// //       action: () => alert('Create Class functionality coming soon!') 
// //     },
// //     { 
// //       title: 'System Settings', 
// //       icon: '⚙️', 
// //       color: '#9c27b0', 
// //       description: 'Configure system',
// //       action: () => alert('System Settings coming soon!') 
// //     },
// //     { 
// //       title: 'View Reports', 
// //       icon: '📊', 
// //       color: '#f44336', 
// //       description: 'Generate reports',
// //       action: () => alert('Reports functionality coming soon!') 
// //     },
// //     { 
// //       title: 'Manage Fees', 
// //       icon: '💰', 
// //       color: '#607d8b', 
// //       description: 'Fee management',
// //       action: () => alert('Fee management coming soon!') 
// //     }
// //   ];

// //   const recentActivities = [
// //     { title: 'New student John Doe registered', time: '2 hours ago', type: 'student', priority: 'low' },
// //     { title: 'Teacher Mary Smith profile updated', time: '4 hours ago', type: 'teacher', priority: 'medium' },
// //     { title: 'Class 10-A schedule modified', time: '6 hours ago', type: 'schedule', priority: 'high' },
// //     { title: 'System backup completed successfully', time: '1 day ago', type: 'system', priority: 'low' },
// //     { title: 'New admin account created', time: '2 days ago', type: 'user', priority: 'high' }
// //   ];

// //   const managementModules = [
// //     {
// //       title: 'Student Management',
// //       description: 'Manage student profiles, admissions, and academic records',
// //       icon: '👥',
// //       color: '#1976d2',
// //       count: stats.totalStudents
// //     },
// //     {
// //       title: 'Teacher Management',
// //       description: 'Manage teaching staff, schedules, and performance',
// //       icon: '👨‍🏫',
// //       color: '#388e3c',
// //       count: stats.totalTeachers
// //     },
// //     {
// //       title: 'Academic Management',
// //       description: 'Manage classes, subjects, curriculum, and schedules',
// //       icon: '📚',
// //       color: '#f57c00',
// //       count: stats.totalClasses
// //     },
// //     {
// //       title: 'Fee Management',
// //       description: 'Handle fee collection, payments, and financial records',
// //       icon: '💰',
// //       color: '#7b1fa2',
// //       count: '₹2.4M'
// //     },
// //     {
// //       title: 'Examination System',
// //       description: 'Manage exams, results, and grade calculations',
// //       icon: '📝',
// //       color: '#d32f2f',
// //       count: '24 Exams'
// //     },
// //     {
// //       title: 'Library Management',
// //       description: 'Manage books, issues, returns, and library resources',
// //       icon: '📖',
// //       color: '#455a64',
// //       count: '1,245 Books'
// //     },
// //     {
// //       title: 'Reports & Analytics',
// //       description: 'Generate comprehensive reports and analytics',
// //       icon: '📈',
// //       color: '#0097a7',
// //       count: '156 Reports'
// //     },
// //     {
// //       title: 'System Administration',
// //       description: 'System settings, security, backup, and maintenance',
// //       icon: '🔧',
// //       color: '#5d4037',
// //       count: stats.activeUsers + ' Users'
// //     }
// //   ];

// //   const upcomingEvents = [
// //     { title: 'Parent-Teacher Meeting', date: 'Tomorrow', type: 'meeting', icon: '🤝' },
// //     { title: 'Annual Sports Day', date: 'Next Week', type: 'event', icon: '🏃‍♂️' },
// //     { title: 'Mid-term Examinations', date: 'Mar 15-20', type: 'exam', icon: '📝' },
// //     { title: 'School Anniversary', date: 'Apr 5', type: 'celebration', icon: '🎉' }
// //   ];

// //   const sidebarLinks = [
// //     { title: 'Dashboard', path: '/', icon: '🏠' },
// //     { title: 'Student Management', path: '/students', icon: '👥' },
// //     { title: 'Teacher Management', path: '/teachers', icon: '👨‍🏫' },
// //     { title: 'Academic Management', path: '/academics', icon: '📚' },
// //     { title: 'Fee Management', path: '/fees', icon: '💰' },
// //     { title: 'Examination System', path: '/exams', icon: '📝' },
// //     { title: 'Library Management', path: '/library', icon: '📖' },
// //     { title: 'Reports & Analytics', path: '/reports', icon: '📈' },
// //     { title: 'System Administration', path: '/settings', icon: '🔧' },
// //   ];

// //   return (
// //     <div className="admin-layout">
// //       {/* Sidebar */}
// //       <aside className="admin-sidebar">
// //         <div className="sidebar-header">
// //           <span className="logo-icon">🎓</span>
// //           <h2>School ERP</h2>
// //         </div>
// //         <nav className="sidebar-nav">
// //           <ul>
// //             {sidebarLinks.map((link, index) => (
// //               <li key={index} className="nav-item">
// //                 <a href={link.path}>
// //                   <span className="nav-icon">{link.icon}</span>
// //                   <span className="nav-title">{link.title}</span>
// //                 </a>
// //               </li>
// //             ))}
// //           </ul>
// //         </nav>
// //       </aside>

// //       {/* Main Content Area */}
// //       <div className="admin-content">
// //         {/* Header */}
// //         <header className="admin-header">
// //           <div className="header-left">
// //             <div className="logo">
// //               {/* Logo is now in the sidebar, so we can simplify this */}
// //               <h1>Dashboard Overview</h1>
// //             </div>
// //           </div>
// //           <div className="header-right">
// //             <div className="notification-bell">
// //               <span className="bell-icon">🔔</span>
// //               <span className="notification-badge">6</span>
// //             </div>
// //             <div className="user-profile" onClick={() => setShowProfileMenu(!showProfileMenu)}>
// //               <div className="user-avatar">
// //                 {user?.username?.charAt(0).toUpperCase() || 'A'}
// //               </div>
// //               <span className="user-name">{user?.full_name || user?.username || 'Admin'}</span>
// //               <span className="dropdown-arrow">▼</span>
// //               {showProfileMenu && (
// //                 <div className="profile-menu">
// //                   <div className="menu-item">👤 Profile Settings</div>
// //                   <div className="menu-item">⚙️ System Settings</div>
// //                   <div className="menu-divider"></div>
// //                   <div className="menu-item logout" onClick={handleLogout}>🚪 Logout</div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </header>

// //         {/* Main Content */}
// //         <main className="admin-main">
// //           {/* Statistics Cards */}
// //           <section className="stats-section">
// //             <div className="stats-grid">
// //               <div className="stat-card students">
// //                 <div className="stat-icon">👥</div>
// //                 <div className="stat-content">
// //                   <h3>{stats.totalStudents}</h3>
// //                   <p>Total Students</p>
// //                   <span className="stat-change">+12 this month</span>
// //                 </div>
// //               </div>
// //               <div className="stat-card teachers">
// //                 <div className="stat-icon">👨‍🏫</div>
// //                 <div className="stat-content">
// //                   <h3>{stats.totalTeachers}</h3>
// //                   <p>Total Teachers</p>
// //                   <span className="stat-change">+2 this month</span>
// //                 </div>
// //               </div>
// //               <div className="stat-card classes">
// //                 <div className="stat-icon">🏫</div>
// //                 <div className="stat-content">
// //                   <h3>{stats.totalClasses}</h3>
// //                   <p>Total Classes</p>
// //                   <span className="stat-change">Active sessions</span>
// //                 </div>
// //               </div>
// //               <div className="stat-card users">
// //                 <div className="stat-icon">📈</div>
// //                 <div className="stat-content">
// //                   <h3>{stats.activeUsers}</h3>
// //                   <p>Active Users</p>
// //                   <span className="stat-change">Online now</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </section>

// //           {/* Dashboard Content */}
// //           <section className="dashboard-content">
// //             <div className="dashboard-grid">
// //               {/* Quick Actions */}
// //               <div className="dashboard-panel">
// //                 <div className="panel-header">
// //                   <h3>⚡ Quick Actions</h3>
// //                 </div>
// //                 <div className="quick-actions-grid">
// //                   {quickActions.map((action, index) => (
// //                     <div 
// //                       key={index}
// //                       className="quick-action-card"
// //                       onClick={action.action}
// //                       style={{ borderColor: action.color }}
// //                     >
// //                       <div className="action-icon" style={{ color: action.color }}>
// //                         {action.icon}
// //                       </div>
// //                       <h4>{action.title}</h4>
// //                       <p>{action.description}</p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Recent Activities */}
// //               <div className="dashboard-panel">
// //                 <div className="panel-header">
// //                   <h3>📋 Recent Activities</h3>
// //                 </div>
// //                 <div className="activities-list">
// //                   {recentActivities.map((activity, index) => (
// //                     <div key={index} className="activity-item">
// //                       <div className="activity-content">
// //                         <p className="activity-title">{activity.title}</p>
// //                         <div className="activity-meta">
// //                           <span className="activity-time">{activity.time}</span>
// //                           <span className={`priority-badge ${activity.priority}`}>
// //                             {activity.priority}
// //                           </span>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Upcoming Events */}
// //               <div className="dashboard-panel">
// //                 <div className="panel-header">
// //                   <h3>📅 Upcoming Events</h3>
// //                 </div>
// //                 <div className="events-list">
// //                   {upcomingEvents.map((event, index) => (
// //                     <div key={index} className="event-item">
// //                       <div className="event-icon">{event.icon}</div>
// //                       <div className="event-content">
// //                         <h4>{event.title}</h4>
// //                         <p>{event.date}</p>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </section>

// //           {/* Management Modules */}
// //           <section className="modules-section">
// //             <div className="section-header">
// //               <h2>🏫 School Management Modules</h2>
// //             </div>
// //             <div className="modules-grid">
// //               {managementModules.map((module, index) => (
// //                 <div 
// //                   key={index} 
// //                   className="module-card"
// //                   onClick={() => alert(`${module.title} functionality coming soon!`)}
// //                 >
// //                   <div className="module-header">
// //                     <div className="module-icon" style={{ color: module.color }}>
// //                       {module.icon}
// //                     </div>
// //                     <div className="module-info">
// //                       <h3>{module.title}</h3>
// //                       <span className="module-count" style={{ backgroundColor: module.color }}>
// //                         {module.count}
// //                       </span>
// //                     </div>
// //                   </div>
// //                   <p className="module-description">{module.description}</p>
// //                   <div className="module-actions">
// //                     <button className="module-btn">Manage</button>
// //                     <button className="module-btn">View</button>
// //                     <button className="module-btn">Reports</button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </section>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminHome;





// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import './AdminHome.css'

// const AdminHome = () => {
//   const [user, setUser] = useState(null)
//   const [showProfileMenu, setShowProfileMenu] = useState(false)
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
//   const [activeSection, setActiveSection] = useState('dashboard')
//   const [stats, setStats] = useState({
//     totalStudents: 245,
//     totalTeachers: 18,
//     totalClasses: 12,
//     activeUsers: 156
//   })
//   const navigate = useNavigate()

//   useEffect(() => {
//     fetchUserData()
//   }, [])

//   const fetchUserData = async () => {
//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_BASE}/users/me`, {
//         credentials: 'include'
//       })
//       if (response.ok) {
//         const userData = await response.json()
//         setUser(userData)
//       }
//     } catch (error) {
//       console.error('Failed to fetch user data:', error)
//     }
//   }

//   const handleLogout = async () => {
//     try {
//       await fetch(`${import.meta.env.VITE_API_BASE}/auth/logout`, {
//         method: 'POST',
//         credentials: 'include'
//       })
//       navigate('/login')
//     } catch (error) {
//       console.error('Logout error:', error)
//       navigate('/login')
//     }
//   }

//   // Sidebar navigation items
//   const sidebarItems = [
//     {
//       id: 'dashboard',
//       title: 'Dashboard',
//       icon: '📊',
//       description: 'Overview & Analytics'
//     },
//     {
//       id: 'students',
//       title: 'Students',
//       icon: '👨‍🎓',
//       description: 'Student Management',
//       badge: stats.totalStudents
//     },
//     {
//       id: 'teachers',
//       title: 'Teachers',
//       icon: '👨‍🏫',
//       description: 'Staff Management',
//       badge: stats.totalTeachers
//     },
//     {
//       id: 'classes',
//       title: 'Classes',
//       icon: '🏫',
//       description: 'Academic Management',
//       badge: stats.totalClasses
//     },
//     {
//       id: 'examinations',
//       title: 'Examinations',
//       icon: '📝',
//       description: 'Exams & Results'
//     },
//     {
//       id: 'library',
//       title: 'Library',
//       icon: '📚',
//       description: 'Book Management'
//     },
//     {
//       id: 'fees',
//       title: 'Fee Management',
//       icon: '💰',
//       description: 'Financial Records'
//     },
//     {
//       id: 'reports',
//       title: 'Reports',
//       icon: '📈',
//       description: 'Analytics & Reports'
//     },
//     {
//       id: 'settings',
//       title: 'Settings',
//       icon: '⚙️',
//       description: 'System Configuration'
//     }
//   ]

//   const quickActions = [
//     { 
//       title: 'Add Student', 
//       icon: '👨‍🎓', 
//       color: '#4caf50', 
//       description: 'Register new student',
//       action: () => setActiveSection('students')
//     },
//     { 
//       title: 'Add Teacher', 
//       icon: '👨‍🏫', 
//       color: '#2196f3', 
//       description: 'Add teaching staff',
//       action: () => setActiveSection('teachers')
//     },
//     { 
//       title: 'Create Class', 
//       icon: '🏫', 
//       color: '#ff9800', 
//       description: 'Setup new class',
//       action: () => setActiveSection('classes')
//     },
//     { 
//       title: 'View Reports', 
//       icon: '📊', 
//       color: '#f44336', 
//       description: 'Generate reports',
//       action: () => setActiveSection('reports')
//     }
//   ]

//   const recentActivities = [
//     { title: 'New student John Doe registered', time: '2 hours ago', type: 'student', priority: 'low' },
//     { title: 'Teacher Mary Smith profile updated', time: '4 hours ago', type: 'teacher', priority: 'medium' },
//     { title: 'Class 10-A schedule modified', time: '6 hours ago', type: 'schedule', priority: 'high' },
//     { title: 'System backup completed successfully', time: '1 day ago', type: 'system', priority: 'low' },
//     { title: 'New admin account created', time: '2 days ago', type: 'user', priority: 'high' }
//   ]

//   const upcomingEvents = [
//     { title: 'Parent-Teacher Meeting', date: 'Tomorrow', type: 'meeting', icon: '🤝' },
//     { title: 'Annual Sports Day', date: 'Next Week', type: 'event', icon: '🏃‍♂️' },
//     { title: 'Mid-term Examinations', date: 'Mar 15-20', type: 'exam', icon: '📝' },
//     { title: 'School Anniversary', date: 'Apr 5', type: 'celebration', icon: '🎉' }
//   ]

//   const handleSidebarItemClick = (itemId) => {
//     setActiveSection(itemId)
//   }

//   const renderMainContent = () => {
//     switch (activeSection) {
//       case 'dashboard':
//         return (
//           <>
//             {/* Welcome Section */}
//             {/* <section className="welcome-section">
//               <div className="welcome-content">
//                 <h2>Welcome back, {user?.full_name || user?.username}! 👋</h2>
//                 <p>School Administrator Dashboard - Manage your institution efficiently</p>
//                 <div className="welcome-badges">
//                   <span className="badge">🔐 Role: {user?.role || 'Admin'}</span>
//                   <span className="badge">📅 {new Date().toLocaleDateString()}</span>
//                 </div>
//               </div>
//               <div className="welcome-avatar">
//                 <div className="large-avatar">
//                   {user?.username?.charAt(0).toUpperCase() || 'A'}
//                 </div>
//               </div>
//             </section> */}

//             {/* Statistics Cards */}
//             <section className="stats-section">
//               <div className="stats-grid">
//                 <div className="stat-card students" onClick={() => setActiveSection('students')}>
//                   <div className="stat-icon">👥</div>
//                   <div className="stat-content">
//                     <h3>{stats.totalStudents}</h3>
//                     <p>Total Students</p>
//                     <span className="stat-change">+12 this month</span>
//                   </div>
//                 </div>
//                 <div className="stat-card teachers" onClick={() => setActiveSection('teachers')}>
//                   <div className="stat-icon">👨‍🏫</div>
//                   <div className="stat-content">
//                     <h3>{stats.totalTeachers}</h3>
//                     <p>Total Teachers</p>
//                     <span className="stat-change">+2 this month</span>
//                   </div>
//                 </div>
//                 <div className="stat-card classes" onClick={() => setActiveSection('classes')}>
//                   <div className="stat-icon">🏫</div>
//                   <div className="stat-content">
//                     <h3>{stats.totalClasses}</h3>
//                     <p>Total Classes</p>
//                     <span className="stat-change">Active sessions</span>
//                   </div>
//                 </div>
//                 <div className="stat-card users">
//                   <div className="stat-icon">📈</div>
//                   <div className="stat-content">
//                     <h3>{stats.activeUsers}</h3>
//                     <p>Active Users</p>
//                     <span className="stat-change">Online now</span>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Dashboard Content */}
//             <section className="dashboard-content">
//               <div className="dashboard-grid">
//                 {/* Quick Actions */}
//                 <div className="dashboard-panel">
//                   <div className="panel-header">
//                     <h3>⚡ Quick Actions</h3>
//                   </div>
//                   <div className="quick-actions-grid">
//                     {quickActions.map((action, index) => (
//                       <div 
//                         key={index}
//                         className="quick-action-card"
//                         onClick={action.action}
//                         style={{ borderColor: action.color }}
//                       >
//                         <div className="action-icon" style={{ color: action.color }}>
//                           {action.icon}
//                         </div>
//                         <h4>{action.title}</h4>
//                         <p>{action.description}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Recent Activities */}
//                 <div className="dashboard-panel">
//                   <div className="panel-header">
//                     <h3>📋 Recent Activities</h3>
//                   </div>
//                   <div className="activities-list">
//                     {recentActivities.map((activity, index) => (
//                       <div key={index} className="activity-item">
//                         <div className="activity-content">
//                           <p className="activity-title">{activity.title}</p>
//                           <div className="activity-meta">
//                             <span className="activity-time">{activity.time}</span>
//                             <span className={`priority-badge ${activity.priority}`}>
//                               {activity.priority}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Upcoming Events */}
//                 <div className="dashboard-panel">
//                   <div className="panel-header">
//                     <h3>📅 Upcoming Events</h3>
//                   </div>
//                   <div className="events-list">
//                     {upcomingEvents.map((event, index) => (
//                       <div key={index} className="event-item">
//                         <div className="event-icon">{event.icon}</div>
//                         <div className="event-content">
//                           <h4>{event.title}</h4>
//                           <p>{event.date}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </>
//         )
      
//       default:
//         return (
//           <section className="content-section">
//             <div className="content-header">
//               <h2>{sidebarItems.find(item => item.id === activeSection)?.title} Management</h2>
//               <p>{sidebarItems.find(item => item.id === activeSection)?.description}</p>
//             </div>
//             <div className="content-placeholder">
//               <div className="placeholder-card">
//                 <div className="placeholder-icon">
//                   {sidebarItems.find(item => item.id === activeSection)?.icon}
//                 </div>
//                 <h3>{sidebarItems.find(item => item.id === activeSection)?.title} Module</h3>
//                 <p>This section is under development. Coming soon with full functionality!</p>
//                 <button className="placeholder-btn" onClick={() => setActiveSection('dashboard')}>
//                   Back to Dashboard
//                 </button>
//               </div>
//             </div>
//           </section>
//         )
//     }
//   }

//   return (
//     <div className="admin-home">
//       {/* Sidebar */}
//       <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
//         <div className="sidebar-header">
//           <div className="sidebar-logo">
//             <span className="logo-icon">🎓</span>
//             {!sidebarCollapsed && <span className="logo-text">School ERP</span>}
//           </div>
//           <button 
//             className="sidebar-toggle"
//             onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//           >
//             {sidebarCollapsed ? '▶️' : '◀️'}
//           </button>
//         </div>

//         <nav className="sidebar-nav">
//           <ul className="nav-list">
//             {sidebarItems.map((item) => (
//               <li key={item.id} className="nav-item">
//                 <button
//                   className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
//                   onClick={() => handleSidebarItemClick(item.id)}
//                   title={sidebarCollapsed ? item.title : ''}
//                 >
//                   <span className="nav-icon">{item.icon}</span>
//                   {!sidebarCollapsed && (
//                     <>
//                       <span className="nav-text">{item.title}</span>
//                       {item.badge && (
//                         <span className="nav-badge">{item.badge}</span>
//                       )}
//                     </>
//                   )}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {!sidebarCollapsed && (
//           <div className="sidebar-footer">
//             <div className="user-info">
//               <div className="user-avatar-small">
//                 {user?.username?.charAt(0).toUpperCase() || 'A'}
//               </div>
//               <div className="user-details">
//                 <span className="user-name">{user?.full_name || user?.username || 'Admin'}</span>
//                 <span className="user-role">{user?.role || 'Administrator'}</span>
//               </div>
//             </div>
//             <button className="logout-btn" onClick={handleLogout}>
//               🚪 Logout
//             </button>
//           </div>
//         )}
//       </aside>

//       {/* Main Content Area */}
//       <div className={`main-content ${sidebarCollapsed ? 'expanded' : ''}`}>
//         {/* Top Header */}
//         <header className="top-header">
//           <div className="header-left">
//             <h1 className="page-title">
//               {sidebarItems.find(item => item.id === activeSection)?.title || 'Dashboard'}
//             </h1>
//             <p className="page-subtitle">
//               {sidebarItems.find(item => item.id === activeSection)?.description || 'School Management System'}
//             </p>
//           </div>
//           <div className="header-right">
//             <div className="notification-bell">
//               <span className="bell-icon">🔔</span>
//               <span className="notification-badge">6</span>
//             </div>
//             <div className="user-profile" onClick={() => setShowProfileMenu(!showProfileMenu)}>
//               <div className="user-avatar">
//                 {user?.username?.charAt(0).toUpperCase() || 'A'}
//               </div>
//               <span className="user-name">{user?.full_name || user?.username || 'Admin'}</span>
//               <span className="dropdown-arrow">▼</span>
//               {showProfileMenu && (
//                 <div className="profile-menu">
//                   <div className="menu-item">👤 Profile Settings</div>
//                   <div className="menu-item">⚙️ System Settings</div>
//                   <div className="menu-divider"></div>
//                   <div className="menu-item logout" onClick={handleLogout}>🚪 Logout</div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </header>

//         {/* Main Content */}
//         <main className="admin-main">
//           {renderMainContent()}
//         </main>
//       </div>
//     </div>
//   )
// }

// export default AdminHome