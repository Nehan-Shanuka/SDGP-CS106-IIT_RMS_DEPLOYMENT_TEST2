import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

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
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };


  const handleUpload = () => {

        if (!file) {

            setSnackbarMessage("No file selected");
        setOpenSnackbar(true);}
    // Handle file upload logic here
    else{
    console.log('Uploading file:', file);
    setSnackbarMessage('File uploaded successfully.');
    setOpenSnackbar(true);}
    // Reset the file state after upload if needed
    setFile(null);
  };


  const handleCancel = () => {
    // Clear the selected file
    setFile(null);
    setSnackbarMessage('Upload cancelled.');
    setOpenSnackbar(true);
    // Reset the file state if needed
    // setFile(null);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <label htmlFor="file-upload">
        <Button
          component="span"
          role={undefined}
          variant="contained"
          color="success" // Change color to green
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          sx={{ marginBottom: 1 }}
        >
          Upload file
        </Button>
      </label>
      <VisuallyHiddenInput id="file-upload" type="file" onChange={handleFileChange} />
      {file && (
       <Button 
       variant="outlined" 
       onClick={handleCancel} 
       color="error" 
       sx={{
         marginBottom: 1,
         color: 'red', // Text color
         borderColor: 'red', // Border color
         '&:hover': {
           backgroundColor: 'red', // Background color on hover
           color: 'white', // Text color on hover
         },
       }}
     >
       Cancel
     </Button>
     
      )}
      <Button variant="outlined" onClick={handleUpload} sx={{ marginBottom: 1 }}>
        Upload
      </Button>
      <Snackbar 
  open={openSnackbar} 
  autoHideDuration={3000} 
  onClose={handleCloseSnackbar}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right'
  }}
>
  <MuiAlert 
    elevation={6} 
    variant="filled" 
    onClose={handleCloseSnackbar} 
    severity="success"
  >
    {snackbarMessage}
  </MuiAlert>
</Snackbar>

    </Box>
  );
}
