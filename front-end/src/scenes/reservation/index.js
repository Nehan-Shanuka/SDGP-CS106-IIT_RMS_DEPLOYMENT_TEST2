import React from "react";
import { Link } from "react-router-dom";
import Calender from "../../componants/Calender";
import Time from "../../componants/Time";
import Location from "../../componants/Location";
import { Button, Card } from "@mui/material";
import HallList from "../../componants/HallList";
import Degree from "../../componants/Degree";
import Level from "../../componants/Level";
import Module from "../../componants/Modules";
import Type from "../../componants/Type";
import Group from "../../componants/Group";

const courses = [
  {
    hallNumber: "AUD",
    building: "GP",
    moduleName: "Object Oriented Programming",
    time: "08.30-10.30",
    projector_count: "2",
    whiteboard_availability: true,
    mic_speacker: false,
    type: "Lecture",
  },
  {
    hallNumber: "1LB",
    building: "JB",
    moduleName: "Object Oriented Programming",
    time: "08.30-10.30",
    projector_count: "2",
    whiteboard_availability: false,
    mic_speacker: false,
    type: "Lecture",
  },
  {
    hallNumber: "5LB",
    building: "GP",
    moduleName: "Object Oriented Programming",
    time: "08.30-10.30",
    projector_count: "2",
    whiteboard_availability: false,
    mic_speacker: true,
    type: "Lecture",
  },
  {
    hallNumber: "4LC",
    building: "JB",
    moduleName: "Object Oriented Programming",
    time: "08.30-10.30",
    projector_count: "2",
    whiteboard_availability: true,
    mic_speacker: false,
    type: "Lecture",
  },
  {
    hallNumber: "7LB",
    building: "SP",
    moduleName: "Object Oriented Programming",
    time: "08.30-10.30",
    projector_count: "2",
    whiteboard_availability: false,
    mic_speacker: true,
    type: "Lecture",
  },
];

export default function Reservation() {
  return (
    <>
      <section className="flex gap-0 bg-gray-200">
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 3,
            maxHeight: "100vh",
          }}
        >
          <div>
            <Calender />
            <Time />
            <Location />
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginTop: 1,
                width: "100%",
                backgroundColor: "#D9D9D9",
                color: "#000",

                ":hover": {
                  backgroundColor: "#723E7A",
                  color: "#fff",
                },
              }}
            >
              Search
            </Button>
          </div>

          <HallList color={"#723E7A"} status={"Reservation"} newcourses={courses} />
        </Card>
      </section>
    </>
  );
}
