import React from "react";
import { useState } from "react";
import Calender from "./Calender";
import Time from "./Time";
import Location from "./Location";
import { Button, Card } from "@mui/material";
import HallList from "./HallList";
import Degree from "./Degree";
import Level from "./Level";
import Module from "./Modules";
import Type from "./Type";
import Group from "./Group";

export default function BasicGrid(props) {
  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  // const [selectedTime, setSelectedTime] = useState<Date | null>(null);

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

          <div
            style={{
              width: "320px",
            }}
          >
            <Time />
            <Location />
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

          <HallList color={"#3E737A"} />
        </Card>
      </section>
    </>
  );
}
