export interface FormData {
    username: string;
    password: string;
    confirmPassword: string;
  }
  
  export interface FormErrors {
    username?: string;
    password?: string;
    confirmPassword?: string;
  }