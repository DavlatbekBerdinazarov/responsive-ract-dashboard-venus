import React from 'react'
import { Grid, Box } from '@mui/material';
import Animate from '../components/common/Animate';
import ClientsTable from '../components/components/ClientsTable';
import FullFeaturedCrudGrid from '../components/components/ChatGPTTable';


function Mijozlar() {
  return (
    <Grid container spacing={2}  >
      <Grid item xs={12} >
        <Box sx={{ width:'100%', height:"50px", display:'block' }}></Box>
      </Grid>
      <Grid item xs={12} lg={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Animate type="fade" delay={2} sx={{ height: "100%" }}>
              <FullFeaturedCrudGrid/>
            </Animate>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Mijozlar