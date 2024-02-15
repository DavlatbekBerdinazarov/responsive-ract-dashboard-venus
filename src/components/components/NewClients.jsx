import Animate from "../common/Animate";
import MPaper from "../common/MPaper";
import { Stack, Box, Typography, Avatar } from "@mui/material"
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import GroupIcon from '@mui/icons-material/Group';

function NewClients() {
  return (
    <Animate>
      <MPaper>
        <Stack spacing={0} sx={{ display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', maxHeight:'60px' }}>
          <Stack sx={{ width:'55px', height:'55px', background:'linear-gradient( #868cff, #4318ff)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:"center",}}>
            <GroupIcon sx={{ color:'white', width:'30px', height:'50px' }}/>
          </Stack>
          <Stack sx={{ display:'flex', flexDirection:'column',marginBottom:'15px' }}>, 
            <Typography variant="p" sx={{ color:'rgba(163, 174, 208, 1)' }}>New clients</Typography>
            <Typography variant="h5">321</Typography>
          </Stack>
          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="32" viewBox="0 0 62 32" fill="none">
              <path d="M1.78906 29.7041C1.78906 29.7041 7.93491 31.4949 14.0806 29.7041C28.4034 25.5305 23.7891 -0.999996 34.7891 6C47.9675 14.3863 58.4453 13.9388 60.2891 2" stroke="url(#paint0_linear_352_472)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
                <linearGradient id="paint0_linear_352_472" x1="-35.2109" y1="38" x2="48.3488" y2="-12.866" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#4F2CFF"/>
                  <stop offset="1" stop-color="#4F2CFF" stop-opacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </Box>
        </Stack>
      </MPaper>
    </Animate>
  )
}

export default NewClients