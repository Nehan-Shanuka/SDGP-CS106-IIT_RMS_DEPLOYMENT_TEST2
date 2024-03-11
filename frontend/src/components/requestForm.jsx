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
import axios from "axios";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function RequestForm({
  onRegistationFormChange,
  hall,
  buildings,
  dateSelected,
}) {
  const [registationForm, setRegistationForm] = useState(false);
  const [checked, setChecked] = useState([false, false, false, false]);
  const [disabled, setDisabled] = useState([false, false, false, false]);
  const [radioValue, setRadioValue] = useState();

  // const date = dateSelected;

  // console.log("dateSelected ", date);

  const hallID = hall._id;

  const year = dateSelected.$y;
  const month = dateSelected.$M;
  const day = dateSelected.$D;

  const newDate = new Date(Date.UTC(year, month, day));

  const newNewDate = newDate.getFullYear() + "-" +  "0" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
  
  // console.log("convertedDate ",newNewDate);

  useEffect(() => {
    const handleCheckBoxes = () => {
      let dateNotFounded = true;
      hall.plannedSessions.forEach((plannedSession) => {
        const plannedSessionDate = new Date(plannedSession.date);
        const formatedDate = plannedSessionDate.getFullYear() + "-" +  "0" + (plannedSessionDate.getMonth() + 1) + "-" + plannedSessionDate.getDate();
        console.log("plannedSession.date", formatedDate);
        console.log("newNewDate", newNewDate);
        if (formatedDate === newNewDate) {
          dateNotFounded = false;
          setDisabled([
            plannedSession.reservations.time_01 === null ? false : true,
            plannedSession.reservations.time_02 === null ? false : true,
            plannedSession.reservations.time_03 === null ? false : true,
            plannedSession.reservations.time_04 === null ? false : true,
          ],
          // console.log("disabled", disabled)
          );
        }
      });
      if (dateNotFounded) {
        setDisabled([false, false, false, false]);
      }
    };

    if (dateSelected) {
      handleCheckBoxes();
    }
  }, [dateSelected, disabled, hall.plannedSessions, newNewDate]);

  const handleRequest = async () => {
      axios.post(
        `http://localhost:5555/reservations/${hallID}`,
        {
          date: newNewDate,
          time: checked[0]
            ? "08.30 - 10.30"
            : checked[1]
            ? "10.30 - 12.30"
            : checked[2]
            ? "13.30 - 15.30"
            : "15.30 - 17.30",
          subject: "OOP",
          lecturer: "Mr. Cassim",
          type: radioValue,
          confirmation: false,
          description: "Urgent",
        }
      )
  .then((response) => {
      alert("Reservation added successfully!")
    })
    .catch ((error) => {
      console.log(error);
    })
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleChange1 = (event) => {
    setChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
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
      {/* {handleCheckBoxes()} */}
      <div>
        <div className="flex justify-between items-center">
          <div className="w-1/4">
            <p className="pl-5 text-5xl">{hall.hallID}</p>
          </div>

          <div>
            <div>
              <p className="text-xl">Date: {newNewDate}</p>
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

        {/* <div
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
                {hall.whiteboardAvailability ? "Available" : "Not Available"}
              </p>
              <p>
                Mic & Speaker:{" "}
                {hall.micAndSpeacker ? "Available" : "Not Available"}
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse w-60 pr-5">
            <p>Date: {newNewDate}</p>
          </div>
        </div> */}
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
                  disabled={true}
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
            <RadioGroup value={radioValue} onChange={handleRadioChange}>
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
        <TextField
          sx={{
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
            onClick={handleRequest}
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
