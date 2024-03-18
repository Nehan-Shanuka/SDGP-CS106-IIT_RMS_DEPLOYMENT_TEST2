import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ values, labels, onSelect }) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    const selectedValue = event.target.value; // Store the selected value
    setAge(selectedValue); // Update age state with the selected value
    onSelect(selectedValue); // Call the onSelect callback with the selected value
  };

  return (
    <Box sx={{ maxWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Group </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {values.map((value, index) => (
            <MenuItem key={value} value={value}>
              {labels[index]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
