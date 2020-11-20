import React from 'react';
import Map from '../../assets/map.png';
import iPhone from '../../assets/iPhone.png';
import Golf2 from '../../assets/golf2.png';

const Nav = () => {
  return (
    // 2 - Contains logo and connect boxes
    <div className='nav' id='nav'>
      <div className='logo-container'>
        <img
          id='logo-img'
          src={Golf2}
          style={{
            height: '80px',
            width: '80px',
          }}
        />
        <div className='left-center-container'>
          <p className='logo-text' id='logo-text'>
            Nineteenth Hole
          </p>
          <p className='logo-text' id='logo-text'>
            Liquors
          </p>
        </div>
      </div>

      <div className='right-container'>
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
