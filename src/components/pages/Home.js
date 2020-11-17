import React, { useState } from 'react';
import Map from '../../assets/map.png';
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
        <h4>Save $20 on $150 with code HOLIDAYSPIRIT!</h4>
      </div>
      <div className='content'>
        <div className='nav'>
          <div className='left'>Nineteenth Hole Liquors</div>
          <div className='center'></div>
          <div className='right'>
            <div id='directions'>
              <a href='https://www.google.com/maps/dir//Nineteenth+Hole+Liquor+Store,+826+N+Karwick+Rd,+Michigan+City,+IN+46360/@41.7329426,-86.8581031,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8811063111533013:0x6583a73c7601cd62!2m2!1d-86.855909!2d41.7329386!3e0'>
                <p>Directions</p>
                <img src={Map} style={{ height: '50px', width: '50px' }} />
              </a>
            </div>
            <div id='bogo'>BOGO!</div>
          </div>
        </div>
        <div className='menu' style={{ backgroundColor: colorMe }}>
          <div className='dropdowns'>
            <button
              className='beer'
              onMouseEnter={styleIn}
              //   onMouseLeave={styleOut}
            >
              Craft Beer
            </button>
            <button style={{ backgroundColor: colorMe }} className='wine'>
              Fine Wine
            </button>
            <button className='liquor'>Liquors</button>
            <button className='cordial'>Cordials</button>
          </div>
          <div className='search'>
            <input type='text' placeholder='search' id='search-bar' />
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
