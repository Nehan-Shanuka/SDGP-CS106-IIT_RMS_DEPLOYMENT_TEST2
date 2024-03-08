/* eslint-disable no-unused-vars */
import { Button, Card } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ExpandableReviewReservation() {
  const [reservations, setReservations] = useState([]);
  const [confirmation] = useState(false);
  const [halls, setHalls] = useState([]);
  const [buildings, setBuildings] = useState([]);
  const [buildingID, setBuildingID] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5555/reservations?confirmation=${confirmation}`;
    axios
      .get(url)
      .then((response) => {
        setReservations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [confirmation]);

  useEffect(() => {
    const url = `http://localhost:5555/halls?buildingID=${buildingID}`;
    axios
      .get(url)
      .then((response) => {
        setHalls(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [buildingID]);

  useEffect(() => {
    axios
      .get("http://localhost:5555/buildings")
      .then((response) => {
        setBuildings(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleConfirmReservation = (id) => {
    axios
      .put(`http://localhost:5555/reservations/${id}`, { confirmation: true })
      .then((response) => {
        axios
          .get(
            `http://localhost:5555/reservations?confirmation=${confirmation}`
          )
          .then((response) => {
            setReservations(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDropReservation = (id) => {
    axios
      .delete(`http://localhost:5555/reservations/${id}`)
      .then((response) => {
        axios
          .get(
            `http://localhost:5555/reservations?confirmation=${confirmation}`
          )
          .then((response) => {
            setReservations(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            {reservations.map((reservation, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: "#3E737A",
                    // timeSlot.type !== null ? "#3E737A" : "#723E7A",
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
                          {halls.map((hall, index) => {
                            if (hall._id === reservation.hallID) {
                              return hall.hallID;
                            }
                          })}
                        </p>
                      </div>

                      <div className="relative ml-10">
                        <div>
                          <p className="text-xl mx-0">{reservation.date}</p>
                          <p className="my-1 mx-0">{reservation.time}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex pr-5 pl-10">
                      <div className="flex justify-center w-20 h-20 rounded-full bg-stone-200 text-black">
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

                  <div className="flex justify-between px-5 py-5">
                    <div className="bg-stone-200 px-3 py-1 rounded-3xl flex items-center">
                      <p className="text-xl text-black">
                        {reservation.lecturer}
                      </p>
                    </div>
                    <div className="">
                      <div className="bg-stone-200 px-3 py-1 rounded-3xl flex items-center">
                        <p className="text-xl text-black">{reservation.type}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between px-5">
                    <div className="bg-stone-200 rounded-2xl w-full mr-10">
                      <p className="text-black px-2">{reservation.subject}</p>
                      <p className="text-black px-2">{reservation.course}</p>
                      <p className="text-black px-2">
                        {reservation.tutorialGroups.join("/ ")}
                      </p>
                      <p className="text-black px-2">
                        {reservation.description}
                      </p>
                    </div>

                    <div className="grid pl-5">
                      <Button
                        onClick={() =>
                          handleConfirmReservation(reservation._id)
                        }
                        sx={{
                          backgroundColor: "#9DF06A",
                          border: 0.5,
                          borderColor: "#9DF06A",
                          color: "#000",
                          borderRadius: 5,
                          paddingTop: 1,
                          paddingBottom: 1,
                          paddingLeft: 3,
                          paddingRight: 3,

                          ":hover": {
                            backgroundColor: "#3E737A",
                            border: 0.5,
                            borderColor: "#9DF06A",
                            color: "#fff",
                          },
                        }}
                      >
                        Accept
                      </Button>
                      <Button
                        onClick={() => handleDropReservation(reservation._id)}
                        sx={{
                          backgroundColor: "#EF6666",
                          border: 0.5,
                          borderColor: "#EF6666",
                          color: "#000",
                          borderRadius: 5,
                          paddingTop: 1,
                          paddingBottom: 1,
                          paddingLeft: 2,
                          paddingRight: 2,
                          marginTop: 1,

                          ":hover": {
                            backgroundColor: "#3E737A",
                            border: 0.5,
                            borderColor: "#EF6666",
                            color: "#fff",
                          },
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
