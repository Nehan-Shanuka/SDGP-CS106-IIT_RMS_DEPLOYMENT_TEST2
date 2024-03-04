/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";

const Item = styled(Paper)(({ theme, color }) => ({
  backgroundColor: color,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: "pointer",
  width: "190px",
  height: "70px",
  borderRadius: "20px",
  // Media Query for responsiveness
//   "@media (max-width: 600px)": {
//     width: "120px",
//     height: "50px",
//     borderRadius: "10px",
//   },
}));

const NestedGrid = () => {
  const itemNames = [
    {
      id: "1",
      text: "Object Oriented Programming",
      detail1: "3LA || LEC || GP",
      detail2:
        "testin 1 ea are the  champian mot lovelekmrgb krgbrkbrbro igjtgちgちy daye",
    },
    { id: "2", text: "Object Oriented Programming", detail1: "3LA ~ LEC ~ GP" },
    { id: "3", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
    { id: "4", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
    { id: "5", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
    { id: "6", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
    { id: "7", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
    { id: "8", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
    { id: "9", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
    { id: "10", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
    { id: "11", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
    { id: "12", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
    { id: "13", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
    { id: "14", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
    { id: "15", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
    { id: "16", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
    { id: "17", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
    { id: "18", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
    { id: "19", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
    { id: "20", text: "Object Oriented Programming", detail1: "3LA  LEC  GP" },
  ];

  const colors = ['#ff9999', '#99ff99', /* ...other colors... */];

  return (
    <Box
      sx={{
        flexGrow: 1,
        // marginTop: "-700px",
        marginLeft: "100px",
        marginRight:"50px",
        border: "2px solid black",
        borderColor: "black",
        padding: "40px",
        width: "90%",
        // height: "100%",
        borderRadius: "30px",
        backgroundColor: "lightgrey",
        "@media screen and (max-width: 768px)": {
          marginLeft: "0",
          marginTop: "20px",
          width: "90%",
          padding: "20px",
        },
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        justifyContent="space-between"
        rows={5} // Set the number of rows to 5
        columns={4} // Set the number of columns to 4
                sx={{
          overflowX: 'auto', // Enable horizontal scrolling on smaller screens
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar
          },
        }}
      >
        <Grid container item spacing={4}>
          {/* <FormRow items={itemNames} /> */}
          {itemNames.map((item, index) => (
          <Grid item xs={2.4} key={item.id}>
            <Tooltip 
              title={
                <>
                  <div>{item.detail2}</div>
                  {/* Add more details as needed */}
                </>
              }
              interactive
              placement="top"
            >
                  <Item color={colors[index]} width="250px" height="90px" borderRadius="30px">
                <div style={{ fontSize: '20px' }}>{item.detail1}</div>
                <div style={{ fontSize: '12px' }}>{item.text}</div>
              </Item>
            </Tooltip>
          </Grid>
        ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default NestedGrid;