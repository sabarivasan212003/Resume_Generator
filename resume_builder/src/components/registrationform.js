import React from 'react';
import FormComponent1 from './registration1';
import FormComponent2 from './registration2';

const RegistrationForm = ({ formData, handleInputChange }) => {
  return (
    <div>
      <h1>Registration Form</h1>
      <FormComponent1 formData={formData} handleInputChange={handleInputChange} />
      <FormComponent2 formData={formData} handleInputChange={handleInputChange} />
    </div>
  );
};

export default RegistrationForm;
