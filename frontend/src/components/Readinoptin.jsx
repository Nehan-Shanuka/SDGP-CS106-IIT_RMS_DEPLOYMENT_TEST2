import { Card } from '@mui/material';
import React, { useState } from 'react';

const ParagraphWithReadMore = ({ title, text, maxChars }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    
    <Card sx={{
        backgroundColor: "#f0f0f0",
        padding: "20px",
        width: "80%", // Initial width
        margin: "auto", // Center the card horizontally
        '@media (max-width: 768px)': {
          width: "90%", // Adjust width for smaller screens
          padding: "10px" // Adjust padding for smaller screens
        }
      }} >
   <div style={{ display: 'flex', justifyContent: 'center', background: 'white' }}>
  <div className="paragraph-box">
    <div style={{ display:'flex', justifyContent: 'center', border: '1px solid black', padding: '10px', backgroundColor: 'red'}}>
      <h2>{title}</h2>
    </div>
    <div className="content">
      <p>
        {showFullText ? text : `${text.slice(0, maxChars)}...`}
        {!showFullText && (
          <button onClick={toggleShowFullText}>Read More</button>
        )}
      </p>
    </div>
  </div>
</div>

    </Card>
  );
};

export default ParagraphWithReadMore;
