/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";
import { Button } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import RequestForm from "./requestForm";

const Item = styled(Paper)(({ color }) => ({
  backgroundColor: color,
  color: "#fff",
  width: "98%",
  marginBottom: 5,
  marginTop: 5,
  borderRadius: 15,
}));

export default function AvailableHallList({ color, halls, buildings, dateSelected, day, isSidebarOpen }) {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [registationForm, setRegistationForm] = useState(false);

  const handleChangedRegistationForm = (changedRegistationForm) => {
    setRegistationForm(changedRegistationForm);
  };

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
            height: "79.5vh",
            "&::-webkit-scrollbar": {
              display: "none", // Hide scrollbar for Chrome
            },
          }}
        >
          {registationForm === false ? (
            halls.map((hall, index) => (
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
                  <div className="w-1/4">
                    <p className="pl-5 text-5xl">{hall.hallID}</p>
                  </div>

                  <div>
                    <div>
                      <p className="text-xl my-2 mx-0">
                        Capacity: {hall.capacity}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center w-36">
                    <div className="flex justify-center w-20 h-20 rounded-full bg-[#D9D9D9] text-black">
                      <p className="flex justify-center items-center text-4xl">
                        {buildings.map((building, index) => {
                          if (building._id === hall.buildingID) {
                            return building.buildingID;
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
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingLeft: 30,
                        transition: "height 0.5s ease-in-out",
                      }}
                    >
                      <p className="m-1">Projectors: {hall.projectorCount}</p>
                      <p className="m-1">
                        Whiteboard:{" "}
                        {hall.whiteboardAvailability
                          ? "Available"
                          : "Not Available"}
                      </p>
                      <p className="m-1">
                        Mic & Speaker:{" "}
                        {hall.micAndSpeacker ? "Available" : "Not Available"}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: 30,
                    }}
                  >
                    <Button
                      onClick={() => setRegistationForm(true)}
                      style={{
                        backgroundColor:
                          hoveredItem === index ? "#D9D9D9" : "#723E7A",
                        color: "#000",
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
                    <NavigationIcon
                      sx={{ transform: "rotate(90deg)", color: "#D9D9D9" }}
                    />
                  </div>
                </div>
              </Item>
            ))
          ) : dateSelected === null || dateSelected === undefined ? (
            (alert("Please select a date"), handleChangedRegistationForm(false))
          ) : (
            // (console.log("Date Selected", dateSelected)),
            <div className="w-full h-full">
              <RequestForm
                onRegistationFormChange={handleChangedRegistationForm}
                hall={halls[hoveredItem]}
                buildings={buildings}
                dateSelected={dateSelected}
                dayFromCalender={day}
              />
            </div>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
