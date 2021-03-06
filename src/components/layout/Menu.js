import React, { useState } from 'react';
import FadeIn from 'react-fade-in';

const Menu = () => {
  // const hideMenu = () => {
  //   setCurrentMenu(false);
  // };

  ///////////////////////////////////////////////////
  // lots of states, but they work
  const [beerdrop, setBeerdrop] = useState(() => {});
  const [winedrop, setWinedrop] = useState(() => {});
  const [liquordrop, setLiquordrop] = useState(() => {});
  const [cordialsdrop, setCordialsdrop] = useState(() => {});

  const showMeTheBeer = () => {
    setBeerdrop(beerdrop => true);
  };
  const hideTheBeer = () => {
    setBeerdrop(beerdrop => false);
  };

  //wine
  const showMeTheWine = () => {
    setWinedrop(winedrop => true);
  };
  const hideTheWine = () => {
    setWinedrop(winedrop => false);
  };

  //liquor
  const showMeTheLiquor = () => {
    setLiquordrop(liquordrop => true);
  };
  const hideTheLiquor = () => {
    setLiquordrop(liquordrop => false);
  };

  //cordials
  const showMeTheCordials = () => {
    setCordialsdrop(cordialsdrop => true);
  };
  const hideTheCordials = () => {
    setCordialsdrop(cordialsdrop => false);
  };

  return (
    // 3 - search, spacer, btn row
    <div className='menu-bar' id='menu-bar'>
      <div className='search'>
        <input type='text' placeholder='  search' id='search-bar' />
      </div>
      <div className='white-space-fill' id='white-space-fill' />{' '}
      {/* SPACE BAR */}
      {/* 4 - row of dropdown btns */}
      <div className='menu-buttons' id='menu-buttons'>
        {/* 2 - beer btn, beer drop menu */}
        <div onMouseLeave={hideTheBeer} className='drop-container'>
          <button
            onMouseEnter={showMeTheBeer}
            className='drop-button'
            id='beer'
          >
            {' '}
            Craft Beer{' '}
          </button>

          {beerdrop ? (
            // FADE THIS ENTIRE DIV?
            <div className='drop-menu'>
              <FadeIn delay={100} transitionDuration={500}>
                <div className='drop-item'>
                  {/* prettier-ignore */}
                  <a href='https://burnembrewing.com/' target='_blank' rel='noopener noreferrer' > {' '} Burn 'Em{' '} </a>
                </div>
                <div className='drop-item'>
                  {/* prettier-ignore */}
                  <a href='https://www.greenbushbrewing.com/' target='_blank' rel='noopener noreferrer' > {' '} Greenbush{' '} </a>
                </div>
                <div className='drop-item'>
                  {/* prettier-ignore */}
                  <a href='https://www.3floyds.com/' target='_blank' rel='noopener noreferrer' > {' '} 3 Floyds{' '} </a>
                </div>
                <div className='drop-item'>
                  {/* prettier-ignore */}
                  <a href='http://zornbrewworks.com/' target='_blank' rel='noopener noreferrer' > {' '} Zorn{' '} </a>
                </div>
              </FadeIn>
            </div>
          ) : null}
        </div>
        {/* 2 - wine btn, wine drop menu  */}
        <div
          // onMouseEnter={dropMenu('wine')}

          onMouseLeave={hideTheWine}
          className='drop-container'
        >
          <button
            onMouseEnter={showMeTheWine}
            className='drop-button'
            id='wine'
          >
            {' '}
            Fine Wine{' '}
          </button>

          {/* {currentMenu === 'wine' ? ( */}
          {winedrop ? (
            <div className='drop-menu'>
              <FadeIn delay={100} transitionDuration={500}>
                {' '}
                <div className='drop-item'>
                  {/* prettier-ignore */}
                  <a href='https://burnembrewing.com/' target='_blank' rel='noopener noreferrer' > {' '} Fine Wines Here{' '} </a>
                </div>
                <div className='drop-item'>
                  {/* prettier-ignore */}
                  <a href='https://www.greenbushbrewing.com/' target='_blank' rel='noopener noreferrer' > {' '} Fancy Wine{' '} </a>
                </div>
                <div className='drop-item'>
                  {/* prettier-ignore */}
                  <a href='https://www.3floyds.com/' target='_blank' rel='noopener noreferrer' > {' '} Burgundy{' '} </a>
                </div>
                <div className='drop-item'>
                  {/* prettier-ignore */}
                  <a href='http://zornbrewworks.com/' target='_blank' rel='noopener noreferrer' > {' '} I need ice!{' '} </a>
                </div>
              </FadeIn>
            </div>
          ) : null}
        </div>

        {/* 2 - liquor btn, liquor drop menu */}
        <div
          // onMouseEnter={dropMenu('liquor')}

          onMouseLeave={hideTheLiquor}
          className='drop-container'
        >
          <button
            onMouseEnter={showMeTheLiquor}
            className='drop-button'
            id='liquor'
          >
            {' '}
            Liquor{' '}
          </button>

          {/* {currentMenu === 'liquor' ? ( */}
          {liquordrop ? (
            // 4 - liquor menu items
            <div className='drop-menu'>
              <FadeIn delay={100} transitionDuration={500}>
                <div className='drop-item'>
                  {/* prettier-ignore */}
                  <a href='https://burnembrewing.com/' target='_blank' rel='noopener noreferrer' > {' '} Bourbons{' '} </a>
                </div>
                <div className='drop-item'>
                  {/* prettier-ignore */}
                  <a href='https://www.greenbushbrewing.com/' target='_blank' rel='noopener noreferrer' > {' '} Vodka{' '} </a>
                </div>
                <div className='drop-item'>
                  {/* prettier-ignore */}
                  <a href='https://www.3floyds.com/' target='_blank' rel='noopener noreferrer' > {' '} Gin{' '} </a>
                </div>
                <div className='drop-item'>
                  {/* prettier-ignore */}
                  <a href='http://zornbrewworks.com/' target='_blank' rel='noopener noreferrer' > {' '} Tequila (Mockingbird){' '} </a>
                </div>
              </FadeIn>
            </div>
          ) : null}
        </div>

        {/* 2 - Cordials btn, cordials drop menu */}
        <div
          // onMouseEnter={dropMenu('cordials')}

          onMouseLeave={hideTheCordials}
          className='drop-container'
        >
          <button
            onMouseEnter={showMeTheCordials}
            className='drop-button'
            id='cordials'
          >
            {' '}
            Cordials{' '}
          </button>

          {/* {currentMenu === 'cordials' ? ( */}
          {cordialsdrop ? (
            // 4 - Cordials menu items
            <div className='drop-menu'>
              <FadeIn delay={100} transitionDuration={500}>
                <div className='drop-item'>
                  {/* prettier-ignore */}
                  <a href='https://burnembrewing.com/' target='_blank' rel='noopener noreferrer' > {' '} Cordials Here{' '} </a>
                </div>
                <div className='drop-item'>
                  {/* prettier-ignore */}
                  <a href='https://www.greenbushbrewing.com/' target='_blank' rel='noopener noreferrer' > {' '} Mixers Too{' '} </a>
                </div>
                <div className='drop-item'>
                  {/* prettier-ignore */}
                  <a href='https://www.3floyds.com/' target='_blank' rel='noopener noreferrer' > {' '} Another Sweet One{' '} </a>
                </div>
                <div className='drop-item'>
                  {/* prettier-ignore */}
                  <a href='http://zornbrewworks.com/' target='_blank' rel='noopener noreferrer' > {' '} Sugar For You{' '} </a>
                </div>
              </FadeIn>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Menu;
