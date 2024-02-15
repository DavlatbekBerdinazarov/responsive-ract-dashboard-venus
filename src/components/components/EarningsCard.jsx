import { images } from "../../assets"
import Animate from "../common/Animate";
import MPaper from "../common/MPaper";
import { Stack, Box, Typography, Avatar } from "@mui/material"

function EarningsCard() {
  return (
        <Animate>
            <MPaper>
            <Stack  sx={{ display: 'flex', flexDirection:'row', alignItems:'center', gap:'12px', justifyContent:'space-between', maxHeight:'60px' }}>
                <Box>
                    <img src={images.dashboardImages.progressPng} alt="" />
                </Box>
                <Stack direction='column'>
                    <Typography variant="p" sx={{ color:'rgba(163, 174, 208, 1)' }}>Earnings</Typography>
                    <Typography variant="h5">$350.40</Typography>
                </Stack>
            </Stack>
            </MPaper>
        </Animate>
  )
}

export default EarningsCard