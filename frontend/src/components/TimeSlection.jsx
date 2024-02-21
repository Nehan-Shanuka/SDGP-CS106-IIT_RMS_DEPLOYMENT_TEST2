import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Card } from '@mui/material';

export default function Calender() {

  const [selectedTime, setSelectedTime] = useState(null);

  console.log(selectedTime);

  return (
    <Card sx={{
        marginTop: 1
    }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
                label="Select Time"
                value={selectedTime}
                onChange={(newValue) => setSelectedTime(newValue)}

                sx={{
                    width: '100%'
                }}
            />
        </LocalizationProvider>
    </Card>
  )
}