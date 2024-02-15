import { images } from "../../assets"
import Animate from "../common/Animate";
import MPaperLinearGradient from "../common/MPaperLinearGradient";
import { Stack, Box, Typography, Avatar } from "@mui/material"

function ActivityCart() {
  return (
        <Animate>
            <MPaperLinearGradient sx={{ background:'linear-gradient( #868cff, #4318ff)' }}>
            <Stack sx={{ display: 'flex', flexDirection:'row', alignItems:'center', gap:'12px', justifyContent:'space-between', maxHeight:'60px' }}>
                <Stack direction='column'>
                    <Typography variant="p" sx={{ color:'rgba(163, 174, 208, 1)' }}>Activity</Typography>
                    <Typography variant="h5" sx={{ color:'white' }}>$540.50</Typography>
                </Stack>
                <Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="92" height="44" viewBox="0 0 92 44" fill="none">
                    <path d="M2.28906 41.5C2.28906 41.5 8.56881 -6.00537 24.2891 16C40.0093 38.0054 46.2891 36.9946 52.2891 20C59.7058 -1.0075 87.0471 17.0806 89.7891 2" stroke="url(#paint0_linear_362_256)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_362_256" x1="-1.21095" y1="46.5" x2="70.8668" y2="-16.9144" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                    </defs>
                    </svg>  
                </Box>
            </Stack>
            </MPaperLinearGradient>
        </Animate>
  )
}

export default ActivityCart