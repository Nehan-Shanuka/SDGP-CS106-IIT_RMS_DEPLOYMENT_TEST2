import React from 'react'
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Card } from '@mui/material';

export default function Calender() {

  const [selectedDate, setSelectedDate] = useState(null);

  console.log(selectedDate);

  return (
    <Card sx={{
        // width: '320px'
    }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker 
              orientation="portrait"
              renderInput={(params) => <input {...params} />}
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
            />
            
        </LocalizationProvider>
    </Card>
  )
}