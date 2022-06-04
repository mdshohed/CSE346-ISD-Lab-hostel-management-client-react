import React from 'react';
import notFound from '../../assets/images/error.jpg'

const NotFound = () => {
  return (
    <div className='flex justify-center'>
      <img src={notFound} alt="" />
    </div>
  );
};

export default NotFound;