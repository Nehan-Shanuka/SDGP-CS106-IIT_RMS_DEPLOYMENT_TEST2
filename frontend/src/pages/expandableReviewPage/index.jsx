/* eslint-disable no-unused-vars */
import { Button, Card } from "@mui/material";
import { Box } from "@mui/system";

const timeSlotes = [
  {
    hallNumber: "7LA",
    building: "SP",
    moduleName: "Object Oriented Programming",
    day: "Monday - 18/03/2024",
    time: "08.30-10.30",
    lecturer: "Mr. A. Smith",
    course: "BSc Computer Science (Level 5)",
    groups: ["CS-I", "CS-J", "CS-K", "CS-L"],
    type: "Lecture",
    description: "L5 | CS07, OOP | Week 8 Lecture",
  },
  {
    hallNumber: "3LB",
    building: "SP",
    moduleName: "Object Oriented Programming",
    day: "Monday - 18/03/2024",
    time: "10.30-12.30",
    lecturer: "Mr. A. Smith",
    course: "BSc Computer Science (Level 5)",
    groups: ["CS-I", "CS-J", "CS-K", "CS-L"],
    type: "Tutorial",
    description: "L5 | CS07, OOP | Week 8 Lecture",
  },
  {
    hallNumber: "3LB",
    building: "SP",
    moduleName: "Object Oriented Programming",
    day: "Monday - 18/03/2024",
    time: "10.30-12.30",
    lecturer: "Mr. A. Smith",
    course: "BSc Computer Science (Level 5)",
    groups: ["CS-I", "CS-J", "CS-K", "CS-L"],
    type: "Tutorial",
    description: "L5 | CS07, OOP | Week 8 Lecture",
  },
  {
    hallNumber: "5LB",
    building: "SP",
    moduleName: "Object Oriented Programming",
    day: "Monday - 18/03/2024",
    time: "08.30-10.30",
    lecturer: "Mr. A. Smith",
    course: "BSc Computer Science (Level 5)",
    groups: ["CS-I", "CS-J", "CS-K", "CS-L"],
    type: "Lecture",
    description: "L5 | CS07, OOP | Week 8 Lecture",
  },
  {
    hallNumber: "5LB",
    building: "SP",
    moduleName: "Object Oriented Programming",
    day: "Monday - 18/03/2024",
    time: "08.30-10.30",
    lecturer: "Mr. A. Smith",
    course: "BSc Computer Science (Level 5)",
    groups: ["CS-I", "CS-J", "CS-K", "CS-L"],
    type: "Lecture",
    description: "L5 | CS07, OOP | Week 8 Lecture",
  },
  {
    hallNumber: "5LB",
    building: "SP",
    moduleName: "Object Oriented Programming",
    day: "Monday - 18/03/2024",
    time: "08.30-10.30",
    lecturer: "Mr. A. Smith",
    course: "BSc Computer Science (Level 5)",
    groups: ["CS-I", "CS-J", "CS-K", "CS-L"],
    type: "Lecture",
    description: "L5 | CS07, OOP | Week 8 Lecture",
  },
  {
    hallNumber: "5LB",
    building: "SP",
    moduleName: "Object Oriented Programming",
    day: "Monday - 18/03/2024",
    time: "08.30-10.30",
    lecturer: "Mr. A. Smith",
    course: "BSc Computer Science (Level 5)",
    groups: ["CS-I", "CS-J", "CS-K", "CS-L"],
    type: "Lecture",
    description: "L5 | CS07, OOP | Week 8 Lecture",
  },
  {
    hallNumber: "5LB",
    building: "SP",
    moduleName: "Object Oriented Programming",
    day: "Monday - 18/03/2024",
    time: "08.30-10.30",
    lecturer: "Mr. A. Smith",
    course: "BSc Computer Science (Level 5)",
    groups: ["CS-I", "CS-J", "CS-K", "CS-L"],
    type: "Lecture",
    description: "L5 | CS07, OOP | Week 8 Lecture",
  },
];

export default function ExpandableReviewReservation() {
  return (
    <div className="w-full flex justify-center item-center">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            overflowY: "auto",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": {
              display: "none", // Hide scrollbar for Chrome
            },
          }}
        >
          <Card
            sx={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              gap: 3,
              padding: 3,
              backgroundColor: "#D9D9D9",
              maxHeight: "85vh",
              borderRadius: 5,
              overflowY: "auto",
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": {
                display: "none", // Hide scrollbar for Chrome
              },
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
                  }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <div className="w-28 item-center">
                        <p className="pl-5 text-5xl text-center">
                          {timeSlot.hallNumber}
                        </p>
                      </div>

                      <div className="relative ml-10">
                        <div>
                          <p className="text-xl mx-0">{timeSlot.day}</p>
                          <p className="my-1 mx-0">{timeSlot.time}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex pr-5 pl-10">
                      <div className="flex justify-center w-20 h-20 rounded-full bg-stone-200 text-black">
                        <p className="flex justify-center items-center text-4xl">
                          {timeSlot.building}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between px-5 py-5">
                    <div className="bg-stone-200 px-3 py-1 rounded-3xl flex items-center">
                      <p className="text-xl text-black">{timeSlot.lecturer}</p>
                    </div>
                    <div className="">
                      <div className="bg-stone-200 px-3 py-1 rounded-3xl flex items-center">
                        <p className="text-xl text-black">{timeSlot.type}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between px-5">
                    <div className="bg-stone-200 rounded-2xl">
                      <p className="text-black px-2">{timeSlot.description}</p>
                    </div>

                    <div className="grid">
                      <Button
                        sx={{
                          backgroundColor: "#9DF06A",
                          color: "#000",
                          borderRadius: 5,
                          paddingTop: 1,
                          paddingBottom: 1,
                          paddingLeft: 2,
                          paddingRight: 2,
                        }}
                      >
                        Accept
                      </Button>
                      <Button
                        sx={{
                          backgroundColor: "#EF6666",
                          color: "#000",
                          borderRadius: 5,
                          paddingTop: 1,
                          paddingBottom: 1,
                          paddingLeft: 2,
                          paddingRight: 2,
                          marginTop: 1,
                        }}
                      >
                        Decline
                      </Button>
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
