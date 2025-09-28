// import React from 'react';
// // import './QuickActions.css';

// const QuickActions = ({ onActionClick }) => {
//   const quickActions = [
//     { 
//       id: 'students',
//       title: 'Add Student', 
//       icon: '👨‍🎓', 
//       color: '#4caf50', 
//       description: 'Register new student'
//     },
//     { 
//       id: 'teachers',
//       title: 'Add Teacher', 
//       icon: '👨‍🏫', 
//       color: '#2196f3', 
//       description: 'Add teaching staff'
//     },
//     { 
//       id: 'classes',
//       title: 'Create Class', 
//       icon: '🏫', 
//       color: '#ff9800', 
//       description: 'Setup new class'
//     },
//     { 
//       id: 'reports',
//       title: 'View Reports', 
//       icon: '📊', 
//       color: '#f44336', 
//       description: 'Generate reports'
//     }
//   ];

//   return (
//     <div className="dashboard-panel">
//       <div className="panel-header">
//         <h3>⚡ Quick Actions</h3>
//       </div>
//       <div className="quick-actions-grid">
//         {quickActions.map((action) => (
//           <div 
//             key={action.id}
//             className="quick-action-card"
//             onClick={() => onActionClick(action.id)}
//             style={{ borderColor: action.color }}
//           >
//             <div className="action-icon" style={{ color: action.color }}>
//               {action.icon}
//             </div>
//             <h4>{action.title}</h4>
//             <p>{action.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default QuickActions;



import React from 'react';
// import './QuickActions.css';

// --- Import Professional Icons ---
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AssessmentIcon from '@mui/icons-material/Assessment';

const QuickActions = ({ onActionClick }) => {
  // --- Updated quickActions array with MUI Icons ---
  const quickActions = [
    { 
      id: 'students',
      title: 'Add Student', 
      icon: <PersonAddIcon fontSize="large" />, // Replaced emoji with icon component
      color: '#4caf50', 
      description: 'Register a new student'
    },
    { 
      id: 'teachers',
      title: 'Add Teacher', 
      icon: <GroupAddIcon fontSize="large" />, 
      color: '#2196f3', 
      description: 'Add new teaching staff'
    },
    { 
      id: 'classes',
      title: 'Create Class', 
      icon: <LibraryAddIcon fontSize="large" />, 
      color: '#ff9800', 
      description: 'Set up a new class'
    },
    { 
      id: 'reports',
      title: 'View Reports', 
      icon: <AssessmentIcon fontSize="large" />, 
      color: '#f44336', 
      description: 'Generate academic reports'
    }
  ];

  return (
    <div className="dashboard-panel">
      <div className="panel-header">
        <h3>⚡ Quick Actions</h3>
      </div>
      <div className="quick-actions-grid">
        {quickActions.map((action) => (
          <div 
            key={action.id}
            className="quick-action-card"
            onClick={() => onActionClick(action.id)}
            style={{ borderColor: action.color }}
          >
            <div className="action-icon" style={{ color: action.color }}>
              {action.icon}
            </div>
            <h4>{action.title}</h4>
            <p>{action.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;