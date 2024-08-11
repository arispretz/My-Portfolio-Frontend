// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Strong } from '@radix-ui/themes';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/"><Strong>Home</Strong></Link></li>
        <li><Link to="/about"><Strong>About</Strong></Link></li>
        <li><Link to="/projects"><Strong>Projects</Strong></Link></li>
        <li><Link to="/contact"><Strong>Contact</Strong></Link></li>
        <li><Link to="/blog"><Strong>Blog</Strong></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
