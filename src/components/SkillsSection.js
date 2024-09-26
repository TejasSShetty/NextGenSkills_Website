import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function SkillsSection() {
  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography
       component="h2" align="center" className="blog-header" sx={{ mb: 4 }}
       sx={{
         flexGrow: 1,
         fontFamily: 'Georgia, serif',  // Classy font style
         fontWeight: 'bold',  // Bold style
         fontSize: '2.5rem',  // Slightly larger size for prominence
       }}
     >
        Skills
      </Typography>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>JavaScript</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Proficient in JavaScript for building interactive web applications using frameworks like React and Angular.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Python</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Experienced in Python for backend development, data analysis, and machine learning applications.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography>Machine Learning</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Knowledgeable in machine learning techniques and libraries, including TensorFlow and scikit-learn.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            <Typography>Web Development</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Skilled in front-end and back-end web development, familiar with HTML, CSS, and popular frameworks.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Box>
  );
}
