import React from 'react';

const LivePreview = ({ formData }) => {
  return (
    <div>
      <h3>Live Preview:</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Username: {formData.username}</p>
      <p>Password: {formData.password}</p>
    </div>
  );
};

export default LivePreview;
