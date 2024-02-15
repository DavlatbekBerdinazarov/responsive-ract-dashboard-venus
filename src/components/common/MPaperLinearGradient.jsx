import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

const MPaperLinearGradient = ({ title, fullHeight, children }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: fullHeight ? "100%" : "unset",
        boxShadow: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
        background:'linear-gradient( #868cff, #4318ff)',
        borderRadius:"12px"
      }}
    >
      {title && (
        <Typography variant="body1" fontWeight={100} mb={3}>
          {title}
        </Typography>
      )}
      <Box>
        {children}
      </Box>
    </Paper>
  );
};

export default MPaperLinearGradient;