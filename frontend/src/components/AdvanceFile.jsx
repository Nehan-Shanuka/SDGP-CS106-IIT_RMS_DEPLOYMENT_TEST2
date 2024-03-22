import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import * as XLSX from 'xlsx';


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
  // const [jsonData, setJsonData] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      setSnackbarMessage("No file selected");
      setOpenSnackbar(true);
    } else {
      const reader = new FileReader();
      

      reader.onload = () => {
        try {
          
          const fileContent = reader.result;
          if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
            throw new Error('Unsupported file format. Please select an Excel file.');
          }
  
          const arrayBuffer = reader.result;
          const data = new Uint8Array(arrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);

          console.log('Converted JSON data:', jsonData);
          setSnackbarMessage('File converted to JSON successfully.');
          setOpenSnackbar(true);

          // Handle file upload logic here
          console.log('Uploading file:', file);
          setSnackbarMessage('File uploaded successfully.');
          setOpenSnackbar(true);
        } catch (error) {
          console.error('Error converting file to JSON:', error);
          setSnackbarMessage('Error converting file to JSON.'+ error.message);
          setOpenSnackbar(true);
          setFile(null);

        }
      };

      reader.readAsText(file);
    }

    // Reset the file state after upload if needed
    setFile(null);
  };

  const handleCancel = () => {
    // Clear the selected file
    setFile(null);
    setSnackbarMessage('Upload cancelled.');
    setOpenSnackbar(true);
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
