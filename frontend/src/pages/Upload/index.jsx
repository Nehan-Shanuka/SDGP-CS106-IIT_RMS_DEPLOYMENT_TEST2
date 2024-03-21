// In UploadPage.js
import UploadsPage from "../../components/UploadsPage";
import SimpleTypewriter from "../../components/SimpleTypewriting";
import MultiActionAreaCard from "../../components/MultiActionAreaCard";
import { Button, Card } from "@mui/material";
import img1 from "../../assets/time1.jpg"
import img2 from "../../assets/student.png"
import img3 from "../../assets/users.jpeg"


export default function UploadPage() {
  return (
    <div>
<SimpleTypewriter words={["Timetables  "," Student List ","Users Details"]} text={"Upload " }/>
<Card sx={{
  backgroundColor: "#f0f0f0",
  padding: "20px",
  width: "80%", // Initial width
  margin: "auto", // Center the card horizontally
  '@media (max-width: 768px)': {
    width: "90%", // Adjust width for smaller screens
    padding: "10px" // Adjust padding for smaller screens
  }
}}>
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
  <MultiActionAreaCard type={"Timetable"} img={img1} />
    <MultiActionAreaCard type={"Studets"} img={img2}/>
    <MultiActionAreaCard type={"Users"} img={img3}  />
  </div>
</Card>




    </div>


    


  );
};
