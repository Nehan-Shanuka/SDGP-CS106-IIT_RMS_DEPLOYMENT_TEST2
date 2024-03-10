import React from 'react';
import { Link } from 'react-router-dom';

const RedirectButton = ({ path, text }) => {
  const buttonStyle = {
    position: 'absolute',
    top: '15px',
    right: '100px',
    padding: '10px 20px',
    backgroundColor: 'lightgray',
    color: 'black',
    textDecoration: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
     transition: 'background-color 0.3s ease',
  };

  const arrowStyle = {
    marginLeft: '5px',
  };

  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <button style={buttonStyle}>
        {text}
        <span style={arrowStyle}>&#10132;</span>
      </button>
    </Link>
  );
};

export default RedirectButton;
