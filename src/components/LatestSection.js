import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const data = [
  {
    avatar: 'https://www.framestore.com/sites/default/files/styles/static_hero_mobile_991x_/public/2022-10/next-gen-header.png?h=61ca0bd2&itok=7rXVGHn3',
    title: 'Ted',
    subheader: '5 hours ago',
    image: 'https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512',
    content: "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:",
  },
  {
    avatar: 'https://www.framestore.com/sites/default/files/styles/static_hero_mobile_991x_/public/2022-10/next-gen-header.png?h=61ca0bd2&itok=7rXVGHn3',
    title: 'Ted',
    subheader: '10 hours ago',
    image: 'https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512',
    content: "How to live a sustainable life by John Doe.",
  },
  {
    avatar: 'https://www.framestore.com/sites/default/files/styles/static_hero_mobile_991x_/public/2022-10/next-gen-header.png?h=61ca0bd2&itok=7rXVGHn3',
    title: 'Ted',
    subheader: '2 days ago',
    image: 'https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512',
    content: "Exploring the universe: What's out there? by Jane Doe.",
  },
];

function MediaCard({ loading, avatar, title, subheader, image, content }) {
  return (
    <Card
      sx={{ 
        maxWidth: 345, 
        height: '100%', 
        m: 2, 
        transition: 'transform 0.2s', // Smooth transition for hover effect
        '&:hover': {
          transform: 'scale(1.05)', // Scale effect on hover
          boxShadow: 3, // Optional shadow effect on hover
        }
      }}
    >
      <CardHeader
        avatar={
          loading ? (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          ) : (
            <Avatar alt={title} src={avatar} />
          )
        }
        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
          ) : (
            title
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            subheader
          )
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
      )}
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" component="p" sx={{ color: 'text.secondary' }}>
            {content}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

MediaCard.propTypes = {
  loading: PropTypes.bool,
  avatar: PropTypes.string,
  title: PropTypes.string,
  subheader: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
};

export default function LatestSection() {
  return (
    <Box sx={{ p: 3, textAlign: '' }}> {/* Center-align the content */}
      <Typography
       
       component="h2" align="center" className="blog-header" sx={{ mb: 4 }}
       sx={{
         flexGrow: 1,
         fontFamily: 'Georgia, serif',  // Classy font style
         fontWeight: 'bold',  // Bold style
         fontSize: '2.5rem',  // Slightly larger size for prominence
       }}
     >
        Latest Updates
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MediaCard
              loading={false} // Change to true to show loading skeletons
              avatar={item.avatar}
              title={item.title}
              subheader={item.subheader}
              image={item.image}
              content={item.content}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
