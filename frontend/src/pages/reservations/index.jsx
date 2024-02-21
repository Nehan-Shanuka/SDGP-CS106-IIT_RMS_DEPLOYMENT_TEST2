import { Button, Card } from "@mui/material";
import Calender from "../../components/Calender";
import Time from "../../components/TimeSlection";
import Location from "../../components/LocationSelection";
import HallList from "../../components/HallList";

const courses = [
  {
    hallNumber: "AUD",
    building: "GP",
    moduleName: "Object Oriented Programming",
    time: "08.30-10.30",
    projector_count: "2",
    whiteboard_availability: true,
    mic_speacker: false,
    type: "Lecture",
  },
  {
    hallNumber: "1LB",
    building: "JB",
    moduleName: "Object Oriented Programming",
    time: "08.30-10.30",
    projector_count: "2",
    whiteboard_availability: false,
    mic_speacker: false,
    type: "Lecture",
  },
  {
    hallNumber: "5LB",
    building: "GP",
    moduleName: "Object Oriented Programming",
    time: "08.30-10.30",
    projector_count: "2",
    whiteboard_availability: false,
    mic_speacker: true,
    type: "Lecture",
  },
  {
    hallNumber: "4LC",
    building: "JB",
    moduleName: "Object Oriented Programming",
    time: "08.30-10.30",
    projector_count: "2",
    whiteboard_availability: true,
    mic_speacker: false,
    type: "Lecture",
  },
  {
    hallNumber: "7LB",
    building: "SP",
    moduleName: "Object Oriented Programming",
    time: "08.30-10.30",
    projector_count: "2",
    whiteboard_availability: false,
    mic_speacker: true,
    type: "Lecture",
  },
];

export default function Reservation() {
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