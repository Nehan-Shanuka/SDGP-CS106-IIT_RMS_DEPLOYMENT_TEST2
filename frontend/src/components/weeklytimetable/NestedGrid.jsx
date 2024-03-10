import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme, color }) => ({
  backgroundColor: color,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: "pointer",
  // width: "190px",
  // height: "70px",
  borderRadius: "10px",
  margin: "10px",
}));

const NestedGrid = () => {
  const itemNames = [
    { id: "1", text: "Object Oriented Programming", detail1: "3LA || LEC || GP", detail2: "testin 1 ea are the  champian mot lovelekmrgb krgbrkbrbro igjtgちgちy daye", weekday: "Monday" },
    { id: "2", text: "Object Oriented Programming", detail1: "3LA ~ LEC ~ GP", weekday: "Tuesday" },
    { id: "3", text: "Object Oriented Programming", detail1: "3LA  LEC  GP", weekday: "Wednesday" },
    { id: "4", text: "Object Oriented Programming", detail1: "3LA  LEC  GP", weekday: "Thursday" },
    { id: "5", text: "Object Oriented Programming", detail1: "3LA  LEC  GP", weekday: "Friday" },
    { id: "6", text: "Object Oriented Programming", detail1: "3LA || LEC || GP", detail2: "testin 1 ea are the  champian mot lovelekmrgb krgbrkbrbro igjtgちgちy daye", weekday: "Monday" },
    { id: "7", text: "Object Oriented Programming", detail1: "3LA ~ LEC ~ GP", weekday: "Tuesday" },
    { id: "8", text: "Object Oriented Programming", detail1: "3LA  LEC  GP", weekday: "Wednesday" },
    { id: "9", text: "Object Oriented Programming", detail1: "3LA  LEC  GP", weekday: "Thursday" },
    { id: "10", text: "Object Oriented Programming", detail1: "3LA  LEC  GP", weekday: "Friday" },
    { id: "11", text: "Object Oriented Programming", detail1: "3LA || LEC || GP", detail2: "testin 1 ea are the  champian mot lovelekmrgb krgbrkbrbro igjtgちgちy daye", weekday: "Monday" },
    { id: "12", text: "Object Oriented Programming", detail1: "3LA ~ LEC ~ GP", weekday: "Tuesday" },
    { id: "13", text: "Object Oriented Programming", detail1: "3LA  LEC  GP", weekday: "Wednesday" },
    { id: "14", text: "Object Oriented Programming", detail1: "3LA  LEC  GP", weekday: "Thursday" },
    { id: "15", text: "Object Oriented Programming", detail1: "3LA  LEC  GP", weekday: "Friday" },
    { id: "16", text: "16Object Oriented Programming", detail1: "3LA || LEC || GP", detail2: "testin 1 ea are the  champian mot lovelekmrgb krgbrkbrbro igjtgちgちy daye", weekday: "Monday" },
    { id: "17", text: "17Object Oriented Programming", detail1: "3LA ~ LEC ~ GP", weekday: "Tuesday" },
    { id: "18", text: "18Object Oriented Programming", detail1: "3LA  LEC  GP", weekday: "Wednesday" },
    { id: "19", text: "19Object Oriented Programming", detail1: "3LA  LEC  GP", weekday: "Thursday" },
    { id: "20", text: "20Object Oriented Programming", detail1: "3LA  LEC  GP", weekday: "Friday" },
    // Add more items as needed
  ];

  const colors = ['#FF9999', '#99FF99', '#9999FF', '#FFFF99', '#FF99FF', '#99FFFF', '#FFCCCC', '#CCFFCC', '#CCCCFF', '#FFFFCC', '#FFCCFF', '#CCFFFF', '#FF6666', '#66FF66', '#6666FF', '#FFFF66', '#FF66FF', '#66FFFF', '#FF9966', '#66FF99'];

  return (
    <Box sx={{ flexGrow: 1, marginTop: "50px", marginLeft: "50px", marginRight:"0px", border: "2px solid black", borderColor: "black", padding: "40px", width: "90%", borderRadius: "30px", backgroundColor: "lightgrey", "@media screen and (max-width: 768px)": { marginLeft: "0", marginTop: "20px", width: "90%", padding: "20px", } }}>
      <Grid container spacing={2} alignItems="flex-start" justifyContent="space-between" sx={{ overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none', }, }}>
        {/* Weekdays row */}
        <Grid container item spacing={4}>
          {/* Render items for each weekday */}
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(weekday => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={weekday}>
              <Box sx={{ backgroundColor: "#fff", padding: "10px", borderRadius: "10px" }}>
              <Typography variant="h6" sx={{ marginBottom: "20px", textAlign: "center" }}>{weekday}</Typography>
                {itemNames
                  .filter(item => item.weekday === weekday)
                  .map((item, index) => (
                    <Tooltip key={item.id} title={<><div>{item.detail2}</div></>} interactive placement="top">
                      <Item color={colors[(item.id - 1) % colors.length]} width="300px" height="90px" borderRadius="30px">
                        <div style={{ fontSize: '15px' }}>{item.detail1}</div>
                        <div style={{ fontSize: '12px' }}>{item.text}</div>
                      </Item>
                    </Tooltip>
                  ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default NestedGrid;

