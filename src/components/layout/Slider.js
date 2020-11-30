import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import Fade from 'react-reveal/Fade';
import Lights from '../../assets/lights-color.png';
// import useWindowSize from '../hooks/useWindowSize';

const Slider = () => {
  const [slider, setSlider] = useState(() => {});

  const [styleState, setStyleState] = useState({
    contentIndex: '-1',
    position: 'absolute',
    color: '#ee6c4d',
  });

  const visibility = styleState.visibility;
  const contentIndex = styleState.contentIndex;
  const menuIndex = styleState.menuIndex;
  const color = styleState.color;

  const toggleSlider = () => {
    if (slider !== true) {
      // display slide menu

      setSlider(slider => true);

      setStyleState(state => {
        // prettier-ignore
        return { ...state, contentIndex: '6', menuIndex:'6', color: '#293241', visibility: 'visible', };
      });
    } else {
      // hide slide menu

      setSlider(slider => false);

      setTimeout(() => {
        setStyleState(state => {
          return { ...state, menuIndex: '' };
        });
      }, 500);

      setStyleState(state => {
        // prettier-ignore
        return { ...state, contentIndex: '-1',visibility:'', color: '#ee6c4d' };
      });
    }
  };

  return (
    <div
      // style={{ styleState }}
      className='slide-menu-container'
      id='slide-menu-container'
      style={{ zIndex: menuIndex }}
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
          className='slide-content-container'
          id='slide-content-container'
          style={{ styleState }}
        >
          <div
            className='slide-title'
            id='slide-title'
            style={{ backgroundImage: 'url(' + Lights + ')' }}
          >
            <div
              className='slide-title-text-container'
              id='slide-title-text-container'
            >
              <p id='title-text'>Holiday </p>
              <p id='title-text'> Specialties</p>
            </div>
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
