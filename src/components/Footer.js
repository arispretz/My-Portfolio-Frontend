import React from 'react';
import { FaGithub, FaFreeCodeCamp, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import { Flex, Box, Text, IconButton, Link, Strong } from '@radix-ui/themes';
import { ArrowUpIcon } from '@radix-ui/react-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box as="footer" style={{ position: 'relative', padding: '20px', backgroundColor: '#664282', color: 'white', textAlign: 'center' }}>
      <Text>You can see my profile on:</Text>
      <Flex direction='row' justify='center' style={{ marginTop: '10px' }}>
        <IconButton variant="outline" as="span">
          <Link href="https://github.com/arispretz/arispretz.github.io" underline="hover" style={{ color: 'white', fontSize: '12px' }}><FaGithub />Github</Link>
        </IconButton>
        <span style={{ margin: '0 20px' }}></span>
        <IconButton variant="outline" as="span">
          <Link href="https://www.freecodecamp.org/fcc97a4612c-ace6-4fb2-8584-c09b0a37bd6f" underline="hover" style={{ color: 'white', fontSize: '10px' }}><FaFreeCodeCamp />freeCodeCamp</Link>
        </IconButton>
        <span style={{ margin: '0 20px' }}></span>
        <IconButton variant="outline" as="span">
          <Link href="https://www.linkedin.com/in/ariana-carolina-spretz-369040120/" underline="hover" style={{ color: 'white', fontSize: '12px' }}><FaLinkedin />Linkedin</Link>
        </IconButton>
        </Flex>
        <Box style={{ flex: 2, paddingTop: '20px', backgroundColor: '#664282', color: 'white' }}>
        <span style={{ margin: '6px' }}></span>
        <Text>You can download my CV:</Text>
        <IconButton variant="outline" as="span">
        <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '12px' }}><FaFilePdf /></Link>
        </IconButton>
        </Box>
        <Box style={{ flex: 2, paddingTop: '20px', backgroundColor: '#664282', color: 'white' }}>
        <span style={{ margin: '0 2px' }}></span>
      <Text><Strong>&copy; Created by Ariana Spretz</Strong></Text>
      <div onClick={scrollToTop} style={{ position: 'fixed', bottom: '24px', right: '24px', cursor: 'pointer', backgroundColor: '#333', borderRadius: '50%', padding: '10px' }}>
        <ArrowUpIcon style={{ width: '20px', height: '20px', color: 'white' }} />
      </div>
    </Box>
    </Box>
  );
}

export default Footer;
