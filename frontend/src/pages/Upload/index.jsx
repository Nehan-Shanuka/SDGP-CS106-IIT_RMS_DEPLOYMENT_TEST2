// In UploadPage.js
import UploadsPage from "../../components/UploadsPage";
import SimpleTypewriter from "../../components/SimpleTypewriting";
import MultiActionAreaCard from "../../components/MultiActionAreaCard";
import { Button, Card } from "@mui/material";

export default function UploadPage() {
  return (
    <div>
<SimpleTypewriter words={["Timetable File "," Hall Details ","Lecturer List","Ramakrishna Building"]} text={"Upload " }/>
<MultiActionAreaCard/>
    </div>


    


  );
};
