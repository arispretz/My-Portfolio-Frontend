import React from 'react';
import background from '../images/background.png';
import violet from '../images/violet.png';

const Header = () => {
  return (
    <div className='container'>
      <img className='header' src={background} alt="background" />
      <img className='flower1' src={violet} alt="violet" />
      <img className='flower2' src={violet} alt="violet" />
    </div>
  );
}

export default Header;
