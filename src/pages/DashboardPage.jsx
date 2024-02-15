import { Box, Grid } from '@mui/material';
import React from 'react';
import Animate from '../components/common/Animate';

import SpendingMoneyShowCart from '../components/components/SpendingMoneyShowCart';
import NewClients from '../components/components/NewClients';
import EarningsCard from '../components/components/EarningsCard';
import ActivityCart from '../components/components/ActivityCart';
import TotalIncome from '../components/common/TotalIncome';
import TotalIncomeExpence from '../components/common/TotalIncomeExpence';
import TotalExpence from '../components/common/TotalExpense';

const DashboardPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} >
          <Box sx={{ width:'100%', height:"50px", display:'block' }}></Box>
      </Grid>
    
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} xl={3} lg={4} md={6} >
            <Animate delay={2.5}>
              <SpendingMoneyShowCart/>
            </Animate>
          </Grid>
          <Grid item xs={12} sm={12} xl={3} lg={4} md={6} >
            <Animate type="fade" delay={1.5} sx={{ height: "100%" }}>
              <NewClients/>
            </Animate>
          </Grid>
          <Grid item xs={12} sm={12} xl={3} lg={4} md={6} >
            <Animate delay={2} sx={{ height: "100%" }}>
              <EarningsCard/>
            </Animate>
          </Grid>
          <Grid item xs={12} sm={12} xl={3} lg={4} md={6} >
            <Animate type="fade" delay={2.2} sx={{ height: "100%" }}>
              <ActivityCart/>
            </Animate>
          </Grid>
          <Grid item xs={12} sm={12} xl={6} lg={4} md={12} >
            <Animate type="fade" delay={2.2} sx={{ height: "100%" }}>
              <TotalIncome/>
            </Animate>
          </Grid>
          <Grid item xs={12} sm={12} xl={6} lg={4} md={12} >
            <Animate type="fade" delay={2.2} sx={{ height: "100%" }}>
              <TotalExpence/>
            </Animate>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;