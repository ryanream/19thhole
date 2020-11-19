import React from 'react';

const Menu = () => {
  return (
    <div className='menu'>
      <div className='search'>
        <input type='text' placeholder='  search' id='search-bar' />
      </div>
      <div className='white-space-fill' id='white-space-fill'>
        {/*I keep space!*/}
      </div>
      <div className='dropdowns' id='dropdowns'>
        <button className='beer'>Craft Beer</button>
        <button className='wine'>Fine Wine</button>
        <button className='liquor'>Liquors</button>
        <button className='cordial'>Cordials</button>
      </div>
    </div>
  );
};

export default Menu;
