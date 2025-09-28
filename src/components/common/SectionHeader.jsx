import React from 'react';
import { Box, Typography } from '@mui/material';

const SectionHeader = ({ icon, title, subtitle }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
      <Box sx={{ mr: 1.5, color: 'primary.main' }}>
        {React.cloneElement(icon, { sx: { fontSize: '2.2rem' } })}
      </Box>
      <Box>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default SectionHeader;