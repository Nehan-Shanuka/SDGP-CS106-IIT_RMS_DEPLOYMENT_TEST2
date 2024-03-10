import React from "react";
import { Button } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';

const CoverStyle = {
  marginRight: '2%',
  border: "15px solid #d9d9d9",
  borderRadius: "10px",
  height: "100%",
  width: "700px",
  float: "right",
};

const ContainerStyle = {
  backgroundColor: '#723e7a',
  color:'white',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',

};
const BackStyle = {
  backgroundColor: '#723e7a',
  padding: '3%',
  borderRadius:'1%',
};

export default function Reservation() {
  return (
    <div>
      <div style={CoverStyle}>
      <div style={BackStyle}>
          <div style={ContainerStyle}>
            <div style={{fontSize:'50px'}}>5LB</div>
            <div>CAPACITY: 45</div>
            <Stack style={{ marginLeft: '100px', paddingTop: '10px' }} direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: deepPurple[200] }}>GP</Avatar>
            </Stack>
          </div>
          <div style={ContainerStyle}>
            <div>Projectors:2<br/>Whiteboard:Available<br/>Mic:Available</div>
            <div>15th December 2023</div>
          </div>
        <hr/>

<div style={ContainerStyle}>
            <div> <FormGroup style={{ color: 'white', width: '300px' }}>
      <FormControlLabel control={<Checkbox defaultChecked />} label="All Day" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="08.30am-10.30am" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="10.30am-12.30pm" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="01.30pm-03.30pm" />
      <FormControlLabel control={<Checkbox defaultChecked />} label="03.30pm-05.30pm" />
    </FormGroup></div>

            <div>  <button style={{ backgroundColor: '#d9d9d9', border: '300px', borderRadius: '100px', marginRight: '10px' }} className="button">Exam</button>
    <button style={{ backgroundColor: '#d9d9d9', border: '300px', borderRadius: '100px' }} className="button1">Viva</button><br />
    <button style={{ backgroundColor: '#d9d9d9', border: '300px', borderRadius: '100px', marginTop: '10px' }} className="button">Rescheduled Lecture</button><br />
    <button style={{ backgroundColor: '#d9d9d9', border: '300px', borderRadius: '100px', marginTop: '10px' }} className="button">Rescheduled Tutorial</button><br />
    <button style={{ backgroundColor: '#d9d9d9', border: '300px', borderRadius: '100px', marginTop: '10px' }} className="button">Other</button>
  </div>
          </div>
          <form noValidate autoComplete="off">
            <FormControl sx={{ width: '650px', height: '100px', backgroundColor: '#d9d9d9',borderRadius:'30px' }}>
              <OutlinedInput style={{ width: '650px', height: '100px', backgroundColor: '#d9d9d9',borderRadius:'30px' }} placeholder="Type here the brief description about the purpose of the reservation." />
            </FormControl>
          </form>
          <Button
            style={{
              color: "#000",
              width: "150px",
              alignItems: "center",
              borderRadius: 25,
              backgroundColor: '#d9d9d9',
              alignItems:'justify',
              marginLeft:'250px',
            }}
          >
            <h5 style={{ margin: 0 }}>Request</h5>
          </Button>
          <NavigationIcon sx={{ transform: "rotate(90deg)", color: "#D9D9D9",marginTop:'2%'}} />
        </div>
      </div>
    </div>
  );
}