/* eslint-disable no-unused-vars */
import LOGO from "../../assets/IIT.png";
import { motion } from "framer-motion";
import { useEffect } from "react";

const SplashScreen = () => {
  useEffect(() => {
    // Hide scrollbars when animation starts
    document.body.style.overflow = "hidden";
    document.body.style.webkitOverflowScrolling = "touch";
    // Re-enable scrollbars when animation ends
    const timeout = setTimeout(() => {
      document.body.style.overflow = "auto";
      document.body.style.webkitOverflowScrolling = "auto";
    }, 10000); // Adjust this duration to match your animation duration
    return () => clearTimeout(timeout);
  }, []); // Run this effect only once when the component mounts

  return (
    <div>
    <div className="max-h-screen" >
      {/* Left side animations */}
    <motion.div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "var(--accent)",
          backgroundColor: "#3e737a",
          position: "absolute",
          top: "-5%",
          left: "-10%",
        }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        
      />
      <motion.div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "var(--accent)",
          backgroundColor: "#3e737a",
          position: "absolute",
          top: "15%",
          left: "5%",
        }}
        animate={{
          scale: [0.5, 1, 1, 0.5, 0.5],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}       
      />
      <motion.div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "var(--accent)",
          backgroundColor: "#3e737a",
          position: "absolute",
          top: "40%",
          left: "-5%",
        }}
        animate={{
          scale: [0.5, 1, 1, 0.5, 0.5],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}       
      />
      <motion.div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "var(--accent)",
          backgroundColor: "#3e737a",
          position: "absolute",
          top: "40%",
          left: "10%",
        }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}  
      />
      <motion.div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "var(--accent)",
          backgroundColor: "#3e737a",
          position: "absolute",
          top: "63%",
          left: "22%",
        }}
        animate={{
          scale: [0.5, 1.2, 1.2, 0.5, 0.5],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
        
      />
      <motion.div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "var(--accent)",
          backgroundColor: "#3e737a",
          position: "absolute",
          top: "85%",
          left: "-5%",
        }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}       
      />
      <motion.div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "var(--accent)",
          backgroundColor: "#3e737a",
          position: "absolute",
          top: "75%",
          left: "10%",
        }}
        animate={{
          scale: [0.4, 0.55, 0.55, 0.4, 0.4],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}       
      />
      <motion.div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "var(--accent)",
          backgroundColor: "#3e737a",
          position: "absolute",
          top: "95%",
          left: "25%",
        }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}       
      />
      {/* Right side animations */}
      <motion.div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "var(--accent)",
          backgroundColor: "#3e737a",
          position: "absolute",
          top: "-20%",
          left: "53%",
        }}
        animate={{
          scale: [0.7, 1.2, 1.2, 0.7, 0.7],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }} 
      />
      <motion.div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "var(--accent)",
          backgroundColor: "#3e737a",
          position: "absolute",
          top: "-10%",
          left: "72%",
        }}
        animate={{
          scale: [0.6, 0.9, 0.9, 0.6, 0.6],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }} 
      />
      <motion.div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "var(--accent)",
          backgroundColor: "#3e737a",
          position: "absolute",
          top: "-10%",
          left: "90%",
        }}
        animate={{
          scale: [0.6, 1, 1, 0.6, 0.6],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }} 
      />
      <motion.div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "var(--accent)",
          backgroundColor: "#3e737a",
          position: "absolute",
          top: "0%",
          left: "60%",
        }}
        animate={{
          scale: [0.5, 0.8, 0.8, 0.5, 0.5],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }} 
      />
      <motion.div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "var(--accent)",
          backgroundColor: "#3e737a",
          position: "absolute",
          top: "28%",
          left: "72%",
        }}
        animate={{
          scale: [1.2, 2, 2, 1.2, 1.2],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }} 
      />
      <motion.div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "var(--accent)",
          backgroundColor: "#3e737a",
          position: "absolute",
          top: "22%",
          left: "90%",
        }}
        animate={{
          scale: [0.7, 1, 1, 0.7, 0.7],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }} 
      />
      <motion.div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "var(--accent)",
          backgroundColor: "#3e737a",
          position: "absolute",
          top: "60%",
          left: "85%",
        }}
        animate={{
          scale: [1, 1.45, 1.45, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }} 
      />
      <motion.div
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "var(--accent)",
          backgroundColor: "#3e737a",
          position: "absolute",
          top: "88%",
          left: "92%",
        }}
        animate={{
          scale: [0.5, 1, 1, 0.5, 0.5],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }} 
      />
    {/* <div className="min-h-screen flex justify-center items-center"> */}
      <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          // width: "80%",
          // height: "80vh",
          // backgroundColor: "#FFFFFF",
          // borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          // opacity: "0.8",
        }}>
        
      <img src={LOGO} className="w-80 h-80 " />
      </div>
    {/* </div> */}
    </div>
    </div>
    

    // <div className="min-h-screen flex justify-center items-center">
    //   {/* Add your loading animation or content here */}
    //   <img src={LOGO} className="w-80 h-80 " />
    // </div>
  );
};

export default SplashScreen;
