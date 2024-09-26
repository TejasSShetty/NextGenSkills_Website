// src/components/EducationBlog.js
import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, CardActionArea, Grid } from '@mui/material';
import './BlogSection.css';  // Import the external CSS for styling

const educationData = [
  {
    title: 'The Importance of STEM Education',
    description: 'STEM education is crucial in today’s technology-driven world, fostering critical thinking and innovation.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Online Learning: Benefits and Challenges',
    description: 'Exploring the advantages and potential drawbacks of online learning in higher education.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'The Future of Education Technology',
    description: 'How technology is shaping the future of education and the learning experience.',
    image: 'https://images.pexels.com/photos/5716028/pexels-photo-5716028.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Lifelong Learning: Why It Matters',
    description: 'Understanding the significance of continuous learning in personal and professional development.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function EducationBlog() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography
       
          component="h2" align="center" className="blog-header" sx={{ mb: 4 }}
          sx={{
            flexGrow: 1,
            fontFamily: 'Georgia, serif',  // Classy font style
            fontWeight: 'bold',  // Bold style
            fontSize: '2.5rem',  // Slightly larger size for prominence
          }}
        >
        Education Blog
      </Typography>
      <Grid container spacing={2}>
        {/* First Row: Image on Left, Content on Right */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ display: 'flex', height: 200 }}>
            <CardMedia
              component="img"
              sx={{ width: 600 }} 
              image="https://images.pexels.com/photos/7005627/pexels-photo-7005627.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Award-winning Curriculum"
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="card-title">
                  Award-Winning Curriculum
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} className="card-description">
                  Discover how an award-winning curriculum enhances the learning experience and prepares students for success.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Second Row: Content on Left, Image on Right */}
        <Grid item xs={12} sm={6}>
          <Card sx={{ display: 'flex', flexDirection: 'row-reverse', height: 200 }}>
            <CardMedia
              component="img"
              sx={{ width: 300 }}
              image="https://images.pexels.com/photos/3813341/pexels-photo-3813341.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Educational Insights"
            />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="card-title">
                  Educational Insights
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} className="card-description">
                  Explore the latest insights and trends in the education sector.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

      {/* Additional Cards for Education Blog */}
      <Grid container spacing={2} sx={{ mt: 4 }}>
        {educationData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: 300 }}>
              <CardMedia
                component="img"
                height="160"
                image={item.image}
                alt={item.title}
              />
              <CardContent sx={{ height: '60%' }}>
                <Typography gutterBottom variant="h6" component="div" className="card-title">
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', height: '40%' }} className="card-description">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
