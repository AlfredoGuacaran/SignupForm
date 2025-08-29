import { useState, useCallback } from 'react';
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
    
    setFormData(prev => ({ ...prev, [name]: value }));
    
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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



  return {
    formData,
    handleInputChange,
    handleSubmit,
    isSubmitting

  };
}