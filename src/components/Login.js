// src/components/Login.js
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link, Card, CardContent, InputAdornment, IconButton } from '@mui/material';
import { Email, Lock } from '@mui/icons-material';
import './Login.css'; // External CSS for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate email to accept only Gmail
  const validateEmail = (input) => {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailPattern.test(input)) {
      setEmailError('Please enter a valid Gmail address.');
      setIsFormValid(false);
    } else {
      setEmailError('');
    }
    setEmail(input);
  };

  // Validate password to be at least 8 characters
  const validatePassword = (input) => {
    if (input.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      setIsFormValid(false);
    } else {
      setPasswordError('');
    }
    setPassword(input);
  };

  // Check if both email and password are valid
  const handleLogin = (e) => {
    e.preventDefault();

    if (!emailError && !passwordError && email && password) {
      setIsFormValid(true);
      alert('Login successful');
      // Add navigation or further login logic here
    } else {
      alert('Please enter valid email and password.');
    }
  };

  return (
    <Box className="login-container"> {/* Container with background image */}
      <Card className="login-card">
        <CardContent>
        <Typography
       
       component="h2" align="center" className="blog-header" sx={{ mb: 4 }}
       sx={{
         flexGrow: 1,
         fontFamily: 'Georgia, serif',  // Classy font style
         fontWeight: 'bold',  // Bold style
         fontSize: '2.5rem',  // Slightly larger size for prominence
       }}
     >
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              label="Gmail"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
              required
              helperText={emailError}
              error={Boolean(emailError)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton edge="start">
                      <Email />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
              required
              helperText={passwordError}
              error={Boolean(passwordError)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton edge="start">
                      <Lock />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box sx={{ textAlign: 'right', marginTop: '10px' }}>
              <Link href="#" underline="hover">
                Forgot Password?
              </Link>
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              className="login-button"
              disabled={emailError || passwordError || !email || !password}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
