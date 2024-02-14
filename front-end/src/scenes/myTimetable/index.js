import React from "react";
import Calender from "../../componants/Calender";
import { Button, Card, CardContent } from "@mui/material";
import { Box } from "@mui/system";

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

export default function index() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: 5,
      }}
    >
      <div>
        <Calender />
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
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3>{timeSlot.time}</h3>
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

                <h2 style={{ marginTop: 5, marginBottom: 5 }}>
                  {timeSlot.moduleName}
                </h2>
                <h3 style={{ marginTop: 5, marginBottom: 5 }}>
                  {timeSlot.lecturer}
                </h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h1 style={{ fontSize: 40 }}>{timeSlot.hallNumber}</h1>
                  <div
                    style={{
                      position: "relative",
                      width: "80px",
                      height: "80px",
                      textAlign: "center",
                      borderRadius: "50%",
                      backgroundColor: "#D9D9D9",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#000",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "40px",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
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
  );
}