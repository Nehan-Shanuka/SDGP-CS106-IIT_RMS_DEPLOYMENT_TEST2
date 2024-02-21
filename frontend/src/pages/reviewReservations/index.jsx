/* eslint-disable no-unused-vars */
import Calender from "../../components/Calender";
import { Button, Card } from "@mui/material";
import HallList from "../../components/HallList";
import Time from "../../components/TimeSlection";
import Location from "../../components/LocationSelection";
import Degree from "../../components/DegreeSelection";
import Level from "../../components/LevelSelection";
import Module from "../../components/ModuleSelection";
import Type from "../../components/TypeSelection";
import Group from "../../components/GroupSelection";

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

export default function ReservationReview(props) {
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

          <div>
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

          <HallList
            color={"#3E737A"}
            status={"revervationReview"}
            newcourses={courses}
          />
        </Card>
      </section>
    </>
  );
}