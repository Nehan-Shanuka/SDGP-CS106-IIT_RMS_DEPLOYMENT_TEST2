import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function SimpleTypewriter({ words ,text}) {
  const [typeEffect] = useTypewriter({
    words: words,
    loop: {},
    typeSpeed: 80,
    deleteSpeed:40
  });

  return (
    <h1 style={{ margin: "50px", fontSize:"30px"}}>
      {text}  
      <span style={{ fontWeight: "bold", color: "green" }}>{typeEffect}</span>
      <span style={{ color: "red" }}>
        <Cursor />
      </span>
    </h1>
  );
}
