// import React from 'react';
// import './Sidebar.css';

// const Sidebar = ({ 
//   collapsed, 
//   onToggle, 
//   activeSection, 
//   onSectionChange, 
//   user, 
//   onLogout,
//   stats 
// }) => {
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
//     //   badge: stats?.totalStudents
//     },
//     {
//       id: 'teachers',
//       title: 'Teachers',
//       icon: '👨‍🏫',
//       description: 'Staff Management',
//     //   badge: stats?.totalTeachers
//     },
//     {
//       id: 'classes',
//       title: 'Classes',
//       icon: '🏫',
//       description: 'Academic Management',
//     //   badge: stats?.totalClasses
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
//   ];

//   return (
//     <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
//       <div className="sidebar-header">
//         <div className="sidebar-logo">
//           <span className="logo-icon">🎓</span>
//           {!collapsed && <span className="logo-text">School ERP</span>}
//         </div>
//         <button 
//           className="sidebar-toggle"
//           onClick={onToggle}
//         >
//           {collapsed ? '▶️' : '◀️'}
//         </button>
//       </div>

//       <nav className="sidebar-nav">
//         <ul className="nav-list">
//           {sidebarItems.map((item) => (
//             <li key={item.id} className="nav-item">
//               <button
//                 className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
//                 onClick={() => onSectionChange(item.id)}
//                 title={collapsed ? item.title : ''}
//               >
//                 <span className="nav-icon">{item.icon}</span>
//                 {!collapsed && (
//                   <>
//                     <span className="nav-text">{item.title}</span>
//                     {item.badge && (
//                       <span className="nav-badge">{item.badge}</span>
//                     )}
//                   </>
//                 )}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* {!collapsed && (
//         <div className="sidebar-footer">
//           <div className="user-info">
//             <div className="user-avatar-small">
//               {user?.username?.charAt(0).toUpperCase() || 'A'}
//             </div>
//             <div className="user-details">
//               <span className="user-name_below">{user?.full_name || user?.username || 'Admin'}</span>
//               <span className="user-role">{user?.role || 'Administrator'}</span>
//             </div>
//           </div>
//           <button className="logout-btn" onClick={onLogout}>
//             🚪 Logout
//           </button>
//         </div>
//       )} */}
//     </aside>
//   );
// };

// export default Sidebar;




import React from 'react';
import './Sidebar.css';

// --- MUI Icon Imports ---
// We import the specific icons we need for a professional look.
import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import ClassIcon from '@mui/icons-material/Class';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PaymentIcon from '@mui/icons-material/Payment';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Sidebar = ({ 
  collapsed, 
  onToggle, 
  activeSection, 
  onSectionChange, 
  user, 
  onLogout,
  stats 
}) => {
  // --- Updated sidebarItems with MUI Icons ---
  // The 'icon' property now holds a React component instead of a string.
  const sidebarItems = [
    { id: 'dashboard', title: 'Dashboard', icon: <DashboardIcon />, description: 'Overview & Analytics' },
    { id: 'students', title: 'Students', icon: <SchoolIcon />, description: 'Student Management' },
    { id: 'teachers', title: 'Teachers', icon: <CoPresentIcon />, description: 'Staff Management' },
    { id: 'classes', title: 'Classes', icon: <ClassIcon />, description: 'Academic Management' },
    { id: 'examinations', title: 'Examinations', icon: <AssignmentIcon />, description: 'Exams & Results' },
    { id: 'library', title: 'Library', icon: <LocalLibraryIcon />, description: 'Book Management' },
    { id: 'fees', title: 'Fee Management', icon: <PaymentIcon />, description: 'Financial Records' },
    { id: 'reports', title: 'Reports', icon: <AssessmentIcon />, description: 'Analytics & Reports' },
    { id: 'settings', title: 'Settings', icon: <SettingsIcon />, description: 'System Configuration' }
  ];

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="logo-icon"><MenuBookIcon fontSize="large"/></span>
          {!collapsed && <span className="logo-text">School ERP</span>}
        </div>
        <button 
          className="sidebar-toggle"
          onClick={onToggle}
        >
          {/* Using professional chevron icons for collapsing/expanding */}
          {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {sidebarItems.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => onSectionChange(item.id)}
                title={collapsed ? item.title : ''}
              >
                {/* The icon component is rendered directly here */}
                <span className="nav-icon">{item.icon}</span>
                {!collapsed && (
                  <>
                    <span className="nav-text">{item.title}</span>
                    {item.badge && (
                      <span className="nav-badge">{item.badge}</span>
                    )}
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;