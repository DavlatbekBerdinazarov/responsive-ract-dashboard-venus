import Animate from "../common/Animate";
import MPaper from "../common/MPaper";
import { Stack, Box, Typography } from "@mui/material"
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

function SpendingMoneyShowCart() {
  return (
    <Animate>
        <MPaper>
            <Stack sx={{ display: 'flex', flexDirection:'row', alignItems:'center', gap:'12px', justifyContent:'space-between', padding:'2px' }}>
                <Box>
                    <Typography variant="p" sx={{ color:'#ccc', fontSize:'smaller' }}>Spent this month</Typography>
                    <Typography variant="h5">$682.5</Typography>
                </Box>
                <Stack sx={{ display: 'flex', flexDirection:'row', alignItems:'center', gap:'8px' }}>
                    <Box>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="46" viewBox="0 0 7 46" fill="none">
                        <rect x="0.789062" y="45.5704" width="45.5705" height="5.33287" rx="2.66644" transform="rotate(-90 0.789062 45.5704)" fill="#E9EDF7"/>
                        <rect x="0.789062" y="45.5704" width="37.508" height="5.33288" rx="2.66644" transform="rotate(-90 0.789062 45.5704)" fill="#4318FF"/>
                        </svg>
                    </Box>
                    <Box>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="46" viewBox="0 0 6 46" fill="none">
                        <rect x="0.307861" y="45.5704" width="45.5705" height="5.33287" rx="2.66644" transform="rotate(-90 0.307861 45.5704)" fill="#E9EDF7"/>
                        <rect x="0.307861" y="45.5704" width="23.4863" height="5.33287" rx="2.66643" transform="rotate(-90 0.307861 45.5704)" fill="#4318FF"/>
                        </svg>
                    </Box>
                    <Box>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="46" viewBox="0 0 7 46" fill="none">
                        <rect x="0.825928" y="45.5704" width="45.5705" height="5.33286" rx="2.66643" transform="rotate(-90 0.825928 45.5704)" fill="#E9EDF7"/>
                        <rect x="0.825928" y="45.5704" width="31.5488" height="5.33287" rx="2.66643" transform="rotate(-90 0.825928 45.5704)" fill="#4318FF"/>
                        </svg>
                    </Box>
                    <Box>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="46" viewBox="0 0 6 46" fill="none">
                        <rect x="0.343994" y="45.5704" width="45.5705" height="5.33281" rx="2.66641" transform="rotate(-90 0.343994 45.5704)" fill="#E9EDF7"/>
                        <rect x="0.343994" y="45.5704" width="41.364" height="5.33287" rx="2.66643" transform="rotate(-90 0.343994 45.5704)" fill="#4318FF"/>
                        </svg>
                    </Box>
                    <Box>
                        <svg xmlns="http://www.w3.org/2000/svg" width="7" height="46" viewBox="0 0 7 46" fill="none">
                        <rect x="0.862793" y="45.5704" width="45.5705" height="5.33286" rx="2.66643" transform="rotate(-90 0.862793 45.5704)" fill="#E9EDF7"/>
                        <rect x="0.862793" y="45.5704" width="10.8668" height="5.33286" rx="2.66643" transform="rotate(-90 0.862793 45.5704)" fill="#4318FF"/>
                        </svg>
                    </Box>
                </Stack>
            </Stack>
        </MPaper>
    </Animate>
  )
}

export default SpendingMoneyShowCart