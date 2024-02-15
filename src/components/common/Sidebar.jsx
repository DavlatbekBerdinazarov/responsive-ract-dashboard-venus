import React, { useEffect } from 'react';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { NavLink, useNavigate } from 'react-router-dom';


import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography, colors } from '@mui/material';
import { images } from "../../assets";
import Animate from "./Animate";

import { useState } from 'react';


const serviceMenus = [
  {
    path: "home",
    title: "Dashboard",
    icon: <DashboardIcon/>,
    state: "home"
  },
  {
    path: "employees",
    title: "Mijozlar",
    icon: <PeopleAltOutlinedIcon/>,
    state: "employees"
  },
  {
    path: "tasks",
    title: "Kategoriya",
    icon: <TextSnippetOutlinedIcon/>,
    state: "tasks"
  },
  {
    path: "userinfo",
    title: "Mahsulotlar",
    icon: <PersonOutlineOutlinedIcon/>,
    state: "userinfo"
  },
];

const investmentMenus = [
  {
    path:"settings",
    title: "Sozlamalar",
    icon: <SettingsOutlinedIcon />,
    state: "financeadvice"
  },
  {
    path:"logout",
    title: "Chiqish",
    icon: <ExitToAppOutlinedIcon />,
    state: "savingaccount"
  }
];


const Sidebar = ({ sidebarWidth}) => {
  const [ activeState, setActiveState ] = useState('home');


  // const container = window !== undefined ? () => window.document.body : undefined;

  const MenuItem = (props) => {

    return (
      <NavLink sx={{ margin:'0',padding:'0' }} exact to={props.item.path}>
        <ListItem disableGutters disablePadding sx={{ py: 0.5 }}>
          <ListItemButton
            onClick={ ()=> setActiveState(props.item.path) } key={props.index}
             sx={{
              borderRadius: "6px",
              bgcolor: props.isActive ? 'rgba(67, 24, 255, 1)' : "",
              color: props.isActive ? colors.common.white : "",
              "&:hover": {
                bgcolor: props.isActive ? 'rgba(67, 24, 255, 1)' : "",
                color: props.isActive ? colors.common.white : "",
              }
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "40px",
                color: props.isActive ? colors.common.white : "",
              }}
            >
              {props.item.icon}
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography fontWeight={600}>{props.item.title}</Typography>
              }
            />
          </ListItemButton>
        </ListItem>
      </NavLink>
    );
  };
  
  const drawer = (
    <Box
      padding={0}
      paddingBottom={0}
      display="flex"
      bgcolor="#EFF0F4"
      flexDirection="column"
      height="100vh"
      marginLeft='10px'
      marginTop='30px'
      sx={{
        "::-webkit-scrollbar": {
          display: "none"
        }
      }}
    >
    

      <Animate sx={{ flexGrow: 1 }}>
        <Paper
          elevation={0}
          square
          sx={{
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            p: 2,
            height: "100%",
            boxShadow: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px"
          }}
        >
          
            {/* logo */}
            <Box sx={{ marginLeft:"15px", marginBottom:'30px'}}>
              <img src={images.logo} alt="logo" height={40} />
            </Box>
            {/* logo */}
          {/* menu group 2 */}
          <List>
            {serviceMenus.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                isActive={item.state === activeState}
              />
            ))}
          </List>
          {/* menu group 2 */}

          {/* menu group 3 */}
          <List sx={{position:'fixed', bottom:"0px"}}>
            {investmentMenus.map((item, index) => (
              <MenuItem
                key={index}
                item={item}
                isActive={ item.state === activeState}
              />
            ))}
          </List>
          {/* menu group 3 */}
        </Paper>
      </Animate>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { md: sidebarWidth },
        flexShrink: { md: 0 }
      }}
    >
      {/* large screen */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "displayNone", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: sidebarWidth,
            borderWidth: 0,
            bgcolor: "transparent",
            "::-webkit-scrollbar": {
              display: "none"
            }
          }
        }}
        open
      >
        {drawer}
      </Drawer>
      {/* large screen */}
    </Box>
  );
};

export default Sidebar;
