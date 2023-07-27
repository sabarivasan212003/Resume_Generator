import React from 'react';

const Sidebar = ({ handleSidebarButtonClick }) => {
  return (
    <div>
      <button onClick={() => handleSidebarButtonClick('registrationForm1')}>
        Load Registration Form 1
      </button>
      <button onClick={() => handleSidebarButtonClick('registrationForm2')}>
        Load Registration Form 2
      </button>
      {/* Add more buttons for other registration forms */}
    </div>
  );
};

export default Sidebar;
