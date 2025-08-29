import { useState, useCallback } from 'react';
import type { FormData, FormErrors } from '../interfaces/SignupForm.interfaces';

// Initial form data
const initialFormData: FormData = {
  username: '',
  password: '',
  confirmPassword: ''
};

export function useForm() {
  // State for form data
  const [formData, setFormData] = useState<FormData>(initialFormData);
  console.log(formData);
  
  // State for form errors
  const [errors, setErrors] = useState<FormErrors>({});
  
  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

  }, []);



  return {
    formData,
    handleInputChange,
  };
}