import UNDER_CONSTRUCTION from "../assets/UNDER_CONSTRUCTION.png";

export default function UnderManintainCall() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-stone-200" style={{}}>
    <div style={{
        transform: "translateY(-50%)",
        display: "flex",
        justifyContent: "center",
      }}>
        <img src={UNDER_CONSTRUCTION} alt="access denied" className="w-40 h-40 mr-10"/>
        <h1 className="text-xl mt-[3.4rem]">Sorry! This Feature Is Under Developing.</h1>
    </div>
  </div>
  )
}
