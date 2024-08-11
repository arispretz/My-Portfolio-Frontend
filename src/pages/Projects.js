// pages/Projects.js
import React from 'react';
import { Box, Text } from '@radix-ui/themes';
import ProjectsGrid from '../components/ProjectsGrid';

const Projects = () => {
  return (
    <>
      <Box style={{ display: 'flex' }}>
          <Box style={{ flex: 2, padding: '50px', backgroundColor: '#FFE0C2' }}>
          <Text as="div" style={{ textAlign: 'center', justifyContent:'center', marginLeft:'336px', marginTop: '-210px', backgroundColor:'#FFFFE9', border:'2px solid #664282', color:'purple', width:'500px', height:'100px', borderRadius:'7%'}}>
            <h2>These are some of my Projects</h2>
            </Text>
          </Box>
        </Box>
        <ProjectsGrid />
    </>
  );
}

export default Projects;
