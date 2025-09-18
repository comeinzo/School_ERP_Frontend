import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import PrimaryButton from '../components/PrimaryButton'

// Role-specific UI components
const AdminPanel = () => (
  <Card title="Admin Dashboard" className="role-panel">
    <div className="panel-content">
      <h4>Admin Functions:</h4>
      <ul>
        <li>Manage Users</li>
        <li>System Settings</li>
        <li>View Reports</li>
        <li>Backup & Maintenance</li>
      </ul>
      <PrimaryButton>Manage School</PrimaryButton>
    </div>
  </Card>
)

const TeacherPanel = () => (
  <Card title="Teacher Dashboard" className="role-panel">
    <div className="panel-content">
      <h4>Teacher Functions:</h4>
      <ul>
        <li>Class Management</li>
        <li>Student Grades</li>
        <li>Attendance</li>
        <li>Assignments</li>
      </ul>
      <PrimaryButton>View Classes</PrimaryButton>
    </div>
  </Card>
)

const StudentPanel = () => (
  <Card title="Student Dashboard" className="role-panel">
    <div className="panel-content">
      <h4>Student Functions:</h4>
      <ul>
        <li>View Grades</li>
        <li>Class Schedule</li>
        <li>Assignments</li>
        <li>Attendance Record</li>
      </ul>
      <PrimaryButton>View Schedule</PrimaryButton>
    </div>
  </Card>
)

const Landing = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchUserInfo()
  }, [])

  const fetchUserInfo = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE}/users/me`, {
        credentials: 'include'
      })

      if (response.ok) {
        const userData = await response.json()
        setUser(userData)
      } else {
        // Not authenticated, redirect to login
        navigate('/login', { replace: true })
      }
    } catch (error) {
      console.error('Failed to fetch user info:', error)
      navigate('/login', { replace: true })
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_BASE}/auth/logout`, {
        method: 'POST',
        credentials: 'include'
      })
      navigate('/login', { replace: true })
    } catch (error) {
      console.error('Logout error:', error)
      // Force redirect even if logout request fails
      navigate('/login', { replace: true })
    }
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading">Loading dashboard...</div>
      </div>
    )
  }

  if (!user) {
    return null // Will be redirected by useEffect
  }

  const renderRolePanel = () => {
    switch (user.role) {
      case 'admin':
        return <AdminPanel />
      case 'teacher':
        return <TeacherPanel />
      case 'student':
        return <StudentPanel />
      default:
        return <div>Unknown role</div>
    }
  }

  return (
    <div className="landing-container">
      <header className="landing-header">
        <div className="header-content">
          <h1>School ERP System</h1>
          <div className="user-info">
            <span>Welcome, {user.full_name || user.username}</span>
            <span className="role-badge role-{user.role}">{user.role.toUpperCase()}</span>
            <PrimaryButton 
              onClick={handleLogout}
              variant="secondary"
              className="logout-btn"
            >
              Logout
            </PrimaryButton>
          </div>
        </div>
      </header>

      <main className="landing-main">
        <div className="dashboard-content">
          {renderRolePanel()}
        </div>
      </main>
    </div>
  )
}

export default Landing