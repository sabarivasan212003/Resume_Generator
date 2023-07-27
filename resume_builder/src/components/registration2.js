import React from 'react';

const FormComponent2 = ({ formData, handleInputChange }) => {
  return (
    <div>
      <h2>Registration Form Component 2</h2>
      <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
      <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
    </div>
  );
};

export default FormComponent2;
