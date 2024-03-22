import AdvanceFile from "../../components/AdvanceFile";
import React, { useState } from 'react';
import './UploadPage.css'; // Import your CSS file for styling

const UploadPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    setSelectedFiles(files);
  };

  const fileType = (file) => {
    return fileTypes.test(file.type);
  };

  const fileSize = (file) => {
    const fileSize = file.size / 1024 / 1024; // In MB
    return fileSize.toFixed(2);
  };

  return (
    <div className="upload-container">
      <div className="drag-drop-area" onDragOver={handleDragOver} onDrop={handleDrop}>
        <div className="drag-drop-text">Drag & Drop files here or</div>
        <input type="file" multiple onChange={handleFileChange} />
        <span>Browse</span>
      </div>
      <ul className="file-list">
        {selectedFiles.map((file) => (
          <li key={file.name}>
            {fileType(file) ? (
              <img src={URL.createObjectURL(file)} alt={file.name} className="file-preview" />
            ) : (
              <span>{file.name}</span>
            )}
            <div className="file-details">
              <span>{file.type}</span>
              <span>{fileSize(file)} MB</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UploadPage;
