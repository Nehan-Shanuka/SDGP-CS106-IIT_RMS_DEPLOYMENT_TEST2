import React, { useState } from 'react';

const ParagraphWithReadMore = ({ title, text, maxChars }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="paragraph-box">
      <div className="heading">
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
  );
};

export default ParagraphWithReadMore;
