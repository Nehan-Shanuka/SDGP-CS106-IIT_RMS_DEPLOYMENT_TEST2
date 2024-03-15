/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { app } from "../../firebase";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import PROFILE_IMG from "../../assets/PROFILE_IMAGE.png";
import GOOGLE from "../../assets/GOOGLE.png";
import { TextField } from "@mui/material";

export default function Authenticator({ userOnBoard }) {
  const [user, setUser] = useState();

  const handleAuthenticatorClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      setUser(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);

  useEffect(() => {
    if (user) userOnBoard(user);
  }, [user, userOnBoard]);

  return (
    <>
      <div className="bg-stone-200 w-full h-[50vh]"></div>
      <div className="bg-[#3E737A] w-full h-[50vh]"></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "80vh",
          backgroundColor: "#FFFFFF",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          // opacity: "0.8",
        }}
      >
        
        <div className="bg-stone-200 m-auto my-20  px-20 w-fit rounded-[2rem]">
          <img src={PROFILE_IMG} alt="profile" className="w-32 h-32 rounded-full mx-auto" style={{
            display: "block",
            margin: "auto",
            // marginTop: "5%",
            // borderRadius: "50%",
            // boxShadow: "0px 0px px 0.5px rgba(0,0,0,0.75)",
            // border: "5px solid #3E737A",
            // border: "5px solid #3E737A",
            transform: "translateY(-50%)",
          }}/>
          {/* <form className=""> */}
            {/* <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold">Email</label>
              <input type="email" id="email" className="border-2 border-stone-500 rounded-md p-2 my-2" placeholder="email"/>
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-lg font-semibold">Password</label>
              <input type="password" id="password" className="border-2 border-stone-500 rounded-md p-2 my-2" placeholder="password"/>
            </div> */}
            {/* </form> */}
            <div className="flex flex-col rounded" 
            style={{transform: "translateY(-20%)"}}>
        <TextField
          sx={{
            // width: "100%",
            borderRadius: 10,
            marginBottom: 5,
          }}
          label="email"
          color="success"
          variant="filled"
        />
        <TextField
          sx={{
            // width: "100%",
            borderRadius: 10,
          }}
          label="password"
          color="success"
          variant="filled"
        />
      </div>
          <Button
          color="secondary"
          sx={{
            // position: "absolute",
            margin: "auto",
            marginTop: "10%",
            backgroundColor: "rgb(59, 7, 100)",
            color: "rgb(255, 255, 255)",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            border: "none",
            outline: "none",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            display: "block",
            ":hover": {
              backgroundColor: "rgb(59, 7, 100)",
            },
          }}
          onClick={handleAuthenticatorClick}
        >
          <div className="flex">
            <img src={GOOGLE} alt="google" className="w-8 h-8 rounded-full mx-auto"/>
          {/* <div className="bg-purple-950 py-3 px-10 rounded-lg text-white"> */}
          <h1>LOGIN WITH GOOGLE</h1>
          {/* </div> */}
          </div>
          
        </Button>
        </div>
        
      </div>
    </>
  );
}
