import React from 'react'
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Card } from '@mui/material';

export default function Calender() {

  const [selectedTime, setSelectedTime] = useState(null);

  console.log(selectedTime);

  return (
    <Card sx={{
        // width: '320px'
        marginTop: 2
    }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker', 'TimePicker']} 
                sx={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginBottom: 1
                }}
            >
                {/* <TimePicker
                    label="Uncontrolled picker"
                    defaultValue={dayjs('2022-04-17T15:30')}
                /> */}
                <TimePicker
                    label="Controlled picker"
                    value={selectedTime}
                    onChange={(newValue) => setSelectedTime(newValue)}
                />
            </DemoContainer>
        </LocalizationProvider>
    </Card>
  )
}