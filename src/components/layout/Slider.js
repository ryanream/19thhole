import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import Fade from 'react-reveal/Fade';
import Lights from '../../assets/lights-color.png';
// import useWindowSize from '../hooks/useWindowSize';

const Slider = () => {
  const [slider, setSlider] = useState(() => {});

  const [styleState, setStyleState] = useState({
    index: '-1',
    position: 'absolute',
    color: '#ee6c4d',
  });

  const visibility = styleState.visibility;
  const index = styleState.index;
  const color = styleState.color;

  const toggleSlider = () => {
    if (slider !== true) {
      // display slide menu
      setSlider(slider => true);

      setStyleState(state => {
        return {
          ...state,
          index: '6',
          color: '#293241',
          visibility: 'visibile !important',
        };
      });
      // setDisplay(display => (display = 'none'));
      // setColor(color => (color = '#293241'));
    } else {
      // hide slide menu

      setSlider(slider => false);
      setStyleState(state => {
        return {
          ...state,
          index: '-1',
          color: '#ee6c4d',
        };
      }); // setDisplay(display => (display = 'none'));
      // setColor(color => (color = '#ee6c4d'));
    }
    console.log('zIndex = ');
    // console.log(zIndex);
  };
  // on slide=true, send prop to body to hide overflow?

  return (
    <div
      // style={{ styleState }}
      className='slide-menu-container'
      id='slide-menu-container'
      // style={{ zIndex: index }}
    >
      <div
        className='hamburger-icon-container'
        id='hamburger-icon-container'
        style={{ visibility: visibility }}
      >
        <Hamburger
          size={50}
          color={color}
          id='hamburger'
          className='hamburger'
          onToggle={toggleSlider}
        />
      </div>
      {/* {window.innerWidth <= 500 ? ( */}
      {/* style={{ position: 'absolute' }} */}
      <Fade left when={slider === true}>
        <div
          className='slide-container'
          id='slide-container'
          style={{ styleState }}
        >
          <div className='slide-title' id='slide-title'>
            <img id='title-img' src={Lights} alt='holiday lights drawing' />
            <p id='title-text'>Holiday </p>
            <p id='title-text'> Specialties</p>
          </div>
          <div className='slide-content' id='slide-content'>
            <div className='slidepage-button-container'>
              <button className='slide-menu-button' id='slide-menu-button'>
                Bourbon Box Sets
              </button>
            </div>
            <div className='slidepage-button-container'>
              <button className='slide-menu-button' id='slide-menu-button'>
                Eggnogg!!
              </button>
            </div>
            <div className='slidepage-button-container'>
              <button className='slide-menu-button' id='slide-menu-button'>
                Cases of Wine
              </button>
            </div>
            <div className='slidepage-button-container'>
              <button
                className='slide-menu-button'
                id='slide-menu-button'
              ></button>
            </div>
            <div className='slidepage-button-container'>
              <button
                className='slide-menu-button'
                id='slide-menu-button'
              ></button>
            </div>
          </div>
        </div>
      </Fade>
      {/* ) : null} */}
    </div>
  );
};

export default Slider;
