import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Welcome() {
  // Define a sample menus array
  const menus = [
    { name: "Menu 1" },
    { name: "Menu 2" },
    { name: "Menu 3" },
    { name: "Menu 4" },
    { name: "Menu 5" },
    { name: "Menu 6" },
  ];

  return (
    <div>
      <Grid container spacing={2} className="p-5 ml-5">
        <Grid item xs={12}>
          <Paper className="p-3">
            <Typography variant="h4" component="div" className="mb-3 text-center">
              WELCOME
            </Typography>
          </Paper>
        </Grid>
        {menus.map((menu, index) => (
          <Grid item xs={4} key={index}>
            <Paper className="p-3 text-center">
              <button className="ml-[-50%] p-5 rounded-[20px]">{menu.name}</button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Welcome;
