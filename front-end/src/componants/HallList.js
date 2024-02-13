import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";
import { Button } from "@mui/material";
import { Label } from "@mui/icons-material";
import NavigationIcon from "@mui/icons-material/Navigation";

const Item = styled(Paper)(({ theme, color }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : color,
  color: "#fff",
  width: "98%",
  marginBottom: 5,
  marginTop: 5,
  borderRadius: 15,
}));

export default function HallList({ color, status, newcourses }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const courses = newcourses;

  return (
    <Card
      sx={{
        width: "45%",
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            overflowY: "auto",
            scrollBehavior: "smooth",
            maxHeight: "79.5vh",
            "&::-webkit-scrollbar": {
              display: "none", // Hide scrollbar for Chrome
            },
          }}
        >
          {courses.map((course, index) => (
            <Item
              sx={{
                height: hoveredItem === index ? "200px" : "115px", // Enlarged height when hovered
                width: hoveredItem === index ? "100%" : "97%", // Enlarged width when hovered

                transition: "height 0.5s ease-in-out", // Smooth transition effect
                display: "flex",
                flexWrap: "wrap",
                gap: 0,
                justifyContent: "center",
                alignItems: "center",
              }}
              key={index}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              color={color}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gridTemplateColumns: "auto auto auto",
                  width: hoveredItem === index ? "95%" : "100%",
                  paddingTop: hoveredItem === index ? "0" : "0",
                  height: hoveredItem === index ? "auto" : "auto",
                }}
              >
                <div>
                  <h1
                    style={{
                      paddingLeft: 20,
                      fontSize: "40px",
                    }}
                  >
                    {course.hallNumber}
                  </h1>
                </div>

                <div>
                  <div style={{}}>
                    <p style={{ fontSize: "20px", margin: "20 0" }}>
                      {course.moduleName}
                    </p>
                    <p style={{ margin: "20 0" }}>{course.time}</p>
                  </div>
                </div>

                <div
                  style={{
                    width: "150px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
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
                      {course.building}
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gridTemplateColumns: "auto auto",
                  width: "100%",
                  visibility: hoveredItem === index ? "visible" : "hidden",
                  height: hoveredItem === index ? "auto" : "0",
                  transition: "height 1.5s ease-in-out",

                  paddingBottom: hoveredItem === index ? "10px" : "0",
                }}
              >
                <div>
                  {status === "Planned Sessions" ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingLeft: 30,
                        transition: "height 0.5s ease-in-out",
                      }}
                    >
                      <p style={{ margin: 2 }}>
                        Conducted By: {course.lecturer}
                      </p>
                      <p style={{ margin: 2 }}>Course: {course.course}</p>
                      <p style={{ margin: 2 }}>
                        Groups: {course.groups.join(" | ")}
                      </p>
                    </div>
                  ) : status === "Reservation" ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingLeft: 30,
                        transition: "height 0.5s ease-in-out",
                      }}
                    >
                      <p style={{ margin: 2 }}>
                        Projectors: {course.projector_count}
                      </p>
                      <p style={{ margin: 2 }}>
                        Whiteboard:{" "}
                        {course.whiteboard_availability
                          ? "Availability"
                          : "Not Available"}
                      </p>
                      <p style={{ margin: 2 }}>
                        Mic:{" "}
                        {course.mic_speacker ? "Available" : "Not Available"}
                      </p>
                    </div>
                  ) : null}
                </div>

                {status === "Planned Sessions" ? (
                  <Button
                    style={{
                      backgroundColor:
                        hoveredItem === index ? "#D9D9D9" : "#3E737A",
                      color: "#000",
                      marginRight: 30,
                      width: "180px",
                    }}
                  >
                    <h4
                      style={{
                        margin: 0,
                      }}
                    >
                      {course.type}
                    </h4>
                  </Button>
                ) : status === "Reservation" ? (
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <Button
                      style={{
                        backgroundColor:
                          hoveredItem === index ? "#D9D9D9" : "#723E7A",
                        color: "#000",
                        marginRight: 30,
                        width: "150px",
                        alignItems: "center",
                        borderRadius: 25,
                      }}
                    >
                      <h5
                        style={{
                          margin: 0,
                        }}
                      >
                        Request Here
                      </h5>
                    </Button>
                      <NavigationIcon sx={{ transform: "rotate(90deg)" }} />
                  </div>
                ) : null}
              </div>
            </Item>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

// Function to handle button click
const handleButtonClick = (course) => {
  // Add your logic here
};
