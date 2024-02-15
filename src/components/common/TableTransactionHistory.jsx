import * as React from "react";
import { images } from "../../assets";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { colors } from "@mui/material";
import { Typography, Stack, Box, Avatar } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import CircleIcon from '@mui/icons-material/Circle';

const rows = [
  {
    image:images.transactions.bank1,
    name:"Bank Transfer", 
    date:"Jan.01.2022", 
    amount:"$2.000.00", 
    status:"Complated",
    position: <CircleIcon style={{color:colors.green["600"],width:'10px'}}/>
  },
  {
    image:images.transactions.paypal,
    name:"PayPal Account", 
    date:"Jan.04.2022", 
    amount:"$2.000.00", 
    status:"Panding",
    position: <CircleIcon style={{color:colors.orange["600"],width:'10px'}}/>
  },
  { 
    image:images.transactions.bank2,
    name:"Bank Transfer", 
    date:"Jan.06.2022", 
    amount:"$2.000.00", 
    status:"On Hold",
    position: <CircleIcon style={{color:colors.red["600"],width:'10px'}}/>

  }
];

export default function TableTransactionHistory() {
  return (
    <TableContainer component={Paper}>
      <Stack sx={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingRight:"15px",
        marginTop:"10px"
      }}>
        <Typography
          sx={{
            paddingLeft: "15px",
            paddingTop: "15px",
          }}
        >
          Transaction History
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "140px",
            padding: "3px",
          }}
        >
          <CalendarMonthOutlinedIcon  fontSize="22px"/>
          <Typography fontSize="13px">1Jan-1Feb 2022</Typography>
        </Box>
      </Stack>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell sx={{color:"grey"}}>Transaction</TableCell>
            <TableCell align="right" sx={{color:"grey"}}>Date <ExpandMoreOutlinedIcon sx={{
              position:"relative",
              top:"6px"
            }}/></TableCell>
            <TableCell align="right" sx={{color:"grey"}}>Amount<ExpandMoreOutlinedIcon sx={{
              position:"relative",
              top:"6px"
            }}/></TableCell>
            <TableCell align="right" sx={{color:"grey"}}>Status <ExpandMoreOutlinedIcon sx={{
              position:"relative",
              top:"6px",
              right:"3px"
            }}/></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                <Stack sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap:"6px"
                }}>
                <Avatar style={{
                  width:"20px",
                  height:"20px"
                }} src={row.image}/>
                {row.name}
                </Stack>
              </TableCell>

              <TableCell align="right">
                {row.date}</TableCell>
              <TableCell align="right">
                {row.amount}</TableCell>
              <TableCell align="right">
                  <Stack sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent:"end",
                    textAlign:"left",
                    gap:"6px"
                  }}>
                    {row.position}
                    {row.status}
                  </Stack>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
