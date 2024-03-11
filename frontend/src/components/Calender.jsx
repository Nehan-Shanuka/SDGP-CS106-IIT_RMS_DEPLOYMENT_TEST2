/* eslint-disable react/prop-types */
// import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export default function Calender({ onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(null);

  // console.log(selectedDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  useEffect(() => {
    onDateChange(selectedDate);
  }, [selectedDate, onDateChange]);

  console.log("CalanderDate" ,selectedDate);

  return (
    <Card 
    sx={{
      "& .MuiPickersToolbar-root": {
        paddingTop: 0,
        paddingBottom: 0,
      },

      "& .MuiDialogActions-root": {
        paddingTop: 0,
        paddingBottom: 0,
      },

      "& .MuiPickersSlideTransition-root": {
        minHeight: "200px",
      },

      "& .MuiDateCalendar-root": {
        height: "294px",
      },
    }}
    >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker orientation="portrait" 
      sx={{
        ".MuiPickersToolbar-root": {
          visibility: "hidden",
          height: "0px",
        },
      }}
      
      renderInput={(params) => <input {...params} />}
      value={selectedDate}
      onChange={handleDateChange}
      />
    </LocalizationProvider>
    </Card>
    
  );
}