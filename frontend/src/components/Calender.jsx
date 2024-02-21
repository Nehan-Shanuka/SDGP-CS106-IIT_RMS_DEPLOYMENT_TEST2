// import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export default function Calender() {
  const [selectedDate, setSelectedDate] = useState(null);

  console.log(selectedDate);

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
      onChange={(newValue) => setSelectedDate(newValue)}
      />
    </LocalizationProvider>
    </Card>
    
  );
}