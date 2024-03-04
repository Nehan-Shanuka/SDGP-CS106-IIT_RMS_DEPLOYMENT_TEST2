/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Button, Card } from "@mui/material";
import Calender from "../../components/Calender";
import Time from "../../components/TimeSlection";
import Location from "../../components/LocationSelection";
import HallList from "../../components/HallList";
import AvailableHallList from "../../components/AvailableHallList";
import axios from "axios";

export default function Reservation() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5555/halls")
    .then((response) => {
      setCourses(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5555/buildings")
    .then((response) => {
      setBuildings(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

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
            <Time />
            <Location />
            <Button
              variant="contained"
              color="primary"
              sx={{
                marginTop: 1,
                width: "100%",
                backgroundColor: "#D9D9D9",
                color: "#000",

                ":hover": {
                  backgroundColor: "#723E7A",
                  color: "#fff",
                },
              }}
            >
              Search
            </Button>
          </div>

          <AvailableHallList
            color={"#723E7A"}
            status={"Reservation"}
            newcourses={courses}
            newbuildings={buildings}
          />
        </Card>
      </section>
    </>
  );
}