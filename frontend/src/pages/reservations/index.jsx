import { useState, useEffect } from "react";
import { Button, Card } from "@mui/material";
import Calender from "../../components/Calender";
import Time from "../../components/TimeSlection";
import Location from "../../components/LocationSelection";
import HallList from "../../components/HallList";
import axios from "axios";

export default function Reservation() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5555/courses")
    .then((response) => {
      setCourses(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  console.log(courses);

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

          <HallList
            color={"#723E7A"}
            status={"Reservation"}
            newcourses={courses}
          />
        </Card>
      </section>
    </>
  );
}