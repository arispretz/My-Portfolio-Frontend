// pages/About.js
import React from 'react';
import Certifications from '../components/Certifications';
import { Box, Text } from '@radix-ui/themes';
import certificates from '../files/certificates.js'

const About = () => {
  return (
    <>
      <Box style={{ display: 'flex' }}>
          <Box style={{ flex: 2, padding: '50px', backgroundColor: '#FFE0C2' }}>
          <Text as="div" style={{ textAlign: 'center', justifyContent:'center', marginLeft:'336px', marginTop: '-210px', backgroundColor:'white', border:'2px solid #664282', color:'purple', width:'500px', height:'100px', borderRadius:'7%'}}>
            <h2>More about me</h2>
            </Text>
            <Text as="div" style={{ textAlign: 'center', marginTop: '120px' }}>
              <h4>My career in technology began with intensive web development training through FreeCodeCamp Courses, where I gained advanced skills in building
              complete applications, both front-end and back-end.
              In addition to my software development background, I have completed a course in teaching Spanish to foreigners. This course has enriched my skills
              in communication and content adaptation, which complements my approach to development and data analysis.
              Recently, I’ve supplemented my development experience with advanced training in data science through IBM’s courses. This education has equipped me
              with competencies in data analysis, machine learning, and data visualization, which I integrate into my projects to deliver intelligent, data-driven
              solutions.
              My goal is to merge my software development skills with data analysis to explore the fields of Artificial Intelligence and data science. I’m seeking
              opportunities that will allow me to contribute to innovative projects and continue growing professionally in these areas.
              Explore my portfolio to see how I combine software development with data science, and feel free to reach out to discuss how I can add value to your
              team or project.</h4>
            </Text>
          </Box>
        </Box>
        <Certifications certificates={certificates} />
    </>
  );
}

export default About;
