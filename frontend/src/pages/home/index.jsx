/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useState } from "react";

function Welcome({ onStateChange }) {
  // Define a sample menus array
  const menus = [
    { name: "My Timetable", path: "/my-timetable" },
    { name: "Reservation Requests", path: "/reservations" },
    { name: "Group Formation", path: "/student-grouping" },
    { name: "Group Timetable", path: "/group-timetable" },
    { name: "Planned Sessions", path: "/planned-sessions" },
    { name: "Group Details", path: "/group-details" },
    {},
    { name: "Reservation Review", path: "/review-requests" },
  ];

  const [state, setState] = useState(true);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale(scale => scale === 1 ? 1.2 : 1);
    }, 500); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  const handleStateChange = () => {
    setState(false);
  };

  useEffect(() => {
    onStateChange(state);
  }, [state, onStateChange]);

  const reservtationrevewdisplay = {
    display: "center",
  };

  useEffect(() => {
    // Hide scrollbars when animation starts
    document.body.style.overflow = "hidden";
    document.body.style.webkitOverflowScrolling = "touch";
    // Re-enable scrollbars when animation ends
    const timeout = setTimeout(() => {
      document.body.style.overflow = "auto";
      document.body.style.webkitOverflowScrolling = "auto";
    }, 900000000); // Adjust this duration to match your animation duration
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex justify-center w-screen h-screen bg-[#D9D9D9]">
      {/* <div className="bg-[#3E737A] h-screen pt-10 flex flex-col"> */}
      {/* <Grid item xs={12}>
        <Paper className="p-1">
          <Typography
            variant="h2"
            component="div"
            className="mb-3 text-center bg-stone-200 text-[#3E737A]"
          >
            WELCOME
          </Typography>
          <Typography
            variant="h3"
            component="div"
            className="text-center bg-stone-200 text-[#3E737A]"
          >
            IIT RMS
          </Typography>
        </Paper>
      </Grid> */}
      {/* <div className="flex justify-center w-screen h-screen bg-[#D9D9D9]"> */}
      <div className="grid items-center">
        <h1 className="h-fit pb-24 text-[5rem] text-[#fff]  opacity-40 sm:text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[50rem] overflow-hidden" style={{ transform: `scale(${scale})`, transition: 'transform 0.7s ease-in-out', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)', }}>
          IIT
        </h1>
      </div>
      {/* </div> */}

      <div className="absolute grid items-center h-screen">
        <div className="w-screen">
          <div className="w-screen flex justify-center py-5">
            <div className="">
              <Link to="/my-timetable">
                <button
                  className="bg-[#3E737A] opacity-90 py-[3rem] px-[1rem] w-[20rem] max-w-xl text-3xl text-[#D9D9D9] rounded-[2rem] transition ease-in-out delay-100 hover:scale-x-125 hover:scale-y-125 duration-500 transition ease-in-out delay-100 hover:scale-x-125 hover:scale-y-125 duration-500"
                  onClick={handleStateChange}
                >
                  My Timetable
                </button>
              </Link>
            </div>
            <div className="mx-12">
              <Link to="/group-timetable">
                <button
                  className="bg-[#3E737A] opacity-90  py-[3rem] px-[1rem] w-[20rem] max-w-xl text-3xl text-[#D9D9D9] rounded-[2rem] transition ease-in-out delay-100 hover:scale-x-125 hover:scale-y-125 duration-500"
                  onClick={handleStateChange}
                >
                  Group Timetables
                </button>
              </Link>
            </div>
            <div className="">
              <Link to="/reservations">
                <button
                  className="bg-[#3E737A] opacity-90 py-[3rem] px-[1rem] w-[20rem] max-w-xl text-3xl text-[#D9D9D9] rounded-[2rem] transition ease-in-out delay-100 hover:scale-x-125 hover:scale-y-125 duration-500"
                  onClick={handleStateChange}
                >
                  Reservations
                </button>
              </Link>
            </div>
          </div>
          <div className="w-screen flex justify-center py-5">
            <div className="">
              <Link to="/planned-sessions">
                <button
                  className="bg-[#3E737A] opacity-90 py-[3rem] px-[1rem] w-[20rem] max-w-xl text-3xl text-[#D9D9D9] rounded-[2rem] transition ease-in-out delay-100 hover:scale-x-125 hover:scale-y-125 duration-500"
                  onClick={handleStateChange}
                >
                  Planned Sessions
                </button>
              </Link>
            </div>
            <div className="mx-12">
              <Link to="/student-grouping">
                <button
                  className="bg-[#3E737A] opacity-90 py-[3rem] px-[1rem] w-[20rem] max-w-xl h-full text-3xl text-[#D9D9D9] rounded-[2rem] transition ease-in-out delay-100 hover:scale-x-125 hover:scale-y-125 duration-500"
                  onClick={handleStateChange}
                >
                  Group Formation
                </button>
              </Link>
            </div>
            <div className="">
              <Link to="/group-details">
                <button
                  className="bg-[#3E737A] opacity-90 py-[3rem] px-[1rem] w-[20rem] max-w-xl text-3xl text-[#D9D9D9] rounded-[2rem] transition ease-in-out delay-100 hover:scale-x-125 hover:scale-y-125 duration-500"
                  onClick={handleStateChange}
                >
                  Group Details
                </button>
              </Link>
            </div>
          </div>
          <div className="w-screen flex justify-center px-60 py-5">
            <div className="">
              <Link to="/review-requests">
                <button
                  className="bg-[#3E737A] opacity-90 py-[3rem] px-[1rem] w-[20rem] max-w-xl text-3xl text-[#D9D9D9] rounded-[2rem] transition ease-in-out delay-100 hover:scale-x-125 hover:scale-y-125 duration-500"
                  onClick={handleStateChange}
                >
                  Review Reservations
                </button>
              </Link>
            </div>
            {/* <div className="">
              <Link to="/my-timetable">
                <button
                  className="bg-[#3E737A] opacity-80 p-[3rem] w-full text-3xl text-[#D9D9D9] rounded-[2rem]"
                  onClick={handleStateChange}
                >
                  My Timetable
                </button>
              </Link>
            </div> */}
            {/* <div className="">
              <Link to="/my-timetable">
                <button
                  className="bg-[#3E737A] opacity-80 p-[3rem] w-full text-3xl text-[#D9D9D9] rounded-[2rem]"
                  onClick={handleStateChange}
                >
                  My Timetable
                </button>
              </Link>
            </div> */}
          </div>
        </div>

        {/* {menus.map((menu, index) => (
          <Grid
            item
            sm={4}
            key={index}
            className="p-2 transition ease-in-out delay-200 hover:scale-110 duration-300"
          >
            <div className="h-full">
              <div
                className={`${
                  menu.name === undefined
                    ? "bg-[#3E737A] pointer-events-none"
                    : "bg-stone-200"
                }
                  text-center h-full cursor-pointer text-3xl`}
              >
                <Link to={menu.path}>
                  <button
                    className={`${
                      menu.name === undefined
                        ? "bg-[#3E737A] pointer-events-none"
                        : "bg-stone-200"
                    } p-[3rem] w-full`}
                    onClick={handleStateChange}
                  >
                    {menu.name}
                  </button>
                </Link>
              </div>
            </div>
          </Grid>
        ))} */}
      </div>
      <div className="flex justify-center">{/* <Authenticator /> */}</div>
    </div>
  );
}

export default Welcome;
