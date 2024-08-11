import React from 'react';
import { Flex, Avatar } from '@radix-ui/themes';
import Ariana from '../images/Ariana.jpg';

const Picture = () => {
  return (
          <div className='container'>
            <Flex gap="3" align="center">
              <Avatar
                size="7"
                src={Ariana} alt='Ariana'
                radius="full"
              />
            </Flex>
          </div>
  );
}

export default Picture;
