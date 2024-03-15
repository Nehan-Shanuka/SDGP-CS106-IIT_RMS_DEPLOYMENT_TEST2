/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useState } from "react";
import Authenticator from "../authentication";

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

  const handleStateChange = () => {
    setState(false);
  };

  useEffect(() => {
    onStateChange(state);
  }, [state, onStateChange]);

  const reservtationrevewdisplay = {
    display: "center",
  };

  return (
    <div className="bg-[#3E737A] h-screen pt-10 flex flex-col">
      <Grid item xs={12}>
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
      </Grid>
      <div className="grid grid-cols-3 gap-12 mx-10 my-10">
        {menus.map((menu, index) => (
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
                    } p-[6.13%] w-full`}
                    onClick={handleStateChange}
                  >
                    {menu.name}
                  </button>
                </Link>
              </div>
            </div>
          </Grid>
        ))}
      </div>
      <div className="flex justify-center">
        
      {/* <Authenticator /> */}
      </div>
    </div>
  );
}

export default Welcome;
