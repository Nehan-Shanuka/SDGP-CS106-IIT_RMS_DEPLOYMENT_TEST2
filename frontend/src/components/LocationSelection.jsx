/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  { shortForm: "SP", fullForm: "Spencer Building" },
  { shortForm: "GP", fullForm: "GP Square" },
  { shortForm: "JB", fullForm: "Java Building" },
  { shortForm: "DB", fullForm: "Dialog Building" },
  { shortForm: "RB", fullForm: "Ramakrishna Building" },
];

export default function MultipleSelectCheckmarks({ onLocationChange }) {
  const [locationName, setLocationName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setLocationName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  // console.log(locationName);

  useEffect(() => {
    onLocationChange(locationName);
  }, [locationName, onLocationChange]);

  return (
    <div>
      <FormControl sx={{ marginTop: 1, width: "100%" }}>
        <InputLabel id="demo-multiple-checkbox-label">
          Select Location
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={locationName}
          onChange={handleChange}
          input={<OutlinedInput label="Select Location" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name, index) => (
            <MenuItem key={index} value={name.shortForm}>
              <Checkbox checked={locationName.indexOf(name.shortForm) > -1} />
              <ListItemText primary={name.fullForm} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
