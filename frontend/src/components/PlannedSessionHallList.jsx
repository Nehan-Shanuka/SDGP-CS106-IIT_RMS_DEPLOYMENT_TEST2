/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";
import { Button } from "@mui/material";

const Item = styled(Paper)(({ color }) => ({
  backgroundColor: color,
  color: "#fff",
  width: "98%",
  marginBottom: 5,
  marginTop: 5,
  borderRadius: 15,
}));

export default function ReservationHallList({
  color,
  isSidebarOpen,
  newcourses,
  newhalls,
  newbuildings,
}) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const reservations = newcourses;
  const halls = newhalls;
  const buildings = newbuildings;

  return (
    <Card
      sx={{
        width: isSidebarOpen ? "55%" : "50%",
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
          {reservations.map((reservation, index) => (
            (reservation.confirmation === true) ? (
            <Item
              sx={{
                height: hoveredItem === index ? "200px" : "115px", // Enlarged height when hovered
                width: hoveredItem === index ? "100%" : "97%", // Enlarged width when hovered

                transition: "height 0.5s ease-in-out", // Smooth transition effect
                display: "flex",
                flexWrap: "wrap",
                gap: 0,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
              key={index}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              color={color}
            >
              <div
                className="flex justify-between items-center"
                style={{
                  width: hoveredItem === index ? "95%" : "100%",
                  paddingTop: hoveredItem === index ? "0" : "0",
                  height: hoveredItem === index ? "auto" : "auto",
                }}
              >
                <div className="flex">
                  <div className="w-28 item-center">
                    <p className="pl-5 text-5xl">
                      {halls.map((hall, index) => {
                        if (hall._id === reservation.hallID) {
                          return hall.hallID;
                        }
                      })}
                    </p>
                  </div>

                  <div className="relative ml-10">
                    <div>
                      <p className="text-xl my-2 mx-0">{reservation.subject}</p>
                      <p className="my-1 mx-0">{reservation.time}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center w-36">
                  <div className="flex justify-center w-20 h-20 rounded-full bg-[#D9D9D9] text-black">
                    <p className="flex justify-center items-center text-4xl">
                      {halls.map((hall, index) => {
                        if (hall._id === reservation.hallID) {
                          return buildings.map((building, index) => {
                            if (building._id === hall.buildingID) {
                              return building.buildingID;
                            }
                          });
                        }
                      })}
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
                  <div
                    className="flex flex-col pl-5"
                    style={{
                      transition: "height 0.5s ease-in-out",
                    }}
                  >
                    <p className="m-1">Conducted By: {reservation.lecturer}</p>
                    <p className="m-1">Course: {reservation.course}</p>
                    <p className="m-1">
                      Groups: {reservation.tutorialGroups.join(" | ")}
                    </p>
                  </div>
                </div>
                <Button
                  className="w-36"
                  style={{
                    backgroundColor:
                      hoveredItem === index ? "#D9D9D9" : "#3E737A",
                    marginRight: 30,
                    color: "#000",
                  }}
                >
                  {reservation.type}
                </Button>
              </div>
            </Item>
            ) : null
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
