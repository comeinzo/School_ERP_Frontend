// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import FormInput from '../components/FormInput'
// import PrimaryButton from '../components/PrimaryButton'
// import Card from '../components/Card'

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     username: '',
//     password: ''
//   })
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate()

//   // Check if already authenticated
//   useEffect(() => {
//     checkIfAuthenticated()
//   }, [])

//   const checkIfAuthenticated = async () => {
//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_BASE}/users/me`, {
//         credentials: 'include'
//       })
//       if (response.ok) {
//         navigate('/AdminHomePage', { replace: true })
//       }
//     } catch (error) {
//       // User not authenticated, stay on login page
//     }
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setCredentials(prev => ({
//       ...prev,
//       [name]: value
//     }))
//     // Clear error when user starts typing
//     if (error) setError('')
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     setError('')

//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_BASE}/auth/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include', // Include cookies for HttpOnly
//         body: JSON.stringify(credentials)
//       })

//       const data = await response.json()

//       if (response.ok) {
//         // Login successful, redirect to landing
//         navigate('/AdminHomePage', { replace: true })
//       } else {
//         setError(data.detail || 'Login failed')
//       }
//     } catch (error) {
//       console.error('Login error:', error)
//       setError('Network error. Please try again.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="login-container">
//       <div className="login-wrapper">
//         <Card title="School ERP Login" className="login-card">
//           <form onSubmit={handleSubmit} className="login-form">
//             {error && <div className="error-alert">{error}</div>}
            
//             <FormInput
//               label="Username"
//               name="username"
//               type="text"
//               value={credentials.username}
//               onChange={handleChange}
//               placeholder="Enter your username"
//               required
//               autoComplete="username"
//             />

//             <FormInput
//               label="Password"
//               name="password"
//               type="password"
//               value={credentials.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               required
//               autoComplete="current-password"
//             />

//             <PrimaryButton
//               type="submit"
//               loading={loading}
//               disabled={!credentials.username || !credentials.password}
//             >
//               Sign In
//             </PrimaryButton>
//           </form>

//           <div className="demo-accounts">
//             <h4>Demo Accounts:</h4>
//             <p><strong>Admin:</strong> admin / admin123</p>
//             <p><strong>Teacher:</strong> teacher / teacher123</p>
//             <p><strong>Student:</strong> student / student123</p>
//           </div>
//         </Card>
//       </div>
//     </div>
//   )
// }

// export default Login




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import FormInput from '../components/FormInput';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Check if already authenticated
  useEffect(() => {
    checkIfAuthenticated();
  }, []);

  const checkIfAuthenticated = async () => {
    try {
      // Use axios for the request
      const response = await axios.get(`${import.meta.env.VITE_API_BASE}/users/me`, {
        withCredentials: true // Include cookies
      });
      // Axios throws an error for non-2xx status codes, so the check is simpler
      if (response.status === 200) {
        navigate('/Admin/Dashboard', { replace: true });
      }
    } catch (error) {
      // Axios automatically handles non-2xx responses as errors,
      // so no need for explicit status checks
      // The user is not authenticated, stay on the login page
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Use axios for the login POST request
      const response = await axios.post(`${import.meta.env.VITE_API_BASE}/auth/login`, credentials, {
        withCredentials: true, // Include cookies for HttpOnly
      });

      // Axios automatically handles the response and parses JSON
      if (response.status === 200) {
        navigate('/Admin/Dashboard', { replace: true });
      }
    } catch (error) {
      console.error('Login error:', error);
      // Axios error handling: access the response from error.response
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.detail || 'Login failed');
      } else if (error.request) {
        // The request was made but no response was received
        setError('Network error. Please try again.');
      } else {
        // Something happened in setting up the request that triggered an error
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <Card title="School ERP Login" className="login-card">
          <form onSubmit={handleSubmit} className="login-form">
            {error && <div className="error-alert">{error}</div>}
            
            <FormInput
              label="Username"
              name="username"
              type="text"
              value={credentials.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
              autoComplete="username"
            />

            <FormInput
              label="Password"
              name="password"
              type="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              autoComplete="current-password"
            />

            <PrimaryButton
              type="submit"
              loading={loading}
              disabled={!credentials.username || !credentials.password}
            >
              Sign In
            </PrimaryButton>
          </form>

          <div className="demo-accounts">
            <h4>Demo Accounts:</h4>
            <p><strong>Admin:</strong> admin / admin123</p>
            <p><strong>Teacher:</strong> teacher / teacher123</p>
            <p><strong>Student:</strong> student / student123</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;