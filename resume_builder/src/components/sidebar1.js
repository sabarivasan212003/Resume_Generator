import React from 'react';

const Sidebar = ({ handleSidebarButtonClick }) => {
  return (
    <div>
      <button onClick={() => handleSidebarButtonClick('registrationForm')}>
        Load Registration Form
      </button>
    </div>
  );
};

export default Sidebar;
