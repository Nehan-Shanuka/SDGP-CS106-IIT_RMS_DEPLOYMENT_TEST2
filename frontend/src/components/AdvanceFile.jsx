import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from '@mui/material/Box';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function InputFileUpload() {
  const [file, setFile] = React.useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log('Uploading file:', file);
    // Reset the file state after upload if needed
    // setFile(null);
  };

  const handleCancel = () => {
    // Handle cancellation logic here
    console.log('Cancelling upload');
    // Reset the file state if needed
    // setFile(null);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        color="success" // Change color to green
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        sx={{ marginBottom: 1 }}
      >
        Upload file
        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
      </Button>
      <Button variant="outlined" onClick={handleUpload} sx={{ marginBottom: 1 }}>
        Upload
      </Button>
      <Button 
        variant="outlined" 
        onClick={handleCancel} 
        color="error" // Change color to red
        sx={{ marginBottom: 1 }}
      >
        Cancel
      </Button>
    </Box>
  );
}
