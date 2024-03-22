import { Card } from '@mui/material';
import React, { useState } from 'react';
import { Button, CardActionArea, CardActions } from '@mui/material';


const ParagraphWithReadMore = ({ title, text, maxChars, image }) => {
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
      <div style={{ display: 'flex', justifyContent: 'center', background: 'white',  }}>
        
        <div className="paragraph-box">
          <div style={{ display:'flex', justifyContent: 'center', border: '1px solid black', padding: '10px', backgroundColor: 'green'}}>
          <h2 style={{ fontSize: "20px" ,color: "white", fontWeight: 'bold'}}>{title}</h2>
          </div>
          <div className="content">
            <p style={{color:""}}>
              {showFullText ? text : `${text.slice(0, maxChars)}...`}
              {text.length > maxChars && (
                <Button onClick={toggleShowFullText} size="small" color="primary">
                  {showFullText ? 'Read Less' : 'Read More'}
                </Button>
              )}
            </p>
            {showFullText && image && (
              <div style={{ textAlign: 'center' }}>
                <img src={image} alt="Additional Image" style={{ maxWidth: '100%', maxHeight: '300px' }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ParagraphWithReadMore;
