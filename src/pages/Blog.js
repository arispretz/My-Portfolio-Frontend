// pages/Blog.js
import React from 'react';
import { Text, Box } from '@radix-ui/themes';

const Blog = () => {
  return (
    <>
      <Box style={{ display: 'flex' }}>
          <Box style={{ flex: 2, padding: '50px', backgroundColor: '#DAF7A6', height: '400px' }}>
          <Text as="div" style={{ textAlign: 'center', justifyContent:'center', marginLeft:'336px', marginTop: '-210px', backgroundColor:'#FFFFE9', border:'2px solid #664282', color:'purple', width:'500px', height:'100px', borderRadius:'7%'}}>
            <h2>Blog</h2>
            </Text>
          <Text as="p" style={{ textAlign: 'center', marginTop: '150px', fontWeight: 'bold', color: 'purple', fontSize: '20px'}}>
          <p>Coming Soon...</p>
        </Text>
        </Box>
        </Box>
    </>
  );
}

export default Blog;
