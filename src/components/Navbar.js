// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <AppBar position="fixed" color="primary" className="AppBar"> {/* Add the class name */}
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontFamily: 'Georgia, serif',  // Classy font style
            fontWeight: 'bold',  // Bold style
            fontSize: '1.5rem',  // Slightly larger size for prominence
          }}
        >
          NextGenSkills
        </Typography>
        <Box>
          <Button color="inherit">
            <Link to="home" smooth={true} duration={500} spy={true}>Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="blog" smooth={true} duration={500} spy={true}>Blog</Link>
          </Button>
          <Button color="inherit">
            <Link to="latest" smooth={true} duration={500} spy={true}>Latest</Link>
          </Button>
          <Button color="inherit">
            <Link to="events" smooth={true} duration={500} spy={true}>Events</Link>
          </Button>
          <Button color="inherit">
            <Link to="skills" smooth={true} duration={500} spy={true}>Skills</Link>
          </Button>
          <Button color="inherit">
            <Link to="login" smooth={true} duration={500} spy={true}>Login</Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
