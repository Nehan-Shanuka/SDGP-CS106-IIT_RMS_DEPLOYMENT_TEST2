import React from 'react';

const RedirectButton = ({ path, text }) => {
  const buttonStyle = {
    position: 'absolute',
    top: '015px', 
    right: '100px',
    padding: '10px 20px',
    backgroundColor: 'lightgray',
    color: 'black',
    textDecoration: 'none',
    borderRadius: '20px',
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
