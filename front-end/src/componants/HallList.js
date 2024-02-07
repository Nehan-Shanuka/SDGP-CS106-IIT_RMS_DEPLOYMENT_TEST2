import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import styled from '@mui/material/styles/styled';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#3E737A',
    color: '#fff',
    width: '95%',
    margin: 5,
    borderRadius: 15,
  }));
  
  const courses = [
    {
      hallNumber: 'AUD',
      building: 'GP',
      moduleName: 'Object Oriented Programming',
      time: '08.30-10.30',
    },
    {
      hallNumber: '1LB',
      building: 'JB',
      moduleName: 'Object Oriented Programming',
      time: '08.30-10.30',
    },
    {
      hallNumber: '5LB',
      building: 'GP',
      moduleName: 'Object Oriented Programming',
      time: '08.30-10.30',
    },
    {
      hallNumber: '4LC',
      building: 'JB',
      moduleName: 'Object Oriented Programming',
      time: '08.30-10.30',
    },
    {
      hallNumber: '7LB',
      building: 'SP',
      moduleName: 'Object Oriented Programming',
      time: '08.30-10.30',
    },
    {
      hallNumber: '7LB',
      building: 'SP',
      moduleName: 'Object Oriented Programming',
      time: '08.30-10.30',
    },
  ];

export default function HallList() {
  return (
    <Card sx={{
        width: '45%',
        height: '95vh',
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        // width: '100%',
      }}>
        <CardContent>
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {courses.map((course) => (
              <Item sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gridTemplateColumns: 'auto auto auto',
              }}>

                <div>
                  <h1 style={{
                    paddingLeft: 20,
                    fontSize: '40px',
                  }}>
                    {course.hallNumber}</h1>
                </div>

                <div>
                  <div style={{
                  }}>
                    <p style={{ fontSize: '20px' }}>{course.moduleName}</p>
                    <p>{course.time}</p>
                  </div>
                </div>

                <div style={{
                  width: '150px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <div style={{
                    position: 'relative',
                    width: '80px',
                    height: '80px',
                    textAlign: 'center',
                    borderRadius: '50%',
                    backgroundColor: '#D9D9D9',
                    display: 'flex',
                    justifyContent: 'center',
                    color: '#000',
                  }}>
                    <p style={{
                      fontSize: '40px',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                    }}>
                      {course.building}</p>
                  </div>
                </div>

              </Item>
            ))}
          </Box>
        </CardContent>
      </Card>
  )
}