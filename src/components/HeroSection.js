// src/components/HeroSection.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './HeroSection.css'; // Ensure you have this file for styling

const HeroSection = () => {
  return (
    <Box className="hero">
      <Typography 
        variant="h2" 
        className="hero-text"
        sx={{
          fontFamily: "'Poppins', sans-serif",  // Modern, attractive font
          fontWeight: '700',                    // Bold for prominence
          letterSpacing: '2px',                 // Spaced-out text for a modern look
          textTransform: 'uppercase',           // Uppercase for a strong, bold feel
        }}
      >
        Welcome to NextGenSkills
      </Typography>
      <a href="https://worldskills.org/" target="_blank" rel="noopener noreferrer">
        <Button variant="contained" color="primary" size="large" sx={{ marginTop: '20px' }}>
          Learn More
        </Button>
      </a>
    </Box>
  );
};

export default HeroSection;
