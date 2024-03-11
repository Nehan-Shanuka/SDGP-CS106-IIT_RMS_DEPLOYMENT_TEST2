import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import MyTimetable from '../myTimetable';

function Welcome() {
  // Define a sample menus array
  const menus = [
    { name: "My Timetable",
      path: "/my-timetable"},
    { name: "Reservation Requests",
      path: "/reservations"},
    { name: "Group Formation",
      path: "/student-grouping"},
    { name: "Group Timetable",
    path: "/group-timetable" },
    { name: "Planned Sessions",
    path: "/planned-sessions"},
    { name: "Group Details",
    path: "/group-details"},
    { name: "Reservation Review",
    path: "/review-requests"}
  ];

  function arracol(){
    for(let i=0; i<menus.length; i++){
      if(i !==6){
        console.log(menus[i].name)

      }else{
        // console.log(menus[i].name)
        const reservtationrevew = menus[i].name;
        console.log(reservtationrevew)
        reservtationrevewdisplay
        
      }
    }
  }

  const reservtationrevewdisplay ={
    display: 'center'
  }

  return (
    // arracol();
    <div className='min-h-screen bg-green-800'>
      <Grid container spacing={5} className="p-10 mt-10">
        <Grid item xs={12}>
          <Paper className="p-3">
            <Typography variant="h1" component="div" className="mb-3 text-center bg-green-500">
              WELCOME
            </Typography>
          </Paper>
        </Grid>
        {menus.map((menu, index) => (
          <Grid item xs={4} sm={4} key={index}>
             <Paper className={"p-[6.13%] text-center cursor-pointer"}>
              <Link to={menu.path}><button className="ml-[-10%] p-5 rounded-[20%]">{menu.name}</button></Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    
    </div>
  );
}

export default Welcome;
