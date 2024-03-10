import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Container = styled('div')({
  position: 'absolute', // Position the container absolutely
  top: 40, // Position it at the top of the screen
  left: 400, // Align it to the left
  width: '50%', // Set width to full scree
});

export default function DividerStack() {
  return (
    <Container>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={4}
        border={0}
      >
        <Item> 2024 / December / 02 </Item>
        <Item> 2024 /January / 04 </Item>
      </Stack>
    </Container>
  );
}

