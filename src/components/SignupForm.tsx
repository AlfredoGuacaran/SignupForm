import React from 'react';
import './SignupForm.css';
import { useForm } from '../hooks/useForm';

const SignupForm: React.FC = () => {
    const { formData, handleInputChange, handleSubmit, isSubmitting } = useForm();


  return (
    <div className="signup-container">
      <div className="signup-form-wrapper">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          {/* Username Field */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
              disabled={isSubmitting}
            />
           <span className="error-message">Error message</span>
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              disabled={isSubmitting}
            />
            <span className="error-message">Error message</span>
          </div>

          {/* Confirm Password Field */}
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm your password"
              disabled={isSubmitting}
            />
            <span className="error-message">Error message</span>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;