/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import * as React from 'react';
import { useEffect, useState } from "react";

import { DateCalendar } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { set } from "mongoose";
import dayjs from "dayjs";

export default function Calender({ onDateChange, onDayChange }) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState();
  const [day, setDay] = useState(daysOfWeek[today.getDay()]);

  // console.log(day);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const newDay = new Date(date);
    const dayName = daysOfWeek[newDay.getDay()];
    setDay(dayName);
  };

  useEffect(() => {
    onDateChange(selectedDate);
    onDayChange(day);
  }, [selectedDate, day, onDateChange, onDayChange]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DateCalendar", "DateCalendar", "DateCalendar"]}
      >
        <DemoItem>
          <DateCalendar
            value={selectedDate}
            onChange={handleDateChange}
            sx={{
              border: "1px solid #D9D9D9",
              borderRadius: 2,
              ":hover": {
                border: "1px solid black",
              },
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
