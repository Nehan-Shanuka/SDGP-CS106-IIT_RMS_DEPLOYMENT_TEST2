import React from "react";
import { useState } from "react";
import { Button, Card } from "@mui/material";
import Calender from "../../componants/Calender";
import Time from "../../componants/Time";
import Location from "../../componants/Location";
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
    lecturer: "Mr. A. Smith",
    course: "BSc Computer Science (Level 5)",
    groups: ["CS-I", "CS-J", "CS-K", "CS-L"],
    type: "Lecture",
  },
  {
    hallNumber: "1LB",
    building: "JB",
    moduleName: "Object Oriented Programming",
    time: "08.30-10.30",
    lecturer: "Mr. A. Smith",
    course: "BSc Computer Science (Level 5)",
    groups: ["CS-I", "CS-J", "CS-K", "CS-L"],
    type: "Lecture",
  },
  {
    hallNumber: "5LB",
    building: "GP",
    moduleName: "Object Oriented Programming",
    time: "08.30-10.30",
    lecturer: "Mr. A. Smith",
    course: "BSc Computer Science (Level 5)",
    groups: ["CS-I", "CS-J", "CS-K", "CS-L"],
    type: "Lecture",
  },
  {
    hallNumber: "4LC",
    building: "JB",
    moduleName: "Object Oriented Programming",
    time: "08.30-10.30",
    lecturer: "Mr. A. Smith",
    course: "BSc Computer Science (Level 5)",
    groups: ["CS-I", "CS-J", "CS-K", "CS-L"],
    type: "Lecture",
  },
  {
    hallNumber: "7LB",
    building: "SP",
    moduleName: "Object Oriented Programming",
    time: "08.30-10.30",
    lecturer: "Mr. A. Smith",
    course: "BSc Computer Science (Level 5)",
    groups: ["CS-I", "CS-J", "CS-K", "CS-L"],
    type: "Lecture",
  },
];

export default function StdGrouping() {
  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  // const [selectedTime, setSelectedTime] = useState<Date | null>(null);

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
          </div>

          <div
            style={{
              width: "320px",
            }}
          >
            <Time />
            <Location />
            <Degree />
            <Level />
            <Module />
            <Type />
            <Group />
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginTop: 1,
                width: "100%",
                backgroundColor: "#D9D9D9",
                color: "#000",

                ":hover": {
                  backgroundColor: "#3E737A",
                  color: "#fff",
                },
              }}
            >
              Search
            </Button>
          </div>

          <HallList color={"#3E737A"} status={"strGouping"} newcourses={courses} />
        </Card>
      </section>
    </>
  );
}
