
// isanjay test1
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Landing from './pages/Landing'
import AdminHome from './pages/AdminHome/AdminHome'
import ProtectedRoute from './components/ProtectedRoute'
import CreateClass from './pages/CreateClass/CreateClass';
import ClassesList from './pages/ClassesList/ClassesList';
// import EditClass from './pages/EditClass/EditClass';
import AdminLayout from './layouts/AdminLayout/AdminDashboardLayout';
import AdminAddClassLayout from './layouts/AdminLayout/AdminAddClassLayout'
import AdminAddTeachersLayout from './layouts/AdminLayout/AdminAddTeachersLayout'
import AdminAddStudentLayout from './layouts/AdminLayout/AdminAddStudentLayout'
import AdminFeeManagementLayout from './layouts/AdminLayout/AdminFeeManagementLayout'
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/Admin/Dashboard" 
          element={
            <ProtectedRoute>
               <AdminLayout />
            </ProtectedRoute>
          } 
        />

                <Route 
          path="/admin/classes" 
          element={
            <ProtectedRoute>
              <AdminAddClassLayout />
            </ProtectedRoute>
          } 
        />
                        <Route 
          path="/admin/Teachers" 
          element={
            <ProtectedRoute>
              <AdminAddTeachersLayout />
            </ProtectedRoute>
          } 
        />

                                <Route 
          path="/admin/students" 
          element={
            <ProtectedRoute>
              <AdminAddStudentLayout />
            </ProtectedRoute>
          } 
        />

                                <Route 
          path="/admin/fees" 
          element={
            <ProtectedRoute>
              <AdminFeeManagementLayout />
            </ProtectedRoute>
          } 
        />
{/* <Route path="/admin/classes" element={<CreateClass />} /> */}



      </Routes>
    </div>
  )
}

export default App