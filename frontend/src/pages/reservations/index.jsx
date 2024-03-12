/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Card } from "@mui/material";
import Calender from "../../components/Calender";
import Location from "../../components/LocationSelection";
import AvailableHallList from "../../components/AvailableHallList";
import axios from "axios";

export default function Reservation() {
  const [halls, setHalls] = useState([]);
  const [buildings, setBuildings] = useState([]);
  const [buildingID, setBuildingID] = useState([]);
  const [selectedDate, setSelectedDate] = useState();

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

  const handleLocationChange = (locationName) => {
    setBuildingID(locationName);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
            width: "100%",
          }}
        >
          <div>
            <Calender onDateChange={handleDateChange} />
            <Location onLocationChange={handleLocationChange} />
          </div>

          <AvailableHallList
            color={"#723E7A"}
            status={"Reservation"}
            halls={halls}
            buildings={buildings}
            dateSelected={selectedDate}
          />
        </Card>
      </section>
    </>
  );
}
