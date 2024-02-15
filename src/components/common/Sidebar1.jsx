import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, TextField, colors, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

import { NavLink } from 'react-router-dom';

import { images } from "../../assets";

const dashboardMenues = [
  {
    path: "home",
    title: "Dashboard",
    icon: <DashboardIcon/>,
  },
  {
    path: "mijozlar",
    title: "Mijozlar",
    icon: <PeopleAltOutlinedIcon/>,
  },
  {
    path: "kategoriya",
    title: "Kategoriya",
    icon: <TextSnippetOutlinedIcon/>,
  },
  {
    path: "mahsulotlar",
    title: "Mahsulotlar",
    icon: <PersonOutlineOutlinedIcon/>,
  },
];

const preferenceIcons = [
  {
    path:"settings",
    title: "Sozlamalar",
    icon: <SettingsOutlinedIcon />,
  },
  {
    path:"logout",
    title: "Chiqish",
    icon: <ExitToAppOutlinedIcon />,
  }
];

const drawerWidth = 270;

function Sidebar1(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState('')

  const handleActiveToggle = (item) => {
    setSelectedCategory( item.path )
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box component='div' >
      {/* logo */}
      <Box sx={{ marginLeft:"38px", marginTop:'40px', marginBottom:'20px'}}>
        <img src={images.logo} height={40} alt="" />    
      </Box>
      {/* logo */}
      <Divider />
      <List
       sx={{ marginLeft:'18px',height:'70vh', marginRight:'20px' }}>
        {dashboardMenues.map((item, index) => (
          <NavLink exact to={item.path}>
            <ListItem key={index} disablePadding>
                <ListItemButton
                onClick={() => handleActiveToggle(item) }
                sx={{
                  marginBottom:'20px',
                  borderRadius: "6px",
                  bgcolor: item.path === selectedCategory ? 'rgba(67, 24, 255, 1)' : "",
                  color: item.path === selectedCategory ? colors.common.white : "",
                  "&:hover": {
                    bgcolor: item.path === selectedCategory ? 'rgba(67, 24, 255, 1)' : "",
                    color: item.path === selectedCategory ? colors.common.white : "",
                  }
                }}
        
                >
                <ListItemIcon
                    sx={{
                    minWidth: "40px",
                    color: item.path === selectedCategory ? colors.common.white : "",
                    }}
                >
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
                </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <List sx={{position:'fixed', bottom:"0px",left:'18px'}}>
        {preferenceIcons.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor:'white',
          color:'white',
          height:'60px'
        }}
      >
        <Toolbar sx={{ display:'flex', flexDirection:'row', justifyContent:"space-between" }}>
          <Box component='div'>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, position:'relative', left:'0' }}
          >
            <MenuIcon />
          </IconButton>
          </Box>
          <Box component='div' sx={{ display:'flex', flexDirection:'row', justifyContent:"end", alignItems:'center', gap:'15px' }}>
            <TextField
              variant="outlined"
              InputProps={{
                startAdornment: <SearchIcon fontSize="19px"/>,
                sx: {
                  borderRadius: '4px',
                  border:"secondary",
                  opacity:"0.7",
                  height: "34px"
                },
              }}
              placeholder="Search by name"
            />
            <NotificationsNoneOutlinedIcon sx={{ color:'black' }}/>
            <Stack sx={{ display:'flex', alignItems:'center', flexDirection:'row',gap:'10px' }}>
              <Typography variant='h6'sx={{ display: { xs: "none", sm: "none", md: "block", color:'black' } }}>Jahongir</Typography>
              <Avatar/>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
  );
}

Sidebar1.propTypes = {
  window: PropTypes.func,
};

export default Sidebar1;
