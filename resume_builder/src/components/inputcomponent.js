import React, { useState } from 'react';

const InputComponent = ({ handleInputChange }) => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    // Add more input fields as needed
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
    handleInputChange(inputValues); // Pass the input values to the parent component
  };

  return (
    <div>
      <input
        type="text"
        name="input1"
        value={inputValues.input1}
        onChange={handleChange}
      />
      <input
        type="text"
        name="input2"
        value={inputValues.input2}
        onChange={handleChange}
      />
      {/* Add more input fields as needed */}
    </div>
  );
};

export default InputComponent;
