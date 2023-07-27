import React, { useState } from 'react';
import Sidebar from './sidebar1';
import RegistrationForm from './registrationform';
import LivePreview from './preview';

const Check = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: ''
  });

  const handleSidebarButtonClick = (component) => {
    if (component === 'registrationForm') {
      setShowRegistrationForm(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div>
      <Sidebar handleSidebarButtonClick={handleSidebarButtonClick} />
      {showRegistrationForm && (
        <RegistrationForm formData={formData} handleInputChange={handleInputChange} />
      )}
      {showRegistrationForm && <LivePreview formData={formData} />}
    </div>
  );
};

export default Check;
