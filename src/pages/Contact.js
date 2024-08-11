// pages/Contact.js
import React from 'react';
import { Box, Text } from '@radix-ui/themes';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <Box style={{ display: 'flex' }}>
          <Box style={{ flex: 2, padding: '50px', backgroundColor: '#F6EEB4' }}>
          <Text as="div" style={{ textAlign: 'center', justifyContent:'center', marginLeft:'336px', marginTop: '-210px', backgroundColor:'#FFFFE9', border:'2px solid #664282', color:'purple', width:'500px', height:'100px', borderRadius:'7%'}}>
            <h2>Let'work together...</h2>
            </Text>
            <Text as="div" style={{ textAlign: 'center', marginTop: '120px', paddingBottom: '-100px', color: 'purple' }}>
              <h3>You can send me a message...</h3>
            </Text>
          </Box>
        </Box>
        <Box style={{ marginTop: '-80px' }}>
        <ContactForm />
      </Box>
    </>
  );
}

export default Contact;
