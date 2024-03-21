import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function SimpleTypewriter() {
  const [typeEffect] = useTypewriter({
    words: ['  sanuth', '  hansaja'],
    loop: {},
    typeSpeed: 80,
    deleteSpeed:40
  });

  return (
    <h1 style={{ margin: "50px", fontSize:"30px"}}>
      I am a  
      <span style={{ fontWeight: "bold", color: "green" }}>{typeEffect}</span>
      <span style={{ color: "red" }}>
        <Cursor />
      </span>
    </h1>
  );
}
