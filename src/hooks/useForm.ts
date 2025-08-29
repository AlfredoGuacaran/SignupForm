import { useState } from 'react';
import type { FormData, FormErrors } from '../interfaces/SignupForm.interfaces';

// Initial form data
const initialFormData: FormData = {
  username: '',
  password: '',
  confirmPassword: ''
};

export function useForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    const updatedFormData = { ...formData, [name]: value };
    
    setFormData(updatedFormData);
    
    // Validate using the updated data
    if (name === 'confirmPassword' || name === 'password') { 
      const newErrors = validatePasswords(updatedFormData);
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = validateFormData(formData);
    const passwordErrors = validatePasswords(formData);
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    if (Object.keys(passwordErrors).length > 0) {
      setErrors(passwordErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      // Mock API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert(`Signup successful for: ${formData.username}`);
      setFormData(initialFormData);
    } catch (error) {
      alert('Signup failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const validatePasswords = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.password) {
      newErrors.password = 'Password is required';
    }

    if (!data.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  const validateFormData = (data: FormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!data.password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (!data.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password';
    }

    return newErrors;
  }




  return {
    formData,
    handleInputChange,
    handleSubmit,
    isSubmitting,
    errors

  };
}