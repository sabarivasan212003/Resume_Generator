import React from 'react';

const FormComponent1 = ({ formData, handleInputChange }) => {
  return (
    <div>
      <h2>Registration Form Component 1</h2>
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
    </div>
  );
};

export default FormComponent1;
