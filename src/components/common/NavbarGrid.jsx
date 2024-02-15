import React from 'react';
import { images } from "../../assets";
import { Box, Stack, Typography, Avatar, TextField, List, ListItem } from '@mui/material';
import Animate from "./Animate";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MPaper from './MPaper';

const NavbarGrid = () => {
  return (
    <Animate>
      <MPaper>
        <Box sx={{
          width:"100%",
          height:"10px",
          display: "flex",
          flexDirection: "row",
          justifyContent:"space-between"
        }}>
          <Stack sx={{
          display: "flex",
          flexDirection:"row",
          alignItems: "center",
          gap: "5px"
        }}>
            <ArrowForwardIosIcon sx={{  fontSize: "13px", display: { xs: "none", sm: "none", md: "block" } }}/>
            <MenuIcon sx={{ display: { xs: "block", sm: "block", md: "none",xl:'none' } }}/>              
          </Stack>
          <Stack sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            alignItems: "center"
          }}>
          <TextField
              variant="outlined"
              InputProps={{
                type:'text',
                startAdornment: <SearchIcon sx={{marginTop:'6px'}}/>,
                sx: {
                  borderRadius: '20px',
                  border:"secondary",
                  opacity:"0.7",
                  height: "34px",
                  display: { xs: "none", sm: "block", md: "block" }
              },
            }}

            />
            <NotificationsNoneOutlinedIcon/>
            <Typography variant='p' sx={{ display: { xs: "none", sm: "none", md: "block" } }}>Jahongir</Typography>  
            <Avatar/>
          </Stack>
        </Box>
      </MPaper>
    </Animate>
  )
}
export default NavbarGrid;