import React from 'react';
import MPaper from './MPaper';
import { Box, Stack, Typography, Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const UserBookingCard = () => {
  return (
    <MPaper>
      <Stack spacing={3}>
        {/* user info */}
        <Stack display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="p">Your balance</Typography>
          <MoreHorizIcon/>
        </Stack>

        <Stack direction="row" spacing={1}>
          <Typography variant='h5' fontWeight="800">$120,435.00</Typography>
          <Typography fontSize="14px" color="#333" fontWeight="400">(USD)</Typography>
        </Stack>
        
        <Stack>
          <Typography color="#333" fontSize="11px" variant='p'>From Jan 01 2022to Jan 31 2022</Typography>
        </Stack>

        <Stack direction="row" spacing={3}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AttachMoneyIcon />}
          >
            Top Up
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<CurrencyExchangeIcon />}
          >
            Transfer
          </Button>
        </Stack>

      </Stack>
    </MPaper>
  );
};

export default UserBookingCard;