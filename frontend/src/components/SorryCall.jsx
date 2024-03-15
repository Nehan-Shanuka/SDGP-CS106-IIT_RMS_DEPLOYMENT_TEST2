import ACCESS_DENIED from "../assets/ACCESS_DENIED.png";

export default function SorryCall() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-stone-200" style={{}}>
    <div style={{
        // position: "absolute",
        // top: "50%",
        // left: "50%",
        transform: "translateY(-50%)",
        display: "flex",
        justifyContent: "center",
      }}>
        <img src={ACCESS_DENIED} alt="access denied" className="w-40 h-40"/>
        <h1 className="text-xl mt-[3rem]">Sorry! You Do Not Have The Permission To Access This Potral.</h1>
    </div>
  </div>
  )
}
