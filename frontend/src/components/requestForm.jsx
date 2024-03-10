/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Button,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function RequestForm({ onRegistationFormChange, hall, buildings}) {
  const [registationForm, setRegistationForm] = useState(false);
  const [checked, setChecked] = useState([false, false, false, false]);
  const [disabled, setDisabled] = useState([false, false, true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked, event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1], checked[2], checked[3]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked, checked[2], checked[3]]);
  };

  const handleChange4 = (event) => {
    setChecked([checked[0], checked[1], event.target.checked, checked[3]]);
  };

  const handleChange5 = (event) => {
    setChecked([checked[0], checked[1], checked[2], event.target.checked]);
  };

  useEffect(
    (changedRegistationForm) => {
      setRegistationForm(changedRegistationForm);
    },
    [registationForm],
    onRegistationFormChange
  );

  return (
    <Box
      sx={{
        backgroundColor: "#723E7A",
        borderRadius: 5,
        height: "100%",
        color: "#fff",
        padding: 1 * 3,
      }}
    >
      <div>
        <div className="flex justify-between items-center">
          <div className="w-1/4">
            <p className="pl-5 text-5xl">{hall.hallID}</p>
          </div>

          <div>
            <div>
              <p className="text-xl">Capacity: {hall.capacity}</p>
            </div>
          </div>

          <div className="flex flex-row-reverse items-center w-36 pr-5">
            <div className="flex justify-center w-16 h-16 rounded-full bg-stone-200 text-black">
              <p className="flex justify-center items-center text-4xl">
                {
                  buildings.find((building) => building._id === hall.buildingID)
                    .buildingID
                }
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gridTemplateColumns: "auto auto",
            width: "100%",
            padding: 0 * 5,
          }}
        >
          <div className="flex justify-between w-full">
            <div className="flex flex-col mx-3">
              <p>Projectors: {hall.projectorCount}</p>
              <p>
                Whiteboard:{" "}
                {hall.whiteboardAvailability
                          ? "Available"
                          : "Not Available"}
              </p>
              <p>
                Mic & Speaker:{" "}
                {hall.micAndSpeacker ? "Available" : "Not Available"}
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse w-60 pr-5">
            <p>Date: 15/ 03/ 2024</p>
          </div>
        </div>
      </div>

      <hr className="w-full bg-white my-4 h-0.5" />

      <div className="flex justify-between">
        <div className="flex flex-col">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                  checked={checked[0] && checked[1] && checked[2] && checked[3]}
                  onChange={handleChange1}
                  {...label}
                />
              }
              label="All Day"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                  checked={checked[0]}
                  onChange={handleChange2}
                  disabled={disabled[0]}
                  {...label}
                />
              }
              label="08.30 AM - 10.30 AM"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                  checked={checked[1]}
                  onChange={handleChange3}
                  disabled={disabled[1]}
                  {...label}
                />
              }
              label="10.30 AM - 12.30 PM"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                  checked={checked[2]}
                  onChange={handleChange4}
                  disabled={disabled[2]}
                  {...label}
                />
              }
              label="13.30 PM - 03.30 PM"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                  checked={checked[3]}
                  onChange={handleChange5}
                  disabled={disabled[3]}
                  {...label}
                />
              }
              label="03.30 PM - 05.30 PM"
            />
          </FormGroup>
        </div>

        <div className="flex flex-col">
          <FormGroup>
            <RadioGroup>
              <FormControlLabel
                value={"Rescheduled Lecture"}
                control={
                  <Radio
                    sx={{
                      color: "#fff",
                      "&.Mui-checked": {
                        color: "#fff",
                      },
                    }}
                  />
                }
                label="Rescheduled Lecture"
              />
              <FormControlLabel
                value={"Rescheduled Tutorial"}
                control={
                  <Radio
                    sx={{
                      color: "#fff",
                      "&.Mui-checked": {
                        color: "#fff",
                      },
                    }}
                  />
                }
                label="Rescheduled Tutorial"
              />
              <FormControlLabel
                value={"Examination"}
                control={
                  <Radio
                    sx={{
                      color: "#fff",
                      "&.Mui-checked": {
                        color: "#fff",
                      },
                    }}
                  />
                }
                label="Examination"
              />
              <FormControlLabel
                value={"Viva"}
                control={
                  <Radio
                    sx={{
                      color: "#fff",
                      "&.Mui-checked": {
                        color: "#fff",
                      },
                    }}
                  />
                }
                label="Viva"
              />
              <FormControlLabel
                value={"Other"}
                control={
                  <Radio
                    sx={{
                      color: "#fff",
                      "&.Mui-checked": {
                        color: "#fff",
                      },
                    }}
                  />
                }
                label="Other"
              />
            </RadioGroup>
          </FormGroup>
        </div>
      </div>

      <div className="w-full bg-stone-200 rounded my-5">
        <TextField sx={{
          width: "100%",
          borderRadius: 10,
        }}
        label="Brief Description"
        color="success"
        variant="filled"
        /> 
      </div>

      <div className="grid justify-items-center">
        <div className="flex justify-between w-9/12">
          <Button
            style={{
              backgroundColor: "#D9D9D9",
              color: "#000",
              width: "150px",
              alignItems: "center",
              borderRadius: 25,
            }}
            onClick={() => {
              onRegistationFormChange(false);
            }}
          >
            <h5
              style={{
                margin: 0,
              }}
            >
              Back to Options
            </h5>
          </Button>

          <Button
            style={{
              backgroundColor: "#D9D9D9",
              color: "#000",
              width: "150px",
              alignItems: "center",
              borderRadius: 25,
            }}
            // onClick={() => {
            //   onRegistationFormChange(false);
            // }}
          >
            <h5
              style={{
                margin: 0,
              }}
            >
              Request Here
            </h5>
          </Button>
        </div>
      </div>
    </Box>
  );
}
