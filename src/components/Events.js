// src/components/Events.js
import React from 'react';
import { Box, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';

// Educational events data
const eventsData = [
  {
    title: 'AI & Machine Learning Workshop',
    description: 'A hands-on workshop exploring the basics of Artificial Intelligence and Machine Learning. Suitable for beginners.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Cybersecurity Conference',
    description: 'A conference discussing the latest trends and innovations in cybersecurity, featuring industry experts.',
    image: 'https://images.pexels.com/photos/5475790/pexels-photo-5475790.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    title: 'Data Science Bootcamp',
    description: 'An intensive bootcamp focusing on data analysis, visualization, and the key tools used in Data Science.',
    image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const Events = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', p: 9, mt: 4 }} id="events">
    <Typography
       
       component="h2" align="center" className="blog-header" sx={{ mb: 4 }}
       sx={{
         flexGrow: 1,
         fontFamily: 'Georgia, serif',  // Classy font style
         fontWeight: 'bold',  // Bold style
         fontSize: '2.5rem',  // Slightly larger size for prominence
       }}
     >
        Upcoming Educational Events
      </Typography>
      <Grid container spacing={4}>
        {eventsData.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="img" image={event.image} alt={event.title} height="250" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Events;
