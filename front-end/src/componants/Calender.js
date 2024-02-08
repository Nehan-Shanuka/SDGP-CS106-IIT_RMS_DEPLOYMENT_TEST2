import React from 'react'
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Card } from '@mui/material';

import '../componants_styles/Calender.css'

export default function Calender() {

  const [selectedDate, setSelectedDate] = useState(null);

  console.log(selectedDate);

  return (
    <Card className='test' sx={{
        // width: '320px'
        '& .MuiPickersToolbar-root': {
            paddingTop: 0,
            paddingBottom: 0,
        },

        '& .MuiDialogActions-root': {
            paddingTop: 0,
            paddingBottom: 0,
        },

        '& .MuiPickersSlideTransition-root': {
            minHeight: '200px'
        },

        '& .MuiDateCalendar-root': {
            height: '294px'
        }
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