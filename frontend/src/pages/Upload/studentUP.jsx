import AdvanceFile from "../../components/AdvanceFile";
import ParagraphWithReadMore from "../../components/Readinoptin";
import img1 from"../../assets/IIT.png";

export default function StudentUpload() {
  return (
    <div>
      <ParagraphWithReadMore
        title={"Timetables Upload"}
        text={"The ParagraphWithReadMore component is a reusable React component designed to display text content with an option to toggle between a truncated view and a full view. This component takes two props: text, which represents the content of the paragraph, and maxChars, an integer specifying the maximum number of characters to display before truncating the text.Upon rendering, if the length of the text exceeds the specified maxChars, the component truncates the text and displays a button. When clicked, the button toggles between displaying the full text and truncating it again. This component enhances user experience by allowing them to access additional content without overwhelming them with excessive text upfront"}
        maxChars={150}
        image={img1}
      />
      <div style={{ marginBottom: '20px' }}></div> {/* Adding gap */}
      <AdvanceFile />
    </div>
  );
}
