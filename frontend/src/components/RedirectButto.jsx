import React from 'react';

const RedirectButton = ({ path, text }) => {
  const buttonStyle = {
    position: 'absolute',
    top: '20px', 
    right: '80px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '10px',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer'
  };

  const arrowStyle = {
    marginLeft: '5px'
  };

  const handleRedirect = () => {
    window.location.href = path;
  };

  return (
    <button style={buttonStyle} onClick={handleRedirect}>
      {text}
      <span style={arrowStyle}>&#10132;</span>
    </button>
  );
};

export default RedirectButton;
