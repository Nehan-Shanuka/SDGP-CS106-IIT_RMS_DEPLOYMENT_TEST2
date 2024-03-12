/* eslint-disable react/prop-types */
// import * as React from 'react';
import { useEffect, useState } from "react";

import { DateCalendar } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Calender({ onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    onDateChange(selectedDate);
  }, [selectedDate, onDateChange]);

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
