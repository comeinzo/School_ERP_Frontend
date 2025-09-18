import React from 'react'

const PrimaryButton = ({ 
  children, 
  onClick, 
  type = 'button', 
  disabled = false, 
  loading = false,
  variant = 'primary',
  ...props 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`btn btn-${variant} ${loading ? 'btn-loading' : ''}`}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  )
}

export default PrimaryButton