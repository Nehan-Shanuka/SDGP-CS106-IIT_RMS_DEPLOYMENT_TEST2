import { styled } from "@mui/material/styles";
import axios from "axios";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Uploadicon from "../images/6323.jpg";
import Card from "@mui/material/Card";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
  marginInlineStart: "10",
});



export default function InputFileUpload() {
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false); // State to control Snackbar visibility

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setUploadMessage(null);
  };

  const handleFileUpload = async () => {
    try {
      if (!file) {
        setUploadMessage("No file selected");
        setOpenSnackbar(true); // Show Snackbar for no file selected
        return;
      }

      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const fileContent = event.target.result;

          // Parse the JSON content
          const timetableData = JSON.parse(fileContent);

          // Make a POST request to your backend API endpoint
          const response = await axios.post("http://localhost:5555/timetables", timetableData);

          // Handle response as needed
          setUploadMessage("File uploaded successfully");
          setOpenSnackbar(true);
          console.log("File uploaded successfully", response.data);
        } catch (error) {
          setUploadMessage("Error uploading file");
          setOpenSnackbar(true); // Show Snackbar for error uploading file
          console.error("Error parsing JSON or uploading file", error);
        }
      };

      reader.readAsText(file);
    } catch (error) {
      setUploadMessage("Error uploading file");
      setOpenSnackbar(true); // Show Snackbar for error uploading file
      console.error("Error uploading file", error);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };
  


  return (
    <div
      style={{ paddingBottom: "6rem", marginLeft: "20px", marginRight: "1rem" }}
    >
      <div
        style={{
          display: "flex",
          marginTop: "30px",
          justifyContent: "space-between",
          padding: "0 12rem",
        }}
      >
        <Card sx={{ border: 2, borderColor: "black" }}>
          <div>
            <img
              src={Uploadicon}
              style={{ width: "10rem", marginLeft: "17%" }}
            />

<Button
              style={{ width: "15rem" }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Time Tables
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </Button>
            <Button onClick={handleFileUpload}>Upload</Button>
          </div>
        </Card>

        <Card sx={{ border: 2, borderColor: "black" }}>
          <div>
            <img
              src={Uploadicon}
              style={{ width: "10rem", marginLeft: "17%" }}
            />

            <Button
              style={{ width: "15rem" }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Student List
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>
        </Card>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 12rem",
          marginTop: "5rem",
        }}
      >
        <Card sx={{ border: 2, borderColor: "black" }}>
          <div>
            <img
              src={Uploadicon}
              style={{ width: "10rem", marginLeft: "17%" }}
            />
            <Button
              style={{ width: "15rem" }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Lecturer Details
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>
        </Card>

        <Card sx={{ border: 2, borderColor: "black" }}>
          <div>
            <img
              src={Uploadicon}
              style={{ width: "10rem", marginLeft: "17%" }}
            />
            <Button
              style={{ width: "15rem" }}
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Resources
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
