/* eslint-disable no-unused-vars */
import Calender from "../../components/Calender";
import RedirectButton from "../../components/RedirectButto"
import WeeklyTimetable from "../../pages/weeklyTimetable"
import { Button, Card } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";


const timeSlotes = [
  {
    hallNumber: "7LA",
    building: "SP",
    moduleName: "Object Oriented Programming",
    time: "08.30-10.30",
    lecturer: "Mr. A. Smith",
    course: "BSc Computer Science (Level 5)",
    groups: ["CS-I", "CS-J", "CS-K", "CS-L"],
    type: "Lecture",
  },
  {
    hallNumber: "3LB",
    building: "SP",
    moduleName: "Object Oriented Programming",
    time: "10.30-12.30",
    lecturer: "Mr. A. Smith",
    course: "BSc Computer Science (Level 5)",
    groups: ["CS-I", "CS-J", "CS-K", "CS-L"],
    type: "Tutorial",
  },
  {
    hallNumber: null,
    building: null,
    moduleName: "Nothing Scheduled",
    time: "13.30-15.30",
    lecturer: "Not Assigned",
    course: null,
    groups: null,
    type: null,
  },
  {
    hallNumber: "5LB",
    building: "SP",
    moduleName: "Object Oriented Programming",
    time: "08.30-10.30",
    lecturer: "Mr. A. Smith",
    course: "BSc Computer Science (Level 5)",
    groups: ["CS-I", "CS-J", "CS-K", "CS-L"],
    type: "Lecture",
  },
];

export default function MyTimetable() {
  const [selectedDate, setSelectedDate] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <div className="flex">
      <div className="bg-stone-200">
      <RedirectButton path="/weekly-timetble" text="Show Weekly"/>

      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: 5,
          width: "100%",
        }}
      >
        <div>
          <Calender onDateChange={handleDateChange}/>
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginTop: 1,
              width: "100%",
              backgroundColor: "#D9D9D9",
              color: "#000",
            }}
          >
            Search
          </Button>
        </div>

        <div>
          <Card
            sx={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              gap: 3,
              padding: 3,
              width: "auto",
              backgroundColor: "#D9D9D9",
              borderRadius: 5,
            }}
          >
            {timeSlotes.map((timeSlot, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    backgroundColor:
                      timeSlot.type !== null ? "#3E737A" : "#723E7A",
                    color: "#fff",
                    borderRadius: 5,
                    padding: 2,
                    justifyContent: "space-between",
                    width: "23rem",
                  }}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-xl">{timeSlot.time}</p>
                    <div>
                      <Button
                        sx={{
                          backgroundColor:
                            timeSlot.building !== null ? "#D9D9D9" : undefined,
                          color: "#000",
                        }}
                      >
                        {timeSlot.type}
                      </Button>
                    </div>
                  </div>

                  <p className="text-2xl mt-2.5 mb-1.5">
                    {timeSlot.moduleName}
                  </p>
                  <p className="text-xl mt-1.5 mb-1.5">{timeSlot.lecturer}</p>

                  <div className="flex justify-between items-center">
                    <p className="text-5xl">{timeSlot.hallNumber}</p>
                    <div className="flex justify-center items-center text-center text-black w-20 h-20 bg-gray-300 rounded-full relative">
                      <p className="flex items-center text-4xl font-semi-bold text-center">
                        {timeSlot.building}
                      </p>
                    </div>
                  </div>
                </Box>
              );
            })}
          </Card>
        </div>
      </Box>
    </div>
  );
}
