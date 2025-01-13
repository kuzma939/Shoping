// src/utils/validation.js
export const validateForm = (formValues) => {
    const errors = {};
  
    if (!formValues.firstName.trim()) {
      errors.firstName = "First name is required.";
    }
  
    if (!formValues.lastName.trim()) {
      errors.lastName = "Last name is required.";
    }
  
    if (!/^\+?(\d{10,15})$/.test(formValues.phone)) {
      errors.phone = "Enter a valid phone number (10-15 digits).";
    }
  
    if (
      !formValues.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)
    ) {
      errors.email = "Enter a valid email address.";
    }
  
    if (formValues.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }
  
    return errors; // Return an object with errors (if any)
  };
  