import { Box, Stack, Typography, colors } from '@mui/material';
import React from 'react';
import MPaper from './MPaper';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const TotalIncome = () => {
  return (
    <MPaper fullHeight>
        <Stack spacing={1} >
          <Stack sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent:"space-between",
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
              marginRight:"20px"
            }}>
              <ArrowDownwardIcon/>
            </Box>
            
          </Stack>
          <Stack sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  
                }}>
                        <Stack sx={{ display:'flex', flexDirection:'column' }}>
                <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center' }}>
                    <Typography fontSize="28px" fontWeight="800">$50,120.00</Typography>
                    <Typography fontSize="14px" color="#333" fontWeight="400">(USD)</Typography>
                </Box>
                <Box sx={{ display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <Typography fontSize="28px" fontWeight="800">602793240</Typography>
                    <Typography fontSize="14px" color="#333" fontWeight="400">(UZS)</Typography>
                </Box>
            </Stack>
          </Stack>
          {/* <Stack sx={{
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
          </Stack> */}
        </Stack>
    </MPaper>
  );
};

export default TotalIncome;