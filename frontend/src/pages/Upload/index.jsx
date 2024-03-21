// In UploadPage.js
import UploadsPage from "../../components/UploadsPage";
import SimpleTypewriter from "../../components/SimpleTypewriting";

export default function UploadPage() {
  return (
    <div className="uploads-container">
      {/* <UploadsPage /> */}
      <SimpleTypewriter words={["Timetable File "," Hall Details ","Lecturer List","Ramakrishna Building"]} text={"Upload " }/>
      
    

    </div>
  );
};
