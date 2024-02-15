import { Box, Stack, Typography, colors } from '@mui/material';
import React from 'react';
import MPaper from './MPaper';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';



const TotalIncomeExpence = () => {
  return (
    <MPaper fullHeight>
      <Stack spacing={3} direction="row">
        <Stack spacing={1} width="50%" borderRight="1px solid #ccc">
          <Stack sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent:"space-between"
                }}>
            <Typography>Total Income</Typography>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent:"center",
              height: "43px",
              width: "43px",
              backgroundColor:"#f2f4f7",
              borderRadius:'9px',
              color:colors.green['700'],
              marginRight:"30px"
            }}>
              <ArrowUpwardIcon/>
            </Box>
            
          </Stack>
          <Stack sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  
                }}>
            <Typography fontSize="28px" fontWeight="800">$50,530.00</Typography>
            <Typography fontSize="14px" color="#333" fontWeight="400">(USD)</Typography>
          </Stack>
          <Stack sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap:"2px"
                }}>
            <Typography sx={{
              color:colors.green["700"],
              fontSize:"13px",
              fontWeight:"800"
              }}>20%</Typography>
            <Typography sx={{
              color:colors.grey["400"],
              fontSize:"13px",
              fontWeight:"500"
            }}>increase compared to last week</Typography>
          </Stack>
        </Stack>
        <Stack spacing={1} width="50%" >
          <Stack sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent:"space-between"
                }}>
            <Typography>Total Expence</Typography>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent:"center",
              height: "43px",
              width: "43px",
              backgroundColor:"#f2f4f7",
              borderRadius:'9px',
              color:colors.red['700'],
              marginRight:"30px"
            }}>
              <ArrowDownwardIcon/>
            </Box>
            
          </Stack>
          <Stack sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  
                }}>
            <Typography fontSize="28px" fontWeight="800">$19,760.00</Typography>
            <Typography fontSize="14px" color="#333" fontWeight="400">(USD)</Typography>
          </Stack>
          <Stack sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap:"2px"
                }}>
            <Typography sx={{
              color:colors.red["700"],
              fontSize:"13px",
              fontWeight:"800"
              }}>10%</Typography>
            <Typography sx={{
              color:colors.grey["400"],
              fontSize:"13px",
              fontWeight:"500"
            }}>increase compared to last week</Typography>
          </Stack>
        </Stack>
      </Stack>
    </MPaper>
  );
};

export default TotalIncomeExpence;