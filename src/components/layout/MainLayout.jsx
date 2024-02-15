import { Box } from '@mui/material';
import React from 'react';
import Sidebar1 from '../common/Sidebar1';
import { Outlet } from 'react-router-dom';


const sidebarWidth = 270;

const MainLayout = () => {

  return (
    <Box display="flex" sx={{ backgroundColor:"#f4f7fe", height:'140vh' }}>
      {/* sidebar */}
      <Sidebar1 sidebarWidth={sidebarWidth} />
      {/* sidebar */}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor:"#f2f3f6",
          p: 3,
          height: "100%",
          width: { sm: `calc(100% - ${sidebarWidth}px)` }
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;