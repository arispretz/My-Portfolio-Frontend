import React from 'react';
import { Box, Text, Em } from '@radix-ui/themes';
import Skills from '../components/Skills';
import Picture from '../components/Picture.js';

const Home = () => {
  return (
    <>
      <Box style={{ display: 'flex' }}>
        <Box style={{ flex: 2, padding: '50px', backgroundColor: '#FFE0C2' }}>
          <Text as="div" style={{ textAlign: 'center', justifyContent: 'center', marginLeft: '300px', marginTop: '-250px', backgroundColor: 'white', border: '2px solid #664282', color: '#450c49', width: '600px', height: '150px', borderRadius: '7%', display: 'flex', alignItems: 'center' }}>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              <Picture style={{ width: '50px', height: '50px', marginRight: '50px' }} />
              <h1>Hello, I am <Em>Ariana Spretz</Em></h1>
            </Box>
          </Text>
          <Text as="div" style={{ textAlign: 'center', marginTop: '120px' }}>
            <h2>a Full Stack Developer with experience</h2> 
            <h2>in JavaScript and Python,</h2>
            <h2>and a passionate data science enthusiast.</h2>
          </Text>
        </Box>
      </Box>
      <Skills />
    </>
  );
};

export default Home;
