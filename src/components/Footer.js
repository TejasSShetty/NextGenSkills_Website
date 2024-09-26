// src/components/Footer.js
import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', p: 3, color: 'white' }} id="footer">
      <Typography variant="h6">NextGenSkills</Typography>
      <Typography variant="body2">
        Follow us on{' '}
        <Link href="https://x.com/" color="inherit">
          Twitter
        </Link>{' '}
        and{' '}
        <Link href="https://www.instagram.com/" color="inherit">
          Instagram
        </Link>
      </Typography>
      <Typography variant="body2">© 2024 NextGenSkills by Tejas</Typography>
    </Box>
  );
};

export default Footer;
