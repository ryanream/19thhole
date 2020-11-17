import React, { useState } from 'react';
import Map from '../../assets/map.png';
import iPhone from '../../assets/iPhone.png';
import Golf2 from '../../assets/golf2.png';
import ombre from '../../assets/blackberry-ombre.jpg';
import maple from '../../assets/Maple-Cranberry-Bourbon-Cocktail.jpg';
import peppermint from '../../assets/Peppermint-Bark-Martini.jpg';

const Home = () => {
  const [colorMe, setColor] = useState('');
  const styleIn = color => {
    setColor(colorMe => color);
  };
  const styleOut = () => {
    setColor(colorMe => '');
  };
  return (
    <div className='parent'>
      <div className='banner'>
        <h4 id='banner-text'>Save $20 on $1,500 with code HOLIDAYSPIRIT!</h4>
      </div>
      <div className='content'>
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
          <p className='left-center'>
            <p className='logo-text'>Nineteenth Hole</p>
            <p className='logo-text'>Liquors</p>
          </p>
          <div className='center'></div>
          <div className='right'>
            <div id='directions'>
              <a
                id='directions-link'
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
            </div>
            {/* <div id='bogo'>BOGO</div> */}
            <a id='bogo' href='tel:219-879-2980'>
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
        <div className='menu' style={{ backgroundColor: colorMe }}>
          {/* <div className='dropdowns'> */}
          <div className='grid-container dropdowns'>
            <button className='grid-item-1 beer'>Craft Beer</button>
            <button className='grid-item-2 wine'>Fine Wine</button>
          </div>
          <div className='dropdowns'>
            <button className='liquor'>Liquors</button>
            <button className='cordial'>Cordials</button>
          </div>
          {/* </div> */}
          <div className='search'>
            <input type='text' placeholder='  search' id='search-bar' />
          </div>
        </div>
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
        <div className='footer'>Footer</div>
      </div>
    </div>
  );
};

export default Home;
