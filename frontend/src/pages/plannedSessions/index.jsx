/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Button, Card } from "@mui/material";
import Calender from "../../components/Calender";
import ReservationHallList from "../../components/PlannedSessionHallList";
import Time from "../../components/TimeSlection";
import Location from "../../components/LocationSelection";
import Degree from "../../components/DegreeSelection";
import Level from "../../components/LevelSelection";
import Module from "../../components/ModuleSelection";
import Type from "../../components/TypeSelection";
import Group from "../../components/GroupSelection";
import axios from "axios";

export default function PlannedSessions() {
  const [reservations, setReservations] = useState([]);
  const [halls, setHalls] = useState([]);
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    const buildingID = "SP";
    const url = `http://localhost:5555/reservations?buildingID=${buildingID}`;
    axios
      .get(url)
      .then((response) => {
        setReservations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const buildingID = "All";
    const url = `http://localhost:5555/halls?buildingID=${buildingID}`;
    axios
      .get(url)
      .then((response) => {
        setHalls(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  const handleLocationChange = (locationName) => {
    console.log("Selected locations:", locationName);
    // Do something with locationName
  };

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
            <Location onLocationChange={handleLocationChange} />
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
          <ReservationHallList
            color={"#3E737A"}
            status={"Planned Sessions"}
            newcourses={reservations}
            newhalls={halls}
            newbuildings={buildings}
          />
        </Card>
      </section>
    </>
  );
}
