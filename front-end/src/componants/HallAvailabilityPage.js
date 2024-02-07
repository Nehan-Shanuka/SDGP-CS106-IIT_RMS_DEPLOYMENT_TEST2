import React from 'react';
// import { useState } from 'react';
import Calender from './Calender';
import Time from './Time';
import Location from './Location';
import { Button, Card } from '@mui/material';
import HallList from './HallList';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function BasicGrid() {

  // const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  // const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  return (
    <>
      <Card sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 3,
      }}>
        <div>
          <Calender />
          <Time />
          <Location />
          <Button variant="contained" color="primary" sx={{ marginTop: 2, width: '100%' }}>Search</Button>
        </div>
        
        <HallList />
      </Card>
    </>
  );
}