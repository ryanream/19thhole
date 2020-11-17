import React from 'react';
import ombre from '../../assets/blackberry-ombre.jpg';
import maple from '../../assets/Maple-Cranberry-Bourbon-Cocktail.jpg';
import peppermint from '../../assets/Peppermint-Bark-Martini.jpg';

const Body = () => {
  return (
    <div className='body'>
      <div>
        <img
          style={{ height: '300px', width: '300px' }}
          src={ombre}
          alt='...'
        />
      </div>
      <div>
        <img
          style={{ height: '300px', width: '300px' }}
          src={maple}
          alt='...'
        />
      </div>
      <div>
        <img
          style={{ height: '300px', width: '300px' }}
          src={peppermint}
          alt='...'
        />
      </div>
      {/* images */}
      {/* images */}
    </div>
  );
};

export default Body;
