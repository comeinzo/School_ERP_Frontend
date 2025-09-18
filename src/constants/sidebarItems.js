export const getSidebarItems = (stats) => [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: '📊',
    description: 'Overview & Analytics'
  },
  {
    id: 'students',
    title: 'Students',
    icon: '👨‍🎓',
    description: 'Student Management',
    badge: stats?.totalStudents
  },
  {
    id: 'teachers',
    title: 'Teachers',
    icon: '👨‍🏫',
    description: 'Staff Management',
    badge: stats?.totalTeachers
  },
  {
    id: 'classes',
    title: 'Classes',
    icon: '🏫',
    description: 'Academic Management',
    badge: stats?.totalClasses
  },
  {
    id: 'examinations',
    title: 'Examinations',
    icon: '📝',
    description: 'Exams & Results'
  },
  {
    id: 'library',
    title: 'Library',
    icon: '📚',
    description: 'Book Management'
  },
  {
    id: 'fees',
    title: 'Fee Management',
    icon: '💰',
    description: 'Financial Records'
  },
  {
    id: 'reports',
    title: 'Reports',
    icon: '📈',
    description: 'Analytics & Reports'
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: '⚙️',
    description: 'System Configuration'
  }
];