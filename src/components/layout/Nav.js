import React from 'react';
import Map from '../../assets/map.png';
import iPhone from '../../assets/iPhone.png';
import Golf2 from '../../assets/golf2.png';

const Nav = () => {
  return (
    <div className='nav'>
      <div className='left'>
        <img
          id='logo'
          src={Golf2}
          style={{
            height: '80px',
            width: '80px',
          }}
        />
      </div>
      <div className='left-center'>
        <p className='logo-text'>Nineteenth Hole</p>
        <p className='logo-text'>Liquors</p>
      </div>
      <div className='white-space-fill' id='white-space-fill'>
        {/*I keep space!*/}
      </div>
      <div className='right'>
        <a
          id='directions'
          href='https://www.google.com/maps/dir//Nineteenth+Hole+Liquor+Store,+826+N+Karwick+Rd,+Michigan+City,+IN+46360/@41.7329426,-86.8581031,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8811063111533013:0x6583a73c7601cd62!2m2!1d-86.855909!2d41.7329386!3e0'
        >
          <p>Directions</p>
          <img
            src={Map}
            style={{
              height: '50px',
              width: '50px',
            }}
          />
        </a>

        <a id='connect' href='tel:219-879-2980'>
          <p>Call Us</p>
          <img
            src={iPhone}
            style={{
              padding: '1%',
              height: '50px',
              width: '50px',
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Nav;
