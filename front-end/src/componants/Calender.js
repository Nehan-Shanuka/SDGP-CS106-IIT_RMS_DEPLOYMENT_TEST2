import React from 'react'
import { useState, useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Card } from '@mui/material';

import '../componants_styles/Calender.css'
// import { Home } from './NavBar';
// import { navBarStatus } from './NavBar';

export default function Calender() {

    // const [responsive, setResponsive] = useState(navBarStatus());
    const [selectedDate, setSelectedDate] = useState(null);
  
    // useEffect(() => {
    //   const handleResponsiveChange = () => {
    //     setResponsive(navBarStatus());
    //   };
  
    //   window.addEventListener('resize', handleResponsiveChange);
    //   return () => {
    //     window.removeEventListener('resize', handleResponsiveChange);
    //   };
    // }, []);

  return (
    <>
        {/* {!responsive ?  */}

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
            <StaticDatePicker sx={{
                '.MuiPickersToolbar-root': {
                    visibility: 'hidden',
                    height: '0px'
                }
            }}
              orientation="portrait"
              renderInput={(params) => <input {...params} />}
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
            />
            
        </LocalizationProvider>
    </Card>
        
        {/* : null} */}
    </>
    
  )
}