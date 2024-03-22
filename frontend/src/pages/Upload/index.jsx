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
  <MultiActionAreaCard type={"Timetable"} img={img1} path={"/student-upload"} texts={"This is a dedicated platform designed for students to effortlessly upload their timetables.It streamlines the process, saving time and ensuring all schedules are easily accessible. "} />
    <MultiActionAreaCard type={"Studets"} img={img2} path={"/weekly-timetble"} texts={"Submit your student list here to generate groupings. It's a straightforward way to organize students efficiently without the hassle of manual grouping. Simplify your coordination process! "}/>
    <MultiActionAreaCard type={"Users"} img={img3} path={"/weekly-timetble"}  texts={"Input your user list here to grant web access. It's a streamlined process to ensure users can easily access the website. Simplify user management and enhance accessibility "}/>
  </div>
</Card>




    </div>


    


  );
};
