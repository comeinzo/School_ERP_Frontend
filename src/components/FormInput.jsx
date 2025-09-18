import React from 'react'

const FormInput = ({ 
  label, 
  type = 'text', 
  value, 
  onChange, 
  placeholder, 
  error,
  required = false,
  ...props 
}) => {
  return (
    <div className="form-input">
      {label && (
        <label className="form-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input ${error ? 'input-error' : ''}`}
        required={required}
        {...props}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  )
}

export default FormInput
