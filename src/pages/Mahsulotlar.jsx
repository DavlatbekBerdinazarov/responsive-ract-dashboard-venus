import React from 'react'
import { Grid, Box } from '@mui/material';
import Animate from '../components/common/Animate';
import KPIincome from '../components/common/TotalIncome';

function Mahsulotlar() {
  return (
    <Grid container spacing={2}  >
      <Grid item xs={12} >
        <Box sx={{ width:'100%', height:"50px", display:'block' }}></Box>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Animate delay={1.5}>
              <KPIincome/>
            </Animate>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Mahsulotlar;